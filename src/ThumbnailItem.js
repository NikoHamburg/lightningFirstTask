import { Lightning, Utils } from "@lightningjs/sdk";

class ThumbnailItem extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 100,
      h: 100,
      color: 0xff111111,
      Thumbnail: {
        w: 100,
        h: 100,
        alpha: 0.2,
      },
      Label: {
        x: 52,
        y: 52,
        mount: 0.5,
        color: 0xfffaee55,
        alpha: 1,
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
      Thumbnail: {
        src: Utils.asset(this.item.assetUrl),
      },
    });
  }

  _focus() {
    this.patch({
      smooth: { alpha: 1, scale: 1.2 },
    });
  }

  _unfocus() {
    this.patch({
      smooth: { alpha: 0.8, scale: 1 },
    });
  }
}

export { ThumbnailItem };
