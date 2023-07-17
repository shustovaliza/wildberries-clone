const tableHeaders = ['Название товара', 'Цена'];

export function createTableHeader() {
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');

    for (const header of tableHeaders) {
        const th = document.createElement('th');
        th.textContent = header;
        tableHeadRow.append(th);
    }

    tableHead.append(tableHeadRow);

    return tableHead;
}

export function createEmptyRow() {
    const tableRow = document.createElement('tr');
    const tableCell = document.createElement('td');
    tableCell.textContent = 'В корзине пока нет товаров';
    tableCell.style.width = '100%';
    tableCell.style.textAlign = 'center';
    tableCell.style.fontStyle = 'italic';
    tableRow.append(tableCell);
    return tableRow;
}

export function createRow({ name, price }) {
    const tableRow = document.createElement('tr');
    
    for (const header of tableHeaders) {
        
        const tableCell = document.createElement('td');
        
        if (header === 'Название товара') {
            tableCell.textContent = name;
        }
        
        if (header === 'Цена') {
            tableCell.textContent = price;
        }

        tableRow.append(tableCell);
    }

    return tableRow;
}
