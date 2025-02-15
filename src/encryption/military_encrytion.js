import { AbstractEncryption } from "./abstract_encryption";

export class MilitaryEncryption extends AbstractEncryption {
  constructor() {
    super()

  }

  encrypt(words) {
    if (typeof words !== "string") return;
    words = [...words]
    let encrypted_words = []
    for (let [index, letter] of words.entries()) {
      encrypted_words[index] = this.military_alphabet[letter]
      console.log(this.military_alphabet[letter])
    }

    return encrypted_words.join("-")
  }

  decrypt(words) {
    if (typeof words !== "string") return;

    words = [...words.split("-")]
    // for (const key in this.military_alphabet) {
    //   let regex = new RegExp(`(${this.military_alphabet[key]})`, "gi")
    //   // console.log(`key: ${key}--- Value: ${this.military_alphabet[key]}`)
    //   let match = regex.exec(words)
    //   for (let m in match) {
    //     // if (m != null) {
    //       console.log(match)
    //     // }
    //   }
    // }
    let decrypted_words = []
    for (const word of words) {
      for (const key in this.military_alphabet) {
        let value = `${this.military_alphabet[key]}`
        if(value == word){
          decrypted_words.push(key)
        }
      }
    }
    words = decrypted_words.join("")
    console.log(words)
    return words
  }


}