import { Doctor } from "./types"

export const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. López",
    specialty: "Cardiología",
    consultationDuration: 30,
    workingDays: [1, 2, 3, 4, 5],
    startTime: "09:00",
    endTime: "17:00",
  },
  {
    id: "2",
    name: "Dra. Martínez",
    specialty: "Dermatología",
    consultationDuration: 30,
    workingDays: [2, 3, 4, 5, 6],
    startTime: "10:00",
    endTime: "18:00",
  },
]