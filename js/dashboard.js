const mockDataFromDataBase = {
    user: {
        name: "Henrique Alonso",
        email: "henriquetcalonso@gmail.com",
        password: "AlgumaSenhaCriativa1234!",
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
        }
    ],
    invoices: [
        {
            id: 0,
            clientId: 1,
            value: 17345.98,
            dates: {
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
            id: 3,
            clientId: 1,
            value: 12364.98,
            dates: {
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
    ],
    configs: {
        // Tema, Comportamentos, Funcionalidades e etc...
    }
}

$(document).ready(() => {
    let dashboard = $('#dashboardContent')
    let invoices = $('#invoicesContent')
    let clients = $('#clientContent')
    let reports = $('#reportContent')
    let settings = $('#settingsContent')
    
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

function checkAndReloadPage(e) {
    console.log("Check aqui: ", e)
    switch (e) {
        case "":
            break;
        case "dashboard":
            dashboard.show();
            invoices.hide();
            clients.hide();
            reports.hide();
            settings.hide();
            break;
        case "invoices":
            break;
        case "clients":
            break;
        case "reports":
            break;
        case "settings":
            break;
    
        default:
            window.location.href = "notfound.html";
            break;
    }
}