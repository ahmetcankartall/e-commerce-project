import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsThunk } from "../../store/thunks/productsThunk";
import { Loader2 } from "lucide-react";

export default function BestSeller() {
const dispatch = useDispatch();
const { productList,fetchStateProducts} = useSelector((state) => state.product);
  const bestSellerProducts = [...productList]
    .sort((a, b) => b.sell_count - a.sell_count)
    .slice(0, 4);



 useEffect(() => {
    if (productList.length === 0 && fetchStateProducts === "NOT_FETCHED") {
      dispatch(productsThunk());
    }
  }, [dispatch, productList.length, fetchStateProducts]);



if (!productList.length) {
  return (
    <div className="w-full min-h-[300px] flex flex-col items-center justify-center gap-3">
      <Loader2 className="w-8 h-8 text-[#23a6f0] animate-spin" />
      <p className="text-sm text-[#737373] font-montserrat">
        Ürünler yükleniyor...
      </p>
    </div>
  );
}

    return (
     <section className="w-full bg-[#fafafa]">
  <div className="w-full max-w-[414px] lg:max-w-[1124px] mx-auto min-h-[620px] lg:py-[48px] flex flex-col gap-6 items-center px-4 lg:px-0">

  
    <div className="w-full lg:w-[1040px] min-h-[32px] flex items-center">
      <p className="font-montserrat font-bold text-xl lg:text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
        BEST SELLER PRODUCTS
      </p>
    </div>

    
    <div className="w-full lg:w-[1040px] h-[2px] bg-[#ECECEC]" />

    
    <div className="w-full lg:w-[1049px] flex flex-col lg:flex-row lg:justify-between flex-wrap gap-6">
      {bestSellerProducts.map((card) => (
        <div key={card.id} className="w-full lg:w-[238px] h-auto flex flex-col items-center ">

         
          <div className="w-full lg:h-[280px] flex items-center justify-center">
            <img
              src={card.images?.[0]?.url}
              alt={card.name}
              className="w-full lg:w-[674px] lg:h-[280px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full lg:h-[162px] pt-6 lg:pt-[25px] px-4 lg:px-[25px] pb-8 lg:pb-[35px] flex flex-col gap-2 lg:gap-[10px] items-start justify-center">
            <p className="font-montserrat font-bold text-base lg:text-[16px] text-[#252B42] leading-[24px] tracking-[0.1px] flex">
              {card.name}
            </p>
            <p className="font-montserrat font-bold text-sm lg:text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] line-clamp-1 ">
              {card.description}
            </p>
            <div className="flex flex-row items-center justify-center gap-2 lg:gap-5">
              <p className="font-montserrat font-bold text-base lg:text-[16px] leading-[24px] text-[#BDBDBD] tracking-[0.1px] text-center">
                156.32$
              </p>
              <p className="font-montserrat font-bold text-base lg:text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D] text-center">
                {card.price}$
              </p>
            </div>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>








    );
}
