/*! Sim Urban, a project by Bryce Summers.
 *  Single File concatenated by Grunt Concatenate on 30-12-2016
 */
/*
 * Defines namespaces.
 * Adapted by Bryce Summers on 12 - 30 - 2016.
 */

// Core functionalities for my Interactive Visual Web Experiments.
// INPUT, Rendering, 
CORE = {};

// Bryce Data Structures.
BDS = {};

// Simple Visual Experiments. These are like sketches that demonstrate algorithms and visual effects.
SVE = {};
// Generated by CoffeeScript 1.11.1
(function() {
  CORE.I_All_Main = (function() {
    function I_All_Main(scene, camera) {
      this.scene = scene;
      this.camera = camera;
    }

    I_All_Main.prototype.mouse_down = function(event) {};

    I_All_Main.prototype.mouse_up = function(event) {};

    I_All_Main.prototype.mouse_move = function(event) {};

    return I_All_Main;

  })();

}).call(this);

// Generated by CoffeeScript 1.11.1
(function() {
  CORE.I_Mouse_Interface = (function() {
    function I_Mouse_Interface(scene, camera) {
      this.scene = scene;
      this.camera = camera;
    }

    I_Mouse_Interface.prototype.mouse_down = function(event) {};

    I_Mouse_Interface.prototype.mouse_up = function(event) {};

    I_Mouse_Interface.prototype.mouse_move = function(event) {};

    return I_Mouse_Interface;

  })();

}).call(this);

// Generated by CoffeeScript 1.11.1

/*
    Super class to mesh construction classes.

    Written by Bryce Summers on 11/22/2016.
    
    Purpose:
        Deals with all of the common problems such as adding a material and changing its color.
 */

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  CORE.Mesh_Basic = (function(superClass) {
    extend(Mesh_Basic, superClass);

    function Mesh_Basic(area_geometry, outline_geometry) {
      var material;
      this.outline_geometry = outline_geometry;
      material = CORE.style.m_default_fill.clone();
      Mesh_Basic.__super__.constructor.call(this, area_geometry, material);
      this.line_material = CORE.style.m_default_line.clone();
    }

    Mesh_Basic.prototype.clone = function(params) {
      var mesh, outline, output;
      output = new THREE.Object3D();
      mesh = new CORE.Mesh_Basic(this.geometry);
      outline = new THREE.Line(this.outline_geometry, this.line_material);
      outline.renderOrder = 1;
      output.add(mesh);
      output.add(outline);
      if (!(params.color instanceof THREE.Color)) {
        debugger;
      }
      mesh.material.color = params.color;
      return output;
    };

    return Mesh_Basic;

  })(THREE.Mesh);

}).call(this);

// Generated by CoffeeScript 1.11.1
(function() {
  CORE.Unit_Meshes = (function() {
    function Unit_Meshes() {
      this._square = new CORE.Mesh_Unit_Square();
      this._circle = new CORE.Mesh_Unit_Circle();
      this._triangle = new CORE.Mesh_Unit_Triangle();
    }

    Unit_Meshes.prototype.newSquare = function(params) {
      return this._square.clone(params);
    };

    Unit_Meshes.prototype.newCircle = function(params) {
      return this._circle.clone(params);
    };

    Unit_Meshes.prototype.newTriangle = function(params) {
      return this._triangle.clone(params);
    };

    return Unit_Meshes;

  })();

}).call(this);

// Generated by CoffeeScript 1.11.1

/*
 *
 * Global Style objects, including materials for roads, lines, etc.
 *
 * Written by Bryce Summers on 12 - 19 - 2016.
 *
 */

(function() {
  CORE.init_style = function() {
    CORE.style = {
      m_default_fill: new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
      }),
      m_default_line: new THREE.LineBasicMaterial({
        color: 0x000000,
        linewidth: 1
      }),
      c_fill: new THREE.Color(0xbbbbbb),
      c_stroke: new THREE.Color(0x000000)
    };
    return CORE.style.unit_meshes = new CORE.Unit_Meshes();
  };

}).call(this);

// Generated by CoffeeScript 1.11.1
(function() {
  CORE.Math = {};

  CORE.Math.distance = function(x1, y1, x2, y2) {
    return Math.sqrt(TSAG.Math.distance_sqr(x1, y1, x2, y2));
  };

  CORE.Math.distance_sqr = function(x1, y1, x2, y2) {
    var dx, dy;
    dx = x1 - x2;
    dy = y1 - y2;
    return dx * dx + dy * dy;
  };

}).call(this);

// Generated by CoffeeScript 1.11.1

/*
    Circle Mesh.

    Initializes as a unit square at the origin.

    Written by Bryce Summers on 11/22/2016.
    
    Purpose:
     - Provides a unit square that can then be scaled, positioned, and rotated.
 */

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  CORE.Mesh_Unit_Circle = (function(superClass) {
    extend(Mesh_Unit_Circle, superClass);

    function Mesh_Unit_Circle() {
      var geometry, outline, radius, segments, theata0, theata1;
      radius = .5;
      segments = 25;
      theata0 = 0;
      theata1 = Math.PI * 2;
      geometry = new THREE.CircleGeometry(.5, 25, theata0, theata1);
      outline = new THREE.Geometry();

      /*
      outline.vertices.push(
          new THREE.Vector3( -.5, -.5, 0 ),
          new THREE.Vector3(  .5, -.5, 0 ),
          new THREE.Vector3(  .5,  .5, 0 ),
          new THREE.Vector3( -.5,  .5, 0 ),
          new THREE.Vector3( -.5, -.5, 0 ) # Closed.
      );
       */
      Mesh_Unit_Circle.__super__.constructor.call(this, geometry, outline);
    }

    return Mesh_Unit_Circle;

  })(CORE.Mesh_Basic);

}).call(this);

// Generated by CoffeeScript 1.11.1

/*
    Square Mesh.

    Initializes as a unit square at the origin.

    Written by Bryce Summers on 11/22/2016.
    
    Purpose:
     - Provides a unit square that can then be scaled, positioned, and rotated.
 */

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  CORE.Mesh_Unit_Square = (function(superClass) {
    extend(Mesh_Unit_Square, superClass);

    function Mesh_Unit_Square() {
      var geometry, outline;
      geometry = new THREE.PlaneGeometry(1, 1);
      outline = new THREE.Geometry();
      outline.vertices.push(new THREE.Vector3(-.5, -.5, 0), new THREE.Vector3(.5, -.5, 0), new THREE.Vector3(.5, .5, 0), new THREE.Vector3(-.5, .5, 0), new THREE.Vector3(-.5, -.5, 0));
      Mesh_Unit_Square.__super__.constructor.call(this, geometry, outline);
    }

    return Mesh_Unit_Square;

  })(CORE.Mesh_Basic);

}).call(this);

// Generated by CoffeeScript 1.11.1

/*
    Triangle Mesh.

    Description:
     - Provides a Triangle Pointing in the positive x (-->) direction
     - Along the x axis it is of length 1.
     - Along the y axis it is of length 1, but centered

    Written by Bryce Summers on 11/22/2016.
    
    Purpose: Used for many things, including the tops of houses.
 */

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  CORE.Mesh_Unit_Triangle = (function(superClass) {
    extend(Mesh_Unit_Triangle, superClass);

    function Mesh_Unit_Triangle() {
      var interior, outline;
      outline = new THREE.Geometry();
      outline.vertices.push(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, -.5, 0), new THREE.Vector3(0, +.5, 0), new THREE.Vector3(1, 0, 0));
      interior = outline.clone();
      interior.faces.push(new THREE.Face3(0, 1, 2));
      Mesh_Unit_Triangle.__super__.constructor.call(this, interior, outline);
    }

    return Mesh_Unit_Triangle;

  })(CORE.Mesh_Basic);

}).call(this);

/*
 * Entry Point
 * Sets up THREE.js on the DOM and sets up input from the browser.
 * Genaricized by Bryce Summers on 12 - 30 - 2016
 */

var renderer;
var root_scene;
var root_camera;
var root_input;
var dim;

function init()
{

    // Initialize all of the global material, mesh constructor's, etc.
    CORE.init_style();

    var width  = window.innerWidth
    var height = window.innerHeight

    // Scene Graph.
    root_scene = new THREE.Scene(); // Using libraries may add elements to the root.

    // Camera.
    dim = {x:0, y:0, w:width, h:height, padding:10};
    root_camera = new THREE.OrthographicCamera( dim.x - dim.w/2, dim.x + dim.w/2, dim.y - dim.h/2, dim.y + dim.h/2, 1, 1000 );
    root_camera.position.z = 2;

    var x = dim.x + dim.w/2;
    var y = dim.y + dim.h/2;
    root_camera.position.x = x;
    root_camera.position.y = y;

    root_camera.lookAt(new THREE.Vector3(x, y, 0))


    // Renderer.
    var params = {
        antialias: true,
    };
    
    init_renderer(params);
    init_input();
}

function init_renderer(params)
{
    var container = document.getElementById( 'container' );
    renderer = new THREE.WebGLRenderer(params);
    renderer.setPixelRatio( window.devicePixelRatio );
    container.appendChild( renderer.domElement );
    // Set the render based on the size of the window.
    onWindowResize();
}

function init_input()
{
    // Initialize the root of the input specification tree.
    input = new CORE.I_All_Main(root_scene, root_camera);

    window.addEventListener( 'resize', onWindowResize, false);

    //window.addEventListener("keypress", onKeyPress);
    window.addEventListener("keydown", onKeyPress);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup",   onMouseUp);
}

// Events.
function onWindowResize( event )
{
    renderer.setSize( window.innerWidth, window.innerHeight );
}

// FIXME: ReWire these input events.
function onKeyPress( event )
{
    // Key codes for event.which.
    var LEFT  = 37
    var RIGHT = 39
}

function onMouseMove( event )
{
    input.mouse_move(event);
}

function onMouseDown( e )//event
{
    //http://stackoverflow.com/questions/2405771/is-right-click-a-javascript-event
    var isRightMB;
    e = e || window.event;

    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = e.which == 3; 
    else if ("button" in e)  // IE, Opera 
        isRightMB = e.button == 2; 

    if(isRightMB)
        return

    input.mouse_down(e);
}

function onMouseUp( event )
{
    input.mouse_up(event);
}

function animate()
{
    requestAnimationFrame( animate );
    render();
}

function render()
{
    renderer.render(root_scene, root_camera);
}

init();
animate();