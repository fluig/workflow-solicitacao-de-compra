/**
 * 
 */
$(function() {	
	
	$(".price").maskMoney({prefix:'R$ ', allowNegative: false, thousands:'.', decimal:',', affixesStay: true});
	
	switch(CURRENT_STATE) {
	  case 0:
	  case 1:
		  solicitOrder();
	    break;
	  case 2:
		  toBudget();
	    break;
	  case 3:
		  approve();
	    break;
	  case 6:
		  sendOrder();
	    break;
	  case 16:
		  checkOrder();
	    break;	  
	}
});

function solicitOrder() {
	$("#productPriceColumn").hide();
	$("#productPrice").hide();
	$("#approval").hide();
	$("#approveSection").hide();	
	$("#login").prop('readonly', true).prop('value', CURRENT_USER );
	$("#codeDiv").hide();
}

function toBudget(){
	$("#mainSection").hide();
	$("#code").prop('value', NUM_PROCES);
	$("#codeDiv").prop('readonly', true)		
	$("#approveSection").hide();
	$("#addProduct").hide();
	$(".bpm-mobile-trash-column").hide();
	$("#tableProducts").find('td,th').first().remove();		
	$(".form-control").attr('readonly', true);
	$(".price").attr('readonly', false);
	$("#productPriceColumn").addClass('required').addClass('text-danger');	
}

function approve(){
	$("#code").prop('value', NUM_PROCES);
	$("#codeDiv").prop('readonly', true);
	$("#addProduct").hide();
	$(".bpm-mobile-trash-column").hide();
	$("#tableProducts").find('td,th').first().remove();
	$(".form-control").attr('readonly', true);
}

function sendOrder(){
	$("#mainSection").hide();
	$("#approveSection").hide();
	$("#addProduct").hide();
	$(".bpm-mobile-trash-column").hide();
	$("#tableProducts").find('td,th').first().remove();
	$(".form-control").attr('readonly', true);
	$("#code").prop('value', NUM_PROCES);
	$("#codeDiv").prop('readonly', true);
	$("#alert").hide();
}

function checkOrder(){
	$("#codeDiv").prop('readonly', true);
	$("#addProduct").hide();
	$(".bpm-mobile-trash-column").hide();
	$("#tableProducts").find('td,th').first().remove();
	$(".form-control").attr('readonly', true);
	$("#approveSection").hide();
	$("#alert").hide();
}
