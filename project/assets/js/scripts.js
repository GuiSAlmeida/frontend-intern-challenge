// Botão simulando cópia do link

document.getElementById("links_btn").onclick = function() {
    let buttonText = document.getElementById("links_btn").innerHTML;
    if (buttonText == "Encurtar") {
        document.getElementById("links_text").value = "http://chr.dc/xyzxyz";
        document.getElementById("links_text").style.color = "white";
        document.getElementById("links_btn").innerHTML = "Copiar";
        document.getElementById("links_close").style.display = "inline-block";

    } else {
        document.getElementById("links_text").value = "";
        document.getElementById("links_text").style.color = "#ff6e14";
        document.getElementById("links_btn").innerHTML = "Encurtar";
        document.getElementById("links_close").style.display = "none";
    }
}

// Botão "X" para apagar link

document.getElementById("links_close").onclick = function() {
    document.getElementById("links_text").value = "";
    document.getElementById("links_text").style.color = "var(--secondary)";
    document.getElementById("links_btn").innerHTML = "Encurtar";
    document.getElementById("links_close").style.display = "none";
}