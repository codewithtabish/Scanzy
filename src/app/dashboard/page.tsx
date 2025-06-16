// app/(dashboard)/page.tsx

"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/custom/theme-toggle";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { SectionCards } from "@/components/custom/dashboard/section-card";
import { ChartAreaInteractive } from "@/components/custom/dashboard/chart-area-interactive";
import data from "@/utils/data.json"
import { DataTable } from "@/components/custom/dashboard/data-table";
import UpcomingFeatures from "@/components/custom/dashboard/upcomming-feature";


export default function Page() {
  return (
    <div className="flex w-full  flex-col overflow-hidden">
      {/* Top Bar */}
      <SidebarInset className="h-10 max-h-16">
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  Project Management & Task Tracking
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="ml-auto flex items-center gap-2">
            <ModeToggle />
            <SignedIn>
              <UserButton appearance={{}} />
            </SignedIn>
            {/* <NavActions /> */}
          </div>
        </header>
      </SidebarInset>

      {/* Page Content */}
      <main className="flex-1 px-4 py-6 p-4">
          <div className="flex  flex-col gap-10 py-4 md:gap-16  md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />

              </div>
              {/* <DataTable data={data} /> */}
              <div>
                <h2 className="text-2xl font-bold mb-4 ml-4 ">Upcoming Features</h2>
              <UpcomingFeatures/>
              </div>

            </div>
          
          
      </main>
    </div>
  );
}
