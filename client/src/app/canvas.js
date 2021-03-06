function Shape(x, y, w, h, fill, number) {

    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 1;
    this.h = h || 1;
    this.fill = fill || '#AAAAAA';
    this.number = number;
  }

  Shape.prototype.draw = function(context) {
    
    context.fillStyle = this.fill;
    context.fillText(this.number, this.x, this.y );
    context.fillRect(this.x, this.y, this.w, this.h);
  }

  Shape.prototype.contains = function(mx, my) {

    return  (this.x <= mx) && (this.x + this.w >= mx) &&
    (this.y <= my) && (this.y + this.h >= my);
  }

 var CanvasState = function(canvas) {

    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext('2d');


    var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
    if (document.defaultView && document.defaultView.getComputedStyle) {
      this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
      this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
      this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
      this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
    }

    var html = document.body.parentNode;
    this.htmlTop = html.offsetTop;
    this.htmlLeft = html.offsetLeft;

    this.valid = false; 
    this.shapes = [];
    this.increment = 1;
    this.dragging = false;
    this.selection = null;
    this.dragoffx = 0; 
    this.dragoffy = 0;

    var myState = this;

    canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);

    canvas.addEventListener('mousedown', function(e) {
      var mouse = myState.getMouse(e);
      var mx = mouse.x;
      var my = mouse.y;
      var shapes = myState.shapes;
      var l = shapes.length;
      for (var i = l-1; i >= 0; i--) {
        if (shapes[i].contains(mx, my)) {
          var mySel = shapes[i];

          myState.dragoffx = mx - mySel.x;
          myState.dragoffy = my - mySel.y;
          myState.dragging = true;
          myState.selection = mySel;
          myState.valid = false;
          return;
        }
      }

      if (myState.selection) {
        myState.selection = null;
        myState.valid = false; 
      }
    }, true);
    canvas.addEventListener('mousemove', function(e) {
      if (myState.dragging){
        var mouse = myState.getMouse(e);

        myState.selection.x = mouse.x - myState.dragoffx;
        myState.selection.y = mouse.y - myState.dragoffy;   
        myState.valid = false; 
      }
    }, true);
    canvas.addEventListener('mouseup', function(e) {
      myState.dragging = false;
    }, true);

    canvas.addEventListener('dblclick', function(e) {

      this.increment = this.shapes.length + 1;
      var mouse = myState.getMouse(e);
      myState.addShape(new Shape(mouse.x - 10, mouse.y - 10, 20, 20, '#006644', this.increment));
    }.bind(this), true);


    this.selectionColor = '#CC0000';
    this.selectionWidth = 2;  
    this.interval = 30;
    setInterval(function() { myState.draw(); }, myState.interval);
  }

  CanvasState.prototype.addShape = function(shape) {
    this.shapes.push(shape);
    this.valid = false;
  }

  CanvasState.prototype.clear = function() {
    this.context.clearRect(0, 0, this.width, this.height);
  }



  CanvasState.prototype.draw = function() {

    if (!this.valid) {
      var context = this.context;
      var shapes = this.shapes;
      this.clear();

      var l = shapes.length;
      for (var i = 0; i < l; i++) {
        var shape = shapes[i];

        if (shape.x > this.width || shape.y > this.height ||
          shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
          shapes[i].draw(context);
      }

      if (this.selection != null) {
        context.strokeStyle = this.selectionColor;
        context.lineWidth = this.selectionWidth;
        var mySel = this.selection;
        context.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
      }

      this.valid = true;
    }
  }

  CanvasState.prototype.getMouse = function(e) {
    var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;

    if (element.offsetParent !== undefined) {
      do {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
      } while ((element = element.offsetParent));
    }

    offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;

    return {x: mx, y: my};
  }

module.exports = CanvasState;
// module.exports = Shape;

