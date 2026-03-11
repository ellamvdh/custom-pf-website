document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".buttons-project");
    const projects = document.querySelectorAll(".div1");

    if (buttons.length > 0 && projects.length > 0) {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                buttons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                const filter = button.dataset.name;

                projects.forEach(project => {
                    const imgElement = project.querySelector(".project-img");
                    if (imgElement) {
                        const tag = imgElement.dataset.name;
                        if (filter === "all" || tag === filter) {
                            project.style.display = "block";
                        } else {
                            project.style.display = "none";
                        }
                    }
                });
            });
        });
    }

    // --- Scroll Reveal Animation Logic ---
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once it has animated in
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});