import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCartGrandTotal
} from "../../store/selectors/cartTotalSelector";

export default function OrderSummary() {
  const [accepted, setAccepted] = useState(false);

  const grandTotal = useSelector(selectCartGrandTotal);

  const FREE_SHIPPING_LIMIT = 2500;

  const remaining = Math.max(
    FREE_SHIPPING_LIMIT - grandTotal,
    0
  );

  const progress = Math.min(
    (grandTotal / FREE_SHIPPING_LIMIT) * 100,
    100
  );

  return (
    <div className="sticky top-24 bg-w rounded-2xl border p-6 flex flex-col gap-6 ">

      {/* Free Shipping */}
      <div className="flex flex-col gap-2">
        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-cyan-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {remaining > 0 ? (
          <p className="text-sm">
            Çantana{" "}
            <span className="font-semibold">
              {remaining.toFixed(2)} TL
            </span>{" "}
            tutarında ürün eklersen{" "}
            <span className="text-cyan-600 font-semibold">
              Kargo Ücreti Yok!
            </span>
          </p>
        ) : (
          <p className="text-sm text-green-600 font-semibold">
            🎉 Kargo Ücreti Yok!
          </p>
        )}
      </div>

      <hr />

      {/* Order Note */}
      <div>
        <h4 className="font-semibold mb-2">Sipariş notu ekle</h4>
        <textarea
          placeholder="Sipariş notu ekle"
          className="w-full border rounded-xl p-3 text-sm resize-none h-28 focus:outline-none"
        />
      </div>

      <hr />

      {/* Coupon */}
      <div>
        <h4 className="font-semibold mb-3">Kupon Ekle</h4>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Kupon Kodu"
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          <button className="bg-cyan-600 text-white px-6 rounded-full text-sm cursor-pointer hover:bg-cyan-700">
            Uygula
          </button>
        </div>
      </div>

      <hr />

      {/* Total */}
      <div className="flex justify-between text-base font-semibold">
        <span>Genel Toplam:</span>
        <span>₺{grandTotal.toFixed(2)}</span>
      </div>

      <p className="text-xs text-gray-500">
        Vergiler dahil. Kargo ve indirimler ödeme adımında hesaplanır.
      </p>

      {/* Agreement */}
      <label className="flex items-start gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-1"
        />
        <span>
          Mesafeli Satış Sözleşmesini Kabul Ediyorum{" "}
          <span className="underline cursor-pointer">
            Mesafeli Satış Sözleşmesi
          </span>
        </span>
      </label>

      {/* Checkout */}
      <button
        disabled={!accepted}
        className={`w-full py-3 rounded-full font-medium transition cursor-pointer hover:bg-cyan-700
          ${
            accepted
              ? "bg-cyan-600 text-white hover:opacity-90"
              : "bg-gray-400 text-white cursor-not-allowed hover:bg-gray-400"
          }
        `}
      >
        Ödeme
      </button>
    </div>
  );
}
