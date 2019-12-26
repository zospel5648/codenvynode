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

app.get('/', function (req, res) {
  res.send('<style type="text/css">table,td,tr{border:1px black solid}</style><table><tr><td>姓名</td><td>陳鼎鈞</td></tr><tr><td>學號</td><td>M10807003</td></tr><tr><td>地址</td><td>開南大學</td></tr>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
