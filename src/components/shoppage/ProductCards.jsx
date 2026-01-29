import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsThunk } from "../../store/thunks/productsThunk";
import { setOffset } from "../../store/actions/productActions";

function ProductCards() {
  const dispatch = useDispatch();

  const { productList, total, limit, offset, fetchStateProducts } =
    useSelector((state) => state.product);

  const currentPage = offset / limit + 1;
  const totalPages = Math.ceil(total / limit);

 useEffect(() => {
  if (fetchStateProducts === 'NOT_FETCHED') {
    dispatch(productsThunk());
  }
}, [dispatch, offset, fetchStateProducts]);

  const handlePageChange = (page) => {
    dispatch(setOffset((page - 1) * limit));
  };

  if (fetchStateProducts === "FETCHING") {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="w-full flex justify-center px-4">
      <div className="lg:w-[1124px] w-full py-12 flex flex-col gap-12">

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productList.map((product) => (
            <div
              key={product.id}
              className=" lg:h-[488px] flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-[300px]">
                <img
                  src={product.images?.[0]?.url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2 p-4">
                <h5 className="font-bold text-center">{product.name}</h5>

                <p className="text-sm text-gray-500 text-center">
                  {product.description}
                </p>

                <div className="flex gap-2">
                  <span className="line-through text-gray-400">
                    ${product.price + 20}
                  </span>
                  <span className="text-green-600 font-bold">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {/* PAGINATION */}
        <div className="flex justify-center">
          <div className="flex w-[313px] h-[74px] rounded-lg overflow-hidden border border-gray-200">
            {/* PREV Button */}
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="w-[84px] h-full px-6 flex items-center justify-center border-r border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors bg-white text-sm font-medium text-gray-700"
            >
              First
            </button>

            {/* Page Numbers - 3 buttons */}
            {(() => {
              let pages = [];

              if (currentPage === 1) {
                pages = [1, 2, 3];
              } else if (currentPage === totalPages) {
                pages = [totalPages - 2, totalPages - 1, totalPages];
              } else {
                pages = [currentPage - 1, currentPage, currentPage + 1];
              }

              pages = pages.filter(p => p > 0 && p <= totalPages);

              return pages.map((page, index) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`flex-1 h-full flex items-center justify-center transition-colors text-sm font-medium ${
                    index < pages.length - 1 ? 'border-r border-gray-200' : ''
                  } ${
                    currentPage === page
                      ? "bg-[#23a6f0] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ));
            })()}

            {/* NEXT Button */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-[84px] h-full px-6 flex items-center justify-center border-l border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors bg-white text-sm font-medium text-[#23a6f0]"
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