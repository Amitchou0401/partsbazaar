import List "mo:core/List";
import Common "../types/common";
import Types "../types/parts";
import OrdersLib "../lib/orders";

mixin (
  orders : List.List<Types.Order>,
  parts : List.List<Types.Part>,
) {
  public shared func placeOrder(
    items : [Types.CartItem],
    shippingInfo : Common.ShippingInfo,
  ) : async { #ok : Common.OrderId; #err : Text } {
    let orderId = orders.size() + 1;
    OrdersLib.placeOrder(orders, parts, orderId, items, shippingInfo);
  };

  public query func getOrder(id : Common.OrderId) : async ?Types.Order {
    OrdersLib.getOrder(orders, id);
  };
};
