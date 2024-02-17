const mockDataFromDataBase = {
    user: {
        name: "Henrique Alonso",
        email: "henriquetcalonso@gmail.com",
        password: "AlgumaSenhaCriativa1234!",
        role: "CEO - Co Founder",
        urlProfileImage: "https://avatars.githubusercontent.com/u/61738663?v=4"
    },
    clients: [
        {
            id: 1,
            name: "TechNation",
            cnpj: "00.000.000/0001-00",
            address: {
                street: "Avenida Brigadeiro Faria Lima, 234",
                neighborhood: "Jardim Europa",
                city: "São Paulo",
                country: "Brazil",
                cep: "18114-258"
            }
        },
        {
            id: 2,
            name: "HR Tech - Soluções em Tecnologia",
            cnpj: "00.000.000/0001-99",
            address: {
                street: "Avenida Paulista, 234",
                neighborhood: "Jardim Paulista",
                city: "São Paulo",
                country: "Brazil",
                cep: "19870-654"
            }
        },
        {
            id: 3,
            name: "Imperio da Cochinha",
            cnpj: "00.000.000/0001-88",
            address: {
                street: "Avenida Paulista, 234",
                neighborhood: "Jardim Paulista",
                city: "São Paulo",
                country: "Brazil",
                cep: "19870-654"
            }
        }
    ],
    invoices: [
        {
            id: 0,
            clientId: 1,
            value: 173545.98,
            dates: {
                due: "20_01_2023",
                issuance: "2022-12-28",
                payment: "",
                reference: "01_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 4, //0- Emitida; 1- Cobrança Realizada; 2- Pagamento em Atraso; 3- Pagamento Realizado; 4- Cancelada;
        },
        {
            id: 0,
            clientId: 1,
            value: 17345.98,
            dates: {
                due: "20_01_2023",
                issuance: "2022-12-28",
                payment: "",
                reference: "01_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3, //0- Emitida; 1- Cobrança Realizada; 2- Pagamento em Atraso; 3- Pagamento Realizado; 4- Cancelada;
        },
        {
            id: 1,
            clientId: 1,
            value: 98764.98,
            dates: {
                due: "20_02_2023",
                issuance: "2023-01-28",
                payment: "",
                reference: "02_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 2,
            clientId: 1,
            value: 4563.98,
            dates: {
                due: "20_03_2023",
                issuance: "2023-02-28",
                payment: "",
                reference: "03_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 2,
            clientId: 1,
            value: 56871.98,
            dates: {
                due: "20_03_2023",
                issuance: "2023-02-28",
                payment: "",
                reference: "03_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 2,
        },
        {
            id: 3,
            clientId: 1,
            value: 12364.98,
            dates: {
                due: "20_04_2023",
                issuance: "2023-03-28",
                payment: "",
                reference: "04_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 4,
            clientId: 1,
            value: 8952.98,
            dates: {
                due: "20_05_2023",
                issuance: "2023-04-28",
                payment: "",
                reference: "05_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 5,
            clientId: 1,
            value: 89651.98,
            dates: {
                due: "20_05_2023",
                issuance: "2023-05-28",
                payment: "",
                reference: "06_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 6,
            clientId: 1,
            value: 6000.00,
            dates: {
                due: "20_07_2023",
                issuance: "2023-06-28",
                payment: "",
                reference: "07_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 7,
            clientId: 1,
            value: 18900.98,
            dates: {
                due: "20_08_2023",
                issuance: "2023-07-28",
                payment: "",
                reference: "08_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 8,
            clientId: 1,
            value: 1235.98,
            dates: {
                due: "20_09_2023",
                issuance: "2023-08-28",
                payment: "",
                reference: "09_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 9,
            clientId: 1,
            value: 35000.00,
            dates: {
                due: "20_10_2023",
                issuance: "2023-09-28",
                payment: "",
                reference: "10_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 10,
            clientId: 1,
            value: 4595.98,
            dates: {
                due: "20_11_2023",
                issuance: "2023-10-28",
                payment: "",
                reference: "11_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 11,
            clientId: 1,
            value: 18345.98,
            dates: {
                due: "20_12_2023",
                issuance: "2023-11-28",
                payment: "",
                reference: "12_2023",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 12,
            clientId: 1,
            value: 987000.99,
            dates: {
                due: "20_01_2024",
                issuance: "2023-12-28",
                payment: "",
                reference: "01_2024",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 2,
        },
        {
            id: 13,
            clientId: 1,
            value: 5869.99,
            dates: {
                due: "20_02_2024",
                issuance: "2024-01-28",
                payment: "",
                reference: "02_2024",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 4,
        },
        {
            id: 14,
            clientId: 1,
            value: 58695.99,
            dates: {
                due: "20_02_2024",
                issuance: "2024-01-28",
                payment: "",
                reference: "02_2024",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 1,
        },
        {
            id: 15,
            clientId: 3,
            value: 58695.99,
            dates: {
                due: "20_02_2024",
                issuance: "2024-01-28",
                payment: "",
                reference: "02_2024",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 3,
        },
        {
            id: 16,
            clientId: 1,
            value: 12589.99,
            dates: {
                due: "20_02_2024",
                issuance: "2024-01-28",
                payment: "",
                reference: "02_2024",
            },
            documents: {
                invoice: "",
                ticket: "",
            },
            state: 0,
        },
    ],
    configs: {
        // Tema, Comportamentos, Funcionalidades e etc...
    }
}

const currentDate = new Date();
const currentDay = currentDate.getDay()+11;
const currentMonth = currentDate.getMonth() + 1;
const formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay;
const formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
const currentYear = currentDate.getFullYear();
const formattedDateWithDay = `${formattedDay}_${formattedMonth}_${currentYear}`;
const formattedDate = `${formattedMonth}_${currentYear}`;

$(document).ready(async () => {
    let dashboard = $('#dashboardContent')
    let invoices = $('#invoicesContent')
    let clients = $('#clientContent')
    let reports = $('#reportContent')
    let settings = $('#settingsContent')

    await populateElements();
    
    dashboard.show();
    invoices.hide();
    clients.hide();
    reports.hide();
    settings.hide();

    $('#dashboard').click(()=>{
        dashboard.show();
        invoices.hide();
        clients.hide();
        reports.hide();
        settings.hide();
    })
    $('#invoices').click(()=>{
        dashboard.hide();
        invoices.show();
        clients.hide();
        reports.hide();
        settings.hide();
    })
    $('#clients').click(()=>{
        dashboard.hide();
        invoices.hide();
        clients.show();
        reports.hide();
        settings.hide();
    })
    $('#reports').click(()=>{
        dashboard.hide();
        invoices.hide();
        clients.hide();
        reports.show();
        settings.hide();
    })
    $('#settings').click(()=>{
        dashboard.hide();
        invoices.hide();
        clients.hide();
        reports.hide();
        settings.show();
    })
})

function populateElements() {
    const profileField = $('#userInfo');
    let data, urlImage;

    urlImage = mockDataFromDataBase.user.urlProfileImage.lenght < 5 ? '../assets/person.svg' : mockDataFromDataBase.user.urlProfileImage;
    data = `<img id='imageFromUser' src='${mockDataFromDataBase.user.urlProfileImage}' alt=''><section><h5 id='userName'>${mockDataFromDataBase.user.name}</h5><h6>${mockDataFromDataBase.user.role}</h6></section><img id='dropdownIcon' class='dropdown-toggledropdown-toggle-split' data-bs-toggle='dropdown' aria-expanded='false' data-bs-reference='parent' src='../assets/chevronUp.svg' alt=''></img>`;
    
    profileField.append(data);
    manageIndicators(2, "2024", 1);
}

function manageIndicators(typeOfReferenceIndicator = 0, referenceIndicator = formattedDate, quarter = 1) { // 0- Month; 1- Quarter; 2- Year;
    let totalInvoicesForReference = 0, invoicesIssued = 0, invoicesDue = 0, invoicesReceivable = 0, invoicesPaid = 0, invoicesToDue = 0;
    let monthToMonthDefault = [], revenueEvolution = [], references = [];

    const totals = mockDataFromDataBase.invoices.reduce((acc, invoice) => {
        revenueEvolutionOnReference = 0;
        monthToMonthDefaultOnReference = 0;
        response = checkDateFilter(typeOfReferenceIndicator, referenceIndicator, invoice.dates.reference, quarter);
        if (response.status == true) {
            if (!references.includes(response.reference))
                references.push(response.reference);
            // Verifica o estado da nota e adiciona o valor ao total correspondente
            switch (invoice.state) {
                case 0: // Emitida
                    acc.totalIssued += invoice.value;
                    if(monthToMonthDefault[response.reference] === undefined){
                        monthToMonthDefault[response.reference] = {
                            reference: response.reference,
                            value: 0
                        }
                    } else {
                        monthToMonthDefault[response.reference].value += 0;
                    }
                    if(revenueEvolution[response.reference] === undefined){
                        revenueEvolution[response.reference] = {
                            reference: response.reference,
                            value: 0
                        }
                    } else {
                        revenueEvolution[response.reference].value += 0;
                    }
                    
                    if(invoice.dates.due.split("_")[1] == formattedDateWithDay.split("_")[1] && invoice.dates.due.split("_")[2] == formattedDateWithDay.split("_")[2]){
                        if(invoice.dates.due.split("_")[0] - formattedDateWithDay.split("_")[0] <= 5 && invoice.dates.due.split("_")[0] - formattedDateWithDay.split("_")[0] > 0){
                            invoicesToDue++;
                        }
                    }
                    totalInvoicesForReference++;
                    invoicesIssued++;
                    break;
                case 1: // Cobrança Realizada
                    acc.totalReceivable += invoice.value;
                    acc.totalIssued += invoice.value;
                    if(monthToMonthDefault[response.reference] === undefined){
                        monthToMonthDefault[response.reference] = {
                            reference: response.reference,
                            value: 0
                        }
                    } else {
                        monthToMonthDefault[response.reference].value += 0;
                    }
                    if(revenueEvolution[response.reference] === undefined){
                        revenueEvolution[response.reference] = {
                            reference: response.reference,
                            value: invoice.value
                        }
                    } else {
                        revenueEvolution[response.reference].value += invoice.value;
                    }
                    
                    if(invoice.dates.due.split("_")[1] == formattedDateWithDay.split("_")[1] && invoice.dates.due.split("_")[2] == formattedDateWithDay.split("_")[2]){
                        if(invoice.dates.due.split("_")[0] - formattedDateWithDay.split("_")[0] <= 5 && invoice.dates.due.split("_")[0] - formattedDateWithDay.split("_")[0] > 0){
                            invoicesToDue++;
                        }
                    }

                    totalInvoicesForReference++;
                    invoicesReceivable++;
                    break;
                case 2: // Pagamento em Atraso
                    acc.totalDue += invoice.value;
                    acc.totalIssued += invoice.value;
                    if(monthToMonthDefault[response.reference] === undefined){
                        monthToMonthDefault[response.reference] = {
                            reference: response.reference,
                            value: invoice.value
                        }
                    } else {
                        monthToMonthDefault[response.reference].value += invoice.value;
                    }
                    if(revenueEvolution[response.reference] === undefined){
                        revenueEvolution[response.reference] = {
                            reference: response.reference,
                            value: 0
                        }
                    } else {
                        revenueEvolution[response.reference].value += 0;
                    }
                    totalInvoicesForReference++;
                    invoicesDue++;
                    break;
                case 3: // Pagamento Realizado
                    acc.totalPaid += invoice.value;
                    acc.totalIssued += invoice.value;
                    if(monthToMonthDefault[response.reference] === undefined){
                        monthToMonthDefault[response.reference] = {
                            reference: response.reference,
                            value: 0
                        }
                    } else {
                        monthToMonthDefault[response.reference].value += 0;
                    }
                    if(revenueEvolution[response.reference] === undefined){
                        revenueEvolution[response.reference] = {
                            reference: response.reference,
                            value: invoice.value
                        }
                    } else {
                        revenueEvolution[response.reference].value += invoice.value;
                    }
                    totalInvoicesForReference++;
                    invoicesPaid++;
                    break;
                case 4: // Cancelada
                    acc.totalCanceled += invoice.value;
                    acc.totalIssued += invoice.value;
                    if(monthToMonthDefault[response.reference] === undefined){
                        monthToMonthDefault[response.reference] = {
                            reference: response.reference,
                            value: 0
                        }
                    } else {
                        monthToMonthDefault[response.reference].value += 0;
                    }
                    if(revenueEvolution[response.reference] === undefined){
                        revenueEvolution[response.reference] = {
                            reference: response.reference,
                            value: 0
                        }
                    } else {
                        revenueEvolution[response.reference].value += 0;
                    }
                    totalInvoicesForReference++;
                    invoices
                    break;
                default:
                    break;
            }
        }
        return acc;
    }, {
        totalIssued: 0,
        totalDue: 0,
        totalReceivable: 0,
        totalPaid: 0,
        totalCanceled: 0
    });
    
    var totalIssuedIndicator = $('#totalIssued')[0];
    var opts = {
        angle: 0,
        lineWidth: 0.16,
        radiusScale: 1,
        pointer: {
            length: 0.3,
            strokeWidth: 0.035,
            color: '#000000'
        },
        limitMax: false,
        limitMin: false,
        colorStart: '#6FADCF',
        colorStop: '#468fe8',
        strokeColor: '#E0E0E0',
        generateGradient: true,
        highDpiSupport: true,
        label: "Total Emitido"
    };
    let issuedIndicator = new Gauge(totalIssuedIndicator).setOptions(opts)
    issuedIndicator.maxValue = totalInvoicesForReference;
    issuedIndicator.animationSpeed = 32;
    issuedIndicator.set(invoicesIssued);
    $("#totalIssuedStart").text(0);
    $("#totalIssuedStop").text(totalInvoicesForReference);
    $("#totalIssuedSelected").text(invoicesIssued);
    var totalDueIndicator = $('#totalDue')[0];
    let dueIndicator = new Gauge(totalDueIndicator).setOptions(opts);
    dueIndicator.maxValue = totalInvoicesForReference;
    dueIndicator.animationSpeed = 32;
    dueIndicator.set(invoicesDue);
    $("#totalDueStart").text(0);
    $("#totalDueStop").text(totalInvoicesForReference);
    $("#totalDueSelected").text(invoicesDue);
    var totalReceivableIndicator = $('#totalReceivable')[0];
    let gauge = new Gauge(totalReceivableIndicator).setOptions(opts);
    gauge.maxValue = totalInvoicesForReference;
    gauge.animationSpeed = 32;
    gauge.set(invoicesReceivable);
    $("#totalReceivableStart").text(0);
    $("#totalReceivableStop").text(totalInvoicesForReference);
    $("#totalReceivableSelected").text(invoicesReceivable);
    var totalPaidIndicator = $('#totalPaid')[0];
    let paidIndicator = new Gauge(totalPaidIndicator).setOptions(opts);
    paidIndicator.maxValue = totalInvoicesForReference;
    paidIndicator.animationSpeed = 32;
    paidIndicator.set(invoicesPaid);
    $("#totalPaidStart").text(0);
    $("#totalPaidStop").text(totalInvoicesForReference);
    $("#totalPaidSelected").text(invoicesPaid);
    var totaltoDueIndicator = $('#totalToDue')[0];
    let toDueIndicator = new Gauge(totaltoDueIndicator).setOptions(opts);
    toDueIndicator.maxValue = totalInvoicesForReference;
    toDueIndicator.animationSpeed = 32;
    toDueIndicator.set(invoicesToDue);
    $("#totaltoDueStart").text(0);
    $("#totaltoDueStop").text(totalInvoicesForReference);
    $("#totaltoDueSelected").text(invoicesToDue);

    console.log("References: ", references)
    let revenueEvolutionData = {months: [], values: []};
    let monthToMonthDefaultData = {months: [], values: []};
    references.map((ref) => {
        revenueEvolutionData.months.push(convertMonths(revenueEvolution[ref].reference.split("_")[0]))
        revenueEvolutionData.values.push(revenueEvolution[ref].value)
        monthToMonthDefaultData.months.push(convertMonths(monthToMonthDefault[ref].reference.split("_")[0]))
        monthToMonthDefaultData.values.push(monthToMonthDefault[ref].value)
    })

    console.log('revenueEvolution', revenueEvolution)

    console.log('revenueEvolutionData: ', revenueEvolutionData)
    console.log('monthToMonthDefaultData: ', monthToMonthDefaultData)

    let revenueEvolutionCtx = $("#receitaChart")[0].getContext('2d');
    let revenueEvolutionChart = new Chart(revenueEvolutionCtx, {
        type: 'line',
        data: {
          labels: revenueEvolutionData.months,
          datasets: [
            {
                label: 'Receita',
                data: revenueEvolutionData.values,
                backgroundColor: 'rgba(54, 235, 99, 0.2)',
                borderColor: 'rgba(54, 235, 99, 1)',
                borderWidth: 1
            },
            {
                label: 'Inadimplência',
                data: monthToMonthDefaultData.values,
                backgroundColor: 'rgba(235, 54, 81, 0.2)',
                borderColor: 'rgba(235, 54, 81, 1)',
                borderWidth: 1
            } 
        ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    });

    console.log('Total Emitido:', totals.totalIssued);
    console.log('Total devido:', totals.totalDue);
    console.log('Total a Receber:', totals.totalReceivable);
    console.log('Total Pago:', totals.totalPaid);
    console.log('Total Cancelado:', totals.totalCanceled);
    
}