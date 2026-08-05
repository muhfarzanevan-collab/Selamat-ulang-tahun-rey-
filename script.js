// ===========================
// HALAMAN
// ===========================

const pages = document.querySelectorAll(".page");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const opening = document.getElementById("opening");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const reasons = document.getElementById("reasons");
const quiz = document.getElementById("quiz");
const ending = document.getElementById("ending");
const surprise=document.getElementById("surprise");

const loadingText=document.getElementById("loadingText");

const loadingPercent=document.getElementById("loadingPercent");

const giftFinal=document.getElementById("giftFinal");

const openFinalGift=document.getElementById("openFinalGift");
const magicGift=document.getElementById("magicGift");
const finalTitle = document.getElementById("finalTitle");
const finalText = document.getElementById("finalText");

// ===========================
// BUTTON
// ===========================

const giftBox = document.getElementById("giftBox");
const toGallery = document.getElementById("toGallery");
const toReasons = document.getElementById("toReasons");
const toQuiz = document.getElementById("toQuiz");

const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

const giftContent = document.getElementById("giftContent");
const toEnding = document.getElementById("toEnding");
const backToLetter = document.getElementById("backToLetter");
const backToGallery = document.getElementById("backToGallery");
const backToReasons = document.getElementById("backToReasons");
const backToQuiz = document.getElementById("backToQuiz");
const backToSurprise = document.getElementById("backToSurprise");
// ===========================
// GALLERY
// ===========================

const galleryImage = document.getElementById("galleryImage");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.querySelectorAll(".dot");
const memoryModal = document.getElementById("memoryModal");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const closeModal = document.getElementById("closeModal");

const photos = [
    "images/foto1.jpeg",
    "images/foto2.jpeg",
    "images/foto3.jpeg",
    "images/foto4.jpeg"
];

const memories = [

    {
        title: "PHOTOBOOTH",
        text: "REY MASIH INGET? ini pertama kali kita photobooth reeeey. di sini aku bener bener seneng banget bisa foto bareng km dan di post di sg hihihihihihi :) (BTW KM KENAPA CAKEP BANGET)"
    },

    {
        title: "waktu berat",
        text: "di sini rey inget ga? aku yang masih selalu mempermasalahkan tipe km dan agas :). hihihihihi, aku minta maaf ya reeey 😔"
    },

    {
        title: "tersedih ☹️",
        text: "rey...aku seharian nangis liat sg km yang ini, karena aku takut banget kalo kita beneran selesai waktu itu"
    },

    {
        title: "FAVORIT",
        text: "INI FOTO FAVORIT AKU BANGEETTTT, KARENA di sini rey beneran sebahagia ituuu, aku seneng banget liat rey senenggg (nanti kalo aku udah sukses aku beliin km tiap minggu yaaa 😁)"
    }

];

let currentPhoto = 0;

// ===========================
// SURAT
// ===========================

const typing = document.getElementById("typing");

const text = `

HAI REEEEY,

selamat ulang tahun yaaa.

cie yang sekarang udah 20 tahun :).

semoga di ulang tahun rey yang ke-20 ini rey diberi kesehatan (INI PALING PENTING KARENA AKU GA TEGA KALO LIAT REY SAKIT ☹️), semoga rey diberi kelancaran nanti ampe lulus dan kerja jugaa, semoga rey nanti makin kuat menghadapi semester selanjutnyaa, semoga rey kecantol aku ampe aku balik lagi nanti (aamiin). 

aku beneran bersyukur banget bisa kenal sama kamu.

semoga kita masih bisa bikin banyak banyak kenangan yaaa.

oiya, km tau ga kenapa aku milih lagu ini? karena aku suka judul lagu ini, dia kayak ngedeskripsiin cara aku suka km: I Love You Just The Way You Are 🤍


`;

let index = 0;

// ===========================
// ALASAN
// ===========================

const reasonList = document.getElementById("reasonList");

const reasonsText = [
    "1. rey senyum 🙂",
    "2. REY KETAWA 🤣",
    "3. rey clingy 😍",
    "4. rey curhat ke aku 🤬",
    "5. rey ngehibur aku kalo aku lagi sedih 😔",
    "6. rey selalu jadi diri sendiri kalo sama aku 😃",
    "7. rey nenangin aku kalo aku lagi ada masalah 😁",
    "8. REY REKOMENDASIIN MAKANAN 😋",
    "9. rey apresiasi aku 😄",
    "10. INI KALO AKU LANJUTIN GA SELESAI SELESAI NANTI, POKOKNYA AKU SUKA KALO ITU KAMUUU "
];

// ===========================
// FUNCTION
// ===========================

function showPage(page){

pages.forEach(p=>{

p.classList.remove("active");

});

page.classList.add("active");

page.animate([

{

opacity:0,

transform:"translateY(50px) scale(.95)"

},

{

opacity:1,

transform:"translateY(0) scale(1)"

}

],{

duration:650,

easing:"ease"

});

}

function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,35);

    }

}

function showReasons(){

    reasonList.innerHTML="";

    reasonsText.forEach((item,i)=>{

        setTimeout(()=>{

            const li=document.createElement("li");

            li.innerHTML=item;

            reasonList.appendChild(li);

        },i*600);

    });

}

function updateGallery(){

    galleryImage.style.opacity = "0";
    galleryImage.style.transform = "scale(0.95)";

    setTimeout(()=>{

        galleryImage.src = photos[currentPhoto];

        galleryImage.style.opacity = "1";
        galleryImage.style.transform = "scale(1)";

    },200);

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[currentPhoto].classList.add("active");

}

galleryImage.onclick = () => {

memoryModal.style.display = "flex";

memoryTitle.innerHTML = memories[currentPhoto].title;
memoryText.innerHTML = memories[currentPhoto].text;

}

closeModal.onclick = () => {

memoryModal.style.display = "none";

}

window.onclick = (e)=>{

if(e.target==memoryModal){

memoryModal.style.display="none";

}

}

// ===========================
// EVENT
// ===========================

giftBox.onclick = () => {

    const music = document.getElementById("bgMusic");

    music.volume = 0.3;

    music.play();
    musicBtn.innerHTML = "⏸️ Pause";

    giftBox.style.transform="scale(1.4)";
    giftBox.style.opacity="0"

    setTimeout(()=>{

        showPage(letter);

        typing.innerHTML="";

        index=0;

        typeWriter();

    },700);

}

toGallery.onclick=()=>{

    showPage(gallery);

}



toReasons.onclick=()=>{

    showPage(reasons);

    showReasons();

}

toQuiz.onclick=()=>{

    showPage(quiz);

}

correct.onclick=()=>{

    playSurprise();

}

wrong.addEventListener("mouseenter",()=>{

    wrong.style.position="absolute";

    wrong.style.left=Math.random()*70+"%";

    wrong.style.top=Math.random()*70+"%";

});

// ===========================
// BACK BUTTON
// ===========================

backToLetter.onclick = () => {

    showPage(letter);

};

backToGallery.onclick = () => {

    showPage(gallery);

};

backToReasons.onclick = () => {

    showPage(reasons);

};

backToQuiz.onclick = () => {

    showPage(quiz);

};

backToSurprise.onclick = () => {

    showPage(surprise);

};

next.onclick=()=>{

    currentPhoto++;

    if(currentPhoto>=photos.length){

        currentPhoto=0;

    }

    updateGallery();

}

prev.onclick=()=>{

    currentPhoto--;

    if(currentPhoto<0){

        currentPhoto=photos.length-1;

    }

    updateGallery();

}

updateGallery();

function playEnding(){

    showPage(ending);

    document.getElementById("lastLine").style.opacity = "0";

    setTimeout(()=>{

        document.getElementById("lastLine").style.opacity = "1";

    },5000);

}

    setTimeout(()=>{

        finalText.classList.add("show");

        finalText.innerHTML=
        "Semoga semua hal baik selalu menemukanmu.<br><br>";

    },2500);

    setTimeout(()=>{

        finalText.innerHTML+=
        "terima kasih ya rey, karena rey udah bikin hari hari aku GA BOSEEEEN.<br><br>";

    },4500);

    setTimeout(()=>{

        finalText.innerHTML+=
        "Aku berharap kita bisa membuat lebih banyak kenangan bersama.<br><br>";

    },6500);

    setTimeout(()=>{

        finalText.innerHTML+=
        "<h2>I Love You 🤍</h2>";

    },9000);

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "⭐";

    heart.style.left = Math.random()*100+"vw";

    heart.style.animationDuration =
    Math.random()*3+3+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart, 400);

function playSurprise(){

    showPage(surprise);

    let persen=0;

    loadingText.innerHTML="Loading...";

    loadingPercent.innerHTML="0%";

    giftFinal.style.display="none";

    const interval=setInterval(()=>{

        persen++;

        loadingPercent.innerHTML=persen+"%";

        if(persen>=100){

            clearInterval(interval);

            loadingText.innerHTML="KARENA";

            loadingPercent.innerHTML="REY JAWABANNYA BENEEEER :)";

            setTimeout(()=>{

                loadingText.innerHTML="aku kasih hadiah lagi buat reeey :)";

                loadingPercent.innerHTML="PENCET KADONYA !!!";

                setTimeout(()=>{

                    giftFinal.style.display="block";

                },1500);

            },2000);

        }

    },35);

}

magicGift.onclick = () => {

    magicGift.classList.add("open");

    createExplosion();

    setTimeout(() => {

        magicGift.style.display = "none";

        giftContent.style.display = "block";

    }, 800);

};

toEnding.onclick = () => {

    playEnding();

};

document.addEventListener("mousemove",(e)=>{

    document.body.style.backgroundPosition =
    `${e.clientX/50}px ${e.clientY/50}px`;

});

function createExplosion(){

    for(let i=0;i<60;i++){

        const heart=document.createElement("div");

        heart.innerHTML=Math.random()>0.5?"❤️":"✨";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="99999";

        document.body.appendChild(heart);

        const angle=Math.random()*Math.PI*2;

        const distance=120+Math.random()*250;

        const x=Math.cos(angle)*distance;

        const y=Math.sin(angle)*distance;

        heart.animate([

            {

                transform:"translate(-50%,-50%) scale(0)",

                opacity:1

            },

            {

                transform:`translate(${x}px,${y}px) scale(1.6)`,

                opacity:0

            }

        ],{

            duration:1200,

            easing:"ease-out"

        });

        setTimeout(()=>{

            heart.remove();

        },1200);

    }

}

musicBtn.onclick = () => {

    if(music.paused){

        music.play();

        musicBtn.innerHTML = "⏸️ Pause";

    }else{

        music.pause();

        musicBtn.innerHTML = "▶️ Play";

    }

};
