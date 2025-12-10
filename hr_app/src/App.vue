<script setup>
import Header from './components/Header.vue'   // ← This is your SIDEBAR
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Hide sidebar on login page
const showSidebar = computed(() => route.path !== '/login')
</script>

<template>
  <div class="layout">

    <!-- LEFT SIDEBAR -->
    <Header v-if="showSidebar" />

    <!-- RIGHT CONTENT AREA -->
    <div class="main-content">
      <router-view />
    </div>

  </div>
</template>

<style>
.layout {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* The page area */
.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>