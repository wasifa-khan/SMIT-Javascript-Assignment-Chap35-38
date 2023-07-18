function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
      return number * number;
    }
    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuseSquare = baseSquare + perpendicularSquare;
    const hypotenuse = Math.sqrt(hypotenuseSquare);
    return hypotenuse;
  }
  const baseLength = 3;
  const perpendicularLength = 4;
  const hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
  console.log('Hypotenuse:', hypotenuse);
  