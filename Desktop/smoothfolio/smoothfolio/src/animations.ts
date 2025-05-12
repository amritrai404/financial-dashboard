import { gsap } from 'gsap';

export const animateDashboard = () => {
  gsap.from('.dashboard-card', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
  });
};
