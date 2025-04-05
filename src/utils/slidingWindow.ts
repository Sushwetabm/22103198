let window: number[] = [];

export const updateWindow = (newNumbers: number[], size = 10): { prev: number[], curr: number[] } => {
  const prev = [...window];
  const uniqueNew = newNumbers.filter(n => !window.includes(n));
  window = [...window, ...uniqueNew].slice(-size);
  return { prev, curr: window };
};

export const getAverage = (): number => {
  if (window.length === 0) return 0;
  const sum = window.reduce((a, b) => a + b, 0);
  return parseFloat((sum / window.length).toFixed(2));
};
