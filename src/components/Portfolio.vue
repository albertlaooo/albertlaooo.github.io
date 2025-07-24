<script setup>
    import { ref, onMounted} from 'vue'
    import { quiztonImages, quiztonCurrentPhoto, instaquizImages, instaquizCurrentPhoto } from '../images'
    import { isViewImageVisible } from '../store'
    import { whichPhoto } from '../store'


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

    // Open github repositories
    function openQuizton(){
        window.open('https://github.com/albertlaooo/QUIZTON');
    }

    function openInstaQuiz(){
        window.open('https://github.com/albertlaooo/InstaQuiz');
    }

    function openQuizWhiz(){
        window.open('https://github.com/albertlaooo/QuizWhiz');
    }

    // Image Preview Navigation Arrow Functions
    function backArrow(which){
        if (which === 'quizton'){
            if (quiztonCurrentPhoto.value > 0) {
                quiztonCurrentPhoto.value--
            }
        } else if(which === 'instaquiz'){
            if (instaquizCurrentPhoto.value > 0) {
                instaquizCurrentPhoto.value--
            }
        }
    }

    function nextArrow(which){
        if (which === 'quizton'){
            if (quiztonCurrentPhoto.value < quiztonImages.length - 1) {
                quiztonCurrentPhoto.value++
            }
        } else if(which === 'instaquiz'){
            if (instaquizCurrentPhoto.value < instaquizImages.length - 1) {
                instaquizCurrentPhoto.value++
            }
        }
    }

    // Image Preview Swipe Function
    const touchStartX = ref(0)

    function handleTouchStart(event) {
    touchStartX.value = event.touches[0].clientX
    }

    function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX
    const diffX = touchEndX - touchStartX.value
    const target = event.currentTarget
    const id = target.id

    const threshold = 30

    if (Math.abs(diffX) > threshold) {
        const actions = {
            'quizton-browser-frame': () => diffX < 0 ? nextArrow('quizton') : backArrow('quizton'),
            'instaquiz-browser-frame': () => diffX < 0 ? nextArrow('instaquiz') : backArrow('instaquiz'),
        };

    const action = actions[id];
    if (action) action();
    }
    }

    // Open image modal for selected project
    function viewImage(which) {
        isViewImageVisible.value = true;

        if(which === 'quizton'){ 
            whichPhoto.value = 'quizton'
        }

        if(which === 'instaquiz'){
            whichPhoto.value = 'instaquiz'
        }
    }

    // Preload Images
    function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image()
        img.src = src
    })
    }

    onMounted(() => {
    preloadImages(instaquizImages)
    preloadImages(quiztonImages)
    })

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

                <div style="display: flex; flex-direction: column; gap: 15px;">
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
                </div>

                <div>
                    <h4>Tech Stack:</h4>
                    <div style="display: flex; gap: 15px; flex-wrap: wrap; line-height: 0.8rem; margin-top: 12px; margin-bottom: 5px;">
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
                        <p>SpaCy</p>
                    </div>
                </div>

                <div class="external-link" @click="openQuizton">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.25 16.7917V24.5417C23.25 25.2268 22.9778 25.8839 22.4934 26.3684C22.0089 26.8528 21.3518 27.125 20.6667 27.125H6.45833C5.77319 27.125 5.11611 26.8528 4.63164 26.3684C4.14717 25.8839 3.875 25.2268 3.875 24.5417V10.3333C3.875 9.64819 4.14717 8.99111 4.63164 8.50664C5.11611 8.02217 5.77319 7.75 6.45833 7.75H14.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.375 3.875H27.125V11.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.9165 18.0833L27.1248 3.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4>View on Github</h4>
                </div>
            </div>

            <div id="quizton-preview-container">
                <h2>Quizton</h2>
                <div id="quizton-preview">
                    <svg class="navigation-arrow" @click="backArrow('quizton')" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3281 7.20276L10.0322 17.5L20.3281 27.7973L23.4226 24.7028L16.2185 17.5L23.4226 10.2973L20.3281 7.20276Z" fill="white"/>
                    </svg>
                    <div class="browser-frame" :id="'quizton-browser-frame'" @touchstart="handleTouchStart($event)" @touchend="handleTouchEnd($event)" @click="viewImage('quizton')">
                         <img class="photo" :src="quiztonImages[quiztonCurrentPhoto]">
                    </div>
                    <svg class="navigation-arrow" @click="nextArrow('quizton')" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6727 27.7973L24.9685 17.5L14.6727 7.20276L11.5781 10.2973L18.7823 17.5L11.5781 24.7028L14.6727 27.7973Z" fill="white"/>
                    </svg>
                </div>
                <div style="display: flex; flex-direction: row; gap: 12px;">
                    <h3
                        v-for="(photo, index) in quiztonImages"
                        :key="index"
                        class="navigation-dot"
                        :class="{ active: index === quiztonCurrentPhoto }"
                        >
                        •
                    </h3>
                </div>
            </div>
        </div>

        <div id="instaquiz-section" ref="instaquizSection">
            <div id="instaquiz-preview-container">
                <h2>InstaQuiz</h2>
                <div id="instaquiz-preview">
                    <svg class="navigation-arrow" @click="backArrow('instaquiz')" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3281 7.20276L10.0322 17.5L20.3281 27.7973L23.4226 24.7028L16.2185 17.5L23.4226 10.2973L20.3281 7.20276Z" fill="white"/>
                    </svg>
                    <div class="browser-frame" :id="'instaquiz-browser-frame'" @touchstart="handleTouchStart($event)" @touchend="handleTouchEnd($event)" @click="viewImage('instaquiz')">
                         <img class="photo" :src="instaquizImages[instaquizCurrentPhoto]">
                    </div>
                    <svg class="navigation-arrow" @click="nextArrow('instaquiz')" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6727 27.7973L24.9685 17.5L14.6727 7.20276L11.5781 10.2973L18.7823 17.5L11.5781 24.7028L14.6727 27.7973Z" fill="white"/>
                    </svg>
                </div>
                <div style="display: flex; flex-direction: row; gap: 12px;">
                    <h3
                        v-for="(photo, index) in instaquizImages"
                        :key="index"
                        class="navigation-dot"
                        :class="{ active: index === instaquizCurrentPhoto }"
                        >
                        •
                    </h3>
                </div>
            </div>

            <div id="instaquiz-description">
                <h2>InstaQuiz</h2>

                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.</p>
                        
                    <p>
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of 
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div>
                    <h4>Tech Stack:</h4>
                    <div style="display: flex; gap: 15px; flex-wrap: wrap; line-height: 0.8rem; margin-top: 12px; margin-bottom: 5px;">
                        <p>HTML</p>
                        <p>|</p>
                        <p>CSS</p>
                        <p>|</p>
                        <p>Javascript</p>
                        <p>|</p>
                        <p>Firebase</p>
                        <p>|</p>
                        <p>Python</p>
                        <p>|</p>
                        <p>Flask</p>
                        <p>|</p>
                        <p>Flask-CORS</p>
                        <p>|</p>
                        <p>spaCy</p>
                        <p>|</p>
                        <p>NLTK</p>
                        <p>|</p>
                        <p>PyPDF2</p>
                    </div>
                </div>

                <div class="external-link" @click="openInstaQuiz">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.25 16.7917V24.5417C23.25 25.2268 22.9778 25.8839 22.4934 26.3684C22.0089 26.8528 21.3518 27.125 20.6667 27.125H6.45833C5.77319 27.125 5.11611 26.8528 4.63164 26.3684C4.14717 25.8839 3.875 25.2268 3.875 24.5417V10.3333C3.875 9.64819 4.14717 8.99111 4.63164 8.50664C5.11611 8.02217 5.77319 7.75 6.45833 7.75H14.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.375 3.875H27.125V11.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.9165 18.0833L27.1248 3.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h4>View on Github</h4>
                </div>
            </div>
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
        padding-top: 80px;
        padding-left: 8.5%;
        padding-right: 8.5%;
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
        gap: 25px;
    }

    #quizton-description h2 {
       line-height: 1.6rem;
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

    #quizton-preview-container h2{
        display: none;
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
        background-image: url(../assets/browserFrame.webp);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: relative;
        pointer-events: auto;
    }

    .photo {
        width: 95%;
        height: auto;
        aspect-ratio: 18 / 10.3;
        margin-top: 5.4%;
        border-bottom-left-radius: 1.8%;
        border-bottom-right-radius: 1.8%;
        pointer-events: none;
    }


/*///////////////////////////////////////////////////////// 
/////////////////// InstaQuiz //////////////////////////////
////////////////////////////////////////////////////////*/
    #instaquiz-section {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        width: 100vw;
        background-color: var(--bg-color);
        padding-left: 8.5%;
        padding-right: 8.5%;
    }

    #instaquiz-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 25px;
    }

    #instaquiz-description h2 {
       line-height: 1.6rem;
    }

    #instaquiz-preview-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-right: 10%;
    }

    #instaquiz-preview-container h2{
        display: none;
    }

    #instaquiz-preview {
        display: flex;
        flex-direction: row;
        height: 60%;
        width: 100%;
        justify-content: center;
        align-items: center;
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
    @media (max-width: 980px) {
        #portfolio-container { 
            padding-top: 40px;
            padding-bottom: 40px;
        }

        #portfolio-overview-container {
            height: 100%;
        }

        h1 {
            margin-bottom: 70px;
        }

        #projects-container {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .projects-card {
            width: 90vw;
            border: none;
        }

        .projects-card:hover {
            box-shadow: none;
            border: none;
            transform: none;
            border-radius: none;
        }

        .projects-box {
            display: flex;
            background-color: var(--fg-color);
            justify-content: center;
            align-items: center;
            border-radius: 8px;
        }

        .projects-box img {
            height: 70vw;
        }


    /*///////////////////////////////////////////////////////// 
    /////////////////// Quizton mobile layout//////////////////
    ////////////////////////////////////////////////////////*/
    #quizton-section {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        height: 100%;
        padding-top: 80px;
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

    #quizton-preview-container h2{
        align-self: flex-start;
        display: block;
    }
    
    #quizton-description {
        gap: 25px;
    }

    #quizton-description h2 {
        display: none;
    }

    #quizton-preview {
        display: flex;
        flex-direction: row;
        height: 60%;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 22px;
        margin-bottom: 16px;
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

    /*///////////////////////////////////////////////////////// 
    /////////////////// InstaQuiz mobile layout//////////////////
    ////////////////////////////////////////////////////////*/
    #instaquiz-section {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        height: 100%;
        padding-top: 80px;
    }

    #instaquiz-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
    }

    #instaquiz-preview-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-right: 0px;
    }

    #instaquiz-preview-container h2{
        align-self: flex-start;
        display: block;
    }
    
    #instaquiz-description {
        gap: 25px;
    }

    #instaquiz-description h2 {
        display: none;
    }

    #instaquiz-preview {
        display: flex;
        flex-direction: row;
        height: 60%;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 22px;
        margin-bottom: 16px;
    }
    }

    

</style>