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

results.innerHTML = "";
data.forEach((category) => {
    renderActivities(category, 'weekly', 'Week');
});


dailyButton.addEventListener("click", () => {
  results.innerHTML = "";
  const timeframe = 'daily';
  const timeUnit = 'Day';
  data.forEach((category) => {
   return renderActivities(category, timeframe, timeUnit)
  });
});

weeklyButton.addEventListener("click", () => {
  results.innerHTML = "";
  const timeframe = 'weekly';
  const timeUnit = 'Week';
  data.forEach((category) => {
    renderActivities(category, timeframe, timeUnit)
  });
});

monthlyButton.addEventListener("click", () => {
  results.innerHTML = "";
  const timeframe = 'monthly';
  const timeUnit = 'Month';
  data.forEach((category) => {
    renderActivities(category, timeframe, timeUnit);
  });
});

function renderActivities(category, timeframe, timeUnit){
    const categoryTitle = category.title.toLowerCase().replaceAll(" ", "-");
    const categoryTimeframe = category.timeframes[timeframe];
    results.innerHTML += `<article class="activity bg-${categoryTitle} w-70 h-35 rounded-xl relative overflow-hidden flex flex-col justify-end gap-5 xl:w-60 xl:h-55">
          <img class="w-15 absolute -top-1 right-3" src="./src/assets/images/icon-${categoryTitle}.svg" alt="work icon">
          <div class="activity__data absolute -bottom-1  w-full h-27 flex flex-col gap-2 p-4 rounded-xl bg-navy-900 z-2 hover:filter hover:brightness-180 hover:transition hover:transition-all hover:duration-500 xl:h-45 xl:p-5">
            <div class="labels flex justify-between items-center text-white">
              <p class="capitalize">${categoryTitle}</p>
              <img class="w-5 h-1" src="./src/assets/images/icon-ellipsis.svg" alt="Ellipsis icon">
            </div>
            <div class="data flex justify-between items-center text-white xl:flex-col xl:items-start xl:gap-5">
              <p class="text-3xl font-extralight xl:text-5xl xl:pt-3">${categoryTimeframe.current}hrs</p>
              <p class="text-xs text-navy-200">Last ${timeUnit} - ${categoryTimeframe.previous}hrs</p>
            </div>
          </div>
        </article>`;
}
