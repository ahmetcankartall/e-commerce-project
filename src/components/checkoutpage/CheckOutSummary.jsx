

import {
  selectCartGrandTotal
} from "../../store/selectors/cartTotalSelector";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { Trash2 } from 'lucide-react';
import { increaseCartItemCount, decreaseCartItemCount, deleteCartItemCount } from "../../store/thunks/cartThunks";





export default function CheckOutSummary() {
  const dispatch = useDispatch();
 
const cart = useSelector((state) => state.shop.cart);
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
    <div className="sticky top-24 bg-w rounded-2xl border p-6 flex flex-col gap-6 overflow-y-auto h-[800px]">

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

      

      {/* Total */}
      <div className="flex justify-between text-base font-semibold">
        <span>Genel Toplam:</span>
        <span>₺{grandTotal.toFixed(2)}</span>
      </div>

      <p className="text-xs text-gray-500">
        Alışverişinizi tamamlamak için ödeme adımına geçmeniz gerekmektedir. Ödeme adımına geçmek için lütfen adres seçimi yapınız.
      </p>
         {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-12 border-[#111111]">

          {/* Örnek item */}

          {cart && cart.length > 0 ? (cart.map((item) => (
            <div key={item.product.id} className="flex items-center gap-4 border-b pb-4  border-[#111111] w-full lg:max-w-[500px] max-w-[414px] relative">
              <img className="w-24 h-40 bg-gray-200 rounded-md flex-shrink-0 object-cover" src={item.product.images?.[0]?.url} alt={item.product.name} />
              <div className="flex flex-col  gap-3   ">

                <span className="text-sm font-montserrat font-bold  w-full max-w-[400px] line-clamp-2 " >{item.product.name}</span>
                <span className="text-xs text-gray-500 font-montserrat">{item.product.description}</span>
                <span className="text-sm font-semibold mt-1 ">Fiyat : ₺{item.product.price}</span>
                <div className="  flex flex-row  bg-[#f5f5f5] border border-[#efefef]  p-1  self-start rounded-lg" >
                  <button onClick={() => dispatch(decreaseCartItemCount(item.product.id))} className="px-2 py-1 text-sm  hover:cursor-pointer font-montserrat text-sm rounded-lg hover:bg-gray-200">-</button>
                  <span className="px-4 py-1 text-sm font-montserrat text-sm font-bold">{item.count}</span>
                  <button onClick={() => dispatch(increaseCartItemCount(item.product.id))} className="px-2 py-1 text-sm  hover:cursor-pointer rounded-lg font-montserrat text-sm hover:bg-gray-200">+</button>

                </div>

              </div>
              <button
                onClick={() => dispatch(deleteCartItemCount(item.product.id))}
                className="absolute bottom-6 right-5 p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                aria-label="Ürünü sil"
              >
                <Trash2 />
              </button>
            </div>))) : (
            <p className="text-gray-500 text-sm text-center mt-10">Sepetiniz boş</p>
          )}






        </div>
   

      {/* Checkout */}
      <Link to="/shop" className="w-full">
      <button
     
        className={`w-full py-3 rounded-full font-medium transition cursor-pointer hover:bg-cyan-700 bg-cyan-600 text-white hover:opacity-900`}>
        Alışverişe Devam Et
      </button>
      </Link>
    </div>
  );
}
