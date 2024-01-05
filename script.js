document
  .getElementById("translateBtn")
  .addEventListener("click", translateText);

async function translateText() {
  const inputText = document.getElementById("input").value;
  const inLanguage = document.getElementById("InLanguageSelect").value;
  const outLanguage = document.getElementById("OutLanguageSelect").value;

  const url = "https://text-translator2.p.rapidapi.com/translate";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: new URLSearchParams({
      source_language: inLanguage,
      target_language: outLanguage,
      text: inputText,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse the response as JSON
    // console.log(result);

    // Check if the status is "success" and data contains translatedText
    if (
      result.status === "success" &&
      result.data &&
      result.data.translatedText
    ) {
      // Update the output with the translated text
      document.getElementById("output").innerText = result.data.translatedText;
    } else {
      console.error("Invalid response format");
    }
  } catch (error) {
    console.error(error);
  }
}
