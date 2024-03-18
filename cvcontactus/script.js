
console.log("started")

console.log(userDetailsList)
console.log("ending")
console.log("ending")
// userDetailsList.push('no')
// userDetailsList.push('no')

console.log(userDetailsList)

function handleForm(event) {
    const phonenumber = document.getElementById('pnumber').value;
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const brief = document.getElementById('brief').value;
    const myList = document.getElementById('subjects')
    const selectedSubject = myList.options[myList.selectedIndex].text;

    //  validateMail = "false"
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        console.log("valid mail : checked!")
        return re.test(email);
    }

    submitOk = "true"

    if (phonenumber.length > 10 || !phonenumber) {
        alert("Not Valid Number");
        submitOk = "false"
    }

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
        // const userDetails = {
        //     'FullName': fullname,
        //     "PhoneNo ": phonenumber,
        //     'E-Mail': email,
        //     'Selected Subject': selectedSubject,
        //     'Project Brief': brief
        // }
        // let formData = new FormData(form)
        // let formObj = {}
        // formData.forEach(
        //     function (value , key) {
        //         formObj[key] = value;
        //     }
        // );
        // console.log(formObj)
        // alert("Successfully Submited !")
        event.preventDefault()

        var userDetailsList = [];
        // const userDetailsList = Array.isArray(userDetailsList) ? userDetailsList : [userDetailsList];

        const userDetails = {
            id: Date.now(),
            FullName: fullname,
            PhoneNo: phonenumber,
            E_Mail: email,
            Selected_Subject: selectedSubject,
            Project_Brief: brief
        }

        const userDetailsJSON = userDetails;
        userDetailsList.push(userDetailsJSON)
        console.log(userDetailsList)
        localStorage.setItem("userDetailsList", JSON.stringify(userDetailsList))
        console.log(userDetailsList[0])

        //window.location.href = "http://127.0.0.1:5500/cvinfotech/cusbackend/index.html";
        //window.location.replace("http://127.0.0.1:5500/cvinfotech/cusbackend/index.html");
    }
}

localStorage.clear();
// console.log(typeof (userDetailsList))

function handleNavlist() {
    const btn = document.getElementById('menuiconbtn')
    // menudivid
    const menudiv = document.getElementById('menudivid')
    menudiv.style.display = 'flex'
}

function closeMenuDiv() {
    const menudiv = document.getElementById('menudivid')
    menudiv.style.display = 'none'
}