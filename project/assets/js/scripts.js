window.onload = function() {

    // Botão copia link e troca texto
    
    document.getElementById("links_btn").onclick = function(click) {
        click.preventDefault();
        let buttonText = document.getElementById("links_btn").innerHTML;
        if (buttonText == "Encurtar") {
            document.getElementById("links_text").value = "http://chr.dc/xyzxyz";
            document.getElementById("links_text").style.color = "white";
            document.getElementById("links_btn").innerHTML = "Copiar";
            document.getElementById("links_close").style.display = "inline-block";
    
        } else {
            let copyText = document.getElementById("links_text");
            copyText.select();
            document.execCommand('copy');
            document.getElementById("links_text").value = "";
            document.getElementById("links_text").style.color = "#ff6e14";
            document.getElementById("links_btn").innerHTML = "Encurtar";
            document.getElementById("links_close").style.display = "none";
        };
    };
    
    // Botão "X" para apagar link
    
    document.getElementById("links_close").onclick = function() {
        document.getElementById("links_text").value = "";
        document.getElementById("links_text").style.color = "#ff6e14";
        document.getElementById("links_btn").innerHTML = "Encurtar";
        document.getElementById("links_close").style.display = "none";
    };
    
    
    // function para construir a lista em html
    function listTemplate(item) {
        return `
        <li class="top5_links_item">
        <a href="${item.url}" target="_blank" class="top5_links_item_link">${item.shortUrl}</a>
        <p class="top5_links_item_number">${item.hits}</p>
        </li>
        `;
    }
    
    // function para ordenar e pegar os 5 maiores hits
    function list(dataObj) {
        dataObj.sort(function(a, b) {
            return b.hits - a.hits;
        });
        let top5 = dataObj.slice(0, 5);
        let listItem = top5.map(listTemplate).join('');
        return listItem;
    }
    
    
    // Consumindo JSON para top 5
    let obj = new XMLHttpRequest();
    
    function request() {
    
        obj.open('GET', 'assets/js/urls.json', true);
    
        obj.onload = function() {
            if (this.status == 200) {
                const listObj = JSON.parse(this.responseText);
                
                document.getElementById('list').innerHTML = list(listObj);
            } // se houver não carregar corretamente JSON ficará o texto de marcação padrão que estava no layout
        }
        obj.send();
    }
    
    request();
};
    