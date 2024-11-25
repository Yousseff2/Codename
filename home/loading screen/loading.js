import { pointsInPath } from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.0";

const stage = document.querySelector("svg");
const path = document.querySelector("path");
const pts = pointsInPath(path, 150);

pts.forEach((pt, i) => {
  const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  stage.appendChild(r);
  gsap.set(r, {
    attr: {
      x: pt.x + 9,
      y: pt.y + 9,
      width: 10,
      height: 10,
      fill: "#fff",
      stroke: "#111",
      "stroke-width": 0.3,
      rx: 1.5,
    },
  });
});

const tl = gsap
  .timeline()
  .to("rect", {
    duration: 17,
    transformOrigin: "50%",
    rotate: -360,
    ease: "none",
    repeat: -1,
  })
  .to(
    "rect",
    {
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      x: (i) => noise.perlin2(pts[i].x / 33, pts[i].y / 33) * 9,
      y: (i) => noise.perlin2(pts[i].x / 33, pts[i].y / 33) * 9,
      repeatRefresh: true,
      onRepeat: () => noise.seed(Math.random()),
    },
    0
  );

// click to toggle play/pause
window.onpointerup = () =>
  gsap.to(tl, {
    duration: 1,
    ease: "sine.inOut",
    timeScale: tl.isActive() ? 0 : 1,
  });

// Show main content after 2.5 seconds
setTimeout(() => {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("main-content").style.display = "flex";
}, 2500);
