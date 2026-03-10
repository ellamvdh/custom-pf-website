document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".buttons-project");
    const projects = document.querySelectorAll(".div1");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.name;

            projects.forEach(project => {

                const tag = project.querySelector(".project-img").dataset.name;

                if (filter === "all" || tag === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }

            });

        });
    });

});