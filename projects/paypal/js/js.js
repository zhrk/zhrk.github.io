document.getElementById('amount_input').addEventListener('input', changeAmount);

function changeAmount(event) {
	document.getElementById('form_amount').value = event.target.value;
}