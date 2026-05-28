<template>
  <div class="cadastro-view">
    <div class="cadastro-container">
      <div class="cadastro-card">
        <h1>Cadastro</h1>
        <p>Crie sua conta gratuitamente</p>
        
        <form @submit.prevent="handleCadastro" class="cadastro-form">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">Nome:</label>
              <input 
                type="text" 
                id="firstName" 
                v-model="cadastroForm.firstName" 
                required 
                class="form-input"
                placeholder="Seu nome"
              >
            </div>
            
            <div class="form-group">
              <label for="lastName">Sobrenome:</label>
              <input 
                type="text" 
                id="lastName" 
                v-model="cadastroForm.lastName" 
                required 
                class="form-input"
                placeholder="Seu sobrenome"
              >
            </div>
          </div>
          
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              v-model="cadastroForm.email" 
              required 
              class="form-input"
              placeholder="seu@email.com"
            >
          </div>
          
          <div class="form-group">
            <label for="phone">Telefone:</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="cadastroForm.phone" 
              class="form-input"
              placeholder="(11) 99999-9999"
            >
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="password">Senha:</label>
              <input 
                type="password" 
                id="password" 
                v-model="cadastroForm.password" 
                required 
                class="form-input"
                placeholder="Mínimo 6 caracteres"
                minlength="6"
              >
            </div>
            
            <div class="form-group">
              <label for="confirmPassword">Confirmar Senha:</label>
              <input 
                type="password" 
                id="confirmPassword" 
                v-model="cadastroForm.confirmPassword" 
                required 
                class="form-input"
                placeholder="Confirme sua senha"
              >
            </div>
          </div>
          
          <div class="form-group">
            <label class="checkbox-label">
              <input 
                type="checkbox" 
                v-model="cadastroForm.acceptTerms" 
                required
              >
              <span class="checkmark"></span>
              Aceito os <a href="#" class="link">termos de uso</a> e 
              <a href="#" class="link">política de privacidade</a>
            </label>
          </div>
          
          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" v-model="cadastroForm.newsletter">
              <span class="checkmark"></span>
              Quero receber novidades por email
            </label>
          </div>
          
          <button type="submit" class="cadastro-btn" :disabled="isLoading || !isFormValid">
            <span v-if="isLoading">Cadastrando...</span>
            <span v-else>Criar Conta</span>
          </button>
        </form>
        
        <div class="login-link">
          <p>Já tem uma conta? 
            <router-link to="/login" class="link">
              Faça login aqui
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

interface CadastroForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
  newsletter: boolean
}

const router = useRouter()
const isLoading = ref<boolean>(false)

const cadastroForm = ref<CadastroForm>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
  newsletter: false
})

const isFormValid = computed((): boolean => {
  return (
    cadastroForm.value.firstName.trim() !== '' &&
    cadastroForm.value.lastName.trim() !== '' &&
    cadastroForm.value.email.trim() !== '' &&
    cadastroForm.value.password.length >= 6 &&
    cadastroForm.value.password === cadastroForm.value.confirmPassword &&
    cadastroForm.value.acceptTerms
  )
})

const handleCadastro = async (): Promise<void> => {
  if (!isFormValid.value) {
    alert('Por favor, preencha todos os campos obrigatórios corretamente.')
    return
  }
  
  if (cadastroForm.value.password !== cadastroForm.value.confirmPassword) {
    alert('As senhas não coincidem!')
    return
  }
  
  isLoading.value = true
  
  // Simular chamada de API
  setTimeout(() => {
    alert(`Cadastro realizado com sucesso!\nBem-vindo(a), ${cadastroForm.value.firstName}!`)
    isLoading.value = false
    
    // Redirecionar para login após cadastro
    router.push('/login')
  }, 2000)
}
</script>

<style lang="scss" scoped>
  @use '../styles/cadastroView.scss';
</style>