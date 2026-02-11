import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCards,
  deleteCard,
} from "../../store/thunks/CreditCardThunk";
import CardForm from "./CardForm";

export default function PaymentStep({ address, onBack }) {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.shop.payment);

  const [showForm, setShowForm] = useState(false);
  const [editCard, setEditCard] = useState(null);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Ödeme</h2>

      {/* ADDRESS */}
      <div className="p-4 border rounded-lg">
        <p className="font-medium">{address.title}</p>
        <p className="text-sm text-gray-500">
          {address.name} {address.surname} – {address.city}
        </p>
      </div>

      {/* CARDS */}
      <div className="space-y-3">
        {Array.isArray(cards) &&
          cards.map((card) => (
            <div
              key={card.id}
              className="border rounded-lg p-4 flex justify-between"
            >
              <div>
                <p className="font-medium">
                  **** **** **** {card.card_no.slice(-4)}
                </p>
                <p className="text-sm text-gray-500">
                  {card.name_on_card}
                </p>
              </div>

              <div className="flex gap-3 text-sm">
                <button
                  onClick={() => {
                    setEditCard(card);
                    setShowForm(true);
                  }}
                  className="underline"
                >
                  Düzenle
                </button>

                <button
                  onClick={() => dispatch(deleteCard(card.id))}
                  className="underline text-red-500"
                >
                  Sil
                </button>
              </div>
            </div>
          ))}
      </div>

      <button
        onClick={() => {
          setEditCard(null);
          setShowForm(true);
        }}
        className="bg-black text-white px-4 py-2 rounded"
      >
        + Yeni Kart Ekle
      </button>

      {showForm && (
        <CardForm
          initialData={editCard}
          onClose={() => setShowForm(false)}
        />
      )}

      <button onClick={onBack} className="underline text-sm">
        ← Adreslere dön
      </button>
    </div>
  );
}
