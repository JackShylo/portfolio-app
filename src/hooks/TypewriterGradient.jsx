import { useState, useEffect } from "react";

export default function TypewriterGradient() {
  const words = ["Jack Kelly", "a Software Engineer", "an AI Developer"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Human typing randomness
  const randomSpeed = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isFinishedTyping = text === currentWord;
    const isFinishedDeleting = text === "";

    let timeoutSpeed = isDeleting
      ? randomSpeed(40, 80)  // faster deletion
      : randomSpeed(80, 160); // slower, more human typing

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (!isFinishedTyping) {
          setText(currentWord.substring(0, text.length + 1));
        } else {
          // Pause after typing a word
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        // Deleting
        if (!isFinishedDeleting) {
          setText(currentWord.substring(0, text.length - 1));
        } else {
          // Move to next word after deleting
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, timeoutSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
