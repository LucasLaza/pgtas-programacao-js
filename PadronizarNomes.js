const nomeDog = "tH%!$@#%@#$ˆ@%ˆ&#$ˆ@#$%@oR THE HERO"

nomeCorrigido = Padronize(nomeDog)

console.log(nomeDog)
console.log(nomeCorrigido)

function Padronize(str) {
    const stringWithoutSpecialChars = str.replace(/[^a-zA-Z0-9\s]/g, '');
    if (stringWithoutSpecialChars.length === 0) {
      return "";
    }
    const firstLetter = stringWithoutSpecialChars.charAt(0).toUpperCase();
    const restOfString = stringWithoutSpecialChars.slice(1).toLowerCase();
    return firstLetter + restOfString;
}