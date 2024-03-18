// console.log(localStorage.getItem('userDetailsList'))
let uDetails = localStorage.getItem('userDetailsList')
console.log(uDetails)
console.log(typeof (uDetails))
let parsedDetails = JSON.parse(uDetails);
const dataArray = Array.isArray(parsedDetails) ? parsedDetails : [parsedDetails];
// udArray.push(parsedDetails)
// console.log(udArray[0])
// console.log(parsedDetails
// console.log(udArray)
// console.log("end")
// udArray.push(parsedDetails)
// const data = [uDetails]
// console.log(typeof(parsedDetails))
// console.log(typeof(parsedDetails))
console.log(dataArray[0])
console.log(dataArray[1])
console.log(dataArray.length)

for (let i = 0; i < dataArray.length; i++) {
    var cardDiv = document.createElement(`carddiv`)
    cardDiv.id = "cardDivid"

    var idDiv = document.createElement(`idDiv`)
    idDiv.id = "idDivid"
    var nameDiv = document.createElement(`nameDiv`)
    nameDiv.id = "nameDivid"
    var emailDiv = document.createElement(`emailDiv`)
    emailDiv.id = "emailDivid"
    var subjectDiv = document.createElement(`subDiv`)
    subjectDiv.id = "subjectDivid"
    var projectDiv = document.createElement(`projectDiv`)
    projectDiv.id = "projectDivid"

    
    cardDiv.appendChild(idDiv)
    cardDiv.appendChild(nameDiv)
    cardDiv.appendChild(emailDiv)
    cardDiv.appendChild(subjectDiv)
    cardDiv.appendChild(projectDiv)

    var fullName = document.createTextNode(`Name : ${dataArray[i].FullName}`)
    var userId = document.createTextNode(`ID: ${dataArray[i].id}`)
    var userEmail = document.createTextNode(`Email : ${dataArray[i].E_Mail}`)
    var userSub = document.createTextNode(`Selected Subject : ${dataArray[i].Selected_Subject}`)
    var userProject = document.createTextNode(`Project : ${dataArray[i].Project_Brief}`)

    nameDiv.appendChild(fullName)
    idDiv.appendChild(userId)
    emailDiv.appendChild(userEmail)
    subjectDiv.appendChild(userSub)
    projectDiv.appendChild(userProject)

    // var nameDivSpan = document.getElementById("nameDivSpan")
    // var id = document.getElementById('idDivSpan')

    // id.innerHTML = `ID: ${userId.nodeValue}`
    // nameDivSpan.innerHTML = `Name: ${fullName.nodeValue}`
    // cardDiv.appendChild(nameDivSpan)


    document.getElementById("userDetailsDiv").appendChild(cardDiv);
}

// var cardDiv = document.createElement('carddiv')
// var fullName = document.createTextNode(dataArray[0].id)
// cardDiv.appendChild(fullName)

// document.getElementById("userDetailsDiv").appendChild(cardDiv);
// document.body.appendChild(div);

// console.log(parsedDetails.id)

// udArray.push(parsedDetails)
// console.log("s")
// console.log(udArray)
// var arr = [];
// // console.log(arr);
// arr.push("h");
// arr.push("i")
// console.log(arr)
