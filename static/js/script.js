function detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

let celular = detectar_mobile();

function reload_pag(){
    document.location.reload(true);
}

function pesquisar(){

    var text = document.getElementById("pesquisa_text").value;

    list_content.innerHTML = "";
    pesq_prep();

    for(var i = 1; i < content.length; i++){

        if(content[i][0].toLowerCase().includes(text.toLowerCase()) || content[i][2].toLowerCase().includes(text.toLowerCase()) ){
            list_content.innerHTML += `
                <button class="card container-fluid p-1 text-left subtitle-manual" onclick="render_text_content_id(${i})">
                    ${content[i][0]}
                </button>
            `
        }
    }

}