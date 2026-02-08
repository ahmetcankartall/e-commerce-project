import { useEffect } from "react";
import { X } from "lucide-react";
import { Trash2 } from 'lucide-react';
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
          transform transition-transform duration-1500 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b ">
          <h2 className="text-lg font-semibold">Sepetim (Sepet Total)</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Sepeti kapat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-12 border-[#111111]">

           {/* Örnek item */}
          <div className="flex items-center gap-4 border-b pb-4  border-[#111111] w-full lg:max-w-[500px] max-w-[414px] relative">
            <div className="w-24 h-40 bg-gray-200 rounded-md flex-shrink-0 " />
            <div className="flex flex-col  gap-3   ">
              
              <span className="text-sm font-montserrat font-bold  w-full max-w-[400px] line-clamp-2 " >Nike Airmax Pro 3 Edition </span>
              <span className="text-xs text-gray-500 font-montserrat">Beden: M</span>
              <span className="text-sm font-semibold mt-1 ">Fiyat : ₺499</span>
              <div className="  flex flex-row  bg-[#f5f5f5] border border-[#efefef]  p-1  self-start rounded-lg" >
                <button className="px-2 py-1 text-sm  hover:cursor-pointer font-montserrat text-sm rounded-lg hover:bg-gray-200">-</button>
                <span className="px-4 py-1 text-sm font-montserrat text-sm font-bold">1</span>
                <button className="px-2 py-1 text-sm  hover:cursor-pointer rounded-lg font-montserrat text-sm hover:bg-gray-200">+</button>
                
              </div>
              
            </div>
             <button
              className="absolute bottom-6 right-5 p-1 rounded-full hover:bg-gray-100 cursor-pointer"
              aria-label="Ürünü sil"
            >
               <Trash2 />
            </button>
          </div>

      

          {/* Boş sepet durumu (ileride redux ile) */}
          {/* <p className="text-gray-500 text-sm text-center mt-10">Sepetiniz boş</p> */}
        </div>

        {/* Footer */}
        <div className=" px-4 py-4 flex flex-col gap-3 px-16 border-t">
          <div className="flex justify-between text-sm font-medium px-4">
            <p className="text-montserrat font-bold">Genel Toplam</p>
            <p className="text-montserrat font-bold ">₺499</p>
          </div>
          <button className="w-full bg-[#111111] text-white py-3 rounded-full font-medium hover:bg-white hover:text-[#111111] hover:cursor-pointer border transition-colors">
            Sepeti Görüntüle
          </button>
          <button className="w-full bg-[#111111] text-white py-3 border rounded-full font-medium hover:cursor-pointer transition-colors">
            Satın Al
          </button>

        </div>
      </div>
    </>
  );
}
