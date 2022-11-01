import { Reorder } from "framer-motion";

export default function Row({ crypto }) {
  return (
    <Reorder.Item as="tr" key={crypto.price_change_percentage_24h} value={crypto.price_change_percentage_24h}>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={crypto.image}
              alt="crypto banner"
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{crypto.name}</p>
            <p className="text-gray-600 whitespace-no-wrap">{crypto.symbol}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          ${crypto.current_price}
        </p>
        <p className="text-gray-600 whitespace-no-wrap">USD</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-600 whitespace-no-wrap">${crypto.market_cap}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-600 whitespace-no-wrap">
          ${crypto.total_volume}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-600 whitespace-no-wrap">
          ${crypto.price_change_24h}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-600 whitespace-no-wrap">
          {crypto.price_change_percentage_24h}%
        </p>
      </td>
      {crypto.price_change_percentage_24h > 0 ? (
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Upward Trend</span>
          </span>
        </td>
      ) : (
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Downward Trend</span>
          </span>
        </td>
      )}
   </Reorder.Item>
  );
}
