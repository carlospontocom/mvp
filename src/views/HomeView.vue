<template>
  <div class="home-view">
    <div class="hero-section">
      <input type="text" placeholder="Nome completo" v-model="nome" />
      <span v-if="erroNome">{{ erroNome }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const nome = ref<string>('');
const erroNome = ref<string>('');
</script>

<style scoped lang="scss">
@use '../styles/views/home.scss';
</style>
