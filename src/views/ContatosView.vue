<template>
  <div class="contatos-view">
    <div class="container">
      <h1>Contatos</h1>
      <p>Entre em contato conosco através dos canais abaixo:</p>
      
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-icon">📧</div>
          <h3>Email</h3>
          <p>contato@exemplo.com</p>
          <a href="mailto:contato@exemplo.com" class="contact-link">
            Enviar Email
          </a>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">📱</div>
          <h3>Telefone</h3>
          <p>(11) 99999-9999</p>
          <a href="tel:+5511999999999" class="contact-link">
            Ligar Agora
          </a>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">📍</div>
          <h3>Endereço</h3>
          <p>Rua Exemplo, 123<br>São Paulo - SP</p>
          <a href="#" class="contact-link">
            Ver no Mapa
          </a>
        </div>
      </div>
      
      <div class="contact-form">
        <h2>Envie uma Mensagem</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nome:</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <label for="message">Mensagem:</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required 
              rows="5" 
              class="form-input"
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const submitForm = (): void => {
  alert('Mensagem enviada com sucesso!')
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped lang="scss">
@use '../styles/views/contatos.scss';
</style>