import React, { useState } from 'react';

export default function Home() {
  const [hearts, setHearts] = useState([]);

  const handleClick = (e) => {
    const id = Date.now();
    const newHeart = {
      id,
      x: e.clientX,
      y: e.clientY,
    };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 1000);
  };

  return (
    <div
      className="w-screen h-screen bg-white overflow-hidden relative"
      onClick={handleClick}
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-pink-500 animate-heart"
          style={{
            left: heart.x,
            top: heart.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          ❤️
        </span>
      ))}

      <style jsx>{`
        .animate-heart {
          animation: pop-heart 1s ease-out forwards;
          pointer-events: none;
          font-size: 2rem;
        }

        @keyframes pop-heart {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
