import anime from 'animejs';

const scrollToSection = (el, header) => {
  let {top} = el.getBoundingClientRect();
  let mainHeaderHeight = header.scrollHeight;
  
  const scroll = {
    y: window.pageYOffset
  };

  anime({
    targets: scroll,
    y: ((top + window.pageYOffset) - mainHeaderHeight),
    duration: 1000,
    easing: 'easeInOutExpo',
    update: () => window.scroll(0, scroll.y)
  })
}

export default scrollToSection;