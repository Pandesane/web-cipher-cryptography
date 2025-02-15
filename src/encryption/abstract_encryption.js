const military_alphabet = {
  a: "Alpha",
  b: "Bravo",
  c: "Charlie",
  d: "Delta",
  e: "Echo",
  f: "Foxtrot",
  g: "Golf",
  h: "Hotel",
  i: "India",
  j: "Juliet",
  k: "Kilo",
  l: "Lima",
  m: "Mike",
  n: "November",
  o: "Oscar",
  p: "Papa",
  q: "Quebec",
  r: "Romeo",
  s: "Sierra",
  t: "Tango",
  u: "Uniform",
  v: "Victor",
  w: "Whiskey",
  x: "X-ray",
  y: "Yankee",
  z: "Zulu",
}



export class AbstractEncryption {
  constructor() {
    this.letters =[..."abcdefghijklmnopqrstuvwxyz"]
    //TODO: Include the puncations and numbers
    this.numbers = [..."0123456789"]
    this.puncuations = [...""]
    this.cipher_shift = 3;
    // console.log(this.letters)
    this.military_alphabet = military_alphabet



  }

  decrypt_message(message) {

  }

  encrypt_message(message) {

  }

}