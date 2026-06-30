const form = document.getElementById("signupForm");
const names = document.getElementById("name");
const city = document.getElementById("city");
form.addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(names.value);
    console.log(city.value)


})