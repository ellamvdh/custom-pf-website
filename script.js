document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".buttons-project");
    const projects = document.querySelectorAll(".project-img");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            // 1️⃣ update welke knop active is
            buttons.forEach(btn => btn.classList.remove("active")); // verwijder active van alle knoppen
            button.classList.add("active"); // voeg active toe aan de geklikte knop

            // 2️⃣ filter projecten
            const filter = button.dataset.name;

            projects.forEach(project => {
                if (filter === "all" || project.dataset.name === filter) {
                    project.parentElement.style.display = "block";
                } else {
                    project.parentElement.style.display = "none";
                }
            });

        });
    });

});