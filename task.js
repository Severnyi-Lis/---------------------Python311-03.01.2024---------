function getDay(date) {
    let day = date.getDay();
    if(day == 0) {
        day = 7;
    }
    return day -1;
}
function createCalendar(elem, year, month) {
    
    let mon = month - 1;
    let d = new Date(year, mon)

    let table = `
    <caption>${month}.${year}</caption>
    <table>
        <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
        </tr>
        <tr>
        `;

    for(let i=0; i<getDay(d); i++){
    table += '<td></td>'
    }

    while(d.getMonth() ==mon){
        table += '<td>' + d.getDate() + '</td>'
        if(getDay(d) % 7 ==6) {
            //взятие остатка от деления
            table += '</tr><tr>'
        }
        d.setDate(d.getDate()+1)
    }

    table +='</tr></table>';
    elem.innerHTML = table
}

