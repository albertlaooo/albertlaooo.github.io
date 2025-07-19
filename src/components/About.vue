
<template>
    <section id="About">
        <div id="about-container">
            <div id="image-container">
                <h2 id="m-aboutme-text">
                    About me
                </h2>
                <img src="../assets/about/image.webp">
            </div>

            <div id="description-container">
                <h2 id="aboutme-text">
                    About me
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. <br><br>It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.</p>
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

    img {
        height: 60vh;
        justify-self: center;
    }


/*///////////////////////////////////////////////////////// 
///////////////////🔁 Mobile Layout //////////////////////
////////////////////////////////////////////////////////*/
    @media (max-width: 780px)  {
        #about-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr auto;
            height: 100%;
            gap: 30px;
            padding-top: 80px;
            padding-bottom: 80px;
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
            display: block;
        }

        #aboutme-text {
            display: none;
        }

        p {
            margin: 0;
        }


    }
</style>