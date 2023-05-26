"use strict";
function createsIntel(processor) {
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
function createsAmd(processor) {
    console.log(`
    ---------
    terimakasih telah membeli processor ${processor.brand}🤩
    dengan detail berikut :
    nama base mode :${processor.basedModel} 
    nama model :${processor.modelName}
    dengan core total ${processor.coreTotal}
    dengan clock speed ${processor.clockSize} Ghz
    precision boost : ${processor.precisionBoost ? processor.precisionBoost : "tidak ada"} 
  `);
}
// inter i5
const intelCoreI5 = {
    brand: "Intel",
    basedModel: "Core i5",
    modelName: "i5-9400F",
    coreTotal: 6,
    clockSize: 2.9,
    turboBoost: true,
};
// ryzen 1
const AmdRyzen1 = {
    brand: "AMD",
    basedModel: "Ryzen 1",
    modelName: "Ryzen 5 1600",
    coreTotal: 12,
    clockSize: 3.2,
    precisionBoost: true,
};
// ryzen 3
const AmdRyzen3 = {
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
