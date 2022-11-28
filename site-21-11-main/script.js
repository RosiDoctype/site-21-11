const cardholder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.querySelector(".cardholder-display");
const numOnCard = document.querySelector(".card-number-display");
const expMM = document.querySelector(".expiry-month-display");
const expYY = document.querySelector(".expiry-year-display");
const cvcDisplay = document.querySelector(".cvc-display");
const thankYou = document.getElementById("thank-you-header");
const thankYouSection = document.getElementById("thank-you");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("myForm");
const expiryErrorMsg = document.getElementById("expiry-error");



function inputName() {
    nameOnCard.innerHTML = cardholder.value;
    thankYou.innerHTML = `Thank You ${cardholder.value}`;
    if (nameOnCard.innerHTML == "") {
        nameOnCard.innerHTML = cardholder.placeholder;
    }
}

function inputCardNum() {
    let cardNumberInput = cardNumber.value;
    // Do not allow users to write invalid characters
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    // Split the card number is groups of 4
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
        formattedCardNumber = cardNumberSections.join(" ");
    }
    // If the formattedCardNumber is different to what is shown, change to 
    if (cardNumberInput !== formattedCardNumber) {
        cardNumber.value = formattedCardNumber;
    }
    numOnCard.innerHTML = cardNumber.value;
    if (cardNumber.value === "") {
        numOnCard.innerHTML = cardNumber.placeholder;
    }
}


function inputMM() {
    let formattedMM = expiry[0].value;
    formattedMM = formattedMM.substring(0, 2);
    expiry[0].value = formattedMM;
    if (expiry[0].value === "") {
        expMM.innerHTML = "00";
    } else {
        expMM.innerHTML = expiry[0].value;
    }
}

function inputYY() {
    let formattedYY = expiry[1].value;
    formattedYY = formattedYY.substring(0, 4);
    expiry[1].value = formattedYY;
    if (expiry[1].value === "") {
        expYY.innerHTML = "0000";
    } else {
        expYY.innerHTML = espiry[1].value;
    }
}

function inputCvc() {
    let formattedCvc = cvc.value;

    formattedCvc = formattedCvc.substring(0, 3);
    cvc.value = formattedCvc;
    if (cvc.value === "") {
        cvcDisplay.innerHTML = "000";
    } else {
        cvcDisplay.innerHTML = cvc.value;
    }
}

function massValidate() {
    function validateName() {
        let cardholderExp = /^[A-Z a-z]+$/;
        let errorMsg = document.getElementById("errorMsg");
        if (cardholder.value.match(cardholderExp)) {
            errorMsg.textContent = "";
        } else {
            errorMsg.innerHTML = "Please enter cardholder name!";
        }
    }
function validateCard() {
    let cardNumError = document.getElementById("card-num-error");
    if (cardNumber.value.lenght > 0 && cardNumber.value.lenght < 16) {
        cardNumError.innerHTML = "Wrong format!";
    } else if (cardNumber.value == "") {
        cardNumError.innerHTML = "Can't be blank!";
    } else {
        cardNumError.innerHTML = ""
    }
}
function validateExpíry() {

    let expMonth = /^(0[0-9]|1[1-2]) {2}$/;
    let expYear = /^[0-9][0-2]{4}$/;

    if (expiry[0].value.match(expMonth)) {
        expiryErrorMsg.innerHTML = "";
    } else if (
        expiry[0].value.match(expMonth) &&
        expiry[1].value.match(expYear)
    ) {
        expiryErrorMsg.innerHTML = "";
    } else if (expiry [0] == "") {
        expiryErrorMsg.innerHTML = "Can't be blank!";
    } else {
        expiryErrorMsg.innerHTML = "Wrong format!";
    }

    }

    function validateCvc() {
        let cvcErrorMsg = document.getElementById("error-cvc");
        let cvcExp = /^[0-9]{3}$/;
        if (cvc.value === "") {
            cvcErrorMsg.innerHTML = "Can't be blank!";
        } else if (cvc.value.match(cvcExp)) {
            cvcErrorMsg.innerHTML = "";
        } else {
            cvcErrorMsg.innerHTML = "Wrong format!";
        }
    }
    
}