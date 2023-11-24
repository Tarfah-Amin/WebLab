function func() {
    // Get form element values using DOM methods
    var firstName = document.forms["form1"]["firstname"].value;
    var lastName = document.forms["form1"]["lastname"].value;
    var gender = document.querySelector('input[name="Gender"]:checked').value;
    var birthday = document.forms["form1"]["birthday"].value;
    var email = document.forms["form1"]["Email"].value;
    var telephone = document.forms["form1"]["Telephone"].value;
    var targetDepartment = document.forms["form1"]["Target department"].value;

    var messageTypes = document.getElementsByName("Select the type of message");
    var selectedTypes = [];
    messageTypes.forEach(function(type) {
        if (type.checked) {
            selectedTypes.push(type.value);
        }
    });
    var message = document.forms["form1"]["Message"].value;

    var info = "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Gender: " + gender + "\n" +
        "Birthday: " + birthday + "\n" +
        "Email: " + email + "\n" +
        "Telephone: " + telephone + "\n" +
        "Target Department: " + targetDepartment + "\n" +
        "Message Types: " + selectedTypes.join(", ") + "\n" +
        "Message: " + message;

    alert(info);
}
