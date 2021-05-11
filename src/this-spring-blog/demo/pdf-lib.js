/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-09-07 16:15:31
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-09-07 19:12:32
 */
var hummus = require('hummus');
var pdfDig = require('./pdf-digital-form');
const PDFDigitalForm = require('./pdf-digital-form');

var pdfParser = hummus.createReader('./test.pdf');

var digForm = new PDFDigitalForm(pdfParser);
console.log(digForm);
console.log(pdfParser);

if (digForm.hasForm()) {
    console.log('has');
} else {
    console.log('no');
}
// console.log(digForm.fields);