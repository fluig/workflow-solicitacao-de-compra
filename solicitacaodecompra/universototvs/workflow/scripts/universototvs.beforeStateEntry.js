function beforeStateEntry(sequenceId){
		
	log.info("sequenceID" + sequenceId);
	
	log.info("WKNumProces" + getValue("WKNumProces"));
	log.info("WKUser" + getValue("WKUser"));
	
	var parametros = new java.util.HashMap();				
	
	var destinatarios = new java.util.ArrayList();
	destinatarios.add("jeferson.francisco@fluig.com");
	
	if (sequenceId == 2) {
		
		parametros.put("MESSAGE","Nova cotação, acesse: https://wcm.fluig.com/portal/<CODE_EMPRESA>/<CODE_PAGINA_PUBLICA>/supplier-quotation?isFullScreen=true&WKNumProces=" + getValue("WKNumProces"));
		notifier.notify(getValue("WKUser"), "emailfornecedor", parametros, destinatarios, "text/html");
	
	} else if (sequenceId == 6) {
		
		parametros.put("MESSAGE","Cotação Aprovada, aguardando o envio dos produtos. Ao enviar os produtos acesse https://wcm.fluig.com/portal/<CODE_EMPRESA>/<CODE_PAGINA_PUBLICA>/send-order?isFullScreen=true&WKNumProces=" + getValue("WKNumProces"));
		notifier.notify(getValue("WKUser"), "emailfornecedor", parametros, destinatarios, "text/html");
	}	

}