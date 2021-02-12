import { makeObservable, observable, reaction } from "mobx";

export class KonamiStore {
  word: string = "roymustang";
  typed: string = "";

  konami: boolean = false;

  constructor() {
    makeObservable(this, {
      typed: observable,
      konami: observable,
    });

    reaction(
      () => this.typed,
      (typed) => {
        if (typed === this.word) {
          console.log(`KONAMI TRIGGERED`);
          this.konami = true;
          return;
        }
        if (typed.length > this.word.length) {
          this.typed = typed.substr(1, typed.length);
        }
      }
    );
  }
}
