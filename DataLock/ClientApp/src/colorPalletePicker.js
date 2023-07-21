function getColorPallete(url) {
  let originalString = "c4dfdfd2e9e9e3f4f4f8f6f4";
  const substrings = [];

  if (url) {
    const stringList = url.split("/");
    for (let index in stringList) {
      if (stringList[index].length === 24) {
        originalString = stringList[index];
      }
    }
  }

  const substringLength = Math.ceil(originalString.length / 4);

  for (let i = 0; i < originalString.length; i += substringLength) {
    substrings.push(originalString.substring(i, i + substringLength));
  }

  const colorObject = {
      primary: '#' + substrings[0],
      secondary: '#' + substrings[1],
      tertiary: '#' + substrings[2],
      quaternary: '#' + substrings[3],
  }

  return colorObject;
}

export default getColorPallete;