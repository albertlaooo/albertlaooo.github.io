<script setup>
    import { ref, onMounted, onUnmounted} from 'vue'
    import { isNavVisible } from '../store';

    //Logo name button
    function logoName() {
        const homeSection = document.getElementById('Home')
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' })
        }
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

    function openMenu(){
        isNavVisible.value = true;  
    }

</script>

<template>
    <div id="header-container">
        <div @click="logoName"id="logo-name-container">
            <h2>Albert</h2>
            <h1 class="dot">.</h1>
            <span class="tooltip">What's up?</span>
        </div>
        
        <nav id="not-menu-nav">
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
            <img id="menu-btn" src="../assets/header/menu.svg" @click="openMenu"/>
    </div>
</template>

<style>
    #header-container {
        position: fixed;
        width: 100%;
        height: 75px;
        background-color: #20242D;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 8.5%;
        padding-right: 8.5%;
        padding-top: 3.2rem;
        padding-bottom: 2.5rem;
        z-index: 999;
    }

    #menu-btn {
        display: none;
    }

    #logo-name-container {
        display: flex;
        align-items: center;
        gap: 2px;
        cursor: pointer;
        user-select: none;
        transition: ease-in-out 0.3s;
    }

    #logo-name-container:hover {
        transition: ease-in-out 0.3s;
        text-shadow: 0 0 0px var(--primary-color),
                    0 0 2px var(--primary-color), 
                    0 0 20px var(--primary-color)
    }

    .dot {
        font-family: 'Segoe UI', sans-serif;
        color: #01EEFE;
        margin-bottom: 1.1rem;
    }

    /* Navigation Links */
    nav {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
        height: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .nav-links li {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .nav-links a {
        flex: 1;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 600;
        padding: 0 10px;
        width: auto;
        height: auto;
        cursor: pointer;
        user-select: none;
        transition: ease-in-out 0.2s;
    }

    .nav-links a:hover {
        text-shadow: 0 0 0px var(--primary-color),
            0 0 2px var(--primary-color), 
            0 0 10px var(--primary-color)
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

    .tooltip {
        visibility: hidden;
        opacity: 0;
        color: #fff;
        padding: 4px 8px;
        position: absolute;
        bottom: -15px;
        transition: opacity 0.3s;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1001;
    }

    #logo-name-container:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }

/*///////////////////////////////////////////////////////// 
///////////////////🔁 Mobile Layout //////////////////////
////////////////////////////////////////////////////////*/
    @media (max-width: 780px) {
        #header-container {
            padding-top: 2.8rem;
        }

        #not-menu-nav {
            display: none;
        }

        #menu-btn {
            display: flex; 
            height: 32px;
        }
    }
</style>