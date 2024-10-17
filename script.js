// Create form
const form = document.getElementById('goodStudentForm');

// function for empty name box
function isNotEmpty(input) {
    return input.value.trim() !== '';
    }

// function for checked options left unchecked
function hasCheckedOption(check) {
    const checkedOptions = document.getElementsByName(check);
    for (let i = 0; i < checkedOptions.length; i++) {
        if (checkedOptions[i].checked) {
            return true;
        }
    }
    return false;
}
 
// function for dropdown menu unselected
function isSelected(dropdown) {
    return dropdown.value !== '';
}

// Add event listener to the form evaluate button
form.addEventListener('submit', (event) => {
    // Prevent default submit and refresh
    event.preventDefault();
    
    // Name entered
    const nameBox = document.getElementById('name');
    
    // Validate if left blank
    let isValid = true;
    if (!isNotEmpty(nameBox)) {
        alert('Name is left blank');
        isValid = false;
        return;
    }
    
    // Validate checked options
    if (!hasCheckedOption('study-amount')) {
        alert("Please select at least one checkbox")
        isValid = false;
    }
    
    // dropdown menu selected
    const dropdown = document.getElementById('alarm');
    
    // Validate dropdown
    if (!isSelected(dropdown)) {
        alert("Please select from dropdown menu");
        isValid = false;
    }
    
    // Prevents submission if any invalid parts of form
    if (isValid) {
        form.submit();
    }
});