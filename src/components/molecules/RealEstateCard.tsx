import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { removeHostFromUrl } from "@/lib/utils";
import { RealEstateObject } from "@/lib/schema";

export const RealEstateCard = ({
  realEstateObject,
}: {
  realEstateObject: RealEstateObject;
}) => {
  const url = removeHostFromUrl(realEstateObject._links.self.href);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{realEstateObject.address}</CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            width="100%"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${realEstateObject.longitude - 0.001}%2C${realEstateObject.latitude - 0.001}%2C${realEstateObject.longitude + 0.001}%2C${realEstateObject.latitude + 0.001}&layer=mapnik&marker=${realEstateObject.latitude}%2C${realEstateObject.longitude}`}
            allowFullScreen
          ></iframe>
          <div>
            <ul>
              <li>
                <strong>Größe:</strong>
                {realEstateObject.size}m²
              </li>
              <li>
                <strong>Anzahl Zimmer:</strong>
                {realEstateObject.numberOfRooms}m²
              </li>
              <li>
                <strong>Beschreibung:</strong>
                {realEstateObject.description}m²
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={url}>Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
