// ================= DASHBOARD COUNTERS =================

const counters =
document.querySelectorAll(".stat-card p");

counters.forEach(counter => {

    const target =
    parseInt(counter.innerText);

    let current = 0;

    const increment =
    Math.ceil(target / 40);

    function updateCounter(){

        if(current < target){

            current += increment;

            if(current > target){
                current = target;
            }

            counter.innerText =
            current;

            requestAnimationFrame(
                updateCounter
            );
        }
    }

    updateCounter();

});


// ================= MODULE CARD HOVER EFFECT =================

const moduleCards =
document.querySelectorAll(".module-card");

moduleCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        ()=>{

            card.style.boxShadow =
            "0 0 25px rgba(201,168,76,.18)";
        }
    );

    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.boxShadow =
            "none";
        }
    );

});


// ================= CHARACTER FLOAT EFFECT =================

const character =
document.querySelector(
".character-box img"
);

let angle = 0;

function floatCharacter(){

    angle += 0.02;

    const y =
    Math.sin(angle) * 10;

    character.style.transform =
    `translateY(${y}px)`;

    requestAnimationFrame(
        floatCharacter
    );
}

floatCharacter();

// ================= CHART INITIALIZATION =================
let myChart;
function initChart() {
    const canvas = document.getElementById("libraryChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (myChart) myChart.destroy();

    const isAr = (localStorage.getItem('el-lang') || 'en') === 'ar';
    const labels = isAr 
        ? ["يناير", "فبراير", "مارس", "أبريل", "مايو"]
        : ["Jan", "Feb", "Mar", "Apr", "May"];

    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: isAr ? "الكتب" : "Books",
                    data: [20, 45, 60, 85, 100],
                    borderColor: "#c9a84c",
                    tension: .4
                },
                {
                    label: isAr ? "الطلبات" : "Orders",
                    data: [10, 30, 50, 70, 85],
                    borderColor: "#e8c97a",
                    tension: .4
                },
                {
                    label: isAr ? "الأعضاء" : "Members",
                    data: [5, 20, 40, 55, 70],
                    borderColor: "#f7edd8",
                    tension: .4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { 
                    display: true,
                    labels: {
                        color: document.body.classList.contains('light-mode') ? '#5d4037' : '#e8c97a'
                    }
                }
            },
            scales: {
                y: {
                    ticks: { color: document.body.classList.contains('light-mode') ? '#5d4037' : '#e8c97a' }
                },
                x: {
                    ticks: { color: document.body.classList.contains('light-mode') ? '#5d4037' : '#e8c97a' }
                }
            }
        }
    });
}

// ================= HOOKS =================
function onLanguageChange() {
    initChart();
}

function onThemeChange() {
    initChart();
}

// Initialize
initChart();