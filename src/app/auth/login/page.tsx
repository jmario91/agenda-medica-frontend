"use client"

import { useState } from "react"
import { useLogin } from "../../../features/auth/useLogin"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../../../store/auth.store"
import { Role } from "@/src/types/global.types"

export default function LoginPage() {
  const router = useRouter()
  //const { mutate, isPending, isError } = useLogin()


const { setSession } = useAuthStore()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()

  //   mutate(
  //     { email, password },
  //     {
  //       onSuccess: () => {
  //        // router.push("/dashboard")
  //         router.push("/dashboard/agenda")
  //       },
  //     }
  //   )
  // }
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

 //SIMULAR TIPOS DE USUARIOS PARA PRUEBAS RÁPIDAS
  const mockUser = {
    id: "1",
    name: "Mario",
    email: "jmario91@hotmail.com",
    role: Role.MEDICO, // Cambia aquí para probar roles
    organizationId: "org-123",
    doctorId: "1",
     

  }

  setSession(mockUser, "mock-token")

  router.push("/dashboard/agenda")
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>

        <input
          type="email"
          placeholder="Correo"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Iniciar Sesión
        </button>

      
      </form>
    </div>
  )
}

 