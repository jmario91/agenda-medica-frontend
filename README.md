## AGENDA MÉDICA FRONTEND

Sistema profesional de gestión de citas médicas desarrollado con Next.js
16, arquitectura modular basada en features y manejo de estado moderno
con Zustand y React Query.

------------------------------------------------------------------------

## STACK TECNOLÓGICO

Core: - Next.js 16 (App Router) - React 19 - TypeScript 5

Estado y Datos: - Zustand (estado global de autenticación) - TanStack
React Query (manejo de servidor y caché) - Axios (cliente HTTP)

UI / Calendario: - FullCalendar - TailwindCSS 4

Validación: - Zod

Package Manager: - pnpm

Requiere Node.js >= 20

------------------------------------------------------------------------

## ARQUITECTURA DEL PROYECTO

El proyecto sigue una arquitectura modular basada en features, separando
claramente UI, lógica de negocio, estado global y configuración.

Estructura principal:
```bash
\AGENDA-MEDICA-FRONTEND\SRC
│   .env.local
│   
├───app
│   │   globals.css
│   │   layout.tsx
│   │   page.tsx
│   │   providers.tsx
│   │   
│   ├───auth
│   │   │   layout.tsx
│   │   │   
│   │   └───login
│   │           page.tsx
│   │
│   ├───config
│   ├───dashboard
│   │   │   layout.tsx
│   │   │   page.tsx
│   │   │
│   │   ├───agenda
│   │   │       page.tsx
│   │   │
│   │   └───doctors
│   │           page.tsx
│   │
│   └───hooks
│           useCurrentDoctor.ts
│
├───components
│   ├───agenda
│   │       AppointmentModal.tsx
│   │       CalendarGrid.tsx
│   │       TimeSlot.tsx
│   │
│   └───layout
│           Header.tsx
│           Sidebar.tsx
│
├───features
│   ├───appointments
│   │       appointments.service.ts
│   │       types.ts
│   │       useAppointments.ts
│   │
│   ├───auth
│   │       auth.service.ts
│   │       useLogin.ts
│   │
│   └───doctors
│           doctors.service.ts
│           types.ts
│           useDoctors.ts
│
├───lib
│       api.ts
│       permissions.ts
│
├───store
│       auth.store.ts
│
└───types
        auth.types.ts
        global.types.ts
```
------------------------------------------------------------------------

## SISTEMA DE ROLES

Doctor: - Visualiza únicamente sus citas - Puede cambiar el estado de la
consulta

Asistente: - Puede crear nuevas citas - Puede editar información -
Visualiza agenda del médico seleccionado

Admin: -Cuenta con todos los permisos del sistema

------------------------------------------------------------------------

## ESTADOS DE CITA

-   SCHEDULED → Cita programada
-   IN_PROGRESS → Consulta en curso
-   PAUSED → Consulta pausada
-   FINISHED → Consulta finalizada

------------------------------------------------------------------------

## MANEJO DE ESTADO

Autenticación: - Zustand (store/auth.store.ts)

Datos del servidor: - React Query - Servicios desacoplados por feature

------------------------------------------------------------------------

COMUNICACIÓN CON BACKEND

Configuración central en: lib/api.ts

Cliente HTTP: - Axios

------------------------------------------------------------------------

INSTALACIÓN

1)  Clonar repositorio:

git clone https://github.com/jmario91/agenda-medica-frontend.git cd
agenda-medica-frontend

2)  Instalar dependencias:

pnpm install

3)  Ejecutar entorno de desarrollo:

pnpm dev

Aplicación disponible en: http://localhost:3000

------------------------------------------------------------------------

VARIABLES DE ENTORNO

Crear archivo:

.env.local

Ejemplo:

NEXT_PUBLIC_API_URL=http://localhost:3001

------------------------------------------------------------------------

SCRIPTS DISPONIBLES

pnpm dev → Desarrollo 
pnpm build → Build producción 
pnpm start →Ejecutar
build pnpm lint → Linting

------------------------------------------------------------------------

PRINCIPIOS APLICADOS

-   Arquitectura basada en features
-   Separación clara de responsabilidades
-   Tipado fuerte con TypeScript
-   Estado desacoplado del UI
-   Servicios aislados por dominio
-   Reutilización de componentes

------------------------------------------------------------------------

MEJORAS FUTURAS

-   Autenticación JWT real
-   Refresh Token
-   Tests unitarios
-   Tests E2E
-   Historial clínico
-   Notificaciones en tiempo real
-   Dashboard estadístico
-   Configuración general (Clinica-Hospital-Consultorio)
-   Configuración de jornada laboral de médico
-   Bloqueos de agenda
-   Búsqueda de citas por paciente
-   Reagendamientos
-   Configuración de citas.
-   Configuración de agenda tipo, asignación de médicos y reglas de cada una.

------------------------------------------------------------------------

Autor: Juan Mario Pérez Guzmán Full Stack Developer

Licencia: MIT
