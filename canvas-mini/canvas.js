var offset = 0

function drawCanvas() {
    const canvas = document.getElementById('tutorial')
    if (canvas.getContext) {
        // this browser supports canvas
        const ctx = canvas.getContext('2d')

        // Overlapping purple and pink squares:
        // ctx.fillStyle = 'rgb(200, 0, 0)'
        // ctx.fillRect(10, 10, 50, 50)

        // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
        // ctx.fillRect(30, 30, 50, 50)

        // A nested square with a transparent center and border inside
        // ctx.fillRect(25, 25, 100, 100)
        // ctx.clearRect(45, 45, 60, 60)
        // ctx.strokeRect(50, 50, 50, 50)

        // Making a simple triangle
        // ctx.beginPath()
        // ctx.moveTo(75, 50)
        // ctx.lineTo(100, 75)
        // ctx.lineTo(100, 25)
        // ctx.fill()

        // Smiley face
        // ctx.beginPath();
        // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        // ctx.moveTo(110, 75);
        // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        // ctx.moveTo(65, 65);
        // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        // ctx.moveTo(95, 65);
        // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        // ctx.stroke();

        // Filled Triangle
        // ctx.beginPath()
        // ctx.moveTo(25, 25)
        // ctx.lineTo(105, 25)
        // ctx.lineTo(25, 105)
        // ctx.fill()

        // Stroked triangle
        // ctx.beginPath();
        // ctx.moveTo(125, 125);
        // ctx.lineTo(125, 45);
        // ctx.lineTo(45, 125);
        // ctx.closePath();
        // ctx.stroke();

        // A collection of stroked and filled arcs
        // for (var i = 0; i < 4; i++) {
        //     for (var j = 0; j < 3; j++) {
        //         ctx.beginPath();
        //         var x = 25 + j * 50; // x coordinate
        //         var y = 25 + i * 50; // y coordinate
        //         var radius = 20; // Arc radius
        //         var startAngle = 0; // Starting point on circle
        //         var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        //         var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise 
        //         ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        //         if (i > 1) {
        //             ctx.fill();
        //         } else {
        //             ctx.stroke();
        //         }
        //     }
        // }

        // Speech balloon using quadratic bezier curves
        // ctx.beginPath();
        // ctx.moveTo(75, 25);
        // ctx.quadraticCurveTo(25, 25, 25, 62.5);
        // ctx.quadraticCurveTo(25, 100, 50, 100);
        // ctx.quadraticCurveTo(50, 120, 30, 125);
        // ctx.quadraticCurveTo(60, 120, 65, 100);
        // ctx.quadraticCurveTo(125, 100, 125, 62.5);
        // ctx.quadraticCurveTo(125, 25, 75, 25);
        // ctx.stroke();

        // Heart using cubic bezier curves
        // ctx.beginPath();
        // ctx.moveTo(75, 40);
        // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        // ctx.fill();

        // Saving shapes as a Path2D item
        // var rectangle = new Path2D();
        // rectangle.rect(10, 10, 50, 50);
        // var circle = new Path2D();
        // circle.moveTo(125, 35);
        // circle.arc(100, 35, 25, 0, 2 * Math.PI);
        // ctx.stroke(rectangle);
        // ctx.fill(circle);

        // Using nested for loop to draw square gradients with fillStyle
        // for (var i = 0; i < 6; i++) {
        //     for (var j = 0; j < 6; j++) {
        //       ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
        //                        Math.floor(255 - 42.5 * j) + ', 0)';
        //       ctx.fillRect(j * 25, i * 25, 25, 25);
        //     }
        // }

        // Using nested for loops to draw arcs using strokeStyle
        // for (var i = 0; i < 6; i++) {
        //     for (var j = 0; j < 6; j++) {
        //     ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
        //                      Math.floor(255 - 42.5 * j) + ')';
        //     ctx.beginPath();
        //     ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
        //     ctx.stroke();
        //     }
        // }

        // Using the globalAlpha transparency modifier to draw translucent arcs
        // draw background
        // ctx.fillStyle = '#FD0';
        // ctx.fillRect(0, 0, 75, 75);
        // ctx.fillStyle = '#6C0';
        // ctx.fillRect(75, 0, 75, 75);
        // ctx.fillStyle = '#09F';
        // ctx.fillRect(0, 75, 75, 75);
        // ctx.fillStyle = '#F30';
        // ctx.fillRect(75, 75, 75, 75);
        // ctx.fillStyle = '#FFF';
        // // set transparency value
        // ctx.globalAlpha = 0.2;
        // // Draw semi transparent circles
        // for (var i = 0; i < 7; i++) {
        //     ctx.beginPath();
        //     ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
        //     ctx.fill();
        // }

        // Applying transparency with rgba
        // Draw background
        // ctx.fillStyle = 'rgb(255, 221, 0)';
        // ctx.fillRect(0, 0, 150, 37.5);
        // ctx.fillStyle = 'rgb(102, 204, 0)';
        // ctx.fillRect(0, 37.5, 150, 37.5);
        // ctx.fillStyle = 'rgb(0, 153, 255)';
        // ctx.fillRect(0, 75, 150, 37.5);
        // ctx.fillStyle = 'rgb(255, 51, 0)';
        // ctx.fillRect(0, 112.5, 150, 37.5);
        // // Draw semi transparent rectangles
        // for (var i = 0; i < 10; i++) {
        //     ctx.fillStyle = 'rgba(255, 255, 255, ' + (i + 1) / 10 + ')';
        //     for (var j = 0; j < 4; j++) {
        //     ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
        //     }
        // }

        // Line width example
        // Keep in mind odd width lines will be blurred unless offset 0.5 on the x axis!
        // for (var i = 0; i < 10; i++) {
        //     ctx.lineWidth = 1 + i;
        //     ctx.beginPath();
        //     ctx.moveTo(5 + i * 14, 5);
        //     ctx.lineTo(5 + i * 14, 140);
        //     ctx.stroke();
        // }

        // Example of lineCap differences
        // var lineCap = ['butt', 'round', 'square'];
        // Draw guides
        // ctx.strokeStyle = '#09f';
        // ctx.beginPath();
        // ctx.moveTo(10, 10);
        // ctx.lineTo(140, 10);
        // ctx.moveTo(10, 140);
        // ctx.lineTo(140, 140);
        // ctx.stroke();
        // // Draw lines
        // ctx.strokeStyle = 'black';
        // for (var i = 0; i < lineCap.length; i++) {
        //     ctx.lineWidth = 15;
        //     ctx.lineCap = lineCap[i];
        //     ctx.beginPath();
        //     ctx.moveTo(25 + i * 50, 10);
        //     ctx.lineTo(25 + i * 50, 140);
        //     ctx.stroke();
        // }

        // Line join differences
        // var lineJoin = ['round', 'bevel', 'miter'];
        // ctx.lineWidth = 10;
        // for (var i = 0; i < lineJoin.length; i++) {
        //     ctx.lineJoin = lineJoin[i];
        //     ctx.beginPath();
        //     ctx.moveTo(-5, 5 + i * 40);
        //     ctx.lineTo(35, 45 + i * 40);
        //     ctx.lineTo(75, 5 + i * 40);
        //     ctx.lineTo(115, 45 + i * 40);
        //     ctx.lineTo(155, 5 + i * 40);
        //     ctx.stroke();
        // }

        // MiterLimit determines the maximum angle two lines are automatically joined by miter
        // Clear canvas
        // ctx.clearRect(0, 0, 150, 150);
        // // Draw guides
        // ctx.strokeStyle = '#09f';
        // ctx.lineWidth   = 2;
        // ctx.strokeRect(-5, 50, 160, 50);
        // // Set line styles
        // ctx.strokeStyle = '#000';
        // ctx.lineWidth = 10;
        // // Miter
        // ctx.miterLimit = 6;
        // // Draw lines
        // ctx.beginPath();
        // ctx.moveTo(0, 100);
        // for (i = 0; i < 24 ; i++) {
        //     var dy = i % 2 == 0 ? 25 : -25;
        //     ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
        // }
        // ctx.stroke();
        // return false;

        // SetLineDash to make dashed lines
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // ctx.setLineDash([4, 2]);
        // ctx.lineDashOffset = -offset;
        // ctx.strokeRect(10, 10, 100, 100);
        
        // Linear Gradients with createLinearGradient
        // Create gradients
        // var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
        // lingrad.addColorStop(0, '#00ABEB');
        // lingrad.addColorStop(0.5, '#fff');
        // lingrad.addColorStop(0.5, '#26C000');
        // lingrad.addColorStop(1, '#fff');
        // var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
        // lingrad2.addColorStop(0.5, '#000');
        // lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
        // // assign gradients to fill and stroke styles
        // ctx.fillStyle = lingrad;
        // ctx.strokeStyle = lingrad2;
        // // draw shapes
        // ctx.fillRect(10, 10, 130, 130);
        // ctx.strokeRect(50, 50, 50, 50);

        // Circular gradients with createRadialGradient
        // Create gradients
        // var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
        // radgrad.addColorStop(0, '#A7D30C');
        // radgrad.addColorStop(0.9, '#019F62');
        // radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');
        // var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
        // radgrad2.addColorStop(0, '#FF5F98');
        // radgrad2.addColorStop(0.75, '#FF0188');
        // radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');
        // var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
        // radgrad3.addColorStop(0, '#00C9FF');
        // radgrad3.addColorStop(0.8, '#00B5E2');
        // radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');
        // var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
        // radgrad4.addColorStop(0, '#F4F201');
        // radgrad4.addColorStop(0.8, '#E4C700');
        // radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');
        // // draw shapes
        // ctx.fillStyle = radgrad4;
        // ctx.fillRect(0, 0, 150, 150);
        // ctx.fillStyle = radgrad3;
        // ctx.fillRect(0, 0, 150, 150);
        // ctx.fillStyle = radgrad2;
        // ctx.fillRect(0, 0, 150, 150);
        // ctx.fillStyle = radgrad;
        // ctx.fillRect(0, 0, 150, 150);

        // Using createPattern to assign an image to repeat on the canvas
        // create new image object to use as pattern
        // var img = new Image();
        // img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
        // img.onload = function() {
        //     // create pattern
        //     var ptrn = ctx.createPattern(img, 'repeat');
        //     ctx.fillStyle = ptrn;
        //     ctx.fillRect(0, 0, 150, 150);
        // }

        // Filling the canvas with font and applying shadows
        // ctx.shadowOffsetX = 2;
        // ctx.shadowOffsetY = 2;
        // ctx.shadowBlur = 2;
        // ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        // ctx.font = '20px Times New Roman';
        // ctx.fillStyle = 'Black';
        // ctx.fillText('Sample String', 5, 30);

        // Canvas fill rules (can cancel each other out with evenodd)
        // ctx.beginPath(); 
        // ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
        // ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
        // ctx.fill('evenodd');

        // FillText example
        // ctx.font = '48px serif';
        // ctx.fillText('Hello world', 10, 50);

        // StrokeText example
        // ctx.font = '48px serif';
        // ctx.strokeText('Hello world', 10, 50)

        // Changing the text baseline
        // ctx.font = '48px serif';
        // ctx.textBaseline = 'hanging';
        // ctx.strokeText('Hello world', 0, 100);

        // How to get text metrics
        var text = ctx.measureText('foo'); // TextMetrics object
        console.log('text.width = ', text.width);
    } else {
        // canvas unsupported code here
    }
}

// A function to make the dashed lines march
// function march() {
//     offset++;
//     if (offset > 16) {
//         offset = 0;
//     }
//     drawCanvas();
//     setTimeout(march, 20);
// }

// march()
drawCanvas()