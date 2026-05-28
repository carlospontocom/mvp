<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          Vue App
        </router-link>
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contatos" class="nav-link" active-class="active">
            Contatos
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">
            Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cadastro" class="nav-link" active-class="active">
            Cadastro
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Navbar component
</script>

<style scoped lang="scss">

</style>