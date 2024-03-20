// console.log(localStorage.getItem('userDetailsList'))
//SWEFF
let uDetails = localStorage.getItem('userDetailsList')
let parsedDetails = JSON.parse(uDetails);
const dataArray = Array.isArray(parsedDetails) ? parsedDetails : [parsedDetails];

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

    var deleteBtn = document.createElement('deleteBtn')
    deleteBtn.id = "deleteBTN"

    var editBtn = document.createElement('editBtn')
    editBtn.id = "editBTN"

    cardDiv.appendChild(idDiv)
    cardDiv.appendChild(nameDiv)
    cardDiv.appendChild(emailDiv)
    cardDiv.appendChild(subjectDiv)
    cardDiv.appendChild(projectDiv)
    cardDiv.appendChild(deleteBtn)
    cardDiv.appendChild(editBtn)

    var fullName = document.createTextNode(`${dataArray[i].FullName}`)
    var userId = document.createTextNode(`${dataArray[i].id}`)
    var userEmail = document.createTextNode(`${dataArray[i].E_Mail}`)
    var userSub = document.createTextNode(`${dataArray[i].Selected_Subject}`)
    var userProject = document.createTextNode(`PROJECT : ${dataArray[i].Project_Brief}`)
    var dBtnText = document.createTextNode('DELETE')
    var eBtnText = document.createTextNode('EDIT')

    nameDiv.appendChild(fullName)
    idDiv.appendChild(userId)
    emailDiv.appendChild(userEmail)
    subjectDiv.appendChild(userSub)
    projectDiv.appendChild(userProject)
    deleteBtn.appendChild(dBtnText)
    editBtn.appendChild(eBtnText)

    deleteBtn.addEventListener('click', function () {
        let z = i;
        deleteItem(z)
    })

    editBtn.addEventListener('click', function () {
        let k = i;
        editItem(k)
    })


    document.getElementById("userDetailsDiv").appendChild(cardDiv);
}

const deleteItem = (i) => {
    var userDetailsList;
    if (localStorage.getItem('userDetailsList') == null) {
        userDetailsList = []
    }
    else {
        userDetailsList = JSON.parse(localStorage.getItem('userDetailsList'))
    }

    userDetailsList.splice(i, 1)
    localStorage.setItem("userDetailsList", JSON.stringify(userDetailsList))

    window.location.reload();
}

const handleModal = () => {
    document.getElementById('editModal').style.display = "none"
}

const editItem = (i) => {
    document.getElementById('editModal').style.display = 'flex'

    document.getElementById('brief2').value = dataArray[i].Project_Brief
    document.getElementById('fullname2').value = dataArray[i].FullName
    document.getElementById('email2').value = dataArray[i].E_Mail
    // document.getElementById('phoneno2').value = dataArray[i].PhoneNo

    var userId = dataArray[i].id
    console.log(userId)
}




const handleEditedData = (event) => {

    // event.preventDefault
    // const phonenumber = document.getElementById('pnumber').value;
    const fullname = document.getElementById('fullname2').value;
    const email = document.getElementById('email2').value;
    const brief = document.getElementById('brief2').value;
    const myList = document.getElementById('subjects2')
    const selectedSubject = myList.options[myList.selectedIndex].text;

    //  validateMail = "false"
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        console.log("valid mail : checked!")
        return re.test(email);
    }

    submitOk = "true"

    // if (phonenumber.length > 10 || !phonenumber) {
    //     alert("Not Valid Number");
    //     submitOk = "false"
    // }

    if (selectedSubject == 'Select Subject') {
        alert("Select Subject")
        submitOk = "false"
    }

    if (!email || validateEmail(email) == false) {
        alert("Enter Valid E-Mail");
        submitOk = "false"
    }
    if (!fullname) {
        alert("Enter Full Name");
        submitOk = "false"
    }

    if (!brief) {
        alert("Enter Project Brief");
        submitOk = "false"
    }

    if (submitOk == 'false') {
        event.preventDefault()
        console.log("un success!")
        return false
    }

    else {

        var userDetailsList;
        if (localStorage.getItem('userDetailsList') == null) {
            userDetailsList = []
        }
        else {
            userDetailsList = JSON.parse(localStorage.getItem('userDetailsList'))
        }
        const editedUser = {
            id: userId,
            FullName: fullname,
            // PhoneNo: phonenumber,
            E_Mail: email,
            Selected_Subject: selectedSubject,
            Project_Brief: brief
        }
        // users = users.map(u => u.id !== editedUser.id ? u : editedUser);
        userDetailsList = userDetailsList.map( u => u.id != editedUser.id ? u : editedUser )

        // userDetailsList.push(userDetails)

        localStorage.setItem("userDetailsList", JSON.stringify(userDetailsList))

    }

}