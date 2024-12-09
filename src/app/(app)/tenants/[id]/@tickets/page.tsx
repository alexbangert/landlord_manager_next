import { ENDPOINTS } from "@/api";
import { DataTable } from "@/components/molecules/data-table";
import { columns } from "@/components/molecules/tickets/columns";
import { TicketListResponse } from "@/lib/schema";

export default async function TicketsSlot({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const tickets = await getData(id);

  return (
    <>
      <h2>Tickets</h2>
      <DataTable columns={columns} data={tickets._embedded.tickets} />
    </>
  );
}

const getData = async (id: number) => {
  const response = await fetch(`${ENDPOINTS.TENANTS}/${id}/tickets`);
  const data: TicketListResponse = await response.json();

  return data;
};
