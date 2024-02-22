function wordDecrypt() {
  const resultElement = document.getElementById("resultado");

  let encryptedWord = resultElement.innerText;
  resultElement.innerText = "";

  let decryptedWord = encryptedWord.replace("Texto Criptografado:\n", "");
  decryptedWord = decryptedWord.replace(/enter/g, "e");
  decryptedWord = decryptedWord.replace(/imes/g, "i");
  decryptedWord = decryptedWord.replace(/ai/g, "a");
  decryptedWord = decryptedWord.replace(/ober/g, "o");
  decryptedWord = decryptedWord.replace(/ufat/g, "u");
  decryptedWord = decryptedWord.replace("Texto Descriptografado:\n", "");

  resultElement.innerHTML =
    "<span class='encrypted-label'>Texto Decriptografado:</span><br> <br>" +
    decryptedWord;
  console.log(decryptedWord);
  return decryptedWord;
}
