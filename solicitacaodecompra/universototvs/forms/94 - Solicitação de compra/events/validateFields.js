function validateForm(form) {
	var activity = getValue('WKNumState');
	if ((form.getValue("login") == null || form.getValue("login") == "")
			&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
		throw "usuario n\u00E3o pode ser vazio.";
	}
	if ((form.getValue("category") == null || form.getValue("category") == "")
			&& (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
		throw "Categoria n\u00E3o pode ser vazio.";
	}
}