/*  Copyright (c) 2014 Austin Chamney, achamney@gmail.com.
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
define(function(){
quickforms.getMultiData = function (appName,fact, field, lookup,updateId, callback, templateID) {
	var me = this; // caller
	if(appName == 'CWS' && templateID != undefined){
		lookup = 'templates =' + templateID + "," + lookup ;
	}
	var serverQuery = new quickforms.ServerQuery({
		method: "GET",
		url: quickforms.quickformsUrl+'getMultiData'+quickforms.quickformsEnding,
		data: {app:appName,
				fact: fact,
				field: field,
				lookup: lookup,
				updateid:updateId
				}
	});
	serverQuery.fakeData = '[{"coursesSemester":"Fall","coursesCategory":"ADM3313","coursesLabel":"Entrepreneurial Mind: New Venture Creation","coursesKey":"13","coursesType":"other","coursesOrder":"1","selected":""},{"coursesSemester":"Fall","coursesCategory":"HIS2129","coursesLabel":"Technology, Society and Environment since 1800 *","coursesKey":"14","coursesType":"other","coursesOrder":"1","selected":""},{"coursesSemester":"Fall","coursesCategory":"PHY1122","coursesLabel":"Fundamentals of Physics II *","coursesKey":"15","coursesType":"eng","coursesOrder":"1","selected":""},{"coursesSemester":"Winter","coursesCategory":"SEG3103","coursesLabel":"Software Quality Assurance *","coursesKey":"16","coursesType":"required","coursesOrder":"1","selected":""}]';
	if(callback){
		serverQuery.addSuccessListener(
			function(data){
				callback.call(me,data);
				});
	}
	serverQuery.run();
	quickforms.serverQueries.push(serverQuery);
	return serverQuery;
};
});