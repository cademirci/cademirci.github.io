window.addEventListener('load', () => {
    regulateImages();

    function regulateImages() {
        var windowWidth = window.innerWidth;
        var maxWidth = Math.floor(windowWidth * 85 / 100);
        var containerWidth = document.querySelector('.content_container').offsetWidth;
        if (containerWidth >= 800) {
            const images = document.querySelectorAll('.reading_area img');
            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                image.style.maxWidth = windowWidth;
                if (image.naturalWidth > maxWidth) {
                    let margins = Math.floor((maxWidth - containerWidth) / 2);
                    image.style.marginLeft = -margins;
                    image.style.marginRight = -margins;
                    image.style.width = maxWidth;
                }
            }
        }

    }
    window.addEventListener('resize', regulateImages);
})