let nextTokenId = 0;

const tokenMap = new Map();
const idMap = new Map();

export function getToken(word) {
    if (!tokenMap.has(word)) {
        tokenMap.set(word, nextTokenId);
        idMap.set(nextTokenId, word);
        nextTokenId++;
    }

    return tokenMap.get(word);
}

export function getWord(id) {
    return idMap.get(id);
}

export function getVocabularySize() {
    return nextTokenId;
}
