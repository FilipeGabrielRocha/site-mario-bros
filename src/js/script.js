const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
    video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk")
})

const botaoFecharModal = document.querySelector(".fechar-modal")

const video = document.getElementById("video")

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
})