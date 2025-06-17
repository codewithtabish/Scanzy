import { checkAuthAndRedirectMain } from "@/actions/auth-redirect";
import { AppSidebar } from "@/components/custom/dashboard/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";


const DashboardLayout = async({ children }: { children: React.ReactNode }) => {
    // await checkAuthAndRedirectMain()

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
