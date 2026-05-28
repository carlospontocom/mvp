<template>
  <div class="agendamento-view">
    <div class="agendamento-container">
      <div class="agendamento-card">
        <h1>Agendamento Bancário</h1>
        <p>Agende seus serviços com facilidade</p>

        <form @submit.prevent="handleAgendamento" class="agendamento-form">
          <!-- Nome -->
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input 
              type="text" 
              id="nome" 
              v-model="form.nome" 
              required 
              class="form-input"
              placeholder="Seu nome completo"
            >
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              class="form-input"
              placeholder="seu@email.com"
            >
          </div>

          <!-- Telefone -->
          <div class="form-group">
            <label for="telefone">Telefone:</label>
            <input 
              type="tel" 
              id="telefone" 
              v-model="form.telefone" 
              class="form-input"
              placeholder="(11) 99999-9999"
            >
          </div>

          <!-- Tipo de Serviço -->
          <div class="form-group">
            <label for="servico">Serviço:</label>
            <select id="servico" v-model="form.servico" required class="form-input">
              <option value="">Selecione um serviço</option>
              <option value="abertura">Abertura de Conta</option>
              <option value="consultoria">Consultoria Financeira</option>
              <option value="renegociacao">Renegociação de Dívidas</option>
              <option value="personalizado">Atendimento Personalizado</option>
            </select>
          </div>

          <!-- Data -->
          <div class="form-group">
            <label for="data">Data:</label>
            <input 
              type="date" 
              id="data" 
              v-model="form.data" 
              required 
              class="form-input"
            >
          </div>

          <!-- Horário -->
          <div class="form-group">
            <label for="hora">Horário:</label>
            <input 
              type="time" 
              id="hora" 
              v-model="form.hora" 
              required 
              class="form-input"
            >
          </div>

          <!-- Botão -->
          <button type="submit" class="agendamento-btn" :disabled="isLoading">
            <span v-if="isLoading">Agendando...</span>
            <span v-else>Agendar</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface AgendamentoForm {
  nome: string
  email: string
  telefone: string
  servico: string
  data: string
  hora: string
}

const isLoading = ref(false)

const form = ref<AgendamentoForm>({
  nome: '',
  email: '',
  telefone: '',
  servico: '',
  data: '',
  hora: ''
})

const handleAgendamento = async (): Promise<void> => {
  if (!form.value.nome || !form.value.email || !form.value.servico || !form.value.data || !form.value.hora) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  isLoading.value = true

  // Simulação de chamada API
  setTimeout(() => {
    alert(`Agendamento realizado com sucesso!\nServiço: ${form.value.servico}\nData: ${form.value.data} às ${form.value.hora}`)
    isLoading.value = false
  }, 2000)
}
</script>

<style scoped lang="scss">
.agendamento-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #4a90e2, #007aff);
  font-family: 'Segoe UI', Roboto, sans-serif;
}

.agendamento-container {
  width: 100%;
  max-width: 500px;
  padding: 2rem;
}

.agendamento-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  animation: fadeIn 0.6s ease-in-out;

  h1 {
    text-align: center;
    color: #007aff;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    color: #666;
    margin-bottom: 1.5rem;
  }
}

.agendamento-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form-group {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 600;
      margin-bottom: 0.3rem;
      color: #333;
    }

    .form-input {
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s, box-shadow 0.3s;

      &:focus {
        border-color: #007aff;
        box-shadow: 0 0 6px rgba(0, 122, 255, 0.3);
        outline: none;
      }
    }
  }

  .agendamento-btn {
    background: #007aff;
    color: #fff;
    border: none;
    padding: 0.9rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;

    &:hover:not(:disabled) {
      background: #005bb5;
      transform: translateY(-2px);
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
