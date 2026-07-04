// 1. Create a function called makeGreeter(greeting)
//    It should return a function that takes a name
//    and logs `${greeting}, ${name}!`
//
//    const sayKia = makeGreeter('Kia ora')
//    sayKia('Wellington')  // logs: "Kia ora, Wellington!"
//    sayKia('Otago')       // logs: "Kia ora, Otago!"

function makeGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}
const sayKia = makeGreeter("Kia ora");
sayKia("Wellington");
sayKia("Otago");
// 2. Create a function called makePopulationChecker(threshold)
//    It returns a function that takes a region object
//    and returns true if population > threshold
//
//    const isLargeRegion = makePopulationChecker(400000)
//
//    const regions = [
//      { name: 'Auckland',   population: 1700000 },
//      { name: 'Wellington', population: 215000  },
//      { name: 'Waikato',    population: 490000  },
//    ]
//
//    console.log(regions.filter(isLargeRegion))
//    // should print Auckland and Waikato only
function makePopulationChecker(threshold){
  return function(region){
    return region.population > threshold;
  }
}
const isLargeRegion = makePopulationChecker(400000);

const regions = [
  { name: 'Auckland', population: 1700000},
  { name: 'Wellington', population: 215000  },
  { name: 'Waikato',    population: 490000  },
]

console.log(regions.filter(isLargeRegion))
