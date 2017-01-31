$(document).ready(function(){
    var nameField = $("#name-field");
    nameField.change(function(){
        updateApplicantName(nameField);
    });
});
