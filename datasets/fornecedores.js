function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetFactory.newDataset();
	dataset.addColumn("CODIGO");
	dataset.addColumn("NOME");
	dataset.addColumn("CNPJ");
	dataset.addColumn("EMAIL");
	dataset.addColumn("TELEFONE");
	
	dataset.addRow(new Array('1',  'FORNECEDOR 1',  '123456789', 'jeferson.francisco@fluig.com', '99999999999'));
	dataset.addRow(new Array('2',  'FORNECEDOR 2',  '123456789', 'jeferson.francisco@fluig.com', '99999999999'));
	dataset.addRow(new Array('3',  'FORNECEDOR 3',  '123456789', 'jeferson.francisco@fluig.com', '99999999999'));
	dataset.addRow(new Array('4',  'FORNECEDOR 4',  '123456789', 'jeferson.francisco@fluig.com', '99999999999'));
	dataset.addRow(new Array('5',  'FORNECEDOR 5',  '123456789', 'jeferson.francisco@fluig.com', '99999999999'));
	
	return dataset;

}function onMobileSync(user) {

}