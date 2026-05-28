// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const API_URL = 'https://mvp-back-h819.onrender.com'
interface LoginPayload {
  email: string
  senha: string
}

interface LoginResponse {
  message: string
  token: string
}

export async function loginUsuario(payload: LoginPayload): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Erro ao realizar login')
  }

  return data
}

export function salvarToken(token: string, lembrar: boolean): void {
  if (lembrar) {
    localStorage.setItem('token', token)
  } else {
    sessionStorage.setItem('token', token)
  }
}

export function obterToken(): string | null {
  return localStorage.getItem('token') || sessionStorage.getItem('token')
}

export function removerToken(): void {
  localStorage.removeItem('token')
  sessionStorage.removeItem('token')
}