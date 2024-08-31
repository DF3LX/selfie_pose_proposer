function generateRandomEmoji() {
    const emojis = ["😀", "😂", "😍", "🤩", "🤔", "🙄", "😎", "😢", "😡", "🤯", "🥳", "🤗"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    document.getElementById("emoji").textContent = emojis[randomIndex];
}
