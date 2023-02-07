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
      this.hasArt = dto.hasArt;
      this.color = dto.color;
      this.description = dto.description;
      this.props = dto.props;

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

    const $modalContainer = document.getElementById('info-modal-container');
    const $modalBackdrop = document.getElementById('info-modal-backdrop');
    const $modalContent = document.getElementById('info-modal-content');
    $modalBackdrop.addEventListener("click", () => {
      $modalContainer.classList.toggle("hidden");
    });

    tierList.tiers.forEach(tier => {
      const $tier = querySelect(`#${tier.level}-tier .items`);
      const newNodes = tier.items.map(i => {
        const $item = createEl("div", `
          group flex flex-col border-2 border-black bg-slate-600/50
          w-[33.3333333%] md:w-[25%] lg:w-[20%] xl:w-[16.6666667%] 2xl:w-[12.5%] aspect-square
          bg-center bg-cover cursor-pointer`);
        if (i.hasArt) {
          $item.style.backgroundImage = `linear-gradient(rgb(20 20 30 / 0.7), rgb(20 20 30 / 0.7)), url('art/${i.code}.png')`;
        }

        const $title = $item.appendChild(createEl("h3", "p-1 pt-0 pr-8 group-hover:pr-0 transition-all md:text-xl font-bold text-slate-100 group-hover:text-2xl"));
        $title.innerText = i.title;
        $title.style.textShadow = "black 1px 1px 4px"; // not in Tailwind yet

        const $row = $item.appendChild(createEl("div", "flex items-end mt-auto transition-all font-bold text-slate-200 opacity-40 group-hover:opacity-90 group-hover:text-xl uppercase"));

        const $rating = $row.appendChild(createEl("div", `mx-1`));
        $rating.innerText = `${i.rating}/100`;

        const $platformIcon = $row.appendChild(createEl("span", "ml-auto mr-2"));
        $platformIcon.innerText = i.props["platform"];

        const $ratingBar = $item.appendChild(createEl("div", `
          h-[4px] group-hover:h-[16px] transition-all bg-slate-400/50 relative
          m-1 mt-1
          after:content-[' '] after:h-full after:w-[${i.rating}%] after:bg-[${i.ratingColor}] after:inline-block after:absolute after:left-0
        `));

        // Create modal content:
        const $modalItemContent = createEl("div", `p-4`);
        const $modalHeading = $modalItemContent.appendChild(createEl("h4", `text-xl`));
        const $modalParagraph = $modalItemContent.appendChild(createEl("p", ``));
        $modalHeading.innerText = i.title;
        $modalParagraph.innerText = i.description;
        $item.addEventListener("click", () => {
          $modalContent.replaceChildren($modalItemContent);
          $modalContainer.classList.toggle("hidden");
        });

        return $item;
      });
      $tier.replaceChildren(...newNodes);
    });
  }

  await loadTierList("games");

});
