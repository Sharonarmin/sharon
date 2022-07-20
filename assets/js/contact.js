var $form = $("#contact-form"),
 $successMsg = $(".msg-sucess");

$(document).ready(function(){
    
    $("#contact-form").validate({
	rules:{
		fname:{
			minlength:3,
            required:true
		},
		mail:{
			email:true,
			required: true
		},
		msg:{
		    required: true,
		    minlength:6,
		    
		}
	},
	messages: {
		fname:{
			required: "Please enter your name",
			minlength: "Minimum 3 characters"
		},
		mail:"Please enter your mail",
		msg:"Please enter your message"
	  },
	

	submitHandler: function() {
	  $successMsg.show("#success");
	}
   });

	$('#contact-form').on('click','#send-btn',function(e){
		e.preventDefault();
		
		if ($('#contact-form').valid())
		{
		var fname=$('#fname').val();
        var lname=$('#lname').val();
		var mail=$('#mail').val();
		var msg=$('#msg').val();
		
	var mail_obj={
		name:fname+' '+lname,
		mail:mail,
		msg:msg
	};
	console.log(mail_obj);
	$.ajax({
		url:'assets/php/contact_mail.php',
		type:'POST',
		data:mail_obj,
		success:function(data){
			console.log(data);
			$('#contact-form input').val('');
			$('#contact-form textarea').val('');
			Swal.fire(
                  'Message send sucessfully'
                )
		}
	});
		}
 });

});
