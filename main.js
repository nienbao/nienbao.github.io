function loadPage(file) {
  fetch(file)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;
    })
    .catch((err) => {
      document.getElementById("main-content").innerHTML =
        "<p>Lỗi tải trang!</p>";
    });
}
// ✅ Tải sẵn home.html khi trang vừa mở
window.addEventListener("DOMContentLoaded", function () {
  loadPage("chudaibi.html");
});
