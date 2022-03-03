import { Lightning, Log } from "@lightningjs/sdk";

class Splash extends Lightning.Component {
  static _template() {
    return {
      Logo: {
        x: 960,
        y: 540,
        mount: 0.5,
        text: { text: "LOADING...", fontFace: "Vera" },
      },
    };
  }

  _init() {
    this._pulse = this.tag("Logo").animation({
      duration: 1,
      repeat: 0,
      actions: [
        {
          p: "alpha",
          v: {
            0: 1,
            0.5: 0,
            1: 1,
          },
        },
      ],
    });

    this._pulse.on("finish", () => {
      this.signal("loaded");
    });

  }

  _active() {
    this._pulse.start();
  }
}

export { Splash };
