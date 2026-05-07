import type { backendInterface } from "../backend";
import { EquipmentType, StockStatus, OrderStatus } from "../backend";

const sampleParts = [
  {
    id: BigInt(1),
    partNumber: "JCB-HYD-001",
    name: "Hydraulic Pump Assembly",
    description: "Heavy duty hydraulic pump for JCB 3CX backhoe loader. High pressure rated for maximum performance.",
    equipmentType: EquipmentType.JCB,
    category: "Hydraulic System",
    price: BigInt(45000),
    stockStatus: StockStatus.InStock,
    specifications: [
      ["Pressure Rating", "250 bar"],
      ["Flow Rate", "80 L/min"],
      ["Weight", "12 kg"],
    ] as Array<[string, string]>,
    modelCompatibility: ["JCB 3CX", "JCB 4CX"],
    images: [],
  },
  {
    id: BigInt(2),
    partNumber: "TRC-ENG-002",
    name: "Engine Gasket Set",
    description: "Complete engine gasket set for Mahindra/Eicher tractors. OEM quality materials.",
    equipmentType: EquipmentType.Tractor,
    category: "Engine",
    price: BigInt(3500),
    stockStatus: StockStatus.InStock,
    specifications: [
      ["Material", "Graphite + Steel"],
      ["Cylinder Count", "4"],
    ] as Array<[string, string]>,
    modelCompatibility: ["Mahindra 575", "Eicher 380"],
    images: [],
  },
  {
    id: BigInt(3),
    partNumber: "CAR-BRK-003",
    name: "Brake Disc Rotor",
    description: "Ventilated front brake disc rotor for Maruti Suzuki Swift. High carbon cast iron.",
    equipmentType: EquipmentType.Car,
    category: "Brakes",
    price: BigInt(2200),
    stockStatus: StockStatus.LowStock,
    specifications: [
      ["Diameter", "256mm"],
      ["Thickness", "22mm"],
    ] as Array<[string, string]>,
    modelCompatibility: ["Swift 2018+", "Baleno"],
    images: [],
  },
  {
    id: BigInt(4),
    partNumber: "BIK-CHN-004",
    name: "Chain Sprocket Kit",
    description: "O-ring chain and front/rear sprocket combo for Royal Enfield Bullet.",
    equipmentType: EquipmentType.Bike,
    category: "Drive Train",
    price: BigInt(1800),
    stockStatus: StockStatus.InStock,
    specifications: [
      ["Chain Links", "116"],
      ["Front Sprocket", "14T"],
      ["Rear Sprocket", "43T"],
    ] as Array<[string, string]>,
    modelCompatibility: ["RE Bullet 350", "RE Classic 350"],
    images: [],
  },
  {
    id: BigInt(5),
    partNumber: "TRK-AIR-005",
    name: "Air Filter Assembly",
    description: "Heavy duty air filter for Tata/Ashok Leyland trucks. Dual stage filtration.",
    equipmentType: EquipmentType.Truck,
    category: "Air System",
    price: BigInt(5500),
    stockStatus: StockStatus.InStock,
    specifications: [
      ["Filter Type", "Dry element"],
      ["Micron Rating", "5 micron"],
    ] as Array<[string, string]>,
    modelCompatibility: ["Tata LPT 2518", "Ashok Leyland 2518"],
    images: [],
  },
  {
    id: BigInt(6),
    partNumber: "CRN-CAB-006",
    name: "Crane Cabin Glass",
    description: "Toughened safety glass for Liebherr crane operator cabin. UV resistant coating.",
    equipmentType: EquipmentType.Crane,
    category: "Cabin",
    price: BigInt(18000),
    stockStatus: StockStatus.OutOfStock,
    specifications: [
      ["Thickness", "8mm"],
      ["Type", "Toughened"],
    ] as Array<[string, string]>,
    modelCompatibility: ["Liebherr LTM 1100"],
    images: [],
  },
];

export const mockBackend: backendInterface = {
  getParts: async (equipmentType, model, category, searchQuery) => {
    let result = [...sampleParts];
    if (equipmentType !== null) {
      result = result.filter((p) => p.equipmentType === equipmentType);
    }
    if (category !== null) {
      result = result.filter((p) => p.category === category);
    }
    if (searchQuery !== null && searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.partNumber.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return result;
  },

  getPart: async (id) => {
    return sampleParts.find((p) => p.id === id) ?? null;
  },

  searchParts: async (searchQuery) => {
    const q = searchQuery.toLowerCase();
    return sampleParts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.partNumber.toLowerCase().includes(q)
    );
  },

  getEquipmentModels: async (equipmentType) => {
    const modelMap: Record<string, string[]> = {
      [EquipmentType.JCB]: ["JCB 3CX", "JCB 4CX", "JCB 530-70"],
      [EquipmentType.Tractor]: ["Mahindra 575", "Eicher 380", "Sonalika 60"],
      [EquipmentType.Car]: ["Swift 2018+", "Baleno", "Maruti 800"],
      [EquipmentType.Bike]: ["RE Bullet 350", "RE Classic 350", "Hero Splendor"],
      [EquipmentType.Truck]: ["Tata LPT 2518", "Ashok Leyland 2518", "Eicher Pro 6031"],
      [EquipmentType.Crane]: ["Liebherr LTM 1100", "XCMG QY50K"],
      [EquipmentType.Bulldozer]: ["CAT D6", "Komatsu D65"],
      [EquipmentType.Aeroplane]: ["Cessna 172", "Piper PA-28"],
      [EquipmentType.Scooty]: ["Honda Activa 6G", "TVS Jupiter"],
    };
    return modelMap[equipmentType] ?? [];
  },

  getPartCategories: async (equipmentType, model) => {
    return ["Engine", "Hydraulic System", "Brakes", "Drive Train", "Air System", "Cabin", "Electrical", "Suspension"];
  },

  placeOrder: async (items, shippingInfo) => {
    return { __kind__: "ok" as const, ok: BigInt(1001) };
  },

  getOrder: async (id) => {
    return {
      id: BigInt(1001),
      status: OrderStatus.Confirmed,
      total: BigInt(48500),
      createdAt: BigInt(Date.now()),
      shippingInfo: {
        name: "Ramesh Kumar",
        phone: "9876543210",
        addressLine1: "123 Industrial Area",
        addressLine2: "Phase 2",
        city: "Ludhiana",
        state: "Punjab",
        pincode: "141001",
      },
      items: [{ partId: BigInt(1), quantity: BigInt(1) }],
    };
  },
};
