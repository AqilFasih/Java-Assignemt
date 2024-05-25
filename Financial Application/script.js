let totalIncome = 0;
let totalExpense = 0;

function addIncome() {
    addEntry('Income');
}

function addExpense() {
    addEntry('Expense');
}

function addEntry(type) {
    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;

    if (date === '' || isNaN(amount) || description === '') {
        alert('Please fill in all fields');
        return;
    }

    const table = document.getElementById('financialTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const dateCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);
    const descriptionCell = newRow.insertCell(2);
    const typeCell = newRow.insertCell(3);

    dateCell.innerHTML = date;
    amountCell.innerHTML = amount;
    descriptionCell.innerHTML = description;
    typeCell.innerHTML = type;

    updateTotals(type, amount);

    clearInputs();
}

function updateTotals(type, amount) {
    if (type === 'Income') {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }
    
    const remainingBalance = totalIncome - totalExpense;

    document.getElementById('totalIncome').innerText = totalIncome;
    document.getElementById('totalExpense').innerText = totalExpense;
    document.getElementById('remainingBalance').innerText = remainingBalance;
}

function clearInputs() {
    document.getElementById('date').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
}
