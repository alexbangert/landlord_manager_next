import { ReactNode } from "react";

export default async function TenantLayout({
  children,
  contracts,
  tickets,
}: {
  children: ReactNode;
  tickets: ReactNode;
  contracts: ReactNode;
}) {
  return (
    <>
      {children}
      {contracts}
      {tickets}
    </>
  );
}
