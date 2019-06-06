function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetFactory.newDataset();
	dataset.addColumn("CODIGO");
	dataset.addColumn("DESCRICAO");
	dataset.addColumn("UM");
	dataset.addColumn("FABRICANTE");
	
	dataset.addRow(new Array('1',  'PRODUTO 1',  'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('2',  'PRODUTO 2',  'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('3',  'PRODUTO 3',  'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('4',  'PRODUTO 4',  'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('5',  'PRODUTO 5',  'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('6',  'PRODUTO 6',  'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('7',  'PRODUTO 7',  'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('8',  'PRODUTO 8',  'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('9',  'PRODUTO 9',  'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('10', 'PRODUTO 10', 'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('11', 'PRODUTO 11', 'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('12', 'PRODUTO 12', 'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('13', 'PRODUTO 13', 'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('14', 'PRODUTO 14', 'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('15', 'PRODUTO 15', 'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('16', 'PRODUTO 16', 'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('17', 'PRODUTO 17', 'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('18', 'PRODUTO 18', 'UN', 'DEVELOPERS'));
	dataset.addRow(new Array('19', 'PRODUTO 19', 'UN', 'DEVELOPERS'));
	
	return dataset;

}function onMobileSync(user) {

}