document.addEventListener("DOMContentLoaded", () => {

    // Fade transition for page navigation
    document.querySelectorAll("a").forEach(link => {

        const href = link.getAttribute("href");

        if (href && href.endsWith(".html")) {

            link.addEventListener("click", e => {

                e.preventDefault();

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = href;
                }, 400);

            });

        }

    });

    // Highlight publication if page loads with hash
    if (window.location.hash) {

        const target = document.querySelector(window.location.hash);

        if (target) {

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                target.classList.add("highlight");

                setTimeout(() => {
                    target.classList.remove("highlight");
                }, 3000);

            }, 300);

        }

    }

    // ===== Gallery Slideshow =====
    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {

        let slideIndex = 0;

        function showSlide(index) {

            slides.forEach(slide => {
                slide.style.display = "none";
            });

            slides[index].style.display = "block";
        }

        window.changeSlide = function(step) {

            slideIndex += step;

            if (slideIndex >= slides.length) slideIndex = 0;
            if (slideIndex < 0) slideIndex = slides.length - 1;

            showSlide(slideIndex);
        };

        showSlide(slideIndex);

        setInterval(() => {
            changeSlide(1);
        }, 4000);

    }

});

// Function callable from HTML
function highlightPublication(id) {

    const publication = document.getElementById(id);

    if (!publication) return;

    publication.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    publication.classList.add("highlight");

    setTimeout(() => {
        publication.classList.remove("highlight");
    }, 3000);
}
