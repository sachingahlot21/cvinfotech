const handleMarkAllRead = () => {

    var h1 = document.getElementById("not1DivContent")
    var h2 = document.getElementById("not1DivContent2")
    var h3 = document.getElementById("not1DivContent3")
    var msgNo = document.getElementById("msgNo")

    h1.style.backgroundColor = 'white'
    h2.style.backgroundColor = 'white'
    h3.style.backgroundColor = 'white'
    msgNo.style.display = 'none'
}

var read1 = 'false';
var read2 = 'false';
var read3 = 'false';

document.getElementById('not1DivContent').addEventListener('click', function () {
    
    if (read1 === 'false') {
        var msgNo = document.getElementById("msgNo").innerHTML
        // alert(msgNo)
        if (msgNo == 1) {
            var msgNo = document.getElementById("msgNo")
            var h1 = document.getElementById("not1DivContent")
            h1.style.backgroundColor = 'white'
            msgNo.style.display = 'none'
            read1 = 'true'
        }
        else {
            var h1 = document.getElementById("not1DivContent")
            var msgNo = document.getElementById("msgNo").innerHTML
            var newNo = msgNo - 1;
            document.getElementById("msgNo").innerHTML = newNo
            h1.style.backgroundColor = 'white'
            read1 = 'true'
        }
    }
})

document.getElementById('not1DivContent2').addEventListener('click', function () {

    if (read2 === 'false') {
        var msgNo = document.getElementById("msgNo").innerHTML
        if (msgNo == 1) {
            var msgNo = document.getElementById("msgNo")
            var h2 = document.getElementById("not1DivContent2")
            h2.style.backgroundColor = 'white'
            msgNo.style.display = 'none'
            read2 = 'true'
        }
        else {
            var h2 = document.getElementById("not1DivContent2")
            var msgNo = document.getElementById("msgNo").innerHTML
            var newNo = msgNo - 1;
            document.getElementById("msgNo").innerHTML = newNo
            h2.style.backgroundColor = 'white'
            read2 = 'true'
        }

    }

})

document.getElementById('not1DivContent3').addEventListener('click', function () {

    if (read3 === 'false') {

        var msgNo = document.getElementById("msgNo").innerHTML
        if (msgNo == 1) {
            var msgNo = document.getElementById("msgNo")
            var h3 = document.getElementById("not1DivContent3")
            h3.style.backgroundColor = 'white'
            msgNo.style.display = 'none'
            read3 = 'true'
        }
        else {


            var h3 = document.getElementById("not1DivContent3")
            var msgNo = document.getElementById("msgNo").innerHTML
            var newNo = msgNo - 1;
            document.getElementById("msgNo").innerHTML = newNo
            h3.style.backgroundColor = 'white'
            read3 = 'true'
        }


    }
})

var msgStatus = 'false'
document.getElementById('not1DivContent4').addEventListener('click' , function(){
    if(msgStatus === 'false' ){
        var not4msg =  document.getElementById('not4MsgDiv')
        not4msg.style.display = 'flex'
        msgStatus = 'true'
    }
   else{
    var not4msg =  document.getElementById('not4MsgDiv')
    not4msg.style.display = 'none'
    msgStatus = 'false'
   }

})