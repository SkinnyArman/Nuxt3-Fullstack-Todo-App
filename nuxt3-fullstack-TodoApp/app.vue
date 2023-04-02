<template>
  <div v-for="todo in data" :key="todo.id">
    {{ todo.text }}
  </div>
</template>

<script setup lang="ts">
const { data } = useFetch("/api/todo");
console.log(data.value);

// await $fetch("/api/todo", {
//   method: "POST",
//   body: { text: "im naive", completed: false },
// });
</script>
