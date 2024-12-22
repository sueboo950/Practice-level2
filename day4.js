function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('myForm');
    const inputs = form.querySelectorAll('input[type="radio"]');

    inputs.forEach(input => {
        if (input.checked) {
            console.log(`Checked: ${input.name} = ${input.value}`);
        }
    });
}
