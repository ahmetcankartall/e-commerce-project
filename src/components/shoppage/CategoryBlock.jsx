import { useSelector } from "react-redux";

function CategoryBlock() {
  const { categories } = useSelector((state) => state.product);

  return (
    <div className="w-full justify-center flex bg-[#fafafa]">
      <div className="lg:w-full w-[333px] h-[1615px] lg:h-[271px] flex lg:flex-row flex-col justify-center gap-[15px]">

        {categories.slice(0, 5).map((category) => (
          <div
            key={category.id}
            className="lg:w-[205px] lg:h-[223px] h-[300px] relative overflow-hidden"
          >
            
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-full object-cover"
            />

           
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-4">
              <h3 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center text-white">
                {category.title}
              </h3>

              <span className="text-white font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center">
                Rating: {category.rating}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default CategoryBlock;
