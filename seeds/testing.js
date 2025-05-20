const mpTrainsData = require('./mp.js'); // Assuming the data is in the same directory

function findMultipleTrains() {
  const routeCount = {};

  mpTrainsData.forEach(train => {
    const route = `${train.properties.from_station_name} - ${train.properties.to_station_name}`;
    if (routeCount[route]) {
      routeCount[route]++;
    } else {
      routeCount[route] = 1;
    }
  });

  const multipleTrainsRoutes = Object.entries(routeCount)
    .filter(([route, count]) => count > 1)
    .map(([route]) => route);

  return multipleTrainsRoutes;
}

console.log(findMultipleTrains());