const groupFour = () => {
    const containers = document.querySelectorAll('.elements-container');
    
    window.addEventListener('scroll', (e) => {
        console.log(window.scrollY);
        containers.forEach((container) => {
            const sliderImages = container.querySelectorAll('.slide-in');
            const activationHeight = parseInt(container.id, 10)
            if(window.scrollY > activationHeight) {
                sliderImages.forEach((sliderImage) => {
                    sliderImage.classList.add('active');
                }); 
            }
        });
    });
    // window.addEventListener('scroll', debounce(checkSlide));
}

export { groupFour };