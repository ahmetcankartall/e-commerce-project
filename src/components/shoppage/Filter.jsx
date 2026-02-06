import { SquareMenu, Columns3 } from 'lucide-react';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setSort } from "../../store/actions/productActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Filter() {
  const { total, categories, category, sort } = useSelector(
    (state) => state.product
  );

  const selectedCategory = categories.find(
    (cat) => cat.id === category
  );

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: { order: "" },
    mode: "all",
  });

  useEffect(() => {
    setValue("order", sort || "");
  }, [sort, setValue]);

  const onSubmit = (data) => {
    dispatch(setSort(data.order));
    toast.success("You have filtered some products");
  };

    return (
        <div className="hidden w-full  bg-white lg:flex justify-center">
            <div className=" w-full lg:max-w-[1050px] h-[98px] flex items-center justify-between">
                <h6 className="font-montserrat font-bold text-sm leading-[24px] tracking-[0.2px] text-[#737373]">{`Showing total ${total} Results From Category ${selectedCategory?.title ?? "All Categories"}`}

                </h6>
                <div className='flex items-center justify-center gap-2'>
                    <h6 className="font-montserrat font-bold text-sm leading-[24px] tracking-[0.2px] text-[#737373]">Wievs:</h6>
                    <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <SquareMenu size={24} />
                    </button>
                    <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <Columns3 size={24} />
                    </button>
                </div>
                <div >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex items-center gap-4 bg-[#f9f9f9] rounded-lg"
                    >
                        <select
                            {...register("order", { required: true })}
                            className="bg-transparent outline-none"
                        >
                            <option value="" disabled>
                                Select filter
                            </option>
                            
                            <option value="price:asc">Price Ascending Order</option>
                            <option value="price:desc">Price Descending Order</option>
                            <option value="sell_count:desc">Best Seller Descending Order</option>
                            <option value="sell_count:asc">Best Seller Ascending Order</option>
                             <option value="rating:asc">Rating Ascending</option>
                              <option value="rating:desc">Rating Descending</option>
                        </select>

                        <button
                            type="submit"
                            className="w-[94px] h-[50px] rounded-[5px] bg-[#23A6F0] text-white font-semibold"
                        >
                            Filter
                        </button>
                    </form>

                </div>
            </div>



        </div>


    );
}
