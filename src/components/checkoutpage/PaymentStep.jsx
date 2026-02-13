import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-toastify"
import { fetchCards, deleteCard } from "../../store/thunks/CreditCardThunk";
import CardForm from "./CardForm";
import { selectCartGrandTotal } from "../../store/selectors/cartTotalSelector";
import { orderThunk } from "../../store/thunks/orderThunk";
import { useNavigate } from "react-router-dom";

export default function PaymentStep({ onBack }) {
  const dispatch = useDispatch();
const navigate = useNavigate();
 const cards = useSelector(
  (state) => state.shop.payment.cards
);
  const address = useSelector((state) => state.shop.address);
  const cart = useSelector((state) => state.shop.cart);
  const grandTotal = useSelector(selectCartGrandTotal);


  const [showForm, setShowForm] = useState(false);
  const [editCard, setEditCard] = useState(null);
  
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const hasNoCards = !cards || cards.length === 0;

  const handlePayment = async () => {
        // 🟢 1. KONTROLLER
        if (!selectedCardId) {
            toast.warning("Lütfen bir kart seçin");
            return;
        }

        if (!address || !address.id) {
            toast.error("Lütfen bir adres seçin");
            return;
        }

        if (!cart || cart.length === 0) {
            toast.error("Sepetiniz boş");
            return;
        }

        // 🟢 2. CHECKED ÜRÜN KONTROLÜ
        const checkedItems = cart.filter(item => item.checked);
        if (checkedItems.length === 0) {
            toast.error("Lütfen ödeme yapmak için ürün seçin");
            return;
        }

        // 🟢 3. SEÇİLİ KARTI BUL
        const selectedCard = cards.find(card => card.id === selectedCardId);
        if (!selectedCard) {
            toast.error("Kart bilgisi bulunamadı");
            return;
        }

      

        // 🟢 5. SİPARİŞ VERİSİNİ HAZIRLA - SADECE CHECKED ÜRÜNLER
        const orderData = {
            address_id: address.id,
            order_date: new Date().toISOString().split('T')[0],
            card_no: parseInt(selectedCard.card_no),
            card_name: selectedCard.name_on_card,
            card_expire_month: parseInt(selectedCard.expire_month),
            card_expire_year: parseInt(selectedCard.expire_year),
            card_ccv:"112",
            price: grandTotal, // 🟢 SELECTOR'DAN GELİYOR (sadece checked ürünler)
            products: checkedItems.map(item => ({ // 🟢 SADECE CHECKED ÜRÜNLER
                product_id: item.product.id,
                count: item.count,
                detail: item.product.description,
            }))
        };

        console.log("Sipariş verisi:", orderData);

        // 🟢 6. SİPARİŞ OLUŞTUR
        const result = await dispatch(orderThunk(orderData));

        // 🟢 7. SONUÇ
        if (result?.success) {
            toast.success("🎉 Siparişiniz alındı! Yönlendiriliyorsunuz...", {
                position: "top-center",
                autoClose: 3000,
            });

            setTimeout(() => {
                navigate("/");
            }, 3000);
        }

       
    };

  return (
    <div className="space-y-4">
        <div className="flex flex-row justify-between"> <p className="font-montserrat font-semibold">Seçtiğiniz Adres</p>
      <button onClick={onBack} className="underline font-montserrat font-semibold cursor-pointer">← Adres Seçimine Geri Dön</button></div>
       

      <div className="border p-4 rounded">
        <p className="font-bold">{address?.title}</p>
        <p>{address?.name} {address?.surname}</p>
        <p>{address?.phone}</p>
      </div>

      <div className="flex justify-between items-center">
        <h2 className=" font-extrabold font-montserrat text-[1.4rem]">Kartlarım</h2>
        <button
          onClick={() => {
            setEditCard(null);
            setShowForm(true);
          }}
          className="bg-black text-white px-3 py-1 rounded w-40 h-12 cursor-pointer font-montserrat font-semibold"
        >
          + Yeni Kart
        </button>
      </div>

      {hasNoCards && (
        <p className="text-red-500">Henüz kayıtlı kart yok lütfen yeni kart ekleyin.</p>
      )}

      {cards?.map((card) => (
        <div
          key={card.id}
          onClick={() => {setSelectedCardId(card.id),
            toast.info(`Kart **** **** **** ${card.card_no.slice(-4)} seçildi`);
          }}
          className={` p-4 shadow-md bg-gray-100 rounded cursor-pointer flex flex-row justify-between items-center
           ${selectedCardId === card.id
  ? "border border-black"
  : "border border-transparent"}
`}
        ><div className=" flex flex-row gap-24 items-center rounded p-4 w-full justify-center">
           
            <p className="font-montserrat text-sm font-semibold">Card NO: **** **** **** {card.card_no.slice(-4)}</p>
          <p className="font-montserrat text-sm font-semibold"> Name:{card.name_on_card}</p>
          <p className="font-montserrat text-sm font-semibold">Expire Date:{card.expire_month}/{card.expire_year}</p>
</div>
<div className="flex gap-3 items-center justify-center">
  
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEditCard(card);
                setShowForm(true);
              }}
              className="font-semibold font-montserrat cursor-pointer"
            >
              Düzenle
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteCard(card.id));
              }}
              className="font-semibold font-montserrat cursor-pointer text-red-500"
            >
              Sil
            </button>
          </div>
          
          
        </div>
      ))}

      {showForm && (
        <CardForm
          isOpen={showForm}
          initialData={editCard}
          onClose={() => setShowForm(false)}
        />
      )}
        <div className="flex justify-center mt-6">
  <button onClick={handlePayment} className="border px-4 py-2 rounded font-semibold bg-black text-white cursor-pointer rounded-full font-montserrat hover:bg-gray-800">
    Ödemeyi Tamamla
  </button>
</div>
    </div>
  );
}
