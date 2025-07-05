<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">🍱 餐點管理系統</h1>

    <!-- 搜尋 -->
    <input
      v-model="keyword"
      placeholder="搜尋名稱或店家"
      class="input input-bordered w-full mb-4"
    />

    <!-- 新增餐點表單 -->
    <form
      @submit.prevent="createFood"
      class="mb-6 p-4 bg-base-100 shadow rounded space-y-4"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          v-model="newFood.name"
          placeholder="名稱"
          required
          class="input input-bordered"
        />
        <input
          v-model.number="newFood.amount"
          type="number"
          placeholder="數量"
          required
          class="input input-bordered"
        />
        <input
          v-model.number="newFood.price"
          type="number"
          placeholder="價格"
          required
          class="input input-bordered"
        />
        <input
          v-model="newFood.shop"
          placeholder="店家"
          required
          class="input input-bordered"
        />
        <input
          v-model="newFood.todate"
          type="date"
          required
          class="input input-bordered"
        />
      </div>

      <!-- 圖片上傳 -->
      <input type="file" accept="image/*" @change="handleFileChange" />

      <div v-if="previewUrl" class="mt-4 max-w-xs relative">
        <img :src="previewUrl" class="rounded w-full object-cover" />
        <button
          @click="removePhoto"
          type="button"
          class="btn btn-sm btn-error absolute top-1 right-1"
        >
          ✕
        </button>
      </div>

      <button type="submit" class="btn btn-primary w-full">新增餐點</button>
    </form>

    <!-- 資料列表 -->
    <table class="table table-zebra w-full">
      <thead>
        <tr>
          <th>名稱</th>
          <th>數量</th>
          <th>價格</th>
          <th>店家</th>
          <th>日期</th>
          <th>圖片</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="food in filteredFoods" :key="food.$id">
          <td>{{ food.name }}</td>
          <td>{{ food.amount }}</td>
          <td>{{ food.price }}</td>
          <td>{{ food.shop }}</td>
          <td>{{ formatDate(food.todate) }}</td>
          <td>
            <img
              v-if="food.photo"
              :src="food.photo"
              alt="圖片"
              class="w-16 h-16 object-cover rounded cursor-pointer"
              @click="showLightbox(food.photo)"
            />
          </td>
          <td>
            <button @click="deleteFood(food.$id)" class="btn btn-sm btn-error">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="loading" class="mt-4 text-gray-500">讀取中...</p>
    <p v-if="error" class="mt-4 text-error">錯誤：{{ error }}</p>

    <!-- Vue Easy Lightbox 組件 -->
    <vue-easy-lightbox
      :visible="lightboxVisible"
      :imgs="lightboxImgs"
      @hide="hideLightbox"
    ></vue-easy-lightbox>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  databases,
  databaseId,
  collectionId,
  storage,
  ID,
  Query, // 引入 Query
} from "../../server/utils/appwriteClient";
import VueEasyLightbox from "vue-easy-lightbox";

// Lightbox 相關的響應式變數
const lightboxVisible = ref(false);
const lightboxImgs = ref([]);

const keyword = ref("");
const foods = ref([]);
const loading = ref(false);
const error = ref("");
const newFood = ref({
  name: "",
  amount: 1,
  price: 1,
  shop: "",
  todate: "",
  photo: null,
});
const previewUrl = ref("");

const filteredFoods = computed(() =>
  foods.value.filter(
    (f) =>
      f.name.toLowerCase().includes(keyword.value.toLowerCase()) ||
      f.shop.toLowerCase().includes(keyword.value.toLowerCase())
  )
);

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toISOString().split("T")[0];
}

function handleFileChange(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  newFood.value.photo = file;
  previewUrl.value = URL.createObjectURL(file);
}

function removePhoto() {
  newFood.value.photo = null;
  previewUrl.value = "";
}

async function fetchFoods() {
  loading.value = true;
  error.value = "";
  try {
    const res = await databases.listDocuments(databaseId, collectionId);
    foods.value = res.documents;
  } catch (e) {
    // 將 .catch 的邏輯移到 try...catch 區塊中
    error.value = e.message || "取得資料失敗";
  } finally {
    // finally 塊可以放在 try...catch 之後
    loading.value = false;
  }
}

// 新增：計算文件哈希值的輔助函數
async function calculateFileHash(file) {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

async function uploadPhoto(file) {
  const bucketId = "6867c5280021205ba9c0";
  const folderPath = "image/food/"; // 您希望的「資料夾」路徑
  const fileName = folderPath + file.name; // 將路徑和原始文件名組合

  try {
    const fileHash = await calculateFileHash(file); // 計算文件哈希值
    console.log("計算出的文件哈希值:", fileHash);

    // 1. 查詢資料庫中是否已經存在相同哈希值的圖片
    const existingDocs = await databases.listDocuments(
      databaseId,
      collectionId,
      [
        Query.equal("photoHash", fileHash), // 查詢 photoHash 屬性
        Query.limit(1), // 只獲取一個結果
      ]
    );

    if (existingDocs.documents.length > 0) {
      const existingPhotoUrl = existingDocs.documents[0].photo;
      console.log("發現重複圖片，使用現有 URL:", existingPhotoUrl);
      return existingPhotoUrl; // 返回現有圖片的 URL 字串
    }

    // 如果沒有找到重複圖片，則執行上傳
    console.log("uploadPhoto: 正在調用 storage.createFile...");
    const fileRes = await storage.createFile(
      bucketId,
      ID.unique(),
      file,
      [],
      fileName
    );
    console.log("uploadPhoto: storage.createFile 成功，fileRes:", fileRes);
    const fileView = storage.getFileView(bucketId, fileRes.$id);
    console.log("uploadPhoto: storage.getFileView 成功，fileView:", fileView);
    return fileView; // 返回 FileView 物件
  } catch (uploadErr) {
    console.error("uploadPhoto: 文件上傳或獲取視圖失敗！錯誤訊息:", uploadErr);
    throw uploadErr;
  }
}

async function createFood() {
  try {
    let finalPhotoUrl = null;
    let photoHash = null; // 新增一個變數來儲存圖片哈希值

    if (newFood.value.photo) {
      console.log("嘗試上傳圖片...");
      photoHash = await calculateFileHash(newFood.value.photo); // 先計算哈希值

      const uploadResult = await uploadPhoto(newFood.value.photo);

      if (typeof uploadResult === "string") {
        // 如果返回的是字串，表示是重複圖片的 URL
        finalPhotoUrl = uploadResult;
      } else {
        // 如果返回的是 FileView 物件，表示是新上傳的圖片
        finalPhotoUrl = uploadResult; // 這裡仍然是 FileView 物件，在 createDocument 前會自動轉為 URL
      }
      console.log("圖片上傳/獲取成功，最終 URL 為:", finalPhotoUrl);
    } else {
      console.log("沒有選擇圖片，photoUrl 將為 null。");
    }

    // 構建要傳遞給 createDocument 的數據物件
    const documentData = {
      name: newFood.value.name.trim(),
      amount: newFood.value.amount,
      price: newFood.value.price,
      shop: newFood.value.shop.trim(),
      todate: newFood.value.todate,
    };

    // 只有當 finalPhotoUrl 有值時才添加 photo 屬性
    if (finalPhotoUrl) {
      documentData.photo = finalPhotoUrl;
      documentData.photoHash = photoHash; // 將哈希值也儲存到資料庫
    }

    console.log("最終要儲存的 documentData:", documentData);

    await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      documentData
    );
    await fetchFoods();
    newFood.value = {
      name: "",
      amount: 1,
      price: 1,
      shop: "",
      todate: "",
      photo: null,
    };
    previewUrl.value = "";
  } catch (e) {
    alert("新增失敗：" + e.message);
  }
}

async function deleteFood(id) {
  if (!confirm("確定刪除？")) return;
  try {
    await databases.deleteDocument(databaseId, collectionId, id);
    await fetchFoods();
  } catch (e) {
    alert("刪除失敗：" + e.message);
  }
}

onMounted(fetchFoods);

// Lightbox 相關的函數
function showLightbox(imgUrl) {
  lightboxImgs.value = [imgUrl]; // 將要顯示的圖片 URL 放入陣列
  lightboxVisible.value = true; // 顯示 Lightbox
}

function hideLightbox() {
  lightboxVisible.value = false; // 隱藏 Lightbox
  lightboxImgs.value = []; // 清空圖片陣列
}
</script>

<style>
/* 可以添加一些自定義樣式，例如讓圖片在表格中顯示為手型游標 */
.cursor-pointer {
  cursor: pointer;
}
</style>
