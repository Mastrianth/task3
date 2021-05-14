export function stripCharacters(string, characters) {
  const re = new RegExp(`[${characters}]+`, 'g');
  return string.replace(re, '');
}
export function filterString(string, allowedCharsRegex) {
  return (string.match(allowedCharsRegex) || []).join('');
}
export function removeAdditionalSpaces(string) {
  return string.trim().replace(/\s+/g, ' ');
}
export function removeAllSpaces(string) {
  return string.replace(/\s+/g, '');
}
