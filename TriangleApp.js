var vertexShaderText =
[
'precision mediump float;'
].join('\n')

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




}
