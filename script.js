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
