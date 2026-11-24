"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 350 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("a, button, [role='button'], input, [data-cursor]");
      const customTextAttr = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");

      if (clickable) {
        setIsHovered(true);
        if (customTextAttr) {
          setCursorText(customTextAttr);
        } else if (target.closest("[data-cursor='view']")) {
          setCursorText("View");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-200"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? (cursorText ? 72 : 48) : 14,
        height: isHovered ? (cursorText ? 72 : 48) : 14,
        backgroundColor: isHovered
          ? cursorText
            ? "rgba(18, 18, 18, 0.9)"
            : "rgba(255, 132, 93, 0.3)"
          : "#121212",
        border: isHovered && !cursorText ? "1.5px solid #FF845D" : "none",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 350 }}
    >
      {cursorText && (
        <span className="text-white text-xs font-semibold tracking-wider uppercase font-dm">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
