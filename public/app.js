const TIMES = "\u00D7";
const container = document.querySelector(".container");

const update = () => {
  const { innerWidth, innerHeight } = window;

  container.textContent = `${innerWidth} ${TIMES} ${innerHeight}`;
};

addEventListener("resize", update);

update();
