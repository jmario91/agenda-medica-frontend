"use client"

import { useEffect, useState } from "react"
import { useAuthStore } from "../../store/auth.store"
import { mockDoctors } from "../../features/doctors/doctors.service"
import { Doctor } from "../../features/doctors/types"

export function useCurrentDoctor() {
  const user = useAuthStore((state) => state.user)
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  useEffect(() => {
    if (!user) return

    if (user.role === "MEDICO" && user.doctorId) {
      const doctor = mockDoctors.find(d => d.id === user.doctorId)
      if (doctor) setSelectedDoctor(doctor)
    }
  }, [user])

  return {
    selectedDoctor,
    setSelectedDoctor,
    doctors: mockDoctors,
    user,
  }
}