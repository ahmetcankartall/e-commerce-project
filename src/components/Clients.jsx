import Vector from "../assets/images/Vector.png";
import Vector1 from "../assets/images/Vector (1).png";
import Vector2 from "../assets/images/Vector (2).png";
import Vector3 from "../assets/images/Vector (3).png";
import Vector4 from "../assets/images/Vector (4).png";
import Vector5 from "../assets/images/Vector (5).png";

function Clients() {
 
  return (
<section className="w-full lg:h-[175px] bg-[#FAFAFA] flex justify-center ">
 <div className="lg:w-[1050px] lg:h-full  l flex justify-between items-center">
   <div className="lg:max-h-[34px] lg:w-[153px] flex justify-center items-center ">
    <img src={Vector} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px]  flex justify-center items-center">
        <img src={Vector1} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px] flex justify-center items-center">
        <img src={Vector2} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px]  flex justify-center items-center">
        <img src={Vector3} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px]  flex justify-center items-center">
        <img src={Vector4} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px] flex justify-center items-center">
        <img src={Vector5} alt="Logo"  /></div> 
    
 </div>
</section>




  );
}
export default Clients