import { SquareMenu, Columns3 } from 'lucide-react';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setSort} from "../../store/actions/productActions";
import { useSelector } from "react-redux";

export default function Filter() {
const {total,categories,category} = useSelector((state) => state.product);

const selectedCategory = categories.find(
  (cat) => cat.id === category
);


    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        
    } = useForm({
    defaultValues: { order:"asc" },
    mode: "all",
  });
  const onSubmit = (data) => {
    dispatch(setSort(data.order)); // Redux state güncelle
     toast.success("You have filtered some products");
  };
 

    return (
        <div className="w-full  bg-white lg:flex justify-center">
            <div className=" w-full lg:max-w-[1050px] h-[98px] flex items-center justify-between">
                <h6 className="font-montserrat font-bold text-sm leading-[24px] tracking-[0.2px] text-[#737373]">Showing total {total} Results From Category {selectedCategory?.title}
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
                    <form   onSubmit={handleSubmit(onSubmit)}className='flex items-center justify-center bg-[#f9f9f9] gap-4 rounded-lg font-[#737373] font-normal text-[14px] leading-[28px] tracking-[0.2px]'>
                    <select
                    {...register("order")}>
  <option value="price:asc">Ascending Order</option>
  <option value="price:desc">Descending Order</option>

</select>
                       <button
          type="submit"
          className="w-[94px] h-[50px] px-[20px] py-[10px] gap-[10px] rounded-[5px] bg-[#23A6F0] text-white font-semibold text-[14px] leading-[24px] tracking-[0.2px] text-center"

        >
          Filter
        </button>
                    </form>
                </div>
            </div>



        </div>


    );
}
