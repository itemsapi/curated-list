(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["catalog.html.twig"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "is_ajax") == false) {
output += "\n  ";
env.getTemplate("basic/layout.html.twig", true, "catalog.html.twig", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("description"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n";
})})});
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("before_head_end"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("before_body_end"))(env, context, frame, runtime, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += t_11;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_description(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"padding-left: 0;\">\n      <div id=\"custom-search-input\">\n        <form action=\"/catalog\" method=\"GET\">\n          <div class=\"input-group col-md-12\">\n            <input type=\"text\" id=\"main_query\" class=\"form-control input-lg\" name=\"query\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "query"), env.opts.autoescape);
output += "\" placeholder=\"Search items..\" />\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-info btn-lg\" type=\"button\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </span>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-md-2\" style=\"padding-left: 0;\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("general/aggregations.html.twig", false, "catalog.html.twig", true, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_14) {
if(t_16) { cb(t_16); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </div>\n    <div class=\"col-md-10\">\n\n      ";
output += "\n\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("general/breadcrumbs.html.twig", false, "catalog.html.twig", true, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
callback(null,t_18);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n      <div class=\"clearfix\"></div>\n\n      <h3>List of items (";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagination")),"total"), env.opts.autoescape);
output += ")</h3>\n\n\n      ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "website")),"layout")),"name") === "table") {
output += "\n\n        <table class=\"table table-striped\">\n          <tbody>\n            ";
frame = frame.push();
var t_23 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_23) {var t_22 = t_23.length;
for(var t_21=0; t_21 < t_23.length; t_21++) {
var t_24 = t_23[t_21];
frame.set("item", t_24);
frame.set("loop.index", t_21 + 1);
frame.set("loop.index0", t_21);
frame.set("loop.revindex", t_22 - t_21);
frame.set("loop.revindex0", t_22 - t_21 - 1);
frame.set("loop.first", t_21 === 0);
frame.set("loop.last", t_21 === t_22 - 1);
frame.set("loop.length", t_22);
output += "\n            <tr>\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "website")),"layout")),"columns")) {
output += "\n              ";
frame = frame.push();
var t_27 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "website")),"layout")),"columns");
if(t_27) {var t_26 = t_27.length;
for(var t_25=0; t_25 < t_27.length; t_25++) {
var t_28 = t_27[t_25];
frame.set("column", t_28);
frame.set("loop.index", t_25 + 1);
frame.set("loop.index0", t_25);
frame.set("loop.revindex", t_26 - t_25);
frame.set("loop.revindex0", t_26 - t_25 - 1);
frame.set("loop.first", t_25 === 0);
frame.set("loop.last", t_25 === t_26 - 1);
frame.set("loop.length", t_26);
output += "\n                <td>\n                  ";
if(t_28 == "image") {
output += "\n                  <img style=\"width: 80px;\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_24),"image"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_24),"name"), env.opts.autoescape);
output += "\" />\n                  ";
;
}
else {
output += "\n                  <td>\n                    ";
output += runtime.suppressValue(runtime.memberLookup((t_24),t_28), env.opts.autoescape);
output += "\n                  </td>\n                  ";
;
}
output += "\n                </td>\n              ";
;
}
}
frame = frame.pop();
output += "\n              ";
;
}
else {
output += "\n              <td>\n                ";
output += runtime.suppressValue(runtime.memberLookup((t_24),"name"), env.opts.autoescape);
output += "\n              </td>\n              ";
;
}
output += "\n            </tr>\n            ";
;
}
}
frame = frame.pop();
output += "\n          </tbody>\n        </table>\n\n      ";
;
}
else {
output += "\n\n        <div class=\"items\">\n          ";
frame = frame.push();
var t_31 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_31) {var t_30 = t_31.length;
for(var t_29=0; t_29 < t_31.length; t_29++) {
var t_32 = t_31[t_29];
frame.set("item", t_32);
frame.set("loop.index", t_29 + 1);
frame.set("loop.index0", t_29);
frame.set("loop.revindex", t_30 - t_29);
frame.set("loop.revindex0", t_30 - t_29 - 1);
frame.set("loop.first", t_29 === 0);
frame.set("loop.last", t_29 === t_30 - 1);
frame.set("loop.length", t_30);
output += "\n          <div class=\"col-xs-3 col-md-3\" style=\"height: 350px;\">\n              <img class=\"img-thumbnail\" src=\"";
if(runtime.memberLookup((t_32),"image")) {
output += runtime.suppressValue(runtime.memberLookup((t_32),"image"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "image"), env.opts.autoescape);
output += " ";
;
}
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_32),"name"), env.opts.autoescape);
output += "\">\n              <p>";
output += runtime.suppressValue(runtime.memberLookup((t_32),"name"), env.opts.autoescape);
output += "</p>\n          </div>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      ";
;
}
output += "\n\n      <div class=\"clearfix\"></div>\n\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("general/pagination.html.twig", false, "catalog.html.twig", true, function(t_35,t_33) {
if(t_35) { cb(t_35); return; }
callback(null,t_33);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_36,t_34) {
if(t_36) { cb(t_36); return; }
callback(null,t_34);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n    </div>\n  </div>\n</div>\n";
cb(null, output);
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_before_head_end(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/themes/start/jquery-ui.css\" />\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_before_body_end(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_description: b_description,
b_content: b_content,
b_before_head_end: b_before_head_end,
b_before_body_end: b_before_body_end,
root: root
};

})();
})();
