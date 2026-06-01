const dailyButton = document.getElementById("daily");
const weeklyButton = document.getElementById("weekly");
const monthlyButton = document.getElementById("monthly");
const results = document.getElementById("results");

const data = await obtainData();

async function obtainData() {
  try {
    const response = await fetch("./src/data.json");

    if (!response.ok) {
      throw new Error(`Error : Error while trying to get data`);
    }
    return await response.json();
  } catch (error) {
    console.error("error:", error);
    return null;
  }
}

data.forEach((category) => {
    const categoryTitle = category.title.toLowerCase().replaceAll(" ", "-");
    const categoryWeekly = category.timeframes.weekly;
    results.innerHTML += `<article class="activity bg-${categoryTitle} w-70 h-35 rounded-xl relative overflow-hidden flex flex-col justify-end gap-5">
          <img class="w-15 absolute -top-1 right-3" src="./src/assets/images/icon-${categoryTitle}.svg" alt="work icon">
          <div class="activity__data absolute -bottom-1  w-full h-27 flex flex-col gap-2 p-4 rounded-xl bg-navy-900 z-2 hover:bg-purple-500">
            <div class="labels flex justify-between items-center text-white">
              <p class="capitalize">${categoryTitle}</p>
              <img class="w-5 h-1" src="./src/assets/images/icon-ellipsis.svg" alt="Ellipsis icon">
            </div>
            <div class="data flex justify-between items-center text-white">
              <p class="text-3xl font-extralight">${categoryWeekly.current}hrs</p>
              <p class="text-xs text-navy-200">Last Month - ${categoryWeekly.previous}hrs</p>
            </div>
          </div>
        </article>`;
  });

dailyButton.addEventListener("click", () => {
  results.innerHTML = "";
  data.forEach((category) => {
    const categoryTitle = category.title.toLowerCase().replaceAll(" ", "-");
    const categoryDaily = category.timeframes.daily;
    results.innerHTML += `<article class="activity bg-${categoryTitle} w-70 h-35 rounded-xl relative overflow-hidden flex flex-col justify-end gap-5">
          <img class="w-15 absolute -top-2 right-3" src="./src/assets/images/icon-${categoryTitle}.svg" alt="work icon">
          <div class="activity__data absolute -bottom-1  w-full h-27 flex flex-col gap-2 p-4 rounded-xl bg-navy-900 z-2 hover:bg-purple-500">
            <div class="labels flex justify-between items-center text-white">
              <p class="capitalize">${categoryTitle}</p>
              <img class="w-5 h-1" src="./src/assets/images/icon-ellipsis.svg" alt="Ellipsis icon">
            </div>
            <div class="data flex justify-between items-center text-white">
              <p class="text-3xl font-extralight">${categoryDaily.current}hrs</p>
              <p class="text-xs text-navy-200">Last Day - ${categoryDaily.previous}hrs</p>
            </div>
          </div>
        </article>`;
  });
});

weeklyButton.addEventListener("click", () => {
  results.innerHTML = "";
  data.forEach((category) => {
    const categoryTitle = category.title.toLowerCase().replaceAll(" ", "-");
    const categoryWeekly = category.timeframes.weekly;
    results.innerHTML += `<article class="activity bg-${categoryTitle} w-70 h-35 rounded-xl relative overflow-hidden flex flex-col justify-end gap-5">
          <img class="w-15 absolute -top-2 right-3" src="./src/assets/images/icon-${categoryTitle}.svg" alt="work icon">
          <div class="activity__data absolute -bottom-1  w-full h-27 flex flex-col gap-2 p-4 rounded-xl bg-navy-900 z-2 hover:bg-purple-500">
            <div class="labels flex justify-between items-center text-white">
              <p class="capitalize">${categoryTitle}</p>
              <img class="w-5 h-1" src="./src/assets/images/icon-ellipsis.svg" alt="Ellipsis icon">
            </div>
            <div class="data flex justify-between items-center text-white">
              <p class="text-3xl font-extralight">${categoryWeekly.current}hrs</p>
              <p class="text-xs text-navy-200">Last Month - ${categoryWeekly.previous}hrs</p>
            </div>
          </div>
        </article>`;
  });
});

monthlyButton.addEventListener("click", () => {
  results.innerHTML = "";
  data.forEach((category) => {
    const categoryTitle = category.title.toLowerCase().replaceAll(" ", "-");
    const categoryMonthly = category.timeframes.monthly;
    results.innerHTML += `<article class="activity bg-${categoryTitle} w-70 h-35 rounded-xl relative overflow-hidden flex flex-col justify-end gap-5">
          <img class="w-15 absolute -top-2 right-3" src="./src/assets/images/icon-${categoryTitle}.svg" alt="work icon">
          <div class="activity__data absolute -bottom-1  w-full h-27 flex flex-col gap-2 p-4 rounded-xl bg-navy-900 z-2 hover:bg-purple-500">
            <div class="labels flex justify-between items-center text-white">
              <p class="capitalize">${categoryTitle}</p>
              <img class="w-5 h-1" src="./src/assets/images/icon-ellipsis.svg" alt="Ellipsis icon">
            </div>
            <div class="data flex justify-between items-center text-white">
              <p class="text-3xl font-extralight">${categoryMonthly.current}hrs</p>
              <p class="text-xs text-navy-200">Last Week - ${categoryMonthly.previous}hrs</p>
            </div>
          </div>
        </article>`;
  });
});
