import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsThunk } from "../../store/thunks/productsThunk";
import { setOffset } from "../../store/actions/productActions";

function ProductCards() {
  const dispatch = useDispatch();

  const { productList, total, limit, offset, fetchStateProducts } =
    useSelector((state) => state.product);

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(productsThunk());
  }, [dispatch, offset]);

  const handlePageChange = (page) => {
    dispatch(setOffset((page - 1) * limit));
  };

  // 👉 ürünleri 4'lü gruplara böl
  const chunkedProducts = [];
  for (let i = 0; i < productList.length; i += 4) {
    chunkedProducts.push(productList.slice(i, i + 4));
  }

  return (
    <div className="w-full flex justify-center px-4">
      <div className="lg:w-[1124px] w-full max-w-[328px] lg:max-w-none py-20 lg:py-12 gap-8 lg:gap-12 flex flex-col items-center">

        {fetchStateProducts === "FETCHING" && (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        {/* 4'LÜ SATIRLAR */}
        {chunkedProducts.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="lg:w-[1048px] w-full flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-8 lg:gap-0"
          >
            {row.map((product) => (
              <div
                key={product.id}
                className="lg:w-[239px] w-full max-w-[348px] lg:h-[488px] h-[615px] flex flex-col"
              >
                {/* IMAGE */}
                <div className="w-full lg:h-[300px] h-[427px]">
                  <img
                    src={product.images?.[0]?.url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* INFO */}
                <div className="w-full lg:h-[188px] h-[188px] pt-[25px] pb-9 gap-2.5 flex flex-col justify-center items-center">
                  <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center">
                    {product.name}
                  </h5>

                  <p
                    className="w-[146px] h-[24px] overflow-hidden whitespace-nowrap text-ellipsis font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center text-[#737373]"
                  >
                    {product.description}
                  </p>


                  <div className="w-[108px] h-[34px] flex justify-between items-center">
                    <span className="line-through text-[#BDBDBD] font-bold">
                      ${product.price + 20}
                    </span>
                    <span className="text-[#23856D] font-bold">
                      ${product.price}
                    </span>
                  </div>

                  {/* renk noktaları (dummy) */}
                  <div className="w-[82px] h-[16px] flex justify-between">
                    <div className="w-3 h-3 rounded-full bg-[#23A6F0]" />
                    <div className="w-3 h-3 rounded-full bg-[#23856D]" />
                    <div className="w-3 h-3 rounded-full bg-[#E77C40]" />
                    <div className="w-3 h-3 rounded-full bg-[#23856D]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* PAGINATION */}
        <div className="lg:w-[1048px] w-full flex justify-center items-center">
          <div className="w-full max-w-[313px] h-[74px] flex rounded-[6.73px] border border-gray-300 overflow-hidden">

            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex-1 flex items-center justify-center text-gray-600 font-semibold disabled:opacity-40"
            >
              Prev
            </button>

            {[currentPage - 1, currentPage, currentPage + 1]
              .filter((p) => p > 0 && p <= totalPages)
              .map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`flex-1 flex items-center justify-center font-bold ${page === currentPage
                      ? "bg-[#23A6F0] text-white"
                      : "bg-white text-gray-600"
                    }`}
                >
                  {page}
                </button>
              ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex-1 flex items-center justify-center text-gray-600 font-semibold disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
