let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', showMsg);

function showMsg(){
    let name = prompt('Enter Name of Student');
    namasteBtn.textContent = 'Roll No. 1: ' + name;
}