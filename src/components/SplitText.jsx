import { useEffect, useMemo, useRef, memo } from "react";
import { gsap } from "gsap";

const splitIntoChars = (text) => text.split("");
const splitIntoWords = (text) => text.split(" ");

const getTokens = (text, splitType) => {
  if (splitType.includes("chars")) {
    return splitIntoChars(text).map((char, index) => ({
      key: `char-${index}`,
      value: char === " " ? "\u00A0" : char,
      className: "split-char",
    }));
  }

  return splitIntoWords(text).flatMap((word, index, arr) => {
    const tokens = [{
      key: `word-${index}`,
      value: word,
      className: "split-word",
    }];

    if (index < arr.length - 1) {
      tokens.push({
        key: `space-${index}`,
        value: "\u00A0",
        className: "split-space",
      });
    }

    return tokens;
  });
};

const SplitText = ({
  tag = "p",
  text = "",
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const tokens = useMemo(() => getTokens(text, splitType), [text, splitType]);
  const Tag = tag;

  useEffect(() => {
    if (hasAnimatedRef.current) return undefined;
    const element = containerRef.current;
    if (!element) return undefined;

    const targets = element.querySelectorAll(".split-char, .split-word");
    gsap.set(targets, from);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(targets, {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              onComplete: onLetterAnimationComplete,
            });
            hasAnimatedRef.current = true;
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, duration, ease, from, onLetterAnimationComplete, rootMargin, threshold, to]);

  return (
    <Tag ref={containerRef} className={`split-text ${className}`} style={{ textAlign }}>
      {tokens.map((token) => (
        <span key={token.key} className={token.className} style={{ display: "inline-block" }}>
          {token.value}
        </span>
      ))}
    </Tag>
  );
};

export default memo(SplitText);
