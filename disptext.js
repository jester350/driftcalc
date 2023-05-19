function displayText() {
    const textElement = document.getElementById("myText");
    const text = "The times are local based on your own set timezone.";
    textElement.textContent = text;
}

displayText();