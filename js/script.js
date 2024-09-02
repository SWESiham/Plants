/*//////////////////////////////////ESRAA////////////////////////////////*/

document.addEventListener('DOMContentLoaded', function() {
    const sidebarIcon = document.querySelector('.sidebar');
    const header = document.querySelector('header');

    sidebarIcon.addEventListener('click', function() {
        header.style.visibility="visible"
        header.classList.toggle('active'); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    const cartItemsList = document.getElementById('cart-items');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            cartItems.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            total += item.price;
            cartItemsList.innerHTML += `<li class="list-group-item">${item.name} - $${item.price.toFixed(2)}</li>`;
        });
        cartCount.textContent = cartItems.length;
        totalPriceElement.textContent = total.toFixed(2);
    }
});
//----------------------------------------------------------------------

 /*//////////////////////////////////SHIMAA/////////////////////////////*/
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('more-reviews');
    const hiddenBoxes = document.querySelectorAll('.customers .customers-container .box[style*="display: none;"]');

    toggleButton.addEventListener('click', () => {
        hiddenBoxes.forEach(box => {
            if (box.style.display === 'none') {
                box.style.display = 'flex';
                toggleButton.textContent = 'Show fewer reviews';
            } else {
                box.style.display = 'none';
                toggleButton.textContent = '...';
            }
        });
    });
});
// -----------------------------------------------------------------------------

// -------------------------------SIHAM------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.getElementById('carouselExampleControls');
    const dots = document.querySelectorAll('.dot');
    const carousel = new bootstrap.Carousel(carouselElement);
  

    function updateDots() {
        const activeIndex = Array.from(carouselElement.querySelectorAll('.carousel-item')).indexOf(
            carouselElement.querySelector('.carousel-item.active')
        );
        
        dots.forEach((dot, index) => {
            dot.style.width = index === activeIndex ? '25px' : '5px';
        });
    }

    updateDots();
   
    carouselElement.addEventListener('slid.bs.carousel', () => {
        updateDots();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carousel.to(index);
        });
    });

});
// -----------------------------------------------------------------

/*////////////////////////////SALMA/////////////////////////////////////*/
function subscribe() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();

    const isNumeric = /^\d+$/;

    if (emailValue === '') {
        alert('Please enter your email.');
    } else if (isNumeric.test(emailValue)) {
        alert('Invalid email: Email cannot contain only numbers.');
    } else {
        
        alert('Subscription successful!');
        emailInput.value = ''; 
    }
}

//----------------------------------------------------------------------



/*////////////////////////ESRAA  audio////////////////////////////////*/

document.addEventListener('DOMContentLoaded', function() {
    const playIcon = document.getElementById('play-icon');
    const audioPlayer = document.getElementById('audio-player');

    playIcon.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        } else {
            audioPlayer.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        }
    });
});
//----------------------------------------------------------------------