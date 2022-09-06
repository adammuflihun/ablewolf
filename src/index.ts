import gsap from 'gsap';

import { expertisePage } from '$utils/expertise';
import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('oke ya jontol');
  expertisePage();
});

gsap.from('.block-expertise', 1, {
  y: 50,
  opacity: 0,
  ease: 'Power4.easeOut',
  stagger: {
    amount: 1,
    from: 'center',
  },
});
