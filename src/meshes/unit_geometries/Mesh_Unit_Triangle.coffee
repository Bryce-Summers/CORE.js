###
    Triangle Mesh.

    Description:
     - Provides a Triangle Pointing in the positive x (-->) direction
     - Along the x axis it is of length 1.
     - Along the y axis it is of length 1, but centered

    Written by Bryce Summers on 11/22/2016.
    
    Purpose: Used for many things, including the tops of houses.
    
###

class CORE.Mesh_Unit_Triangle extends CORE.Mesh_Basic

    constructor: () ->

        # Creat a plane that is perpendicular facing to the z axis.
        outline = new THREE.Geometry();
        outline.vertices.push(
            new THREE.Vector3(   1,   0, 0 ),
            new THREE.Vector3(   0, -.5, 0 ),
            new THREE.Vector3(   0, +.5, 0 ),
            new THREE.Vector3(   1,   0, 0 ) # Closure.
        );

        # The interior is just the outline with internal faces defined.
        interior = outline.clone();
        interior.faces.push(new THREE.Face3(0, 1, 2))

        super(interior, outline)