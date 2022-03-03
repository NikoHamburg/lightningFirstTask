/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from "@lightningjs/sdk";
// import { Splash } from "./Splash";
import { ThumbnailList } from "./ThumbnailList";
import { Button } from "./Button";
import { testItems } from "./testItems";

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
      { family: "Vera", url: Utils.asset("fonts/Vera.ttf") },
    ];
  }

  static _template() {
    return {
      rect: true,
      color: 0xff000000,
      w: 1920,
      h: 1080,
      // Splash: {
      //   type: Splash,
      //   signals: { loaded: true },
      //   alpha: 1,
      // },
      Buttons: {
        LeftButton: {
          x: 100,
          y: 50,
          type: Button,
          buttonText: "Left",
        },
        RightButton: {
          x: 300,
          y: 50,
          type: Button,
          buttonText: "Right",
        },
      },
      List: {
        x: 100,
        y: 200,
        type: ThumbnailList,
      },
    };
  }

  _init() {
    this.tag("List").items = testItems.map((item) => ({
      label: item.title,
      assetUrl: item.assetUrl,
    }));
  }

  _handleUp() {
    this._setState("Buttons");
  }

  _handleDown() {
    this._setState("List");
  }

  static _states() {
    return [
      class Buttons extends this {
        _handleLeft() {
          this.buttonIndex = 0;
        }
        _handleRight() {
          this.buttonIndex = 1;
        }
        _getFocused() {
          return this.tag("Buttons").children[this.buttonIndex];
        }
      },
      class List extends this {
        _getFocused() {
          return this.tag("List");
        }
      },
    ];
  }
}
