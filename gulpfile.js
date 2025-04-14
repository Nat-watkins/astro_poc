const uswds = require("@uswds/compile");

/** USWDS version **/
uswds.settings.version = 3;

/** Paths **/
uswds.paths.dist.sass = "./public/sass"

/** Exports **/
/* exports.init = uswds.init; // Use init only once */
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.updateUswds = uswds.updateUswds;
