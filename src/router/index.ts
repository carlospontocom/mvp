import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContatosView from '../views/ContatosView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/contatos',
    name: 'Contatos',
    component: ContatosView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadastroView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router