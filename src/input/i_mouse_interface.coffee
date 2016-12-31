#
# Mouse Input Manager
#
# Written by Bryce Summers on 11/22/2016
# Abstracted on 12 - 18 - 2016.
#

class CORE.I_Mouse_Interface

    # Input: THREE.js Scene. Used to add GUI elements to the screen and modify the persistent state.
    # THREE.js
    constructor: (@scene, @camera) ->

    mouse_down: (event) ->

        # event.x, event.y are the coordinates for the mouse button.
        # They are originally piped in from screeen space from [0, screen_w] x [0, screen_h]

    mouse_up:   (event) ->

    mouse_move: (event) ->
