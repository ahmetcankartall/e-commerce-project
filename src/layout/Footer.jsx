export default function Footer() {
  return (
    <footer className=" bg-[#252b42] text-white py-6 md:py-10 overflow-x-hidden">
      {/* Üst Bölüm */}
      <div className="max-w-xs border border-gray-700 flex flex-col md:max-w-7xl mx-auto px-4 md:flex-row md:justify-between items-center gap-2 md:gap-6">
        <div className="border border-gray-700 text-center md:text-left max-w-md">
          <p className=" border border-gray-700 text-sm md:text-lg text-white">&copy; Consulting Agency For Your Business</p>
          <p className=" border border-gray-700 text-xs md:text-sm text-white">The quick fox jumps over the lazy dog</p>
        </div>

        <div className="max-w-xs mt-6 md:mt-0 border border-gray-700  w-full md:w-auto flex justify-start">
          <button className="font-mono
 bg-cyan-600 text-white 
  px-16 py-4   md:ml-0 /* Padding büyütüldü */
   md:text-lg  /* Font boyutu büyütüldü */
  rounded
  hover:bg-red-700 
  transition-colors 
   md:w-auto     /* Mobilde full genişlik */
           /* Minimum yükseklik */
    
">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
}
