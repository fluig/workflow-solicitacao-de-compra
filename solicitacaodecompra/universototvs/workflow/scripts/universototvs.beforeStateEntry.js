function beforeStateEntry(sequenceId){
	
	
	log.info("sequenceID" + sequenceId);
	
	log.info("WKNumProces" + getValue("WKNumProces"));
	log.info("WKUser" + getValue("WKUser"));
	
	if (sequenceId == 2 || sequenceId == 6) {
		
		var parametros = new java.util.HashMap();			
		parametros.put("URL","wwww.google.com/" + getValue("WKNumProces"));
		
		var destinatarios = new java.util.ArrayList();
		destinatarios.add("jeferson.francisco@fluig.com");
		
		notifier.notify(getValue("WKUser"), "cotar", parametros, destinatarios, "text/html");
	}

}