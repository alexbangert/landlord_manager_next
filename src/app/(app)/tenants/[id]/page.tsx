import { ENDPOINTS } from "@/api";
import { Tenant } from "@/lib/schema";

export default async function TenantPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const tenant = await getData(id);

  return (
    <>
      <ul>
        <li>
          <strong>Name: </strong>
          {tenant.name}
        </li>
        <li>
          <strong>E-Mail: </strong>
          {tenant.email}
        </li>
        <li>
          <strong>Telefon: </strong>
          {tenant.phoneNumber}
        </li>
        <li>
          <strong>Adresse: </strong>
          {tenant.address}
        </li>
      </ul>
    </>
  );
}

const getData = async (id: number) => {
  const response = await fetch(`${ENDPOINTS.TENANTS}/${id}`);
  const data: Tenant = await response.json();

  return data;
};
