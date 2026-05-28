<template>
  <div class="login-view">
    <div class="login-container">
      <div class="login-card">
        <h1>Login</h1>
        <p>Faça login em sua conta</p>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              v-model="loginForm.email" 
              required 
              class="form-input"
              placeholder="seu@email.com"
            >
          </div>
          
          <div class="form-group">
            <label for="password">Senha:</label>
            <input 
              type="password" 
              id="password" 
              v-model="loginForm.password" 
              required 
              class="form-input"
              placeholder="Sua senha"
            >
          </div>
          
          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" v-model="loginForm.rememberMe">
              <span class="checkmark"></span>
              Lembrar de mim
            </label>
            <a href="#" class="forgot-link">Esqueceu a senha?</a>
          </div>
          
          <button type="submit" class="login-btn" :disabled="isLoading">
            <span v-if="isLoading">Entrando...</span>
            <span v-else>Entrar</span>
          </button>
        </form>
        
        <div class="signup-link">
          <p>Não tem uma conta? 
            <router-link to="/cadastro" class="link">
              Cadastre-se aqui
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface LoginForm {
  email: string
  password: string
  rememberMe: boolean
}

const router = useRouter()
const isLoading = ref<boolean>(false)

const loginForm = ref<LoginForm>({
  email: '',
  password: '',
  rememberMe: false
})

const handleLogin = async (): Promise<void> => {
  isLoading.value = true
  
  // Simular chamada de API
  setTimeout(() => {
    alert(`Login realizado com sucesso!\nEmail: ${loginForm.value.email}`)
    isLoading.value = false
    
    // Redirecionar para home após login
    router.push('/')
  }, 1500)
}
</script>

<style scoped lang="scss">

</style>