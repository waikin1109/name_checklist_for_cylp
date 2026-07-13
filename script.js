const API_URL = "https://script.google.com/macros/s/AKfycbz98B-WPaID73CgskBfFvutP7w2uiZvSnfTQh0Acc-u1HTFmywePEwIbHDzRIGTQhf_Xg/exec";

const submitBtn = document.getElementById("submitBtn");
const showText = document.getElementById("showText");
const nameInput = document.getElementById("nameInput");

submitBtn.addEventListener("click", async () => {

    const input = nameInput.value.trim();

    if (!input) {
        showText.textContent = "Please enter your phone number.";
        return;
    }

    showText.textContent = "Checking...";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
                input: input
            })
        });

        const result = await response.json();

        if (result.success) {
            showText.textContent = `Welcome, ${result.name.toUpperCase()}!`; 
            nameInput.value = "";
        } else {
            showText.textContent = result.message;
        }

    } catch (error) {
        console.log(error);
        showText.textContent = "User not found.";
    }
});
