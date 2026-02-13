import teamred from "../../assets/images/teamred.jpg";
import t1 from "../../assets/images/t1.jpg";
import t2 from "../../assets/images/t2.jpg";
import t3 from "../../assets/images/t3.jpg";
import t4 from "../../assets/images/t4.jpg";




export default function TeamGallery() {
 
  return (
<div className="w-full lg:h-[530px] h-[1070px] flex gap-4 lg:flex-row flex-col">
  {/* Sol alan - büyük resim */}
  <div className="flex-1 ">
    <img
      src={teamred}
      alt="Big"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Sağ alan - 4 küçük resim */}
  <div className="flex-1 flex flex-wrap ">
    <img
      src={t1}
      alt="Small 1"
      className="w-1/2 h-1/2 object-cover"
    />
    <img
      src={t2}
      alt="Small 2"
      className="w-1/2 h-1/2 object-cover"
    />
    <img
      src={t3}
      alt="Small 3"
      className="w-1/2 h-1/2 object-cover"
    />
    <img
      src={t4}
      alt="Small 4"
      className="w-1/2 h-1/2 object-cover"
    />
  </div>
</div>




  );
}
