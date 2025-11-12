const refreshBtn = document.getElementById('refresh-btn');
const searchBar = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cardContainer = document.getElementById('crypto-card');

async function getCryptoData(coin) {
  const country = document.getElementById('currency-select').value; 

  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${country}&ids=${coin}`;
  
  try {
    const response = await fetch(apiUrl);
    
    const data = await response.json();
    cardContainer.innerHTML = '';

    if (data.length > 0) {
      data.forEach(element => {
        let html = `
          <div class="bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div class="flex justify-between"> 
              <div class="h-[100px] w-[100px]">
                <img src="${element.image}" alt="${element.name}"
                  class="h-full w-full object-contain p-2 rounded-l-xl">
              </div>
              <div class="flex flex-col justify-center mr-4">
                <h2 class="text-xl font-bold text-white">${element.name}</h2>
                <p class="text-gray-400 uppercase text-sm">${element.symbol}</p>
              </div>
            </div>

            <div class="p-4 mt-8">
              <p class="text-gray-300 text-xl font-semibold">Price: ${element.current_price} ${country.toUpperCase()}</p>
              <p class="text-gray-300 mt-2">Market Cap: <span class="text-red-500 font-bold">${element.market_cap}</span></p>
              <p class="text-gray-300 mt-2">24h Change: 
                <span class="${element.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'} font-bold">
                  ${element.price_change_percentage_24h.toFixed(2)}%
                </span>
              </p>
            </div>
          </div>
        `;
        cardContainer.innerHTML += html;
      });
    } else {
      cardContainer.innerHTML = "<p class='text-white text-lg'>Cryptocurrency not found!</p>";
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    cardContainer.innerHTML = "<p class='text-white text-lg'>Error fetching data!</p>";
  }
}

searchBar.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    getCryptoData(searchBar.value.trim().toLowerCase());
  }
});

searchBtn.addEventListener('click', () => {
  getCryptoData(searchBar.value.trim().toLowerCase());
});

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});


// Hardcoded data
const hardcodedCoins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    current_price: 68000,
    market_cap: "1.2T",
    price_change_percentage_24h: 2.3
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    current_price: 3200,
    market_cap: "400B",
    price_change_percentage_24h: 1.1
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
    current_price: 0.25,
    market_cap: "35B",
    price_change_percentage_24h: -0.8
  },
  {
    name: "Cardano",
    symbol: "ADA",
    image: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
    current_price: 2.15,
    market_cap: "70B",
    price_change_percentage_24h: 3.5
  },{
    name: "Binance Coin",
    symbol: "BNB",
    image: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
    current_price: 450,
    market_cap: "75B",
    price_change_percentage_24h: 0.5
  }
];

// Function to display hardcoded cards
function displayHardcodedCoins() {
  cardContainer.innerHTML = '';
  hardcodedCoins.forEach(element => {
    const html = `
      <div class="bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 p-4">
        <div class="flex items-center gap-4">
          <img src="${element.image}" alt="${element.name}" class="h-16 w-16 object-contain">
          <div>
            <h2 class="text-xl font-bold text-white">${element.name}</h2>
            <p class="text-gray-400 uppercase text-sm">${element.symbol}</p>
          </div>
        </div>
        <div class="mt-4 text-gray-300">
          <p>💰 Price: ${element.current_price}</p>
          <p>🏦 Market Cap: ${element.market_cap}</p>
          <p>📈 24h Change: ${element.price_change_percentage_24h}%</p>
        </div>
      </div>
    `;
    cardContainer.innerHTML += html;
  });
}

// Display them on page load
displayHardcodedCoins();
