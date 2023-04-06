<template>
  <div v-for="todo in data" :key="todo.id">
    <span @click="toggleCompleted(todo)">
      Todo: {{ todo.text }} with id : {{ todo.id }}</span
    >
    <span>Status: {{ todo.completed ? "Completed" : "Undone" }}</span>
    <span @click="deleteTodo(todo)">Delete ToDo</span>
  </div>
</template>

<script setup lang="ts">
const { data, refresh } = useFetch("/api/todo");


const toggleCompleted = async (todo) => {
  await useFetch(`/api/todo/${todo.id}`, {
    method: "PUT",
    onResponseError({ error }) {
      console.log(error);
    },
    onResponse({}) {
      refresh();
    },
  });
};

const deleteTodo = async (todo) => {
  await useFetch(`/api/todo/${todo.id}`, {
    method: "DELETE",
    onResponseError({ error }) {
      console.log(error);
    },
    onResponse({}) {
      refresh();
    },
  });
};
</script>
