import { Role } from "../types/global.types"

export const permissions = {
  manageDoctors: [Role.ADMIN],
  createAppointment: [Role.ADMIN, Role.ASISTENTE],
  startConsultation: [Role.MEDICO],
}
