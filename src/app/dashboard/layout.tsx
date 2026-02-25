"use client"

import { useAuthStore } from "../../store/auth.store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = useAuthStore((state) => state.token)
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // Evita error de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !token) {
      router.replace("/auth/login")
    }
  }, [token, mounted, router])

  if (!mounted) return null

  if (!token) return null

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 250,
          background: "#1e293b",
          color: "white",
          padding: 20,
        }}
      >
        Dashboard
      </aside>

      <main style={{ flex: 1, padding: 20 }}>{children}</main>
    </div>
  )
}
// "use client"

// import { useAuthStore } from "../../store/auth.store"
// import { useRouter } from "next/navigation"
// import { useEffect, useState } from "react"

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const token = useAuthStore((state) => state.token)
//   const router = useRouter()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   useEffect(() => {
//     if (mounted && !token) {
//       router.push("/auth/login")
//     }
//   }, [token, mounted, router])

//   if (!mounted) return null

//   return (
//     <div className="layout">
//       <aside className="sidebar">
//         <h2>Dashboard</h2>
//       </aside>

//       <main className="content">
//         {children}
//       </main>
//     </div>
//   )
// }
// "use client"

// import { useAuthStore } from "../../store/auth.store"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   //const user = useAuthStore((state) => state.user)
//   const token = useAuthStore((state) => state.token)
//   const router = useRouter()

//   // useEffect(() => {
//   //   if (!user) {
//   //     router.push("/auth/login")
//   //   }
//   // }, [user, router])

//   // if (!user) return null
//   if (!token) return null

//   return (
//     <div className="flex min-h-screen">
//       <aside className="w-64 bg-gray-900 text-white p-4">
//         Dashboard
//       </aside>

//       <main className="flex-1 p-6 bg-gray-50">
//         {children}
//       </main>
//     </div>
//   )
// }
// // "use client"

// // import { useAuthStore } from "../../store/auth.store"
// // import { useRouter } from "next/navigation"
// // import { useEffect } from "react"

// // export default function DashboardLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   const user = useAuthStore((state) => state.user)
// //   const router = useRouter()

// //   useEffect(() => {
// //     if (!user) {
// //       //router.push("/app/dashboard")
// //       router.push("/dashboard/agenda")
// //       console.log("No user found, redirecting to login")
// //     }
// //   }, [user, router])

// //   if (!user) return null

// //   return (
// //     <div className="flex min-h-screen">
// //       <aside className="w-64 bg-gray-900 text-white p-4">
// //         Sidebar
// //       </aside>
// //       <main className="flex-1 p-6 bg-gray-50">
// //         {children}
// //       </main>
// //     </div>
// //   )
// // }
 