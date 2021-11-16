import { action, makeObservable, observable } from "mobx";

export class KonamiStore {
  word: string = "roymustang";
  typed: string = "";

  konami: boolean = false;

  constructor() {
    makeObservable(this, {
      typed: observable,
      konami: observable,
      handleChange: action,
    });
  }
  handleChange() {
    const { typed, word } = this;
    if (typed === word) {
      this.konami = true;
    } else if (typed.length > word.length) {
      this.typed = typed.substr(1, typed.length);
    }
  }
  get isMatch() {
    return this.typed === this.word;
  }
}
