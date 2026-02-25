export type Role = "ADMIN" | "ASSISTANT" | "DOCTOR"

export interface User {
  id: string
  name: string
  role: Role
  doctorId?: string
}
// import {User} from "./global.types"
// export interface LoginDto {
//     email: string
//     password: string
// }

// export interface AuthResponse {
//     user: User
//     accessToken: string
// }