#
# All input Controller.
#
# Written by Bryce Summers on 12 - 19 - 2016.
#
# Purpose: This class is the root of my input system, it collects simple input events and passes them to the relevant controllers by type.
#

# FIXME: Desgin bottom components to depend on this one, rather than the other way around.

class CORE.I_All_Main
    
    # Input: THREE.js Scene. Used to add GUI elements to the screen and modify the persistent state.
    # THREE.js
    constructor: (@scene, @camera) ->

        #@_mouse_input = new CORE.I_Mouse_Main(@scene, @camera)

    mouse_down: (event) ->

        # event.x, event.y are the coordinates for the mouse button.
        # They are originally piped in from screeen space from [0, screen_w] x [0, screen_h]

        #@_mouse_input.mouse_down(event)

    mouse_up:   (event) ->
        #@_mouse_input.mouse_up(event)

    mouse_move: (event) ->
        #@_mouse_input.mouse_move(event)