$(document).ready(function(){
    console.log("getApplicantNameFromStorage() === '" + getApplicantNameFromStorage() + "'");

    var surveyNameField = $("h2:contains('Your Name')").siblings().filter(":input");

    surveyNameField.val(getApplicantNameFromStorage());

    surveyNameField.change(function(){
        updateApplicantName(surveyNameField);
    });
    
});
