var index = {
  process: function(){
    var XLS = require('xlsjs');
    var workbook = XLS.readFile(__dirname + '/../../test.xls');
    console.log(workbook.Sheets.test);
  }
};

module.exports = index;
