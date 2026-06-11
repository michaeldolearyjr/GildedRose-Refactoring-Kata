export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      //Declarations
      const AgedBrie = (item.name === 'Aged Brie');
      const BackstagePassesTAFKAL = (item.name === 'Backstage passes to a TAFKAL80ETC concert');
      const SulfurasHandofRagnaros = (item.name === 'Sulfuras, Hand of Ragnaros');

      //Logic
      if ((!AgedBrie && !BackstagePassesTAFKAL)) {

        if ((item.quality > 0 && !SulfurasHandofRagnaros)) {

          item.quality -= 1;
        }

      } else {

        if (item.quality < 50) {

          item.quality += 1;

          if (BackstagePassesTAFKAL) {

            if (item.sellIn < 11 && item.quality < 50) {

              item.quality += 1;

            }



            if (item.sellIn < 6 && item.quality < 50) {

              item.quality += 1;

            }
          }
        }
      }

      if (!SulfurasHandofRagnaros) {

        item.sellIn -= 1;

      }

      if (item.sellIn < 0) {

        if (!AgedBrie) {

          if (!BackstagePassesTAFKAL) {

            if (item.quality > 0 && !SulfurasHandofRagnaros) {
              item.quality -= 1;

            }

          } else {

            item.quality -= item.quality;

          }

        }

        if (AgedBrie && item.quality < 50) {

          item.quality += 1;

        }

      }

    }

    return this.items;

  }

}
