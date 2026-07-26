import { useState, useEffect } from 'react';

export function useTypewriter(text, speed = 80, delay = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let index = 0;

      const type = () => {
        if (!isDeleting && index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
          setTimeout(type, speed);
        } else if (isDeleting && index >= 0) {
          setDisplayText(text.slice(0, index));
          index--;
          setTimeout(type, speed / 2);
        } else {
          setIsDeleting(!isDeleting);
          setTimeout(type, isDeleting ? 100 : 1500);
        }
      };

      type();
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, isDeleting]);

  return displayText;
}
