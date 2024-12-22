function practice1() {
    document.body.innerHTML += `
        <div class="container">
            <div class="row">
                <div class="col">Column 1</div>
                <div class="col">Column 2</div>
                <div class="col">Column 3</div>
            </div>
        </div>
    `;
}

function practice2() {
    let rowHTML = '<div class="row">';
    for (let i = 1; i <= 3; i++) {
        rowHTML += `<div class="col">Column ${i}</div>`;
    }
    rowHTML += '</div>';
    document.body.innerHTML += `<div class="container">${rowHTML}</div>`;
}

function practice3() {
    let containerHTML = '<div class="container">';
    for (let i = 1; i <= 3; i++) {
        let rowHTML = '<div class="row">';
        for (let j = 1; j <= 3; j++) {
            rowHTML += `<div class="col">Row ${i} Column ${j}</div>`;
        }
        rowHTML += '</div>';
        containerHTML += rowHTML;
    }
    containerHTML += '</div>';
    document.body.innerHTML += containerHTML;
}
practice1();
practice2();
practice3();