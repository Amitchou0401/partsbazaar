import { createActor } from "@/backend";
import type {
  CartItem,
  EquipmentType,
  Order,
  Part,
  ShippingInfo,
} from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function toEquipmentVariant(type: EquipmentType): Record<string, null> {
  return { [type]: null };
}

function fromBackendPart(raw: Record<string, unknown>): Part {
  const stockStatus = Object.keys(
    raw.stockStatus as Record<string, unknown>,
  )[0] as Part["stockStatus"];
  const equipmentType = Object.keys(
    raw.equipmentType as Record<string, unknown>,
  )[0] as EquipmentType;
  return {
    id: String(raw.id),
    name: String(raw.name),
    partNumber: String(raw.partNumber),
    description: String(raw.description),
    price: Number(raw.price),
    stockStatus,
    images: (raw.images as string[]) ?? [],
    equipmentType,
    modelCompatibility: (raw.modelCompatibility as string[]) ?? [],
    category: String(raw.category),
    specifications: (raw.specifications as [string, string][]) ?? [],
  };
}

function fromBackendOrder(raw: Record<string, unknown>): Order {
  const status = Object.keys(
    raw.status as Record<string, unknown>,
  )[0] as Order["status"];
  const items = (raw.items as Record<string, unknown>[]).map((item) => ({
    partId: String(item.partId),
    quantity: Number(item.quantity),
  }));
  const si = raw.shippingInfo as Record<string, string>;
  return {
    id: String(raw.id),
    items,
    shippingInfo: {
      name: si.name,
      addressLine1: si.addressLine1,
      addressLine2: si.addressLine2,
      city: si.city,
      state: si.state,
      pincode: si.pincode,
      phone: si.phone,
    },
    total: Number(raw.total),
    createdAt: BigInt(String(raw.createdAt)),
    status,
  };
}

export function useListParts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Part[]>({
    queryKey: ["parts"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await (
        actor as unknown as { listParts: () => Promise<unknown[]> }
      ).listParts();
      return result.map((r) => fromBackendPart(r as Record<string, unknown>));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPart(partId: string | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Part | null>({
    queryKey: ["part", partId],
    queryFn: async () => {
      if (!actor || !partId) return null;
      const result = await (
        actor as unknown as { getPart: (id: string) => Promise<unknown[]> }
      ).getPart(partId);
      if (!result || (result as unknown[]).length === 0) return null;
      return fromBackendPart(
        (result as unknown[])[0] as Record<string, unknown>,
      );
    },
    enabled: !!actor && !isFetching && !!partId,
  });
}

export function useSearchParts(query: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Part[]>({
    queryKey: ["parts", "search", query],
    queryFn: async () => {
      if (!actor || !query.trim()) return [];
      const result = await (
        actor as unknown as { searchParts: (q: string) => Promise<unknown[]> }
      ).searchParts(query);
      return result.map((r) => fromBackendPart(r as Record<string, unknown>));
    },
    enabled: !!actor && !isFetching && query.trim().length > 0,
  });
}

export function usePartsByEquipmentType(type: EquipmentType | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Part[]>({
    queryKey: ["parts", "equipment", type],
    queryFn: async () => {
      if (!actor || !type) return [];
      const result = await (
        actor as unknown as {
          getPartsByEquipmentType: (
            t: Record<string, null>,
          ) => Promise<unknown[]>;
        }
      ).getPartsByEquipmentType(toEquipmentVariant(type));
      return result.map((r) => fromBackendPart(r as Record<string, unknown>));
    },
    enabled: !!actor && !isFetching && !!type,
  });
}

export function usePlaceOrder() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<
    string,
    Error,
    { items: CartItem[]; shippingInfo: ShippingInfo }
  >({
    mutationFn: async ({ items, shippingInfo }) => {
      if (!actor) throw new Error("Actor not ready");
      const backendItems = items.map((i) => ({
        partId: i.partId,
        quantity: BigInt(i.quantity),
      }));
      const result = await (
        actor as unknown as {
          placeOrder: (
            items: unknown[],
            info: ShippingInfo,
          ) => Promise<unknown>;
        }
      ).placeOrder(backendItems, shippingInfo);
      return String(result);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["parts"] });
    },
  });
}

export function useGetOrder(orderId: string | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Order | null>({
    queryKey: ["order", orderId],
    queryFn: async () => {
      if (!actor || !orderId) return null;
      const result = await (
        actor as unknown as { getOrder: (id: string) => Promise<unknown[]> }
      ).getOrder(orderId);
      if (!result || (result as unknown[]).length === 0) return null;
      return fromBackendOrder(
        (result as unknown[])[0] as Record<string, unknown>,
      );
    },
    enabled: !!actor && !isFetching && !!orderId,
  });
}
