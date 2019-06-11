function beforeStateEntry(sequenceId){
	var parametros = new java.util.HashMap();				
	
	/*Esse valor poderia ser pego do fornecedor selecionado no formulário*/
	var destinatarios = new java.util.ArrayList();
	destinatarios.add("jeferson.francisco@fluig.com");
	
	/*Etapa de cotação*/
	if (sequenceId == 2) {
		
		parametros.put("MESSAGE","Nova cotação, acesse: https://wcm.fluig.com/portal/<CODE_EMPRESA>/<CODE_PAGINA_PUBLICA>/" +
				"supplier-quotation?isFullScreen=true&WKNumProces=" + getValue("WKNumProces"));
		notifier.notify(getValue("WKUser"), "cotacao_fornecedor", parametros, destinatarios, "text/html");
	
	/*Etapa de Envio do pedido*/
	} else if (sequenceId == 6) {
		
		parametros.put("MESSAGE","Cotação Aprovada, aguardando o envio dos produtos. Ao enviar os produtos acesse " +
				"https://wcm.fluig.com/portal/<CODE_EMPRESA>/<CODE_PAGINA_PUBLICA>/send-order?isFullScreen=true&WKNumProces=" 
				+ getValue("WKNumProces"));
		notifier.notify(getValue("WKUser"), "cotacao_fornecedor", parametros, destinatarios, "text/html");
	}	
}