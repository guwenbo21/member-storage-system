var balance = 100;

function deduct() {
    if (balance >= 8) {
        balance = balance - (4 * 2);
        document.getElementById('balance').textContent = 'reod' + balance + 'yuan';
    } else {
        alert('error');
    }
}
