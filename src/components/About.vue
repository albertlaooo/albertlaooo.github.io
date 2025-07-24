<script setup>
import {ref} from 'vue'
import { oracleImages, dictImages, ctImages, codefest1Images, codefest1CurrentImages, codefest2Images, codefest2CurrentImages, codefest3Images, codefest3CurrentImages, } from '../images';
import { isViewImageVisible, whichPhoto } from '../store'

const isOracleVisible = ref(false);
const isDictVisible = ref(false);
const isCtVisible = ref(false);
const isCodefest1Visible = ref(false);
const isCodefest2Visible = ref(false);
const isCodefest3Visible = ref(false);

const activeCards = ref([])

function openCardContent(which) {
    if (which === 'oracle') {
        isOracleVisible.value = !isOracleVisible.value;
    } else if (which === 'dict') {
        isDictVisible.value = !isDictVisible.value;
    } else if (which === 'ct') {
        isCtVisible.value = !isCtVisible.value;
    } else if (which === 'codefest1') {
        isCodefest1Visible.value = !isCodefest1Visible.value;
    } else if (which === 'codefest2') {
        isCodefest2Visible.value = !isCodefest2Visible.value;
    } else if (which === 'codefest3') {
        isCodefest3Visible.value = !isCodefest3Visible.value;
    }

    const i = activeCards.value.indexOf(which);
    if (i > -1) activeCards.value.splice(i, 1);
    else activeCards.value.push(which);
} 

// Open image modal for selected project
function viewImage(which) {
    isViewImageVisible.value = true;

    const achievementKeys = {
        'codefest1-pic': ['codefest1', 0],
        'codefest1-cert': ['codefest1', 1],
        'codefest2-pic': ['codefest2', 0],
        'codefest2-cert': ['codefest2', 1],
        'codefest3-pic': ['codefest3', 0],
        'codefest3-cert': ['codefest3', 1],
    };

    if (which in achievementKeys) {
        const [photoKey, index] = achievementKeys[which];
        whichPhoto.value = photoKey;

        const currentImagesMap = {
        'codefest1': codefest1CurrentImages,
        'codefest2': codefest2CurrentImages,
        'codefest3': codefest3CurrentImages,
        };

        if (currentImagesMap[photoKey]) {
        currentImagesMap[photoKey].value = index;
    }
    } else {
        whichPhoto.value = which; 
    }
    
    
}

</script>

<template>
    <section id="About">
        <div id="about-container">
            <div id="image-container">
                <div id="m-aboutme-text">
                    <h2>About</h2><h2 style="color: var(--primary-color);">Me</h2>
                </div>

                <img src="../assets/about/image.webp">
            </div>

            <div id="description-container">

                <div id="aboutme-text">
                    <h2>About</h2><h2 style="color: var(--primary-color);">Me</h2>
                </div>
                <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.
                    </p>
                    <p>
                        It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
        <div id="certificate-achievements-container">
            <h2 style=" color: var(--primary-color);">Certificates and Achievements</h2>
            <div id="certificate-achivement-grid">
                <div id="certificate-container">
                    <p style="margin-bottom: 15px;">Certificates</p>
                    <div class="card-container">
                        <div class="card" :class="{ active: activeCards.includes('oracle') }" @click="openCardContent('oracle')">
                            <img src="../assets/about/certificates/oracle.webp"/>
                            <p>Oracle Certificate</p>
                        </div>

                        <transition name="slide">
                            <div v-show="isOracleVisible" class="card-content">
                                <img :src="oracleImages[0]" @click="viewImage('oracle-cert')"/>
                            </div>
                        </transition>
                    </div>

                    <div class="card-container">
                        <div class="card" :class="{ active: activeCards.includes('dict') }" @click="openCardContent('dict')">
                            <img src="../assets/about/certificates/dict.webp"/>
                            <p>DICT, PPE Certificate</p>
                        </div>

                        <transition name="slide">
                            <div v-show="isDictVisible" class="card-content">
                                <img :src="dictImages[0]" @click="viewImage('dict-cert')"/>
                            </div>
                        </transition>
                    </div>

                    <div class="card-container">
                        <div class="card" :class="{ active: activeCards.includes('ct') }" @click="openCardContent('ct')">
                            <img src="../assets/about/certificates/ct.webp"/>
                            <p>CT, ON2 Data Center Certificate</p>
                        </div>

                        <transition name="slide">
                            <div v-show="isCtVisible" class="card-content">
                                <img :src="ctImages[0]" @click="viewImage('ct-cert')"/>
                            </div>
                        </transition>
                    </div>
                </div>

                <div id="achievement-container">
                    <p style="margin-bottom: 15px;">Achievements</p>
                    <div class="card-container">
                        <div class="card" :class="{ active: activeCards.includes('codefest1') }" @click="openCardContent('codefest1')">
                            <img src="../assets/about/achievements/pic1.webp"/>
                            <p>2024 Codefest - Local Champion</p>
                        </div>

                        <transition name="slide">
                            <div v-show="isCodefest1Visible" class="card-content">
                                <img :src="codefest1Images[0]" @click="viewImage('codefest1-pic')"/>
                                <img :src="codefest1Images[1]" @click="viewImage('codefest1-cert')"/>
                            </div>
                        </transition>
                    </div>
                    
                    <div class="card-container">
                        <div class="card" :class="{ active: activeCards.includes('codefest2') }" @click="openCardContent('codefest2')">
                            <img src="../assets/about/achievements/pic2.webp"/>
                            <p>2025 Codefest - Local Level Champion</p>
                        </div>

                        <transition name="slide">
                            <div v-show="isCodefest2Visible" class="card-content">
                                <img :src="codefest2Images[0]" @click="viewImage('codefest2-pic')"/>
                                <img :src="codefest2Images[1]" @click="viewImage('codefest2-cert')"/>
                            </div>
                        </transition>
                    </div>
                    
                    <div class="card-container">
                        <div class="card" :class="{ active: activeCards.includes('codefest3') }" @click="openCardContent('codefest3')">
                            <img src="../assets/about/achievements/pic3.webp"/>
                            <p>2025 Codefest - Cluster Level 2nd Runner-up</p>
                        </div>

                        <transition name="slide">
                            <div v-show="isCodefest3Visible" class="card-content">
                                <img :src="codefest3Images[0]" @click="viewImage('codefest3-pic')"/>
                                <img :src="codefest3Images[1]" @click="viewImage('codefest3-cert')"/>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #about-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        min-height: 750px;
        width: 100vw;
        padding-left: 8.5%;
        padding-right: 8.5%;
        background-color: var(--bg-color);
        align-items: center;
    }

    #image-container {
        display: flex;
        justify-content: center;
    }

    #m-aboutme-text {
        display: none;
    }

    #aboutme-text {
        display: flex; 
        gap: 9px;
        flex-direction: row;
    }

    img {
        height: clamp(380px, 30vw, 30vw);
        justify-self: center;
    }

    #certificate-achievements-container{
        display: flex;
        flex-direction: column;
        height: auto;
        min-height: 100vh;
        width: 100vw;
        padding-left: 8.5%;
        padding-right: 8.5%;
        align-items: center;
        gap: 5vw;
        justify-content: center;
        align-items: center;
    }

    #certificate-achivement-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        width: 100%;
        gap: 8vw;
    }

    .card-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
        align-items: center;
    }
    
    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100px;
        width: 100%;
        border-radius: 8px;
        background-color: var(--fg-color);
        gap: 18px;
        padding-left: 25px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: 0.2s ease;
        z-index: 2;
    }

    .card:hover {
        border: 2px solid var(--primary-color);
        transition: 0.2s ease;
    }

    .card:hover p{
        color: var(--primary-color);
        transition: 0.2s ease;
    }

    .card.active {
        border: 2px solid var(--primary-color);
    }

    .card.active p{
        color: var(--primary-color);
    }

    .card img {
        width: 55px;
        height: auto;
        border-radius: 4px;
    }

    .card-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row: auto;
        background-color: var(--fg-color);
        width: 95%;
        border-radius: 8px;
        padding: 18px;
        gap: 10px;
        align-items: center;
        z-index: 1;
    }

    .card-content img {
        width: 16vw;
        height: auto;
        cursor: pointer;
    }

    /* Transitions */
    .slide-enter-active {
    transition: transform 0.3s ease;
    }
    .slide-leave-active {
    transition: transform 0.2s ease;
    }
    .slide-enter-from, .slide-leave-to {
    transform: translateY(-40%);
    }
    .slide-enter-to, .slide-leave-from {
    transform: translateY(0);
    }

/*///////////////////////////////////////////////////////// 
///////////////////🔁 Mobile Layout //////////////////////
////////////////////////////////////////////////////////*/
    @media (max-width: 980px)  {
        #about-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr auto;
            height: 100%;
            gap: 30px;
            padding-top: 80px;
        }

        #image-container {
            flex-direction: column;
            gap: 25px;
        }

        img {
            width: 100%;
            height: auto;
        }

        #description-container {
            display: flex;
            justify-content: center;
            text-align: center;
        }

        #m-aboutme-text{
            display: flex; 
            gap: 9px;

        }

        #aboutme-text {
            display: none;
        }

        p {
            margin: 0;
        }

        #certificate-achievements-container{
            padding-top: 80px;
            text-align: center;
            
        }

        #certificate-achivement-grid {
            display: flex;
            flex-direction: column;
        }

        .card-content img {
        width: 35vw;
        height: auto;
        cursor: pointer;
    }

    }
</style>