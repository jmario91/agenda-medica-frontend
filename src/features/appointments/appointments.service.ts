import { Appointment } from "./types"

export const getAppointments = async (): Promise<Appointment[]> => {
  // luego lo conectamos a backend
  return [
    {
      id: "1",
      doctorId: "1",
      patientName: "Juan Pérez",
      start: "2026-02-23T09:00:00",
      end: "2026-02-23T09:30:00",
      status: "SCHEDULED",
    },
  ]
}