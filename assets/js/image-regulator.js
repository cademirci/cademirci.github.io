window.addEventListener('load', regulateImages);
window.addEventListener('resize', regulateImages);

function regulateImages() {
    var windowWidth = window.innerWidth;
    var maxWidth = Math.floor(windowWidth * 0.6);
    var container = document.querySelector('.content_container');
    var containerWidth = container.clientWidth;
    const images = document.querySelectorAll('.reading_area img, .gallery_area img');
    if (containerWidth >= 800) {
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            if (image.naturalWidth > maxWidth && maxWidth > containerWidth) {
                image.style.maxWidth = windowWidth;
                let margins = Math.floor((maxWidth - containerWidth) / 2);
                image.style.marginLeft = -margins;
                image.style.marginRight = -margins;
                image.style.width = maxWidth;
            }
        }
    } else {
        for (let i = 0; i < images.length; i++) {
            images[i].style.maxWidth = "100%";
        }
    }
}
