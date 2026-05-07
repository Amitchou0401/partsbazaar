import List "mo:core/List";
import PartsLib "lib/parts";
import PartsApi "mixins/parts-api";
import OrdersApi "mixins/orders-api";
import Types "types/parts";

actor {
  let parts : List.List<Types.Part> = List.fromArray(PartsLib.seedParts());
  let orders : List.List<Types.Order> = List.empty();
  include PartsApi(parts);
  include OrdersApi(orders, parts);
};

