export enum Role {
  ADMIN = "ADMIN",
  MEDICO = "MEDICO",
  ASISTENTE = "ASISTENTE",
}

export interface Organization {
  id: string
  name: string
  plan: "BASIC" | "CLINIC"
}

export interface User {
  id: string
  name: string
  email: string
  role: Role
  organizationId: string
   doctorId?: string
}



 
 