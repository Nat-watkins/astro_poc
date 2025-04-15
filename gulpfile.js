const uswds = require("@uswds/compile");

/** USWDS version **/
uswds.settings.version = 3;

/** Paths **/
uswds.settings.compile.sassSourcemaps	
uswds.paths.dist.img = "./public/uswds/img"
uswds.paths.dist.fonts = "./public/uswds/fonts"
uswds.paths.dist.js = "./public/uswds/js"
uswds.paths.dist.css = "./public/uswds/css"

/** Exports **/
/* exports.init = uswds.init; // Use init only once */
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.updateUswds = uswds.updateUswds;

