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

function capNhatThoiGian() {
  const ngayGio = new Date();
  const dinhDang = ngayGio.toLocaleString("vi-VN"); // Định dạng theo tiếng Việt

  document.getElementById("thoigian").innerText = dinhDang;
}

// Cập nhật mỗi giây
setInterval(capNhatThoiGian, 1000);
capNhatThoiGian(); // Gọi lần đầu để hiển thị ngay
