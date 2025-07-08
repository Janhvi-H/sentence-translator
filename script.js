const url = "https://api.funtranslations.com/translate/minion.json";

// Function to build the API URL with the user's input
function getTranslationURL(text) {
    return url + "?text=" + encodeURIComponent(text);
}

// Function called when the Translate button is clicked
async function clickHandler() {
    const inputText = document.getElementById('inputText').value;
    const outputArea = document.getElementById('outputArea2');

    try {
        const response = await fetch(getTranslationURL(inputText));
        if (!response.ok) {
            throw new Error("API limit exceeded or server error");
        }

        const jsonData = await response.json();
        outputArea.value = jsonData.contents.translated;
    } catch (error) {
        console.error("Error:", error);
        outputArea.value = "Oops! Something went wrong. Please try again later.";
    }
}