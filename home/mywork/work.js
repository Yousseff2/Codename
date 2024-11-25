function resizeIframe() {
  const iframe = document.getElementById("iframe");
  iframe.style.height =
    iframe.contentWindow.document.documentElement.scrollHeight + "px";
}
window.addEventListener("load", resizeIframe);
window.addEventListener("resize", resizeIframe);
