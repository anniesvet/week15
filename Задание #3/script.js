function changeTheme() {

    switch(document.getElementById("theme").value) {
        case "white":
            document.body.style.background = "#f3f3f3";
            break;
        case "grey":
            document.body.style.background = "grey";
            break;
        case "beige":
            document.body.style.background = "#D2B48C";
            break;
    }

}