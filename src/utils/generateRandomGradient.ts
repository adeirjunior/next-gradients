export const generateRandomGradient = (): string => {
  const angle = Math.floor(Math.random() * 360);
  const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
};