const toggleButton = document.querySelector(".toggle-button");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
function sendEmail() {
    let email = document.getElementById("email-input").value;

    // Validasi email
    if (!email || !email.includes("@") || !email.includes(".")) {
      alert("Masukkan email yang valid!");
      return;
    }

    // Format mailto
    let subject = encodeURIComponent("Gabung Shopping Community");
    let body = encodeURIComponent(
      `Halo, saya ingin bergabung dengan komunitas shopping. Berikut email saya: ${email}`
    );

    window.location.href = `mailto:imammalik927@gmail.com?subject=${subject}&body=${body}`;
  }
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const sponsors = document.querySelectorAll(".sponsor");

  function scrollAnimation() {
    sponsors.forEach((sponsor) => {
      const position = sponsor.getBoundingClientRect().top;
      const screenHeight = window.innerHeight - 100;

      if (position < screenHeight) {
        sponsor.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", scrollAnimation);
  scrollAnimation(); // Jalankan saat halaman dimuat
});
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".section-brand h1, .brand-container img"
  );

  function scrollAnimation() {
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight - 100;

      if (position < screenHeight) {
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", scrollAnimation);
  scrollAnimation(); // Jalankan saat halaman dimuat
});
document.addEventListener("DOMContentLoaded", function () {
  const paydaySection = document.querySelector(".payday");
  const textPayday = document.querySelector(".text-payday");
  const paydayImage = document.querySelector(".payday img");

  function scrollAnimation() {
    const position = paydaySection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight - 100;

    if (position < screenHeight) {
      paydaySection.classList.add("show");
      textPayday.classList.add("show");
      paydayImage.classList.add("show");
    }
  }

  // Tambahkan event listener scroll
  window.addEventListener("scroll", scrollAnimation);
  scrollAnimation(); // Jalankan saat halaman dimuat
});
document.addEventListener("DOMContentLoaded", function () {
  const sectionFavorite = document.querySelector(".section-favorite");
  const favoriteTitle = document.querySelector(".section-favorite h1");
  const favoriteImages = document.querySelectorAll(
    ".favorite-container img"
  );

  function scrollAnimation() {
    const position = sectionFavorite.getBoundingClientRect().top;
    const screenHeight = window.innerHeight - 100;

    if (position < screenHeight) {
      sectionFavorite.classList.add("show");
      favoriteTitle.classList.add("show");
      favoriteImages.forEach((img) => img.classList.add("show"));
    }
  }

  // Tambahkan event listener scroll
  window.addEventListener("scroll", scrollAnimation);
  scrollAnimation(); // Jalankan saat halaman dimuat
});