let bill_heading = document.querySelector(".bill-heading");
let bill_amount = document.querySelector("#bill");
let tip = document.querySelectorAll(".flex input[type='radio']");
let user_tip = document.getElementById("tip-6");
let people_heading = document.querySelector(".people-heading");
let person_input = document.querySelector("#people");
let per_person_tip_amount = document.querySelector(".per-person-tip-amount");
let total_person_amount = document.querySelector(".total-person-amount");
let resetBtn = document.querySelector("button")
let tip_value = 0;
let tip_checked = false;

// this function check bill amount 
bill_amount.addEventListener("blur", billFunction);
bill_amount.addEventListener("input", billFunction);
bill_amount.addEventListener("change", billFunction);
function billFunction() {
    let has_span = bill_heading.querySelector("span")
    if (has_span) {
        has_span.remove();
    }

    if (bill_amount.value == "" || bill_amount.value == null) {
        let bill_error = document.createElement("span");
        bill_error.innerText = "can't be empty";
        bill_error.style.color = "red";
        bill_amount.style.border = "2px solid red";
        bill_heading.append(bill_error);
    } else if (bill_amount.value == 0 || bill_amount.value < 0) {
        let bill_error = document.createElement("span");
        bill_error.innerText = "can't be zero";
        bill_error.style.color = "red";;
        bill_amount.style.border = "2px solid red";
        bill_heading.append(bill_error);
    } else {
        bill_amount.style.border = "2px solid green";

    }


    // this function check tip amount 
}
tip.forEach(tip => {
    tip.addEventListener("click", () => {
        if(tip.checked ){
            tip_value = tip.value;
            tip_checked = true;
        }
    })
});

user_tip.addEventListener("change", () => {
        tip_value = user_tip.value
        tip_checked = true
    })

// this function check per person 
person_input.addEventListener("input", personFunction)
person_input.addEventListener("change", personFunction)
person_input.addEventListener("blur", personFunction)
function personFunction() {
    let person_error = people_heading.querySelector("span");
    if (person_error) {
        person_error.remove();
    }

    if (person_input.value == "" || person_input.value == null) {
        let errorMessage = document.createElement("span");
        errorMessage.innerText = "can't be empty";
        errorMessage.style.color = "red";
        person_input.style.border = "2px solid red";
        people_heading.append(errorMessage);

    } else if (person_input.value == 0||  person_input.value < 0) {
        let errorMessage = document.createElement("span");
        errorMessage.innerText = "can't be zero";
        errorMessage.style.color = "red";
        person_input.style.border = "2px solid red";
        people_heading.append(errorMessage);
    } else {
        person_input.style.border = "2px solid green";
    }

}

// this function calculate the tip 


person_input.addEventListener("input", () => {
    if (bill_amount.value == "" || bill_amount.value == null) {
        billFunction()
    }
    if (tip_value == 0 ) {
        // if someone does not want to give tip
        per_person_tip_amount.innerText = `$0.00` 
    } else {
        per_person_tip_amount.innerText = `$${tipAmount()}`
    }
    if(person_input.value == 0 || bill_amount.value == 0){
        total_person_amount.innerText = `$0.00`; 
    }else{
        total_person_amount.innerText = (`$${totalBill()}`)
    }
})

function tipAmount() {
    let per_personTip = ((bill_amount.value*tip_value)/(100*person_input.value)).toFixed(2)
    return per_personTip
}

function totalBill(){
    let totalBill = ((parseInt(bill_amount.value) + ((bill_amount.value)*(tip_value/100)))/person_input.value).toFixed(2)
    return totalBill
}

resetBtn.addEventListener("click", ()=>{
    per_person_tip_amount.innerText = `$0.00`; 
    total_person_amount.innerText = `$0.00`; 
})