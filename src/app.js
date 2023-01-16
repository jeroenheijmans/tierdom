const baseUrl = "";

document.addEventListener("DOMContentLoaded", async () => {
  function log(message) {
    console.log(message);
  }

  function getById(id) {
    return document.getElementById(id);
  }

  function querySelect(selector) {
    return document.querySelector(selector);
  }

  function createEl(tag, classList) {
    const $element = document.createElement(tag);
    $element.classList = classList;
    return $element;
  }

  log("Application starting...");

  getById("app-loading-indicator").classList.toggle("hidden");
  getById("app").classList.toggle("hidden");


  class Tier {
    constructor (dto, items) {
      this.level = dto.level;
      this.description = dto.description;
      this.threshold = dto.threshold;
      this.items = items;
    }
  }

  class Item {
    constructor (dto) {
      this.tierLevel = dto.tierLevel;
      this.code = dto.code;
      this.title = dto.title;
      this.rating = dto.rating;
      this.color = dto.color;
      this.description = dto.description;

      // translate percentage to range [-15, 135] for hue rotation (red to green)
      const hue = -30 + 160 * this.rating / 100;
      this.ratingColor = `hsl(${hue},60%,40%,0.8)`; // Careful! Spaces not allowed in Tailwind arbitrary values
    }
  }

  class TierList {
    constructor (dto) {
      this.items = dto.items.map(x => new Item(x));
      this.tiers = dto.tiers.map(x => new Tier(x, this.items.filter(i => i.tierLevel === x.level)));
    }
  }


  async function fetchTierList(category) {
    const response = await fetch(`${baseUrl}/data/${category}.json`);
    if (response.status >= 400) {
      throw new Error(`Error loading category ${category}, status ${response.status}: ${response.statusText}`);
    }
    const json = await response.json();
    const tierList = new TierList(json);
    return tierList;
  }

  async function loadTierList(category) {
    const tierList = await fetchTierList(category);
    tierList.tiers.forEach(tier => {
      const $tier = querySelect(`#${tier.level}-tier .items`);
      const newNodes = tier.items.map(i => {
        const $item = createEl("div", "flex flex-col p-2 border-2 border-black bg-slate-600/50 w-48 h-48");
        const $title = $item.appendChild(createEl("h3", "text-lg text-white"));
        $title.innerText = i.title;
        const $rating = $item.appendChild(createEl("div", `
          h-[2px] bg-black/50 relative
          mt-auto
          after:content-[' '] after:h-full after:w-[${i.rating}%] after:bg-[${i.ratingColor}] after:inline-block after:absolute
        `));
        return $item;
      });
      $tier.replaceChildren(...newNodes);
    });
  }

  await loadTierList("games");

});
