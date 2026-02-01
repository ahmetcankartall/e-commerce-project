import { Link } from "react-router";
import { Phone,Mail,MapPin,Instagram,Facebook,Twitter} from 'lucide-react';
export default function Footer({
  className = "",
  bottomBarClass = "",
  footerLinkClass="",
}) {
  return (
    <footer
  className={`w-full flex flex-col items-center justify-center bg-[#252b42] text-current ${className}`}
>

      <div className="w-full lg:max-w-[1050px] flex flex-col md:flex-row md:justify-between items-center gap-2 p-10 ">
        <div className="text-center md:text-left max-w-md">
          <p className="text-sm md:text-lg font-bold">&copy; Consulting Agency For Your Business</p>
          <p className="text-xs md:text-sm font-bold">The quick fox jumps over the lazy dog</p>
        </div>

        <div className="max-w-xs mt-6 md:mt-0 w-full md:w-auto flex justify-start">
         <button className=" text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-center bg-cyan-600 w-[160px] h-[53px] rounded hover:bg-cyan-800 transition-colors 
">
  Contact Us
</button>

        </div>
        
      </div >
      <div className="w-full lg:max-w-[1050px] max-w-[414px] lg:h-[270px]  p-12 flex lg:flex-row flex-col  gap-[30px]">
      <div className={`w-full flex flex-col max-w-[148px]`}>
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">Company info</h5>
         <div className={`flex flex-col ${footerLinkClass}`}>
             <Link
                      to="/"
                      className="hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      About Us
                    </Link>
                    <Link
                      to="/"
                      className="hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      Carrier
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                     We are Hiring
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      Blog
                    </Link>
          </div>
      </div>
       <div className={`w-full flex flex-col max-w-[148px]`}>
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">Legal</h5>
        <div className={`flex flex-col ${footerLinkClass}`}>
             <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      About Us
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                     Carrier
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      We are hiring
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      Blog
                    </Link>
          </div>
      </div>
        <div className={`w-full flex flex-col max-w-[148px]`}>
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">Features</h5>
        <div className={`flex flex-col ${footerLinkClass}`}>
             <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors ${footerLinkClass} font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      Business marketing
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      User Analytic
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      Live Chat
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      Unlimited Support
                    </Link>
          </div>
      </div>
       <div className={`w-full flex flex-col max-w-[148px]`}>
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">Resources</h5>
        <div className={`flex flex-col ${footerLinkClass}`}>
             <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      IOS & Android
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      Watch a Demo
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      Customers
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      API
                    </Link>
                    </div>
          
      </div >
    
       <div className={`w-full flex flex-col max-w-[321px]`}>
        <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">Get in Touch</h5>
        <div className={`flex flex-col ${footerLinkClass}`}>
             <Link
                      to="/"
                      className=" hover:text-blue-700 py-2 transition-colors flex flex-row gap-4 font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      <Phone size={24}/>
                      (480) 555-0103
                    </Link>
                 
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors flex flex-row gap-4 font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >  <MapPin size={24}/>
                      4517 Washington Ave. 
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700 py-2 transition-colors  flex flex-row gap-4 font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]"
                      
                    >
                      <Mail size={24}/>
                      ahmet@gmail.com
                    </Link>
                    </div>
          
      </div>
        </div>
        <div className={`w-full flex justify-center ${bottomBarClass} `}>
        <div className=" w-full lg:max-w-[1050px] max-w-[414px] flex lg:flex-row flex-col lg:justify-between lg:gap-0 items-center">
          <h6 className="flex items-center justify-center  px-10">Made With Love By Finland All Right Reserved </h6>
          <div className="flex flex-row w-[336px] gap-6  justify-center " >
            <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors  flex flex-row gap-4 text-[#23a6f0] ${footerLinkClass}"
                      
                    >
                     <Facebook size={24}/>
                      
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors  flex flex-row gap-4 text-[#23a6f0]"
                      
                    >
                      <Instagram size={24}/>
                      
                    </Link>
                    <Link
                      to="/"
                      className=" hover:text-blue-700  py-2 transition-colors  flex flex-row gap-4 text-[#23a6f0]"
                      
                    > <Twitter size={24}/>
                      
                    </Link>
            
             
            

          </div>
        </div>
        </div>
    </footer>
  );
}
