import video from "../../assets/images/video.jpg";
import { Play } from "lucide-react";

export default function AboutUsVideo() {
  return (
    <section className="w-full mx-auto lg:max-w-[989px] max-w-[307px] lg:min-h-[540px] min-h-[316px] flex justify-center items-center">
      
      <div className="relative cursor-pointer">
        <img
          src={video}
          alt="About Us Video"
          className="rounded-lg w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 hover:bg-white transition-colors rounded-full p-6 shadow-lg">
            <Play size={32} className="text-black ml-1" />
          </div>
        </div>
      </div>

    </section>
  );
}
