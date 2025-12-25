document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  document.querySelectorAll("#menu a").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  const socialLinks = document.querySelectorAll(".social-icons a");
  const urls = [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://x.com/",
    "https://www.tiktok.com/"
  ];

  socialLinks.forEach((link, i) => {
    link.addEventListener("click", e => {
      e.preventDefault();
      window.open(urls[i], "_blank");
    });
  });

  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const dateInput = document.getElementById("date");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      if (
        !nameInput.value.trim() ||
        !emailInput.value.trim() ||
        !dateInput.value ||
        !messageInput.value.trim()
      ) {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
        return;
      }

      if (!emailInput.value.includes("@")) {
        formMessage.textContent = "Please enter a valid email!";
        formMessage.style.color = "red";
        return;
      }

      formMessage.textContent = "Thank you! Your message has been sent ✅";
      formMessage.style.color = "green";
      form.reset();
    });
  }
});
