const music=new Audio('songs/o mahi.mp3');
music.play();

// now create array for changing songs detail 

const songs =[
    {
        id:1,
        songName: `O Mahi <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/1.jpeg",
    },

    {
        id:2,
        songName: `Shayam Chanda Hai Shayama Chakori <br>
        <div class="subtitle">Nanda Chhanga</div>`,
        poster:"images/2.jpeg",
    },

    {
        id:3,
        songName: `Cartoon - On & On  <br>
        <div class="subtitle">daniel levi</div>`,
        poster:"images/3.jpg",
    },

    {
        id:4,
        songName: `Warriyo - Mortals <br>
        <div class="subtitle">Mortals</div>`,
        poster:"images/4.jpg",
    },

    {
        id:5,
        songName: `Ertugurul Gazi  <br>
        <div class="subtitle">Ertugurul</div>`,
        poster:"images/5.jpg",
    },

    {
        id:6,
        songName: `Electronic Music <br>
        <div class="subtitle">Electro</div>`,
        poster:"images/6.jpg",
    },

    {
        id:7,
        songName: `Agar Tum Sath Ho <br>
        <div class="subtitle">Tamasha</div>`,
        poster:"images/7.jpg",
    },

    {
        id:8,
        songName: `Suna hai <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster:"images/8.jpg",
    },

    {
        id:9,
        songName: `Dilbar<br>
        <div class="subtitle">Satyamev jayete</div>`,
        poster:"images/9.jpg",
    },

    {
        id:10,
        songName: `Duniya <br>
        <div class="subtitle">Luka Chuppi</div>`,
        poster:"images/10.jpg",
    },

    {
        id:11,
        songName: `Lagdi Lahore Di <br>
        <div class="subtitle">Street Dancer 3D</div>`,
        poster:"images/11.jpg",
    },

    {
        id:12,
        songName: `Putt Jat da <br>
        <div class="subtitle">Putt jat da</div>`,
        poster:"images/12.jpg",
    },

    {
        id:13,
        songName: `Barishein <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:"images/13.jpg",
    },

    {
        id:14,
        songName: `Vaste<br>
        <div class="subtitle">Dhwani Bhanushali</div>`,
        poster:"images/14.jpg",
    },

    {
        id:15,
        songName: `Lut Gaye <br>
        <div class="subtitle">Jubin Natiyal</div>`,
        poster:"images/15.jpg",
    },

    {
        id:16,
        songName: `Tu Meri Zindagi He tu <br>
        <div class="subtitle">Jubin Natiyal</div>`,
        poster:"images/16.jpg",
    },

    {
        id:17,
        songName: `Batao Yaad he tumko wo JAb Dil ko Churaya tha <br>
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster:"images/17.jpg",
    },

    {
        id:18,
        songName: `Mere Dhol Judaiyan <br>
        <div class="subtitle">Ali Sethi Seha</div>`,
        poster:"images/18.jpg",
    },

    {
        id:19,
        songName: `Eh Munde Pagal Ne Saare <br>
        <div class="subtitle">Ap Dhillon, Gurinder Gill,Shinda Kahlon</div>`,
        poster:"images/19.jpg",
    },

    {
        id:20,
        songName: `Vande Matram <br>
        <div class="subtitle">Bakim Chandra Chatarjee</div>`,
        poster:"images/20.jpg",
    },

    {
        id:21,
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/21.jpg",
    }
]




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click' , () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click' , () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_art = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click' , () => {
    pop_art.scrollLeft += 230;

});

pop_art_left.addEventListener('click' , () => {
    pop_art.scrollLeft -= 230;
    
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

let index = 0;

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
   e.addEventListener('click',(el) =>{
    index = el.target.id;

    music.src = `songs/${index}.mp3`
    music.play();
    wave.classList.add('active1');
   })
});



Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});



