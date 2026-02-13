import { useDispatch } from "react-redux";
import { addAddress, updateAddress } from "../../store/thunks/AddressThunk";
import { useEffect, useState } from "react";

const emptyForm = {
  title: "",
  name: "",
  surname: "",
  phone: "",
  city: "",
  district: "",
  neighborhood: "",
  address: "",
};

export default function AddressForm({ initialData, onClose }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(() => ({
  title: initialData?.title || "",
  name: initialData?.name || "",
  surname: initialData?.surname || "",
  phone: initialData?.phone || "",
  city: initialData?.city || "",
  district: initialData?.district || "",
  neighborhood: initialData?.neighborhood || "",
  address: initialData?.address || "",
}));




  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

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
      <div className=" flex flex-row justify-between">
        <p className=" font-montserrat font-extrabold text-center flex items-center justify-center">Adres Ekle</p>
        <button onClick={onClose} className=" font-montserrat font-semibold w-8 h-8 flex items-center justify-center cursor-pointer">X</button>
      </div>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Adres Başlığı"
        className="border p-2 w-full"
      />

      <div className="flex gap-2">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ad"
          className="border p-2 w-full"
        />
        <input
          name="surname"
          value={form.surname}
          onChange={handleChange}
          placeholder="Soyad"
          className="border p-2 w-full"
        />
      </div>

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Telefon"
        className="border p-2 w-full"
      />

      <div className="flex gap-2">
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Şehir"
          className="border p-2 w-full"
        />
        <input
          name="district"
          value={form.district}
          onChange={handleChange}
          placeholder="İlçe"
          className="border p-2 w-full"
        />
      </div>

      <input
        name="neighborhood"
        value={form.neighborhood}
        onChange={handleChange}
        placeholder="Mahalle"
        className="border p-2 w-full"
      />

      <textarea
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Açık Adres"
        className="border p-2 w-full"
        rows={3}
      />

      <button
        onClick={submit}
        className="bg-black text-white px-4 py-2 rounded w-full cursor-pointer font-montserrat font-semibold"
      >
        Kaydet
      </button>
    </div>
  );
}
