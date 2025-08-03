<script setup>
    import {ref, computed, watch} from 'vue';

    const textName = ref('')
    const textEmail = ref('')
    const textMessage = ref('')
    const nameMaxLength = 100
    const emailMaxLength = 100
    const messageMaxLength = 500
    const submitBtnCounter = ref(0)

    const messageRemainingChars = computed(() => messageMaxLength - textMessage.value.length)

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

    const emailInput = ref(null)
    const isValidName = ref(true)
    const isValidEmail = ref(true)
    const isValidMessage = ref(true)
    const thankyouMessageIsVisible = ref(false)

    function sendMessage() {
        if(submitBtnCounter.value == 0) {
            if (textName.value.length > 1 && emailInput.value.checkValidity() && textMessage.value.length > 1){
                isValidName.value = true
                isValidEmail.value = true
                isValidMessage.value = true
                thankyouMessageIsVisible.value = true
                submitBtnCounter.value = 1

                setTimeout(() => {
                    thankyouMessageIsVisible.value = false
                }, 3000)
            }
            
            else {
                if(textName.value.length > 1) {
                    isValidName.value = true
                } else {
                    isValidName.value = false
                }

                if (emailInput.value.checkValidity()) {
                    isValidEmail.value = true
                } else {
                    isValidEmail.value = false
                }

                if (textMessage.value.length > 1) {
                    isValidMessage.value = true
                } else {
                    isValidMessage.value = false
                }
            }
        } else {
            alert("You already sent a message. Thank You!")
        }
    }

    // Disables scroll
    watch(thankyouMessageIsVisible, (newVal) => {
        if (newVal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = ''
        }
    })

    // Clears red border if on focus
    const validityMap = {
        isValidName, 
        isValidEmail,
        isValidMessage
    }

    function onFocus(fieldRefName) {
        validityMap[fieldRefName].value = true
    }

    
</script>

<template>
    <section id="Contact">
        <div id="contact-container">
            <!-- Left section -->
            <div id="left-section">
                <div id="contact-inputs">
                    <div style="display: flex; flex-direction: row; gap: 8px; margin-bottom: 12px;">
                        <h2>Contact</h2> <h2 style="color: var(--primary-color);">Me</h2>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <p>Full Name</p>
                        <input 
                            class="input" 
                            placeholder="Enter your full name" 
                            v-model="textName" 
                            :maxlength="nameMaxLength" required 
                            :class="{ invalid: !isValidName }"
                            @focus="onFocus('isValidName')">
                        </input>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <p>Email</p>
                        <input 
                            class="input" 
                            ref="emailInput" 
                            placeholder="Enter your email address" 
                            type="email" 
                            v-model="textEmail" 
                            :maxlength="emailMaxLength" required
                            :class="{ invalid: !isValidEmail }"
                            @focus="onFocus('isValidEmail')">
                        </input>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <p>Message</p>
                        <textarea 
                            class="input-message" 
                            placeholder="Enter your message" 
                            v-model="textMessage" 
                            :maxlength="messageMaxLength" required 
                            :class="{ invalid: !isValidMessage }"
                            @focus="onFocus('isValidMessage')">
                        </textarea>
                        <p style="font-size: 0.8rem; color: var(--text-secondary-color);">{{ messageRemainingChars }} characters remaining</p>
                    </div>

                    <button class="button1" @click="sendMessage" style="align-self: end;">Send Message</button>
                </div>
            </div>

            <!-- Right section -->
            <div id="right-section">
                <div style="width: fit-content;">
                    <h4>Additional Links to My Professional and Social Profiles</h4>
                    <p style="font-style: italic;">They open in a new window</p>

                    <div style="display: flex; flex-direction: column; gap: 12px; margin: 25px;">
                        <div>
                            <h4 style="margin-bottom: 10px;">Social Media</h4>
                            <div style="display: flex; flex-direction: row; gap: 10px;">
                                <img src="../assets/home/facebook.webp" alt="Facebook" id="facebook-btn" @click="facebookBtn">
                                <img src="../assets/home/instagram.webp" alt="Instagram" id="instagram-btn" @click="instagramBtn">
                            </div>
                        </div>

                        <div>
                            <h4 style="margin-bottom: 10px;">Professional Networks</h4>
                            <div style="display: flex; flex-direction: row; gap: 10px;">
                                <img src="../assets/home/linked-in.webp" alt="LinkedIn" id="linked-in-btn" @click="linkedInBtn">
                                <img src="../assets/home/github.webp" alt="GitHub" id="github-btn" @click="githubBtn">
                            </div>
                        </div>

                        <button class="button1" @click="downloadResume" style="margin-top: 8px; margin-bottom: 6px;"><i class='bx bx-cloud-download' ></i>Resume</button>
                    </div>

                    <p id="farewell-message">Thank you and have a nice day ahead!</p>
                </div>
            </div>
        </div>
        
    </section>

    <transition name="fade">
        <div v-show="thankyouMessageIsVisible" id="thankyou-message-container">
            <div id="thankyou-message-box">
                <svg class="svg-icon" style="width: 2.5rem; height: 2.5rem;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M958.815 439.177c0-167.342-112.526-303-251.334-303-63.099 0-120.73 28.073-164.854 74.385-13.235 13.892-35.632 13.02-47.836-1.786-45.524-55.232-108.584-89.431-178.274-89.431-138.807 0-251.334 135.657-251.334 303 0 57.363 16.638 109.439 36.2 156.726C166.56 736.62 434.876 868.96 498.448 898.503a31.977 31.977 0 0 0 27.031-0.023c49.845-23.313 226.385-110.128 333.756-217.802 57.888-58.051 99.58-142.9 99.58-241.501z" fill="red" /></svg>
                <h2>Thank you!</h2>
            </div>
        </div>
    </transition>

</template>

<style scoped>
    #contact-container {
        display: flex;
        flex-direction: row;
        height: 100vh;
        min-height: 750px;
        width: 100vw;
        background-color: var(--bg-color);
        padding-left: 8.5%;
        padding-right: 8.5%;
        align-items: center;
    }

    #left-section {
        display: flex; 
        justify-content: center; 
        flex: 1;
        width: 100%;
    }

    #right-section {
        display: flex; 
        justify-content: center;
        flex: 1;
        width: 100%;
    }

    #contact-inputs {
        display: flex; 
        flex-direction: column; 
        gap: 24px; 
        justify-content: center; 
        width: 80%;
    }

    .input {
        width: 100%;
        height: 50px;
        border-radius: 8px;
        border: 2px solid var(--fg-color);
        background-color: var(--fg-color);
        padding-left: 15px;
        padding-right: 15px;
        color: var(--text-color);
        font-size: 1rem;
    }

    .input-message {
        width: 100%;
        height: 250px;
        border-radius: 8px;
        border: 2px solid var(--fg-color);
        background-color: var(--fg-color);
        padding: 15px;
        color: var(--text-color);
        font-family: sans-serif;
        line-height: 1.4rem;
        font-size: 1rem;
        box-sizing: border-box;
        resize: none;
    }

    .invalid {
        border: 2px solid red;
        animation: scaleInvalid 0.3s ease;
    }

    @keyframes scaleInvalid {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.03);
        }
        100% {
            transform: scale(1);
        }
    }

    /* Transition */
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.2s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    img {
        width: 50px;
        transition: ease-in-out 0.2s;
    }

    #facebook-btn:hover, #instagram-btn:hover, #linked-in-btn:hover, #github-btn:hover {
        transition: ease-in-out 0.2s;
        filter: drop-shadow(0 0 15px var(--primary-color));
    }

    #farewell-message {
        font-style: italic;
        margin-bottom: 63%;
    }

    #thankyou-message-container {
        position: fixed; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        width: 100vw; 
        height: 100vh; 
        z-index: 2000; 
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }

    #thankyou-message-box {
        display: flex; 
        flex-direction: row; 
        gap:8px; 
        width:450px; 
        height: 200px; 
        background-color: var(--fg-color); 
        justify-content: center; 
        align-items: center; 
        border-radius: 8px;
    }

    @media (max-width: 970px) {
        #contact-container {
            display: flex;
            flex-direction: column;
            height: auto;
            padding-top: 80px;
            gap: 80px;
        }

        #right-section {
            justify-content: start;
        }

        #farewell-message {
            margin-bottom: 80px;
        }

        #contact-inputs {
            width: 100%;
            gap: 16px
        }

        #facebook-btn:hover, #instagram-btn:hover, #linked-in-btn:hover, #github-btn:hover {
            filter: none;
        }

        .button1:hover {
            box-shadow: none;
        }

        .button1:active {
            transform: scale(0.92);
            transition: ease-in-out 0.1s;
        }

        #thankyou-message-box {
            display: flex; 
            flex-direction: row; 
            gap:8px; 
            width: 70vw;
            max-width: 450px;
            max-height: 200px;
            height: 32vw; 
            background-color: var(--fg-color); 
            justify-content: center; 
            align-items: center; 
            border-radius: 8px;
        }

        #thankyou-message-box h2 {
            font-size: 1.7rem;
        }
    }
</style>