import { AppSidebar } from "@/components/custom/dashboard/app-sidebar";
import { NavActions } from "@/components/custom/dashboard/nav-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";
// import { dark } from '@clerk/themes'


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    //   const clerkTheme = resolvedTheme === 'dark' ? dark : undefined
    
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content Area */}
        <div className="flex flex-col  overflow-hidden">
          {/* Top Bar */}
               <SidebarInset className="h-10 max-h-16">
            <header className="flex h-14 items-center gap-2 border-b px-4">
              <SidebarTrigger />
              <Separator
                orientation="vertical"
                className="mr-2 h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="line-clamp-1">
                      Project Management & Task Tracking
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="ml-auto">
                  <SignedIn>
                              <UserButton appearance={{ }} />
                            </SignedIn>
               
                {/* <NavActions /> */}
              </div>
            </header>
          </SidebarInset>
     

          {/* Page Content */}
          <main className="flex-1   px-4 py-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
