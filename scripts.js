function removeSpaces(string) {
    return string.trimEnd();
}

textarea = document.querySelector(".data");
textarea.addEventListener('input', autoResize, false);
 
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function myFunction() {
    var acc_number = document.getElementById("acc_number").value;
    var rep_code = document.getElementById("rep_code").value;
    var acc_name = document.getElementById("acc_name").value;
    var branch_code = document.getElementById("branch_code").value;

    var qty = document.getElementById("qty").value;
    var item_code = document.getElementById("item_code").value;
    var item_description = document.getElementById("item_description").value;

    var sp = document.getElementById("sp").value;
    var sp_gp = document.getElementById("sp_gp").value;
    var np = document.getElementById("np").value;
    var np_gp = document.getElementById("np_gp").value;
    
    var multilineString ='<p> Good day. </p>' +
        acc_number + ' - ' + rep_code + ' - ' + acc_name + ' - ' + branch_code + '<br><br>' +
        'Please assist:' + '<br>' +
        qty + ' x ' + item_code + ' - ' + item_description + '<br>' + 
        'SP: R' + sp + ' @ ' + sp_gp + '<br>' +
        'NP: R' + np + ' @ ' + np_gp + '<br><br>' +
        '<p>As per ' + rep_code + '/Customer </p>' +
        '<p> Thank you.</p>';

    var multiText =  'Good Day\n\n'+
    acc_number + ' - ' + rep_code + ' - ' + acc_name + ' - ' + branch_code + '\n\n' +
    'Please assist:\n' +
    qty + ' x ' + item_code + ' - ' + item_description + '\n' +
    'SP: R' + sp + ' @ ' + sp_gp + '\n' +
    'NP: R' + np + ' @ ' + np_gp + '\n\n' +
    'As per ' + rep_code + '/Customer \n\n' +
    'Thank you.';

    document.getElementById("demo").innerHTML = multilineString;
    
    navigator.clipboard.writeText(multiText).then(() => {
        alert("Copied to clipboard.");
    });
}

function clearInput(){
    var element = document.getElementById("form")
     element.reset();
}

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

const btn = document.getElementById('addmore');
btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form
  event.preventDefault();

  const inputs = document.querySelectorAll('#qty, #item_code, #item_description, #sp, #sp_gp, #np, #np_gp');

  inputs.forEach(input => {
    input.value = '';
  });
});

const checkbox = document.getElementById('checkMulti');

const submit_btn = document.getElementById('submit');

checkbox.addEventListener('click', function handleClick() {
  if(checkbox.checked) {
    submit_btn.style.display = 'none';
  } else {
    submit_btn.style.display = 'block';
  }
});

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

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
  }
});

$(function(){
  $('a').each(function(){
      if ($(this).prop('href') == window.location.href) {
          $(this).addClass('active'); $(this).parents('li').addClass('active');
      }
  });
});