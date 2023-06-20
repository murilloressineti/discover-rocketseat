function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tg imagem 
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')){
    //se tiver light mode, adicionar imagem light
    img.setAttribute('src', 'assets/avatar-light.png')
    img.setAttribute('alt','Foto de Mayk Brito, usando jaqueta preta, sem barba e óculos escuros. Fundo em gradiente roxo e azul')
  }else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', 'assets/avatar.png')
    img.setAttribute('alt','Foto de Mayk Brito, usando camisa preta, barba e óculos. Fundo Amarelo')
  }
}