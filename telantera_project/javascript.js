// code for dropDownList
var dropDownList = document.getElementById("dropdown1");

dropDownList.addEventListener("click", showDropDownContent);
function showDropDownContent() {
  var dropDownListContent = document.getElementById("dropdownlist_content");

  if (dropDownListContent.style.visibility === "hidden") {
    dropDownListContent.style.visibility = "visible";
  } else {
    dropDownListContent.style.visibility = "hidden";
  }
}
//  Code For DropdownMenu in Small Screen
function toggleDropdown() {
  var dropdownMenu = document.getElementById("myDropdown");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

// Submit Form
document.getElementById("myForm").addEventListener("submit", function (event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var checkbox = document.getElementById("checkbox").checked;

  if (name && email && message && checkbox) {
    // Submit form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Checkbox:", checkbox);
  } else {
    alert("Please fill the requir data ");
  }
});
