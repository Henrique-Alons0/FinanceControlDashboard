function checkDateByYear(year, invoiceDate) {
    console.log('year: ', year)
    console.log('invoiceDate: ', invoiceDate)
    let invoiceYear = invoiceDate.split("_")[1];

    if(year == invoiceYear)
        return {
            status: true,
            reference: invoiceDate
        };
    return {
        status: false,
        reference: invoiceDate
    };
}

function checkDateByQuarter(quarter, year, invoiceDate) {
    switch (quarter) {
        case 1:
            if(invoiceDate == `01_${year}` || invoiceDate == `02_${year}` || invoiceDate == `03_${year}`)
                return {
                    status: true,
                    reference: invoiceDate
                };
            return {
                status: false,
                reference: invoiceDate
            }
        case 2:
            if(invoiceDate == `04_${year}` || invoiceDate == `05_${year}` || invoiceDate == `06_${year}`)
                return {
                    status: true,
                    reference: invoiceDate
                };
            return {
                status: false,
                reference: invoiceDate
            }
    
        case 3:
            if(invoiceDate == `07_${year}` || invoiceDate == `08_${year}` || invoiceDate == `09_${year}`)
                return {
                    status: true,
                    reference: invoiceDate
                };
            return {
                status: false,
                reference: invoiceDate
            }
    
        case 4:
            if(invoiceDate == `10_${year}` || invoiceDate == `11_${year}` || invoiceDate == `12_${year}`)
                return {
                    status: true,
                    reference: invoiceDate
                };
            return {
                status: false,
                reference: invoiceDate
            }
    
        default:
            return {
                status: false,
                reference: "Invalid Parameter!"
            };
    }
}

function checkDateByMonth(date, invoiceDate) {
    if(invoiceDate == date)
        return {
            status: true,
            reference: invoiceDate
        };
    return {
        status: false,
        reference: invoiceDate
    }
}

function checkDateFilter(type, filterDate, invoiceDate, quarter){
    
    // Verifica se a nota está no mês de referência
    switch (type) {
        case 0:
            return checkDateByMonth(filterDate, invoiceDate)
        
        case 1:
            return checkDateByQuarter(quarter, filterDate, invoiceDate)
    
        case 2:
            return checkDateByYear(filterDate, invoiceDate)

        default:
            break;
    }
}

function convertMonths(month){
    var numbers = {
        '01': "JAN",
        '02': "FEV",
        '03': "MAR",
        '04': "ABR",
        '05': "MAI",
        '06': "JUN",
        '07': "JUL",
        '08': "AGO",
        '09': "SET",
        '10': "OUT",
        '11': "NOV",
        '12': "DEZ"
    };

    return numbers[month];

}