<script setup>
    import { ref } from 'vue'

    // Dynamic Greeting Message
    const greeting = ref('')
    const hour = new Date().getHours()

    if (hour < 12) {
    greeting.value = 'Good Morning'
    } else if (hour < 18) {
    greeting.value = 'Good Afternoon'
    } else {
    greeting.value = 'Good Evening'
    }

    // Links
    function facebookBtn() {
        window.open('https://www.facebook.com/albertlaooo/');
    }

    function instagramBtn() {
        window.open('https://www.instagram.com/brtlao_/');
    }

    function linkedInBtn() {
        window.open('https://www.linkedin.com/in/albert-lao-174bb135a/');
    }

    function githubBtn() {
        window.open('https://github.com/albertlaooo');
    }

    function downloadResume() {
        alert("Not yet available.")
    }

</script>

<template>
    <section id="Home">
        <div id="home-container">
            <div id="left-section">
                <h2>Hi, {{ greeting }}</h2>
                <h1>I'm Albert Lao, a</h1>
                <h2 style="color: var(--primary-color);">Web Developer</h2>
                <p>I'm currently a 4th-year Bachelor of Science in Computer Science student with a strong passion for creating 
                    innovative and user-centered digital solutions. I enjoy bringing ideas to life and transforming concepts 
                    into functional and intuitive experiences.</p>
                <div id="button-container">
                    <button class="button1" @click="downloadResume"><i class='bx bx-cloud-download' ></i>Resume</button>
                    <a class="button2" href="#Contact"><i class='bx bx-message-rounded-dots'></i>Let's Talk</a>
                </div>
                <div id="link-btn">
                    <img src="../assets/home/facebook.webp" alt="Facebook" id="facebook-btn" @click="facebookBtn">
                    <img src="../assets/home/instagram.webp" alt="Instagram" id="instagram-btn" @click="instagramBtn">
                    <img src="../assets/home/linked-in.webp" alt="LinkedIn" id="linked-in-btn" @click="linkedInBtn">
                    <img src="../assets/home/github.webp" alt="GitHub" id="github-btn" @click="githubBtn">
                </div>
            </div>

            <div id="right-section">
                <div class="picture-wrapper">
                    <img id="picture" alt="picture" src="../assets/home/picture.webp">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #home-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100vh;
        min-height: 750px;
        width: 100vw;
        padding-left: 8.5%;
        padding-right: 8.5%;
        background-color: var(--bg-color);
        user-select: none;
    }

    #left-section {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    #right-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;
        z-index: 0;
    }

    /* PICTURE */
    .picture-wrapper {
        display: flex;
        animation: breathingGlow 5s ease-in-out infinite;
    }

    #picture {
        display: block;
        width: clamp(400px, 30vw, 650px);
        height: auto;
        transform: scale(1);
        transition: transform 0.5s ease-in-out, filter 0.3s ease-in-out;
    }

    #picture:hover {
        transform: scale(1.05);
        filter: drop-shadow(0 0 6px var(--primary-color));
    }

    #picture:active {
        transform: scale(1.1);
        transition: transform 0.15s ease;
        filter: drop-shadow(0 0 6px var(--primary-color));
    }

    @keyframes breathingGlow {
    0%, 100% {
        filter: drop-shadow(0 0 5px var(--primary-color));
    }
    50% {
        filter: drop-shadow(0 0 10px var(--primary-color));
    }
    }

    h1 {
        line-height: clamp(6.4rem, 7vw, 7rem);
    }

    h2 {
        line-height: 0;
    }

    p {
        width:clamp(450px, 28vw, 550px);
        margin-top: 35px;
        margin-bottom: 25px;
    }

    #button-container {
        display: flex; 
        gap: 20px;
    }

    #link-btn {
        position: absolute;
        bottom: 20px;
        display: flex; 
        gap: 8px; 
        width: auto;
    }

    #facebook-btn, #instagram-btn, #linked-in-btn, #github-btn {
        transition: ease-in-out 0.2s;
        width: 55px;
        height: 55px;
    }

    #facebook-btn:hover, #instagram-btn:hover, #linked-in-btn:hover, #github-btn:hover {
        transition: ease-in-out 0.2s;
        filter: drop-shadow(0 0 15px var(--primary-color));
    }

/*///////////////////////////////////////////////////////// 
///////////////////🔁 Mobile Layout //////////////////////
////////////////////////////////////////////////////////*/
    @media (max-width: 980px) {
        #home-container {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            height: 100%;
            align-items: center;
            padding-top: 80px;
            min-height: 0px;
        }

        #left-section {
            order: 2;
            min-width: 0;
            width: 100%;
        }

        #right-section {
            order: 1;
            margin-left: 0;
            margin-top: 25px;
            margin-bottom: 35px;
            min-width: 0;
            padding: 0;
        }

        .picture-wrapper { 
            justify-content: center;
            
        }

        #picture {
            width: clamp(250px, 35vw, 35vw);
        }

        h1 {
            font-size: clamp(2.5rem, 5.2vw, 5.2rem);
            line-height: clamp(5.5rem, 10vw, 10rem);
            white-space: nowrap;
        }

        h2 {
            font-size: clamp(1.6rem, 3.2vw, 3.2rem);
        }

        p {
            font-size: clamp(0.90rem, 1.6vw, 1.6rem);
            width: 100%;
            max-width: 650px;
            min-width: 0;
            align-self: center;
        }

        #button-container {
            justify-content: center;
            margin-bottom: 85px;
        }

        #link-btn {
            position:absolute;
            display: flex; 
            left: 50%;
            right: 50%;
            bottom: 0%;
            gap: 10px;
            justify-content: center;
            margin-top: 50px;
        }
    }

</style>