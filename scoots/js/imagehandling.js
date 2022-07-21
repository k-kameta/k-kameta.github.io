// imagehandling.js based on mdn doc at
//   https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading
// and cit230 video
//

const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
  threshold: 0, 
  rootMargin: "0px 0px 50px 0px"
};


// imagesToLoad.forEach((img) => {
//   observer.observe(img);
// });

// Loading on demand

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
} 
else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

