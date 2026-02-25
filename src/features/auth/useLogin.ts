import { useMutation } from "@tanstack/react-query"
import { loginRequest } from "./auth.service"
import { useAuthStore } from "../../store/auth.store"

export const useLogin = () => {
  const setSession = useAuthStore((state) => state.setSession)

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      setSession(data.user, data.accessToken)
    },
  })
}
