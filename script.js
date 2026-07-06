let nameLists = ['Wai Kin', 'Steve', 'hary'];

let submitBtn = document.getElementById("submitBtn");
let showtext = document.getElementById("showText");
submitBtn.addEventListener("click", () => {
    let input = document.getElementById("nameInput").value.trim().toLowerCase();

    let found = nameLists.some(name => name.toLowerCase() === input);

    if (found) {
        showText.textContent = ("Matched!");
    } else {
        showText.textContent = ("Data not found");
    }
});