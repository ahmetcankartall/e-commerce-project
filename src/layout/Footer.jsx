export default function Footer() {
  return (
    <footer className="w-full bg-[#252b42] text-white py-6 md:py-10 overflow-x-hidden">
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-6 px-4 md:px-8">
        <div className="text-center md:text-left max-w-md">
          <p className="text-sm md:text-lg text-white">&copy; Consulting Agency For Your Business</p>
          <p className="text-xs md:text-sm text-white">The quick fox jumps over the lazy dog</p>
        </div>

        <div className="max-w-xs mt-6 md:mt-0 w-full md:w-auto flex justify-start">
          <button className="font-mono bg-cyan-600 text-white px-16 py-4 md:text-lg rounded hover:bg-red-700 transition-colors md:w-auto">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
}
