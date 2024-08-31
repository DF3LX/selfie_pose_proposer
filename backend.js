function generateRandomEmoji() {
    const emojis = ["😀", "😂", "😍", "🤩", "🤔", "🙄", "😎", "😢", "😡", "🤯", "🥳", "🤗"];
    const emojiCount = document.getElementById("emojiCount").value;
    let emojiOutput = "";

    for (let i = 0; i < emojiCount; i++) {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        emojiOutput += emojis[randomIndex];
    }

    document.getElementById("emoji").textContent = emojiOutput;

}
