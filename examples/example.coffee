###
Example Project that draws dots on the screen.

Written by Bryce Summers on 12 - 30 - 2016.
###

class Example
    constructor: () ->
        mesh_factory = CORE.style.unit_meshes
        color_hex = CORE.style.c_fill

        root_scene.background = new THREE.Color( 0xffffff);

        w = dim.w
        h = dim.h

        for i in [0...100]
            circle = mesh_factory.newCircle({color: color_hex})
            circle.position.x = Math.random()*w
            circle.position.y = Math.random()*h
            circle.scale.x = 10
            circle.scale.y = 10
            root_scene.add(circle)


new Example()