// For every option, see ~/.config/ags/modules/.configuration/user_options.js
// (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
// (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
//   options listed in this file will override the default ones in the above file

const userConfigOptions = {
    'overview': {
        'scale': 0.16, // Relative to screen size
        'numOfRows': 5,
        'numOfCols': 5,
    },
    'sidebar': {
        'pages': {
            'order': ["apis", "tools"],
            'apis': {
                'order': ["gemini", "gpt"],
            }
        },
    },
    'time': {
        // See https://docs.gtk.org/glib/method.DateTime.format.html
        // Here's the 12h format: "%I:%M%P"
        // For seconds, add "%S" and set interval to 1000
        'format': "%I:%M",
        'interval': 5000,
        'dateFormatLong': "%A, %d/%m", // On bar
        'dateInterval': 5000,
        'dateFormat': "%d/%m", // On notif time
    },
    'weather': {
        'city': "Ahmedabad",
        'preferredUnit': "C", // Either C or F
    },
    'dock': {
        'enabled': false,
        'hiddenThickness': 5,
        'pinnedApps': [],
        'layer': 'top',
        'monitorExclusivity': true, // Dock will move to other monitor along with focus if enabled
        'searchPinnedAppIcons': false, // Try to search for the correct icon if the app class isn't an icon name
        'trigger': ['client-added', 'client-removed'], // client_added, client_move, workspace_active, client_active
        // Automatically hide dock after `interval` ms since trigger
        'autoHide': [
            {
                'trigger': 'client-added',
                'interval': 500,
            },
            {
                'trigger': 'client-removed',
                'interval': 500,
            },
        ],
    },
}

export default userConfigOptions;
