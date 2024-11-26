// Buy Now Button Interaction
document.addEventListener("DOMContentLoaded", () => {
  const buyNowButton = document.querySelector(".btn");
  if (buyNowButton) {
    buyNowButton.addEventListener("click", () => {
      alert("Redirecting to PancakeSwap to purchase Meme Coin!");
    });
  }

  // FAQ Toggle Functionality
  const faqItems = document.querySelectorAll(".faq-item h3");
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      if (answer) {
        answer.style.display =
          answer.style.display === "block" ? "none" : "block";
      }
    });
  });

  // Mobile Dropdown Menu (if applicable)
  const nav = document.querySelector("nav ul");
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Menu";
  document.querySelector("header").appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    if (nav) {
      nav.style.display = nav.style.display === "block" ? "none" : "block";
    }
  });

  // Countdown Timer
  const countdown = document.querySelector("#countdown");
  const endDate = new Date("2024-12-31T23:59:59").getTime();

  if (countdown) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = endDate - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        countdown.textContent = "Sale Ended!";
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }

  // Slider for Videos
  const slides = document.querySelectorAll(".video-container iframe");
  if (slides.length > 0) {
    let currentSlide = 0;

    setInterval(() => {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    }, 3000);
  }

  // Social Media Share
  const shareButton = document.querySelector("#share-twitter");
  if (shareButton) {
    shareButton.addEventListener("click", () => {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent("Check out Meme Coin!");
      window.open(
        `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        "_blank"
      );
    });
  }

  // Dark Mode Toggle
  const toggleDarkMode = document.querySelector("#dark-mode-toggle");
  if (toggleDarkMode) {
    toggleDarkMode.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("header button");
  const navMenu = document.querySelector("header nav ul");

  toggleButton.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
      navMenu.style.flexDirection = "column"; // მობილურზე ვერტიკალური განლაგება
    }
  });
});

// Typing Effect
const text = "Welcome to Meme Coin!";
let index = 0;

function typeEffect() {
  const element = document.getElementById("typing-effect");
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// FAQ Accordion (Expand/Collapse)
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll Animation (Fade-In Effect)
const fadeInElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

fadeInElements.forEach((el) => observer.observe(el));

// Button Click Effect
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX - this.offsetLeft}px`;
    ripple.style.top = `${e.clientY - this.offsetTop}px`;
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
