export type AppointmentStatus =
  | "SCHEDULED"
  | "IN_PROGRESS"
  | "PAUSED"
  | "FINISHED"

export interface Appointment {
  id: string
  doctorId: string
  title: string
  patientName: string
  notes?: string
  start: string
  end: string
  status: AppointmentStatus
}