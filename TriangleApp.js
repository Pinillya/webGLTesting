var vertexShaderText =
[

'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'',
'void main()',
'{',
' gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}',
''

].join('\n');

var fragmentShaderText =
[
'precision mediump float;',
'',
'void main()',
'{',
' gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',
'}',
''
].join('\n');

var initTriangle = function () {
	console.log('init Triangle ');

	var canvas = document.getElementById('triangleCanvas');
	var gl = canvas.getContext('webgl');

	if (!gl) {
		alert('Get a new browser version, patahk. ')
	}


	// canvas.width = 600; || widow.innerHeight;
	// canvas.width = 800;
	// gl.viewport( 0, 0, 600, 800);

	console.log(gl);

	gl.clearColor(0.75, 0.85, 0.8, 1.0); // setting the color, but does not render at this point
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //this is where we render it.

	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragShader = gl.createShader(gl.FRAGMENT_SHADER);


	gl.shaderSource(vertexShader, vertexShaderText);
	gl.shaderSource(fragShader, fragmentShaderText);

	gl.compileShader(vertexShader);
	if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
		console.error('ERROR compiling vert shader ', gl.getShaderInfoLog(vertexShader));
		return;
	}

	gl.compileShader(fragShader);
	if(!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
		console.error('ERROR compiling frag shader ', gl.getShaderInfoLog(fragShader));
		return;
	}

	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragShader);
	gl.linkProgram(program);
	if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		console.error('ERROR linking program ', gl.getProgramInfoLog(program));
		return;
	}

	gl.validateProgram(program);
	if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS) ) {
		console.error('ERROR linking program ', gl.getProgramInfoLog(program));
		return;
	}

}
