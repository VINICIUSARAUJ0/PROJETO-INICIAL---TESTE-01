function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-brownlight.png")
  } else {
    img.setAttribute("src", "./assets/avatar-brownblack.png")
  }

  const image = document.querySelector("#profile img")
  if (html.classList.contais("light")) {
    image.setAttribute(
      "alt",
      "Williams Almeida, na de óculos de sol, camisa de botão clara, em ambiente praiano."
    )
  } else {
    image.setAttribute(
      "alt",
      "Williams Almeida, sentado, com airpods e camisa preta."
    )
  }
}
