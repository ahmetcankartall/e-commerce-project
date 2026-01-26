import { ArrowRight, MessageCircle } from "lucide-react";

const BlogCard = ({ image }) => {
  return (
    <div
      className="
        w-full lg:max-w-[348px] max-w-[329px] lg:min-h-[606px] min-h-[606px]
        rounded-[5px]
        shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)]
        transition-all duration-300 ease-out
        hover:-translate-y-[6px]
        hover:shadow-[0px_20px_25px_0px_rgba(0,0,0,0.12)]
      "
    >
      <div className="w-full lg:h-[300px] overflow-hidden">
        <img
          src={image}
          alt="Blog"
          className="w-full h-full object-cover  "
        />
      </div>

      <div className="flex flex-col w-full lg:h-[306px] pt-[25px] pb-[35px] px-[25px] lg:gap-[10px]">
        <div className="h-[16px] w-[159px] flex items-center justify-between">
          <p className="font-sans text-xs leading-4 tracking-[0.2px] text-[#8EC2F2]">
            Google
          </p>
          <p className="font-sans text-xs leading-4 tracking-[0.2px] text-[#737373]">
            Trending
          </p>
          <p className="font-sans text-xs leading-4 tracking-[0.2px] text-[#737373]">
            New
          </p>
        </div>

        <h4 className="font-sans text-xl leading-[30px] tracking-[0.2px] text-[#252B42] w-[247px] h-[60px]">
          Loudest à la Madison #1 (L'integral)
        </h4>

        <p className="w-[280px] h-[60px] font-sans text-sm leading-5 tracking-[0.2px] text-[#737373]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>

        <div className="flex w-[298px] h-[46px] justify-between">
          <p className="flex items-center gap-[8px] font-sans text-xs tracking-[0.2px]">
            <MessageCircle className="w-[16px] h-[16px] text-[#737373]" />
            22 April 2021
          </p>

          <p className="flex items-center gap-[8px] font-sans text-xs tracking-[0.2px]">
            <MessageCircle className="w-[16px] h-[16px] text-[#737373]" />
            10 Comments
          </p>
        </div>

        <h6 className="flex items-center gap-[10px] font-sans font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
          Learn More
          <ArrowRight className="w-[9px] h-[16px] text-[#23A6F0]" />
        </h6>
      </div>
    </div>
  );
};

export default BlogCard;
