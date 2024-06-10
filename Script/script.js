let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let slider = document.querySelector('#slider');
let track_image = document.querySelector('#track_image');

let timer;
let autoplay = 1;
let index_no = 0;
let playing_song = false;   
let track = document.createElement('audio');
let All_song = [
    {
        name : "Aval Mugam ",
        path : "music/song1.mp3", 
        img :  "img/img1.jpg",
        artist : '"Pradeep Kumar"'
    },
    {
        name : "Oru Kal Oru Kannadi",
        path : "music/song2.mp3",
        img : "img/img2.jpg",
        artist : '"U1"'
    },
    {
        name : "Ponni Nadhi Pakkanum",
        path : "music/song3.mp3",
        img : "img/img3.jpg",
        artist : '"A.R.Rahuman"'
    }
    ];
    function load_track(index_no){
        clearInterval(timer);
        reset_slider();

        track.src = All_song[index_no].path;
        title.innerHTML = All_song[index_no].name;
        track_image.src = All_song[index_no].img;
        artist.innerHTML = All_song[index_no].artist;

       // timer = setInterval(slider ,1000);
    }            
    load_track(index_no);
    
    function justplay(){
        if(playing_song == false){
             track.play();
             playing_song = true;
             play.innerHTML ='<i class="fa fa-pause"></i>'
        }
        else{
             track.pause();
             playing_song = false;
             play.innerHTML ='<i class="fa fa-play"></i>'
        }
    }
    function reset_slider(){
        slider.value = 0;
    }    
    function nextsong(){
        playing_song = false
        if(index_no< All_song.length -1){
            index_no += 1;
            load_track(index_no);
            justplay();
        }
        else{
            index_no = 0;
            load_track(index_no);
            justplay();
        }
    }
    function previoussong(){
        playing_song = false
        if(index_no > 0){
            index_no -= 1;
            load_track(index_no);
            justplay();
        }
        else{
            index_no = All_song.length;
            load_track(index_no);
            justplay();
        }
    }
    function change_duration(){
        slider_postion = track.duration * (slider.value / 100);
        track.currentTime = slider_postion;
    }
