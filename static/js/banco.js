let title1 = [

    // ["Texto", "id", "subtitles", "content"],

    ["pad_text", "pad_id", false, "pad_content"],           //0
    ["Primeiro Acesso", 'c_primeiroacesso', true, ""],        //1
    ["Abertura de caixa", 'c_aberturacaixa', false, 3], //2
    ["Cadatro de aluno", 'c_cadastroaluno', false, 4], //3
    ["Matrícula do aluno", 'c_matriculaaluno', true, 5],      //4
    ["Acessando o portal do Aluno", 'c_acportalaluno', true, 6],      //5
    ["Alterando aula e status do curso", 'c_altnumaulastatuscurso', false, 10],      //6
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

    //Title - 2
    ["Abertura de caixa", 'aberturacaixa', 0, 0],

    //Title - 3
    ["Cadatro de aluno", 'aberturacaixa', 0, 0],


    //Title - 4
    ["Sobre a matrícula", "sobrematricula_matriculaluno", 5, 4],
    ["Criando a matrícula do aluno", "criamatricula_matriculaluno", 6, 4],
    ["Inserindo horário na matrícula", "horamatricula_matriculaluno", 7 , 4],

    //Title -5
    ["Acessando o Portal do Aluno", "acessandoportal_acessando", 8, 5],
    ["Tela Inicial do Portal do Aluno", "acessandoportal_telainicial", 9, 5],

    //Title - 6 
    ["Alterando aula e status do curso", 'altnumaulastatuscurso', 0, 0],

    //MANUTENÇÃO
    //Title - 7
    ["Sobre a guia Manutenção", "manutencao_sobre", 11, 7],
    ["Cursos", "manutencao_cursos", 12, 7],
    ["Módulos", "manutencao_modulos", 13, 7],
    ["Funcionários", "manutencao_func", 14, 7],
    ["Computadores", "manutencao_comp", 15, 7],
    ["Horário de aula", "manutencao_horaaula", 16, 7],
    ["Tipos de marketing", "manutencao_tiposmark", 17, 7],
    ["Plano de contas", "manutencao_planoconta", 18, 7],
    ["Mot. canc./finaliza.", "manutencao_motcancfina", 19, 7],
    ["Contas do caixa", "manutencao_contascaixa", 20, 7],
    ["Faixa etária", "manutencao_faixaetaria", 21, 7],
    ["Telemarketing", "manutencao_telemark", 22, 7],

    //MOVIMENTAÇÃO
    //Title - 8
    ["Sobre a guia Movimentação", "mov_sobre", 23, 8],
    ["Cancela matrícula", "mov_cancmatri", 24, 8],
    ["Reativa matrícula", "mov_reatmatri", 25, 8],
    ["Finaliza matrícula", "mov_finalizamatri", 26, 8],
    ["Tranca matrícula", "mov_trancamatri", 27, 8],
    ["Quitar parcela", "mov_quitarparc", 28, 8],
    ["$Caixa e contas do caixa", "mov_contascaixa", 29, 8],
    ["Lança frequência", "mov_lancafreq", 30, 8],
    ["Lança reposição", "mov_lancarepos", 31, 8],
    ["Lança aula avulsa", "mov_lancaavulsa", 32, 8],
    ["Pedido de apostila", "mov_pedidoapos", 33, 8],
    ["Lançar/Acompanhar notas", "mov_lancanotas", 34, 8],

    //RELATÓRIOS
    //Title - 9
    ["Sobre a guia Relatórios", "rel_sobre", 35, 9],
    ["Alunos", "rel_cancmatri", 36, 9],
    ["Matrículas", "rel_matri", 37, 9],
    ["Cursos", "rel_curso", 38, 9],
    ["Plano de contas", "rel_planoc", 39, 9],
    ["Quadro de horário", "rel_quadroh", 40, 9],
    ["Grade de horários", "rel_gradeh", 41, 9],
    ["Alunos ON/OFF-LINE", "rel_onoff", 42, 9],
    ["Boletim alunos", "rel_boletim", 43, 9],

    //OUTRAS OPÇÕES
    //Title - 10
    ["Sobre a guia Outras Opções", "op_sobre", 44, 10],
    ["Perfil", "op_perfil", 45, 10],
    ["Parâmetros", "op_para", 46, 10],

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

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/area_inst_pa.jpg" alt="Campo nome do aluno">
            <br> <br>

        </p>
    `, `
        portal do aluno, acesso, online, senha, instrutor
    `,
        "http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/sistema/2.html"
    ],

    //10
    [`Alterando número de aula e status de curso`,
        `
        <p class="mx-2">
            Caso seja necessário, o sistema permite que você altere o a aula que o aluno está, e
            também consiga alterar o status do curso. <br>
            Quando o aluno inicia um curso, o sistema automaticamente muda o status para EM
            ANDAMENTO, anteriormente ao início do curso, o status permanece como ESPERA.
            Ao concluir o curso, o status fica como CONCLUÍDO. O aluno só consegue fazer a
            aula se o status estiver EM ANDAMENTO. <br>
            Para poder modificar o status o sistema irá pedir uma senha, a senha do gerente. Ela
            pode ser encontrada e configurada no menu OUTRAS OPÇÕES > PARÂMETROS >
            GERAIS. <br> <br>
            Para configurar a senha, basta clicar em EDITAR e inserir a senha que desejar. <br>
            
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/inst_param.jpg" alt="Campo nome do aluno">
            <br> <br>

            Configurada a senha do gerente, podemos então fazer o processo de troca de status ou
            de número da aula. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/info_mat.jpg" alt="Campo nome do aluno">
            <br> <br>

            Para fazer a alteração do status ou número de aula, basta clicar no lápis de edição. Ao
            clicar sobre ele o será possível alterar o campo em questão. Após colocar o status ou
            aula que deseja, basta clicar no que ficará visível para salvar a sua edição. Ao
            clicar sobre ele aparecerá a caixa onde você irá inserir a senha do gerente que foi
            configurada anteriormente. Insira a senha e clique em ok. <br>
            Pronto, seu status ou número de aula terá sido alterado! <br>
        </p>
        `, `
            aula, número, numero, alterar, status, curso
        `,
        "http://www.videostutoriais.grupooportunidade.com.br/suporte/videos/hardlock/4.html"
    ],

    //MANUTENÇÃO
    //11
    [`Sobre a guia Manutenção`,
        `
        <p class="mx-2">
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/guia_manuten.jpg" alt="Campo nome do aluno">
            <br> <br>

            Nessa guia será possível alterar algumas informações dentro do sistema mais voltadas a
            área administrativa da escola. Falaremos de cada uma dessas abas abaixo. 
        </p>
        `, `
            guia, aba, manutenção, manutencao
        `,
        ""
    ],

    //12
    [`Cursos`,
        `
        <p class="mx-2">
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/cursos.jpg" alt="Campo nome do aluno">
            <br> <br>

            A aba de cursos mostra todos os cursos que há disponível na sua plataforma. Caso
            algum curso novo seja lançado, ele vai para essa área, mas na aba de cursos NÃO
            LIBERADOS. Para que o curso fique liberado na sua plataforma, basta clicar no botão
            SINCRONIZAR DADOS na guia Outras Opções > Parâmetros. 
        </p>
        `, `
            guia, aba, manutenção, manutencao, curso, cursos
        `,
        ""
    ],

    //13
    [`Módulos`,
        `
        <p class="mx-2">
            Nessa guia podemos ver todos os módulos criados dentro do nosso sistema escola.
            Alguns módulos vão pré-criados, automaticamente com o sistema. Você pode alterá-los
            e até mesmo criar novos módulos. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/modulos.jpg" alt="Campo nome do aluno">
            <br> <br>

            Para criar um novo módulo, basta você clicar no botão + NOVO MÓDULO. Inserir o
            título e o valor do módulo e clicar em gravar. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/modulos2.jpg" alt="Campo nome do aluno">
            <br> <br>

            Após clicar em gravar, será necessário clicar no botão EDITAR para podermos inserir
            os cursos desejados dentro do módulo. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/modulos3.jpg" alt="Campo nome do aluno">
            <br> <br>

            Os cursos são inseridos clicando no botão de + que está na frente de cada curso. Após
            inserir todos os que deseja, é só clicar em SAIR. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/modulos4.jpg" alt="Campo nome do aluno">
            <br> <br>

            Após inserir todos os cursos desejados, o próximo passo é clicar novamente em gravar.
            E o novo módulo estará pronto para ser inserido nas matrículas de seus alunos.

        </p>
        `, `
            guia, aba, manutenção, manutencao, módulo, módulos, modulo, modulos
        `,
        ""
    ],

    //14
    [`Funcionário`,
        `
        <p class="mx-2">
            O sistema escola permite que sejam criados logins de acesso ao sistema para cada
            funcionário que houver na escola. Dessa forma será possível verificar quem fez qual
            alteração nas matrículas, quem fez abertura de caixa, entre outras informações. <br>

            Criando um funcionário também é possível limitar o acesso dos funcionários as abas do
            sistema. Por exemplo, eu posso permitir que meu instrutor tenha acesso para cadastrar e
            matricular alunos, mas que não tenha acesso a movimentação de caixa. Isso é possível
            criando perfis com permissões diferentes. <br> <br>

            A criação de perfil será vista mais para frente na guia OUTRAS OPÇÕES. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/func1.jpg" alt="Campo nome do aluno">
            <br> <br>

            Após inserir todas as informações, Login e senha do funcionário, é só clicar em gravar e
            o funcionário conseguirá acessar o sistema escola com o Login dele. <br>
            Esse Login é apenas para o SISTEMA ESCOLA, caso o funcionário queira fazer alguns
            cursos como teste, será necessário criar um cadastro e uma matricula para ele assim
            como é criado para os demais alunos. Dessa forma ele terá acesso ao portal do aluno
            para assistir as aulas.
        </p>
        `, `
            guia, aba, manutenção, manutencao, funcionário, funcionários, funcionario, funcionarios, func
        `,
        ""
    ],

    //15
    [`Computadores`,
        `
        <p class="mx-2">
            O número de computadores limita a quantidade de alunos que eu posso colocar por horário. Se o
            meu sistema tem 10 computadores ativos, consigo colocar 10 alunos no horário das 8h às 9h. 10
            alunos no horário das 10h às 11h e assim por diante. <br>
            Caso queira, o sistema permite aumentar essa quantidade de computadores dentro do sistema.
            Na guia COMPUTADORES, clique no botão + NOVO COMPUTADOR. <br>
            Na tela abaixo, insira o nome do computador, que pode seguir a ordem, por exemplo 11º e o
            laboratório. Não é obrigatório colocar o IP, mas o nome do computador e o laboratório sim. <br> <br>
            Após colocar as informações, basta clicar em gravar. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/comp1.jpg" alt="Campo nome do aluno">
            <br> <br>
        </p>
        `, `
            guia, aba, manutenção, manutencao, comp, computador, computadores, PC, máquina, maquina
        `,
        ""
    ],

    //16
    [`Horário de aula`,
        `
        <p class="mx-2">
            O sistema escola vem pré configurado com horários que vão das 8 horas da manhã, até
            as 21 horas da noite. De segunda-feira a sábado. Caso a escola atenda mais horários e
            até mesmo no domingo, é possível criar novos horários. <br>
            Na guia HORÁRIOS, selecione o dia da semana em que deseja criar o novo horário e
            clique no botão <button class="btn btn-success text-ligh"><b>+</b> NOVO HORÁRIO</button>.  Caso deseje criar esse novo horário em todos os
            dias da semana, será necessário fazer o mesmo procedimento em todos os dias. <br>
            Ao clicar no botão + novo horário aparecerá a tela abaixo. Nela você deve colocar o
            horário inicial e o horário final. Por exemplo, 07:00 como horário inicial e 08:00 como
            horário final. E clicar no botão GRAVAR. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/horario1.jpg" alt="Campo nome do aluno">
            <br> <br>

            Após gravar o horário ele virá para a tela de horários daquele dia com um X vermelho.
            Isso significa que ele foi criado, porém ainda não está habilitado para ser inserido na
            matricula do aluno. Clicando no x vermelho ele ficará verde, e estará habilitado para ser
            inserido na matricula dos alunos. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/horario2.jpg" alt="Campo nome do aluno">
            <br> <br>
        </p>
        `, `
            guia, aba, manutenção, manutencao, horários, horario, hor, novo
        `,
        ""
    ],

     //17
     [`Tipos de marketing`,
        `
        <p class="mx-2">
            Esta guia exibe o tipo do marketing que atingiu as matrículas: <br>
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/tmark1.jpg" alt="Campo nome do aluno">
            <br> <br>
        </p>
        `, `
            guia, aba, manutenção, manutencao, marketing, mark, market
        `,
        ""
    ],

    //18
    [`Plano de conta`,
        `
        <p class="mx-2">
            A guia plano de contas faz parte de um manual secundário apenas sobre o uso do caixa
            dentro do sistema. Em caso de dúvidas, o manual também se encontra disponível.
        </p>
        `, `
            guia, aba, manutenção, manutencao, conta, contas, caixa
        `,
        ""
    ],

    //19
    [`Motivo do cancelamento/finalização`,
        `
        <p class="mx-2">
            Esta guia exibe o motivo do cancelamento ou da finalização das matrículas: <br>
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/motcanc.jpg" alt="Campo nome do aluno">
            <br> <br>
        </p>
        `, `
            guia, aba, manutenção, manutencao, cancela, finaliza, cancelamento, finalização
        `,
        ""
    ],

    //20
    [`Contas do caixa`,
        `
        <p class="mx-2">
            A guia Contas do Caixa faz parte de um manual secundário apenas sobre o uso do caixa
            dentro do sistema. Em caso de dúvidas, o manual também se encontra disponível.
        </p>
        `, `
            guia, aba, manutenção, manutencao, conta, contas, caixa
        `,
        ""
    ],

    //21
    [`Faixa etária`,
        `
        <p class="mx-2">
            Essa guia demonstra a faixa etária dos alunos dos determinados tipos de curso que são
            oferecidos na plataforma.

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/manutencao/faixaetaria.jpg" alt="Campo nome do aluno">
            <br> <br>
        </p>
        `, `
            guia, aba, manutenção, manutencao, idade, anos, etaria
        `,
        ""
    ],

    //22
    [`Telemarketing`,
        `
        <p class="mx-2">
            Essa guia faz parte de um manual secundário que explica o uso dela separadamente. 
        </p>
        `, `
            guia, aba, manutenção, manutencao, marketing, tele
        `,
        ""
    ],

    //MOVIMENTAÇÃO
    //23
    [`Sobre a guia Movimentação`,
        `
        <p class="mx-2">
            Nessa guia será possível fazer alterações relacionadas diretamente com as matrículas
            dos alunos. Mais abaixo falaremos sobre cada uma delas separadamente.  <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_sobre.jpg" alt="guia_movimentacao">
            <br> <br>

        </p>
        `, `
            guia, aba, movimentacao, move, mov, sobre, matricula
        `,
        ""
    ],

    //24
    [`Cancela matrícula`,
        `
        <p class="mx-2">
            A cobrança do sistema escola online é feita em cima das matrículas ATIVAS dentro do
            sistema, por isso é muito importante desativar as matrículas em que os alunos
            efetivamente não estão fazendo os cursos. A guia CANCELA MATRÍCULA é
            destinada para alunos que desistiram dos cursos e não pretendem retornar. <br>
            Ao clicar na guia CANCELA MATRÍCULA, você será direcionado para a tela abaixo. <br>
            Nessa tela você deverá escolher o aluno, clicando na lupa a frente do nome dele. E em
            seguida no botão verde que aparece na frente do nome dele, um pouco mais abaixo,
            confirmando que essa é a matrícula que deseja cancelar. <br>
            
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_cancmatri1.jpg" alt="">
            <br> <br>

            Após selecionar a matrícula desejada, a tela abaixo será exibida. É necessário colocar o
            motivo do cancelamento. Ele pode ser digitado ou selecionado dentro das opções préexistentes. <br>
            Após colocar o motivo, basta clicar no botão vermelho <button class="btn btn-danger text-white"><b>X</b> CANCELAR MATRÍCULA</button> e a
            matrícula desejada estará cancelada. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_cancmatri2.jpg" alt="">
            <br> <br>

        </p>
        `, `
            guia, aba, cancela, cancelamento, matri, matricula
        `,
        ""
    ],

    //25
    [`Reativa matrícula`,
        `
        <p class="mx-2">
            O procedimento de reativação de matrícula funciona semelhante ao processo de
            cancelamento de matrícula. Mudando apenas a opção a ser escolhida dentre as guias.
            Após selecionar o aluno desejado, basta clicar no botão <button class="btn btn-primary text-white"><b></b> REATIVAR MATRÍCULA</button>
            para que a matrícula selecionada seja reativada. <br>
            Esse procedimento de reativação pode ser feito em matrículas canceladas, trancadas e
            finalizadas. <br>
            
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_reativamatri.jpg" alt="">
            <br> <br>

        </p>
        `, `
            guia, aba, reativar, reativa, voltar, matri, matricula
        `,
        ""
    ],

    //26
    [`Finaliza matrícula`,
        `
        <p class="mx-2">
            O processo de finalização de matrícula é indicado para os casos em que os alunos já
            finalizaram os seus cursos. <br>
            O procedimento de finalização de matrícula funciona semelhante ao processo de
            cancelamento de matrícula. Mudando apenas a opção a ser escolhida dentre as guias. <br>
            Após selecionar o aluno desejado, basta clicar no botão <button class="btn btn-success text-white"><b></b> FINALIZAR MATRÍCULA</button>
            para que a matrícula selecionada seja finalizada. <br>
            
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_finalizamatri.jpg" alt="">
            <br> <br>

        </p>
        `, `
            guia, aba, , finalizar, finalização, finalizacao, matri, matricula
        `,
        ""
    ],

    //27
    [`Tranca matrícula`,
        `
        <p class="mx-2">
            O processo de trancamento de matrícula é indicado para os casos em que os alunos, por
            algum motivo, não conseguem continuar o curso, mas pretende continuá-lo
            posteriormente. <br>
            O procedimento de trancamento de matrícula funciona semelhante ao processo de
            cancelamento de matrícula. Mudando apenas a opção a ser escolhida dentre as guias. <br>
            Após selecionar o aluno desejado, basta clicar no botão <button class="btn btn-warning text-white"><b></b> TRANCAR MATRÍCULA</button> para
            que a matricula selecionada seja trancada. <br>
            
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_trancamatri.jpg" alt="">
            <br> <br>

        </p>
        `, `
            guia, aba, tranca, trancar, matri, matricula
        `,
        ""
    ],

    //28
    [`Quitar parcela`,
        `
        <p class="mx-2">
            Por essa opção é possível quitar as parcelas do aluno sem a necessidade de ir até a
            matrícula do mesmo. Para quitar a parcela dessa forma, é necessário ter em mãos o
            número do código de barras do carnê do aluno. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_quitaparc1.jpg" alt="">
            <br> <br>
            
            Após inserir o número do carnê as informações do aluno aparecerão nos campos abaixo.
            Se todas as informações estiverem corretas, basta clicar no botão <button class="btn btn-success text-white"><b></b> QUITAR </button> para que a
            parcela do aluno será quitada dentro do sistema. <br>
                
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_quitaparc2.jpg" alt="">
            <br> <br>

        </p>
        `, `
            guia, aba, quita, quitar, percela, parcelas, pagamento, pagar, boleto, carnê, carne
        `,
        ""
    ],

    //29
    [`$Caixa e contas do caixa`,
        `
        <p class="mx-2">
            As guias Caixa e Contas do Caixa faz parte de um manual secundário apenas sobre o
            uso do caixa dentro do sistema. Em caso de dúvidas, o manual também está disponível. <br>
        </p>
        `, `
            guia, aba, caixa, conta, caixas, contas
        `,
        ""
    ],

    //30
    [`Lança frequência`,
    `
        <p class="mx-2">
            Essa função permite lançar frequência para o aluno ainda que o mesmo não tenha assistido aula
            interativa dentro do sistema. Para lançar a frequência para o mesmo é necessário inserir o
            número da matrícula do aluno no campo indicado pela seta e selecionar a opção HORÁRIO.. <br>
            Após inserir a matrícula, ficarão disponíveis algumas opções. Para inserir a frequência, clique
            no botão verde <button class="btn btn-success text-white"><b>+</b> FREQ. AULA </button> na frente do horário em que deseja que ela seja lançada. <br>
        </p>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_lancafreq.jpg" alt="">
            <br> <br>
        `, `
            guia, aba, frquencias, frequencia, frequências, lancar, lançar
        `,
        ""
    ],

    //31
    [`Lança repoisção`,
    `
        <p class="mx-2">
            Essa opção permite que seja lançada uma reposição fora da matrícula do aluno.
            Inserindo o número da matrícula no local indicado, ficarão disponíveis os horários para
            serem agendados para o aluno. Caso não seja no dia atual a reposição, clique na data
            para que seja aberto o calendário e você consiga escolher o dia desejado. Basta clicar no
            botão <button class="btn btn-success text-white"><b>+</b></button> à frente do horário para inseri-lo para o aluno.
        </p>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_lancarepos.jpg" alt="">
            <br> <br>
        `, `
            guia, aba, lanca, lançar, reposicao, reposição, repor, horário, horario
        `,
        ""
    ],

    //32
    [`Lança aula avulsa`,
    `
        <p class="mx-2">
            Essa opção só poderá ser utilizada em caso de alunos flex, caso contrário não será
            possível lançar uma aula avulsa. Para lançar a aula para o aluno, clique na lupa no local
            indicado, e busque pelo aluno que deseja lançar a aula. <br>
            Após selecioná-lo, o campo de inserir horário ficará disponível, basta clicar no botão
            <button class="btn btn-success text-white"><b>+</b></button> à frente do horário para inseri-lo para o aluno. <br>
        </p>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_lancaaulaavulsa.jpg" alt="">
            <br> <br>
        `, `
            guia, aba, lanca, lançar, avulso, avulsa, flex, horário, horario, aula
        `,
        ""
    ],

    //33
    [`Pedido de apostila`,
    `
        <p class="mx-2">
            O sistema permite que seu aluno consiga fazer até a aula 05 sem que seja feito a entrega
            da apostila dentro do sistema escola. É obrigatório que o aluno receba o material de
            apoio para ter 100% de aproveitamento do curso. <br>
            Para que o saldo de apostila conste dentro do sistema escola é necessário que seja feito
            um pedido de apostila. <br>
            Na guia MOVIMENTAÇÃO selecione a opção PEDIDO DE APOSTILA. Uma tela
            semelhante a essa abaixo irá aparecer, nela clique em <button class="btn btn-success text-white"><b>+</b> NOVO PEDIDO</button> <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_pedido1.jpg" alt="">
            <br> <br>
            
            Essa telinha será aberta, contendo todos os cursos que o sistema possui. A primeira
            coluna para pôr a quantidade de apostilas, é referente a apostilas físicas. Já a segunda, é
            referente a apostilas digitais. Na lacuna deve ser colocado a quantidade de apostila que
            deseja do curso referente. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_pedido2.jpg" alt="">
            <br> <br>

            Após colocar todas as apostilas que precisa, clique em ok. Seu pedido aparecerá igual na
            tela abaixo. Clique em GRAVAR. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_pedido3.jpg" alt="">
            <br> <br>

            Após gravar o pedido é necessário clicar no botão ENVIAR PEDIDO, para que seja
            criado um arquivo em bloco de notas. Este arquivo deve ser enviado ao setor de pedidos
            para que a chave de liberação seja gerada, e com ela o saldo seja inserido dentro do seu
            sistema. <br>
            
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_pedido4.jpg" alt="">
            <br> <br>

            Após o envio do pedido ao setor de Pedidos e recebimento da chave de liberação, clique
            na AÇÃO referente ao pedido criado. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_pedido5.jpg" alt="">
            <br> <br>

            Clique na opção ATUALIZAR ESTOQUE e insira a chave na caixinha que abrir. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_pedido6.jpg" alt="">
            <br> <br>
            
            Clique em atualizar e pronto! Seu saldo de apostila foi atualizado!!
        </p>

        `, `
            guia, aba, lanca, lançar, pedido, pedir, apostila, apostilas, liberacao, liberação
        `,
        ""
    ],

    //34
    [`Lançar/Acompanhar notas`,
    `
        <p class="mx-2">

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_lancanota.jpg" alt="">
            <br> <br>

            Nessa guia é possível lançar ou visualizar a nota dos cursos inseridos na matrícula do aluno. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/movimentacao/mov_lancanota2.jpg" alt="">
            <br> <br>

            Basta inserir o número da matrícula do aluno, irá aparecer todos os cursos disponíveis na matrícula,
            o status (E para EM ESPERA, A para ANDAMENTO e C para CONCLUÍDO), o número da aula,
            e o botão visualizar e inserir nota.
        </p>
        `, `
            guia, aba, lanca, lançar, nota, notas, boletim
        `,
        ""
    ],

    //35
    [`Sobre a guia Relatórios`,
        `
        <p class="mx-2">
            Nessa guia será possível retirar diversos relatórios referentes aos alunos e suas
            matrículas. Bem como também o saldo de apostila, grades de horário e boletim do
            aluno. Mais abaixo veremos mais detalhadamente sobre cada uma das guias.

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_sobre.jpg" alt="">
            <br> <br>
        </p>
        `, `
            guia, aba,  relatórios, relatorios
        `,
        ""
    ],

    //36
    [`Alunos`,
        `
        <p class="mx-2">
            Na guia alunos são encontrados relatórios referentes aos cadastros dos alunos. Eles são
            subdivididos por: <br>

            <ul class="mx-2">
                <li><b>Aniversariantes:</b> É possível filtrar pelo mês de aniversário e o status da
                matrícula);</li>
                <li><b>Frequência:</b> Gera um relatório das frequências dos alunos através dos filtros:
                Período, Status da Matrícula, Presente S/N (necessária permissão de acesso ao usuário
                logado).</li>
            
                <br>
                <b>ACESSE O MENU RELATÓRIOS > ALUNOS > FREQUÊNCIA</b>

                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos1.jpg" alt="">
                <br> <br>

                <li>Selecione através do menu ou digite um período para busca (esse filtro busca as
                frequências registradas entre as datas selecionadas):</li>
                
                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos2.jpg" alt="">
                <br> <br>

                <li>Selecione o status das matrículas que deseja filtrar:</li>

                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos3.jpg" alt="">
                <br> <br>

                <li>Selecione o status de presença das frequências que deseja buscar e clique em Filtrar:</li>

                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos4.jpg" alt="">
                <br> <br>

                <li>O botão de busca retornará os dados das frequências registradas correspondentes aos
                filtros aplicados, exibindo as seguintes colunas: Data da frequência, Número da
                matricula, Status da matrícula, Nome do aluno, Tipo de aula, Computador, Horário de
                início da frequência, Horário de término da frequência, Status de presença, Saiu cedo e
                Motivo.</li>
                <li>Por padrão, os registros aparecem ordenados por datas, das mais recentes para as mais
                antigas. Clicando na guia da coluna data esses valores podem ser reordenados para
                ordem inversa:</li>

                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos5.jpg" alt="">
                <br> <br>

                <li>A busca vai retornar os resultados dos filtros aplicados. Você pode gerar um arquivo
                PDF ou Planilha do Excel para visualização e impressão dos dados.</li>
                
                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos6.jpg" alt="">
                <br> <br>

                <li>Ativar permissão do Relatório de Frequências ao perfil/usuário</li>
                <li>Acesse o menu Outras Opções > Perfis:</li>

                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos7.jpg" alt="">
                <br> <br>

                <li>Em Perfis Cadastrados selecione o perfil que deseja atribuir a permissão:</li>

                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos8.jpg" alt="">
                <br> <br>

                <li>Em Controle de Perfil, desça a barra de rolagem até o menu Relatórios > Alunos >
                Frequência. Note que a princípio o acesso desse relatório vai estar como NEGADO por
                padrão:</li>

                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos9.jpg" alt="">
                <br> <br>

                <li>De um clique sobre a opção negado e um menu com as opções de acesso será exibido.
                Selecione a permissão desejada com um clique:</li>

                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos10.jpg" alt="">
                <br> <br>

                <li>No menu de Perfis Cadastrados selecione a opção GRAVAR para salvar as alterações
                realizadas:</li>
                
                <br>
                <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos11.jpg" alt="">
                <br> <br>
                
                Obs.: O caminho de acesso ao relatório só será exibido para usuários com as devidas
                permissões de acesso definidas. Caso a atribuição de permissão seja definida ao próprio
                usuário logado em uma seção, é necessário que o mesmo encerre sua seção e realize o
                Login novamente para que as configurações sejam aplicadas ao seu.

                <li><b>Faltantes:</b> É possível filtrar por período e por quantidade de faltas consecutivas.</li>
                <li><b>Inadimplentes:</b> alunos com mensalidades em aberto</li>
                <li><b>A terminar:</b> alunos que estão com o contrato próximo do término</li>
                <li><b>Terminaram:</b> Alunos que estão com a matrícula finalizada.</li>
                <li><b>Parcelas a receber:</b> É possível filtrar por período, pelo status da matrícula e
                também definir uma data limite de pagamento, para que mostre as parcelas com
                e sem desconto de pontualidade.</li>
                <li><b>Parcelas Recebidas:</b> É possível filtrar por período e pelo status da matrícula, as
                parcelas recebidas.</li>
                <li><b>Não matriculados:</b> Alunos que tem o cadastro feito, mas sem matricula.</li>
                <li><b>Acompanhar aluno:</b> Neste relatório é possível saber quais alunos estão
                atrasados ou adiantados nos cursos.</li>
                <li><b>Acompanhar alunos por módulos:</b> Este relatório possibilita acompanhar os
                alunos adiantados ou atrasados diferenciando por módulos.</li>
                <li><b>Perfil Aluno:</b> Neste relatório será possível ver quais foram as respostas dadas
                pelos alunos no questionário inicial do portal do Aluno. </li>
            </ul>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_alunos12.jpg" alt="">
            <br> <br>
        </p>
        `, `
            guia, aba, relatorio, relatorios, relatório, relatórios, aluno, alunos, anoversario, aniverário, frequencias, frequências, faltas, faltantes, inadimplencia, inadimplentes, terminar, terminaram, parcelas, receber, recebidas, acompanhar, módulos, modulos, perfil
        `,
        ""
    ],

    //37
    [`Matrículas`,
        `
        <p class="mx-2">
            Na guia de matrículas será possível retirar relatórios referentes apenas às matriculas dos
            alunos. <br>
            Dentre os relatórios estão: <br>
            <ul>
                <li><b>Curso matrícula:</b> Com este relatório você consegue puxar as matrículas por
                curso. Lembrando que curso é o avulso e módulo é o agrupamento de cursos.
                <li><b>Efetuadas:</b> Este relatório possibilita saber quais matriculas foram feitas naquele
                dia, mês atual ou meses anteriores.
                <li><b>Canc./trancadas:</b> Este relatório possibilita saber quais matriculas foram
                canceladas naquele dia, mês atual ou meses anteriores.
                <li><b>Ativas:</b> Este relatório mostra as matriculas ativas atualmente.
                <li><b>Por marketing:</b> Ex: Telemarketing, Mala Direta, Espontâneo e etc.
                <li><b>Por funcionário:</b> Mostra as matrículas feitas pelo funcionário escolhido no filtro,
                por período e ano.
                <li><b>Apostilas não entregues:</b> Este relatório possibilita saber quais matriculas
                precisarão de entrega de apostilas futuramente.
                <li><b>Prosp. Compra Apos.:</b> Este relatório demonstra as apostilas que precisam ser
                compradas e também filtra por apostila FÍSICA ou DIGITAL.
                <li><b>Apostilas entregues:</b> Este relatório demonstra as apostilas que foram entregues,
                em determinado período, de um determinado curso. É possível filtrar para ver
                somente as físicas ou só digitais.
                <li><b>Média por Matrícula:</b> Esse relatório mostra a média atual do curso em
                andamento, na ordem 1 da matrícula do aluno.
                <li><b>Relatório ANALÍTICO:</b> Permite gerar um relatório com filtros personalizados,
                de acordo com as opções disponíveis.
                <li><b>Relatório ONLINE:</b> Permite gerar um relatório somente com os alunos que tem
                a opção ONLINE selecionada na matrícula.
            </ul>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_matri.jpg" alt="">
            <br> <br>
        </p>
        `, `
            guia, aba, matrículas, matriculas, cursos, efetuadas, feitas, canceladas, trancadas, marketing, entregues, pospectos, compras, entregues, médias, medias, analíticos, analiticos, onlines, on-lines
        `,
        ""
    ],

    //38
    [`Cursos`,
        `
        <p class="mx-2">
            Nessa guia é possível verificar qual o saldo atual de apostilas dentro do sistema escola.
            É possível retirar o relatório com apostilas zeradas ou não, e também filtrar por apostilas
            físicas ou digitais. É possível também gerar o relatório (PDF, Excel).

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_cur1.jpg" alt="">
            <br> <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_cur2.jpg" alt="">
            <br> <br>
        </p>
        `, `
            guia, aba, cursos, apostilas
        `,
        ""
    ],

    //39
    [`Plano de contas`,
        `
        <p class="mx-2">
            A guia plano de contas faz parte de um manual secundário apenas sobre o uso do caixa
            dentro do sistema. Em caso de dúvidas, o manual também está disponível.
        </p>
        `, `
            guia, aba, plano de contas
        `,
        ""
    ],
    
    //40
    [`Quadro de horários`,
        `
        <p class="mx-2">
            O relatório de grade de horário permite que seja retirado um relatório com todas as
            informações referentes ao dia da semana, faixa etária, módulo, curso e laboratório que
            tem horários agendados. <br>
            Existem filtros que permitem um relatório mais preciso dependendo do tipo de
            informação que deseja. É possível retirá-lo em PDF ou em forma de planilha do Excel. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_quadro.jpg" alt="">
            <br> <br>
        </p>
        `, `
            guia, aba, horários, horarios, quadros
        `,
        ""
    ],

    //41
    [`Grade de horários`,
        `
        <p class="mx-2">
            O relatório de grade de horário traz informações a respeito dos horários agendados no
            dia atual ou no dia que for escolhido. Ele traz em verde os alunos que tem horários
            agendados e em vermelho os alunos que tem reposição agendada, além do número de
            alunos agendados e o total de horários ainda disponíveis. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_grade.jpg" alt="">
            <br> <br>
        </p>
        `, `
            guia, aba, horários, horarios, grades
        `,
        ""
    ],

    //42
    [`Alunos ON/OFF-LINE`,
        `
        <p class="mx-2">
            Esse relatório exibe em tempo real, os alunos que estão agendados nos respectivos
            horários cadastrados no sistema escola. Assim que o aluno logar com sua matrícula no
            Portal do Aluno, o relatório mostrará um monitor com a mensagem de ON (on-line), e
            se o aluno não logar o mesmo mostrará como OFF (off-line). <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_onoff.jpg" alt="">
            <br> <br>
        </p>
        `, `
            guia, aba, horários, horarios, grades
        `,
        ""
    ],

    //43
    [`Boletim Alunos`,
        `
        <p class="mx-2">
            Essa opção do relatório permite a geração do boletim do aluno. Contendo várias
            informações. Sendo possível imprimi-lo em PDF. <br>
            Ao clicar na guia de Boletim, será aberto uma nova aba do navegador. Para puxar o
            relatório do aluno basta colocar o nome dele e em seguida dar ok. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_boletim.jpg" alt="">
            <br> <br>

            Dentro do boletim do aluno, existem algumas opções que podem ser impressas.
            Poderão ser tiradas as informações de: <br>
            <ul>
                <li>Nota dos alunos: Nessa opção além da nota do aluno também é possível
                visualizar os dias em que essas notas foram alcançadas.</li>
                <li>Frequências</li>
                <li>Sugestões dos alunos para o curso, sistema.</li>
                <li>Comentários</li>
                <li>Alterar aluno: Caso queira trocar o aluno para ver o boletim, esse botão te dá
                essa opção;</li>
            <ul>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/relatorios/rel_boletim2.jpg" alt="">
            <br> <br>

        </p>
        `, `
            guia, aba, horários, horarios, grades
        `,
        ""
    ],

    //OUTRAS OPÇÕES
    //44
    [`Sobre a guia Outras Opções`,
        `
        <p class="mx-2">
            Nessa guia temos 2 Subguias: Perfis e Parâmetros. <br>
    
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_sobre.jpg" alt="">
            <br> <br>

            Mais abaixo vamos falar separadamente de cada uma delas 
        </p>
        `, `
            guia, aba, outras opcoes, opçoes, parâmetros, paramentros, perfis, perfil
        `,
        ""
    ],

    //45
    [`Perfil`,
        `
        <p class="mx-2">
            Na guia perfil poderemos criar outros perfis para o sistema escola, dando níveis
            diferentes de permissões, para depois selecionarmos nos logins de cada funcionário
            criado. <br>
            Antes de criarmos novos perfis gostaríamos de salientar a importância de NÃO
            ALTERAR o perfil ADMIN. O perfil Admin é o principal, e por isso contém todas as
            permissões do sistema. Alterando ele será necessário um reset do sistema para que seja
            possível retornar todas as permissões deste perfil. <br>
            Para criar novos perfis basta clicar no botão + NOVO. Este botão permitirá a criação de
            um novo perfil com o nome que você desejar. Inicialmente coloca-se o nome e depois
            limita-se as permissões. <br>
            Do lado esquerdo temos todas as guias do sistema e suas subguias. No grau de
            permissões temos 4 níveis: <br>
            <ul>
                <li><b>3 - Excluir:</b> Esse nível de permissão permite que o funcionário com essa
                permissão consiga fazer qualquer tipo de movimentação dentro do sistema.
                Desde incluir até excluir informações.</li>
                <li><b>2 - Edição (Leitura/Escrita):</b> Neste nível o funcionário poderá editar as
                informações de dentro do sistema, mas não poderá excluí-las.</li>
                <li><b>1 - Leitura:</b> Neste caso o funcionário só poderá ler as informações do sistema,
                mas não conseguirá fazer nenhum tipo de alteração</li>
                <li><b>0 - Negado:</b> Com esse nível de permissão a guia selecionada não ficará visível
            para o funcionário. </li>
            </ul>
            As permissões devem ser dadas de acordo com o perfil criado e com o funcionário que
            terá esse perfil atrelado ao seu Login, variando de acordo com a necessidade da sua
            escola. <br>
            Depois de colocar todas as permissões o botão GRAVAR ficará ativo, basta clicar nele
            para concluir a criação do novo perfil. <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_perfil.jpg" alt="">
            <br> <br>

        </p>
        `, `
            guia, aba, outras opcoes, opçoes, perfis, perfil, permissões, permissoes, permissão, permissao
        `,
        ""
    ],

     //45
     [`Parâmetros`,
     `
     <p class="mx-2">
        A guia parâmetros traz informações a respeito da parte gerencial da escola. Nessa guia
        informações como descontos de pagamento para alunos, nome da escola, CNPJ,
        endereço, senha do instrutor, entre outras, podem ser configuradas. <br>

        <br>
        <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par1.jpg" alt="">
        <br> <br>

        Na guia parâmetros encontramos outras 6 subguias: <br>
        <ul>
            <li><b>GERAIS:</b> Nessa guia poderão ser colocadas informações como:</li>
            <ul>
                <li>Juros diários cobrados nas parcelas em atraso;</li>
                <li>Valor cobrado do aluno para cada curso extra;</li>
                <li>Solicita finalização de curso ao abrir o caixa?;</li>
                <li>Senha do gerente;</li>
                <li>Desconto cartão à vista;</li>
            </ul>

            Entre outras informações. Todas que estiverem com o * são de preenchimento
            obrigatório. <br>

            <li><b>EMPRESA:</b> as informações colocadas nessa guia aparecerão no carnê simples
            do sistema. Caso não seja preenchida essas informações, no carnê sairá apenas
            xxxxxxxx ao invés das informações da escola. Também será possível inserir no
            sistema seu próprio contrato (ou visualizar o contrato que vai pré-definido com o
            sistema) e a imagem da logo da sua unidade.</li>
            
            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par2.jpg" alt="">
            <br> <br>

            <li><b>PORTAL DO ALUNO:</b> Todas as funcionalidades descritas a seguir são opcionais,
            basta acessar o Sistema Escola em Outras Opções > Parâmetros > Portal do Aluno.</li>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par4.jpg" alt="">
            <br> <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par5.jpg" alt="">
            <br> <br>

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par3.jpg" alt="">
            <br> <br>

            <i>Obs.: Para acessar a aba Parâmetros, o usuário logado deve ter a devida permissão definida
            em seu perfil.</i><br>

            <ul>
                <li><b>Função - Bloqueio ao Concluir Curso</b><br>
                    Quando ativo, solicita a senha do funcionário na primeira aula de cada
                    curso, caso seja necessário a aplicação de avaliação antes do início do
                    próximo curso.
                
                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par6.jpg" alt="">
                    <br> <br>
                    
                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par7.jpg" alt="">
                    <br> <br>
                </li>

                <li><b>Função - Exibir Mensagem Parabéns</b>
                    Quanto ativo, exibe uma mensagem padronizada de felicitações exibida ao aluno no dia do seu
                    aniversário.

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par8.jpg" alt="">
                    <br> <br>
                    
                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par9.jpg" alt="">
                    <br> <br>
                </li>

                <li><b>Função - Questionário Perfil do Aluno</b>
                    Questionário de perfil solicitado ao aluno em seu primeiro acesso ao Portal do Aluno.
                    Futuramente, esses dados poderão ser filtrados no Sistema Escola e usados para
                    análises de perfil de aluno, trabalhando mais próximo ao aluno e assim o fidelizando
                    muito melhor com base em suas preferências.

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par10.jpg" alt="">
                    <br> <br>

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par11.jpg" alt="">
                    <br> <br>

                    Uma vez preenchido, o perfil fica registrado no sistema e pode ser acessado/editado dentro do
                    Portal do Aluno.

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par12.jpg" alt="">
                    <br> <br>
                </li>

                <li><b>Função - Exibir Mensagem de Aula Grátis</b>
                    Mensagem personalizada exibida 4 aulas antes do término de cada curso.
                    Considerando os interesses do aluno e suas intenções após finalizar o curso, essa
                    opção permite oferecer uma aula grátis para que o aluno conheça outros cursos e
                    pacotes da unidade, aumentando as chances do aluno se sentir ainda mais interessado
                    em continuar fazendo uso da plataforma. <b>Caso queira desabilitar essa função, basta
                    apagar o texto do campo Mensagem Aula Grátis</b>.

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par13.jpg" alt="">
                    <br> <br>

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par14.jpg" alt="">
                    <br> <br>
                <li>

                <li><b>Função - Exibir Mensagem de Prêmio</b>
                    Quando ativa, uma mensagem personalizada é exibida quando o aluno atingir 50% de
                    cada curso. As definições dos prêmios ficam a critério da unidade e podem ser coisas
                    simples, mas que já fazem grande diferença no sentido de cativar o aluno. O aluno
                    recebe um agradecimento ou uma mensagem de reconhecimento da escola pois já está
                    na metade do curso, gerando assim um incentivo para o aluno, aumentando as
                    chances de fidelização.

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par15.jpg" alt="">
                    <br> <br>

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par16.jpg" alt="">
                    <br> <br>
                </li>

                <li><b>Função - Plano de Fundo Personalizado</b>
                    Possibilita ao cliente definir o plano de fundo da tela de login do Portal do Aluno. Basta
                    definir a URL desejada para que os alunos acessem ao portal a partir dela e, em
                    seguida, definir a URL correspondente a imagem escolhida de acordo com o
                    dimensionamento especificado (Navegador, tablet e celular). <b>Lembre-se de que o
                    campo de URL não deve conter caracteres especiais</b>. <br> <br>
                    <b>Nota:</b> Uma vez que definida uma imagem para plano de fundo em um determinado
                    dimensionamento, todos os outros devem ser definidos para que a alteração seja
                    aplicada. <br>
            
                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par17.jpg" alt="">
                    <br> <br>

                    Após preencher os campos, salve as alterações para obter a sua URL de acesso. Feito
                    isso, você também pode acessar a página do Portal do Aluno e ver suas definições
                    aplicadas clicando no link. <br>

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par18.jpg" alt="">
                    <br> <br>

                    Note que ao acessar a URL personalizada o plano de fundo da tela de Login é a mesma
                    imagem que foi definida na configuração.

                    <br>
                    <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par19.jpg" alt="">
                    <br> <br>
                </li>
                
                <li><b>$ DESCONTOS:</b> Na guia descontos será possível colocar o valor a ser
                    descontado em casos de alunos que paguem até uma data x. Podendo ser o valor
                    em reais ou porcentagem.
                </li>

                <li><b>SMS:</b> O sistema vem com a opção de ser inserido um sistema de envio de SMS,
                    lembrando o aluno do horário de aula, enviando parabéns no dia do aniversário,
                    e avisando em caso de falta. Para colocar essa função no sistema é necessário
                    adquirir o sistema com outra empresa. O tutorial para inserir a função será
                    disponibilizado também.
                </li>

                <li><b>PAGSEGURO:</b> Nosso grupo tem parceria com a pagseguro, para que usando o
                    nosso sistema, você consiga ter descontos nas taxas de uso. Para se enquadrar
                    nas taxas será necessário enviar um e-mail solicitando à pagseguro a inclusão.
                    Vide tutorial pagseguro. <br>
                </li>
        </ul>

        Após ser incluído na parceria, você deverá colocar as informações pedidas nos campos.
        O e-mail de cadastro da PAGSEGURO, o Token gerado (caso não saiba como gerar,
        nosso suporte técnico ou da pagseguro poderá te auxiliar) e em quantas parcelas você
        deseja que o aluno possa parcelar sem que seja cobrado juros, a quantidade não pode ser
        menor do que 1 e nem maior do que 12. <br> <br>

        Após incluir essas informações o sistema estará habilitado para gerar boletos e efetuar
        pagamentos com cartão direto pela matricula do aluno.

        <br>
        <img class="img-fluid my-2 img-exp" src="static/images/outrasopcoes/oo_par20.jpg" alt="">
        <br> <br>
        
        Os planos de recorrência precisam ser criados antes de serem inseridos na matrícula do
        aluno. <br>
        Para cadastrar a recorrência na matrícula serão necessárias algumas informações paga o
        pagamento, vide tutorial pagseguro. <br>
        Caso queira, todas as informações poderão ser editadas posteriormente. <br>
        O TOKEN não fica visível por questões de segurança após a conclusão da edição. <br>
     </p>
     `, `
         guia, aba, outras opcoes, opçoes, parâmetros, paramentros, perfis, perfil
     `,
     ""
 ],
]

/*
    [`Title`,
        `
        <p class="mx-2">
           Content

            <br>
            <img class="img-fluid my-2 img-exp" src="static/images/" alt="">
            <br> <br>

            <button class="btn btn-success text-white"><b>x</b> CANCELA MATRÍCULA</button>

        </p>
        `, `
            guia, aba, 
        `,
        ""
    ],
*/