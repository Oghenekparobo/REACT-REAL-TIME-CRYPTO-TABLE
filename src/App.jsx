import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";

import Row from "./components/Row";
function App() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      const data = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const apiResponse = await data.json();
      const sortedData = apiResponse.sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      );
      // console.log( apiResponse );
      setCryptoData(sortedData);
    };

    const interval = setInterval(() => {
      fetchCryptoData();
      console.log("real time apiResponse ");
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [cryptoData]);

  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Crypto Real Time Table
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <Reorder.Group values={cryptoData} onReorder={setCryptoData}>
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Cryptocurrency
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Market Cap
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Total Volume
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price Change 24h
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price Percentage Change 24h
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price Trend
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cryptoData.map((data) => (
                      <Row key={data.id} crypto={data} />
                    ))}
                  </tbody>
                </table>
              </Reorder.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
