


$(document).ready(function () {

    checkCredential();

    var update_jobs_data = null;
    $.getScript("js/component/jobs/jobsnavbar.js");
    init();

    function init() {
        if (updateJobsID == "") {
            //do nothing this is a create new record
            $("#jobBut").text("Create New Job Opening");
        } else {
            //retrive
            $.ajax({
                type: 'GET',
                url: url_getJob + updateJobsID,
                success: function (data) {
                    update_jobs_data = data;
                    setFormData(data);
                }
            })
        }

        $('.date').datepicker({
            //defaultViewDate: { year: 1977, month: 04, day: 25 },
            todayBtn: "linked",
            autoclose: true,
            todayHighlight: true
        });
    }

    function setFormData(result) {
        $("#jobtitle").val($(result).find("title").text());
        $("#description_short").text($(result).find("description").text());
        $("#description_long").text($(result).find("descriptionLong").text());
        $("#qualification").val($(result).find("qualifications").text());
        $("#targetposition").val($(result).find("responsibility").text());
        $("#dateRecieved").val($(result).find("dateRecieved").text());
        $("#dateClosing").val($(result).find("closingDate").text());//todo
        $("#openPosition").val($(result).find("openPosition").text());
        $("#status").val($(result).find("status").text());
        $("#targetEndorse").val($(result).find("ptargetToEndorse").text());
        $("#assignedTo").val($(result).find("PAssignement").text());
        $("#targetMatch").val($(result).find("ptargetToMatch").text());
    }

    function getFormData() {
        var fd = JSON.stringify({
            title: $("#jobtitle").val(),
            description: $("#description_short").val(),
            descriptionLong: $("#description_long").val(),
            qualifications: $("#qualification").val(),
            responsibility: $("#targetposition").val(),
            dateRecieved: new Date($("#dateRecieved").val()),
            closingDate: new Date($("#dateClosing").val()),
            openPosition: $("#openPosition").val(),
            status: $("#status").val(),
            ptargetToEndorse: $("#targetEndorse").val(),
            PAssignement: $("#assignedTo").val(),
            ptargetToMatch: $("#targetMatch").val(),
            companyIdclient: {idclient: updateCompanyID}
        });
        console.log("form data:" + fd);
        return fd;
    }


    $("#jobForm").submit(function (event) {
        event.preventDefault();
        console.log(getFormData());
        if ($("#jobBut").text() == "Create New Job Opening") {
            $.ajax({
                type: 'POST',
                url: url_addJob,
                contentType: 'application/json',
                data: getFormData(),
                success: function (data) {
                    update_jobs_data = data;
                    setFormData(data);
                    $("#jsGrid").jsGrid("loadData").done(function () {
                    });
                    showAlert("Successfully created a new job for the selected company.");
                    $("#jobBut").text("Update");
                }
            })
        }//end of if
        if ($("#jobBut").text() == "Update") {

            event.preventDefault();
            //console.log(getFormData());
            $.ajax({
                type: 'POST',
                url: url_updateJob + updateJobsID,
                contentType: 'application/json',
                data: getFormData(),
                success: function (data) {
                    update_jobs_data = data;
                    $("#rem_container").load("htmlcomponents/jobs/jobdetail.html#", function () {
                        $.getScript("js/component/jobs/jobdetail.js");
                    });
                    showAlert("Updated the job successfully");
                }
            })
        }
    })




})


