# Singleton Unit Meshes
#
# Written by Bryce Summers on 11/22/2016.
#
# Purpose: Instantiates 1 copy of each of the unit geometries.
#          We can then use these singleton geometries for instantiating meshes.
#          Therefore we will use constant memory for the geometries and
#          linear memory for the matrix transforms.

# This class then provides instantiation functions for unit geometry based meshes.
# Ideally this will only be ever allocated once in the style file.


class CORE.Unit_Meshes

    constructor: () ->
        @_square   = new CORE.Mesh_Unit_Square();
        @_circle   = new CORE.Mesh_Unit_Circle();
        @_triangle = new CORE.Mesh_Unit_Triangle();

    #params{color: hexvalue}
    newSquare: (params) ->
        
        # FIXME: Once we add outlines, this might break.
        return @_square.clone(params);

    newCircle: (params) ->
        
        # FIXME: Once we add outlines, this might break.
        return @_circle.clone(params);

    newTriangle: (params) ->

        # FIXME: Once we add outlines, this might break.
        return @_triangle.clone(params);