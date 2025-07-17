<script setup>
    import { ref } from 'vue'

    // Scrolls into clicked project card
    const quiztonSection = ref(null)
    const instaquizSection = ref(null)
    const quizwhizSection = ref(null)

    const sections = {
        quizton: quiztonSection,
        instaquiz: instaquizSection,
        quizwhiz: quizwhizSection
    }

    function scrollToSection(projectName){
        sections[projectName].value.scrollIntoView({behavior: 'smooth'})
    }

    function openQuizton(){
        window.open('https://github.com/albertlaooo/QUIZTON');
    }

    function openInstaQuiz(){
        window.open('https://github.com/albertlaooo/InstaQuiz');
    }

    function openQuizWhiz(){
        window.open('https://github.com/albertlaooo/QuizWhiz');
    }


    // Photo preview function
    import photo1 from '../assets/portfolio/quizton/1.webp'
    import photo2 from '../assets/portfolio/quizton/2.webp'
    import photo3 from '../assets/portfolio/quizton/3.webp'
    import photo4 from '../assets/portfolio/quizton/4.webp'

    const photos = [photo1, photo2, photo3, photo4]
    const currentPhoto = ref(0)

    function nextArrow() {
        if (currentPhoto.value < photos.length - 1) {
            currentPhoto.value++
        } else {
            alert("no photos na")
        }
    }

    function backArrow() {
        if (currentPhoto.value > 0) {
            currentPhoto.value--
        }
    }
</script>

<template>
    <div id="portfolio-container">
        <section id="Portfolio">
            <div id="portfolio-overview-container">
                <p>Some of my recent works</p>
                <h1>PROJECTS</h1>

                <div id="projects-container">
                    <!-- Quizton card -->
                    <div class="projects-card" @click="scrollToSection('quizton')">
                        <div class="projects-box">
                            <img src="../assets/portfolio/quizton.webp"/>
                        </div>
                        <h3>QuizTon</h3>
                        <p>is a web-based quiz generator designed specifically for the educators of St. Jude College Dasmariñas. 
                            It allows users to create, modify, and manage quizzes efficiently.</p>
                    </div>

                    <!-- InstaQuiz card -->
                    <div class="projects-card" @click="scrollToSection('instaquiz')">
                        <div class="projects-box">
                            <img src="../assets/portfolio/instaquiz.webp"/>
                        </div>
                        <h3>InstaQuiz</h3>
                        <p>dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <!-- QuizWhiz card -->
                    <div class="projects-card" @click="scrollToSection('quizwhiz')">
                        <div class="projects-box">
                            <img src="../assets/portfolio/quizwhiz.webp"/>
                        </div>
                        <h3>QuizWhiz</h3>
                        <p>dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            
        <div id="quizton-section" ref="quiztonSection">
            <div id="quizton-description">
                <h2>Quizton</h2>

                <p>
                    Thesis Project • St. Jude College Dasmariñas, Cavite
                    Quizton is an AI-powered web application designed to simplify the 
                    process of quiz creation for educators. With a user-friendly interface, 
                    teachers can easily upload or drag-and-drop PDF, Word, or other document 
                    files, and the system will automatically generate quizzes based on their preferred settings.</p>
                    
                <p>
                    Key features include editable quiz outputs, the ability to save, print, or export quizzes 
                    for offline use, and a built-in library system that stores uploaded lecture materials for 
                    quick access. Quizton also allows the reuse of previously generated questions to 
                    streamline future quiz creation. Developed as our capstone thesis project, Quizton aims 
                    to support digital learning by making assessment creation faster, and more efficient.
                </p>

                <div>
                    <h4>Tech Stack:</h4>
                    <div style="display: flex; gap: 15px; flex-wrap: wrap; line-height: 0.8rem; margin-top: 12px; margin-bottom: 20px;">
                        <p>Python</p>
                        <p>|</p>
                        <p>HTML</p>
                        <p>|</p>
                        <p>CSS</p>
                        <p>|</p>
                        <p>Javascript</p>
                        <p>|</p>
                        <p>Firebase</p>
                        <p>|</p>
                        <p>Cloudinary</p>
                        <p>|</p>
                        <p>Render</p>
                        <p>|</p>
                        <p>Spacy</p>
                    </div>
                </div>

                <div class="external-link" @click="openQuizton">
                    <img src="/Portfolio/public/externalLink.svg">
                    <h4>View on Github</h4>
                </div>
            </div>

            <div id="quizton-preview-container">
                <div id="quizton-preview">
                    <img class="navigation-arrow" src="/Portfolio/public/backArrow.svg" @click="backArrow">
                    <div class="browser-frame">
                         <img class="photo" :src="photos[currentPhoto]">
                    </div>
                    <img class="navigation-arrow" src="/Portfolio/public/nextArrow.svg" @click="nextArrow">
                </div>
                <h3>• • • •</h3>
            </div>
        </div>

        <div id="instaquiz-section" ref="instaquizSection">

        </div>

        <div id="quizwhiz-section" ref="quizwhizSection">

        </div>
        </section>

    </div>
</template>

<style scoped>
    #portfolio-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100vw;
        background-color: var(--bg-color);
        user-select: none;
        padding-left: 8.5%;
        padding-right: 8.5%;
    }

/*///////////////////////////////////////////////////////// 
/////////////////// Portfolio Overview ////////////////////
////////////////////////////////////////////////////////*/
    #portfolio-overview-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        background-color: var(--bg-color);
    }

    h1 {
        color: var(--primary-color); 
        margin-bottom: 100px;
    }

    #projects-container {
        display: flex;
        flex-direction: row;
        gap: 75px;
    }

    .projects-card {
        width: 280px;
        padding: 20px;
        transition: 0.1s ease-in-out;
        border: 1px solid transparent;
        cursor: pointer;
    }

    .projects-card:hover {
        box-shadow: 0 0 5px var(--primary-color),
                    0 0 15px var(--primary-color), 
                    0 0 50px var(--primary-color);
        border: 1px solid var(--primary-color);
        transform: scale(1.05);
        border-radius: 8px;
    }

    .projects-box {
        display: flex;
        background-color: var(--fg-color);
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }

    .projects-box img {
        height: 200px;
    }

    .projects-card h3 {
        margin-top: 12px; 
        margin-bottom: 10px;
    }

/*///////////////////////////////////////////////////////// 
/////////////////// Quizton //////////////////////////////
////////////////////////////////////////////////////////*/
    #quizton-section {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr;
        height: 100vh;
        width: 100vw;
        background-color: var(--bg-color);
        padding-left: 8.5%;
        padding-right: 8.5%;
    }

    #quizton-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
    }

    #quizton-preview-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 10%;
    }

    #quizton-preview {
        display: flex;
        flex-direction: row;
        height: 60%;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .browser-frame {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        aspect-ratio: 16 / 10;
        background-image: url(/Portfolio/public/browserFrame.webp);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: relative;
    }

    .photo {
        width: 95%;
        height: auto;
        aspect-ratio: 18 / 10.3;
        margin-top: 5.4%;
        border-bottom-left-radius: 1.8%;
        border-bottom-right-radius: 1.8%;
    }


/*///////////////////////////////////////////////////////// 
/////////////////// InstaQuiz //////////////////////////////
////////////////////////////////////////////////////////*/
    #instaquiz-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background-color: var(--bg-color);
    }

/*///////////////////////////////////////////////////////// 
/////////////////// QuizWhiz //////////////////////////////
////////////////////////////////////////////////////////*/
    #quizwhiz-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background-color: red;
    }


/*///////////////////////////////////////////////////////// 
///////////////////🔁 Mobile Layout //////////////////////
////////////////////////////////////////////////////////*/
    @media (max-width: 780px) {
        #portfolio-container { 
            padding-top: 40px;
            padding-bottom: 40px;
        }

        #portfolio-overview-container {
            height: 100%;
        }

        h1 {
            margin-bottom: 80px;
        }

        #projects-container {
            display: flex;
            flex-direction: column;
        }

        .projects-card {
            width: 70vw;
        }

        .projects-box {
            display: flex;
            background-color: var(--fg-color);
            justify-content: center;
            align-items: center;
            border-radius: 8px;
        }

        .projects-box img {
            height: 50vw;
        }


    /*///////////////////////////////////////////////////////// 
    /////////////////// Quizton mobile layout//////////////////////////////
    ////////////////////////////////////////////////////////*/
    #quizton-section {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        margin-top: 80px;
    }

    #quizton-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        order: 2;
    }

    #quizton-preview-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 0px;
        order: 1;
    }

    #quizton-preview {
        display: flex;
        flex-direction: row;
        height: 60%;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .browser-frame {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        aspect-ratio: 16 / 10;
        background-image: url(/Portfolio/public/browserFrame.webp);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: relative;
    }

    .photo {
        width: 95%;
        height: auto;
        aspect-ratio: 18 / 10.3;
        margin-top: 5.4%;
        border-bottom-left-radius: 1.8%;
        border-bottom-right-radius: 1.8%;
    }

    .navigation-arrow{
        display: none;
    }

    }

</style>