const countrySelect = document.getElementById("countrySelect");
const phoneInput = document.getElementById("phoneInput");

const phoneFormats = {
    US: "+1 (555) 000-0000",
    UK: "+44 7700 900000",
    EG: "+20 10 1234 5678",
};

countrySelect.addEventListener("change", () => {
    phoneInput.placeholder = phoneFormats[countrySelect.value];
    phoneInput.value = ""; 
});
