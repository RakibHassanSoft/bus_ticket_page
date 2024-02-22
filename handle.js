let totalCost = 0;
let couponApplied = false;
let originalCost = 0;

function handleButtonClick(cost, buttonId) {
    if (couponApplied) {
        totalCost = originalCost;
        couponApplied = false;
        document.getElementById('couponInput').value = '';
    }
    
    const button = document.getElementById(buttonId);
    if (button.classList.contains('bg-[#1DD100]', 'text-white')) {
        button.classList.remove('bg-[#1DD100]', 'text-white');
        totalCost -= cost;
        removeTableRow(buttonId);
    } else {
        button.classList.add('bg-[#1DD100]', 'text-white');
        totalCost += cost;
        addTableRow(buttonId, cost);
    }
    document.getElementById('totalCost').innerText = "BDT " + totalCost.toString();
    document.querySelector('.grand-total').textContent = "BDT " + totalCost.toString();
}


    function addTableRow(buttonId, cost) {
        const table = document.getElementById('costTable');
        const row = table.insertRow(table.rows.length - 1);
        const buttonCell = row.insertCell(0);
        const name= row.insertCell(1);
        const costCell = row.insertCell(2);
        buttonCell.innerHTML = buttonId;
        name.innerHTML = 'Economoy';
        costCell.innerHTML = cost;
        
    }

    function removeTableRow(buttonId) {
    const table = document.getElementById('costTable');
    for (let i = table.rows.length - 1; i >= 0; i--) {
        if (table.rows[i].cells[0].innerHTML === buttonId) {
            table.deleteRow(i);
            break;
        }
    }
    }


function applyCoupon() {
    const couponInput = document.getElementById('couponInput').value;
    if (couponInput === '1A2B') {
        if (!couponApplied) {
            originalCost = totalCost;
            totalCost *= 0.8; 
            couponApplied = true;
            // document.getElementById('totalCost').innerText = "BDT " + totalCost.toString(); // Update displayed total cost
            document.querySelector('.grand-total').textContent = "BDT " + totalCost.toString(); // Update grand total
            document.getElementById('couponInput').value = '';
        }
    } else {
        document.getElementById('fu').innerHTML = 'Try again';
        setTimeout(function() {
            document.getElementById('fu').innerHTML = '';
        }, 1000);
    }
}

let isMainVisible = true;

function toggleContent() {
    const mainContent = document.getElementById('mainContent');
    const sectionContent = document.getElementById('sectionContent');
    
    if (isMainVisible) {
        mainContent.classList.add('hidden');
        sectionContent.classList.remove('hidden');
        isMainVisible = false;
    } else {
        mainContent.classList.remove('hidden');
        sectionContent.classList.add('hidden');
        isMainVisible = true;
    }
}


