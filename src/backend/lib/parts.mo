import List "mo:core/List";
import Common "../types/common";
import Types "../types/parts";

module {
  public func getParts(
    parts : List.List<Types.Part>,
    equipmentType : ?Common.EquipmentType,
    model : ?Text,
    category : ?Text,
    searchQuery : ?Text,
  ) : [Types.Part] {
    let filtered = parts.filter(func(p : Types.Part) : Bool {
      let matchEquipment = switch (equipmentType) {
        case null true;
        case (?et) p.equipmentType == et;
      };
      let matchModel = switch (model) {
        case null true;
        case (?m) p.modelCompatibility.find(func(mc : Text) : Bool { mc == m }) != null;
      };
      let matchCategory = switch (category) {
        case null true;
        case (?cat) p.category == cat;
      };
      let matchSearch = switch (searchQuery) {
        case null true;
        case (?q) {
          let lower = q.toLower();
          p.name.toLower().contains(#text lower) or
          p.partNumber.toLower().contains(#text lower) or
          p.description.toLower().contains(#text lower);
        };
      };
      matchEquipment and matchModel and matchCategory and matchSearch;
    });
    filtered.toArray();
  };

  public func getPart(
    parts : List.List<Types.Part>,
    id : Common.PartId,
  ) : ?Types.Part {
    parts.find(func(p : Types.Part) : Bool { p.id == id });
  };

  public func getEquipmentModels(
    parts : List.List<Types.Part>,
    equipmentType : Common.EquipmentType,
  ) : [Text] {
    let seen = List.empty<Text>();
    parts.forEach(func(p : Types.Part) {
      if (p.equipmentType == equipmentType) {
        p.modelCompatibility.forEach(func(m : Text) {
          if (seen.find(func(s : Text) : Bool { s == m }) == null) {
            seen.add(m);
          };
        });
      };
    });
    seen.toArray();
  };

  public func getPartCategories(
    parts : List.List<Types.Part>,
    equipmentType : Common.EquipmentType,
    model : ?Text,
  ) : [Text] {
    let seen = List.empty<Text>();
    parts.forEach(func(p : Types.Part) {
      let matchEquipment = p.equipmentType == equipmentType;
      let matchModel = switch (model) {
        case null true;
        case (?m) p.modelCompatibility.find(func(mc : Text) : Bool { mc == m }) != null;
      };
      if (matchEquipment and matchModel) {
        if (seen.find(func(s : Text) : Bool { s == p.category }) == null) {
          seen.add(p.category);
        };
      };
    });
    seen.toArray();
  };

  public func searchParts(
    parts : List.List<Types.Part>,
    searchQuery : Text,
  ) : [Types.Part] {
    let lower = searchQuery.toLower();
    parts.filter(func(p : Types.Part) : Bool {
      p.name.toLower().contains(#text lower) or
      p.partNumber.toLower().contains(#text lower) or
      p.description.toLower().contains(#text lower) or
      p.category.toLower().contains(#text lower);
    }).toArray();
  };

  public func seedParts() : [Types.Part] {
    [
      // JCB Parts
      {
        id = 1;
        name = "JCB Hydraulic Pump";
        partNumber = "JCB-HP-3CX-001";
        description = "Original hydraulic pump for JCB 3CX backhoe loader. Ensures optimal hydraulic pressure.";
        price = 45000;
        stockStatus = #InStock;
        images = ["/images/parts/jcb-hydraulic-pump.jpg"];
        equipmentType = #JCB;
        modelCompatibility = ["3CX", "4CX", "3DX"];
        category = "Hydraulics";
        specifications = [("Flow Rate", "100 L/min"), ("Pressure", "350 bar"), ("Weight", "12 kg")];
      },
      {
        id = 2;
        name = "JCB Engine Filter Kit";
        partNumber = "JCB-EFK-3CX-002";
        description = "Complete engine filter kit including oil, air, and fuel filters for JCB excavators.";
        price = 3500;
        stockStatus = #InStock;
        images = ["/images/parts/jcb-filter-kit.jpg"];
        equipmentType = #JCB;
        modelCompatibility = ["3CX", "4CX", "JS220", "JS130"];
        category = "Filters";
        specifications = [("Oil Filter", "Spin-on type"), ("Air Filter", "Dry element"), ("Fuel Filter", "10 micron")];
      },
      {
        id = 3;
        name = "JCB Bucket Teeth Set";
        partNumber = "JCB-BT-JS220-003";
        description = "Heavy duty bucket teeth set for JCB excavators. High wear resistance.";
        price = 8500;
        stockStatus = #InStock;
        images = ["/images/parts/jcb-bucket-teeth.jpg"];
        equipmentType = #JCB;
        modelCompatibility = ["JS220", "JS130", "JS300"];
        category = "Ground Engaging Tools";
        specifications = [("Material", "High Carbon Steel"), ("Quantity", "6 teeth"), ("Type", "Twin Tiger")];
      },
      // Tractor Parts
      {
        id = 4;
        name = "Tractor PTO Shaft";
        partNumber = "TRC-PTO-3600-004";
        description = "Power Take Off shaft assembly for Mahindra and Eicher tractors. Smooth power transmission.";
        price = 12000;
        stockStatus = #InStock;
        images = ["/images/parts/tractor-pto-shaft.jpg"];
        equipmentType = #Tractor;
        modelCompatibility = ["Mahindra 575", "Mahindra 265", "Eicher 368"];
        category = "Power Train";
        specifications = [("Spline Count", "6"), ("Length", "600 mm"), ("RPM", "540/1000")];
      },
      {
        id = 5;
        name = "Tractor Clutch Plate";
        partNumber = "TRC-CP-MH-005";
        description = "Heavy duty clutch plate for Mahindra tractors. Extended service life.";
        price = 4200;
        stockStatus = #InStock;
        images = ["/images/parts/tractor-clutch.jpg"];
        equipmentType = #Tractor;
        modelCompatibility = ["Mahindra 475", "Mahindra 575", "Mahindra 265"];
        category = "Clutch";
        specifications = [("Diameter", "280 mm"), ("Material", "Cerametallic"), ("Springs", "6 coil")];
      },
      {
        id = 6;
        name = "Tractor Hydraulic Cylinder";
        partNumber = "TRC-HC-SWARAJ-006";
        description = "Lift arm hydraulic cylinder for Swaraj and Punjab tractors.";
        price = 9800;
        stockStatus = #LowStock;
        images = ["/images/parts/tractor-hyd-cylinder.jpg"];
        equipmentType = #Tractor;
        modelCompatibility = ["Swaraj 855", "Swaraj 735", "Punjab Tractors"];
        category = "Hydraulics";
        specifications = [("Bore", "90 mm"), ("Stroke", "200 mm"), ("Pressure", "180 bar")];
      },
      // Crane Parts
      {
        id = 7;
        name = "Crane Wire Rope";
        partNumber = "CRN-WR-6x36-007";
        description = "High tensile steel wire rope for crane hoisting operations. 6x36 construction.";
        price = 25000;
        stockStatus = #InStock;
        images = ["/images/parts/crane-wire-rope.jpg"];
        equipmentType = #Crane;
        modelCompatibility = ["Grove RT530E", "Liebherr LTM1100", "Tadano GR-700EX"];
        category = "Hoisting";
        specifications = [("Diameter", "20 mm"), ("Length", "100 m"), ("Breaking Load", "32 tons")];
      },
      {
        id = 8;
        name = "Crane Slewing Ring Bearing";
        partNumber = "CRN-SRB-008";
        description = "Slewing ring bearing for crane turntable rotation. Precision engineered.";
        price = 85000;
        stockStatus = #LowStock;
        images = ["/images/parts/crane-slewing-bearing.jpg"];
        equipmentType = #Crane;
        modelCompatibility = ["Grove RT530E", "Manitowoc 14000"];
        category = "Bearings";
        specifications = [("Outer Diameter", "1500 mm"), ("Load Capacity", "150 tons"), ("Type", "Four-point contact")];
      },
      // Bulldozer Parts
      {
        id = 9;
        name = "Bulldozer Track Shoe";
        partNumber = "BLD-TS-D6R-009";
        description = "Heavy duty track shoe for Caterpillar D6 bulldozer. Superior traction.";
        price = 3200;
        stockStatus = #InStock;
        images = ["/images/parts/bulldozer-track-shoe.jpg"];
        equipmentType = #Bulldozer;
        modelCompatibility = ["CAT D6R", "CAT D7R", "Komatsu D65"];
        category = "Undercarriage";
        specifications = [("Width", "560 mm"), ("Material", "Alloy Steel"), ("Grouser Height", "90 mm")];
      },
      {
        id = 10;
        name = "Bulldozer Blade Cutting Edge";
        partNumber = "BLD-BCE-D8-010";
        description = "Replacement cutting edge for bulldozer blade. Hardened steel for long life.";
        price = 15500;
        stockStatus = #InStock;
        images = ["/images/parts/bulldozer-blade-edge.jpg"];
        equipmentType = #Bulldozer;
        modelCompatibility = ["CAT D8T", "CAT D8R", "Komatsu D85"];
        category = "Blade Components";
        specifications = [("Length", "3600 mm"), ("Thickness", "25 mm"), ("Hardness", "400 BHN")];
      },
      // Car Parts
      {
        id = 11;
        name = "Car Disc Brake Pads Set";
        partNumber = "CAR-BP-UNI-011";
        description = "Premium ceramic disc brake pads. Low dust, low noise formula.";
        price = 1800;
        stockStatus = #InStock;
        images = ["/images/parts/car-brake-pads.jpg"];
        equipmentType = #Car;
        modelCompatibility = ["Maruti Swift", "Hyundai i20", "Honda City", "Toyota Etios"];
        category = "Brakes";
        specifications = [("Material", "Ceramic"), ("Set", "4 pads"), ("Wear Indicator", "Yes")];
      },
      {
        id = 12;
        name = "Car Engine Oil Filter";
        partNumber = "CAR-EOF-012";
        description = "OEM quality engine oil filter for passenger cars. Removes contaminants effectively.";
        price = 350;
        stockStatus = #InStock;
        images = ["/images/parts/car-oil-filter.jpg"];
        equipmentType = #Car;
        modelCompatibility = ["Maruti Swift", "Maruti Baleno", "Hyundai i20", "Hyundai Grand i10"];
        category = "Filters";
        specifications = [("Thread", "M20x1.5"), ("Height", "75 mm"), ("Micron Rating", "25")];
      },
      {
        id = 13;
        name = "Car Alternator";
        partNumber = "CAR-ALT-014";
        description = "High output alternator for reliable charging. Direct replacement OEM part.";
        price = 6500;
        stockStatus = #InStock;
        images = ["/images/parts/car-alternator.jpg"];
        equipmentType = #Car;
        modelCompatibility = ["Honda City", "Honda Amaze", "Toyota Innova"];
        category = "Electrical";
        specifications = [("Output", "90A"), ("Voltage", "14V"), ("Pulley Type", "OAP")];
      },
      // Bike Parts
      {
        id = 14;
        name = "Bike Chain Sprocket Kit";
        partNumber = "BKE-CSK-014";
        description = "Complete chain and sprocket kit for commuter bikes. Extended service life.";
        price = 1200;
        stockStatus = #InStock;
        images = ["/images/parts/bike-chain-sprocket.jpg"];
        equipmentType = #Bike;
        modelCompatibility = ["Hero Splendor", "Bajaj Pulsar 150", "TVS Apache 160"];
        category = "Drive Train";
        specifications = [("Chain Links", "118"), ("Front Sprocket", "15T"), ("Rear Sprocket", "41T")];
      },
      {
        id = 15;
        name = "Bike Brake Shoe Set";
        partNumber = "BKE-BSS-015";
        description = "High friction brake shoe set for drum brakes on commuter motorcycles.";
        price = 450;
        stockStatus = #InStock;
        images = ["/images/parts/bike-brake-shoe.jpg"];
        equipmentType = #Bike;
        modelCompatibility = ["Hero HF Deluxe", "Hero Splendor Plus", "Bajaj CT100"];
        category = "Brakes";
        specifications = [("Diameter", "110 mm"), ("Width", "25 mm"), ("Material", "Semi-metallic")];
      },
      // Aeroplane Parts
      {
        id = 16;
        name = "Aircraft Spark Plug";
        partNumber = "AIR-SP-LYCO-016";
        description = "Aviation grade spark plug for Lycoming and Continental aircraft engines. FAA approved.";
        price = 4500;
        stockStatus = #InStock;
        images = ["/images/parts/aircraft-spark-plug.jpg"];
        equipmentType = #Aeroplane;
        modelCompatibility = ["Cessna 172", "Piper PA-28", "Beechcraft Bonanza"];
        category = "Ignition";
        specifications = [("Thread", "18mm"), ("Reach", "Long"), ("Type", "Fine wire")];
      },
      {
        id = 17;
        name = "Aircraft Wheel Bearing";
        partNumber = "AIR-WB-MAIN-017";
        description = "Main landing gear wheel bearing for light aircraft. High load rated.";
        price = 12000;
        stockStatus = #LowStock;
        images = ["/images/parts/aircraft-wheel-bearing.jpg"];
        equipmentType = #Aeroplane;
        modelCompatibility = ["Cessna 172", "Cessna 182", "Piper PA-28"];
        category = "Landing Gear";
        specifications = [("Type", "Tapered roller"), ("Inner Diameter", "30 mm"), ("Outer Diameter", "72 mm")];
      },
      // Scooty Parts
      {
        id = 18;
        name = "Scooty Drive Belt";
        partNumber = "SCO-DB-ACTIVA-018";
        description = "CVT drive belt for Honda Activa and similar scooters. Smooth acceleration.";
        price = 850;
        stockStatus = #InStock;
        images = ["/images/parts/scooty-drive-belt.jpg"];
        equipmentType = #Scooty;
        modelCompatibility = ["Honda Activa 6G", "Honda Activa 5G", "Honda Dio"];
        category = "Drive Train";
        specifications = [("Width", "18.5 mm"), ("Length", "669 mm"), ("Type", "CVT")];
      },
      {
        id = 19;
        name = "Scooty Carburetor";
        partNumber = "SCO-CARB-019";
        description = "Replacement carburetor for Suzuki Access and similar scooters.";
        price = 2200;
        stockStatus = #InStock;
        images = ["/images/parts/scooty-carb.jpg"];
        equipmentType = #Scooty;
        modelCompatibility = ["Suzuki Access 125", "Suzuki Burgman", "TVS Jupiter"];
        category = "Fuel System";
        specifications = [("Bore Size", "24 mm"), ("Jet Size", "98"), ("Type", "Constant vacuum")];
      },
      // Truck Parts
      {
        id = 20;
        name = "Truck Clutch Assembly";
        partNumber = "TRK-CA-TATA-020";
        description = "Heavy duty clutch assembly for Tata and Ashok Leyland trucks. High torque capacity.";
        price = 18500;
        stockStatus = #InStock;
        images = ["/images/parts/truck-clutch.jpg"];
        equipmentType = #Truck;
        modelCompatibility = ["Tata 407", "Tata 709", "Tata 1612", "Ashok Leyland Dost"];
        category = "Clutch";
        specifications = [("Diameter", "380 mm"), ("Torque Capacity", "800 Nm"), ("Springs", "12 coil")];
      },
      {
        id = 21;
        name = "Truck Air Brake Chamber";
        partNumber = "TRK-ABC-021";
        description = "Spring brake chamber for air brake systems on heavy trucks.";
        price = 5500;
        stockStatus = #InStock;
        images = ["/images/parts/truck-brake-chamber.jpg"];
        equipmentType = #Truck;
        modelCompatibility = ["Tata Prima", "Tata Signa", "Mahindra Furio", "Ashok Leyland U-Truck"];
        category = "Brakes";
        specifications = [("Type", "Type 30/30"), ("Stroke", "57 mm"), ("Port Size", "3/8 NPT")];
      },
      {
        id = 22;
        name = "Truck Leaf Spring Assembly";
        partNumber = "TRK-LSA-022";
        description = "Front axle leaf spring assembly for medium duty trucks.";
        price = 9200;
        stockStatus = #InStock;
        images = ["/images/parts/truck-leaf-spring.jpg"];
        equipmentType = #Truck;
        modelCompatibility = ["Tata 407", "Tata 709", "Eicher 11.10"];
        category = "Suspension";
        specifications = [("Leaves", "7"), ("Width", "70 mm"), ("Rating", "2500 kg")];
      },
    ];
  };
};
