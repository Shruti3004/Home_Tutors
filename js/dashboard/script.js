// Bar Graph

const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Income/Expense",
            data: [12, 19, 3, 5, 10, 7, 5, 19, 23, 5, 10, 3],
            backgroundColor: [
                "#59CB94", "#3C79FA", "#59CB94", "#3C79FA", "#59CB94", "#3C79FA", "#59CB94", "#3C79FA", "#59CB94", "#3C79FA", "#59CB94", "#3C79FA", "#59CB94"]
        },
    ],
};
const barConfig = {
    type: "bar",
    data: barData,
    options: {
        legend: {
            labels: {
                fontColor: "#ffffff",
                fontSize: 16,
                fontFamily: 'Avenir-regular',
            },
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "#ffffff",
                        fontSize: 14,
                        fontFamily: 'Avenir-regular',
                    },
                },
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: "#ffffff",
                        fontSize: 14,
                        fontFamily: 'Avenir-regular',
                    },
                },
            ],
        },
    },
};
let myChart = document.getElementById("myChart").getContext("2d");
let barChart = new Chart(myChart, barConfig);


// Doughnut

const doughnutData = {
    labels: ["Physics", "Chemistry", "Mathematics"],
    datasets: [
        {
            label: "Courses",
            data: [12, 19, 11],
            backgroundColor: ["#E9922C", "#3C79FA", "#59CB94"],
            borderColor: ["#ffffff"],
            borderWidth: 3,
        },
    ],
};
const doughnutConfig = {
    type: "doughnut",
    data: doughnutData,
    options: {
        legend: {
            labels: {
                fontColor: "#ffffff",
                fontSize: 16,
                fontFamily: 'Avenir-regular',
            },
        }
    },
};

let myChart2 = document.getElementById("myChart2").getContext("2d");
let doughnutChart = new Chart(myChart2, doughnutConfig);
