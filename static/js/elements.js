// RENDER PAGE
let nav_list = `
    <div class="bg-secondary" style="border-radius: 5px 5px 0px 0px;">
        <button type="button" class="btn btn-secondary" onclick="render_list_content()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            </svg>
        </button>
        <button type="button" class="btn btn-secondary" onclick="pesq_prep()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
        </button>
    </div>
`
function render_list(){
    if(celular == false){

        main_content.innerHTML = `
            <div class="col-12 col-md-4 rounded border border-opacity-50" style="max-height: 75vh; min-height: 75vh">
                ${nav_list}
                <div id="list_content" style="overflow-x: hidden; overflow-y: scroll; max-height: 75vh; min-height: 65vh"></div>
            </div>
            <div id="text_content" class="col-12 col-md-8 rounded p-2">
                <h3 class="m-2">Olá!</h3>
                <hr>
                <p class="mx-2">
                    Neste manual você irá aprender a como realizar diversas funções que o nosso
                    SISTEMA ESCOLA e o PORTAL DO ALUNO oferecem.
                    Aprenderá também como proceder no seu primeiro acesso, o que é cada local de acesso,
                    suas principais funcionalidades e recursos.<br>
                    Espero que a nossa parceria seja de muito sucesso!
                </p>

                <hr>
                <div class="d-flex flex-wrap">
                    <button type="button" class="col-12 col-xl-6 btn btn-light p-0 d-flex justify-content-start" onclick="pesq_prep()">
                        <a type="button" class="btn btn-secondary" onclick="pesq_prep()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </a>
                        <b class="mt-2 mx-2">Pesquisar tópicos</b>
                    </button>

                    <button type="button" class="col-12 col-xl-6 btn btn-light p-0 d-flex justify-content-start" onclick="render_list_content()">
                        <a type="button" class="btn btn-secondary" onclick="render_list_content()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                            </svg>
                        </a>
                        <b class="mt-2 mx-2">Exibir todos os tópicos</b>
                    </button>
                </div>
            </div>
        `

    }else{

        header_content.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>
                </button>
                <ul id="a" class="dropdown-menu p-3" aria-labelledby="dropdownMenuButton1">
                    <h5>Pesquisa rapida<h5>
                    <div class="input-group mb-3">
                        <input id="pesquisa_text" type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="pesquisar()">Pesquisar</button>
                    </div>
                    <hr>
                    <div id="list_content" style="min-width: 40vh; overflow-x: hidden; overflow-y: scroll; max-height: 80vh">
                    </div>
                </ul>
            </div>
            <h3 class="mt-1">Manual Online - MSE</h3>
            <div class="col-1">
        `

        main_content.innerHTML = `
            <div class="container-fluid">
                <div id="text_content" class="rounded p-0">
                    <h3 class="m-2">Olá!</h3>
                    <hr>
                    <p class="mx-2">
                        Neste manual você irá aprender a como realizar diversas funções que o nosso
                        SISTEMA ESCOLA e o PORTAL DO ALUNO oferecem.
                        Aprenderá também como proceder no seu primeiro acesso, o que é cada local de acesso,
                        suas principais funcionalidades e recursos.<br>
                        Espero que a nossa parceria seja de muito sucesso!
                    </p>

                    <hr>
                    <h3 class="m-2">Tópicos iniciais</h3>
                        
                    <button class="card container-fluid p-2 text-left subtitle-manual" onclick="render_text_content_id(${title2[1][2]})">
                        ${title2[1][0]}
                    </button>
                    <button class="card container-fluid p-2 text-left subtitle-manual" onclick="render_text_content_id(${title2[2][2]})">
                        ${title2[2][0]}
                    </button>
                    <button class="card container-fluid p-2 text-left subtitle-manual" onclick="render_text_content_id(${title2[3][2]})">
                        ${title2[3][0]}
                    </button>
                </div>

                <div class="mt-4">
                    <button type="button" class="btn btn-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                        </svg>
                    </button>
                    Clique neste ícone na barra superior para ver todos os tópicos.
                </div>
            </div>
        `
    }
}

function pesq_prep(){
 
    list_content.innerHTML = `
    <div class="input-group mb-3">
        <input id="pesquisa_text" type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="pesquisar()">Pesquisar</button>
    </div>
    `;
}

function render_list_content(){
    if(celular == false){
        list_content.innerHTML =  ""
        for(var i = 1; i < title1.length; i++){
            if(title1[i][2] == true){
                list_content.innerHTML += `
                    <!-- ${title1[i][0].toUpperCase()} -->
                    <div class="border border-dark border-opacity-25 py-2 bg-white-d">
                        <p class="m-0">
                            <div class="fs-2 m-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                                </svg>
                                <a class="title-menual fs-5" data-bs-toggle="collapse" href="#${title1[i][1]}" role="button" aria-expanded="false" aria-controls="${title1[i][1]}">
                                    ${i} - ${title1[i][0]}
                                </a>
                            </div>
                        </p>
                        <div class="row">
                            <div class="col">
                                <div id="${title1[i][1]}" class="collapse multi-collapse" style="padding-left: 2rem;">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                `

                let cont = 0;
                for(var a = 1; a < title2.length; a++){
                    if(i == title2[a][3] && title2[a][2] != 0){
                        cont++
                        document.getElementById(title1[i][1]).innerHTML += `
                        <button class="card container-fluid p-2 text-left subtitle-manual" onclick="render_text_content_id(${title2[a][2]})">
                            ${i}.${cont} - ${title2[a][0]}
                        </button>
                        `
                    }
                }
            }else{
                list_content.innerHTML += `
                    <!-- ${title1[i][0].toUpperCase()} -->
                    <div class="border border-dark border-opacity-25 py-2 bg-white-d">
                        <p class="m-0">
                            <div class="fs-2 m-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                                </svg>
                                <a class="title-menual fs-5" data-bs-toggle="collapse" role="button" aria-expanded="false" onclick="render_text_content_id(${title1[i][3]})">
                                    ${i} - ${title1[i][0]}
                                </a>
                            </div>
                        </p>
                    </div>
                `
            }
        }
    }else{
        list_content.innerHTML =  ""
        for(var i = 1; i < title1.length; i++){
            if(title1[i][2] == true){
                list_content.innerHTML += `
                    <!-- ${title1[i][0].toUpperCase()} -->
                    <div class="py-2 bg-white-d">
                        <p class="m-0">
                            <div class="fs-2 m-0">
                                <a class="title-menual fs-5 text-left" data-bs-toggle="collapse" href="#${title1[i][1]}" role="button" aria-expanded="false" aria-controls="${title1[i][1]}">
                                    ${i} - ${title1[i][0]}
                                </a>
                            </div>
                        </p>
                        <div class="row">
                            <div class="col">
                                <div id="${title1[i][1]}" class="text-left" style="margin-left: 2rem; padding-bottom: 1rem">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                `

                let cont = 0;
                for(var a = 1; a < title2.length; a++){
                    if(i == title2[a][3] && title2[a][2] != 0){
                        cont++
                        document.getElementById(title1[i][1]).innerHTML += `
                        <button class="card container-fluid p-2 text-left subtitle-manual" onclick="render_text_content_id(${title2[a][2]})">
                            ${i}.${cont} - ${title2[a][0]}
                        </button>
                        `
                    }
                }
            }else{
                list_content.innerHTML += `
                    <!-- ${title1[i][0].toUpperCase()} -->
                    <div class="py-2 bg-white-d">
                        <p class="m-0">
                            <div class="fs-2 m-0">
                                <a class="title-menual fs-5 text-left" data-bs-toggle="collapse" role="button" aria-expanded="false" onclick="render_text_content_id(${title1[i][3]})" style=" padding-bottom: 1rem">
                                    ${i} - ${title1[i][0]}
                                </a>
                            </div>
                        </p>
                    </div>
                `
            }
        }
    }
}

function render_text_content(text, list){
    let content_id = 0;
    for(var i = 0; i < 10; i++){
        if(list[0][i] == "pad_content"){
            content_id = i;
            break;
        }
    }

    for(var i = 0; i < list.length; i++){
        if(list[i][0] == text){
            text_content.innerHTML = `
                ${list[i][content_id]}
            `
        }
    }

    text_content.innerHTML += `
        <div id="sugestoes">
            <h4>Relacionados</h4>
            <hr>
        </div>
    `
}

function render_text_content_id(id){
    var myDiv = document.getElementById('text_content');
    myDiv.scrollTop = 0;
    if(celular == false){
        if(content[id][3] != ""){
            text_content.innerHTML = `
                <div>
                    <div>
                        <h4 class="col mx-3">${content[id][0]}</h4>
                        <hr>
                    </div>
                    <a href="${content[id][3]}" class="btn btn-primary mb-3" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                        </svg>
                        Vídeo explicativo
                    </a>
                    <div style="overflow-x: hidden; overflow-y: scroll; max-height: 60vh">
                    ${content[id][1]}
                    </div>
                </div>
            `
        }else{
            text_content.innerHTML = `
                <div class="d-flex flex-row py-2 rounded">
                    <h4 class="col mx-3">${content[id][0]}</h4>
                    <hr>
                </div>

                <div style="overflow-x: hidden; overflow-y: scroll; max-height: 75vh">
                ${content[id][1]}
                </div>
            `
        }
    }else{
        if(content[id][3] != ""){
            text_content.innerHTML = `
                <div class="d-flex flex-row rounded">
                    <h4 class="col mx-3">${content[id][0]}</h4>
                    <hr>
                </div>
                <a href="${content[id][3]}" class="btn btn-primary my-3" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                        <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                    </svg>
                    Vídeo explicativo
                </a>
                <div class="">
                ${content[id][1]}
                </div>
                <!-- 
                <hr>
                <div class="d-flex flex-row">
                    <h5>Vídeo explicativo: </h5>
                    <span class="p-1">${content[id][0]}</span>
                </div>
                
            <div id="${content[id][0]}_video" class="ratio ratio-16x9">
                    <iframe src="${content[id][3]}" title="YouTube video" allowfullscreen></iframe>
                </div> -->
            `
        }else{
            text_content.innerHTML = `
            <div class="d-flex flex-row py-2 rounded">
                    <h4 class="col mx-3">${content[id][0]}</h4>
                    <hr>
                </div>

                <div style="">
                ${content[id][1]}
                </div>
            `
        }
    }

    var next = 0;
    if(title2[id+1][2] == 0){
        next = title2[id+1][3];
    }else{
        next = title2[id+1][2];
    }

    var after = 0;
    if(title2[id-1][2] == 0){
        after = title2[id-1][3];
    }else{
        after = title2[id-1][2];
    }

    text_content.innerHTML += `
        <hr>
        <h4 class="container-fluid text-center">Tópicos</h4>
        <div id="content_t" class="container d-flex flex-row justify-content-between">
        </div>
    `
    if(after > 0){
        content_t.innerHTML += `
            <div class="col-6 text-center">
                <b>Anterior</b>
                <button class="card container-fluid p-2 text-left subtitle-manual" onclick="render_text_content_id(${after})">
                    ${title2[id-1][0]}
                </button>
            </div>
        `
    }
    if(next < content.length){
        content_t.innerHTML += `
            <div class="col-6 text-center">
                <b>Próximo</b>
                <button class="card container-fluid p-2 text-left subtitle-manual" onclick="render_text_content_id(${next})">
                    ${title2[id+1][0]}
                </button>
            </div>
        `
    }
}

function render_link(){

    for(var i = 1; i < links.length; i++){
        if(celular == false){
            links_u.innerHTML += `
                <a class="btn btn-light rounded m-2 p-0 border border-secondary" href="${links[i][2]}" target="_blank">
                    <div class="col-12 p-1 m-0 bg-secondary text-light">
                        <h4>${links[i][0]}</h4>
                    </div>
                    <div class="col-12 p-2">
                        <p>${links[i][1]}</p>
                    </div>
                </a>
            `
        }else{
            links_u.innerHTML += `
                <a class="col-11 col-xl-8 btn btn-light rounded m-2 p-0 border border-secondary" href="${links[i][2]}" target="_blank">
                    <div class="col-12 p-1 m-0 bg-secondary text-light">
                        <h4>${links[i][0]}</h4>
                    </div>
                    <div class="col-12 p-2">
                        <p>${links[i][1]}</p>
                    </div>
                </a>
            `
        }  
    }

}

// RENDER
render_list()
render_list_content();
render_link();