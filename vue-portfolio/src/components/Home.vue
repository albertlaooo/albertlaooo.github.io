<script setup>
    function downloadCV() {
        alert("Not yet available.")
    }

    function facebookBtn() {
        window.open('https://www.facebook.com/albertlaooo/');
    }

    function instagramBtn() {
        window.open('https://www.instagram.com/brtlao_/');
    }

    function linkedInBtn() {
        window.open('https://www.linkedin.com/in/albert-lao-174bb135a/');
    }
</script>

<template>
    <section id="Home">
        <div id="home-container">
            <div id="left-section">
                <h2>Hi, Good Evening</h2>
                <h1>I'm Albert Lao</h1>
                <div style="display: flex; gap: 0.5rem;">
                    <h2>And I'm a</h2>
                    <h2 style="color: var(--primary-color);">Frontend Developer</h2>
                </div>
                <div style="display: flex; gap: 1rem; height: 3rem; margin-top: 15px; margin-bottom: 25px;">
                    <img src="../assets/home/facebook.webp" id="facebook-btn" @click="facebookBtn">
                    <img src="../assets/home/instagram.webp" id="instagram-btn" @click="instagramBtn">
                    <img src="../assets/home/linked-in.webp" id="linked-in-btn" @click="linkedInBtn">
                </div>
                <button id="download-cv" @click="downloadCV">Download CV</button>
            </div>

            <div id="right-section">
                <div class="picture-wrapper">
                    <img id="picture" src="../assets/home/picture.webp">
                </div>

            </div>
        </div>
    </section>
</template>

<style>
    #home-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        padding-left: 8.5%;
        padding-right: 8.5%;
        background-color: var(--bg-color);
        user-select: none;
    }

    #right-section {
        margin-left: auto;
    }

    /* PICTURE */
    .picture-wrapper {
        display: inline-block;
        animation: breathingGlow 5s ease-in-out infinite;
    }

    #picture {
        display: block;
        height: 600px;
        width: auto;
        transform: scale(1);
        transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    }

    #picture:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 15px var(--primary-color));
    }

    @keyframes breathingGlow {
    0%, 100% {
        filter: drop-shadow(0 0 5px var(--primary-color));
    }
    50% {
        filter: drop-shadow(0 0 15px var(--primary-color));
    }
    }

    #facebook-btn, #instagram-btn, #linked-in-btn {
        transition: ease-in-out 0.2s;
    }

    #facebook-btn:hover, #instagram-btn:hover, #linked-in-btn:hover {
        transition: ease-in-out 0.2s;
        filter: drop-shadow(0 0 15px var(--primary-color));
    }


    /* Download CV Button */
    #download-cv {
        font-size: 0.9rem;
        height: 50px;
        width: 150px;
        border-radius: 24px;
        background-color: var(--primary-color);
        border-width: 0;
        transition: ease-in-out 0.2s;
    }

    #download-cv:hover {
        transition: ease-in-out 0.2s;
        box-shadow: 0 0px 15px var(--primary-color);
    }

</style>