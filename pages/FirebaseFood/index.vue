<template>
  <h1>FirebaseFood Page</h1>

  <p class="mb-2">
    目前排序：<strong>{{ sortKey || "無" }}</strong>
    <span v-if="sortKey">{{ sortAsc ? "🔼 升冪" : "🔽 降冪" }}</span>
  </p>

  <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
      <thead>
        <tr>
          <th>#</th>
          <th @click="sort('foodname')" class="cursor-pointer select-none">
            foodname <span>{{ arrow("foodname") }}</span>
          </th>
          <th @click="sort('foodbrand')" class="cursor-pointer select-none">
            foodbrand <span>{{ arrow("foodbrand") }}</span>
          </th>
          <th @click="sort('foodstore')" class="cursor-pointer select-none">
            foodstore <span>{{ arrow("foodstore") }}</span>
          </th>
          <th @click="sort('foodprice')" class="cursor-pointer select-none">
            foodprice <span>{{ arrow("foodprice") }}</span>
          </th>
          <th @click="sort('foodamount')" class="cursor-pointer select-none">
            foodamount <span>{{ arrow("foodamount") }}</span>
          </th>
          <th @click="sort('fooddate')" class="cursor-pointer select-none">
            fooddate <span>{{ arrow("fooddate") }}</span>
          </th>
          <th @click="sort('id')" class="cursor-pointer select-none">
            id <span>{{ arrow("id") }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(food, idx) in sortedFoods" :key="food.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ food.foodname }}</td>
          <td>{{ food.foodbrand }}</td>
          <td>{{ food.foodstore }}</td>
          <td>{{ food.foodprice }}</td>
          <td>{{ food.foodamount }}</td>
          <td>{{ food.fooddate }}</td>
          <td>{{ food.id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 抓取資料
const { data } = await useFetch("/api/firebasefood");
const foods = ref(data.value.myvue3food || []);

// 排序欄位與方向
const sortKey = ref("");
const sortAsc = ref(true);

// 點擊排序欄位切換排序
function sort(key) {
  if (sortKey.value === key) {
    sortAsc.value = !sortAsc.value;
  } else {
    sortKey.value = key;
    sortAsc.value = true;
  }
}

// 顯示箭頭
function arrow(key) {
  if (sortKey.value !== key) return "";
  return sortAsc.value ? "🔼" : "🔽";
}

// 輔助解析日期 YYYY-MM-DD 或 YYYY/MM/DD
function parseYMDDate(str) {
  if (typeof str !== "string") return 0;
  const normalized = str.replace(/\//g, "-");
  const parts = normalized.split("-");
  if (parts.length === 3) {
    const [y, m, d] = parts.map(Number);
    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
      return new Date(y, m - 1, d).getTime();
    }
  }
  return 0;
}

// 排序資料 computed
const sortedFoods = computed(() => {
  if (!sortKey.value) return foods.value;

  return [...foods.value].sort((a, b) => {
    let v1 = a[sortKey.value];
    let v2 = b[sortKey.value];

    if (sortKey.value === "fooddate") {
      const t1 = parseYMDDate(v1);
      const t2 = parseYMDDate(v2);
      return sortAsc.value ? t1 - t2 : t2 - t1;
    }

    const n1 = parseFloat(v1);
    const n2 = parseFloat(v2);
    if (!isNaN(n1) && !isNaN(n2)) {
      return sortAsc.value ? n1 - n2 : n2 - n1;
    }

    return sortAsc.value
      ? String(v1).localeCompare(String(v2))
      : String(v2).localeCompare(String(v1));
  });
});
</script>
