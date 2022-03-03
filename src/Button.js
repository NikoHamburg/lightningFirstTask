import { Lightning } from "@lightningjs/sdk";

class Button extends Lightning.Component {
  static _template() {
    return {
      color: 0xff000000,
      RectangleWithColor: {
        w: 100,
        h: 50,
        color: 0xff444444,
        rect: true,
      },
      Label: {
        x: 28,
        y: 12,
        color: 0xf8834712,
        text: { fontSize: 20 },
      },
    };
  }
  _init() {
    this.tag("Label").patch({ text: this.buttonText });
  }

  _focus() {
    this.color = 0x38ffee82;
    this.tag("Label").color = 0xfff2f3f4;
    this.tag("RectangleWithColor").color = 0xff666666;
  }

  _unfocus() {
    this.color = 0xff000000;
    this.tag("Label").color = 0xf8834712;
    this.tag("RectangleWithColor").color = 0xff444444;
  }
}

export { Button };
