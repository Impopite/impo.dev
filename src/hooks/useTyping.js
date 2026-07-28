import { useEffect, useState } from 'react';

export default function useTyping(phrases) {
  const [text, setText] = useState('');

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const type = () => {
      const phrase = phrases[phraseIndex];
      setText(phrase.slice(0, charIndex));

      if (!deleting && charIndex < phrase.length) {
        charIndex += 1;
        timer = window.setTimeout(type, 80);
        return;
      }

      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        timer = window.setTimeout(type, 2000);
        return;
      }

      if (deleting && charIndex > 0) {
        charIndex -= 1;
        timer = window.setTimeout(type, 40);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timer = window.setTimeout(type, 300);
    };

    timer = window.setTimeout(type, 500);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return text;
}
