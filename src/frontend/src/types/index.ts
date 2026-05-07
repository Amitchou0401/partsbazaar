// Equipment types matching backend Motoko variants
export type EquipmentType =
  | "JCB"
  | "Tractor"
  | "Crane"
  | "Bulldozer"
  | "Car"
  | "Bike"
  | "Aeroplane"
  | "Scooty"
  | "Truck";

export type StockStatus = "InStock" | "LowStock" | "OutOfStock";

export type OrderStatus =
  | "Pending"
  | "Confirmed"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export interface ShippingInfo {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export interface Part {
  id: string;
  name: string;
  partNumber: string;
  description: string;
  price: number;
  stockStatus: StockStatus;
  images: string[];
  equipmentType: EquipmentType;
  modelCompatibility: string[];
  category: string;
  specifications: [string, string][];
}

export interface CartItem {
  partId: string;
  quantity: number;
  part?: Part; // Hydrated on frontend
}

export interface Order {
  id: string;
  items: CartItem[];
  shippingInfo: ShippingInfo;
  total: number;
  createdAt: bigint;
  status: OrderStatus;
}

export const EQUIPMENT_CATEGORIES: {
  type: EquipmentType;
  label: string;
  icon: string;
  description: string;
}[] = [
  {
    type: "JCB",
    label: "JCB",
    icon: "🏗️",
    description: "Excavators, backhoe loaders, skid steers",
  },
  {
    type: "Tractor",
    label: "Tractor",
    icon: "🚜",
    description: "Farm tractors, power tillers",
  },
  {
    type: "Crane",
    label: "Crane",
    icon: "🏚️",
    description: "Tower cranes, mobile cranes, hoists",
  },
  {
    type: "Bulldozer",
    label: "Bulldozer",
    icon: "🚧",
    description: "Track-type dozers, compactors",
  },
  {
    type: "Car",
    label: "Car",
    icon: "🚗",
    description: "Passenger cars, sedans, hatchbacks",
  },
  {
    type: "Bike",
    label: "Bike",
    icon: "🏍️",
    description: "Motorcycles, dirt bikes, sport bikes",
  },
  {
    type: "Aeroplane",
    label: "Aeroplane",
    icon: "✈️",
    description: "Aircraft ground support equipment",
  },
  {
    type: "Scooty",
    label: "Scooty",
    icon: "🛵",
    description: "Scooters, mopeds, e-scooters",
  },
  {
    type: "Truck",
    label: "Truck",
    icon: "🚛",
    description: "Heavy trucks, trailers, tipper trucks",
  },
];
