function myFunction() {
    var acc_number = document.getElementById("acc_number").value;
    var rep_code = document.getElementById("rep_code").value;
    var acc_name = document.getElementById("acc_name").value;
    var branch_code = document.getElementById("branch_code").value;

    var qty = document.getElementById("qty").value;
    var item_code = document.getElementById("item_code").value;
    var item_description = document.getElementById("item description").value;

    var sp = document.getElementById("sp").value;
    var sp_gp = document.getElementById("sp_gp").value;
    var np = document.getElementById("np").value;
    var np_gp = document.getElementById("np_gp").value;
    
    var multilineString ='<p> Good day. </p>' +
        acc_number + ' - ' + rep_code + ' - ' + acc_name + ' - ' + branch_code + '<br><br>' +
        'Please assist:' + 
        qty + ' x ' + item_code + ' - ' + item_description + '<br>' + 
        'SP: R' + sp + ' @ ' + sp_gp + '<br>' +
        'NP: R' + np + ' @ ' + np_gp + '<br><br>' +
        '<p>As per ' + rep_code + '/Customer </p>' +
        '<p> Thank you.</p>';
    document.getElementById("demo").innerHTML = multilineString;
}

function clearInput(){
    var element = document.getElementById("form")
     element.reset()
  }