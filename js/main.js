const navToggle = document.querySelector(".nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("nav-open", !isOpen);
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

document.querySelectorAll("img").forEach((image) => {
  const markMissing = () => {
    const holder = image.closest("[data-placeholder]");
    if (holder) {
      holder.classList.add("is-missing");
    }
  };

  image.addEventListener("error", () => {
    markMissing();
  });

  if (image.complete && image.naturalWidth === 0) {
    markMissing();
  }
});
