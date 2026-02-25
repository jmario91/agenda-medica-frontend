import { create } from "zustand"
import { User } from "../types/global.types"

interface AuthState {
  user: User | null
  token: string | null
  setSession: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  token:
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null,

  setSession: (user, token) => {
    localStorage.setItem("token", token)
    set({ user, token })
  },

  logout: () => {
    localStorage.removeItem("token")
    set({ user: null, token: null })
  },
}))
// import { create } from "zustand"
// import { User } from "../types/global.types"

// interface AuthState {
//   user: User | null
//   token: string | null
//   setSession: (user: User, token: string) => void
//   logout: () => void
// }


// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   token:
//     typeof window !== "undefined"
//       ? localStorage.getItem("token")
//       : null,

//   setSession: (user, token) => {
//     localStorage.setItem("token", token)
//     set({ user, token })
//   },

//   logout: () => {
//     localStorage.removeItem("token")
//     set({ user: null, token: null })
//   },
// }))

 