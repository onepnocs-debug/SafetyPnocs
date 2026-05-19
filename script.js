// =========================================
// SAFETY SYSTEM SCRIPT (FINAL CLEAN VERSION)
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // CACHE ELEMENTS
    // ===============================
    const sections = document.querySelectorAll(".content-section");
    const links = document.querySelectorAll(".sidebar a");

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const routeDisplay = document.getElementById("route-display");


    // ===============================
    // SHOW SECTION
    // ===============================
    window.showSection = function (event, sectionId) {
        if (event) event.preventDefault();

        // hide all sections
        sections.forEach(sec => {
            sec.style.display = "none";
        });

        // show selected section
        const target = document.getElementById(sectionId);
        if (target) target.style.display = "block";

        // remove active class
        links.forEach(link => link.classList.remove("active"));

        // set active link
        if (event && event.currentTarget) {
            event.currentTarget.classList.add("active");
        }
    };


    // ===============================
    // ROUTE DATA
    // ===============================
    const routes = {
        earthquake: {
            title: "Earthquake Safety",
            text: "Drop, Cover, and Hold. Stay away from glass and heavy objects. Evacuate after shaking stops."
        },
        volcano: {
            title: "Volcano Safety",
            text: "Follow evacuation orders immediately. Wear masks and avoid low-lying areas."
        },
        landslide: {
            title: "Landslide Safety",
            text: "Avoid steep slopes during heavy rain and evacuate immediately when warning signs appear."
        },
        stormsurge: {
            title: "Storm Surge Safety",
            text: "Evacuate coastal areas immediately during typhoon warnings and move to elevated locations."
        },
        tsunami: {
            title: "Tsunami Preparedness",
            text: "After a strong earthquake, immediately move to higher ground away from shorelines."
        },
        dengue: {
            title: "Dengue Prevention",
            text: "Remove stagnant water and protect yourself from mosquito bites."
        },
        heat: {
            title: "Severe Heat Safety",
            text: "Stay hydrated, avoid direct sunlight, and rest in cool areas when possible."
        },
        "5s": {
            title: "5S Workplace Safety",
            text: "Sort, Set in Order, Shine, Standardize, and Sustain a safe workplace."
        },
        electrical: {
            title: "Electrical Safety",
            text: "Avoid overloaded outlets and report damaged wiring immediately."
        },
        motorcycle: {
            title: "Motorcycle Safety",
            text: "Always wear helmets and follow traffic rules to reduce accidents."
        },
        fire: {
            title: "Fire Safety",
            text: "Stay calm during fire incidents. Use fire exits, avoid elevators, and call emergency responders."
        },
        flood: {
            title: "Flood Safety",
            text: "Move to higher ground immediately and avoid walking through flood waters."
        },
        typhoon: {
            title: "Typhoon Preparedness",
            text: "Prepare emergency kits, monitor weather updates, and secure important belongings."
        },
        pandemic: {
            title: "Pandemic Safety",
            text: "Practice proper hygiene, wear protective equipment, and maintain physical distancing."
        }
    };


    // ===============================
    // SHOW ROUTE
    // ===============================
    window.showRoute = function (routeId) {
        if (!routeDisplay) return;

        const data = routes[routeId];

        routeDisplay.innerHTML = data
            ? `<h3>${data.title}</h3><p>${data.text}</p>`
            : `<h3>Select a Topic</h3><p>Click a button to view safety information.</p>`;
    };


    // ===============================
    // IMAGE MODAL
    // ===============================
    window.openModal = function (src) {
        if (!modal || !modalImg) return;

        modal.style.display = "flex";
        void modal.offsetWidth; // restart animation
        modal.classList.add("show");

        modalImg.src = src;
    };

    window.closeModal = function () {
        if (!modal || !modalImg) return;

        modal.classList.remove("show");

        setTimeout(() => {
            modal.style.display = "none";
            modalImg.src = "";
        }, 300);
    };


    // ===============================
    // MODAL EVENTS
    // ===============================
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                window.closeModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            window.closeModal();
        }
    });

});
