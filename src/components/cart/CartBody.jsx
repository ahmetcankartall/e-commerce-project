import { useDispatch, useSelector } from "react-redux";
import {
  increaseCartItemCount,
  decreaseCartItemCount,
  deleteCartItemCount,
  toggleCartItemChecked,
} from "../../store/thunks/cartThunks";
import { toast } from 'react-toastify';
import OrderSummary from "./OrderSummary";

export default function CartBody() {
      const showInfo = () => {
    toast.info("Ürün sepetten kaldırıldı.");
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop.cart);



  if (!cart || cart.length === 0) { 
    return <p className="text-center text-gray-500 mt-10">Sepetiniz boş</p>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      <div className="flex flex-col lg:flex-row gap-10">

        {/* SOL */}
        <div className="flex-1">

          {/* Header */}
          <div className="flex justify-between border-b pb-4 text-sm font-semibold">
            <span className="w-1/2">Ürün</span>
            <span className="w-1/6 text-center">Fiyat</span>
            <span className="w-1/6 text-center">Adet</span>
            <span className="w-1/6 text-right">Toplam</span>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col divide-y">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center py-6 text-sm"
              >

                {/* PRODUCT */}
                <div className="flex w-1/2 gap-4  items-center justify-start ">

                  {/* CHECKBOX */}
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() =>
                      dispatch(toggleCartItemChecked(item.product.id))
                    }
                    className="mt-2 h-[20px] w-[30px]"
                  />

                  <img
                    src={item.product.images?.[0]?.url}
                    alt={item.product.name}
                    className="w-24 h-32 rounded-md object-cover bg-gray-100"
                  />

                  <div className="flex flex-col gap-1">
                    <span className="font-semibold">
                      {item.product.name}
                    </span>
                    <span className="text-gray-500 text-xs">
                      Beden: S
                    </span>
                    <button
                      onClick={() => {
                        dispatch(deleteCartItemCount(item.product.id)); 
                        showInfo();}
                        }
                      className="text-xs underline text-gray-500 w-fit mt-2 hover:text-gray-700 cursor-pointer"
                    >
                      Kaldır
                    </button>
                  </div>
                </div>

                {/* PRICE */}
                <div className="w-1/6 text-center">
                  ₺{item.product.price.toFixed(2)}
                </div>

                {/* QUANTITY */}
                <div className="w-1/6 flex justify-center">
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 gap-3">
                    <button
                      onClick={() =>
                        dispatch(decreaseCartItemCount(item.product.id))
                      }
                      className="text-lg cursor-pointer"
                    >
                      −
                    </button>
                    <span className="font-medium">
                      {item.count}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(increaseCartItemCount(item.product.id))
                      }
                      className="text-lg cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* TOTAL */}
                <div className="w-1/6 text-right font-medium">
                  ₺{(item.product.price * item.count).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* INFO BOXES */}
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <InfoBox
              title="Soruların için"
              desc="İletişim sayfamızı inceleyebilirsin"
            />
            <InfoBox
              title="Güvenli Ödeme"
              desc="256 Bit SSL Sertifikası ile güvenli öde"
            />
            <InfoBox
              title="Gizlilik Koruma"
              desc="Gizliliğini senin kadar önemsiyoruz"
            />
          </div>
        </div>

        {/* SAĞ TARAF */}
        <div className="w-full lg:w-[380px] ">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

/* ---------------- INFO BOX ---------------- */

function InfoBox({ title, desc }) {
  return (
    <div className="flex-1 bg-gray-100 rounded-xl p-6 text-center">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
