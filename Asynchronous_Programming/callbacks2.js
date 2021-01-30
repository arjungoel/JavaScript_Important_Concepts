let employees = [{name: "Arjun", salary: 1000, organization: "Google"}, {name: "Aman", salary: 2000, organization: "Google"}, {name: "Harsh", salary: 3000,
organization: "Microsoft" }, {name: "Naman", salary: 4000, organization: "Facebook"}
]

let processEmployeesData = function(data, callback) {
    for(let i = 0; i < data.length; i++ ) {
        if(data[i].organization.toLowerCase() === "facebook" || "google") {
            if (typeof callback === "function") {
                callback(data[i])
            }
        }
    }
}

processEmployeesData(employees, function(emp) {
    if (emp.salary > 1000) {
        console.log(emp.name + " is a great software engineer!!")
    }
} )

let determineTotalSalary = function() {
    let total = 0,
    count = 0;
    processEmployeesData(employees, function(emp) {
        total = total + emp.salary;
        count++;
    });
    console.log("Total Salary in USD:" + " " + total +  " Count" + " " + count)
}

determineTotalSalary()