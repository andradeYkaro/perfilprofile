/*function toggleMode(){
   const html = document.documentElement
    html.classList.toggle ('light');

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")){
        img.setAttribute('src', './assests/yavatarL.png')
    } else {
        img.setAttribute('src', './assets/yavatar.png')
    }

}*/

function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/avatar-light.png")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/avatar.png")
    }
  }