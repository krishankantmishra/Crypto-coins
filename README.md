# 🪙 Crypto Tracker

A **modern cryptocurrency tracking web app** built using **HTML**, **Tailwind CSS**, and **JavaScript**.  
It allows users to search and view real-time cryptocurrency prices, market caps, and 24-hour changes using the **CoinGecko API**.  
Additionally, the app displays some **hardcoded crypto cards** for quick demo purposes.

---

## 🚀 Features

✅ **Live Search:** Search any cryptocurrency using the CoinGecko API.  
✅ **Currency Selector:** View crypto prices in different currencies (USD, INR, EUR, etc.).  
✅ **Auto Refresh:** Instantly refresh the page with one click.  
✅ **Responsive Design:** Fully optimized for mobile, tablet, and desktop.  
✅ **Hardcoded Demo Coins:** Displays Bitcoin, Ethereum, Dogecoin, Cardano, and BNB as default cards.  
✅ **Clean UI:** Built with Tailwind CSS for a modern and smooth experience.

---

## 🧠 Tech Stack

- **HTML5** – structure of the web app
- **Tailwind CSS** – for fast, responsive, and modern UI styling
- **JavaScript (ES6)** – for logic and API handling
- **CoinGecko API** – for real-time cryptocurrency data

---

## 📦 Installation

1. Clone this repository

   ```bash
   git clone https://github.com/your-username/crypto-tracker.git
   ```

2. Open the project folder

   ```bash
   cd crypto-tracker
   ```

3. Open the `index.html` file directly in your browser
   ```bash
   start index.html
   ```
   (or just drag and drop it into your browser)

---

## 🧩 Folder Structure

```
crypto-tracker/
│
├── index.html        # Main HTML file
├── script.js         # All JavaScript logic (API, search, etc.)
└── README.md         # Project documentation
```

---

## ⚙️ How It Works

1. The user searches for a coin name (like `bitcoin`, `ethereum`, etc.).
2. The app calls the CoinGecko API to fetch market data for that coin.
3. The fetched details such as name, price, market cap, and 24h change are displayed dynamically.
4. If no coin is found, an error message appears.
5. When the page first loads, **hardcoded coins** (Bitcoin, Ethereum, Dogecoin, Cardano, and BNB) are shown.

---

## 🪄 Example Coins Displayed

| Coin         | Symbol | Example Price | 24h Change |
| ------------ | ------ | ------------- | ---------- |
| Bitcoin      | BTC    | $68,000       | +2.3%      |
| Ethereum     | ETH    | $3,200        | +1.1%      |
| Dogecoin     | DOGE   | $0.25         | -0.8%      |
| Cardano      | ADA    | $2.15         | +3.5%      |
| Binance Coin | BNB    | $450          | +0.5%      |

---

## 🧑‍💻 Author

**👤 Krishan Kant Mishra**  
Built with 💙 using HTML, Tailwind CSS, and JavaScript.

---

## 📜 License

This project is open-source and free to use.
