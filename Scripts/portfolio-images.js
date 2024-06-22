document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.country-button');
    const imageGrid = document.getElementById('image-grid');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const country = button.dataset.country;
  
        if (imageGrid.dataset.activeCountry === country) {
          // Hide image grid if already active
          imageGrid.style.display = 'none';
          imageGrid.dataset.activeCountry = '';
          buttons.forEach(btn => btn.style.display = 'inline-block');
        } else {
          // Show image grid for selected country
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
      const basePath = '../Images/Portfolio Work'; // Base path to images folder
  
      // Fetch images from JSON array 
      const images = {
        'Italy/': ['I1.jpg', 'I2.jpg', 'I3.jpg', 'I4.jpg', 'I5.jpg', 'I6.jpg', 'I7.jpg', 'I8.jpg', 'I9.jpg', 'I10.jpg', 'I11.jpg', 'I12.jpg'],
        'Turkey/': ['T0.JPG', 'T1.JPG', 'T2.jpg', 'T3.jpg', 'T4.jpg', 'T5.jpg', 'T6.jpg', 'T7.jpg', 'T8.jpg', 'T9.jpg', 'T10.jpg', 'T12.jpg', 'T13.jpg', 'T14.JPG', 'T15.JPG', 'T16.jpg', 'T17.jpg'],
        'Netherlands/': ['A1.jpg', 'A2.jpg', 'A4.jpg', 'A3.jpg', 'A5.jpg', 'A6.jpg', 'A7.jpg', 'A8.jpg', 'A9.jpg', 'A10.jpg', 'A11.jpg', 'A12.jpg', 'A13.jpg'],
        'Austria/': ['AUS1.jpg', 'AUS2.jpg', 'AUS3.jpg', 'AUS4.jpg', 'AUS5.jpg', 'AUS6.jpg', 'AUS7.jpg', 'AUS8.jpg', 'AUS9.jpg', 'AUS10.jpg', 'AUS11.jpg'],
        'Czech-Republic/': ['P1.jpg', 'P2.jpg', 'P3.jpg', 'P4.jpg', 'P5.jpg', 'P6.jpg', 'P7.jpg', 'P8.jpg', 'P9.jpg', 'P10.jpg']
      };
  
      // Clear the images
      imageGrid.innerHTML = '';
  
      // Generate img elements for each image in the selected country
      images[country].forEach(image => {
        const img = document.createElement('img');
        img.src = `${basePath}/${country}${image}`; 
        img.alt = image; 
        imageGrid.appendChild(img); 
      });
    }
  });
  