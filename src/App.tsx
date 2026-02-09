import { useState, useRef, useCallback, useEffect } from "react";
import confetti from "canvas-confetti";

/* ───────── floating hearts component ───────── */
function FloatingHearts() {
  const hearts = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 14 + Math.random() * 20,
    opacity: 0.15 + Math.random() * 0.25,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-up"
          style={{
            left: `${h.left}%`,
            bottom: "-40px",
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          {h.id % 3 === 0 ? "💕" : h.id % 3 === 1 ? "❤️" : "💖"}
        </span>
      ))}
    </div>
  );
}

/* ───────── SVG donkey ───────── */
function DonkeySVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* body */}
      <ellipse cx="100" cy="130" rx="55" ry="40" fill="#8B8B8B" />
      {/* head */}
      <ellipse cx="100" cy="80" rx="30" ry="28" fill="#9E9E9E" />
      {/* ears */}
      <ellipse cx="78" cy="42" rx="8" ry="22" fill="#8B8B8B" transform="rotate(-15 78 42)" />
      <ellipse cx="78" cy="42" rx="5" ry="16" fill="#C8A0A0" transform="rotate(-15 78 42)" />
      <ellipse cx="122" cy="42" rx="8" ry="22" fill="#8B8B8B" transform="rotate(15 122 42)" />
      <ellipse cx="122" cy="42" rx="5" ry="16" fill="#C8A0A0" transform="rotate(15 122 42)" />
      {/* muzzle */}
      <ellipse cx="100" cy="92" rx="16" ry="12" fill="#C4B5A5" />
      {/* nostrils */}
      <circle cx="94" cy="92" r="2.5" fill="#666" />
      <circle cx="106" cy="92" r="2.5" fill="#666" />
      {/* eyes */}
      <circle cx="88" cy="74" r="5" fill="#333" />
      <circle cx="112" cy="74" r="5" fill="#333" />
      <circle cx="89.5" cy="72.5" r="1.8" fill="white" />
      <circle cx="113.5" cy="72.5" r="1.8" fill="white" />
      {/* smile */}
      <path d="M92 97 Q100 104 108 97" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
      {/* legs */}
      <rect x="65" y="160" width="12" height="28" rx="5" fill="#7A7A7A" />
      <rect x="85" y="160" width="12" height="28" rx="5" fill="#7A7A7A" />
      <rect x="105" y="160" width="12" height="28" rx="5" fill="#7A7A7A" />
      <rect x="125" y="160" width="12" height="28" rx="5" fill="#7A7A7A" />
      {/* hooves */}
      <rect x="64" y="183" width="14" height="6" rx="3" fill="#555" />
      <rect x="84" y="183" width="14" height="6" rx="3" fill="#555" />
      <rect x="104" y="183" width="14" height="6" rx="3" fill="#555" />
      <rect x="124" y="183" width="14" height="6" rx="3" fill="#555" />
      {/* tail */}
      <path d="M155 125 Q175 115 170 140 Q168 148 160 145" fill="none" stroke="#7A7A7A" strokeWidth="4" strokeLinecap="round" />
      {/* heart above */}
      <path d="M95 20 C95 14 85 10 85 18 C85 26 95 30 95 30 C95 30 105 26 105 18 C105 10 95 14 95 20Z" fill="#FF4D7D" />
    </svg>
  );
}

/* ───────── SVG dog ───────── */
function DogSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* body */}
      <ellipse cx="100" cy="130" rx="50" ry="38" fill="#D4A574" />
      {/* belly */}
      <ellipse cx="100" cy="140" rx="30" ry="22" fill="#F0D9C0" />
      {/* head */}
      <circle cx="100" cy="78" r="30" fill="#D4A574" />
      {/* ears - floppy */}
      <ellipse cx="68" cy="68" rx="16" ry="24" fill="#B8885C" transform="rotate(-20 68 68)" />
      <ellipse cx="132" cy="68" rx="16" ry="24" fill="#B8885C" transform="rotate(20 132 68)" />
      {/* muzzle */}
      <ellipse cx="100" cy="90" rx="15" ry="12" fill="#F0D9C0" />
      {/* nose */}
      <ellipse cx="100" cy="84" rx="5" ry="4" fill="#333" />
      {/* eyes */}
      <circle cx="87" cy="72" r="5.5" fill="#333" />
      <circle cx="113" cy="72" r="5.5" fill="#333" />
      <circle cx="88.5" cy="70.5" r="2" fill="white" />
      <circle cx="114.5" cy="70.5" r="2" fill="white" />
      {/* tongue */}
      <ellipse cx="100" cy="100" rx="5" ry="7" fill="#FF7AA2" />
      {/* legs */}
      <rect x="65" y="158" width="14" height="28" rx="6" fill="#C4945E" />
      <rect x="85" y="158" width="14" height="28" rx="6" fill="#C4945E" />
      <rect x="105" y="158" width="14" height="28" rx="6" fill="#C4945E" />
      <rect x="125" y="158" width="14" height="28" rx="6" fill="#C4945E" />
      {/* paws */}
      <ellipse cx="72" cy="187" rx="8" ry="4" fill="#B8885C" />
      <ellipse cx="92" cy="187" rx="8" ry="4" fill="#B8885C" />
      <ellipse cx="112" cy="187" rx="8" ry="4" fill="#B8885C" />
      <ellipse cx="132" cy="187" rx="8" ry="4" fill="#B8885C" />
      {/* tail - wagging */}
      <path d="M150 122 Q170 100 165 80" fill="none" stroke="#D4A574" strokeWidth="6" strokeLinecap="round" />
      {/* heart */}
      <path d="M100 18 C100 12 90 8 90 16 C90 24 100 28 100 28 C100 28 110 24 110 16 C110 8 100 12 100 18Z" fill="#FF4D7D" />
    </svg>
  );
}

/* ───────── Photo Gallery component ───────── */
function PhotoGallery() {
  // REPLACE THE LINE ABOVE WITH THIS:
const [photos, setPhotos] = useState<string[]>([
  "./photos/1_2.jpeg",
  "./photos/1_3.jpeg",
  "./photos/1_4.jpeg",
  "./photos/1_5.jpeg",
  "./photos/1_6.jpeg",
  "./photos/1_7.jpeg"
  
  // Add as many comma-separated paths as you like!
]);
  const fileRef = useRef<HTMLInputElement>(null);

  const addPhoto = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setPhotos((prev) => [...prev, ev.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  }, []);

  return (
    <div className="mt-6 w-full">
      <p className="text-pink-600 font-semibold text-lg mb-3">📸 Our Memories Together</p>

      <div className="flex flex-wrap gap-3 justify-center mb-4">
        {photos.map((src, i) => (
          <div
            key={i}
            className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-pink-200 transform hover:scale-105 transition-transform"
          >
            <img src={src} alt={`Memory ${i + 1}`} className="w-full h-full object-cover" />
            <button
              onClick={() => setPhotos((prev) => prev.filter((_, j) => j !== i))}
              className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              ×
            </button>
          </div>
        ))}

        <button
          onClick={() => fileRef.current?.click()}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl border-2 border-dashed border-pink-300 bg-pink-50/50 flex flex-col items-center justify-center text-pink-400 hover:bg-pink-100/50 hover:border-pink-400 transition-all cursor-pointer"
        >
          <span className="text-3xl leading-none">+</span>
          <span className="text-[10px] mt-1 font-medium">Add Photo</span>
        </button>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        multiple
        onChange={addPhoto}
        className="hidden"
      />
    </div>
  );
}

/* ───────── Main App ───────── */
export function App() {
  const [answered, setAnswered] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPos, setNoPos] = useState({ left: 62, top: 50 });
  const [noPosPixels, setNoPosPixels] = useState(false);
  const zoneRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  const [hintText, setHintText] = useState('"No" seems a bit shy 😈');
  const hintMessages = useRef([
    "Are you sure? 🥺",
    "Think again! 💭",
    "Pretty please? 🐕",
    "The donkey says yes! 🫏",
    "Come onnn! 💕",
    "You're breaking my heart! 💔",
    "Just click Yes already! 😤",
    "I'll keep running! 🏃",
  ]);
  const hintIndex = useRef(0);

  const fireConfetti = useCallback(() => {
    const end = Date.now() + 2000;
    const frame = () => {
      confetti({
        particleCount: 14,
        spread: 100,
        startVelocity: 45,
        ticks: 200,
        origin: { x: Math.random(), y: Math.random() * 0.3 },
        shapes: ["circle", "square"],
        colors: ["#ff4d7d", "#ff85a1", "#ffd6e7", "#ff1f68", "#ffb3c6"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();

    setTimeout(() => {
      confetti({
        particleCount: 350,
        spread: 160,
        startVelocity: 60,
        ticks: 240,
        origin: { x: 0.5, y: 0.55 },
        colors: ["#ff4d7d", "#ff85a1", "#ffd6e7", "#ff1f68", "#ffb3c6", "#ff69b4"],
      });
    }, 400);
  }, []);

  const handleYes = useCallback(() => {
    setAnswered(true);
    fireConfetti();
  }, [fireConfetti]);

  const moveNo = useCallback(
    (px: number, py: number) => {
      if (!zoneRef.current || !noBtnRef.current) return;
      const z = zoneRef.current.getBoundingClientRect();
      const b = noBtnRef.current.getBoundingClientRect();

      let dx = b.left + b.width / 2 - px;
      let dy = b.top + b.height / 2 - py;
      const mag = Math.hypot(dx, dy) || 1;
      dx /= mag;
      dy /= mag;

      let newLeft = b.left - z.left + dx * 150;
      let newTop = b.top - z.top + dy * 150;

      newLeft = Math.max(0, Math.min(z.width - b.width, newLeft));
      newTop = Math.max(0, Math.min(z.height - b.height, newTop));

      setNoPosPixels(true);
      setNoPos({ left: newLeft, top: newTop });
      setYesScale((s) => Math.min(2.4, s + 0.12));

      hintIndex.current = (hintIndex.current + 1) % hintMessages.current.length;
      setHintText(hintMessages.current[hintIndex.current]);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!noBtnRef.current) return;
      const b = noBtnRef.current.getBoundingClientRect();
      const dist = Math.hypot(
        b.left + b.width / 2 - e.clientX,
        b.top + b.height / 2 - e.clientY
      );
      if (dist < 140) moveNo(e.clientX, e.clientY);
    },
    [moveNo]
  );

  // Paw prints floating effect
  const [pawPrints, setPawPrints] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const pawIdRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      pawIdRef.current++;
      setPawPrints((prev) => [
        ...prev.slice(-8),
        { id: pawIdRef.current, x: Math.random() * 90 + 5, y: Math.random() * 90 + 5 },
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center p-4">
      <FloatingHearts />

      {/* Paw prints */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {pawPrints.map((p) => (
          <span
            key={p.id}
            className="absolute text-pink-200/40 animate-fade-in-out"
            style={{ left: `${p.x}%`, top: `${p.y}%`, fontSize: "24px" }}
          >
            🐾
          </span>
        ))}
      </div>

      {/* Card */}
      <main className="relative z-10 w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl shadow-pink-200/50 p-6 sm:p-10 text-center border border-pink-100">
        {!answered ? (
          <>
            {/* Animals */}
            <div className="flex items-center justify-center gap-2 sm:gap-6 mb-2">
              <DonkeySVG className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-lg animate-gentle-bounce" />
              <div className="text-5xl sm:text-6xl animate-pulse">💕</div>
              <DogSVG className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-lg animate-gentle-bounce-delay" />
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent mb-2 leading-tight">
              Nele, will you be my Valentine?
            </h1>

            <p className="text-pink-400 text-sm sm:text-base mb-6 italic">
              A donkey & a puppy both agree — you should say yes! 🫏🐕
            </p>

            {/* Button zone */}
            <div
              ref={zoneRef}
              className="relative w-full max-w-lg h-40 mx-auto touch-none"
              onPointerMove={handlePointerMove}
            >
              {/* Yes button */}
              <button
                onClick={handleYes}
                className="absolute left-[18%] top-1/2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold text-lg px-8 py-4 rounded-full shadow-lg shadow-pink-300/50 transition-all duration-150 cursor-pointer"
                style={{
                  transform: `translateY(-50%) scale(${yesScale})`,
                }}
              >
                Yes! 💖
              </button>

              {/* No button */}
              <button
                ref={noBtnRef}
                onClick={(e) => e.preventDefault()}
                className="absolute bg-gray-200 text-gray-700 font-extrabold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-100 cursor-pointer hover:bg-gray-300"
                style={
                  noPosPixels
                    ? { left: `${noPos.left}px`, top: `${noPos.top}px` }
                    : {
                        left: `${noPos.left}%`,
                        top: `${noPos.top}%`,
                        transform: "translateY(-50%)",
                      }
                }
              >
                No
              </button>
            </div>

            <p className="mt-4 text-sm text-pink-400/80 italic animate-pulse">{hintText}</p>
          </>
        ) : (
          /* ───── RESULT SCREEN ───── */
          <div className="animate-pop">
            <div className="flex items-center justify-center gap-3 mb-4">
              <DonkeySVG className="w-20 h-20 sm:w-24 sm:h-24 animate-gentle-bounce" />
              <DogSVG className="w-20 h-20 sm:w-24 sm:h-24 animate-gentle-bounce-delay" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent mb-2">
              YAY! 🎉
            </h2>

            <p className="text-xl sm:text-2xl text-pink-600 font-semibold mb-1">
              I knew you'd say yes! 💕
            </p>

            <p className="text-pink-400 text-sm mb-4">
              Even the donkey is celebrating and the puppy is wagging its tail! 🐕💖
            </p>

            <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
              <img
                src="./photos/1_1.jpeg"
                alt="Fireworks celebration"
                className="w-full max-w-sm mx-auto"
              />
            </div>

            <PhotoGallery />

            <div className="mt-6 p-4 bg-pink-50 rounded-2xl border border-pink-200">
              <p className="text-pink-600 font-medium text-lg">
                Happy Valentine's Day, Nele! ❤️
              </p>
              <p className="text-pink-400 text-sm mt-1">
                I Love You ❤️
              </p>
            </div>

            <button
              onClick={() => {
                confetti({
                  particleCount: 200,
                  spread: 160,
                  startVelocity: 50,
                  origin: { x: 0.5, y: 0.5 },
                  colors: ["#ff4d7d", "#ff85a1", "#ffd6e7", "#ff1f68"],
                });
              }}
              className="mt-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-pink-300/50 hover:from-pink-600 hover:to-rose-600 transition-all cursor-pointer active:scale-95"
            >
              More confetti! 🎊
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
