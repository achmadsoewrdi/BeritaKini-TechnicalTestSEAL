import { Link } from 'react-router-dom';

export default function PromoBanner() {
  return (
    <section className="container-custom py-8 lg:py-12" id="promo-banner">
      <div className="relative w-full rounded-3xl overflow-hidden bg-[#00D09B] text-white">
        {/* Background Decorations (Vectors) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Vector 2 (Top-center dashed line) */}
          <img src="/VECTOR_ASSET/Vector 2.svg" className="absolute top-4 left-[35%] w-[264px] object-contain opacity-80 z-0" alt="" />
          
          {/* Paper Airplane (Vector) */}
          <img src="/VECTOR_ASSET/Vector.svg" className="absolute top-[10%] left-[55%] w-[38px] object-contain z-0" alt="" />
          
          {/* Vector 3 (Bottom-right dashed line) */}
          <img src="/VECTOR_ASSET/Vector 3.svg" className="absolute bottom-4 right-[5%] w-[130px] object-contain opacity-80 z-0" alt="" />
        </div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-400 rounded-sm rotate-12"></div>
        <div className="absolute top-10 right-1/4 w-4 h-4 bg-white rounded-md rotate-45 opacity-80"></div>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-white/50 rounded-md rotate-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px] lg:min-h-[400px]">
          {/* Left - Text Content */}
          <div className="flex flex-col justify-center p-8 lg:p-12 z-10">
            <h2 className="text-3xl lg:text-[40px] leading-[1.2] font-bold mb-4 max-w-lg">
              Petualangan Edukatif bersama Malang Mbois City Tour!
            </h2>
            <p className="text-body text-white/90 max-w-md">
              Petualangan Edukatif bersama Malang Mbois City Tour!
            </p>
          </div>

          {/* Right - Image Collage */}
          <div className="relative flex items-center justify-center p-8 lg:p-12 z-10 min-h-[300px] lg:min-h-full">
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Photo 1 - Museum Brawijaya (Back Left) */}
              <div className="absolute left-[5%] top-[25%] w-2/5 aspect-auto -rotate-[15deg] bg-white p-2 pb-6 rounded-xl shadow-lg hover:z-20 hover:scale-105 transition-transform duration-300">
                <img 
                  src="/IMG_ASSET/nikolay-tchaouchev-ttpNCevA1tA-unsplash.jpg" 
                  alt="Musium Brawijaya" 
                  className="w-full aspect-[4/3] rounded-lg object-cover bg-neutral-200"
                  onError={(e) => { e.target.src = 'https://placehold.co/400x300/e2e8f0/64748b?text=Musium' }}
                />
                <p className="absolute bottom-2 inset-x-0 text-center text-[10px] sm:text-xs font-bold text-neutral-800">Musium Brawijaya</p>
              </div>

              {/* Photo 3 - Kebun Binatang (Back Right) */}
              <div className="absolute right-[5%] top-[10%] w-[45%] aspect-auto rotate-[15deg] bg-white p-2 pb-6 rounded-xl shadow-lg hover:z-20 hover:scale-105 transition-transform duration-300">
                <img 
                  src="/IMG_ASSET/img.png" 
                  alt="Kebun Binatang" 
                  className="w-full aspect-[4/3] rounded-lg object-cover bg-neutral-200"
                  onError={(e) => { e.target.src = 'https://placehold.co/400x300/e2e8f0/64748b?text=Kebun' }}
                />
                <p className="absolute bottom-2 inset-x-0 text-center text-[10px] sm:text-xs font-bold text-neutral-800">Kebun Binatang</p>
              </div>

              {/* Photo 2 - Kayoetangan (Front Center) */}
              <div className="absolute left-[30%] top-[40%] w-[45%] aspect-auto z-10 bg-white p-2 pb-6 rounded-xl shadow-2xl hover:z-30 hover:scale-105 transition-transform duration-300">
                <img 
                  src="/IMG_ASSET/andrew-neel-acowe0pCVBg-unsplash.jpg" 
                  alt="Kayoetangan" 
                  className="w-full aspect-[4/3] rounded-lg object-cover bg-neutral-200"
                  onError={(e) => { e.target.src = 'https://placehold.co/400x300/e2e8f0/64748b?text=Kayoetangan' }}
                />
                <p className="absolute bottom-2 inset-x-0 text-center text-[10px] sm:text-xs font-bold text-neutral-800">Kayoetangan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
