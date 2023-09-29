const btn = document.getElementById('addmore');
btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form
  event.preventDefault();

  const inputs = document.querySelectorAll('#qty, #item_code, #item_description, #sp, #sp_gp, #np, #np_gp');

  inputs.forEach(input => {
    input.value = '';
  });
});

var moreData = [];

function addMore(){
    var qty = document.getElementById("qty").value;
    var item_code = document.getElementById("item_code").value;
    var item_description = document.getElementById("item_description").value;

    var sp = document.getElementById("sp").value;
    var sp_gp = document.getElementById("sp_gp").value;
    var np = document.getElementById("np").value;
    var np_gp = document.getElementById("np_gp").value;

    var multiText1 =qty + ' x ' + item_code + ' - ' + item_description + '\n' +
    'SP: R' + sp + ' @ ' + sp_gp + '\n' +
    'NP: R' + np + ' @ ' + np_gp + '\n\n';

    moreData.push(multiText1);
    console.log(moreData.join(''));
}

function submitMore(){
    var acc_number1 = document.getElementById("acc_number").value;
    var rep_code1 = document.getElementById("rep_code").value;
    var acc_name1 = document.getElementById("acc_name").value;
    var branch_code1 = document.getElementById("branch_code").value;

    var multiText2 =  'Good Day\n\n'+
    acc_number1 + ' - ' + rep_code1 + ' - ' + acc_name1 + ' - ' + branch_code1 + '\n\n' +
    'Please assist:\n' +
    moreData.join('')+
    '\nAs per ' + rep_code1 + '/Customer \n\n' +
    'Thank you.';

    navigator.clipboard.writeText(multiText2).then(() => {
        alert("Copied to clipboard.");
        moreData = [];
    });
}


