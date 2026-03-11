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

    // Princess Mouse Particles
    const sparkles = ['✨', '💖', '🎀', '🌸', '👑'];
    
    document.addEventListener('mousemove', function(e) {
        // Only spawn a particle every few pixels to prevent lag
        if (Math.random() < 0.2) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('princess-sparkle');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            
            // Randomize position slightly around the cursor
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;
            
            sparkle.style.left = (e.clientX + offsetX) + 'px';
            sparkle.style.top = (e.clientY + offsetY) + 'px';
            
            document.body.appendChild(sparkle);
            
            // Remove the sparkle after the animation finishes
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    });

});