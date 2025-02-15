import { Encrypt } from "./encryption/encrypt.js";


let encryption_form = document.getElementById("encryption-form");
let input = document.getElementById("cipher");
let submit_button = document.getElementById("submit-button");
let encryption_type = document.getElementById("encryption-type");
let encryption_method = document.getElementById("encryption-method");

encryption_form.oninput = () => {
  let encrypt = new Encrypt(encryption_type.value,encryption_method.value,input.value)
  submit_button.value = encryption_method.value.capitalize()
  console.log(submit_button.value)
  let encrypted_text = encrypt.encrypt_or_decrypt()
  let output_div = document.getElementsByClassName("encrypted_text")[0];
  output_div.innerHTML = encrypted_text
}


encryption_form.onsubmit = (event) => {
  let encrypt = new Encrypt(encryption_type.value,encryption_method.value,input.value)
  submit_button.value = encryption_method.value.capitalize()
  console.log(submit_button.value)
  let encrypted_text = encrypt.encrypt_or_decrypt()
  let output_div = document.getElementsByClassName("encrypted_text")[0];
  output_div.innerHTML = encrypted_text
  event.preventDefault();

}
