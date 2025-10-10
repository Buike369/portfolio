"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
      className="fixed inset-0 -z-10 bg-[length:400%_400%]"
      style={{
        backgroundColor:"#000000",
        backgroundBlendMode: "overlay",
      }}
    />
     <Particles />
         </div>
  );
}
