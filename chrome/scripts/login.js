
const interval = setInterval(login, 200);

setTimeout(() => {
    clearInterval(interval);
}, 5000);  // nach 5 Sekunden wird aufgehört zu versuchen sich einzuloggen


function login ()
{
    const usernameField = document.getElementById("username");
    const submitButton = document.getElementById("submit_button");
    usernameField.focus();
    if (usernameField.value !== "") {
        console.log("Auto login");
        submitButton.click();
        clearInterval(interval);
    } 
}