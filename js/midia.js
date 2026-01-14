// ========== 1. LOGOS ==========

// Logo principal
document.getElementById('image-logo').innerHTML = `
  <img src="./img/Design sem nome.png" alt="Minha Imagem">
`;

// Logo de parceiros
document.getElementById('text-image').innerHTML = `
  <img src="./img/partner-logos-stacked.webp" alt="Parceiros">
`;

// ========== 2. BACKGROUND VÍDEO ==========

const background = document.getElementById('background');

const video = document.createElement('video');
video.src = './video/Tomorrowland Brasil 2023 l Official Aftermovie(720P_HD).mp4';
video.autoplay = true;
video.muted = true;
video.loop = true;
video.playsInline = true;

background.appendChild(video);

