import { ENDPOINTS } from "@/api";
import { RealEstateObject } from "@/lib/schema";

export default async function RealEstateDetailsPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const data = await getData(id);

  return <>{data.address}</>;
}

const getData = async (id: number) => {
  const response = await fetch(`${ENDPOINTS.REAL_ESTATE}/${id}`);
  const data: RealEstateObject = await response.json();

  return data;
};
