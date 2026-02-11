import { useDispatch } from "react-redux";
import { addAddress, updateAddress } from "../../store/thunks/AddressThunk";
import { useState } from "react";
export default function AddressForm({ initialData, onClose }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState(
    initialData || {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    }
  );

  const submit = () => {
    if (initialData) {
      dispatch(updateAddress({ ...form, id: initialData.id }));
    } else {
      dispatch(addAddress(form));
    }
    onClose();
  };

  return (
    <div className="space-y-3">
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
