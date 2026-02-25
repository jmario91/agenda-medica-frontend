'use client'

import FullCalendar from '@fullcalendar/react'
import type { DateSelectArg, EventDropArg } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es'
import { useState } from 'react'

import { useAppointments } from '../../features/appointments/useAppointments'
import AppointmentModal from './AppointmentModal'

import type { Doctor } from '../../features/doctors/types'
import type { DateSpanApi } from '@fullcalendar/core'
type Props = {
  doctor: Doctor
}

export default function CalendarGrid({ doctor }: Props) {
  const { appointments, addAppointment, removeAppointment, updateAppointmentTime } =
    useAppointments(doctor?.id)

  const [modalOpen, setModalOpen] = useState(false)
  const [slotInfo, setSlotInfo] = useState<DateSelectArg | null>(null)
const [editingEvent, setEditingEvent] = useState<any | null>(null)
 
 

const handleSelect = (info: DateSelectArg) => {
    console.log("handleSelect disparado", info)
   
     setSlotInfo(info)
  setEditingEvent(null) // asegúrate de limpiar el editingEvent
  setModalOpen(true)
  }

  const handleEventDrop = (info: EventDropArg) => {
    updateAppointmentTime(
      info.event.id,
      info.event.start!.toISOString(),
      info.event.end!.toISOString()
    )
  }

  
  const handleEventClick = (info: any) => {
     console.log("handleEventClick disparado", info) 
    setSlotInfo(null) // limpia slotInfo para indicar que estamos editando, no creando
  
     setEditingEvent({
    id: info.event.id,
    title: info.event.title,
    start: info.event.start,
    end: info.event.end,
    extendedProps: info.event.extendedProps,
    notes: info.event.extendedProps.notes,
  })
setModalOpen(true)
}

  
const selectAllow = (span: DateSpanApi) => {
  if (!doctor) return false

  const slotStart = span.start
  const slotEnd = span.end

  const [startHour, startMin] = doctor.startTime.split(':').map(Number)
  const [endHour, endMin] = doctor.endTime.split(':').map(Number)

  // Bloqueo fuera de horario
  if (
    slotStart.getHours() < startHour ||
    (slotStart.getHours() === startHour && slotStart.getMinutes() < startMin) ||
    slotEnd.getHours() > endHour ||
    (slotEnd.getHours() === endHour && slotEnd.getMinutes() > endMin)
  )
    return false

  // Bloqueo de solapamiento con citas
  const overlap = appointments.some(
    (a) => slotStart < new Date(a.end) && slotEnd > new Date(a.start)
  )
  return !overlap
}
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale={esLocale}
        allDaySlot={false}
        slotMinTime={doctor.startTime}
        slotMaxTime={doctor.endTime}
        businessHours={{
          daysOfWeek: doctor.workingDays,
          startTime: doctor.startTime,
          endTime: doctor.endTime,
        }}
        selectable={true}
        select={handleSelect}
        selectAllow={selectAllow}
        editable={true}
        events={appointments}
        eventDrop={handleEventDrop}
        eventClick={handleEventClick}
      />

      {modalOpen &&  (
        // <AppointmentModal
        //   slotInfo={slotInfo}
        //   onCreate={addAppointment}
        //   onClose={() => setModalOpen(false)}
        // />
    <AppointmentModal
   slotInfo={
      slotInfo
        ? { start: slotInfo.start, end: slotInfo.end }
        : {
            start: editingEvent.start,
            end: editingEvent.end,
          }
    }
    editingEvent={editingEvent || undefined}
    onCreate={(data) => {
      if (editingEvent) {
        updateAppointmentTime(data.id, data.start, data.end)
      } else {
        addAppointment(data)
      }
      setModalOpen(false)
      setSlotInfo(null)
      setEditingEvent(null)
    }}
    onClose={() => {
      setModalOpen(false)
      setSlotInfo(null)
      setEditingEvent(null)
    }}
  />
      )}
    </>
  )
}