// Substituir as letras conforme a chave
function wordEncrypt() {
  const textElement = document.getElementById("texto");
  const resulteElement = document.getElementById("resultado");
  const originalWord = textElement.value;

  let encryptedWord = originalWord.replace(/e/g, "enter");
  encryptedWord = encryptedWord.replace(/i/g, "imes");
  encryptedWord = encryptedWord.replace(/a/g, "ai");
  encryptedWord = encryptedWord.replace(/o/g, "ober");
  encryptedWord = encryptedWord.replace(/u/g, "ufat");

  resulteElement.innerHTML =
    "<span class='encrypted-label'>Texto Criptografado:</span><br> <br>" +
    encryptedWord;

  textElement.value = "";
  return encryptedWord;
}
