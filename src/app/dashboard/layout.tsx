import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <main className='h-screen w-full  overflow-x-hidden '>


                {children}
            </main>

        </SidebarProvider>
    )
}

export default DashboardLayout
