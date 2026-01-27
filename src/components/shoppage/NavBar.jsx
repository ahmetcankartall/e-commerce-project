import { YoutubeIcon, InstagramIcon, FacebookIcon, TwitterIcon,Phone,Mail  } from "lucide-react";




function NavBar() {
 
  return (
<div className=" hidden w-full  bg-[#23856d] lg:flex justify-center">
<div className="w-full max-w-[1128px] h-[48px]  flex justify-center items-center lg:gap-[30px]">
<div className="lg:w-[363px] h-[48px] flex justify-center items-center lg:gap-[10px]">
    <div className=" lg:w-[125px] lg:h-[36px] flex items-center justify-center gap-[10px]">
         <Phone className="text-white w-[16px] h-[16px]"/>
         <h6 className=" font-normal text-[12px] leading-[16px] tracking-[0.2px] text-white font-montserrat">(225) 555-0118</h6>    
    </div>
    <div className=" lg:w-[228px] lg:h-[36px] flex items-center justify-center gap-[10px]">
         <Mail className="text-white w-[16px] h-[16px]"/>
         <h6 className="font-normal text-[12px] leading-[16px] tracking-[0.2px] text-white font-montserrat" >michelle.rivera@example.com</h6>
    </div>
</div>
<div className=" w-[343px] h-[44px] flex items-center justify-center">
    <h6 className=" font-bold text-sm leading-6 tracking-[0.2px] text-white font-montserrat">Follow Us  and get a chance to win 80% off</h6>
</div>
<div className=" w-[235px] h-[46px] flex items-center justify-center gap-[10px]">
    <h6 className=" font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white font-montserrat">Follow Us  :</h6>
    <div className=" w-[120px] h-[26px] flex items-center justify-between">
<YoutubeIcon className="text-white hover:cursor-pointer " />
  <InstagramIcon className="text-white hover:cursor-pointer"/>
  <FacebookIcon className="text-white  hover:cursor-pointer   "/>
  <TwitterIcon className="text-white   hover:cursor-pointer "/>

</div>
</div>

</div>


</div>


  );
}
export default NavBar