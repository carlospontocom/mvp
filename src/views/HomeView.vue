<template>
 <section id="home" class="home-section">
    

<div>
  <h1>FAQ-Atendimento</h1>
  <div class="tema">
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
