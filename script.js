let btn = document.querySelector("button")
let nameDisplay = document.querySelector("#fullname")
let titleDisplay = document.querySelector("#username")
let emailDisplay = document.querySelector("#email")
let cityDisplay =  document.querySelector("#city")
let photoDisplay = document.querySelector("#avatar")

let url = "https://randomuser.me/api/"

btn.addEventListener("click", function(){
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let firstName = data.results[0].name.first
        let lastName = data.results[0].name.first
        let fullName = firstName + " " + lastName
        let title = data.results[0].name.title
        let email = data.results[0].email
        let city = data.results[0].location.city
        let photo =  data.results[0].picture.medium

        nameDisplay.innerText = fullName
        titleDisplay.innerText = title
        emailDisplay.innerText = email
        cityDisplay.innerText = city
        photoDisplay.src = photo
    })

    .catch(function(err){
        console.log(err)
    })
})