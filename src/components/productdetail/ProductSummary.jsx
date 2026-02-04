

import carouselinner from "../../assets/images/carouselinner.png";
import { Star,HeartPlus,ShoppingCart,Eye} from "lucide-react";

export default function ProductSummary() {
 
  return (
<div className=" w-full bg-[#fafafa] flex justify-center">
<div className=" w-full lg:max-w-[1050px] lg:min-h-[598px] max-w-[414px] min-h-[991px] flex lg:justify-between justify-center lg:flex-row flex-col lg:items-start items-center gap-3">

{/* sol */}
<div className=" w-full lg:max-w-[506px] lg:h-[546px] w-[348px] h-[394px] flex flex-col justify-between">
  <img
              src={carouselinner}
              alt="Ürün fotoğrafı"
              className="w-full max-w-[506px] lg:h-[450px]  h-[277px] object-cover"
            />

<div className=" w-full max-w-[219px] h-[75px] flex flex-row justify-between">
  <img
              src={carouselinner}
              alt="Ürün fotoğrafı"
              className="w-full max-w-[100px] h-[75px]  object-cover"
            />
            <img
              src={carouselinner}
              alt="Ürün fotoğrafı"
              className="w-full max-w-[100px] h-[75px]   object-cover"
            />
</div>

</div>

{/* sağ */}
<div className=" w-full lg:max-w-[510px] lg:h-[471px] max-w-[348px] h-[471px] flex flex-col justify-between pl-6 py-3">
<h4 className=" font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px]"> Floating Phone</h4>
<div className=" flex flex-row items-center">
  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <Star className="w-4 h-4 text-gray-300" />
      <h6 className=" font-montserrat font-bold text-sm leading-6 tracking-[0.2px] flex text-[#737373]">10 rewievs</h6>
</div>
<h3 className=" text-[#252B42] font-montserrat font-bold text-2xl leading-8 tracking-[0.1px]">$1,139.33</h3>
<div className=" flex flex-row">
  <h6 className="text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px]"> Availability :</h6>
<h6 className=" text-[#23A6F0] font-montserrat font-bold text-sm leading-6 tracking-[0.2px]">In Stock</h6>
</div>
<p className="font-montserrat font-normal text-sm leading-5 tracking-[0.2px] text-[#858585]">Met minim Mollie non desert Alamo est sit cliquey dolor 
do met sent. RELIT official consequent door ENIM RELIT Mollie. 
Excitation venial consequent sent nostrum met.</p>
<div class="w-full lg:max-w-[445px] max-w-[283px] border-t border-[#BDBDBD]"></div>

<div class="flex gap-3">
  <div class="w-[30px] h-[30px] rounded-full bg-[#23A6F0]"></div>
  <div class="w-[30px] h-[30px] rounded-full bg-[#2DC071]"></div>
  <div class="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></div>
  <div class="w-[30px] h-[30px] rounded-full bg-[#252B42]"></div>
</div>
<div className=" flex flex-row gap-4">
   <button className="bg-[#23a6f0] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center text-white w-[148px] h-[44px] rounded-lg">
      Select Options
    </button>
    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition">
    <HeartPlus strokeWidth={1.5} />
  </button>

  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition">
    <ShoppingCart strokeWidth={1.5}/>
  </button>

  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-xl transition">
    <Eye strokeWidth={1.5}/>
  </button>
</div>


</div>
</div>
</div>



  );
}
