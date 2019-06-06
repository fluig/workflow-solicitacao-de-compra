/**
 * 
 */
$(function() {	
	
	$(".price").maskMoney({prefix:'R$ ', allowNegative: false, thousands:'.', decimal:',', affixesStay: true});
	
	if (CURRENT_STATE == 1 || CURRENT_STATE == 0) {
		solicitOrder();
	} else if (CURRENT_STATE == 2) {
		toQuote();
	} else if (CURRENT_STATE == 3) {
		approve();
	} else if (CURRENT_STATE == 6) {
		sendOrder();
	} else if (CURRENT_STATE == 16) {
		checkOrder();
	}
});

function solicitOrder() {
	$("#productPriceColumn").hide();
	$("#productPrice").hide();
	$("#approval").hide();
	$("#approveSection").hide();	
	$("#login").prop('readonly', true).prop('value', CURRENT_USER);
	$("#codeDiv").hide();
}

function toQuote(){
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
