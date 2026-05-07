import List "mo:core/List";
import Common "../types/common";
import Types "../types/parts";
import Time "mo:core/Time";

module {
  public func placeOrder(
    orders : List.List<Types.Order>,
    parts : List.List<Types.Part>,
    nextOrderId : Nat,
    items : [Types.CartItem],
    shippingInfo : Common.ShippingInfo,
  ) : { #ok : Common.OrderId; #err : Text } {
    if (items.size() == 0) {
      return #err("Order must contain at least one item");
    };
    var total : Nat = 0;
    for (item in items.values()) {
      switch (parts.find(func(p : Types.Part) : Bool { p.id == item.partId })) {
        case null { return #err("Part not found: " # item.partId.toText()) };
        case (?p) {
          if (p.stockStatus == #OutOfStock) {
            return #err("Part out of stock: " # p.name);
          };
          total += p.price * item.quantity;
        };
      };
    };
    let orderId = nextOrderId;
    let order : Types.Order = {
      id = orderId;
      items;
      shippingInfo;
      total;
      createdAt = Time.now();
      status = #Pending;
    };
    orders.add(order);
    #ok(orderId);
  };

  public func getOrder(
    orders : List.List<Types.Order>,
    id : Common.OrderId,
  ) : ?Types.Order {
    orders.find(func(o : Types.Order) : Bool { o.id == id });
  };
};
