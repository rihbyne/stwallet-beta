var express = require('express');
var app = express();

// The number of milliseconds in one day
var oneDay = 86400000;

// Use compress middleware to gzip content
app.use(express.compress());

// Serve up content from public directory
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));







//var array = obj.replace(/\}/g,'}, ');
//var array = obj.replace(/\ /g,'');
// var res   = array.split(", ");

//console.log(array);


app.get('/', function(req, res){

	var fs 	= require('fs');
	var obj = fs.readFileSync('D:/wallet.json', 'utf8');
	var array = obj.replace(/\}\n{/g,'}secureSpacing{');
	
	//array = array.replace(/\{/g,' {');
	array   = array.split("secureSpacing");

	var length = array.length;
	console.log(length);

	//res.send(array);

	var htmltable = '<table>'+
						'<thead>'+
							'<td>Number</td>'+
							'<td>Name</td>'+
							'<td>HostName</td>'+
							'<td>PID</td>'+
							'<td>Level</td>'+
							'<td>Error</td>'+
							'<td>Message</td>'+
						'</thead>'+
						'<tbody>';
		var p = 1;
		for(var i=0; i<length; i++ )
		{
			// console.log(array[i]);
			var data = JSON.parse(array[i]);

			htmltable += '<tr>'+
							'<td>'+p+'</td>'+
							'<td>'+data.name+'</td>'+
							'<td>'+data.hostname+'</td>'+
							'<td>'+data.pid+'</td>'+
							'<td>'+data.level+'</td>'+
							'<td>'+data.err+'</td>'+
							'<td>'+data.msg+'</td>'+
						 '</tr>';

			p++;
		}
					
			htmltable	+=	'</tbody></table>';

	res.send(htmltable);

})



app.listen(process.env.PORT || 3010);
console.log('Server started at port 3010');

