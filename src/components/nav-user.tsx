"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function NavLogo({
  data,
}: {
  data: {
    name: string;
    avatar: string;
  };
}) {
  return (
    <SidebarMenu className="flex items-center p-2">
      <SidebarMenuItem className="flex items-center w-full gap-2">
        <Avatar className="bg-white">
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback className="rounded-lg">{data.name}</AvatarFallback>
        </Avatar>
        <span className="text-base font-semibold px-6">{data.name}</span>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export function UserLogo({
  data,
}: {
  data: {
    name: string;
    avatar: string;
  };
}) {
  return (
    <SidebarMenu className="flex items-center p-2">
      <SidebarMenuItem className="flex items-center w-full gap-2">
        <Avatar className="bg-white">
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback className="rounded-lg">{data.name}</AvatarFallback>
        </Avatar>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
