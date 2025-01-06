function toggleInput(selected) {
    const emailDiv = document.getElementById("emailInput");
    const phoneDiv = document.getElementById("phoneInput");

    if (selected === "email") {
        emailDiv.style.display = "block";
        phoneDiv.style.display = "none";
    } else if (selected === "phone") {
        phoneDiv.style.display = "flex";
        emailDiv.style.display = "none";
    }
}