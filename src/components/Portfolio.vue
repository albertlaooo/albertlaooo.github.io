<template>
    <div id="portfolio-container">
        <section id="Portfolio">
            <div id="portfolio-overview-container">
                <h4>Some of my recent works</h4>
                <h1 style="color: var(--primary-color); margin-bottom: 100px;">PROJECTS</h1>
                <div style="display:flex; gap: 8vh;">
                    <div style="width: 250px;">
                        <img src="../assets/portfolio/quizton.webp" style="height: 200px;"/>
                        <h3 style="margin-top: 5px; margin-bottom: 10px;">QuizTon</h3>
                        <p>is a web-based quiz generator designed specifically for the educators of St. Jude College Dasmariñas. It allows users to create, modify, and manage quizzes efficiently.</p>
                    </div>
                    <div style="width: 250px;">
                        <img src="../assets/portfolio/instaquiz.webp" style="height: 200px;"/>
                        <h3 style="margin-top: 5px; margin-bottom: 10px;">InstaQuiz</h3>
                        <p>dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div style="width: 250px;">
                        <img src="../assets/portfolio/quizwhiz.webp" style="height: 200px;"/>
                        <h3 style="margin-top: 5px; margin-bottom: 10px;">QuizWhiz</h3>
                        <p>dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </section>

        <div id="quizton-container">
    <div id="quizton-content">
        <div id="quizton-images-container">
            <img src="../assets/portfolio/quizton-img1.webp" style="height: 100%;" />
            <img src="../assets/portfolio/quizton-img2.webp" style="height: 100%;" />
            <img src="../assets/portfolio/quizton-img3.webp" style="height: 100%;" />
        </div>

        <div id="quizton-description">
            <img src="../assets/portfolio/quizton-icon.webp" style="height: 13vh;" />
            <p>
                QuizTon - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
        </div>
    </div>
        </div>
    </div>
</template>

<style>
    #portfolio-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        width: 100%;
        background-color: var(--bg-color);
        user-select: none;
    }

    #portfolio-overview-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        background-color: var(--bg-color);
    }

    #quizton-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

#quizton-images-container {
    display: flex;
    overflow-x: auto;      /* horizontal scroll */
    overflow-y: hidden;    /* iwas vertical scrollbar */
    height: 70vh;
    gap: 0;                /* walang pagitan */
    
    /* optional: nice UX */
    scroll-snap-type: x mandatory;     /* pumipitik bawat image */
    -webkit-overflow-scrolling: touch; /* smoother sa mobile */
}

/* images */
#quizton-images-container img {
    height: 100%;          /* sakto sa 70vh */
    width: auto;           /* igagalang ang aspect ratio */
    flex: 0 0 auto;        /* huwag magsiksikan, fixed width lang sila */
    object-fit: cover;     /* putol kung kinakailangan, walang distort */
    scroll-snap-align: center; /* pumipitik sa gitna ng view */
}

    #quizton-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #quizton-description {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 50vw;
        margin-top: 1rem;
    }

</style>