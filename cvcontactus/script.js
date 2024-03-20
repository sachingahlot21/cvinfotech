
function handleForm(event) {
    event.preventDefault
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

        var userDetailsList;
        if (localStorage.getItem('userDetailsList') == null) {
            userDetailsList = []
        }
        else {
            userDetailsList = JSON.parse(localStorage.getItem('userDetailsList'))
        }
        const userDetails = {
            id: Date.now(),
            FullName: fullname,
            PhoneNo: phonenumber,
            E_Mail: email,
            Selected_Subject: selectedSubject,
            Project_Brief: brief
        }
        userDetailsList.push(userDetails)

        localStorage.setItem("userDetailsList", JSON.stringify(userDetailsList))

    }
    window.location.href="http://127.0.0.1:5500/cvinfotech/cusbackend/index.html";

}

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