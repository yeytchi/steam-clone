
const imageUrls = ["https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2018-12%252Fcb7c41a0-f7cb-11e8-b3ff-4bc6a0e52d77%26client%3Da1acac3e1b3290917d92%26signature%3D76300401c5cb3cf3d626b9729722fd2406d5ec60&client=amp-blogside-v2&signature=44d3cb3fc02f657f6ff83d225400358e15ff5aaa", 
                "https://images.spot.im/v1/production/ruedveklqia51z6jxkk0",
                "https://steamcdn-a.akamaihd.net/steam/apps/359550/capsule_616x353.jpg?t=1568227548",
                "https://steamcdn-a.akamaihd.net/steam/apps/346110/capsule_616x353.jpg?t=1560889311"
                ]

const titles = ["Fortnite",
                "Grand Theft Auto",
                "Rainbow 6",
                "Ark"
               ];

const subtitles = ["Un jeu super sympa.",
                   "Volez plein de voitures !",
                   "Bastoooon !!",
                   "Connais pas du tout."
                  ];

const container = document.querySelector('.inner-images');
const text = document.querySelector('.grp-3-text');

const groupThree = () => {
    let timer = 0;

    function timeout() {
        setTimeout(function () {
            timer = (timer + 1) % 4;
            container.innerHTML = `
                <div class="grp-3-image"
                style="background-image: linear-gradient(rgba(0,0,0,0.8), 
                rgba(0,0,0,0.9)), url(${imageUrls[timer % 4]})"></div>
                <div class="grp-3-image"
                style="background-image: linear-gradient(rgba(0,0,0,0.8), 
                rgba(0,0,0,0.9)), url(${imageUrls[(timer + 1) % 4]})"></div>
                <div class="grp-3-image"
                style="background-image: linear-gradient(rgba(0,0,0,0), 
                rgba(0,0,0,0)), url(${imageUrls[(timer + 2) % 4]})"></div>
                <div class="grp-3-image"
                style="background-image: linear-gradient(rgba(0,0,0,0.8), 
                rgba(0,0,0,0.9)), url(${imageUrls[(timer + 3) % 4]})"></div>
            `;

            text.innerHTML = `
                <h4>${titles[(timer + 2) % 4]}</h4>
                <h5>${subtitles[(timer + 2) % 4]}</h5>
            `;

            setTimeout(function() {
                const title = text.querySelector('h4');
                title.style.opacity = '1';
                const subtitle = text.querySelector('h5');
                subtitle.style.opacity = '1';
            }, 100);
            timeout();
        }, 5000);
    }
    timeout();
}

export { groupThree };