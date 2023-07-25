function hexToRgb(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
}

function componentToHex(component) {
  const hex = component.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  const hexR = componentToHex(r);
  const hexG = componentToHex(g);
  const hexB = componentToHex(b);

  return `#${hexR}${hexG}${hexB}`;
}

function adjustBrightness(hex, amount) {
  const { r, g, b } = hexToRgb(hex);

  console.log(r, g, b);

  const newR = Math.max(0, Math.min(255, r + amount));
  const newG = Math.max(0, Math.min(255, g + amount));
  const newB = Math.max(0, Math.min(255, b + amount));

  return rgbToHex(newR, newG, newB);
}

export default adjustBrightness;