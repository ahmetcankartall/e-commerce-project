import BlogCard from "./BlogCard";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";



export default function HomePageBlog() {






  return (
      <div className="w-full flex justify-center">
      <div className="w-full lg:max-w-[1050px] max-w-[414px] lg:min-h-[994px] min-h-[2252px] flex flex-col gap-20 lg:justify-center items-center lg:py-28 py-20">
        
        {/* HEADER */}
        <div className=" items-center lg:w-[692px] w-[300px] lg:h-[84px] h-[134px] gap-20">
          <h6 className="font-sans font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#23A6F0]">
            Practice Advice
          </h6>
          <h2 className="font-sans font-bold text-[40px] leading-[50px] tracking-[0.2px] text-center"
>
            Featured Products
          </h2>
        </div>

        {/* CARDS */}
        <div className="w-full lg:max-w-[1050px] max-w-[329px] lg:min-h-[606px] min-h-[1878px] flex flex-col lg:flex-row items-center justify-center gap-[3px]">
          <BlogCard image={blog1} />
          <BlogCard image={blog2} />
          <BlogCard image={blog3} />
        </div>

      </div>
    </div>
   
  );
}
