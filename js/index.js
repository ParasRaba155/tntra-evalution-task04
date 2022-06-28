document.getElementById('row2').style.display = 'none';
document.getElementById('row3').style.display = 'none';

function appendRows(event){
    let row2_flag = false;
    let row3_flag = false;
    if (document.getElementById('row2').style.display === 'none'){
        document.getElementById('row2').style.display = '';
        row2_flag = true;

        let s1_val = document.querySelector('#selector1').value;

        document.querySelector(`#selector2 option[value=${s1_val}]`).setAttribute('disabled',true);
        document.querySelector(`#selector3 option[value=${s1_val}]`).setAttribute('disabled',true);
    }
    if(!row2_flag && document.getElementById('row3').style.display === 'none'){
        document.getElementById('row3').style.display = '';
        row3_flag = true;

        let s2_val = document.querySelector('#selector2').value;

        document.querySelector(`#selector1 option[value=${s2_val}]`).setAttribute('disabled',true);
        document.querySelector(`#selector3 option[value=${s2_val}]`).setAttribute('disabled',true);
    }
    if(!row3_flag && !row2_flag && document.getElementById('row2').style.display === '' && document.getElementById('row3').style.display === ''){
        document.getElementById('row1').style.display = ''
    }
    event.preventDefault();
}

const add = document.getElementById("add_button");
add.addEventListener('click',appendRows);


let selector1 = document.getElementById('selector1');
let selector2 = document.getElementById('selector2');
let selector3 = document.getElementById('selector3');

selector1.addEventListener('change',disableDropdown);
selector2.addEventListener('change',disableDropdown);
selector3.addEventListener('change',disableDropdown);   

function disableDropdown(event){
    event.preventDefault();

    let s1_val = document.querySelector('#selector1').value;

    document.querySelector(`#selector2 option[value=${s1_val}]`).setAttribute('disabled',true);
    document.querySelector(`#selector3 option[value=${s1_val}]`).setAttribute('disabled',true);

     

    let s2_val = document.querySelector('#selector2').value;

    document.querySelector(`#selector1 option[value=${s2_val}]`).setAttribute('disabled',true);
    document.querySelector(`#selector3 option[value=${s2_val}]`).setAttribute('disabled',true);



    let s3_val = document.querySelector('#selector3').value;

    document.querySelector(`#selector1 option[value=${s3_val}]`).setAttribute('disabled',true);
    document.querySelector(`#selector2 option[value=${s3_val}]`).setAttribute('disabled',true);

}

const del1 = document.getElementById('delete_button');
const del2 = document.getElementById('delete_button2');
const del3 = document.getElementById('delete_button3');
del1.addEventListener('click',deleteRow)
del2.addEventListener('click',deleteRow2)
del3.addEventListener('click',deleteRow3)

function deleteRow(){
    let rowCount = document.getElementById('MyTable').rows.length;
    if(document.getElementById('row1').style.display === 'none'){
        rowCount -= 1;
    }
    if(document.getElementById('row2').style.display === 'none'){
        rowCount -= 1;
    }
    if(document.getElementById('row3').style.display === 'none'){
        rowCount -= 1;
    }

    if(rowCount > 2){
        document.getElementById('row1').style.display = 'none';
    }
}
function deleteRow2(){
    let rowCount = document.getElementById('MyTable').rows.length;
    if(document.getElementById('row1').style.display === 'none'){
        rowCount -= 1;
    }
    if(document.getElementById('row2').style.display === 'none'){
        rowCount -= 1;
    }
    if(document.getElementById('row3').style.display === 'none'){
        rowCount -= 1;
    }
    if(rowCount > 2){
        document.getElementById('row2').style.display = 'none';
    }
}

function deleteRow3(){
    let rowCount = document.getElementById('MyTable').rows.length;
    if(document.getElementById('row1').style.display === 'none'){
        rowCount -= 1;
    }
    if(document.getElementById('row2').style.display === 'none'){
        rowCount -= 1;
    }
    if(document.getElementById('row3').style.display === 'none'){
        rowCount -= 1;
    }
    if(rowCount > 2){
        document.getElementById('row3').style.display = 'none';
    }
}
