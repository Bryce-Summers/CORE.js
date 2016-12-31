###
    Circle Mesh.

    Initializes as a unit square at the origin.

    Written by Bryce Summers on 11/22/2016.
    
    Purpose:
     - Provides a unit square that can then be scaled, positioned, and rotated.
###

class CORE.Mesh_Unit_Circle extends CORE.Mesh_Basic

    constructor: () ->

        # Create a plane that is perpendicular facing to the z axis.
        radius   = .5
        segments = 25
        theata0  = 0
        theata1  = Math.PI*2
        #geometry = new THREE.CircleBufferGeometry(.5, 25, theata0, theata1);
        geometry = new THREE.CircleGeometry(.5, 25, theata0, theata1);

        # FIXME: Construct a circle outline.

        outline = new THREE.Geometry();
        ###
        outline.vertices.push(
            new THREE.Vector3( -.5, -.5, 0 ),
            new THREE.Vector3(  .5, -.5, 0 ),
            new THREE.Vector3(  .5,  .5, 0 ),
            new THREE.Vector3( -.5,  .5, 0 ),
            new THREE.Vector3( -.5, -.5, 0 ) # Closed.
        );
        ###

        super(geometry, outline)