$(function(){
$( document ).ready(function() {// ajax for log in
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: url, 
        type: "POST", 
        dataType: "html", 
        data: $("#"+ajax_form).serialize(),  
        success: function(response) { 
        	result = $.parseJSON(response);
        	$('#result_form').html('Name: '+result.name+'<br>Password: '+result.password);
    	},
    	error: function(response) { 
            $('#result_form').html('Error. Data not sent.');
    	}
 	});
}
$( document ).ready(function() {// ajax for register
    $("#btnreg").click(
		function(){
			sendAjaxForms('resultform', 'ajax_formRegister', 'action_ajax_form.php');
			return false; 
		}
	);
});
function sendAjaxForms(resultform, ajax_formRegister, url) {
    $.ajax({
        url: url, 
        type: "POST", 
        dataType: "html", 
        data: $("#"+ajax_formRegister).serialize(),  
        success: function(response) { 
        	results = $.parseJSON(response);
        	$('#resultform').html('Name: '+results.nameReg+'<br>E-mail: '+results.email+'<br>Password: '+results.passwordReg);
    	},
    	error: function(response) { 
            $('#resultform').html('Error. Data not sent.');
    	}
 	});
}
$('#reg').hide();// приховуємо поле реєстрації
$('#startreg').on('click', function(){// виводить поле реєстрації
	$('#reg').show();
	$('#form').hide();
});
$("#passwordRet").on("keyup", function() {// провірка на співпадіння паролей
	var value_input1 = $("#passwordReg").val();
	var value_input2 = $(this).val();
	if(value_input1 != value_input2) {
		$(".error").html("Passwords do not match!");
		$("#btnreg").attr("disabled", "disabled");	
	} else {
		$("#btnreg").removeAttr("disabled");
		$(".error").html("");
	}
});
})