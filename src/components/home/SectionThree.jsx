import { ChevronRight, ChevronLeft } from "lucide-react";
import unsplahpink from "../../assets/images/unsplahpink.png";
import { genderBestSellerThunk } from "../../store/thunks/genderBestSellerThunk";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SectionThree() {
  const [activeGender, setActiveGender] = useState("k");
  const categories = useSelector((state) => state.product.categories);
  const genderBestSellerList = useSelector(
    (state) => state.product.genderBestSellerList
  );

  const dispatch = useDispatch();

  const switchGender = () => {
    const newGender = activeGender === "k" ? "e" : "k";
    setActiveGender(newGender);
    dispatch(genderBestSellerThunk(newGender));
  };

  useEffect(() => {
    if (categories.length > 0) {
      dispatch(genderBestSellerThunk(activeGender));
    }
  }, [dispatch, categories, activeGender]);

  // URL için slugify fonksiyonu
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <div className="w-full flex justify-center">
      <div className="lg:max-w-[1077px] lg:min-h-[895px] py-12 max-w-[419px] min-h-[3111px] flex lg:flex-row flex-col gap-[30px] ">
        {/* sol taraf */}
        <img
          src={unsplahpink}
          alt="Ürün fotoğrafı"
          className="w-full lg:max-w-[389px] lg:min-h-[796px] max-w-[388px] min-h-[664px] object-cover border border-[#8EC2F2]"
        />
        {/* sağ taraf */}
        <div className="w-full lg:max-w-[658px] lg:min-h-[799px] max-w-[376px] min-h-[2273px] flex flex-col gap-[10px]">
          <div className="flex lg:flex-row flex-col justify-between items-center lg:py-0 py-8 lg:gap-[1px] gap-[25px]">
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] flex items-center">
              BESTSELLER PRODUCTS
            </h5>

            <div className="flex flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveGender("e");
                  dispatch(genderBestSellerThunk("e"));
                }}
                className={`font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center flex items-center ${
                  activeGender === "e" ? "text-[#23a6f0]" : "text-[#737373]"
                }`}
              >
                Men
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveGender("k");
                  dispatch(genderBestSellerThunk("k"));
                }}
                className={`font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center flex items-center ${
                  activeGender === "k" ? "text-[#23a6f0]" : "text-[#737373]"
                }`}
              >
                Women
              </button>

              <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#737373] flex items-center">
                Accessories
              </h6>
            </div>

            <div className="flex flex-row gap-3">
              <button
                onClick={switchGender}
                className="rounded-full w-[50px] h-[50px] flex items-center justify-center"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={switchGender}
                className="rounded-full w-[50px] h-[50px] flex items-center justify-center"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="lg:w-[658px] h-[2px] w-[376px] opacity-100 bg-[#ECECEC]"></div>

          <div className="w-full lg:max-w-[657px] lg:min-h-[727px] max-w-[376px] min-h-[1891px] p-3 flex lg:flex-row flex-wrap flex-col gap-[30px] items-center justify-center">
            {/* cards */}
            {genderBestSellerList.map((product) => {
              const categoryObj = categories.find(
                (cat) => cat.id === product.category_id
              );
              if (!categoryObj) return null;

              const categoryName = categoryObj.title;
              const gender = categoryObj.gender;

              return (
                <Link
                  key={product.id}
                  to={`/shop/${gender}/${slugify(
                    categoryName
                  )}/${categoryObj.id}/${slugify(product.name)}/${product.id}`}
                  className="lg:max-w-[183px] lg:h-[324px] max-w-[328px] h-[589px] cursor-pointer hover:opacity-90 transition"
                >
                  <img
                    src={product.images?.[0]?.url || unsplahpink}
                    alt={product.name}
                    className="w-full lg:max-w-[183px] lg:h-[162px] max-w-[348px] h-[427px] object-cover object-top"
                  />
                  <div className="flex flex-col items-center justify-between h-[162px] py-6">
                    <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center line-clamp-1">
                      {product.name}
                    </h5>
                    <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#737373] line-clamp-2">
                      {product.description}
                    </p>
                    <div className="w-full flex flex-row items-center justify-center gap-3">
                      <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
                        {product.price}$
                      </h5>
                      <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                        {product.price}$
                      </h5>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
