import { Lightning } from "@lightningjs/sdk";

class ThumbnailItem extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 100,
      h: 100,
      color: 0x59faee55,
      alpha: 0.7,
      Label: {
        x: 52,
        y: 52,
        mount: 0.5,
      },
    };
  }

  _init() {
    this.patch({
      Label: {
        text: {
          text: this.item.label,
        },
      },
    });
  }
}

export { ThumbnailItem };
