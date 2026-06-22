function jumpToSite() {
  var select = document.getElementById("linkSelect");
  if (!select) return;
  var url = select.value;
  if (!url) return;
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("bgMusic");
  var btn = document.getElementById("bgmToggle");
  if (!audio) return;

  audio.volume = 0.35;

  if (!btn) return;

  var playing = false;

  btn.addEventListener("click", function () {
    if (playing) {
      audio.pause();
      btn.textContent = "▶";
      playing = false;
    } else {
      audio.play().catch(function () {});
      btn.textContent = "❚❚";
      playing = true;
    }
  });
});
