'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export function NavMain({
  items,
  onNavigate,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
  onNavigate?: () => void; // callback to close sidebar
}) {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {items.map((item) => {
        const isExactMatch = pathname === item.url;
        const isSubRoute =
          item.url !== '/dashboard' && pathname.startsWith(item.url + '/');
        const isActive = isExactMatch || isSubRoute;

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={isActive}>
              <Link
                href={item.url}
                onClick={() => onNavigate?.()} // closes sidebar on mobile
                className="my-2 flex items-center gap-2"
              >
                <item.icon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground'
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
