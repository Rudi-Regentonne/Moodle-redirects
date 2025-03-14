const elements = document.getElementsByName("search");
if (elements[0]) {
    const search = elements[0];
    search.focus(); // Setzt den Fokus auf das Eingabefeld
    search.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && search.value !== "") {
            const courseLink = document.querySelector('[data-region="course-content"] a').href;
            window.location.href = courseLink;

        }
    });
}
