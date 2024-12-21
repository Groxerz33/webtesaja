// Fitur toggle tema
const toggleTema = document.getElementById("toggle-tema");
toggleTema.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  const container = document.getElementById("container");
  container.classList.toggle("dark-mode");
});

// Fitur toggle animasi
const toggleAnimasi = document.getElementById("toggle-animasi");
toggleAnimasi.addEventListener("click", function() {
  document.body.classList.toggle("animasi");
});

// Fitur toggle musik
const toggleMusik = document.getElementById("toggle-musik");
const musik = document.getElementById("musik");
let musikStatus = false;

toggleMusik.addEventListener("click", function() {
  if (!musikStatus) {
    musik.play();
    musikStatus = true;
  } else {
    musik.pause();
    musikStatus = false;
  }
});

// Efek hover pada button
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("mouseover", function() {
    button.style.transform = "scale(1.1)";
    button.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
  });
  button.addEventListener("mouseout", function() {
    button.style.transform = "scale(1)";
    button.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  });
});

// Animasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container");
  container.style.opacity = 1;
  container.style.transform = "scale(1)";
});