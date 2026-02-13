import { useDispatch } from "react-redux";
import { addCard, updateCard } from "../../store/thunks/CreditCardThunk";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const emptyForm = {
  card_no: "",
  expire_month: "",
  expire_year: "",
  name_on_card: "",
};

export default function CardForm({ initialData, onClose, isOpen }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: emptyForm,
    mode:"all"
  });

  // Edit / Create moduna göre formu doldur
  useEffect(() => {
    if (initialData) {
      reset({
        card_no: initialData.card_no || "",
        expire_month: initialData.expire_month || "",
        expire_year: initialData.expire_year || "",
        name_on_card: initialData.name_on_card || "",
      });
    } else {
      reset(emptyForm);
    }
  }, [initialData, reset]);

  // body scroll kontrolü
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const onSubmit = (data) => {
    if (initialData) {
      toast.success("Kart kaydedildi 💳");
      dispatch(updateCard({ ...data, id: initialData.id }));
    } else {
      toast.success("Kart kaydedildi 💳");
      dispatch(addCard(data));
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Modal */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   z-50 bg-gray-100 p-6 rounded space-y-4 w-96 shadow-lg "
      >
        {/* Kart Numarası */}
        <div>
           <h1 className=" font-extrabold text-center font-montserrat py-4 ">Kart Ekle</h1>
          <input
            {...register("card_no", {
              required: "Kart numarası zorunlu",
              minLength: {
                value: 16,
                message: "Kart numarası 16 haneli olmalı",
              },
            })}
            placeholder="Kart Numarası"
            className="border p-2 w-full"
          />
          {errors.card_no && (
            <p className="text-red-500 text-sm">
              {errors.card_no.message}
            </p>
          )}
        </div>

        {/* Son Kullanma */}
        <div className="flex gap-2">
          <div className="w-full">
            <input
              type="number"
              {...register("expire_month", {
                required: "Ay zorunlu",
                min: { value: 1, message: "1-12 arası olmalı" },
                max: { value: 12, message: "1-12 arası olmalı" },
              })}
              placeholder="Ay"
              className="border p-2 w-full"
            />
            {errors.expire_month && (
              <p className="text-red-500 text-sm">
                {errors.expire_month.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              type="number"
              {...register("expire_year", {
                required: "Yıl zorunlu",
                min: { value: 2024, message: "Geçerli bir yıl girin" },
              })}
              placeholder="Yıl"
              className="border p-2 w-full"
            />
            {errors.expire_year && (
              <p className="text-red-500 text-sm">
                {errors.expire_year.message}
              </p>
            )}
          </div>
        </div>
        

        {/* İsim */}
        <div>
          <input
            {...register("name_on_card", {
              required: "Kart üzerindeki isim zorunlu",
            })}
            placeholder="Kart Üzerindeki İsim"
            className="border p-2 w-full"
          />
          {errors.name_on_card && (
            <p className="text-red-500 text-sm">
              {errors.name_on_card.message}
            </p>
          )}
        </div>

        <button
        
          type="submit"
          className="bg-black text-white px-4 py-2 rounded w-full cursor-pointer font-montserrat font-semibold"
        >
          Kaydet
        </button>
      </form>
    </>
  );
}
