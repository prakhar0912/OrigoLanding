let checkbox = document.querySelector(".checkbox");
let mobNav = document.querySelector('.mob-nav')
checkbox.addEventListener('change', function () {
  if (this.checked) {
    mobNav.classList.add('show')

  } else {
    mobNav.classList.remove('show')
  }
});

let comBtn = document.querySelector('.nav-links > div')
comBtn.addEventListener('mouseover', () => {
  comBtn.classList.add('open')
})

comBtn.addEventListener('mouseout', () => {

  comBtn.classList.remove('open')

})

let comMobBtn = document.querySelector('.mob-nav > div')
let index = 0
comMobBtn.addEventListener('click', () => {
  if (index % 2 == 0) {
    comMobBtn.classList.add('mobOpen')
  }
  else {
    comMobBtn.classList.remove('mobOpen')
  }
  index += 1
})











let overlay = document.querySelector('.loginOverlay')
let regBtn = document.querySelectorAll('.register')
let cross = document.querySelector('.loginRight:not(.chatRight) > div > svg:last-of-type')

let numberInpts = document.querySelectorAll('.footerUpper>div:last-of-type>div>input, .numberContainer>div:first-of-type>input')

let letsGoBtn = document.querySelector('.footerUpper>div:last-of-type>div>button')

let otpNumber = document.querySelector('.otpContainer > p:first-of-type > span')



const openLoginContainerSpec = (elem, otp) => {
  if (elem) {
    otpNumber.innerHTML = elem.value
  }
  overlay.classList.add('loginDisplay')
  document.body.style.overflow = 'hidden'
  if (otp) {
    loginContainer.classList.add('otpActive')
  }
}



regBtn.forEach((ele) => {
  ele.addEventListener('click', () => {
    loginContainer.classList.remove('otpActive')
    openLoginContainerSpec(null, false)
  })
})

cross.addEventListener('click', () => {
  document.body.style.overflow = 'auto'
  overlay.classList.remove('loginDisplay')
})



letsGoBtn.addEventListener('click', (e) => {
  if (numberInpts[1].value.length != 10) {
    return
  }
  openLoginContainerSpec(numberInpts[1], true)
})

numberInpts.forEach((ele) => {
  ele.addEventListener('keypress', (e) => {
    if (ele.value.length != 10) {
      return
    }
    let keyCode = e.code || e.keyCode
    if (keyCode == "Enter") {
      openLoginContainerSpec(ele, true)
    }
  })
})



function onlyNumberKey(evt) {

  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return false;
  return true;
}

const clickEvent = (first, last) => {
  first.value = first.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  if (first.value.length) {
    if (last != '5th') {
      document.getElementById(last).focus();
    }
  }
  if (first.value.length < 1) {
    if (first.id == 'fourth') {
      document.getElementById('third').focus();
    }
    else if (first.id == 'third') {
      document.getElementById('sec').focus();
    }
    if (first.id == 'sec') {
      document.getElementById('ist').focus();
    }
  }
  // return true;
}






let loginBtn = document.querySelector('.loginBtn')
let loginContainer = document.querySelector('.loginRight:not(.chatRight)')
let loginBackBtn = document.querySelector(".loginRight:not(.chatRight) > div > svg:first-of-type")

loginBtn.addEventListener('click', () => {
  if (numberInpts[0].value.length != 10) {
    return
  }
  otpNumber.innerHTML = numberInpts[0].value
  loginContainer.classList.add('otpActive')
})

loginBackBtn.addEventListener('click', () => {
  loginContainer.classList.remove('otpActive')
})

let chatOverlay = document.querySelector('.chatOverlay')
let callBtn = document.querySelectorAll('.call')
let chatCross = document.querySelector('.chatRight > div > svg:last-of-type')

callBtn.forEach((ele) => {
  ele.addEventListener('click', () => {
    chatOverlay.classList.add('chatDisplay')
    document.body.style.overflow = 'hidden'
  })
})

chatCross.addEventListener('click', () => {
  document.body.style.overflow = 'auto'
  chatOverlay.classList.remove('chatDisplay')
})


let tcOverlay = document.querySelector('.tcOverlay')
let tcBtn = document.querySelectorAll('.numberContainer > p > a')
let tcCross = document.querySelectorAll('.tcContainer > svg, .tcContainer > button')

tcBtn.forEach((ele) => {
  ele.addEventListener('click', () => {
    tcOverlay.classList.add('tcDisplay')
  })
})

tcCross.forEach(ele => {
  ele.addEventListener('click', () => {
    tcOverlay.classList.remove('tcDisplay')
  })
})


let callUsNumber = document.querySelector('.chatContent>div:first-of-type')

callUsNumber.addEventListener('click', () => {
  let elm = document.querySelector('.toaster')
  var newone = elm.cloneNode(true);
  elm.parentNode.replaceChild(newone, elm);
})

let overlays = document.querySelectorAll('.tcOverlay, .loginOverlay, .chatOverlay')

window.onload = () => {
  console.log(overlays)
  overlays.forEach(ele => ele.style.transition = "opacity 0.3s ease;")
}