function popup() {
    alert("pop!");
}

function ThanksDude() {
    var Ident = document.forms["Formation"]["Name"] // this mightve been the most tooth grinding thing so far, and it was that SIMPLE? 16-10-23
    var CheckEmail = document.forms["Formation"]["Email"]
    var CheckPW1 = document.forms["Formation"]["Password"]
    var CheckPW2 = document.forms["Formation"]["PasswordConfirm"]
    if (Ident.value == "") {
        alert("A name must be entered")
    }
    else if (Ident.value == "" ) {
        alert("Please fill all inputs")
    }
    else if (CheckEmail.value == "" ) {
        alert("Please fill all inputs")
    }
    else if (CheckPW1.value == "" ) {
        alert("Please fill all inputs") // making sure all the boxes get filled, annoying otherwise
    }
    else if (CheckPW2.value == "" ) {
        alert("Please fill all inputs")
    }
    else if (CheckEmail.value.indexOf('@') === -1) {
        alert("Please enter a valid email address")
    } 
    else if (CheckPW1.value != CheckPW2.value) {
        alert("the passwords should be the same")
    }
    else {
         alert('thanks ' + Ident.value); // We should probably get used to this.......... damn...... 16-10-23 So it turns out this was using HTML DOM befoe we'd even learnt what that was 17-10-23
         //console.log(Ident) 
    }
}

function AddToBasket() {
    
}

function ContactUs() {
    var Valid = document.forms["Contact"]["Mail"] 
    if (Valid.value.indexOf('@') === -1) {
        alert("Please enter a valid email address")
    } else {
        alert("Thank you for your message")
    }
}

