interface Link {
  href: string;
}

interface ModelLinks {
  self: Link;
}

interface PageInfo {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

interface ListResponse {
  _links: {
    self: Link;
  };
  page: PageInfo;
}

export interface Contract {
  id: number;
  startDate: string;
  endDate: string;
  monthlyRent: number;
  _links: ModelLinks;
}

export interface CraftsmanFirm {
  id: number;
  companyName: string;
  email: string;
  phone: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
}

export interface RealEstateObject {
  address: string;
  size: number;
  numberOfRooms: number;
  description: string;
  latitude: number;
  longitude: number;
  propertyType: string;
  yearBuilt: number;
  floor: number;
  hasElevator: boolean;
  monthlyMaintenanceCosts: number;
  propertyTax: number;
  heatingType: string;
  hasAirConditioning: boolean;
  hasCellar: boolean;
  hasBalcony: boolean;
  hasGarden: boolean;
  outdoorSpace: number;
  lastRenovationDate: string | null;
  nextInspectionDue: string | null;
  furnished: boolean;
  _links: ModelLinks;
}

export interface Tenant {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  _links: ModelLinks;
}

export interface TicketLinks extends ModelLinks {
  ticket: Link;
  tenant: Link;
}

export interface Ticket {
  id: number;
  description: string;
  status: "OPEN";
  creationDate: string;
  _links: TicketLinks;
}

export interface CraftsmanFirmListResponse extends ListResponse {
  _embedded: {
    craftsmanFirms: CraftsmanFirm[];
  };
}

export interface ContractsListResponse extends ListResponse {
  _embedded: {
    contracts: Contract[];
  };
}

export interface RealEstateObjectListResponse extends ListResponse {
  _embedded: {
    realEstateObjects: RealEstateObject[];
  };
}

export interface TenantListResponse extends ListResponse {
  _embedded: {
    tenants: Tenant[];
  };
}

export interface TicketListResponse extends ListResponse {
  _embedded: {
    tickets: Ticket[];
  };
}
