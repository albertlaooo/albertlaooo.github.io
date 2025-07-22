<script setup>
    import { ref, watch } from 'vue'
    import { isViewImageVisible, whichPhoto} from '../store';
    import { quiztonImages, quiztonCurrentPhoto, instaquizImages, instaquizCurrentPhoto } from '../images'

    const images = ref([])
    const showCurrentPhoto = ref(0)


    watch(whichPhoto, (newVal) => {
      if (newVal === 'quizton') {
        images.value = quiztonImages
        showCurrentPhoto.value = quiztonCurrentPhoto.value
      }

      if (newVal === 'instaquiz') {
        images.value = instaquizImages
        showCurrentPhoto.value = instaquizCurrentPhoto.value
      }
    })


    // Disables scroll
    watch(isViewImageVisible, (newVal) => {
        if (newVal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = ''
        }
    })

    function closeButton(){
      isViewImageVisible.value = false
      whichPhoto.value = ''
    }

    function backArrow(){
      if(whichPhoto.value === 'quizton'){
        if (quiztonCurrentPhoto.value > 0) { 
          quiztonCurrentPhoto.value--
          showCurrentPhoto.value = quiztonCurrentPhoto.value
        }
      }

      if(whichPhoto.value === 'instaquiz'){
        if (instaquizCurrentPhoto.value > 0) { 
          instaquizCurrentPhoto.value--
          showCurrentPhoto.value = instaquizCurrentPhoto.value
        }
      }
    }

    function nextArrow() {
      if(whichPhoto.value === 'quizton'){
        if (quiztonCurrentPhoto.value < quiztonImages.length - 1) {
          quiztonCurrentPhoto.value++
          showCurrentPhoto.value = quiztonCurrentPhoto.value
        }
      }

      else if(whichPhoto.value === 'instaquiz'){
        if (instaquizCurrentPhoto.value < instaquizImages.length - 1) {
          instaquizCurrentPhoto.value++
          showCurrentPhoto.value = instaquizCurrentPhoto.value
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
            'view-image-navigation': () => diffX < 0 ? nextArrow(whichPhoto) : backArrow(whichPhoto)
        };

    const action = actions[id];
    if (action) action();
    }
    }
    
</script>

<template>
  <transition name="fade">
    <div v-show="isViewImageVisible" id="view-image" @click="closeButton">
      <svg class="close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" @click="closeButton">
        <circle cx="12" cy="12" r="9" class="icon-bg" />
        <path d="M16 8L8 16" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 8L16 16" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div id="view-image-navigation" touchstart="handleTouchStart($event)" @touchend="handleTouchEnd($event)">
          <svg class="navigation-arrow" @click="backArrow" @click.stop width="55" height="55" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.3281 7.20276L10.0322 17.5L20.3281 27.7973L23.4226 24.7028L16.2185 17.5L23.4226 10.2973L20.3281 7.20276Z" fill="white"/>
          </svg>
          <div>
            <img :src="images[showCurrentPhoto]" @click.stop/>
            <div style="display: flex; flex-direction: row; gap: 12px; justify-content: center; margin-top: 12px;">
              <h3
                  v-for="(photo, index) in images"
                  :key="index"
                  class="navigation-dot"
                  :class="{ active: index === showCurrentPhoto }"
                  >
                  •
              </h3>
            </div>
          </div>
          <svg class="navigation-arrow" @click="nextArrow" @click.stop width="55" height="55" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6727 27.7973L24.9685 17.5L14.6727 7.20276L11.5781 10.2973L18.7823 17.5L11.5781 24.7028L14.6727 27.7973Z" fill="white"/>
          </svg>
      </div>
    </div>
  </transition>
</template>

<style scoped>
#view-image {
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);  
    z-index: 2000;
    justify-content: center;
    align-items: center;
}

#view-image .close-icon {
  position: fixed;
  right: 25px;
  top: 25px;
  width: 50px;
  cursor: pointer;
}

#view-image .close-icon .icon-bg {
  fill: var(--fg-color);
  transition: fill 0.2s;
}

#view-image .close-icon:hover .icon-bg {
  fill: #3c4352;
}

#view-image img {
    max-width: 80vw;
    max-height: 85vh;
    height: auto;
    border-radius: 12px;
    user-select: none;
    -webkit-user-drag: none;
}

#view-image-navigation {
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center; 
  gap: 25px;
}

/* Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 780px) {
  #view-image-navigation {
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    gap: 0px;
    justify-items: center;
  }

  #view-image-navigation :nth-child(2) {
  grid-column: 1 / -1;
  grid-row: 1;
  }

  #view-image-navigation :nth-child(1), #view-image-navigation :nth-child(3) {
    grid-row: 2;
  }

  #view-image img {
    max-height: 70vh;
   }
}

</style>