export function splitText(text) {
    return text.match(/[\p{L}\p{N}]+|[^\s\p{L}\p{N}]/gu) || [];
}
