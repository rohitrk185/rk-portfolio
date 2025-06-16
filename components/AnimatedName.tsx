import { useState, useEffect } from "react";

interface AnimatedNameProps {
  name: string;
  typingSpeed?: number;
  restartDelay?: number;
}

function AnimatedName({
  name,
  typingSpeed = 150,
  restartDelay = 2000,
}: AnimatedNameProps) {
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (displayedName.length < name.length) {
      timeoutId = setTimeout(() => {
        setDisplayedName((prev) => prev + name[displayedName.length]);
      }, typingSpeed);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayedName("");
      }, restartDelay);
    }
    return () => clearTimeout(timeoutId);
  }, [displayedName, name, typingSpeed, restartDelay]);

  return (
    <span className="transition bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
      {displayedName}
    </span>
  );
}

export default AnimatedName;
