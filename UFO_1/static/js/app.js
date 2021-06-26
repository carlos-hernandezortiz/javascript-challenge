// from data.js
var tableData = data;

// YOUR CODE HERE!

var tableBody = d3.select("tbody")


function appender(data) {
    data.forEach(function (record) {

        var row = tableBody.append("tr");
        Object.entries(record).forEach(function ([key, value]) {

            var innerRecord = row.append("td").text(value);
        });
    });
};

appender(tableData);


var button = d3.select("#filter-btn");

button.on("click", function () {
    var inputDate = d3.select(".form-control").property("value");
    if (inputDate) {
        var filteredUFO = tableData.filter(ufo => ufo.datetime === inputDate);
        tableBody.html("");
        appender(filteredUFO);
    }
    else{
        appender(tableData);
    };
});