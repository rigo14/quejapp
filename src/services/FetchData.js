import Store from '../store/Store'

export function getData() {
    const source = 'http://quejapp.warecrafty.com/data';
    fetch(source)
        .then(data => data.json())
        .then(json => {

            console.log(json);
            
            const data = {
                labels: [
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
                ],
                datasets: [{
                    label: 'Cantidad de denuncias',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [
                        65, 
                        59, 
                        80, 
                        81, 
                        56, 
                        55, 
                        40,
                        11,
                        40,
                        90,
                        65,
                        59,
                        80,
                        81,
                        56,
                        55,
                        40,
                        11,
                        40,
                        90,
                        65,
                        59,
                        80,
                        81,
                        56,
                        55,
                        40,
                        11,
                        40,
                        90,
                        37
                    ]
                }]
            }
            
            Store.setState({ chartData: data })
        })
}

/*
{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }]
            }
*/

/*
'Aguascalientes',
'Baja California',
'Baja California Sur',
'Campeche',
'Chiapas',
'Chihuahua',
'Coahuila de Zaragoza',
'Colima',
'Durango',
'Estado de México',
'Guanajuato',
'Guerrero',
'Hidalgo',
'Jalisco',
'Michoacán de Ocampo',
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
'Veracruz de Ignacio de la Llave',
'Yucatán',
'Zacatecas'
*/