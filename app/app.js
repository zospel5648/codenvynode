/*
 * Copyright (c) 2012-2019 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

/*eslint-env node*/

var express = require('express');
var app = express();
var request = require("request");
/*var url = 'https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_2330.tw';
var http = require("http");*/
var data,data2;

 request({
    url: "https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_2330.tw",
    method: "GET"
  }, function(e,r,b) {
      if(!e) {
        console.log(b);
        data=b;
    }
  });


 data = JSON.stringify(data, ["ts", "tko"], 2);


app.get('/', function (req, res) {
  res.send(data2);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
