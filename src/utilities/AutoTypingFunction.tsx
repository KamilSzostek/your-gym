export const typeText = (
  text: string,
  newText: string,
  textHandler: Function
) => {
  const text2 = text.substring(newText.length, text.length);
  for (const letter of [...text2].reverse()) {
    textHandler(newText, letter);
  }
};
