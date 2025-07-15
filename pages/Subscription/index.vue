<template>
  <div class="container">
    <h2>訂閱清單 (共 {{ data?.total || 0 }} 筆)</h2>
    <div v-if="loading">讀取中...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <ul v-if="data && data.documents.length">
      <li v-for="doc in data.documents" :key="doc.$id" class="item">
        <h3>
          <a :href="doc.site" target="_blank" rel="noopener noreferrer">{{
            doc.name
          }}</a>
        </h3>
        <p><strong>帳號:</strong> {{ doc.account }}</p>
        <p>
          <strong>價格:</strong>
          {{ doc.currency }} {{ doc.price }}
          <span v-if="doc.currency === 'USD'">
            （約 NT$ {{ Math.round(doc.price * 30) }}）
          </span>
        </p>
        <p>
          <strong>下次日期:</strong>
          {{ doc.nextdate ? new Date(doc.nextdate).toLocaleString() : "無" }}
        </p>
        <p>
          <strong>備註:</strong><br />{{ doc.note.replace(/\n/g, '<br />') }}
        </p>
        <p>
          <small
            >建立時間: {{ new Date(doc.$createdAt).toLocaleString() }}</small
          >
        </p>
      </li>
    </ul>
    <div v-else>沒有訂閱資料</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const data = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchData = async () => {
  loading.value = true;
  error.value = null;
  try {
    const res = await fetch(
      "https://fastapitsaopaofenghsiung2025.up.railway.app/subscription"
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data.value = await res.json();
  } catch (err) {
    error.value = err.message || "讀取資料失敗";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 10px;
  font-family: Arial, sans-serif;
}
.item {
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
}
.item h3 {
  margin: 0 0 5px 0;
}
.error {
  color: red;
  margin-bottom: 10px;
}
</style>
