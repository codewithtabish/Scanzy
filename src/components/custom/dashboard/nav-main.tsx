"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const pathname = usePathname();
 

  return (
    <SidebarMenu>
      {items.map((item) => {
        // Ensure ONLY the correct item is marked active
        const isExactMatch = pathname === item.url;
        const isSubRoute =
          item.url !== "/dashboard" && pathname.startsWith(item.url + "/");
        const isActive = isExactMatch || isSubRoute;

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={isActive}>
              <Link className="my-2 flex items-center gap-2" href={item.url}>
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>

          </SidebarMenuItem>
        );
      })}
    
    </SidebarMenu>
  );
}
