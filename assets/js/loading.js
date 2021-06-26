var sayfa;

function Yukleme() {
  sayfa = setTimeout(showPage, 800);
}

function showPage() {
  document.getElementById("yukleniyor").style.display = "none";
  document.getElementById("icerikler").style.display = "contents";
}