import { AbstractEncryption } from "./abstract_encryption";


export class CipherEncryption extends AbstractEncryption{
  constructor() {
    super()
  }

  //Get letter look for its index in the alphabet
  // add encryption to it ie: 3
  // and then put the word their or back
  _cipher_letter(letter) {
    if (typeof letter !== "string") return;

    letter = letter.toLowerCase();
    // console.log(super.get_letters())
    let letter_index = this.letters.indexOf(letter);
    let new_text_index = (letter_index + this.cipher_shift) % 26;
    let cipher_letter = this.letters[new_text_index]
    // console.log(`Ciphered text: ${cipher_letter}`)
    return cipher_letter;
  }

  _cipher_message(words) {
    if (typeof words !== "string") return;
    words = [...words]
    let cipher_words = []
    for (let [index, letter] of words.entries()) {
      cipher_words[index] = this._cipher_letter(letter);

    }
    // console.log(cipher_words)
    return cipher_words.join("")
  }

  encrypt(message) {
    return this._cipher_message(message);
  }

  decrypt(message) {
    if (typeof message !== "string") return;
    message = [...message];
    let decrypted_words = []
    for (let letter of message) {
      let letter_index = this.letters.indexOf(letter);
      let new_letter_index = (letter_index - this.cipher_shift);
      if (new_letter_index < 0) {
        new_letter_index = -new_letter_index
      }
      let decrypted_letter = this.letters[new_letter_index]
      decrypted_words.push(decrypted_letter)
    }
    return decrypted_words.join("")
  }

}