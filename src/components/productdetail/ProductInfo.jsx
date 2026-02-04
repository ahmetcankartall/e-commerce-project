

import { Link } from "react-router-dom";
import unsplahpink from "../../assets/images/unsplahpink.png";
export default function ProductInfo() {
 
  return (
<div className=" w-full bg-[#fafafa] flex-col flex justify-center items-center">
<div className=" w-full lg:max-w-[1050px] lg:min-h-[72px] max-w-[414px] min-h-[91px] flex items-center justify-center flex-row">
 <Link
      to="#"
      className="flex items-center justify-center  font-montserrat font-semibold text-sm leading-6 tracking-[0.2px] text-center text-[#737373] hover:text-black transition lg:w-[134px] h-[72px] w-[98]">Description
    </Link>
  <Link
      to="#"
      className="flex items-center justify-center font-montserrat font-semibold text-sm leading-6 tracking-[0.2px] text-center text-[#737373] hover:text-black transition lg:w-[220px]  w-[177px] h-[72px]">Additional Information
    </Link>
    <Link
      to="#"
      className="flex items-center justify-center font-montserrat font-semibold text-sm leading-6 tracking-[0.2px] text-center text-[#737373] hover:text-black transition lg:w-[134px] h-[72px] w-[110px]" >Reviews
    </Link>
</div>
<div className="flex justify-center items-center lg:w-[1049px] w-[283px] border-t border-[#BDBDBD]" />
<div className=" flex lg:flex-row flex-col justify-between w-full lg:max-w-[1056px] lg:h-[427px] max-w-[332px] h-[1171px] flex justify-between items-center gap-[30px]">
  <img
              src={unsplahpink}
              alt="Ürün fotoğrafı"
              className="w-full lg:max-w-[316px] lg:h-[372px] max-w-[321px] h-[271px] object-cover"
            />

<div className=" w-full lg:max-w-[332px] lg:h-[367px] max-w-[332px] h-[367px] gap-[30px] flex flex-col mx-auto">
    <h3 className=" font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">the quick fox jumps over </h3>
    <h6 className=" font-montserrat font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]"> Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.

Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.

Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
 
</div>
<div className=" w-full lg:max-w-[332px] lg:h-[367px] max-w-[332px] h-[367px]  flex  flex-col justify-between">
    <h3 className=" font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">the quick fox jumps over </h3>
    <h6 className=" font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">the quick fox jumps over the lazy dog</h6>
    <h6 className=" font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">the quick fox jumps over the lazy dog</h6>
    <h6 className=" font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">the quick fox jumps over the lazy dog</h6>
    <h6 className=" font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">the quick fox jumps over the lazy dog</h6>
       
             <h3 className=" font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">the quick fox jumps over </h3>
    <h6 className=" font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">the quick fox jumps over the lazy dog</h6>
    <h6 className=" font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">the quick fox jumps over the lazy dog</h6>
    <h6 className=" font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">the quick fox jumps over the lazy dog</h6>
    <h6 className=" font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">the quick fox jumps over the lazy dog</h6>
</div>
</div>
</div>



  );
}
