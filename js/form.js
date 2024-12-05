formData = { email: "", message: "" };

let userForm = document.querySelector(".feedback-form");
userForm.addEventListener("input", inputUpdater);
function inputUpdater(event){
    let targetElement = event.target
    let emailInput =  document.querySelector(".feedback-form input[type = 'email']");
    let messageInput = document.querySelector(".feedback-form textarea[name = 'message']")
    if(targetElement == emailInput || targetElement == messageInput){
        formData.email = (emailInput.value).trim();
        formData.message = (messageInput.value).trim();
    }
    localStorage.setItem("feedback-form-state",JSON.stringify(formData));

}

userForm.addEventListener("submit", formValidator);
function formValidator(event){
    event.preventDefault();  
    let userFormElements = userForm.elements;
    let userEmail = userFormElements["email"].value;
    let userMessage = userFormElements["message"].value

    if(userEmail == "" || userMessage == "")
        alert("Fill please all fields");
    else{
        console.log(formData);

        localStorage.clear();
        formData.email = "";
        formData.message = "";
        userForm.reset();
    }
}

window.addEventListener("load", dataLoader);
function dataLoader(){

    let JSONdata = localStorage.getItem("feedback-form-state");

    if(JSONdata!==null){
        let data = JSON.parse(JSONdata);
        document.querySelector(".feedback-form input[type = 'email']").value = data.email;
        formData.email = data.email;
        document.querySelector(".feedback-form textarea[name = 'message']").value = data.message;
        formData.message = data.message;
    }
}