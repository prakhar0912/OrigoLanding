let numberInpt = document.querySelector('.section1Inner>div>div:first-of-type>input')
let numberBtn = document.querySelector('.section1Inner>div>button')



numberInpt.onkeypress = function (e) {
    if (numberInpt.value.length != 10) {
        return
    }
    let keyCode = e.code || e.keyCode
    if (keyCode == "Enter") {
        let otpNumber = document.querySelector('.otpContainer > p:first-of-type > span')
        otpNumber.innerHTML = numberInpt.value
        let overlay = document.querySelector('.loginOverlay')
        let loginContainer = document.querySelector('.loginRight:not(.chatRight)')
        overlay.classList.add('loginDisplay')
        loginContainer.classList.add('otpActive')
    }
}

numberBtn.addEventListener('click', (e) => {
    if (numberInpt.value.length != 10) {
        return
    }
    let otpNumber = document.querySelector('.otpContainer > p:first-of-type > span')
    otpNumber.innerHTML = numberInpt.value
    let overlay = document.querySelector('.loginOverlay')
    let loginContainer = document.querySelector('.loginRight:not(.chatRight)')
    overlay.classList.add('loginDisplay')
    loginContainer.classList.add('otpActive')
})

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
        1232: {
            perView: 4
        },
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
    perView: 4,
    focusAt: 'center',
    gap: 80,
    breakpoints: {
        3160: {
            perView: 3
        },
        2030: {
            perView: 2
        },

        590: {
            perView: 1
        }

    }

}).mount()

