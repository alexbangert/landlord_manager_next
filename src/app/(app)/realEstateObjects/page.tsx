import { ENDPOINTS } from "@/api";
import { RealEstateCard } from "@/components/molecules/RealEstateCard";
import { RealEstateObjectListResponse } from "@/lib/schema";

export default async function Page() {
  const realEstateObjects = await getData();

  return (
    <>
      <div className="flex flex-row gap-4">
        {realEstateObjects._embedded.realEstateObjects.map((reo, idx) => (
          <div key={`reo-${idx}`} className="basis-1/3">
            <RealEstateCard realEstateObject={reo} />
          </div>
        ))}
      </div>
    </>
  );
}

const getData = async () => {
  const response = await fetch(ENDPOINTS.REAL_ESTATE, {
    headers: {
      Accept: "application/json",
    },
    credentials: "include",
  });

  const data: RealEstateObjectListResponse = await response.json();

  console.debug("data", data);

  return data;
};
