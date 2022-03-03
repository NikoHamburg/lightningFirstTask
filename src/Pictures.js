import { Lightning, Utils, Log } from "@lightningjs/sdk";

class Pictures extends Lightning.Component {
    _template(title, description) {
        return {
            // Image: {
            //     x: 0.5,
            //     y: 0.5,
            //     h: 200,
            //     w: 200,
            //     src: Utils.asset(assetUrl),
            // },
            text: {
                mount: 0.5,
                x: 500,
                y: 500,
                text: {
                    text: title,
                    fontFace: 'Vera',
                    fontSize: 32,
                    textColor: 0x2988fe83,
                }
            },
            text: {
                mount: 0.5,
                x: 500,
                y: 600,
                text: {
                    text: description,
                    fontFace: 'Vera',
                    fontSize: 16,
                    textColor: 0x55993787,
                }
            }
        }
    }
}

export { Pictures };