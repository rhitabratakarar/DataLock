function getColorPalleteStringFromURL(url) {
  let originalString = "2c36393f4e4fa27b5cdcd7c9";
  
  if (url) {
    const stringList = url.split("/");
    for (let index in stringList) {
      if (stringList[index].length === 24) {
        originalString = stringList[index];
      }
    }
  }

  return originalString;
}

function getColorPallete(string, url) {
  let originalString = getColorPalleteStringFromURL(url);
  if (string) originalString = string;
  const substrings = [];
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