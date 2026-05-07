import Common "common";

module {
  public type Part = {
    id : Common.PartId;
    name : Text;
    partNumber : Text;
    description : Text;
    price : Nat;
    stockStatus : Common.StockStatus;
    images : [Text];
    equipmentType : Common.EquipmentType;
    modelCompatibility : [Text];
    category : Text;
    specifications : [(Text, Text)];
  };

  public type CartItem = {
    partId : Common.PartId;
    quantity : Nat;
  };

  public type Order = {
    id : Common.OrderId;
    items : [CartItem];
    shippingInfo : Common.ShippingInfo;
    total : Nat;
    createdAt : Common.Timestamp;
    status : Common.OrderStatus;
  };
};
