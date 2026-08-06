<template>
 <section id="home" class="home-section">
    

<div class="aside-content">
  <div class="logo">
    <span class="top">FAQ-Atendimento</span>
    <span class="bottom">Gestão SAC</span>
  </div>
  <div class="temas">
    <span>perguntar.</span>
    <span>pesquisar.</span>
    <span>responder.</span>
    <span>atualizar.</span>
    <span>apagar.</span>
  </div>
  <LoginView/> 
</div>

 </section>

</template>

<script setup lang="ts">
  import LoginView from '../views/LoginView.vue';
 </script>

<style scoped lang="scss">
   @use '../styles/homeView.scss';
</style>
