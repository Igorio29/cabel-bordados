/* GRAFICO 1 - RESUMO */

new Chart(document.getElementById("graficoResumo"), {
    type: "doughnut",
    data: {
        labels: ["Pago", "A Pagar"],
        datasets: [{
            data: [2500, 1200],
            backgroundColor: ["#4a3728", "#c2a68c"]
        }]
    }
});


/* GRAFICO 2 - CUSTO DOS PRODUTOS */

new Chart(document.getElementById("graficoCustos"), {
    type: "bar",
    data: {
        labels: ["Linha", "Tecido", "Máquina", "Outros"],
        datasets: [{
            label: "Custos (R$)",
            data: [500, 800, 300, 200],
            backgroundColor: "#6b4f3b"
        }]
    }
});


/* GRAFICO 3 - PAGAMENTOS POR MÊS */

new Chart(document.getElementById("graficoPagamentos"), {
    type: "line",
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
        datasets: [{
            label: "Recebimentos",
            data: [800, 1200, 1500, 1000, 2000],
            borderColor: "#4a3728",
            fill: false
        }]
    }
});/* CONFIG PADRÃO (ADICIONA ISSO NO TOPO) */
const configPadrao = {
    responsive: true,
    maintainAspectRatio: false
};


/* GRAFICO 1 - RESUMO */
new Chart(document.getElementById("graficoResumo"), {
    type: "doughnut",
    data: {
        labels: ["Pago", "A Pagar"],
        datasets: [{
            data: [2500, 1200],
            backgroundColor: ["#4a3728", "#c2a68c"]
        }]
    },
    options: configPadrao
});


/* GRAFICO 2 - CUSTO DOS PRODUTOS */
new Chart(document.getElementById("graficoCustos"), {
    type: "bar",
    data: {
        labels: ["Linha", "Tecido", "Máquina", "Outros"],
        datasets: [{
            label: "Custos (R$)",
            data: [500, 800, 300, 200],
            backgroundColor: "#6b4f3b"
        }]
    },
    options: configPadrao
});


/* GRAFICO 3 - PAGAMENTOS POR MÊS */
new Chart(document.getElementById("graficoPagamentos"), {
    type: "line",
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
        datasets: [{
            label: "Recebimentos",
            data: [800, 1200, 1500, 1000, 2000],
            borderColor: "#4a3728",
            fill: false,
            tension: 0.3
        }]
    },
    options: configPadrao
});