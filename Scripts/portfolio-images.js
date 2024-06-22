document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.country-button');
    const imageGrid = document.getElementById('image-grid');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const country = button.dataset.country;
            if (imageGrid.dataset.activeCountry === country) {
                imageGrid.style.display = 'none';
                imageGrid.dataset.activeCountry = '';
                buttons.forEach(btn => btn.style.display = 'inline-block');
            } else {
                buttons.forEach(btn => {
                    if (btn !== button) btn.style.display = 'none';
                });
                loadImages(country);
                imageGrid.dataset.activeCountry = country;
                imageGrid.style.display = 'grid';
            }
        });
    });

    function loadImages(country) {
        const images = {
            italy: ['italy1.jpg', 'italy2.jpg', 'italy3.jpg'],
            turkey: ['turkey1.jpg', 'turkey2.jpg', 'turkey3.jpg'],
            netherlands: ['netherlands1.jpg', 'netherlands2.jpg', 'netherlands3.jpg'],
            austria: ['austria1.jpg', 'austria2.jpg', 'austria3.jpg'],
            'czech-republic': ['czech1.jpg', 'czech2.jpg', 'czech3.jpg']
        };

        imageGrid.innerHTML = '';
        images[country].forEach(src => {
            const img = document.createElement('img');
            img.src = `images/${src}`;
            imageGrid.appendChild(img);
        });
    }
});
