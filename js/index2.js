var counter = 1;

$('#add_button').click(function(){
    // debugger
    let row = $(this).siblings('#MyTable').children().children('#row1').html();
    let rowCount = $('#MyTable tr').length;
    if(rowCount < 4){
        counter++;
        $('#MyTable').append(`<tr id="row${counter}">`+row+`</tr>`);
        // now we will change the id of the created id so that we can access it
        // $(`#row${rowCount}`).children().children('select').attr('id',`selector${rowCount}`);
        // $(`#row${rowCount}`).children().children('input').attr('id',`delete_button${rowCount}`);
        $(`#row${counter}`).children().children('input').attr('class',`delete_but new`);

        
        for(let i=1; i<= counter; i++){
            curr_val = $('#row'+i).children().children('select').val();
            if(curr_val !== undefined){
                for(let j=i; j<= counter; j++){
                    if($('#row'+j).children().children('select').length !==0){
                        $('#row'+j).children().children(`select`).children(`option[value=${curr_val}]`).attr('disabled',true);
                    }

                }
            }
        }
    }
    $('.delete_but').click(function(){
        if($(this).attr('class') === 'delete_but new'){
            $(this).parent().parent().remove();
        }
    });
    
});