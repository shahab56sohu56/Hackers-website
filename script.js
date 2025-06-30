// Typewriter Text
const words = ["Code.", "Hack.", "Repeat."];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  let loopTyping = function() {
    if (word.length > 0) {
      document.getElementById("typewriter").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  let loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById("typewriter").innerHTML = word.join("");
    } else {
      i = (i + 1) % words.length;
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 100);
  };
  setTimeout(loopDeleting, 1000);
}

typingEffect();

// Matrix Code Rain
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "#00ffb3";
  ctx.font = fontSize + "px monospace";
  
  drops.forEach((y, index) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = index * fontSize;
    ctx.fillText(text, x, y * fontSize);
    
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[index] = 0;
    }
    drops[index]++;
  });
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

// Reveal About Section on Scroll
const aboutText = document.getElementById("aboutText");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutText.classList.add("visible");
        observer.unobserve(aboutText);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(aboutText);

// Reveal Skills on Scroll
const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

skillCards.forEach(card => {
  skillObserver.observe(card);
});


// Reveal Projects on Scroll
const projects = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        projectObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

projects.forEach(p => projectObserver.observe(p));

// 🔥 TERMINAL TYPE SIMULATION
const typedText = document.getElementById("typedText");
const terminalOutput = document.getElementById("terminalOutput");

const terminalLines = [
  "whoami",
  "root",
  "ping -c 3 192.168.0.1",
  "64 bytes from 192.168.0.1: icmp_seq=1 ttl=64 time=0.034 ms",
  "64 bytes from 192.168.0.1: icmp_seq=2 ttl=64 time=0.029 ms",
  "64 bytes from 192.168.0.1: icmp_seq=3 ttl=64 time=0.031 ms",
  "nmap -sS -T4 -p- 192.168.0.1",
  "PORT     STATE SERVICE",
  "22/tcp   open  ssh",
  "80/tcp   open  http",
  "443/tcp  open  https",
  "./exploit.sh --target 192.168.0.1",
  "[+] Exploit Success: Gained shell access as root",
  "exit",
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex >= terminalLines.length) return;
  
  const currentLine = terminalLines[lineIndex];
  typedText.textContent += currentLine.charAt(charIndex);
  charIndex++;
  
  if (charIndex < currentLine.length) {
    setTimeout(typeLine, 50);
  } else {
    const newLine = document.createElement("p");
    newLine.className = "line";
    newLine.innerHTML = `$ ${typedText.textContent}`;
    terminalOutput.insertBefore(newLine, typedText.parentElement);
    typedText.textContent = "";
    charIndex = 0;
    lineIndex++;
    setTimeout(typeLine, 800);
  }
}

// Start typing after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeLine, 1000);
});

// 🧪 Animate Testimonials on Scroll
const testimonialCards = document.querySelectorAll('.testimonial-card');

const showTestimonials = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      showTestimonials.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

testimonialCards.forEach(card => showTestimonials.observe(card));

// ✅ Newsletter Signup Handler
const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  
  if (!email || !email.includes("@")) {
    message.textContent = "🚫 Invalid Email. Please use a secure address.";
    message.style.color = "#ff4b4b";
  } else {
    message.textContent = "✅ Access Granted. You are now part of the underground network.";
    message.style.color = "#00ffaa";
    emailInput.value = "";
  }
});


// Optional: Simulated terminal effect (typing)
const commands = document.querySelectorAll(".command");
let delay = 0;

commands.forEach((cmd, index) => {
  cmd.style.opacity = 0;
  setTimeout(() => {
    cmd.style.opacity = 1;
  }, delay);
  delay += 500;
});


// ✅ TOGGLE MENU FOR MOBILE
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


// ✅ SCROLL ACTIVE LINK HIGHLIGHT
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// 🔼 SCROLL TO TOP BUTTON LOGIC
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});