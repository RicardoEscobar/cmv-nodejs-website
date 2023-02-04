function initialCapitalization(str, ignoreWords = []) {
    // Trim the string to remove trailing and leading whitespaces
    str = str.trim();
    // Split the string into an array of words
    const words = str.split(" ");
    // Iterate through the array of words
    for (let i = 0; i < words.length; i++) {
        // Check if the current word is not in the ignoreWords array
        if (!ignoreWords.map(word => word.toLowerCase()).includes(words[i].toLowerCase())) {
            // Capitalize the first letter of the current word
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    // Join the array of words back into a string
    return words.join(" ");
}

