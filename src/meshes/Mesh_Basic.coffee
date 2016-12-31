###
    Super class to mesh construction classes.

    Written by Bryce Summers on 11/22/2016.
    
    Purpose:
        Deals with all of the common problems such as adding a material and changing its color.
###

class CORE.Mesh_Basic extends THREE.Mesh

    constructor: (area_geometry, @outline_geometry) ->

        # Affix the geometry with a material.
        material = CORE.style.m_default_fill.clone()
        super(area_geometry, material);

        # Black Line color.
        @line_material = CORE.style.m_default_line.clone()

    # color: THREE.Color fill color.
    clone: (params) ->
        output  = new THREE.Object3D()
        mesh    = new CORE.Mesh_Basic(@geometry)
        outline = new THREE.Line(@outline_geometry, @line_material)
        outline.renderOrder = 1
        output.add(mesh)
        output.add(outline)

        # Act on params.

        if not (params.color instanceof THREE.Color)
            debugger

        mesh.material.color = params.color;

        return output;