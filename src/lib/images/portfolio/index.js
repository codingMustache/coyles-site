import img1 from './img-1.webp';
import img2 from './img-2.webp';
import img3 from './img-3.webp';
import img4 from './img-4.webp';
import img5 from './img-5.webp';
import img6 from './img-6.webp';
import img7 from './img-7.webp';
import img8 from './img-8.webp';
import img9 from './img-9.webp';
import img10 from './img-10.webp';
import img11 from './img-11.webp';
import img12 from './img-12.webp';
import img13 from './img-13.webp';
import img14 from './img-14.webp';
import img15 from './img-15.webp';
import img16 from './img-16.webp';
import img17 from './img-17.webp';
import img18 from './img-18.webp';
import img19 from './img-19.webp';


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19]

const randomImages = new Set();
while (randomImages.size < 10) {
  randomImages.add(images[Math.floor(Math.random() * images.length)]);
}

export default [...randomImages];