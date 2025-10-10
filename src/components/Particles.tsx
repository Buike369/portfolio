// "use client";

// import { motion } from "framer-motion";

// const particles = new Array(20).fill(0);

// export default function Particles() {
//   return (
//     <>
//       {particles.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-cyan-400/20 blur-[2px]"
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             opacity: Math.random(),
//           }}
//           animate={{
//             y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
//             x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
//             opacity: [0.2, 0.8, 0.2],
//           }}
//           transition={{
//             duration: 10 + Math.random() * 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Particles() {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    setPositions(
      new Array(20).fill(0).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
    );
  }, []);

  return (
    <>
      {positions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/20 blur-[2px]"
          initial={{ x: p.x, y: p.y, opacity: Math.random() }}
          animate={{
            y: [p.y, Math.random() * window.innerHeight],
            x: [p.x, Math.random() * window.innerWidth],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

