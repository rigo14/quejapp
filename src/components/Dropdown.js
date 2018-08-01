import React from 'react';

const statesData = [
    { name: 'Aguascalientes', href: '#aguascalientes' },
    { name: 'Baja California', href: '#baja-california' },
    { name: 'Baja California Sur', href: '#baja-california-sur' },
    { name: 'Campeche', href: '#campeche' },
    { name: 'CDMX', href: '#cdmx' },
    { name: 'Chiapas', href: '#chiapas' },
    { name: 'Chihuahua', href: '#chihuahua' },
    { name: 'Coahuila', href: '#coahuila' },
    { name: 'Colima', href: '#colima' },
    { name: 'Durango', href: '#durango' },
    { name: 'Guanajuato', href: '#guanajuato' },
    { name: 'Guerrero', href: '#guerrero' },
    { name: 'Hidalgo', href: '#hidalgo' },
    { name: 'Jalisco', href: '#jalisco' },
    { name: 'Michoacán', href: '#michoacan' },
    { name: 'Morelos', href: '#morelos' },
    { name: 'Nayarit', href: '#nayarit' },
    { name: 'Nuevo León', href: '#nuevo-leon' },
    { name: 'Oaxaca', href: '#oaxaca' },
    { name: 'Puebla', href: '#puebla' },
    { name: 'Querétaro', href: '#queretaro' },
    { name: 'Quintana Roo', href: '#quintana-roo' },
    { name: 'San Luis Potosí', href: '#san-luis-potosi' },
    { name: 'Sinaloa', href: '#sinaloa' },
    { name: 'Sonora', href: '#sonora' },
    { name: 'Tabasco', href: '#tabasco' },
    { name: 'Tamaulipas', href: '#tamaulipas' },
    { name: 'Tlaxcala', href: '#tlaxcala' },
    { name: 'Veracruz', href: '#veracruz' },
    { name: 'Yucatán', href: '#yucatan' },
    { name: 'Zacatecas', href: '#zacatecas' }
];

export default function StatesList() {
    return statesData.map(state => (
        <li>
            <a href={ state.href }>{ state.name }</a>
        </li>
    ));
}

/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function DropdownItems() {
    return statesData.map((state, i) => (
        <a key={'k-'+i} href={state.href}>{state.name}</a>
    ))
}

export function Dropdown() {
    return (
        <div className="dropdown">
            <button onClick={myFunction} className="dropbtn">Dropdown</button>
            <div id="myDropdown" className="dropdown-content">
                { DropdownItems() }
            </div>
        </div>
    );
}

// listItems