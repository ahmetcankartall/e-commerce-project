import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    fetchCards,
    deleteCard,
} from "../../store/thunks/CreditCardThunk";
import { orderThunk } from "../../store/thunks/orderThunk";
import { selectCartGrandTotal } from "../../store/selectors/cartTotalSelector"; // 🟢 SELECTOR'U IMPORT ET
import CardForm from "./CardForm";

export default function PaymentStep({ onBack }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cards = useSelector((state) => state.shop.payment);
    const address = useSelector((state) => state.shop.address);
    const cart = useSelector((state) => state.shop.cart);

    // 🟢 SELECTOR KULLAN - SADECE CHECKED ÜRÜNLERİN TOPLAMI
    const grandTotal = useSelector(selectCartGrandTotal);

    const [showForm, setShowForm] = useState(false);
    const [editCard, setEditCard] = useState(null);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    const handlePay = async () => {
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

        // 🟢 4. LOADING BAŞLAT
        setIsProcessing(true);

        // 🟢 5. SİPARİŞ VERİSİNİ HAZIRLA - SADECE CHECKED ÜRÜNLER
        const orderData = {
            address_id: address.id,
            order_date: new Date().toISOString().split('T')[0],
            card_no: parseInt(selectedCard.card_no),
            card_name: selectedCard.name_on_card,
            card_expire_month: parseInt(selectedCard.expire_month),
            card_expire_year: parseInt(selectedCard.expire_year),
            card_ccv: parseInt(selectedCard.ccv),
            price: grandTotal, // 🟢 SELECTOR'DAN GELİYOR (sadece checked ürünler)
            products: checkedItems.map(item => ({ // 🟢 SADECE CHECKED ÜRÜNLER
                product_id: item.product.id,
                count: item.count,
                detail: item.product.detail || `${item.product.color || ''} ${item.product.size || ''}`.trim() || "standart"
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

        setIsProcessing(false);
    };

    const hasNoCards = !cards || !Array.isArray(cards) || cards.length === 0;

    if (hasNoCards) {
        return (
            <div className="border flex flex-col gap-4 items-center p-4 rounded-lg">
                <div className="p-4 border rounded-lg gap-4 items-center flex flex-col">
                    <p className="font-medium">Seçilen Adres: {address?.title || "Adres seçilmedi"}</p>
                    <p className="text-sm text-[#0092b8]">
                        {address?.name || ""} {address?.surname || ""} – {address?.city || ""}
                    </p>
                </div>

                <div className="p-4 border rounded-lg flex flex-col gap-4 items-center">
                    <p className="text-red-500 text-sm">
                        Ödeme yöntemi seçilmeden ödeme adımına geçilemez.
                    </p>
                    <button onClick={onBack} className="underline mt-2 cursor-pointer">
                        ← Adreslere dön
                    </button>
                    <button
                        onClick={() => {
                            setEditCard(null);
                            setShowForm(true);
                        }}
                        className="bg-black text-white px-4 py-2 rounded cursor-pointer"
                    >
                        + Yeni Kart Ekle
                    </button>
                </div>

                {showForm && (
                    <CardForm
                        initialData={editCard}
                        onClose={() => setShowForm(false)}
                    />
                )}
            </div>
        );
    }

    // 🟢 CHECKED ÜRÜNLERİ FİLTRELE
    const checkedItems = cart.filter(item => item.checked);

    return (
        <div className="space-y-6">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl font-montserrat font-bold text-black">Adres</h1>
                <button onClick={onBack} className="font-montserrat text-sm cursor-pointer underline">
                    ← Adreslere dön
                </button>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
                <h1 className="font-montserrat font-bold text-[#0092b8] mb-2">Seçilen Adres:</h1>
                <p className="font-medium">{address?.title}</p>
                <p className="text-sm text-gray-600">
                    {address?.name} {address?.surname} – {address?.city}
                </p>
            </div>

            <div className="flex justify-between items-center">
                <h1 className="text-xl font-montserrat font-bold text-black">Kartlarım</h1>
                <button
                    onClick={() => {
                        setEditCard(null);
                        setShowForm(true);
                    }}
                    className="bg-[#0092b8] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#007a9b] transition cursor-pointer"
                >
                    + Yeni Kart Ekle
                </button>
            </div>

            <div className="space-y-3">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => {
                            setSelectedCardId(card.id);
                            // 🟢 KART SEÇİLDİ BİLDİRİMİ - ŞIK VERSİYON
                            toast(
                                <div className="flex flex-col items-start">
                                    <span className="font-bold text-lg font-montserrat text-[#0092b8]">💳 Kart Seçildi</span>
                                    <span className="text-lg  font-semibold text-black font-montserrat mt-1">
                                        {card.name_on_card}
                                    </span>
                                    <span className="text-xs text-gray-600 font-montserrat">
                                        **** {card.card_no?.slice(-4)}
                                    </span>
                                </div>,
                                {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    theme: "light",
                                    className: "bg-white border-l-4 border-[#0092b8] shadow-lg rounded-lg",
                                }
                            );

                        }}
                        className={`border rounded-lg p-4 flex justify-between items-center cursor-pointer transition
              ${selectedCardId === card.id
                                ? 'border-[#0092b8] border-2 bg-blue-50'
                                : 'border-gray-200 bg-white hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${selectedCardId === card.id
                                    ? 'border-[#0092b8]'
                                    : 'border-gray-300'
                                }`}
                            >
                                {selectedCardId === card.id && (
                                    <div className="w-3 h-3 rounded-full bg-[#0092b8]" />
                                )}
                            </div>
                            <div>
                                <p className="font-medium text-[#0092b8]">
                                    **** **** **** {card.card_no?.slice(-4)}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {card.name_on_card}
                                </p>
                                <p className="text-xs text-gray-400">
                                    Son Kullanma: {card.expire_month}/{card.expire_year}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 text-sm" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => {
                                    setEditCard(card);
                                    setShowForm(true);
                                }}
                                className="underline text-gray-600 hover:text-black cursor-pointer"
                            >
                                Düzenle
                            </button>
                            <button
                                onClick={() => dispatch(deleteCard(card.id))}
                                className="underline text-red-500 hover:text-red-700 cursor-pointer"
                            >
                                Sil
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🟢 SİPARİŞ ÖZETİ - SADECE CHECKED ÜRÜNLER */}
            {checkedItems.length > 0 && (
                <div className="border-t pt-4 mt-2">
                    <h2 className="font-bold mb-2 text-lg font-montserrat">Sipariş Özeti</h2>
                    <div className="space-y-2">
                        {checkedItems.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                                <span className="text-gray-600">
                                    {item.product?.name} x{item.count}
                                    <p>{item.product?.description}</p> {/* isim kesilmiyor artık */}
                                </span>
                                <span className="font-medium font-montserrat">
                                    ₺{(item.product?.price * item.count).toFixed(2)}
                                </span>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold pt-2 border-t">
                            <span className="font-montserrat">Toplam:</span>
                            <span className="text-[#0092b8] font-montserrat">₺{grandTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            )}


            {/* ÖDEME BUTONU */}
            <div className="pt-4 border-t">
                <button
                    onClick={handlePay}
                    disabled={!selectedCardId || isProcessing || checkedItems.length === 0}
                    className={`w-full py-3 rounded-lg font-semibold text-white transition cursor-pointer
            ${!selectedCardId || isProcessing || checkedItems.length === 0
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-black hover:bg-green-700'
                        }`}
                >
                    {isProcessing ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            İşlem yapılıyor...
                        </span>
                    ) : (
                        !selectedCardId ? 'Lütfen bir kart seçin' :
                            checkedItems.length === 0 ? 'Ödeme için ürün seçin' :
                                'Şimdi Öde'
                    )}
                </button>
            </div>

            {showForm && (
                <CardForm
                    initialData={editCard}
                    onClose={() => setShowForm(false)}
                />
            )}
        </div>
    );
}