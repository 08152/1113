import { normalizeText } from "./normalize.js";
import { splitText } from "./splitter.js";
import { addWord } from "../vocabulary/vocabulary.js";

export function tokenize(text) {
    const normalized = normalizeText(text);
    const parts = splitText(normalized);

    return parts.map(part => addWord(part));
}

export function tokenizeWords(text) {
    const normalized = normalizeText(text);
    return splitText(normalized);
}
