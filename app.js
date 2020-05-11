const form = document.getElementById('form')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  // get the values from the inputs
  const emailValue = email.value.trim()

  if (!emailIsValid(emailValue)) {
    setErrorFor(email, 'Please provide a valid Email')
  } else {
    document.querySelector('#email').value = ''
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement // .form-control
  const small = formControl.querySelector('small')

  // add error message inside small
  small.innerText = message

  setTimeout(() => small.innerText = '', 3000)

  // add error class
  formControl.className = 'form-control error'

  setTimeout(() => formControl.className = 'form-control', 3000)
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}