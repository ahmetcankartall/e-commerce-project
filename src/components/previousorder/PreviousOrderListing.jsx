import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPreviousOrdersThunk } from "../../store/thunks/orderThunk";

export default function PreviousOrderListing() {
  const dispatch = useDispatch();

 const previousOrders = useSelector(
  (state) => state.shop.previousOrders
);

const loading = useSelector(
  (state) => state.shop.loading
);



  useEffect(() => {
    dispatch(fetchPreviousOrdersThunk());
    
  }, [dispatch]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold font-montserrat">
        Önceki Siparişlerim
      </h2>

      {previousOrders.length === 0 && (
        <p className="text-red-500 font-montserrat">
          Henüz sipariş geçmişiniz bulunmamaktadır.
        </p>
      )}

      {previousOrders.map((order) => (
        <div key={order.id} className="border border-gray-300 p-4 rounded-lg mb-4 bg-white shadow-lg">
          <div className="border border-gray-300 bg-gray-100 p-4 rounded-lg ">
            <p className="font-bold font-montserrat" >Sipariş ID: {order.id}</p>
          <p className="font-bold font-montserrat" >Sipariş Tarihi: {order.order_date}</p>
          <p className="font-bold font-montserrat" >Toplam Fiyat: {order.price}</p></div>
          
           
             <div className="ml-4 space-y-2 p-4 ">
              <p className="font-semibold underline text-sky-600">Ürünler: </p>
      {order.products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 p-3 rounded-full px-6 bg-sky-50"
        >
         
          <span className="font-bold font-montserrat flex justify-between border-b pb-2"> Ürün İsmi:  {product.name}</span>
          <span className="font-semibold text-sm font-montserrat flex justify-between border-b pb-2">Ürün Fiyatı: {product.price} ₺</span>
          <span className="font-semibold text-sm font-montserrat flex justify-between ">Ürün Adedi:{product.count} adet</span>
          
        </div>
      ))}
    </div>
    <button className="border border-gray-300 p-3 rounded-full px-6 hover:bg-gray-100 cursor-pointer">Siparişi Tekrar Sipariş Et</button>
        </div>
      ))}
    </div>
  );
}
