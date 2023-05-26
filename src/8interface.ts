type CoreCount = 2 | 4 | 6 | 8 | 12 | 16 | 32;
type CoreName =
  | "Dual Core"
  | "Quad Core"
  | "Hexa Core"
  | "Octa Core"
  | "Dodeca Core"
  | "Hexadeca Core"
  | "Dual Hexadeca Core";

type Core = CoreCount | CoreName;

interface IProcessor {
  brand: string;
  basedModel: string;
  modelName: string;
  coreTotal: Core;
  clockSize: number;
}

// Intel extends IProcessor
interface Intel extends IProcessor {
  turboBoost: boolean;
}

// AMD extends IProcessor
interface AMD extends IProcessor {
  precisionBoost: boolean;
}

function createsIntel(processor: Intel): void {
  console.log(`
    ---------
    terimakasih telah membeli processor ${processor.brand}🤩
    dengan detail berikut :
    nama base mode :${processor.basedModel} 
    nama model :${processor.modelName}
    dengan core total ${processor.coreTotal} 
    dengan clock speed ${processor.clockSize} Ghz
    turbo boost : ${processor.turboBoost ? processor.turboBoost : "tidak ada"}
  `);
}

function createsAmd(processor: AMD): void {
  console.log(`
    ---------
    terimakasih telah membeli processor ${processor.brand}🤩
    dengan detail berikut :
    nama base mode :${processor.basedModel} 
    nama model :${processor.modelName}
    dengan core total ${processor.coreTotal}
    dengan clock speed ${processor.clockSize} Ghz
    precision boost : ${
      processor.precisionBoost ? processor.precisionBoost : "tidak ada"
    } 
  `);
}

// inter i5
const intelCoreI5: Intel = {
  brand: "Intel",
  basedModel: "Core i5",
  modelName: "i5-9400F",
  coreTotal: 6,
  clockSize: 2.9,
  turboBoost: true,
};

// ryzen 1
const AmdRyzen1: AMD = {
  brand: "AMD",
  basedModel: "Ryzen 1",
  modelName: "Ryzen 5 1600",
  coreTotal: 12,
  clockSize: 3.2,
  precisionBoost: true,
};

// ryzen 3
const AmdRyzen3: AMD = {
  brand: "AMD",
  basedModel: "Ryzen 3",
  modelName: "Ryzen 3 3200G",
  coreTotal: 8,
  clockSize: 3.6,
  precisionBoost: true,
};

createsIntel(intelCoreI5);
createsAmd(AmdRyzen1);
createsAmd(AmdRyzen3);
