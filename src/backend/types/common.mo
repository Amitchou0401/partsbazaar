import Time "mo:core/Time";

module {
  public type Timestamp = Time.Time;
  public type OrderId = Nat;
  public type PartId = Nat;

  public type EquipmentType = {
    #JCB;
    #Tractor;
    #Crane;
    #Bulldozer;
    #Car;
    #Bike;
    #Aeroplane;
    #Scooty;
    #Truck;
  };

  public type StockStatus = {
    #InStock;
    #LowStock;
    #OutOfStock;
  };

  public type OrderStatus = {
    #Pending;
    #Confirmed;
    #Shipped;
    #Delivered;
    #Cancelled;
  };

  public type ShippingInfo = {
    name : Text;
    addressLine1 : Text;
    addressLine2 : Text;
    city : Text;
    state : Text;
    pincode : Text;
    phone : Text;
  };
};
