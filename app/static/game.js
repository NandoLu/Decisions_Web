document.addEventListener('DOMContentLoaded', () => {
    let turno = 1;
    let economia = 15000;
    let popularidade = 51;
    let inputAlterado = false;
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const anoInicial = new Date().getFullYear();
    let anoAtual = anoInicial;

    const economiaElement = document.querySelector('.value-item:nth-child(1)');
    const popularidadeElement = document.querySelector('.value-item:nth-child(2)');
    const mandatoElement = document.querySelector('.value-item:nth-child(3)');

    const impostoBInput = document.getElementById('impostoB');
    const impostoMInput = document.getElementById('impostoM');
    const impostoAInput = document.getElementById('impostoA');
    const impostoVendaInput = document.getElementById('impostoVenda');
    const saudeInput = document.getElementById('saude');
    const segurancaInput = document.getElementById('seguranca');
    const educacaoInput = document.getElementById('educacao');
    const infraestruturaInput = document.getElementById('infraestrutura');

    const pularTurnoButton = document.getElementById('pular-turno');
    const decretarButton = document.getElementById('decretar');

    const ctxEconomia = document.getElementById('economiaChart').getContext('2d');
    const ctxPopularidade = document.getElementById('popularidadeChart').getContext('2d');

    const economiaChart = new Chart(ctxEconomia, {
        type: 'line',
        data: {
            labels: [``],
            datasets: [{
                label: 'Dinheiro da economia',
                data: [economia],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const popularidadeChart = new Chart(ctxPopularidade, {
        type: 'line',
        data: {
            labels: [``],
            datasets: [{
                label: 'Popularidade',
                data: [popularidade],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    function formatarEconomia(valor) {
        // Limitar a quantidade de caracteres para 6
        let valorFormatado = valor.toFixed(0).toString().slice(0, 9);
        // Adicionar vírgulas para cada 3 casas
        return parseInt(valorFormatado).toLocaleString('pt-BR');
    }

    function atualizarValores() {
        
        economiaElement.textContent = `Dinheiro da economia: ${formatarEconomia(economia)}M`;
        popularidadeElement.textContent = `Popularidade: ${popularidade}%`;
        mandatoElement.textContent = `Mandato: ${meses[(turno - 1) % 12]} ${anoAtual}`;

        // Alterar a cor do texto com base nos valores
        if (economia < 0) {
            economiaElement.style.color = 'red';
        } else {
            economiaElement.style.color = 'white';
        }

        if (popularidade < 25) {
            popularidadeElement.style.color = 'red';
        } else if (popularidade < 50) {
            popularidadeElement.style.color = 'yellow';
        } else {
            popularidadeElement.style.color = 'white';
        }
        if (popularidade > 75) {
            popularidadeElement.style.color = 'green';
        }

        verificarEventos();
    }

    

    function atualizarGrafico() {
        economiaChart.data.labels.push(``);
        economiaChart.data.datasets[0].data.push(economia);
        popularidadeChart.data.labels.push(``);
        popularidadeChart.data.datasets[0].data.push(popularidade);

        // Limitar o gráfico a mostrar apenas os últimos 12 turnos
        if (economiaChart.data.labels.length > 20) {
            economiaChart.data.labels.shift();
            economiaChart.data.datasets[0].data.shift();
        }
        if (popularidadeChart.data.labels.length > 20) {
            popularidadeChart.data.labels.shift();
            popularidadeChart.data.datasets[0].data.shift();
        }

        economiaChart.update();
        popularidadeChart.update();
    }
    
    function verificarEventos() {

        if(economia < 2000000){
            const inflacao = Math.random();
            const divida = Math.random();
            if(inflacao < 0.00001){
                alert("A inflação está muito alta! Queda de 30% na popularidade");
                popularidade -= 30;
            }
            if(divida < 0.0001){
                alert("Investidores estão deixando o país!");
                economia -= 300000;
            }
        }

        if (popularidade < 25) {
            const assassinato = Math.random();
            const terremoto = Math.random();
            const assassinatof = Math.random();
            if (assassinatof < 0.1) {
                alert("Tentativa fracassada de assassinato!");
                popularidade -= 30;
            }
            if (terremoto < 0.002) { // 30% de chance
                alert("Um terremoto atinge parte do país! <br> Gasto de -20.000M");
                economia -= 200000;
                popularidade -= 30;
            }
            if (assassinato < 0.0001) {
                alert("Você foi assassinado devido à baixa popularidade!");
                finalizarJogo();
            }
        }

        if (popularidade <60 && popularidade > 30 ){
            const virus = Math.random();
            const recordeArrecadacao = Math.random();
            const terremoto = Math.random();
            const epidemia = Math.random();
            if (epidemia < 0.0001) { 
                alert("Uma epidemia atinge o país! - Gasto de -700.000M");
                economia -= 7000000;
                popularidade -= 30;
            }
            if (terremoto < 0.0001) { 
                alert("Um terremoto atinge parte do país! <br> Gasto de -20.000M");
                economia -= 200000;
                popularidade -= 30;
            }
            if (virus < 0.001){
                alert("Um vírus de espalha pelo país! <br> Gasto de -120.000M");
                economia -= 120000;
            }
            if (recordeArrecadacao < 0.001){
                alert("Recorde de arrecadação! <br> Ganho de +100.000M");
                economia += 1000000;
            }
        }

        if (popularidade > 75) {
            const milagreEconomico = Math.random();
            const recordeArrecadacao = Math.random();
            const terremoto = Math.random();
            const epidemia = Math.random();
            if (epidemia < 0.0001) { 
                alert("Uma epidemia atinge o país! - Gasto de -700.000M");
                economia -= 7000000;
                popularidade -= 30;
            }
            if (recordeArrecadacao < 0.001) {
                alert("Recorde de arrecadação! <br> Ganho de +100.000M");
                economia+= 1000000;
            }
            if (milagreEconomico < 0.0001) { 
                alert("Milagre econômico! <br> Ganho de +400.000M");
                economia+= 4000000;
                popularidade += 15;
            }
            if (terremoto < 0.001) { 
                alert("Um terremoto atinge parte do país! <br> Gasto de -200.000M");
                economia -= 2000000;
                popularidade -= 30;
            }
        }
    }
    

    function calcularImpacto() {
        const impostoB = parseInt(impostoBInput.value);
        const impostoM = parseInt(impostoMInput.value);
        const impostoA = parseInt(impostoAInput.value);
        const impostoVenda = parseInt(impostoVendaInput.value);
        const saude = parseInt(saudeInput.value);
        const seguranca = parseInt(segurancaInput.value);
        const educacao = parseInt(educacaoInput.value);
        const infraestrutura = parseInt(infraestruturaInput.value);

        // Impacto dos impostos
        switch (impostoB) {
            case 0:
                economia += 0;
                popularidade += 20;
                break;
            case 1:
                economia += 1000;
                popularidade += 15;
                break;
            case 2:
                economia += 2000;
                popularidade += 10;
                break;
            case 3:
                economia += 3000;
                popularidade += 5;
                break;
            case 4:
                economia += 4000;
                break;
            case 5:
                economia += 5000;
                popularidade -= 5;
                break;
            case 6:
                economia += 6000;
                popularidade -= 10;
                break;
            case 7:
                economia += 7000;
                popularidade -= 15;
                break;
            case 8:
                economia += 8000;
                popularidade -= 20;
                break;
            case 9:
                economia += 10000;
                popularidade -= 25;
                break;
        }
        // Impacto dos imposto Media Renda
        switch (impostoM) {
            case 0:
                economia += 0;
                popularidade += 24;
                break;
            case 1:
                economia += 1000;
                popularidade += 12;
                break;
            case 2:
                economia += 2000;
                popularidade += 6;
                break;
            case 3:
                economia += 3000;
                popularidade += 3;
                break;
            case 4:
                economia += 4000;
                break;
            case 5:
                economia += 5000;
                popularidade -= 3;
                break;
            case 6:
                economia += 6000;
                popularidade -= 6;
                break;
            case 7:
                economia += 7000;
                popularidade -= 9;
                break;
            case 8:
                economia += 8000;
                popularidade -= 12;
                break;
            case 9:
                economia += 10000;
                popularidade -= 24;
                break;
        }
        // Impacto dos imposto Alta Renda
        switch (impostoA) {
            case 0:
                economia += 0;
                popularidade += 4;
                break;
            case 1:
                economia += 10000;
                popularidade += 3;
                break;
            case 2:
                economia += 20000;
                popularidade += 2;
                break;
            case 3:
                economia += 30000;
                popularidade += 1;
                break;
            case 4:
                economia += 40000;
                break;
            case 5:
                economia += 50000;
                popularidade -= 1;
                break;
            case 6:
                economia += 60000;
                popularidade -= 2;
                break;
            case 7:
                economia += 70000;
                popularidade -= 3;
                break;
            case 8:
                economia += 80000;
                popularidade -= 4;
                break;
            case 9:
                economia += 90000;
                popularidade -= 5;
                break;
        }
        // Impacto de Imposto sobre Vendas
        switch (impostoVenda) {
            case 0:
                economia += 0;
                popularidade += 20;
                break;
            case 1:
                economia += 10000;
                popularidade += 15;
                break;
            case 2:
                economia += 20000;
                popularidade += 10;
                break;
            case 3:
                economia += 30000;
                popularidade += 5;
                break;
            case 4:
                economia += 40000;
                break;
            case 5:
                economia += 50000;
                popularidade -= 1;
                break;
            case 6:
                economia += 60000;
                popularidade -= 5;
                break;
            case 7:
                economia += 70000;
                popularidade -= 10;
                break;
            case 8:
                economia += 80000;
                popularidade -= 15;
                break;
            case 9:
                economia += 90000;
                popularidade -= 20;
                break;
        }
        // Impacto do investimento em saúde
        switch (saude) {
            case 0:
                economia += 0;
                popularidade -= 24;
                break;
            case 1:
                economia -= 50000;
                popularidade -= 18;
                break;
            case 2:
                economia -= 100000;
                popularidade -= 12;
                break;
            case 3:
                economia -= 150000;
                popularidade -= 6;
                break;
            case 4:
                economia -= 200000;
                break;
            case 5:
                economia -= 250000;
                popularidade += 6;
                break;
            case 6:
                economia -= 300000;
                popularidade += 12;
                break;
            case 7:
                economia -= 350000;
                popularidade += 18;
                break;
            case 8:
                economia -= 400000;
                popularidade += 24;
                break;
            case 9:
                economia -= 450000;
                popularidade += 30;
                break;
        }
        
        // Impacto do investimento em Educacao
        switch (educacao) {
            case 0:
                economia += 0;
                popularidade -= 40;
                break;
            case 1:
                economia -= 5000;
                popularidade += 7;
                break;
            case 2:
                economia -= 10000;
                popularidade += 14;
                break;
            case 3:
                economia -= 15000;
                popularidade += 21;
                break;
            case 4:
                economia += 20000;
                break;
            case 5:
                economia -= 25000;
                popularidade += 14;
                break;
            case 6:
                economia -= 30000;
                popularidade += 21;
                break;
            case 7:
                economia -= 35000;
                popularidade += 28;
                break;
            case 8:
                economia -= 40000;
                popularidade += 35;
                break;
            case 9:
                economia -= 45000;
                popularidade += 70;
                break;
        }
        // Impacto do investimento em segurança
        switch (seguranca) {
            case 0:
                economia += 0;
                popularidade -= 10;
                break;
            case 1:
                economia -= 500;
                popularidade -= 2.5;
                break;
            case 2:
                economia -= 1000;
                popularidade -= 0.5;
                break;
            case 3:
                economia -= 1500;
                popularidade -= 1;
                break;
            case 4:
                economia -= 2000;
                break;
            case 5:
                economia -= 2500;
                popularidade += 1;
                break;
            case 6:
                economia -= 3000;
                popularidade += 2;
                break;
            case 7:
                economia -= 3500;
                popularidade += 3;
                break;
            case 8:
                economia -= 4000;
                popularidade += 4;
                break;
            case 9:
                economia -= 4500;
                popularidade += 5;
                break;
        }
        // Impacto do investimento em Infraestrutura
        switch (infraestrutura) {
            case 0:
                economia += 0;
                popularidade -= 10;
                break;
            case 1:
                economia -= 500;
                popularidade -= 2.5;
                break;
            case 2:
                economia -= 1000;
                popularidade -= 0.5;
                break;
            case 3:
                economia -= 1500;
                popularidade -= 1;
                break;
            case 4:
                economia -= 2000;
                break;
            case 5:
                economia -= 2500;
                popularidade += 1;
                break;
            case 6:
                economia -= 3000;
                popularidade += 2;
                break;
            case 7:
                economia -= 3500;
                popularidade += 3;
                break;
            case 8:
                economia -= 4000;
                popularidade += 4;
                break;
            case 9:
                economia -= 4500;
                popularidade += 5;
                break;
        }

        // Limitar a popularidade entre 0% e 100%
        if (popularidade > 100) {
            popularidade = 100;
        } else if (popularidade < 0) {
            popularidade = 0;
        }
    }

    function proximoTurno() {
        turno++;
        inputAlterado = false; // Resetar a flag para o próximo turno
        if (turno > 2) { // 4 anos * 12 meses = 48 turnos
            finalizarJogo();
        } else {
            if ((turno - 1) % 12 === 0) {
                anoAtual++;
            }
            calcularImpacto();
            atualizarValores();
            atualizarGrafico();
        }
    }

    function decretar() {
        if (!inputAlterado) {
            alert("Você deve alterar um input antes de decretar.");
            return;
        }
        calcularImpacto();
        proximoTurno();
    }

    function finalizarJogo() {
        // Salvar valores no localStorage
        const nomeJogador = document.getElementById('nome-jogador').textContent;
        localStorage.setItem('nomeJogador', nomeJogador);
        localStorage.setItem('economia', economia);
        localStorage.setItem('popularidade', popularidade);
        
        // Redirecionar para a página de desempenho
        window.location.href = "/desempenho/";
    }

    function handleInputChange() {
        if (inputAlterado) {
            alert("Você só pode alterar um input por turno.");
            return;
        }
        inputAlterado = true;
    }

    function inicializarInputs() {
        impostoBInput.value = Math.floor(Math.random() * 10);
        impostoMInput.value = Math.floor(Math.random() * 10);
        impostoAInput.value = Math.floor(Math.random() * 10);
        impostoVendaInput.value = Math.floor(Math.random() * 10);
        saudeInput.value = Math.floor(Math.random() * 10);
        segurancaInput.value = Math.floor(Math.random() * 10);
        infraestruturaInput.value = Math.floor(Math.random() * 10);
    }

    impostoBInput.addEventListener('input', handleInputChange);
    impostoMInput.addEventListener('input', handleInputChange);
    impostoAInput.addEventListener('input', handleInputChange);
    impostoVendaInput.addEventListener('input', handleInputChange);
    saudeInput.addEventListener('input', handleInputChange);
    educacaoInput.addEventListener('input', handleInputChange);
    segurancaInput.addEventListener('input', handleInputChange);
    infraestruturaInput.addEventListener('input', handleInputChange);

    pularTurnoButton.addEventListener('click', (event) => {
        event.preventDefault();
        proximoTurno();
    });

    decretarButton.addEventListener('click', (event) => {
        event.preventDefault();
        decretar();
    });

    inicializarInputs();
    atualizarValores();
});
