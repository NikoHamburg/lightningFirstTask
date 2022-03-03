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
        alpha: 0.7,
      },
      Label: {
        color: 0xfffaee55,
        alpha: 0.9,
        x: -16,
        y: -22,
        text: {
          textAlign: "center",
        //   highlight: true,
        //   highlightColor: 0x88222222,
          shadow: true,
          shadowColor: 0xff000000,
          fontSize: 32,
        },
      },
      Description: {
        y: 80,
        x: 4,
        text: {
          fontFace: "Vera",
          fontSize: 16,
          textColor: 0x234798324,
        },
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
      Description: {
        text: {
          text: this.item.description,
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
