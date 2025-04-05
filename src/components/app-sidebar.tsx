import * as React from "react";
import { Plus } from "lucide-react";

import { NavLogo, UserLogo } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  logo: {
    name: "Vertexlabs, Inc",
    avatar: "/logo.png",
  },
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  dashboard: [
    "Dashboard",
    "Analytics",
    "Connect",
    "Dealroom",
    "Profile",
    "Settings",
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      {...props}
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-col"
    >
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavLogo data={data.logo} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-0">
          <SidebarGroupContent>
            {data.dashboard.map((d, index) => (
              <div className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <span className="font-medium" key={index}>
                  {d}
                </span>
              </div>
              // className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
