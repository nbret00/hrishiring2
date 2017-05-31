/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//            $("#searchNameForm").ready(function (data) {

$(document).ready(function () {

    
    function getSearchFormData() {
        var person = JSON.stringify({
            firstName: $("#FirstName").val(),
            lastName: $("#LastName").val()
        });
        return person;
    }

    $("#searchResultSelCan").click(function () {
        console.log("value selected : " + $(this).val() + "----" + updateJobsID);
        if ($(this).val() == "") {
        } else {
            var r = confirm("This will add a match to the job. - " + $("#searchResultSelCan option:selected").text());
            if (r) {
                var endorsement = JSON.stringify({
                    companyIdclient: {idclient: updateCompanyID},
                    personidPerson: {idPerson: $(this).val()},
                    jobIdjobpk: {idjobpk: updateJobsID}
                })

                addEndorsement(endorsement, function () {
                    showAlert("Candidate has been added to this job opening.");
                    $(document).find("#searchResultSelCan").empty();
                })

            } else {
                console.log("this is false");
            }
        }
    })

    function getSearchFormData() {
        var person = JSON.stringify({
            firstName: $("#FirstName").val(),
            lastName: $("#LastName").val(),
            name: $("#FullName").val()
        });
        return person;
    }
    
    $("#searchNamesFormGen").submit(function (event) {
        event.preventDefault();

        $(document).find("#searchResultSelCan").empty();
        var foreachresRecCol = $(document).find("#searchResultSelCan");
        searchByPersonNames(getSearchFormData(), function (data) {
            if ($(data).find("searchResult").size() > 0) {
                $(data).find("searchResult").each(function () {
                    console.log("data");
                    foreachresRecCol.append("<option value='" + $(this).find("personID").text() + "'>" + $(this).find("name").text() + "</option>");//add(option);
                });
                $("#myModal").modal();
            } else {
                    foreachresRecCol.append("<option>No result found.</option>");
            }
        });
    })

})