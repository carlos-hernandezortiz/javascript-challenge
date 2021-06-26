// from data.js
var tableData = data;

// Select the table body 
var tableBody = d3.select("tbody");

function appender(data) {
    data.forEach(function (record) {

        var row = tableBody.append("tr");
        Object.entries(record).forEach(function ([key, value]) {

            var innerRecord = row.append("td").text(value);
        });
    });
};

appender(tableData);

// select the button and create function 
var button = d3.select("#filter-btn");

// filterDate
function filterDate(data, inputDate) {
    if (inputDate) {
        return data.filter(function (ufo) {
            if (ufo['datetime'] === inputDate) {
                return true;
            }
        })
    }
    else {
        return data;
    }
}

//filter City
function filterCity(data, inputCity) {
    if (inputCity) {
        return data.filter(function (ufo) {
            if (ufo['city'] === inputCity) {
                return true;
            }
        })
    }
    else {
        return data;
    }
}

//Filter State
function filterState(data, inputState) {
    if (inputState) {
        return data.filter(function (ufo) {
            if (ufo['state'] === inputState) {
                return true;
            }
        })
    }
    else {
        return data;
    }
}

// filter country
function filterCountry(data, inputCountry) {
    if (inputCountry) {
        return data.filter(function (ufo) {
            if (ufo['country'] === inputCountry) {
                return true;
            }
        })
    }
    else {
        return data;
    }
}

//filter shape
function filterShape(data, inputShape) {
    if (inputShape) {
        return data.filter(function (ufo) {
            if (ufo['shape'] === inputShape) {
                return true;
            }
        })
    }
    else {
        return data;
    }
}


button.on("click", function () {

    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    if (inputDate === '' &&
        inputCity === '' &&
        inputState === '' &&
        inputCountry === '' &&
        inputShape === '') {
        appender(tableData);
        return;
    }

    var cleanedData = filterDate(tableData, inputDate);
    cleanedData = filterCity(cleanedData, inputCity);
    cleanedData = filterState(cleanedData, inputState);
    cleanedData = filterCountry(cleanedData, inputCountry);
    cleanedData = filterShape(cleanedData, inputShape);

    tableBody.html("");

    appender(cleanedData);
});