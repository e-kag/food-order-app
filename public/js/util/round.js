function roundTo(num, numDigits) {
  const multiplier = 10 * numDigits;

  return Math.round(num * multiplier)/multiplier;
}

export default roundTo;