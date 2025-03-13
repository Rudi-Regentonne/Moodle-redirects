const links = document.querySelectorAll('a');
console.log(links);
links.forEach(link => {
    if (link.href === "https://moodle.dhbw.de/") {
        link.href = "https://moodle.dhbw.de?redirected=true";
    }});