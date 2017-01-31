const APPLICANT_NAME = "applicantName";

function isExpired(obj) {
    const ONE_HOUR = 3600000;
    now = new Date().getTime().toString();
    return ((now - obj.timestamp) < ONE_HOUR);
}

function getApplicantNameFromStorage() {
    var object = JSON.parse(localStorage.getItem(APPLICANT_NAME));

    if (object  && isExpired(object)) {
        console.log("Removing " + APPLICANT_NAME + " from localStorage.");
        localStorage.removeItem(APPLICANT_NAME);
        object = null
    }

    var returnVal = (object ? object.value : "");
    console.log("returnVal === " + returnVal);
    return returnVal;
}

function updateApplicantName(nameField) {
    var applicantName = {value: nameField.val(), timestamp: new Date().getTime()}
    localStorage.setItem(APPLICANT_NAME, JSON.stringify(applicantName));
}
