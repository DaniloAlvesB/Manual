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

    if(celular == false){
        var text = document.getElementById("pesquisa_text").value;

        list_content.innerHTML = "";
        pesq_prep();

        for(var i = 1; i < title2.length; i++){

            //Content
            var rel = ""
            if(title2[i][2] != 0){
                rel = content[title2[i][2]][2];
            }

            //Main title
            var main = "";
            if(title2[i][3] != 0){
                main = title1[title2[i][3]][0];
            }

            if(title2[i][0].toLowerCase().includes(text.toLowerCase()) || rel.toLowerCase().includes(text.toLowerCase()) ){
                if(main != ""){
                    list_content.innerHTML += `
                        <button class="card container-fluid p-1 text-left subtitle-manual" onclick="render_text_content_id(${i})">
                        ${main} >  <span class="fs-5" > ${title2[i][0]}</span>
                        </button>
                    `
                }else{
                    list_content.innerHTML += `
                        <button class="card container-fluid p-1 text-left subtitle-manual" onclick="render_text_content_id(${i})">
                        <span class="fs-5" > ${title2[i][0]}</span>
                        </button>
                    `
                }
            }
        }
    }else{
        var text = document.getElementById("pesquisa_text").value;
        text_content.innerHTML = `
            <h4>Exibindo resultados para "${text}"</h4>
            <hr>
        `
        for(var i = 1; i < title2.length; i++){

            //Content
            var act = title2[i][2]
            var rel = ""
            if(act != 0){
                rel = content[act][2];
            }

            //Main title
            act = title2[i][3]
            var main = "";
            if(act != 0){
                main = title1[act][0];
            }

            if(title2[i][0].toLowerCase().includes(text.toLowerCase()) || rel.toLowerCase().includes(text.toLowerCase()) ){
                if(main != ""){
                    text_content.innerHTML += `
                        <button class="card container-fluid p-1 text-left subtitle-manual" onclick="render_text_content_id(${i})">
                        ${main} >  <b class="fs-5" > ${title2[i][0]}</b>
                        </button>
                    `
                }else{
                    text_content.innerHTML += `
                        <button class="card container-fluid p-1 text-left subtitle-manual" onclick="render_text_content_id(${i})">
                        <b class="fs-5" > ${title2[i][0]}</b>
                        </button>
                    `
                }
            }
        }
    }

}

function relacionados(id){
    
    if(id > 1){
        relation_content.innerHTML += `
            <div class="col-5 d-flex flex-column">
                <h5>Tópico anterior</h5>
                <hr>
                <button class="card container-fluid p-1 text-left subtitle-manual" onclick="render_text_content_id(${id-1})">
                    ${content[id-1][0]}
                </button>
            </div>

            <div class="col-1"></div>
        `
    }

    if(id < content.length){
        relation_content.innerHTML += `
            <div class="col-5 d-flex flex-column">
                <button type="button" class="btn btn-light" onclick="render_text_content_id(${id+1})" style="min-width: 10vh;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"></path>
                    </svg>
                    ${content[id+1][0]}
                </button>
            </div>
        `
    }
    
}