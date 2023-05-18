function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img 
const img = document.querySelector("#profile img")
  // se tiver light mode, add a imagem light
  if (html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatar.png")
  } else {
  // se tiver sem o light mode, manter a imagem normal  
    img.setAttribute("src", "./assets/avatar.png")
  }
}

function profile(){
  consthtml = document. documentElement
  html.classList.profile("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")){
    img. setAttribute("alt", "./assets/avatar-light.png")
  } else {
    img.setAttribute("alt", "./assets/avatar.png")
  }

}