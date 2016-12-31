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