function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-brownlight.png")
  } else {
    img.setAttribute("src", "./assets/avatar-brownblack.png")
  }
  // if (html.classList.contais("light")){
  //   img.setAttribute("alt", "minha neguinha, deitada de óculos, mandando um carinhoso e gostoso beijo!")}
  // else{
  //   img.setAttribute("alt", "minha neguinha com soninho, no sofá de óculos e sem camisa!")
}
