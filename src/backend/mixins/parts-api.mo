import List "mo:core/List";
import Common "../types/common";
import Types "../types/parts";
import PartsLib "../lib/parts";

mixin (parts : List.List<Types.Part>) {
  public query func getParts(
    equipmentType : ?Common.EquipmentType,
    model : ?Text,
    category : ?Text,
    searchQuery : ?Text,
  ) : async [Types.Part] {
    PartsLib.getParts(parts, equipmentType, model, category, searchQuery);
  };

  public query func getPart(id : Common.PartId) : async ?Types.Part {
    PartsLib.getPart(parts, id);
  };

  public query func getEquipmentModels(equipmentType : Common.EquipmentType) : async [Text] {
    PartsLib.getEquipmentModels(parts, equipmentType);
  };

  public query func getPartCategories(
    equipmentType : Common.EquipmentType,
    model : ?Text,
  ) : async [Text] {
    PartsLib.getPartCategories(parts, equipmentType, model);
  };

  public query func searchParts(searchQuery : Text) : async [Types.Part] {
    PartsLib.searchParts(parts, searchQuery);
  };
};
