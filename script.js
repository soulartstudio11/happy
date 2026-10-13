/* =====================================================
   PASSWORD
===================================================== */

const PASSWORD = "liya";

const music =
    document.getElementById("music");

let musicPlaying = false;


/* =====================================================
   PASSWORD CHECK
===================================================== */

function checkPassword() {

    const input =
        document.getElementById("password");

    const error =
        document.getElementById("wrongPassword");

    const entered =
        input.value.trim();


    if (entered === PASSWORD) {

        error.textContent = "";

        showScreen(
            "welcomeScreen"
        );


        /*
           Music starts after the
           user has interacted with
           the page.
        */

        music.play()
            .then(() => {

                musicPlaying = true;

                document
                    .getElementById(
                        "musicButton"
                    )
                    .textContent = "🔊";

            })
            .catch(() => {});

    }

    else {

        error.textContent =
            "That's not the password ❤️";

        input.value = "";

        input.focus();
    }
}


/* =====================================================
   ENTER KEY
===================================================== */

document
    .getElementById("password")
    .addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                checkPassword();

            }

        }
    );


/* =====================================================
   SCREEN SWITCH
===================================================== */

function showScreen(id) {

    const screens =
        document.querySelectorAll(
            ".screen"
        );


    screens.forEach(
        screen => {

            screen.classList.remove(
                "active"
            );

        }
    );


    const target =
        document.getElementById(id);


    if (target) {

        target.classList.add(
            "active"
        );

    }

}


/* =====================================================
   MUSIC
===================================================== */

function toggleMusic() {

    const button =
        document.getElementById(
            "musicButton"
        );


    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        button.textContent = "🎵";

    }

    else {

        music.play();

        musicPlaying = true;

        button.textContent = "🔊";

    }

}


/* =====================================================
   SPINNER
===================================================== */

let wheelRotation = 0;

let spinning = false;


/*
   IMPORTANT:

   The wheel contains MANY things.

   But the result is ALWAYS SARI.

   So only Sari needs an actual
   photo.

   Sari = images/2.jpg
*/


function spinWheel() {

    if (spinning) {

        return;

    }


    spinning = true;


    const wheel =
        document.getElementById(
            "wheel"
        );


    const button =
        document.getElementById(
            "spinButton"
        );


    const result =
        document.getElementById(
            "wheelResult"
        );


    button.disabled = true;


    result.textContent =
        "Spinning... ✨";


    /*
       Add many complete rotations.

       This makes the wheel look
       like a real long spin.
    */

    const extraSpins =
        8 * 360;


    /*
       Sari is the first section.

       We finish at a position where
       Sari reaches the pointer.
    */

    const sariPosition =
        360 - 0;


    wheelRotation +=
        extraSpins +
        sariPosition;


    wheel.style.transform =
        `rotate(${wheelRotation}deg)`;


    /*
       Wait until the animation
       completely finishes.
    */

    setTimeout(
        function() {

            result.textContent =
                "🥻 Sari ❤️";


            /*
               Small pause before
               opening the photo.
            */

            setTimeout(
                function() {

                    showScreen(
                        "sariScreen"
                    );


                    spinning = false;

                    button.disabled =
                        false;

                    result.textContent =
                        "";

                },
                900
            );

        },
        6100
    );

}


/* =====================================================
   VIDEO
===================================================== */

let currentVideo = 1;

const totalVideos = 3;


function nextVideo() {

    currentVideo++;


    if (
        currentVideo >
        totalVideos
    ) {

        currentVideo = 1;

        showScreen(
            "photosScreen"
        );

        return;

    }


    const video =
        document.getElementById(
            "memoryVideo"
        );


    video.pause();


    video.src =
        `videos/${currentVideo}.mp4`;


    video.load();


    video.play()
        .catch(() => {});

}


/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        /*
           M = music
        */

        if (
            event.key.toLowerCase() === "m"
        ) {

            toggleMusic();

        }


        /*
           Enter on password
        */

        if (
            event.key === "Enter"
        ) {

            const passwordScreen =
                document.getElementById(
                    "passwordScreen"
                );


            if (
                passwordScreen.classList
                    .contains("active")
            ) {

                checkPassword();

            }

        }

    }
);
