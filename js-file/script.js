// add more education feild

const addFeild = document.querySelector('.add-button')

addFeild.addEventListener('click', () => {
  const educationFeild = document.querySelector('.edcation-feild')
  const buttonDiv = document.querySelector('.add-more-feild')
  const div = document.createElement('div')
  div.classList.add('education-input-feild', 'row', 'mb-2')
  div.innerHTML = `
      <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Degree name "
                          />
                       </div>
                        <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Passing year"
                          />
                        </div>
                        <div class="col-md-2">
                          <input
                            type="button"
                            class="bg-white form-control delete-feild"
                            value="X"
                          />
       </div>
`
  educationFeild.insertBefore(div, buttonDiv)
})

// delete extra education feild
const form = document.querySelector('form')

form.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-feild')) {
    e.target.parentElement.parentElement.style.display = 'none'
    console.log(e.target.parentElement.parentElement.value)
  }
})
// try to get dynamic input field value
form.addEventListener('click', (e) => {
  if (e.target.classList.contains('degree-name')) {
    console.log(e.target.value)
  }
})
//form validation
let country = document.getElementById('country')
let countryName = document.getElementById('country_name')
country.addEventListener('change', () => {
  if (country.value == 2) {
    countryName.removeAttribute('disabled')
  }
  if (country.value == 1) {
    countryName.setAttribute('disabled', true)
  }
})
function validation() {
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let phone = document.getElementById('phone').value
  let genderMale = document.getElementById('inlineRadio1').checked
  let genderFemale = document.getElementById('inlineRadio2').checked
  let country = document.getElementById('country')
  let countryName = document.getElementById('country_name')
  if (name.length == 0) {
    return false
  }
  if (email.length == 0) {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let emailValidate = re.test(String(email).toLowerCase())
    if (emailValidate == false) {
      return false
    }
  }
  if (phone.length < 11) {
    return false
  }
  if (genderMale == false && genderFemale == false) {
    return false
  }
  if (country.value == null) {
    return false
  }
  if (country.value == 2) {
    if (countryName.length == 0) {
      return false
    }
  } else {
    return true
  }
}

document.getElementById('submit_btn').addEventListener('click', (e) => {
  e.preventDefault()
  if (!validation()) {
    return false
  }
  console.log('validate successfull')
})
