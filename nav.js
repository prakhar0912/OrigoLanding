let checkbox = document.querySelector(".checkbox");
let mobNav = document.querySelector('.mob-nav')
console.log(mobNav)
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
  if(index % 2 == 0){
    comMobBtn.classList.add('mobOpen')
  }
  else{
    comMobBtn.classList.remove('mobOpen')
  }
  index+=1
})

let overlay = document.querySelector('.loginOverlay')
let regBtn = document.querySelectorAll('.register')
let cross = document.querySelector('.loginRight > svg')

regBtn.forEach((ele) => {
  ele.addEventListener('click', () => {
    overlay.classList.add('loginDisplay')
  })
})

cross.addEventListener('click', () => {
  overlay.classList.remove('loginDisplay')
})


