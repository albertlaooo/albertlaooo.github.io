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
                <p>I'm currently a 4th-year Bachelor of Science in Computer Science student with a strong passion for creating innovative and user-centered digital solutions. I enjoy bringing ideas to life and transforming concepts into functional and intuitive experiences.</p>
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
        height: 100%;
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
        height: clamp(450px, 30vw, 650px);
        min-height: 450px;
        width: auto;
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
        line-height: 7rem;
    }

    h2 {
        line-height: 0;
    }

    p {
        width: 550px;
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
        left: 0;
        display: flex; 
        gap: 1vh; 
        height: clamp(45px,5.5vh,5.5vh);
    }

    #facebook-btn, #instagram-btn, #linked-in-btn, #github-btn {
        transition: ease-in-out 0.2s;
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
        }

        #left-section {
            order: 2;
            min-width: 0;
            width: 100%;
        }

        #right-section {
            order: 1;
            margin-left: 0;
            margin-top: 12vh;
            margin-bottom: 40px;
            min-width: 0;
            padding: 0;
            width: 100%;
            justify-content: unset;
        }

        .picture-wrapper { 
            justify-content: center;
            
        }

        #picture {
            height: 28vh;
            min-height: 0;
        }

        h1 {
            font-size: 2.5rem;
            line-height: 5.5rem;
            white-space: nowrap;
        }

        h2 {
            font-size: 1.6rem;
        }

        p {
            width: 100%;
            margin-top: 35px;
            margin-bottom: 25px;
        }

        #button-container {
            justify-content: center;
        }

        #link-btn {
            position:relative;
            display: flex; 
            margin-left: auto;
            margin-right: auto;
            gap: 10px; 
            height: 50px;
            margin-top: 60px;
            justify-content: center;
        }
    }

</style>