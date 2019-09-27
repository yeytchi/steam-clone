const button = document.querySelector('#grp-2-btn');
const gif = document.querySelector('.grp-2-img');

const handleGif = () => {
    gif.classList.toggle('appear');
};

const groupTwo = () => {
    button.addEventListener('click', (e) => {
        handleGif();
        setTimeout(handleGif, 3000);
    });
}

export { groupTwo };