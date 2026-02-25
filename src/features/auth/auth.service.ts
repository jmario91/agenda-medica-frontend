import { api } from "../../lib/api" 
import { LoginDto, AuthResponse } from "../../types/auth.types"

export const loginRequest = async (data: LoginDto) => {
  const response = await api.post<AuthResponse>("/auth/login", data)
  return response.data
}