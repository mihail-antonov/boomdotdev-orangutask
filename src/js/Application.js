import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.fedMonkeys = [];
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {

    this.emojis = emojis;

    let wrapper = document.getElementById('emojis');

    wrapper.innerHTML = '';

    this.fedMonkeys.forEach((fedMonkey) => {

      let paragraph = document.createElement('p');

      paragraph.textContent = fedMonkey;

      wrapper.append(paragraph);
    });
  }

  addBananas() {

    this.fedMonkeys = this.emojis.map((emoji) => {
      return emoji + this.banana;
    });

    this.setEmojis(this.emojis);
  }
}
