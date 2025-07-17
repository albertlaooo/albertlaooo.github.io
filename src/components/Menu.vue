<script setup>
    import { ref, onMounted, onUnmounted, onBeforeUnmount} from 'vue'
    import { isNavVisible } from '../store';

    function closeMenu(){
        isNavVisible.value = false;
    }
    
    /* Detects user current section */
        const currentSection = ref('Home')

        function onScroll() {
        const sections = document.querySelectorAll('section')
        let closestSection = 'Home'
        let closestOffset = Infinity

        sections.forEach((section) => {
            const offset = Math.abs(section.getBoundingClientRect().top)
            if (offset < closestOffset) {
            closestOffset = offset
            closestSection = section.id
            }
        })

        currentSection.value = closestSection
        }

        onMounted(() => {
        window.addEventListener('scroll', onScroll)
        })

        onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
        })

</script>

<template>
    <transition name="slide-fade">
        <div v-show="isNavVisible" id="menu-container">
            <div id="menu-background" @click="closeMenu"></div>
            <div id="menu">
                <img id="menu-close-btn" src="../assets/header/menu-close.svg" @click="closeMenu">
                <nav>
                    <ul class="nav-links">
                        <li :class="{ active: currentSection === 'Home' }">
                        <a href="#Home">Home</a>
                        </li>
                        <li :class="{ active: currentSection === 'About' }">
                        <a href="#About">About</a>
                        </li>
                        <li :class="{ active: currentSection === 'Portfolio' }">
                        <a href="#Portfolio">Portfolio</a>
                        </li>
                        <li :class="{ active: currentSection === 'Skills' }">
                        <a href="#Skills">Skills</a>
                        </li>
                        <li :class="{ active: currentSection === 'Contact' }">
                        <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </transition>

</template>

<style scoped>

    #menu-container {
        position: fixed;
        display: flex;
        height: 100vh;
        width: 100vw;
        z-index: 1000;
        pointer-events: auto;
    }

    #menu-background {
        width: 35vw;
        height: 100vh;
        backdrop-filter: blur(5px);
        opacity: 0.95;
    }

    #menu {
        position: fixed;
        display: flex;
        flex-direction: column;
        right: 0;
        width: 65vw;
        height: 100vh;
        background: var(--secondary-bg-color);
        justify-content: center;
        transition: ease-in-out 0.2s;
    }

    #menu-close-btn {
        position: absolute;
        left: 25px;
        top: 25px;
        height: 32px;
    }

    /* Transition */
    .slide-fade-enter-from {
        transform: translateX(100%);
        opacity: 0;
    }
    .slide-fade-enter-active {
        transition: all 0.4s ease-out;
    }
    .slide-fade-enter-to {
        transform: translateX(0);
        opacity: 1;
    }

    .slide-fade-leave-from {
        transform: translateX(0);
        opacity: 1;
    }
    .slide-fade-leave-active {
        transition: all 0.3s ease-in;
    }
    .slide-fade-leave-to {
        transform: translateX(100%);
        opacity: 0;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        margin-top: 80px;
    }

    /* Navigation Links List */
    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* Individual Navigation Item */
    .nav-links li {
        display: flex;
        align-items: center;
        height: auto;
    }

    /* Navigation Links */
    .nav-links a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 600;
        padding: 10px 15px;
        width: 100%;
        height: auto;
        cursor: pointer;
        user-select: none;
        transition: ease-in-out 0.2s;
    }

    .nav-links a:hover {
        transition: ease-in-out 0.2s;
        text-shadow: 0 0 0px var(--primary-color),
                    0 0 2px var(--primary-color), 
                    0 0 20px var(--primary-color)
    }

    /* Active link styles */
    .nav-links li.active a {
        color: var(--primary-color);
        font-weight: bold;
        border-bottom: 2px solid var(--primary-color);
        padding-bottom: 4px;
        text-shadow: 0 0 0px var(--primary-color),
                    0 0 2px var(--primary-color), 
                    0 0 20px var(--primary-color)
    }


</style>