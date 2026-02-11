import { useDispatch } from "react-redux";
import { addCard, updateCard } from "../../store/thunks/CreditCardThunk";
import { useState } from "react";

export default function CardForm({ initialData, onClose }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState(
    initialData || {
      card_no: "",
      expire_month: "",
      expire_year: "",
      name_on_card: "",
    }
  );

  const submit = () => {
    if (initialData) {
      dispatch(updateCard({ ...form, id: initialData.id }));
    } else {
      dispatch(addCard(form));
    }
    onClose();
  };

  return (
    <div className="space-y-3 border p-4 rounded">
      {Object.keys(form).map((key) => (
        <input
          key={key}
          value={form[key]}
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
          placeholder={key}
          className="border p-2 w-full"
        />
      ))}

      <button
        onClick={submit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Kaydet
      </button>
    </div>
  );
}
