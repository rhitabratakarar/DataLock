function getColorPallete(url) {
  let originalString = "27374d526d829db2bfdde6ed";
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