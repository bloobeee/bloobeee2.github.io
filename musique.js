let sliders_values = [];

let music = [];


function get_sliders_value () {

    sliders_values = [];


    let slider1 = document.getElementById("slider1").value;

    sliders_values.push(slider1);


    let volume0 = sliders_values[0];
    console.log(volume0 + "volume");
    sounds[0].volume = volume0/100;
    sounds[0].muted = false;
}



    function loadMusic (music_name) {
        let m = new Audio("C:\Users\Utilisateur\Pictures\code\site musique" + music_name + ".mp3");
        m.muted = true;
        m.play();
        m.loop = true;
    
        music.push(m)
    
    }


    function startUp () {
        loadMusic("sons");

        for (i in music) {
            sounds[i].volume = 0;
            sounds[i].muted = true;
        }
        document.getElementById("slider1").value = 0;
    }
    function toggle(n) {


        if (music[n].muted == true) {
            music[n].muted = false;
        }
    
        if (music[n].muted == false) {
            music[n].muted = true;
        }
    }
    
    window.onload = startUp();
    
    setInterval(get_sliders_value, 100);
    
    
    console.table(music);