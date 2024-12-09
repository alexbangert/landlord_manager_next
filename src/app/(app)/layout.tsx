import {
  HammerIcon,
  HouseIcon,
  PersonStandingIcon,
  TicketIcon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function ImmobilienLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <aside className="row-span-3">
          <ul>
            <li>
              <Link href="/craftsmanFirms">
                <HammerIcon /> Firmen
              </Link>
            </li>
            <li>
              <Link href="/realEstateObject">
                <HouseIcon /> Immobilien
              </Link>
            </li>
            <li>
              <Link href="/tenants">
                <PersonStandingIcon /> Tenant
              </Link>
            </li>
            <li>
              <Link href="/tickets">
                <TicketIcon /> Tickets
              </Link>
            </li>
          </ul>
        </aside>
        <div className="col-span-2">Header</div>
        <div className="row-span-2 col-span-2">{children}</div>
      </div>
    </>
  );
}
