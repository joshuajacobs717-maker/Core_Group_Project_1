<script setup>
import Header from './components/Header.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const showSidebar = computed(() => route.path !== '/login')
</script>

<template>
  <div class="layout">
  <Header v-if="showSidebar" />
  <div class="main-content">
    <router-view />
  </div>
</div>

</template>

<style>
.layout {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s;
}
</style>
