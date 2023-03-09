
function switchTheme() {
    theme.setAttribute("data-theme", document.getElementById('themeSwitch').checked ? "light" : "dark");
}


let bugDescription = document.getElementById("bug_description");
let bugCharCount = document.getElementById("bug_char_count");
bugDescription.addEventListener("input", function (e) {
    bugCharCount.innerText = bugDescription.value.length;
});

async function sendBugReport() {
    var bugType = document.getElementById("bug_type").value;
    var bugDescription = document.getElementById("bug_description").value;
    var data = { "bug_type": bugType, "description": bugDescription };
    console.log("sending the bug...[" + bugType + ":" + bugDescription + "]")
    const response = await fetch(window.location.href + "api/bugreports", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    });
    return response.json();
}