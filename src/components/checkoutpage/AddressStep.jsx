import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses, deleteAddress  } from "../../store/thunks/AddressThunk";
import AddressForm from "./AddressForm";

export default function AddressStep({ onNext }) {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.shop.address);

  const [showForm, setShowForm] = useState(false);
  const [editAddress, setEditAddress] = useState(null);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold font-montserrat">Adreslerim</h2>

        <button
          onClick={() => {
            setEditAddress(null);
            setShowForm(true);
          }}
          className="px-4 py-2 bg-black text-white rounded font-montserrat cursor-pointer"
          
        >
          + Adres Ekle
        </button>
      </div>

      {/* ADDRESS LIST */}
      {Array.isArray(addresses) &&
        addresses.map((addr) => (
          <div
            key={addr.id}
            className="shadow-md rounded-lg p-4 flex justify-between items-center bg-gray-100"
          >
            <div>
              <p className="font-bold font-montserrat ">{addr.title}</p>
              <p className="text-sm text-gray-500 font-montserrat">
                {addr.name} {addr.surname} – {addr.city}
              </p>
              <p className="font-montserrat text-sm">{addr.phone}</p>
            </div>

            <div className="flex gap-3 text-sm">
              <button
                onClick={() => onNext(addr)}
                className="font-semibold font-montserrat cursor-pointer"
              >
                Seç
              </button>

              <button
                onClick={() => {
                  setEditAddress(addr);
                  setShowForm(true);
                }}
                className="font-semibold font-montserrat cursor-pointer"
              >
                Düzenle
              </button>

              <button
                onClick={() => dispatch(deleteAddress(addr.id))}
                className=" text-red-500 font-semibold font-montserrat cursor-pointer"
              >
                Sil
              </button>
            </div>
          </div>
        ))}

      {/* FORM */}
      {showForm && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <AddressForm
            initialData={editAddress}
            onClose={() => setShowForm(false)}
          />
        </div>
      )}
    </div>
  );
}
