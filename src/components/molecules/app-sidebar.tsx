import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  HammerIcon,
  HouseIcon,
  PersonStandingIcon,
  TicketIcon,
} from "lucide-react";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Landlord Manager</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/craftsmanFirms">
                  <HammerIcon /> Firmen
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <Link href="/realEstateObject">
                  <HouseIcon />
                  Immobilien
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <Link href="/tenants">
                  <PersonStandingIcon /> Tenant
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <Link href="/tickets">
                  <TicketIcon /> Tickets
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
