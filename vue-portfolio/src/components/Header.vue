<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

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
    <div id="header-container">
        <div id="logo-name-container">
            <h2>Albert</h2>
            <h1 class="dot">.</h1>
        </div>

        <nav>
        <ul class="nav-links">
            <li :class="{ active: currentSection === 'Home' }">
            <a href="#Home">Home</a>
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
        padding-bottom: 3.2rem;
        z-index: 1000;
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
        gap: 1.5rem;
        height: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .nav-links li {
        height: 100%;
        display: flex;
        align-items: center; /* vertical center */
    }

    .nav-links a {
        flex: 1; /* fill the entire li */
        display: flex;
        align-items: center; /* vertically center text */
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