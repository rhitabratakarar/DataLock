function calculateInverseColor(hexColor) {
    // Remove the '#' symbol if present
    hexColor = hexColor.replace('#', '');

    // Convert hex color to RGB
    const red = parseInt(hexColor.substring(0, 2), 16);
    const green = parseInt(hexColor.substring(2, 4), 16);
    const blue = parseInt(hexColor.substring(4, 6), 16);

    // Calculate inverse RGB values
    const inverseRed = 255 - red;
    const inverseGreen = 255 - green;
    const inverseBlue = 255 - blue;

    // Convert inverse RGB to hex color
    const inverseHexColor = `#${inverseRed.toString(16).padStart(2, '0')}${inverseGreen.toString(16).padStart(2, '0')}${inverseBlue.toString(16).padStart(2, '0')}`;
    
    return inverseHexColor;
}

export default calculateInverseColor;