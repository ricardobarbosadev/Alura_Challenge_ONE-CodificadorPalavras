function wordDecrypt() {
  const resulteElement = document.getElementById("resultado");
  let encryptedWord = resulteElement.innerText;

  let decryptedWord = encryptedWord.replace("Texto Criptografado:\n", "");
  decryptedWord = decryptedWord.replace(/enter/g, "e");
  decryptedWord = decryptedWord.replace(/imes/g, "i");
  decryptedWord = decryptedWord.replace(/ai/g, "a");
  decryptedWord = decryptedWord.replace(/ober/g, "o");
  decryptedWord = decryptedWord.replace(/ufat/g, "u");

  console.log(encryptedWord);
  resulteElement.innerText = "Texto Descriptografado:\n" + decryptedWord;
  return decryptedWord;
}
