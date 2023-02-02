let title1 = [

    // ["Texto", "id", "subtitles", "content"],

    ["pad_text", "pad_id", false, "pad_content"],           //0
    ["Primeiro Acesso", 'c_primeiroacesso', true, ""],        //1
    ["Abertura de caixa", 'c_aberturacaixa', false, 3], //2
    ["Cadatro de aluno", 'c_cadastroaluno', false, 4], //3
    ["Matrícula do aluno", 'c_matriculaaluno', true, 5],      //4
    ["Acessando o portal do Aluno", 'c_acportalaluno', true, 6],      //5
    ["Alterando número da aula e status do curso", 'c_altnumaulastatuscurso', false, 7],      //6
    ["Guia Manutenção", 'c_guiamanutencao', true, 8],      //7
    ["Guia Movimentação", 'c_guiamovimentacao', true, 9],      //8
    ["Guia Relatórios", 'c_guiarelatorios', true, 10],      //9
    ["Guia Outras Opções", 'c_guiaoutrasop', true, 11],      //10
]

let title2 = [

    // ["Texto", "id", "content", "main_title_id"],

    ["pad_text", "pad_id", "pad_content", "pad_main_title_id"],

    //Title - 1
    ["Sistema Escola", "sistemaescola_primeiroacesso", 1, 1],
    ["Portal do Aluno", "portaldoaluno_primeiroacesso", 2, 1],


    //Title - 4
    ["Sobre a matrícula", "sobrematricula_matriculaluno", 5, 4],
    ["Criando a matrícula do aluno", "criamatricula_matriculaluno", 6, 4],
    ["Inserindo horário na matrícula", "horamatricula_matriculaluno", 7 , 4],

    //Title -5
    ["Acessando o Portal do Aluno", "acessandoportal_acessando", 8, 5],
    ["Tela Inicial do Portal do Aluno", "acessandoportal_telainicial", 9, 5],

    //Title - 7
    ["Cursos", "manutencao_cursos", , 7],
    ["Módulos", "manutencao_modulos", 0, 7],
    ["Funcionários", "manutencao_func", 1, 7],
    ["Computadores", "manutencao_comp", 2, 7],
    ["Horário de aula", "manutencao_horaaula", 3, 7],
    ["Tipos de marketing", "manutencao_tiposmark", 4, 7],
    ["Plano de contas", "manutencao_planoconta", 15, 7],
    ["Mot. canc./finaliza.", "manutencao_motcancfina", 16, 7],
    ["Contas do caixa", "manutencao_contascaixa", 17, 7],
    ["Faixa etária", "manutencao_faixaetaria", 18, 7],
    ["Telemarketing", "manutencao_telemark", 19, 7],
]

let content = [

    // ["text_id", "content", "video", "relacionados"]

    ["pad_text_id", "pad_content"],

    //1
    [`Sistema Escola`, `
        <p class="mx-2">
            O sistema escola é o sistema de gerenciamento para a sua escola. Nele você conseguirá
            ter controle sobre todos os seus alunos, combos, cursos, além de poder incluir todo o
            fluxo de caixa da sua unidade.<br>
            O sistema escola permitirá que você gerencie toda a sua unidade, unindo a gestão
            escolar à gestão empresarial em um único local.

            <br>
            <a onclick="img_open('/static/images/login_se.jpg')">
                <img class="img-fluid my-2 img-exp" src="static/images/login_se.jpg" alt="Tela de Login Sistema Escola">
            </a>
            <br>

            O primeiro acesso ao sistema escola é dado por um Login e senha enviados logo no
            início da implantação do sistema na sua unidade. Esse Login terá total permissão de
            mexer no sistema, ou seja, todas as funções que o sistema oferece, poderão ser
            realizadas com esse Login. O sistema tem a opção de criar novos logins com diferentes
            tipos de permissões, mas veremos isso mais a frente.
        </p>
    `, `
        Primeiro Acesso, Sistema Escola, Abrir
    `,
        `http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/sistema/1.html`
    ],

    //2
    [`Portal do Aluno`, `
        <p class="mx-2">
            O Portal do Aluno é o local por onde o aluno realizará as suas aulas interativas. Dentro
            deste portal o aluno também poderá verificar a porcentagem de andamento do seu curso,
            quais são seus horários, sua nota, os próximos cursos que irá fazer e também a sua
            frequência.

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/login_pa.jpg" alt="Tela de Login Portal do Aluno">
            <br>

            Para que o aluno tenha acesso ao portal do aluno, é necessário primeiro criar a matrícula
            dele (próximo tópico a ser visto). Após criada a matrícula, será gerado um número, este
            número será o Login do aluno e a sua senha será gerada automaticamente pelo sistema,
            sendo ela os dígitos <b class="text-danger">123</b>. Em todo primeiro acesso do aluno, esta será a senha. Após
            realizar o primeiro acesso, o sistema dá a opção de mudança de senha, podendo ser
            escolhida de acordo com a vontade do aluno, ou criando um padrão para a escola. Por
            exemplo, nº de matrícula e senha iguais. Como uma forma de lembrar mais facilmente o
            Login de acesso do aluno e manter um padrão de Login. Mas, a escolha da senha deve
            ser feita de acordo com a realidade da sua unidade. 
        </p>
    `, `
        Primeiro Acesso, Portal do Aluno, Abrir
    `,
        "http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/hardlock/2.html"
    ],

    //3
    [`Abertura de caixa`, `
        <p class="mx-2">
            A primeira tela que surge ao abrir o sistema pela primeira vez no dia, é a abertura de
            caixa. Essa tela permite que seja inserido o valor do caixa do dia anterior e a partir desse
            valor poder fazer novas movimentações dentro do sistema.
        
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/abre_caixa.jpeg" alt="Tela de abertura de caixa">
            <br>

            É necessário abri-lo todos os dias. Logo após abrir, o sistema vai perguntar se você
            deseja finalizar a abertura de caixa. Basta clicar no botão SIM que o sistema abrirá
            automaticamente. Caso clique em NÃO o sistema continuará com a tela de abertura do
            caixa em aberto. <br>
            Se o caixa não for aberto, o sistema volta para a tela de inicial de Login. 
        </p>
    `, `
        Abertura de caixa, Caixa, Abrir, Início, Inicio
    `,
    ""
    ],

    //4
    [`Cadastro de Aluno`, `
        <p class="mx-2">
            Dentro do sistema escola: <br>
            <b class="m-2">A.</b> Clique no menu MANUTENÇÃO e, após, clique em Alunos. <br>
            <b class="m-2">B.</b> Clique no botão <button class="btn btn-success text-light"><b>+</b> NOVO ALUNO</button> <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/novo_aluno.jpg" alt="Manutenção>Alunos>+NovoAluno">
            <br>

            <b class="m-2">C.</b> Nesse momento a tela de cadastro do aluno aparecerá, então, será preciso preencher
            todos os campos com os dados respectivos do aluno que fará aulas. Todos os locais que
            estiverem com um <b class="text-danger">*</b> é indicativo de que aquele campo é obrigatório o preenchimento. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/nome_aluno.jpg" alt="Campo nome do aluno">
            <br>

            <b class="m-2">D.</b> Será necessário preencher com os dados da pessoa que for responsável pelo aluno
            também, no campo RESP. PGTO, se ele for menor ou maior de idade. Após preencher
            todos os campos clique no botão Gravar, na parte inferior da tela. <br>
            <b class="m-2">E.</b> Pronto, o cadastro do seu aluno foi efetuado com sucesso!
        </p>
    `, `
        Novo aluno, Aluno, Cadastro
    `,
        "http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/sistema/4.html"
    ],

    //5
    [`Sobre a matrícula`, `
        <p class="mx-2">
            Após realizar o cadastro do aluno, o próximo passo é matricular o aluno no sistema. Por
            meio do número de sua matrícula é que o aluno conseguirá acessar o portal do aluno,
            caso contrário ele não poderá assistir as suas aulas. É na matrícula também que são
            inseridas informações como:
            <ul class="mx-4">
                <li>Módulo que o aluno cursará (módulo é o conjunto de cursos)</li>
                <li>Início e término de contrato</li>
                <li>Nº de horas semanais que o aluno cursará</li>
                <li>Valor do pacote</li>
                <li>Quantidade de parcelas</li>
                <li>Tipo de marketing usado para captação do aluno. Entre outros</li>
            </ul>
        </p>
    `, `
        Nova matrícula, matricula, novo, Aluno, Cadastro, basico, básico
    `,
        "http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/sistema/8.html"
    ],

    //6
    [`Criando matrícula do aluno`, `
        <p class="mx-2">
            Dentro do sistema escola <br>
            <b class="m-2">A.</b>Clique sobre a aba MOVIMENTAÇÃO <br>
            <b class="m-2">B.</b>Matrículas <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao.jpg" alt="Campo nome do aluno">
            <br> <br>

            <b class="m-2">C.</b>Clique sobre o botão <button class="btn btn-success text-light"><b>+</b> NOVA MATRÍCULA</button><br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/nova_matricula.jpg" alt="Campo nome do aluno">
            <br> <br>

            <b class="m-2">D.</b>Após clicar sobre este botão, uma nova tela irá abrir, nessa tela você deverá
            preencher todos os campos que estiverem com o *. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/cabecalho_matricula.jpg" alt="Campo nome do aluno">
            <br> <br>

            <b class="m-2">E.</b>Ao clicar sobre a lupa na área do ALUNO, aparecerá uma lista com todos os
            alunos cadastrados no sistema. Selecione o aluno de quem deseja fazer a
            matrícula e em seguida selecione o módulo. <br> <br>
            <b class="m-2">F.</b>As horas semanais significam quantas horas na semana o seu aluno terá para
            fazer as suas aulas. Por exemplo, se o seu aluno fizer 1 hora de aula, mas 2 dias
            na semana, então deverá ser colocado 2 horas no campo H/SEMANA. <br> <br>
            <b class="m-2">G.</b>Consultor é a pessoa responsável pela matricula do aluno. O sistema possibilita a
            criação de usuários para os demais funcionários, além do usuário administrativo,
            permitindo colocar exatamente o funcionário que está fazendo a matricula do
            aluno. <br> <br>
            <b class="m-2">H.</b>Há duas opções de escolha para o pagamento do cliente no sistema escola.
            Boleto normal e o boleto pagseguro. O sistema escola online possibilita a
            geração de boletos, pagamento por cartão de crédito e débito, além da opção
            recorrência. Para uso da opção da pagseguro é necessário a criação de uma conta
            na pagseguro, bem como configurar o sistema com as informações necessárias. <br> <br>

            O Grupo Oportunidade firmou uma parceria com a pagseguro, diminuindo o valor das
            taxas cobradas pela empresa em caso de uso de pagamento online. Para ser inserido
            nessas condições é necessário enviar um e-mail solicitando à pagseguro a inserção da
            sua escola no plano. (Vide tutorial pagseguro) <br> <br>

            <b class="m-2">I.</b>Existe um campo na matrícula do aluno onde é possível selecionar a opção
            FLEX. Essa opção deve ser selecionada quando seu aluno não possuir um
            horário fixo, ou seja, ele poderá ter horários em dias diferentes na semana. Nessa
            opção o aluno não terá um agendamento fixo, e sim flexível. Onde será
            necessário inserir o horário para ele de acordo com a necessidade.
            Quando o aluno não é flex, o sistema deixa o agendamento salvo, ou seja, toda semana
            naquele dia e horário o aluno terá o sistema aberto para que ele possa fazer aula. No
            modelo flex, a aula precisará ser agendada semanalmente. <br> <br>
            <b class="m-2">J.</b>Depois de inserir todos os dados, é só clicar em SALVAR NOVA
            MATRÍCULA. Dessa forma seu aluno terá a matrícula efetuada com sucesso.
        </p>
    `, `
        Nova matrícula, matricula, novo, Aluno, Cadastro
    `,
        "http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/sistema/8.html"
    ],

    //7
    [`Inserindo horário na matrícula`, `
        <p class="mx-2">
            Após criar a matrícula o próximo passo é agendar um horário para o seu aluno. <br>
            <b class="m-2">A.</b>Abra a matrícula do aluno clicando na lupa de ação <br> <br>
            <b class="m-2">B.</b>Após abrir a matrícula, siga até o final da página, onde encontrará algumas
            guias. Dentre elas estão: CURSOS, PARCELAS, HORÁRIOS, REPOSIÇÕES,
            FREQUÊNCIAS, ALTERAÇÕES, CONTATOS ALUNO, DESCONTO. <br> <br>
            <b class="m-2">C.</b>Para inserir o horário, clique na aba HORÁRIOS, escolha o dia em que o aluno
            fará a aula e em seguida clique no botão + em frente ao horário para que ele seja
            agendado para essa matrícula. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/matricula_horario.jpg" alt="Campo nome do aluno">
            <br> <br>

            <b class="m-2">D.</b>Após inserir o horário, ele irá constar na área de HORÁRIOS AGENDADOS. <br>
            
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/adc_horario_matricula.jpg" alt="Campo nome do aluno">
            <br> <br>

            <b class="m-2">E.</b>O sistema vem previamente configurado com 14 computadores. Isso quer dizer
            que, em um laboratório só será permitido agendar 14 matrículas em um mesmo
            horário. Por exemplo, no horário das 14h às 15h só será permitido agendar 14
            alunos. 
        </p>
    `, `
        Nova matrícula, matricula, novo, Aluno, Cadastro, horário, horario, inserir
    `,
        "http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/sistema/2.html"
    ],

    //8
    [`Acessando o Portal do Aluno`, `
        <p class="mx-2">
            Para que os seus alunos consigam acessar as suas aulas, eles precisarão acessar o portal
            do aluno. Local por onde as aulas interativas serão assistidas. Para o acesso dele, o
            aluno precisará do número de sua matrícula e senha, gerados automaticamente quando a
            matricula do aluno é concluída. <br><br>
            O aluno acessará o Portal por meio deste link:<br>
            <a href="http://www.ead.grupooportunidade.com.br" target="_blank">http://www.ead.grupooportunidade.com.br</a>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/login_pa.jpg" alt="Campo nome do aluno">
            <br> <br>

        </p>
    `, `
        portal do aluno, acesso, online
    `,
        "http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/sistema/2.html"
    ],

    //9
    [`Tela inicial do Portal do Aluno`, `
        <p class="mx-2">

            Nessa tela o aluno poderá:

            <ul>
                <li> Acessar a aula interativa; </li>
                <li> Consultar suas notas, horários e frequência; </li>
                <li> Ver quais cursos existem na sua matricula; </li>
                <li> Alterar os seus dados, bem como também a sua senha de acesso ao portal do aluno. </li>
            </ul>

            Quando o aluno altera a senha pelo portal do aluno, a senha também fica disponível
            dentro do sistema escola. <br>
            O instrutor poderá fazer alterações na matricula pelo portal do aluno. No canto direito
            inferior há um botão de INSTRUTOR. Por este botão o instrutor consegue alterar o
            número da aula e concluir o curso do aluno. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/inicio_inst_pa.jpg" alt="Campo nome do aluno">
            <br> <br>
            
            Esse botão é importante principalmente se o instrutor quiser alterar a aula de
            DIGITAÇÃO. Pelo sistema escola não é possível alterar a aula de digitação, apenas o
            status. Já o portal do aluno permite essa alteração. <br>
            A senha do instrutor será a mesma senha usada para acessar o Sistema Escola. Cada
            funcionário usará sua própria senha, para que qualquer alteração que for feita na
            matrícula do aluno pelo funcionário, fique registrado na guia ALTERAÇÕES no
            sistema escola. <br>
            
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/senha_inst_pa.jpg" alt="Campo nome do aluno">
            <br> <br>

            Após inserir a senha, uma tela semelhante a esta abaixo ficará visível. Sendo possível
            alterar a aula ou concluir o curso atual. Sendo ele aula normal ou digitação.
        </p>
    `, `
        portal do aluno, acesso, online, senha, instrutor
    `,
        "http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/sistema/2.html"
    ],
]