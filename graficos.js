document.addEventListener('DOMContentLoaded', function () {
// Linguagens
const textosLinguagem = [
   "<ul><li>Charges;</li><li>Tirinhas;</li><li>Propagandas.</li></ul>",
    "<ul><li>Crônicas;</li><li>Contos;</li><li>Artigos de Opinião.</li></ul>",
    "<ul><li>Modernismo;</li><li>Romantismo;</li><li>Realismo.</li></ul>",
    "<ul><li>Regionalismos;</li><li>Pronomes;</li><li>Conjunções;</li><li>Tempos Verbais.</li></ul>",
    "<ul><li>Artes Visuais;</li><li>Música;</li><li>Dança;</li><li>Grafite.</li></ul>"
];
const canvasPizzaLinguagem = document.getElementById('pizzalinguagem');
const infoDivLinguagem = document.getElementById('info-grafico-linguagem');
if (canvasPizzaLinguagem && infoDivLinguagem) {
    const graficoPizzaLinguagem = new Chart(canvasPizzaLinguagem, {
        type: 'pie',
        data: {
            labels: [
                'Interpretação Textual',
                'Gêneros Textuais',
                'Literatura',
                'Gramática',
                'Artes',
            ],
            datasets: [{
                label: 'Média de Questões por prova',
                data: [17, 9, 7, 6, 5],
                backgroundColor: [
                    '#E52020',
                    '#FBA518',
                    '#D10363',
                    '#5272F2',
                    '#6EC207',
                ]
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
             aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        font: {
                            size: 12,
                            family:  "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000',
                        boxWidth: 20,
                        boxHeight: 20,
                        padding: 10,
                        usePointStyle: true,
                    }
                },
                title: {
                    display: true,
                    text: '',
                }
            },
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    infoDivLinguagem.innerHTML = textosLinguagem[index];
                }
            }
        }
    });
}

// Linha Linguagens
const canvasLineLinguagem = document.getElementById('linhaslinguagem');
if (canvasLineLinguagem) {
    const ctx = canvasLineLinguagem.getContext('2d');
    const graficoLinhaLinguagem = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Média Geral de Linguagens',
                data: [520.52, 523.8, 502.56, 517.44, 518.15, 528.0],
                borderColor: '#1B56FD',
                backgroundColor: '#F6F6F6',
                fill: false,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Médias Gerais de Linguagens por Ano',
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 10,
                            family: "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 16,
                            family: "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000'
                    }
                }
            }
        }
    });
}

// Matemática
const textosMat = [
    "<ul><li>Juros Simples;</li><li>Juros Compostos;</li><li>Escalas;</li><li>Desconto.</li></ul>",
    "<ul><li>Áreas;</li><li>Volumes;</li><li>Trigonometria no Triângulo Retângulo.</li></ul>",
    "<ul><li>Média;</li><li>Moda;</li><li>Mediana;</li><li>Desvio Padrão.</li></ul>",
    "<ul><li>Problemas contextualizados.</li></ul>",
    "<ul><li>Princípio fundamental da contagem;</li><li>Eventos Independentes.</li></ul>",    
];
const canvasPizzaMat = document.getElementById('pizzamat');
const infoDivMat = document.getElementById('info-grafico-mat');
if (canvasPizzaMat && infoDivMat) {
    const graficoPizzaMat = new Chart(canvasPizzaMat, {
        type:'pie',
        data: {
            labels:[
                ['Grandezas proporcionais','e porcentagem'],
                'Geometria',
                ['Análise de gráficos', 'e tabelas (Estatística)'],
                'Funções e Equações',
                ['Probabilidade e', 'Análise Combinatória',]
            ],
            datasets: [{
                label: 'Média de Questões por prova',
                data: [11,9,8,7,5],
                backgroundColor: [
                    '#E52020',
                    '#FBA518',
                    '#D10363',
                    '#5272F2',
                    '#6EC207',
                ]
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
             aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        font: {
                            size: 12,
                            family:  "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000',
                        boxWidth: 20,
                        boxHeight: 20,
                        padding: 10,
                        usePointStyle: true,
                    }
                },
                title: {
                    display: true,
                    text: '',
                }
            },
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    infoDivMat.innerHTML = textosMat[index];
                }
            }
        }
    });
}
// Linha Matemática
const canvasLineMat = document.getElementById('linhasmat')
if (canvasLineMat) {
    const ctx = canvasLineMat.getContext('2d');
    const graficoLinhaMat = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Média Geral de Matemática',
                data: [523.12, 520.58, 535.08, 542.5, 533.84, 529.0],
                borderColor: '#1B56FD',
                backgroundColor: '#F6F6F6',
                fill: false,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Médias Gerais de Matemática por Ano',
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 10,
                            family: "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 16,
                            family: "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000'
                    }
                }
            }
        }
    });
}
// Pizza Biologia
const textosBio = [
    "<ul><li>Cadeias Alimentares;</li><li>Ciclos biogeoquímicos;</li><li>Impactos Ambientais.</li></ul>",
    "<ul><li>DNA;</li><li>Mutações;</li><li>Teorias de Darwin/Lamark.</li></ul>",
    "<ul><li>Sistema Imunológico;</li><li>Sistema Endócrino;</li><li>Sistema Nervoso.</li></ul>",
    "<ul><li>Vírus;</li><li>Bactérias;</li><li>Vacinas.</li></ul>",
    "<ul><li>Organelas Celulares;</li><li>Fotossíntese.</li></ul>",    
];
const canvasPizzaBio = document.getElementById('pizzabio');
const infoDivBio = document.getElementById('info-grafico-bio');
if (canvasPizzaBio && infoDivBio) {
    const graficoPizzaBio = new Chart(canvasPizzaBio, {
        type:'pie',
        data: {
            labels:[
                'Ecologia/Sustentabilidade',
                'Genética e evolução',
                'Fisiologia Humana',
                'Microbiologia e Saúde',
                'Citologia',
            ],
            datasets: [{
                label: 'Média de Questões por prova',
                data: [5,4,3,2,1],
                backgroundColor: [
                    '#E52020',
                    '#FBA518',
                    '#D10363',
                    '#5272F2',
                    '#6EC207',
                ]
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
             aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        font: {
                            size: 12,
                            family:  "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000',
                        boxWidth: 20,
                        boxHeight: 20,
                        padding: 10,
                        usePointStyle: true,
                    }
                },
                title: {
                    display: true,
                    text: 'Biologia',
                }
            },
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    infoDivBio.innerHTML = textosBio[index];
                }
            }
        }
    });
}
// Pizza Química
const textosQuim = [
    "<ul><li>Cálculos Químicos;</li><li>Balanceamento de Equações.</li></ul>",
    "<ul><li>Chuva Ácida;</li><li>Efeito Estufa;</li><li>Poluição.</li></ul>",
    "<ul><li>Solubilidade;</li><li>pH;</li><li>Polaridade.</li></ul>",
    "<ul><li>Pilhas;</li><li>Corrosão.</li></ul>",
    "<ul><li>Entalpia;</li><li>Combustão.</li></ul>",    
];
const canvasPizzaQuim = document.getElementById('pizzaquim');
const infoDivQuim = document.getElementById('info-grafico-quim');
if (canvasPizzaQuim && infoDivQuim) {
    const graficoPizzaQuim = new Chart(canvasPizzaQuim, {
        type:'pie',
        data: {
            labels:[
                'Estequiometria',
                'Química Ambiental',
                'Prop. da Matéria',
                'Eletroquímica',
                'Termoquímica',
            ],
            datasets: [{
                label: 'Média de Questões por prova',
                data: [5,4,3,2,1],
                backgroundColor: [
                    '#E52020',
                    '#FBA518',
                    '#D10363',
                    '#5272F2',
                    '#6EC207',
                ]
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
             aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        font: {
                            size: 12,
                            family:  "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000',
                        boxWidth: 20,
                        boxHeight: 20,
                        padding: 10,
                        usePointStyle: true,
                    }
                },
                title: {
                    display: true,
                    text: 'Química',
                }
            },
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    infoDivQuim.innerHTML = textosQuim[index];
                }
            }
        }
    });
}
// Pizza Física
const textosFis = [
    "<ul><li>Leis de Newton;</li><li>Trabalho e Energia;</li><li>Potências.</li></ul>",
    "<ul><li>Circuitos;</li><li>Resistores;</li><li>Potência Elétrica.</li></ul>",
    "<ul><li>Frequência;</li><li>Espectro Eletromagnético.</li></ul>",
    "<ul><li>Calor Específico;</li><li>Máquinas Térmicas.</li></ul>",
    "<ul><li>Reflexão;</li><li>Refração.</li></ul>",    
];
const canvasPizzaFis = document.getElementById('pizzafis');
const infoDivFis = document.getElementById('info-grafico-fis');
if (canvasPizzaFis && infoDivFis) {
    const graficoPizzaFis = new Chart(canvasPizzaFis, {
        type:'pie',
        data: {
            labels:[
                'Mecânica',
                'Eletrodinâmica',
                'Acústica/Ondulatória',
                'Termodinâmica',
                'Óptica Geométrica',
            ],
            datasets: [{
                label: 'Média de Questões por prova',
                data: [5,4,3,2,1],
                backgroundColor: [
                    '#E52020',
                    '#FBA518',
                    '#D10363',
                    '#5272F2',
                    '#6EC207',
                ]
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
             aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        font: {
                            size: 12,
                            family:  "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000',
                        boxWidth: 20,
                        boxHeight: 20,
                        padding: 10,
                        usePointStyle: true,
                    }
                },
                title: {
                    display: true,
                    text: 'Física',
                }
            },
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    infoDivFis.innerHTML = textosFis[index];
                }
            }
        }
    });
}
// Linha Naturezas
const canvasLineNat = document.getElementById('linhasnat')
if (canvasLineNat) {
    const ctx = canvasLineNat.getContext('2d');
    const graficoLinhaNat = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Média Geral de Naturezas',
                data: [477.82, 490.41,491.79, 495.93, 495.75, 495.0],
                borderColor: '#1B56FD',
                backgroundColor: '#F6F6F6',
                fill: false,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Médias Gerais de Naturezas por Ano',
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 10,
                            family: "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 16,
                            family: "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000'
                    }
                }
            }
        }
    });
}
// Pizza História
const textosHist = [
    "<ul><li>Tráfico Negreiro;</li><li>Economia Açucareira;</li><li>Quilombos.</li></ul>",
    "<ul><li>Industrialização;</li><li>Movimentos Sociais.</li></ul>",
    "<ul><li>Guerra Fria;</li><li>ONU;</li><li>Oriente Médio.</li></ul>",
    "<ul><li>Grécia;</li><li>Roma;</li><li>Feudalismo.</li></ul>",
    "<ul><li>Constituição 1824;</li><li>Revolta da Vacin;</li><li>Ditadura Militar;</li><li>Era Vargas.</li></ul>",    
];
const canvasPizzaHist = document.getElementById('pizzahist');
const infoDivHist = document.getElementById('info-grafico-hist');
if (canvasPizzaHist && infoDivHist) {
    const graficoPizzaHist = new Chart(canvasPizzaHist, {
        type:'pie',
        data: {
            labels:[
                'Brasil Colônia',
                'Brasil República',
                'Contemporaneidade',
                ['Antiguidade Clássica', 'Idade Média'],
                ['Independência do','Brasil', 'Primeiro Reinado'],
                                ],
            datasets: [{
                label: 'Média de Questões por prova',
                data: [5,4,3,2,1],
                backgroundColor: [
                    '#E52020',
                    '#FBA518',
                    '#D10363',
                    '#5272F2',
                    '#6EC207',
                ]
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
             aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        font: {
                            size: 12,
                            family:  "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000',
                        boxWidth: 20,
                        boxHeight: 20,
                        padding: 10,
                        usePointStyle: true,
                    }
                },
                title: {
                    display: true,
                    text: 'História',
                }
            },
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    infoDivHist.innerHTML = textosHist[index];
                }
            }
        }
    });
}
// Pizza Geografia
const textosGeo = [
    "<ul><li>Enchentes;</li><li>Ilhas de Calor;</li><li>Mobilidade Urbana.</li></ul>",
    "<ul><li>Blocos Econômicos;</li><li>Conflitos Territoriais;</li><li>Globalização.</li></ul>",
    "<ul><li>Agronegócio;</li><li>Reforma Agrária.</li></ul>",
    "<ul><li>Estrutura Etária;</li><li>Êxodo Rural.</li></ul>",
    "<ul><li>Fusos Horários;</li><li>Biomas Brasileiros;</li><li>Cartografia;</li><li>Climatografia.</li></ul>",    
];
const canvasPizzaGeo = document.getElementById('pizzageo');
const infoDivGeo = document.getElementById('info-grafico-geo');
if (canvasPizzaGeo && infoDivGeo) {
    const graficoPizzaGeo = new Chart(canvasPizzaGeo, {
        type:'pie',
        data: {
            labels:[
                ['Urbanização e','Problemas Ambientais'],
                'Geopolítica',
                ['Agricultura e', 'Espaço Rural'],
                ['Demografia','Migrações'],
                'Geografia Física',
            ],
            datasets: [{
                label: 'Média de Questões por prova',
                data: [5,4,3,2,1],
                backgroundColor: [
                    '#E52020',
                    '#FBA518',
                    '#D10363',
                    '#5272F2',
                    '#6EC207',
                ]
            }]
        },
        options: {
            responsive: true,
             maintainAspectRatio: true,
             aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        font: {
                            size: 12,
                            family:  "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000',
                        boxWidth: 20,
                        boxHeight: 20,
                        padding: 10,
                        usePointStyle: true,
                    }
                },
                title: {
                    display: true,
                    text: 'Geografia',
                }
            },
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    infoDivGeo.innerHTML = textosGeo[index];
                }
            }
        }
    });
}
// Pizza Filosofia e Sociologia
const textosFS = [
    "<ul><li>DUDH.</li></ul>",
    "<ul><li>Kant;</li><li>Marx;</li><li>Foucault;</li><li>Contrato Social;</li><li>Ética;</li><li>Poder.</li></ul>",
    "<ul><li>MST;</li><li>Feminismo;</li><li>Lutas Indígenas.</li></ul>",
    "<ul><li>Multiculturalismo;</li><li>Indústria Social.</li></ul>",
    "<ul><li>Relações de Produção;</li><li>Alienação.</li></ul>",    
];
const canvasPizzaFS = document.getElementById('pizzafs');
const infoDivFS = document.getElementById('info-grafico-fs');
if (canvasPizzaFS && infoDivFS) {
    const graficoPizzaFS = new Chart(canvasPizzaFS, {
        type:'pie',
        data: {
            labels:[
                ['Cidadania','Direitos Humanos'],
                'Pensadores Modernos',
                'Movimentos Sociais',
                'Cultura e Identidade',
                'Trabalho e Capitalismo',
            ],
            datasets: [{
                label: 'Média de Questões por prova',
                data: [5,4,3,2,1],
                backgroundColor: [
                    '#E52020',
                    '#FBA518',
                    '#D10363',
                    '#5272F2',
                    '#6EC207',
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'left',
                    labels: {
                        padding: 32,
                        font: {
                            size: 12,
                            family:  "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000',
                        boxWidth: 20,
                        boxHeight: 20,
                        padding: 10,
                        usePointStyle: true,
                    }
                },
                title: {
                    display: true,
                    text: ['Filosofia','Sociologia'],
                }
            },
            onClick: (evt, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    infoDivFS.innerHTML = textosFS[index];
                }
            }
        }
    });
}
// Linha Humanas
const canvasLineHum = document.getElementById('linhashum')
if (canvasLineHum) {
    const ctx = canvasLineHum.getContext('2d');
    const graficoLinhaHum = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Média Geral de Humanas',
                data: [507.25, 511.15,519.94, 526.95, 523.35, 517.0],
                borderColor: '#1B56FD',
                backgroundColor: '#F6F6F6',
                fill: false,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Médias Gerais de Humanas por Ano',
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 10,
                            family: "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 16,
                            family: "'IBM Plex Sans', sans-serif",
                            weight: 'bold',
                        },
                        color: '#000000'
                    }
                }
            }
        }
    });
}
});