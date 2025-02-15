import { CipherEncryption } from "./cipher_encrytion";


let encryption_form = document.getElementById("encryption-form");
let input = document.getElementById("cipher");


let encrypter = new CipherEncryption();

encryption_form.onsubmit = (event) => {
  let encrypted_text = encrypter.encrypt(input.value)
  let output_div = document.getElementsByClassName("encrypted_text")[0];
  output_div.innerHTML = encrypted_text
  console.log(`Decypted words: ${encrypter.decrypt(encrypted_text)}`)
  event.preventDefault();

}
encryption_form.oninput = () => {
  let output_div = document.getElementsByClassName("encrypted_text")[0];
  let encrypted_text = encrypter.encrypt(input.value)
  console.log(`Decypted words: ${encrypter.decrypt(encrypted_text)}`)
  output_div.innerHTML = encrypted_text
}

