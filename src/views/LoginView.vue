<template>
  <div class="login-view">
    <div class="login-container">
      <div class="login-card">
        <h1>Login</h1>
        <p>Faça login em sua conta</p>

        <!-- Mensagem de erro -->
        <div v-if="errorMessage" class="error-alert">
          {{ errorMessage }}
        </div>

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
              :disabled="isLoading"
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
              :disabled="isLoading"
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
import { loginUsuario, salvarToken } from '../services/AuthService'

interface LoginForm {
  email: string
  password: string
  rememberMe: boolean
}

const router = useRouter()
const isLoading = ref<boolean>(false)
const errorMessage = ref<string>('')

const loginForm = ref<LoginForm>({
  email: '',
  password: '',
  rememberMe: false
})

const handleLogin = async (): Promise<void> => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const data = await loginUsuario({
      email: loginForm.value.email,
      senha: loginForm.value.password  // mapeia 'password' → 'senha' que o backend espera
    })

    salvarToken(data.token, loginForm.value.rememberMe)

    router.push('/')
  } catch (error) {
    errorMessage.value = error instanceof Error
      ? error.message
      : 'Erro inesperado. Tente novamente.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped lang="scss">
@use '../styles/loginViews.scss';

.error-alert {
  background-color: #fdecea;
  color: #b00020;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 14px;
  margin-bottom: 16px;
}
</style>