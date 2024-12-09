import { ENDPOINTS } from "@/api";
import { TenantsTable } from "@/components/molecules/tenants/TenantsTable";
import { columns } from "@/components/molecules/tenants/TenantsTableColumns";
import { TenantListResponse } from "@/lib/schema";
import { ReactNode } from "react";

export default async function TenantsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const data = await getData();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <TenantsTable columns={columns} data={data._embedded.tenants} />
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  );
}

const getData = async () => {
  const response = await fetch(ENDPOINTS.TENANTS);
  const data: TenantListResponse = await response.json();

  return data;
};
