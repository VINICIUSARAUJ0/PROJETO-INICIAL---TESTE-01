function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-brownlight.png")
  } else {
    img.setAttribute("src", "./assets/avatar-brownblack.png")
  }
  // alert("olá, amor da minha vida! Vamos no casar o mais rápido possível?")
}
