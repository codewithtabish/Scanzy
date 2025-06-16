import { AppSidebar } from "@/components/custom/dashboard/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
        <div className="">
          <AppSidebar />
        </div>

        {/* Right side takes the remaining width */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {children}
        </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
