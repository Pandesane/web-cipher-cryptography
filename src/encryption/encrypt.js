import { CipherEncryption } from "./cipher_encrytion";
import { MilitaryEncryption } from "./military_encrytion";


Number.prototype.subString = function (str) {
  let str_builder = []
  for (let i = this; i < str.length; i++) {
    str_builder[i] = str[i];
  }
  return str_builder.join("")
}
String.prototype.capitalize = function () {
  let str = this
  str[0].toUpperCase() + str
  return str[0].toUpperCase() + new Number(1).subString(str);
}

export class Encrypt {
  constructor(type, method, value) {
    this.method = method
    this.value = value
    this.encrypter = this.set_encryption_type(type)
  }


  encrypt_or_decrypt() {
    switch (this.method) {
      case "encrypt":
        return this.encrypter.encrypt(this.value)
      case "decrypt":
        return this.encrypter.decrypt(this.value)
      default:
        break;
    }
  }

  set_encryption_type(type) {
    switch (type) {
      case "m":
        return new MilitaryEncryption()
      case "c":
        return new CipherEncryption()
    }
  }

}


