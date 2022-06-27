let http = new XMLHttpRequest();
http.open('get', 'https://mbairo.github.io/page/comunicados.json', true);
http.send();
http.onload = function(){ 
    // 4: pedido finalizado e resposta pronta // 200: "OK"
	if(this.readyState == 4 && this.status == 200){
		// Função PARSE para converter as StringsJson em um array javascript.
		let jsonComunicados = JSON.parse(this.responseText);
		// Variavel vazia para armazenar os layouts/cards
		let constroiCard = ""; 
        let indice = -1;
		// Add cartão na construtora em cada loop. *E para os cartões 0 e 5 add cor vermelha de alerta
		for(let item of jsonComunicados){ 
            indice = indice + 1;
            if (indice == 0 || indice == 4) {
                constroiCard += `
                    <div>
                        <div  class="card" style="background-color: rgb(234, 64, 64);">
                            <img class="card-img-top" src="${item.foto}" alt="${item.cardTitle}">
                            <p class="cardTitle">${item.cardTitle}</p>
                            <p class="cardText">${item.cardText}</p>
                            <a href="${item.linkSaibaMais}" class="linkSaibaMais btn btn-primary" target="_blank">Saiba mais...</a>
                        </div>
                    </div>                     				
			`;   
            } else {                 
			constroiCard += `
                <div>
                    <div  class="card">
                        <img class="card-img-top" src="${item.foto}" alt="${item.cardTitle}">
                        <p class="cardTitle">${item.cardTitle}</p>
                        <p class="cardText">${item.cardText}</p>
                        <a href="${item.linkSaibaMais}" class="linkSaibaMais btn btn-primary" target="_blank">Saiba mais...</a>
                    </div>   
                </div>                  				
			`;
            }
            console.log("Primeiro: ", constroiCard );
            // colocar aqui o indice " indice = indice + 1;" e mudar ele para ZERO. Para solucionar a falha no Json
		}
		document.querySelector(".cardsContainer").innerHTML = constroiCard;
        console.log("Ultimo: ", constroiCard );
	}
} 
