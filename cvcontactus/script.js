function handleBtn() {


    const phonenumber = document.getElementById('pnumber').value;
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const brief = document.getElementById('brief').value;
    const myList = document.getElementById('subjects')
    const selectedSubject = myList.options[myList.selectedIndex].text;

    submitOk = "true"

    if (phonenumber.length > 10 || !phonenumber) {
        alert("Not Valid Number");
        submitOk = "false"
    }

    if (selectedSubject == 'Select Subject') {
        alert("Select Subject")
        submitOk = "false"
    }

    if (!email) {
        alert("Enter E-Mail");
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
    
    if(submitOk == 'false'){
        return false
    }
    else{
        const userDetails = {
           'FullName': fullname,
            "PhoneNo ": phonenumber,
            'E-Mail' : email,
            'Selected Subject' : selectedSubject,
            'Project Brief' : brief
        }
        console.log(userDetails)
    }



}