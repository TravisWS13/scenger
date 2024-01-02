// Wait for the document to be fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function () {
    // Find the button and attach the translate function to its click event
    const translateButton = document.getElementById('translateButton');
    translateButton.addEventListener('click', translate);
});

async function translate() {
    const input = document.getElementById('inputBox').value;

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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',
            },
            body: JSON.stringify({
                prompt: input,
                max_tokens: 100, // Adjust based on your needs
                // Add any other required parameters
            }),
        });

        const data = await response.json();
        document.getElementById('outputBox').value = data.choices[0].text;
    } catch (error) {
        console.error('Error translating:', error);
        document.getElementById('outputBox').value = 'Translation error. Please try again.';
    }
}
