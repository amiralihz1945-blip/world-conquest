const WORLD_DATA_URL = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';

const selectedCountryName = { value: null };
const selectedCapital = { value: null };

const capitals = [
  { country: 'United States', name: 'Washington', lat: 38.9072, lon: -77.0369 },
  { country: 'Canada', name: 'Ottawa', lat: 45.4215, lon: -75.6972 },
  { country: 'Mexico', name: 'Mexico City', lat: 19.4326, lon: -99.1332 },
  { country: 'Brazil', name: 'Brasilia', lat: -15.7939, lon: -47.8828 },
  { country: 'Argentina', name: 'Buenos Aires', lat: -34.6037, lon: -58.3816 },
  { country: 'United Kingdom', name: 'London', lat: 51.5074, lon: -0.1278 },
  { country: 'France', name: 'Paris', lat: 48.8566, lon: 2.3522 },
  { country: 'Germany', name: 'Berlin', lat: 52.52, lon: 13.405 },
  { country: 'Spain', name: 'Madrid', lat: 40.4168, lon: -3.7038 },
  { country: 'Italy', name: 'Rome', lat: 41.9028, lon: 12.4964 },
  { country: 'Poland', name: 'Warsaw', lat: 52.2297, lon: 21.0122 },
  { country: 'Romania', name: 'Bucharest', lat: 44.4268, lon: 26.1025 },
  { country: 'Russia', name: 'Moscow', lat: 55.7558, lon: 37.6173 },
  { country: 'Turkey', name: 'Ankara', lat: 39.9334, lon: 32.8597 },
  { country: 'Greece', name: 'Athens', lat: 37.9838, lon: 23.7275 },
  { country: 'Ukraine', name: 'Kyiv', lat: 50.4501, lon: 30.5234 },
  { country: 'India', name: 'New Delhi', lat: 28.6139, lon: 77.209 },
  { country: 'China', name: 'Beijing', lat: 39.9042, lon: 116.4074 },
  { country: 'Japan', name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
  { country: 'South Korea', name: 'Seoul', lat: 37.5665, lon: 126.978 },
  { country: 'Indonesia', name: 'Jakarta', lat: -6.2088, lon: 106.8456 },
  { country: 'Australia', name: 'Canberra', lat: -35.2809, lon: 149.13 },
  { country: 'South Africa', name: 'Pretoria', lat: -25.7479, lon: 28.2293 },
  { country: 'Egypt', name: 'Cairo', lat: 30.0444, lon: 31.2357 },
  { country: 'Saudi Arabia', name: 'Riyadh', lat: 24.7136, lon: 46.6753 },
  { country: 'Nigeria', name: 'Abuja', lat: 9.0765, lon: 7.3986 },
  { country: 'Kenya', name: 'Nairobi', lat: -1.2864, lon: 36.8172 },
  { country: 'Iran', name: 'Tehran', lat: 35.6892, lon: 51.389 },
  { country: 'Pakistan', name: 'Islamabad', lat: 33.6844, lon: 73.0479 },
  { country: 'Afghanistan', name: 'Kabul', lat: 34.5553, lon: 69.2075 },
  { country: 'Thailand', name: 'Bangkok', lat: 13.7563, lon: 100.5018 },
  { country: 'Vietnam', name: 'Hanoi', lat: 21.0285, lon: 105.8542 },
  { country: 'Philippines', name: 'Manila', lat: 14.5995, lon: 120.9842 },
  { country: 'New Zealand', name: 'Wellington', lat: -41.2865, lon: 174.7762 },
  { country: 'Norway', name: 'Oslo', lat: 59.9139, lon: 10.7522 },
  { country: 'Sweden', name: 'Stockholm', lat: 59.3293, lon: 18.0686 },
  { country: 'Finland', name: 'Helsinki', lat: 60.1699, lon: 24.9384 },
  { country: 'Portugal', name: 'Lisbon', lat: 38.7223, lon: -9.1393 },
  { country: 'Ireland', name: 'Dublin', lat: 53.3498, lon: -6.2603 },
  { country: 'Netherlands', name: 'Amsterdam', lat: 52.3676, lon: 4.9041 },
  { country: 'Belgium', name: 'Brussels', lat: 50.8503, lon: 4.3517 },
  { country: 'Austria', name: 'Vienna', lat: 48.2082, lon: 16.3738 },
  { country: 'Switzerland', name: 'Bern', lat: 46.948, lon: 7.4474 },
  { country: 'Czechia', name: 'Prague', lat: 50.0755, lon: 14.4378 },
  { country: 'Hungary', name: 'Budapest', lat: 47.4979, lon: 19.0402 },
  { country: 'Serbia', name: 'Belgrade', lat: 44.7866, lon: 20.4489 },
  { country: 'Croatia', name: 'Zagreb', lat: 45.815, lon: 15.9819 },
  { country: 'Turkey', name: 'Ankara', lat: 39.9334, lon: 32.8597 },
  { country: 'Saudi Arabia', name: 'Riyadh', lat: 24.7136, lon: 46.6753 }
];

const majorCities = [
  { country: 'United States', name: 'New York', lat: 40.7128, lon: -74.006 },
  { country: 'Brazil', name: 'São Paulo', lat: -23.5505, lon: -46.6333 },
  { country: 'United Kingdom', name: 'Manchester', lat: 53.4808, lon: -2.2426 },
  { country: 'France', name: 'Lyon', lat: 45.764, lon: 4.8357 },
  { country: 'Germany', name: 'Hamburg', lat: 53.5511, lon: 9.9937 },
  { country: 'Spain', name: 'Barcelona', lat: 41.3851, lon: 2.1734 },
  { country: 'Italy', name: 'Milan', lat: 45.4642, lon: 9.19 },
  { country: 'Russia', name: 'Saint Petersburg', lat: 59.9343, lon: 30.3351 },
  { country: 'China', name: 'Shanghai', lat: 31.2304, lon: 121.4737 },
  { country: 'India', name: 'Mumbai', lat: 19.076, lon: 72.8777 },
  { country: 'Japan', name: 'Osaka', lat: 34.6937, lon: 135.5023 },
  { country: 'Australia', name: 'Sydney', lat: -33.8688, lon: 151.2093 },
  { country: 'South Africa', name: 'Cape Town', lat: -33.9249, lon: 18.4241 },
  { country: 'Egypt', name: 'Alexandria', lat: 31.2001, lon: 29.9187 },
  { country: 'Saudi Arabia', name: 'Jeddah', lat: 21.4858, lon: 39.1925 },
  { country: 'Mexico', name: 'Guadalajara', lat: 20.6597, lon: -103.3496 }
];

const world = {
  svg: document.getElementById('mapSvg'),
  root: null,
  projection: null,
  pathGenerator: null,
  zoomBehavior: null,
  countrySelection: null,
  capitalSelection: null,
  mapData: null
};

const panel = {
  name: document.getElementById('selectedName'),
  meta: document.getElementById('selectedMeta'),
  grid: document.getElementById('statGrid')
};

function getCountryColor(name) {
  const palette = ['#8ecae6', '#ffb703', '#fb8500', '#90be6d', '#9b2226', '#d00000', '#a2d2ff', '#8d99ae', '#cdb4db', '#ffd6a5', '#f4a261', '#2a9d8f', '#ffafcc', '#bde0fe', '#b8c0ff', '#cce3de', '#a0c4ff', '#f1faee', '#d4a373', '#7bdff2', '#f7d6e0', '#e9c46a', '#a8dadc', '#84a98c', '#bde0fe'];
  const hash = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return palette[hash % palette.length];
}

function getCapitalForCountry(name) {
  const direct = capitals.find((item) => item.country === name);
  return direct || capitals[0];
}

function setInfoPanel(countryName = null, cityName = null) {
  if (cityName) {
    panel.name.textContent = cityName;
    panel.meta.textContent = countryName || 'Major city';
    panel.grid.innerHTML = `
      <div class="stat-box"><span class="label">Type</span><span class="value">City</span></div>
      <div class="stat-box"><span class="label">Region</span><span class="value">Trade</span></div>
      <div class="stat-box"><span class="label">Pop.</span><span class="value">3.2M</span></div>
      <div class="stat-box"><span class="label">Infra</span><span class="value">88</span></div>
      <div class="stat-box"><span class="label">Economy</span><span class="value">High</span></div>
      <div class="stat-box"><span class="label">Status</span><span class="value">Active</span></div>
    `;
    return;
  }

  if (countryName) {
    const capital = getCapitalForCountry(countryName);
    panel.name.textContent = countryName;
    panel.meta.textContent = `Capital: ${capital.name}`;
    panel.grid.innerHTML = `
      <div class="stat-box"><span class="label">Power</span><span class="value">High</span></div>
      <div class="stat-box"><span class="label">Budget</span><span class="value">$34.8B</span></div>
      <div class="stat-box"><span class="label">Army</span><span class="value">1.2M</span></div>
      <div class="stat-box"><span class="label">Infra</span><span class="value">84</span></div>
      <div class="stat-box"><span class="label">Capital</span><span class="value">${capital.name}</span></div>
      <div class="stat-box"><span class="label">Stability</span><span class="value">82%</span></div>
    `;
    return;
  }

  panel.name.textContent = 'World';
  panel.meta.textContent = 'Campaign overview';
  panel.grid.innerHTML = `
    <div class="stat-box"><span class="label">Countries</span><span class="value">195</span></div>
    <div class="stat-box"><span class="label">Cities</span><span class="value">Global</span></div>
    <div class="stat-box"><span class="label">Threat</span><span class="value">High</span></div>
    <div class="stat-box"><span class="label">Economy</span><span class="value">Stable</span></div>
    <div class="stat-box"><span class="label">AI</span><span class="value">Active</span></div>
    <div class="stat-box"><span class="label">Map</span><span class="value">World</span></div>
  `;
}

function setupMap() {
  const svg = d3.select('#mapSvg');
  const width = 1600;
  const height = 860;

  world.root = svg.select('#mapRoot');
  world.projection = d3.geoNaturalEarth1().fitExtent([[20, 20], [width - 20, height - 20]], { type: 'Sphere' });
  world.pathGenerator = d3.geoPath(world.projection);

  world.zoomBehavior = d3.zoom()
    .scaleExtent([0.75, 7])
    .on('zoom', (event) => {
      world.root.attr('transform', event.transform);
    });

  svg.call(world.zoomBehavior);

  world.root.append('g').attr('class', 'countries-layer');
  world.root.append('g').attr('class', 'city-layer');
  world.root.append('g').attr('class', 'label-layer');
}

function renderCountries(data) {
  const countries = d3.select('.countries-layer')
    .selectAll('.country-shape')
    .data(data.features)
    .join('path')
    .attr('class', 'country-shape')
    .attr('d', world.pathGenerator)
    .attr('fill', (d) => getCountryColor(d.properties.name || 'Unknown'))
    .attr('stroke', 'rgba(18, 26, 31, 0.8)')
    .attr('stroke-width', 0.8)
    .style('cursor', 'pointer')
    .on('click', function (_, d) {
      const name = d.properties.name || 'Unknown';
      selectedCountryName.value = name;
      selectedCapital.value = getCapitalForCountry(name);
      d3.selectAll('.country-shape').classed('selected', (country) => (country.properties.name || 'Unknown') === name);
      setInfoPanel(name);
    });

  d3.select('.label-layer')
    .selectAll('.country-label')
    .data(data.features)
    .join('text')
    .attr('class', 'country-label')
    .attr('x', (d) => world.projection(d3.geoCentroid(d))[0])
    .attr('y', (d) => world.projection(d3.geoCentroid(d))[1])
    .text((d) => d.properties.name || '')
    .style('opacity', 0);

  d3.selectAll('.country-shape').classed('selected', (d) => (d.properties.name || 'Unknown') === selectedCountryName.value);
}

function renderCapitals() {
  const capitalLayer = d3.select('.city-layer').selectAll('.capital-marker')
    .data(capitals)
    .join('rect')
    .attr('class', 'capital-marker')
    .attr('width', 10)
    .attr('height', 10)
    .attr('x', (d) => {
      const p = world.projection([d.lon, d.lat]);
      return p ? p[0] - 5 : -9999;
    })
    .attr('y', (d) => {
      const p = world.projection([d.lon, d.lat]);
      return p ? p[1] - 5 : -9999;
    })
    .style('opacity', 1)
    .on('click', function (_, d) {
      selectedCountryName.value = d.country;
      selectedCapital.value = d;
      d3.selectAll('.capital-marker').classed('selected', (capital) => capital.name === d.name);
      setInfoPanel(d.country);
    });

  d3.select('.label-layer')
    .selectAll('.capital-label')
    .data(capitals)
    .join('text')
    .attr('class', 'city-label capital-label')
    .attr('x', (d) => {
      const p = world.projection([d.lon, d.lat]);
      return p ? p[0] + 12 : -9999;
    })
    .attr('y', (d) => {
      const p = world.projection([d.lon, d.lat]);
      return p ? p[1] - 8 : -9999;
    })
    .text((d) => d.name)
    .style('opacity', 0);
}

function renderMajorCities() {
  d3.select('.city-layer')
    .selectAll('.city-marker')
    .data(majorCities)
    .join('circle')
    .attr('class', 'city-marker')
    .attr('cx', (d) => {
      const p = world.projection([d.lon, d.lat]);
      return p ? p[0] : -9999;
    })
    .attr('cy', (d) => {
      const p = world.projection([d.lon, d.lat]);
      return p ? p[1] : -9999;
    })
    .attr('r', 4)
    .style('opacity', 0.95)
    .on('click', function (_, d) {
      selectedCountryName.value = d.country;
      selectedCapital.value = getCapitalForCountry(d.country);
      setInfoPanel(d.country, d.name);
    });

  d3.select('.label-layer')
    .selectAll('.city-label.non-capital')
    .data(majorCities)
    .join('text')
    .attr('class', 'city-label non-capital')
    .attr('x', (d) => {
      const p = world.projection([d.lon, d.lat]);
      return p ? p[0] + 10 : -9999;
    })
    .attr('y', (d) => {
      const p = world.projection([d.lon, d.lat]);
      return p ? p[1] - 10 : -9999;
    })
    .text((d) => d.name)
    .style('opacity', 0);
}

function updateMapLabelsByZoom() {
  const k = d3.zoomTransform(d3.select('#mapSvg').node()).k || 1;
  d3.selectAll('.country-label').style('opacity', k > 1.1 ? 1 : 0);
  d3.selectAll('.city-label').style('opacity', k > 1.45 ? 1 : 0);
  d3.selectAll('.city-marker').attr('r', k > 1.8 ? 5 : 4.25);
}

function loadMap() {
  fetch(WORLD_DATA_URL)
    .then((res) => res.json())
    .then((data) => {
      world.mapData = data;
      renderCountries(data);
      renderCapitals();
      renderMajorCities();
      setInfoPanel();
      updateMapLabelsByZoom();
    })
    .catch((err) => {
      console.error('Failed to load map data', err);
      setInfoPanel();
      panel.name.textContent = 'Map Load Error';
      panel.meta.textContent = 'Data source unavailable';
    });
}

function bindZoomControls() {
  const svg = document.getElementById('mapSvg');
  const zoomIn = document.getElementById('zoomInBtn');
  const zoomOut = document.getElementById('zoomOutBtn');
  const reset = document.getElementById('resetViewBtn');

  zoomIn.addEventListener('click', () => {
    d3.select(svg).transition().duration(200).call(world.zoomBehavior.scaleBy, 1.2);
    setTimeout(updateMapLabelsByZoom, 160);
  });

  zoomOut.addEventListener('click', () => {
    d3.select(svg).transition().duration(200).call(world.zoomBehavior.scaleBy, 0.85);
    setTimeout(updateMapLabelsByZoom, 160);
  });

  reset.addEventListener('click', () => {
    d3.select(svg).transition().duration(280).call(world.zoomBehavior.transform, d3.zoomIdentity);
    setTimeout(updateMapLabelsByZoom, 200);
  });

  svg.addEventListener('wheel', (event) => {
    event.preventDefault();
    const direction = event.deltaY < 0 ? 1.12 : 0.88;
    d3.select(svg).transition().duration(160).call(world.zoomBehavior.scaleBy, direction);
    setTimeout(updateMapLabelsByZoom, 150);
  }, { passive: false });
}

setupMap();
bindZoomControls();
loadMap();
setInfoPanel();
