import { useEffect } from "react";
import { X } from "lucide-react";

export default function CartDrawer({ isOpen, onClose }) {
  // Drawer açıkken body scroll kapat
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // cleanup (component unmount olursa garanti olsun)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity hover:cursor-pointer duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-screen
          w-full sm:w-2/3 lg:w-1/3
          bg-white z-50
          flex flex-col
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-semibold">Sepetim</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Sepeti kapat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
          {/* Örnek item */}
          <div className="flex items-center gap-4 border-b pb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-md" />
            <div className="flex flex-col flex-1">
              <span className="text-sm font-medium">Ürün Adı</span>
              <span className="text-xs text-gray-500">Beden: M</span>
              <span className="text-sm font-semibold mt-1">₺499</span>
            </div>
          </div>

          {/* Boş sepet durumu (ileride redux ile) */}
          {/* <p className="text-gray-500 text-sm text-center mt-10">Sepetiniz boş</p> */}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-4 flex flex-col gap-3">
          <div className="flex justify-between text-sm font-medium">
            <span>Toplam</span>
            <span>₺499</span>
          </div>

          <button className="w-full bg-[#23a6f0] text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Satın Al
          </button>
        </div>
      </div>
    </>
  );
}
