let checkbox = document.querySelector(".checkbox");
let mobNav = document.querySelector('.mob-nav')
checkbox.addEventListener('change', function () {
  console.log('here')
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

regBtn.forEach((ele) => {
  ele.addEventListener('click', () => {
    overlay.classList.add('loginDisplay')
  })
})

cross.addEventListener('click', () => {
  overlay.classList.remove('loginDisplay')
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

let numberInpts = document.querySelectorAll('.footerUpper>div:last-of-type>div>input, .numberContainer>div:first-of-type>input')

let letsGoBtn = document.querySelector('.footerUpper>div:last-of-type>div>button')

letsGoBtn.addEventListener('click', (e) => {
  if (numberInpts[1].value.length != 10) {
    return
  }
  overlay.classList.add('loginDisplay')
  loginContainer.classList.add('otpActive')
})

numberInpts.forEach((ele) => {
  ele.addEventListener('keypress', (e) => {
    console.log('hehee')
    if (ele.value.length != 10) {
      return
    }
    let keyCode = e.code || e.keyCode
    if (keyCode == "Enter") {
      overlay.classList.add('loginDisplay')
      loginContainer.classList.add('otpActive')
    }
  })
})




let loginBtn = document.querySelector('.loginBtn')
let loginContainer = document.querySelector('.loginRight:not(.chatRight)')
let loginBackBtn = document.querySelector(".loginRight:not(.chatRight) > div > svg:first-of-type")

loginBtn.addEventListener('click', () => {
  if (numberInpts[0].value.length != 10) {
    return
  }
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
  })
})

chatCross.addEventListener('click', () => {
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
