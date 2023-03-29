new Glide('.glide1', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    focusAt: 'center',
    gap: 20,
    breakpoints: {
        1000: {
            perView: 3
        },
        470: {
            perView: 2
        }
    }
    
}).mount()

new Glide('.glide2', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    focusAt: 'center',
    gap: 20,
    breakpoints: {
        1000: {
            perView: 3
        },
        470: {
            perView: 2
        }
    }
    
}).mount()

new Glide('.glide3', {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    focusAt: 'center',
    gap: 80,
    breakpoints: {
        590: {
            perView: 1
        }
    }
    
}).mount()

let checkbox = document.querySelector("input[name=checkbox]");
let mobNav = document.querySelector('.mob-nav')

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");

  } else {
    console.log("Checkbox is not checked..");
  }
});
