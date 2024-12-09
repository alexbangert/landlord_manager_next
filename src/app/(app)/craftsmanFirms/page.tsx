import { ENDPOINTS } from "@/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CraftsmanFirmListResponse } from "@/lib/schema";

export default async function CraftsmanFirmsListPage() {
  const companies = await getData();

  return (
    <>
      <h2>Firmen</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefon</TableHead>
            <TableHead>Adresse</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies._embedded.craftsmanFirms.map((company, idx) => (
            <TableRow key={`company-${idx}`}>
              <TableCell>{company.companyName}</TableCell>
              <TableCell>{company.email}</TableCell>
              <TableCell>{company.phone}</TableCell>
              <TableCell>
                {company.street} {company.houseNumber}, {company.postalCode}{" "}
                {company.city}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

const getData = async () => {
  const response = await fetch(ENDPOINTS.COMPANIES);
  const data: CraftsmanFirmListResponse = await response.json();

  return data;
};
