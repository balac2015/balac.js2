/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
function ModuleDependencyTemplateAsRequireId() {}
module.exports = ModuleDependencyTemplateAsRequireId;

ModuleDependencyTemplateAsRequireId.prototype.apply = function(dep, source, outputOptions, requestShortener) {
	if(!dep.range) return;
	var comment = "";
	if(outputOptions.pathinfo) comment = "/*! " + requestShortener.shorten(dep.request) + " */ ";
	var content;
	if(dep.module)
		content = "__webpack_require__(" + comment + JSON.stringify(dep.module.id) + ")";
	else
		content = require("./WebpackMissingModule").module(dep.request);
	source.replace(dep.range[0], dep.range[1] - 1, content);
};

ModuleDependencyTemplateAsRequireId.prototype.applyAsTemplateArgument = function(name, dep, source) {
	if(!dep.range) return;
	source.replace(dep.range[0], dep.range[1] - 1, "(__webpack_require__(" + name + "))");
};
