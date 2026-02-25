import { useState } from 'react';
import { Appointment, AppointmentStatus } from '../../features/appointments/types';
type Props = {
  slotInfo: { start: Date; end: Date };
  editingEvent?: Appointment;
  onCreate: (data: Appointment) => void;
  onClose: () => void;
};

export default function AppointmentModal({
  editingEvent,
  onCreate,
  onClose,
  slotInfo
}: Props) {

  const [patientName, setPatientName] = useState(
    editingEvent?.patientName || ''
  );

  const [notes, setNotes] = useState(
    editingEvent?.notes || ''
  );

  
const [status, setStatus] = useState<AppointmentStatus>(
  editingEvent?.status || "SCHEDULED"
);
  const handleSubmit = () => {
    if (!patientName.trim()) return;

    onCreate({
      id: editingEvent?.id || crypto.randomUUID(),
      doctorId: editingEvent?.doctorId || "1",
      title: patientName,
      patientName: patientName,
      start: slotInfo.start.toISOString(),
      end: slotInfo.end.toISOString(),
      notes: notes,
      status: status,
    });

    onClose();
  };

  const formatDate = (date: Date) =>
    date.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('es-MX', {
      hour: '2-digit',
      minute: '2-digit'
    });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
      }}
    >
      <div
        style={{
          background: 'white',
          width: 480,
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: 18
        }}
      >

        {/* HEADER */}
        <div>
          <h2 style={{ margin: 0 }}>
            {editingEvent ? "Editar cita médica" : "Nueva cita médica"}
          </h2>
          <p style={{ margin: "6px 0 0 0", color: "#666", fontSize: 14 }}>
            {formatDate(slotInfo.start)} <br />
            {formatTime(slotInfo.start)} - {formatTime(slotInfo.end)}
          </p>
        </div>

        <hr />

        {/* INFORMACIÓN DEL PACIENTE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={{ fontWeight: 500 }}>Nombre del paciente</label>
          <input
            type="text"
            value={patientName}
            onChange={e => setPatientName(e.target.value)}
            style={{
              padding: 10,
              borderRadius: 6,
              border: '1px solid #ccc'
            }}
          />
        </div>

        {/* ESTADO */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
  <label style={{ fontWeight: 500 }}>Estado de la cita</label>
  <select
    value={status}
     
    onChange={(e) => setStatus(e.target.value as AppointmentStatus)}
    style={{
      padding: 10,
      borderRadius: 6,
      border: '1px solid #ccc'
    }}
  >
    <option value="SCHEDULED">Programada</option>
    <option value="IN_PROGRESS">En consulta</option>
    <option value="PAUSED">Pausada</option>
    <option value="FINISHED">Finalizada</option>
  </select>
</div>

        {/* NOTAS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={{ fontWeight: 500 }}>Notas médicas</label>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            rows={4}
            style={{
              padding: 10,
              borderRadius: 6,
              border: '1px solid #ccc',
              resize: 'none'
            }}
          />
        </div>

        <hr />

        {/* BOTONES */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 12
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              border: '1px solid #ccc',
              background: 'white',
              cursor: 'pointer'
            }}
          >
            Cancelar
          </button>

          <button
            onClick={handleSubmit}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              border: 'none',
              background: '#2563eb',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Guardar
          </button>
        </div>

      </div>
    </div>
  );
}