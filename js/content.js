const data1 = ['Miltai', '', 'Druska', 'Vanduo', 'Kiaušiniai'];
const data2 = ['Mikseris', '        ', 'Keptuvė', ' ', 'Šaukštas', 'Lėkštė'];
const data3 = ['A', 'AA', 'AAA'];
const data4 = ['B', 'BB', 'BBB'];

const ulDOM = document.querySelectorAll('.list');

// listDOM - DOM elementas, kuriame generuosime busima HTML
// data - gaunamas duomenu masyvas
function renderList(listDOM, data) {
    let HTML = '';

    for (const item of data) {
        if (item.trim().length === 0) {
            continue;
        }

        HTML += `<li>${item}</li>`
    }

    listDOM.innerHTML = HTML;
}

renderList(ulDOM[0], data1);
renderList(ulDOM[1], data2);
renderList(ulDOM[2], data3);
renderList(ulDOM[3], data4);