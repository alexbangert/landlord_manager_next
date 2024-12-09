import { ENDPOINTS } from "@/api";
import { DataTable } from "@/components/molecules/data-table";
import { columns } from "@/components/molecules/tickets/columns";
import { TicketListResponse } from "@/lib/schema";

export default async function TicketsListPage() {
  const tickets = await getData();
  return (
    <>
      Tickets
      <DataTable columns={columns} data={tickets._embedded.tickets} />
    </>
  );
}

const getData = async () => {
  const response = await fetch(ENDPOINTS.TICKETS);
  const data: TicketListResponse = await response.json();

  return data;
};
