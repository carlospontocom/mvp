<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Marca -->
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          Vue App
        </router-link>
      </div>

      <!-- Botão hamburguer (mobile) -->
      <div class="nav-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Menu de navegação -->
      <ul class="nav-menu" :class="{ open: isMenuOpen }">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" @click="closeMenu">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contatos" class="nav-link" active-class="active" @click="closeMenu">
            Contatos
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active" @click="closeMenu">
            Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cadastro" class="nav-link" active-class="active" @click="closeMenu">
            Cadastro
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped lang="scss">
@use '../styles/navbar.scss';
</style>
