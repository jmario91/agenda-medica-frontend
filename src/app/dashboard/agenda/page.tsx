'use client'

import { useCurrentDoctor } from '../../hooks/useCurrentDoctor'
import CalendarGrid from '../../../components/agenda/CalendarGrid'

export default function AgendaPage() {
  const { selectedDoctor, setSelectedDoctor, doctors, user } = useCurrentDoctor()

  if (!selectedDoctor && user?.role === 'MEDICO') return <p>Cargando agenda...</p>

  return (
    <div>
      <h1>Agenda Médica</h1>

      {(user?.role === 'ADMIN' || user?.role === 'ASISTENTE') && (
        <select
          onChange={(e) => {
            const doctor = doctors.find((d) => d.id === e.target.value)
            if (doctor) setSelectedDoctor(doctor)
          }}
          value={selectedDoctor?.id || ''}
        >
          <option value="">Seleccione médico</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name}
            </option>
          ))}
        </select>
      )}

      {selectedDoctor && (
        <div style={{ marginTop: 20 }}>
          <CalendarGrid doctor={selectedDoctor} />
        </div>
      )}
    </div>
  )
}
// "use client"

// import FullCalendar from "@fullcalendar/react"
// import dayGridPlugin from "@fullcalendar/daygrid"
// import timeGridPlugin from "@fullcalendar/timegrid"
// import interactionPlugin from "@fullcalendar/interaction"
// import esLocale from "@fullcalendar/core/locales/es"

// import { useCurrentDoctor } from "../../hooks/useCurrentDoctor"

// const clinicConfig = {
//   workingDays: [1, 2, 3, 4, 5, 6],
//   startTime: "08:00",
//   endTime: "20:00",
// }

// export default function AgendaPage() {
//   const { selectedDoctor, setSelectedDoctor, doctors, user } =
//     useCurrentDoctor()

//   return (
//     <div>
//       <h1>Agenda Médica</h1>

//       {(user?.role === "ADMIN" || user?.role === "ASISTENTE") && (
//         <select
//           onChange={(e) => {
//             const doctor = doctors.find(d => d.id === e.target.value)
//             if (doctor) setSelectedDoctor(doctor)
//           }}
//         >
//           <option value="">Seleccione médico</option>
//           {doctors.map(doc => (
//             <option key={doc.id} value={doc.id}>
//               {doc.name}
//             </option>
//           ))}
//         </select>
//       )}

//       {selectedDoctor && (
//         <div style={{ marginTop: 20 }}>
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             initialView="timeGridWeek"
//             locale={esLocale}
//             allDaySlot={false}
//             slotMinTime={clinicConfig.startTime}
//             slotMaxTime={clinicConfig.endTime}
//             businessHours={{
//               daysOfWeek: selectedDoctor.workingDays,
//               startTime: selectedDoctor.startTime,
//               endTime: selectedDoctor.endTime,
//             }}
//             selectable
//             editable
//           />
//         </div>
//       )}
//     </div>
//   )
// }