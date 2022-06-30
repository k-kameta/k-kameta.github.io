// imagehandling.js based on mdn doc at
//   https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading
// and cit230 video
//

const images = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

if ("IntersectionObserver" in window)   {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) =>  {
            if (entry.isIntersecting)   {
                loadImages(entry.target);
                observer.unobserve(entry.target);  
            }
        });
    }, imgOptions);

    //observe each image and load upon intersection.
    images.forEach((image) =>    {
        observer.observe(image);   
    });
}
//load images normally if intersection observer is not supported.
else    {
    images.forEach((image) => {
        loadImages(image);
    });
}