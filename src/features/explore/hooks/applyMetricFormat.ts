/**
 * Display a flexible count with abbreviations like "K" (thousands) and "M" (millions)
 *
 * @param count — The actual count number to abbreviate
 * @param decimalPlaces - The number of digits to the right of a decimal point
 *
 * @example
 * applyMetricFormat(1289); // Output: 1.28K
 * applyMetricFormat(1289, 1); // Output: 1.2K
 *
 */
export const applyMetricFormat = (count: number, decimalPlaces: number = 2) => {
  const isMillion = 1000000;
  const isKilo = 1000;
  const multiplier = Math.pow(10, decimalPlaces);

  if (count >= isMillion) {
    return Math.trunc((count * multiplier) / isMillion) / multiplier + 'M';
  } else if (count >= isKilo) {
    return Math.trunc((count * multiplier) / isKilo) / multiplier + 'K';
  }
  return count.toString();
};
