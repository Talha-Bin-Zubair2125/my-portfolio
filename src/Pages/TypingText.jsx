import React, { useState, useEffect } from "react";

const PINK = "#ec4899";

/**
 * TypingText — a small self-contained typewriter effect.
 * Cycles through `phrases`, typing each one out, pausing, deleting,
 * then moving to the next. Pass a single-item array for a "type once" effect.
 */
function TypingText({
  phrases = ["Hello."],
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseMs = 1600,
  loop = true,
  color = PINK,
  style = {},
  cursorColor,
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    // Reached full word — pause, then start deleting (if looping / more than one phrase)
    if (!isDeleting && text === current) {
      if (!loop && phrases.length === 1) return; // type once, stay
      const pause = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    // Fully deleted — move to next phrase
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseMs,
    loop,
  ]);

  return (
    <span style={{ ...style, display: "inline-flex", alignItems: "center" }}>
      <span style={{ color }}>{text}</span>
      <span
        style={{
          display: "inline-block",
          width: 2,
          marginLeft: 3,
          height: "1em",
          background: cursorColor || color,
          animation: "typingCursorBlink 0.9s steps(1) infinite",
        }}
      />
      <style>{`
        @keyframes typingCursorBlink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}

export default TypingText;
