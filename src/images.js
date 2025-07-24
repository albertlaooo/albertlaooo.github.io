import { ref, onMounted} from 'vue'

// Quizton images
import quizton1 from './assets/portfolio/quizton/1.webp'
import quizton2 from './assets/portfolio/quizton/2.webp'
import quizton3 from './assets/portfolio/quizton/3.webp'
import quizton4 from './assets/portfolio/quizton/4.webp'

export const quiztonImages = [quizton1, quizton2, quizton3, quizton4]
export const quiztonCurrentPhoto = ref(0)

// Instaquiz images
import instaquiz1 from './assets/portfolio/instaquiz/1.webp'
import instaquiz2 from './assets/portfolio/instaquiz/2.webp'
import instaquiz3 from './assets/portfolio/instaquiz/3.webp'
import instaquiz4 from './assets/portfolio/instaquiz/4.webp'
import instaquiz5 from './assets/portfolio/instaquiz/5.webp'
import instaquiz6 from './assets/portfolio/instaquiz/6.webp'
import instaquiz7 from './assets/portfolio/instaquiz/7.webp'
import instaquiz8 from './assets/portfolio/instaquiz/8.webp'
import instaquiz9 from './assets/portfolio/instaquiz/9.webp'
import instaquiz10 from './assets/portfolio/instaquiz/10.webp'
import instaquiz11 from './assets/portfolio/instaquiz/11.webp'
import instaquiz12 from './assets/portfolio/instaquiz/12.webp'

export const instaquizImages = [
  instaquiz1, instaquiz2, instaquiz3, instaquiz4,
  instaquiz5, instaquiz6, instaquiz7, instaquiz8,
  instaquiz9, instaquiz10, instaquiz11, instaquiz12
]
export const instaquizCurrentPhoto = ref(0)

// Certificates and Achievements Images
import oracleCert from './assets/about/certificates/oracle-cert.webp'
import dictCert from './assets/about/certificates/dict-cert.webp'
import ctCert from './assets/about/certificates/ct-cert.webp'
import pic1 from './assets/about/achievements/pic1.webp'
import cert1 from './assets/about/achievements/cert1.webp'
import pic2 from './assets/about/achievements/pic2.webp'
import cert2 from './assets/about/achievements/cert2.webp'
import pic3 from './assets/about/achievements/pic3.webp'
import cert3 from './assets/about/achievements/cert3.webp'

export const oracleImages = [
  oracleCert
]
export const oracleCurrentImages = ref(0)

export const dictImages = [
    dictCert
]
export const dictCurrentImages = ref(0)

export const ctImages = [
  ctCert
]
export const ctCurrentImages = ref(0)

export const codefest1Images = [
  pic1,
  cert1
]
export const codefest1CurrentImages = ref(0)

export const codefest2Images = [
  pic2,
  cert2
]
export const codefest2CurrentImages = ref(0)

export const codefest3Images = [
  pic3,
  cert3
]
export const codefest3CurrentImages = ref(0)
