import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Part {
    id: PartId;
    specifications: Array<[string, string]>;
    partNumber: string;
    stockStatus: StockStatus;
    name: string;
    equipmentType: EquipmentType;
    description: string;
    category: string;
    price: bigint;
    modelCompatibility: Array<string>;
    images: Array<string>;
}
export interface ShippingInfo {
    city: string;
    name: string;
    state: string;
    addressLine1: string;
    addressLine2: string;
    phone: string;
    pincode: string;
}
export type Timestamp = bigint;
export type PartId = bigint;
export interface CartItem {
    quantity: bigint;
    partId: PartId;
}
export interface Order {
    id: OrderId;
    status: OrderStatus;
    total: bigint;
    createdAt: Timestamp;
    shippingInfo: ShippingInfo;
    items: Array<CartItem>;
}
export type OrderId = bigint;
export enum EquipmentType {
    Car = "Car",
    JCB = "JCB",
    Bulldozer = "Bulldozer",
    Bike = "Bike",
    Tractor = "Tractor",
    Scooty = "Scooty",
    Truck = "Truck",
    Aeroplane = "Aeroplane",
    Crane = "Crane"
}
export enum OrderStatus {
    Delivered = "Delivered",
    Confirmed = "Confirmed",
    Cancelled = "Cancelled",
    Shipped = "Shipped",
    Pending = "Pending"
}
export enum StockStatus {
    OutOfStock = "OutOfStock",
    LowStock = "LowStock",
    InStock = "InStock"
}
export interface backendInterface {
    getEquipmentModels(equipmentType: EquipmentType): Promise<Array<string>>;
    getOrder(id: OrderId): Promise<Order | null>;
    getPart(id: PartId): Promise<Part | null>;
    getPartCategories(equipmentType: EquipmentType, model: string | null): Promise<Array<string>>;
    getParts(equipmentType: EquipmentType | null, model: string | null, category: string | null, searchQuery: string | null): Promise<Array<Part>>;
    placeOrder(items: Array<CartItem>, shippingInfo: ShippingInfo): Promise<{
        __kind__: "ok";
        ok: OrderId;
    } | {
        __kind__: "err";
        err: string;
    }>;
    searchParts(searchQuery: string): Promise<Array<Part>>;
}
