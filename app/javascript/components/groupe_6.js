const groupSix = () => {
    const caroussel = document.querySelector('.grp-6-caroussel');
    const rightScroll = document.querySelector('#right-scroll');
    const leftScroll = document.querySelector('#left-scroll');
    let position = 0;

    rightScroll.addEventListener('click', (e) => {
            position = position - 320;
            caroussel.style.transform = `translateX(${position}px)`;
    });
    leftScroll.addEventListener('click', (e) => {
        if (position !== 0) {
            position = position + 320;
            caroussel.style.transform = `translateX(${position}px)`;
        };
    });

    // transform: translateX(310px);
    // transition: all 1s;

};

export { groupSix };