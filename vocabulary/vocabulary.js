import { words } from "./words.js";
import { getToken } from "./tokens.js";

export function addWord(word) {
    word = word.toLowerCase();

    if (!word) return null;

    words.add(word);

    return getToken(word);
}

export function addText(text) {
    const foundWords = text
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);

    return foundWords.map(word => addWord(word));
}
