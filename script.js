document.addEventListener("DOMContentLoaded", () => {

// Fade transition for page navigation
document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if (
        href &&
        href.endsWith(".html")
    ) {

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
```

});

// Function callable from HTML
function highlightPublication(id) {

```
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

