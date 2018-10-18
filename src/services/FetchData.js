
const states = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'CDMX',
    'Chiapas',
    'Chihuahua',
    'Coahuila',
    'Colima',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
];

const dependenciesShortNames = [
    'SSP',
    'SEGOB',
    'SRE',
    'SHCP',
    'SEMARNAT',
    'SEP',
    'SALUD',
    'CULTURA',
    'PGR',
    'CJEF',
    'SECTUR',
    'STPS'
];

export function getData(component) {

    // * * * POR ESTADO * * * //

    // el objeto de configuración de datos del chart por estado
    let statesChartData = {
        labels: states,
        datasets: [{
            label: 'Cantidad',
            backgroundColor: 'rgba(0,188,212,0.2)',
            borderColor: 'rgba(0,188,212,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,188,212,0.4)',
            hoverBorderColor: 'rgba(0,188,212,1)',
            data: [
                55,49,30,67,45,44,66,51,15,33,43,23,53,34,35,37,16,45,34,54,34,53,31,34,54,43,35,66,34,12,45
            ]
        }]
    };

    // el objeto de configuración de opciones del chart por estado
    let statesChartOptions = { };

    // * * * POR DEPENDENCIAS * * * //

    // el objeto de configuración de datos del chart por dependencia
    let dependenciesChartData = {
        labels: dependenciesShortNames,
        datasets: [{
            label: 'Cantidad',
            backgroundColor: 'rgba(0,188,212,0.2)',
            borderColor: 'rgba(0,188,212,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,188,212,0.4)',
            hoverBorderColor: 'rgba(0,188,212,1)',
            data: [
                55, 49, 30, 67, 45, 44, 66, 51, 15, 33, 43, 23, 53, 34, 35, 37, 16, 45, 34, 54, 34, 53, 31, 34, 54, 43, 35, 66, 34, 12, 45
            ]
        }]
    };

    // el objeto de configuración de opciones del chart por dependencia
    let dependenciesChartOptions = { };

    // colocar todos los datos en el state del componente
    component.setState({
        statesChartData: statesChartData,
        statesChartOptions: statesChartOptions,
        dependenciesChartData: dependenciesChartData,
        dependenciesChartOptions: dependenciesChartOptions
    });

}
