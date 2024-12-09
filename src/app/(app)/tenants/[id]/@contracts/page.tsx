import { ENDPOINTS } from "@/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContractsListResponse } from "@/lib/schema";

export default async function ContractsSlot({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const contracts = await getData(id);

  return (
    <>
      <h2>Contracts</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Monthly Rent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts._embedded.contracts.map((contract, idx) => {
              return (
                <TableRow key={`contract-${idx}`}>
                  <TableCell>{contract.startDate}</TableCell>
                  <TableCell>{contract.endDate}</TableCell>
                  <TableCell>{contract.monthlyRent}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

const getData = async (id: number) => {
  const response = await fetch(`${ENDPOINTS.TENANTS}/${id}/contracts`);
  const data: ContractsListResponse = await response.json();

  return data;
};
