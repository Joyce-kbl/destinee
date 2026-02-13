// CONFIGURATION DES MÉDIAS
const medias = [
    {type: 'img', url: 'img01.JPG'},
    {type: 'img', url: 'img02.JPG'},
    {type: 'img', url: 'img03.JPG'},
    {type: 'img', url: 'img1.JPG'}, 
     {type: 'video', url: 'vid1.MP4'},
    {type: 'img', url: 'img2.JPG'},
    {type: 'img', url: 'img3.JPG'},
    {type: 'img', url: 'img4.JPG'},
    {type: 'video', url: 'vid3.MP4'},
      {type: 'video', url: 'vid4.MP4'},
    {type: 'img', url: 'img6.JPG'},
     {type: 'img', url: 'img5.JPG'},
    {type: 'img', url: 'img8.JPG'},
    {type: 'img', url: 'img9.JPG'},
    {type: 'img', url: 'im7.JPG'},
     {type: 'img', url: 'img10.JPG'},
      {type: 'img', url: 'img11.JPG'},
     {type: 'img', url: 'img12.JPG'},
     {type: 'img', url: 'img13.JPG'},
     {type: 'img', url: 'img14.JPG'},
     {type: 'video', url: 'vid5.MP4'},
    {type: 'img', url: 'img15.JPG'},
    {type: 'img', url: 'img16.JPG'},
     {type: 'video', url: 'vid7.mp4'},
    {type: 'img', url: 'img17.jpeg'},
    {type: 'video', url: 'img18.MP4'},
    {type: 'img', url: 'img19.jpeg'},
    {type: 'img', url: 'im17.JPG'},
    {type: 'img', url: 'img20.jpeg'},
    {type: 'video', url: 'vid8.mp4'},
   
];

let currentIndex = 0;

// 1. VÉRIFICATION ACCÈS
function verifierAcces() {
    const inputField = document.getElementById('passwordInput');
    if (!inputField) return;
    
    const reponse = inputField.value.toLowerCase().trim();
    if(reponse === "primla") {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('welcome-popup').style.display = 'flex';
    } else {
        alert("Oups... réfléchis encore avec ton cœur ❤️");
    }
}

// 2. FERMER L'ACCUEIL ET LANCER LE CADEAU
function fermerAccueil() {
    document.getElementById('welcome-popup').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    lancerDiaporama();
}

// 3. DIAPORAMA AUTOMATIQUE
function lancerDiaporama() {
    const container = document.getElementById('media-container');
    if (!container || medias.length === 0) return;
    
    const item = medias[currentIndex];
    container.innerHTML = "";

    if(item.type === 'img') {
        const img = document.createElement('img');
        img.src = item.url;
        img.className = "fade-media";
        container.appendChild(img);
        setTimeout(prochainMedia, 4000); 
    } else {
        const vid = document.createElement('video');
        vid.src = item.url;
        vid.autoplay = true;
        vid.muted = true; 
        vid.playsInline = true; // Pour iPhone
        vid.setAttribute('playsinline', ''); // Double sécurité iPhone
        vid.className = "fade-media";
        vid.onended = prochainMedia;
        container.appendChild(vid);
        
        // Sécurité si la vidéo ne se lance pas
        vid.play().catch(e => {
            console.log("Lecture auto bloquée, passage à la suite");
            setTimeout(prochainMedia, 3000);
        });
    }
}

function prochainMedia() {
    currentIndex = (currentIndex + 1) % medias.length;
    lancerDiaporama();
}

// 4. MENU
function openNav() { document.getElementById("mySidenav").style.width = "250px"; }
function closeNav() { document.getElementById("mySidenav").style.width = "0"; }

// 5. APPARITION DES PHRASES AU SCROLL
window.addEventListener('scroll', () => {
    const texts = document.querySelectorAll('.reveal-text');
    const triggerBottom = window.innerHeight / 5 * 4;

    texts.forEach(text => {
        const textTop = text.getBoundingClientRect().top;
        if(textTop < triggerBottom) {
            text.classList.add('visible');
        }
    });
});


