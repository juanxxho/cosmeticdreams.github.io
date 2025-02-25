document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".dropdown-menu");
    let timeout;

    dropdown.addEventListener("mouseenter", () => {
        clearTimeout(timeout); // Cancela el cierre si el cursor regresa
        menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
            if (!menu.matches(":hover")) {
                menu.style.display = "none";
            }
        }, 400); // Da 400ms antes de cerrar
    });

    menu.addEventListener("mouseenter", () => {
        clearTimeout(timeout); // No cerrar si el cursor entra al menú
        menu.style.display = "block";
    });

    menu.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
            menu.style.display = "none";
        }, 400);
    });
});
