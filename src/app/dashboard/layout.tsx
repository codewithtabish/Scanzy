// import { checkAuthAndRedirectMain } from "@/actions/auth-redirect";
import { AppSidebar } from "@/components/custom/dashboard/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
 import { auth } from '@clerk/nextjs/server';
    import { redirect } from 'next/navigation';
import Loading from './ai-content-detection/loading';


const DashboardLayout = async({ children }: { children: React.ReactNode }) => {
    // await checkAuthAndRedirectMain()
     
      const { userId  } =await auth();
    
      if (!userId) {
        redirect('/');
      } 
    
    

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
