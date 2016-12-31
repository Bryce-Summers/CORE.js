###
#
# Global Style objects, including materials for roads, lines, etc.
#
# Written by Bryce Summers on 12 - 19 - 2016.
#
###

CORE.init_style = () ->
    CORE.style = 
    {
        # Materials.
        m_default_fill: new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} ),
        m_default_line: new THREE.LineBasicMaterial( {color: 0x000000, linewidth:1}),

        # Colors.
        c_fill:   new THREE.Color(0xbbbbbb),
        c_stroke: new THREE.Color(0x000000),
    }

    # Unit Geometries for rendering.
    # This needs to be below the style specifications, because it looks them up in its constructor.
    CORE.style.unit_meshes = new CORE.Unit_Meshes();