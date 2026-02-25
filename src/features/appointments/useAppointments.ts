import { useState, useEffect } from 'react';
import { Appointment } from './types';

export function useAppointments(doctorId?: string) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    if (!doctorId) return;

    // Simulación de citas iniciales por doctor
    if (doctorId === '1') {
      setAppointments([
        { id: '1', title: 'Paciente A', start: '2026-02-25T10:00:00', end: '2026-02-25T10:30:00', notes: 'Chequeo', patientName: 'Paciente A', doctorId: '1', status: 'SCHEDULED' },
      ]);
    } else {
      setAppointments([]);
    }
  }, [doctorId]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments(prev => [...prev, appointment]);
  };

  const removeAppointment = (id: string) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
  };

  const updateAppointmentTime = (id: string, start: string, end: string) => {
    setAppointments(prev =>
      prev.map(a => (a.id === id ? { ...a, start, end } : a))
    );
  };

  return { appointments, addAppointment, removeAppointment, updateAppointmentTime };
}
// import { useQuery } from "@tanstack/react-query"
// import { getAppointments } from "./appointments.service"

// export const useAppointments = () => {
//   return useQuery({
//     queryKey: ["appointments"],
//     queryFn: getAppointments,
//   })
// }