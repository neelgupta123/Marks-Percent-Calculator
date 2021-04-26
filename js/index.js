function percentage() {
    var marks = document.getElementById("box").value
    var total = document.getElementById("tm").value

    var percentage = (marks / total) * 100;

    document.write(percentage + " %");
}