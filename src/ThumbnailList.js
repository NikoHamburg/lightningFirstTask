import { Lightning } from "@lightningjs/sdk";
import { ThumbnailItem } from "./ThumbnailItem";

class ThumbnailList extends Lightning.Component {
  set items(items) {
    this.children = items.map((item, index) => {
      return {
        type: ThumbnailItem,
        x: index * 120,
        item,
      };
    });
  }
}

export { ThumbnailList };
