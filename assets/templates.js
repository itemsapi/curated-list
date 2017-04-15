(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["views/catalog_ajax.html.twig"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"padding-left: 0;\">\n      <div id=\"custom-search-input\">\n        <form action=\"/catalog\" method=\"GET\">\n          <div class=\"input-group col-md-12\">\n            <input type=\"text\" id=\"main_query\" class=\"form-control input-lg\" name=\"query\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "query"), env.opts.autoescape);
output += "\" placeholder=\"Search items..\" />\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-info btn-lg\" type=\"button\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </span>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-md-2\" style=\"padding-left: 0;\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("views/aggregations.html.twig", false, "views/catalog_ajax.html.twig", true, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
callback(null,t_2);});
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
env.getTemplate("views/breadcrumbs.html.twig", false, "views/catalog_ajax.html.twig", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
callback(null,t_6);});
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
var t_11 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_11) {var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("item", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n            <tr>\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "website")),"layout")),"columns")) {
output += "\n              ";
frame = frame.push();
var t_15 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "website")),"layout")),"columns");
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("column", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\n                <td>\n                  ";
if(t_16 == "image") {
output += "\n                  <img style=\"width: 80px;\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"image"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name"), env.opts.autoescape);
output += "\" />\n                  ";
;
}
else {
output += "\n                  <td>\n                    ";
output += runtime.suppressValue(runtime.memberLookup((t_12),t_16), env.opts.autoescape);
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
output += runtime.suppressValue(runtime.memberLookup((t_12),"name"), env.opts.autoescape);
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
var t_19 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_19) {var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("item", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
output += "\n          <div class=\"col-xs-3 col-md-3\" style=\"height: 350px;\">\n              <img class=\"img-thumbnail\" src=\"";
if(runtime.memberLookup((t_20),"image")) {
output += runtime.suppressValue(runtime.memberLookup((t_20),"image"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "image"), env.opts.autoescape);
output += " ";
;
}
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_20),"name"), env.opts.autoescape);
output += "\">\n              <p>";
output += runtime.suppressValue(runtime.memberLookup((t_20),"name"), env.opts.autoescape);
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
env.getTemplate("views/pagination.html.twig", false, "views/catalog_ajax.html.twig", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
callback(null,t_21);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
callback(null,t_22);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n    </div>\n  </div>\n</div>\n";
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
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["views/aggregations.html.twig"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n";
frame = frame.push();
var t_3 = (env.getFilter("sortObject").call(context, runtime.contextOrFrameLookup(context, frame, "aggregations"),"position","asc"));
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("val", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n<div class=\"\">\n  ";
output += "\n  <h5 style=\"margin-bottom: 5px;\"><strong style=\"color: #337ab7;\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "aggregations")),runtime.memberLookup((t_4),"key"))),"title"), env.opts.autoescape);
output += "</strong></h5>\n  <ul class=\"browse-list list-unstyled long-list\" style=\"margin-bottom: 0;\">\n    ";
output += "\n    ";
frame = frame.push();
var t_7 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "aggregations")),runtime.memberLookup((t_4),"key"))),"buckets");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("term", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n    <li ng-repeat=\"bucket in agg.buckets\">\n    <div class=\"checkbox block\" style=\"margin-top: 0; margin-bottom: 0;\">\n      <label>\n        ";
output += "\n        <input class=\"checkbox\" type=\"checkbox\" ";
if((runtime.contextOrFrameLookup(context, frame, "filter") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filter")),"val") == runtime.memberLookup((t_8),"key") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filter")),"key") == runtime.memberLookup((t_4),"key")) || (lineno = 12, colno = 125, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "in_array"), "in_array", context, [runtime.memberLookup((t_8),"key"),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filters")),runtime.memberLookup((t_4),"key"))]))) {
output += "checked=\"checked\"";
;
}
output += " onclick=\"onAggregationClick(this, '";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "aggregations")),runtime.memberLookup((t_4),"key"))),"name"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.memberLookup((t_8),"key"), env.opts.autoescape);
output += "');\">\n        ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"key"), env.opts.autoescape);
output += " (";
output += runtime.suppressValue(runtime.memberLookup((t_8),"doc_count"), env.opts.autoescape);
output += ")\n      </label>\n    </div>\n    </li>\n    ";
;
}
}
frame = frame.pop();
output += "\n  </ul>\n\n  ";
output += "\n  ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "aggregations")),runtime.memberLookup((t_4),"key"))),"type") == "terms") {
output += "\n    <p class=\"\"><a href=\"/category/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "aggregations")),runtime.memberLookup((t_4),"key"))),"name"), env.opts.autoescape);
output += "\">See all</a></p>\n  ";
;
}
output += "\n  <div class=\"clearfix\"></div>\n</div>\n";
;
}
}
frame = frame.pop();
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["views/pagination.html.twig"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"clearfix\"></div>\n<div class=\"pagination-bar text-center\">\n  <ul class=\"pagination\">\n    ";
var t_1;
t_1 = env.getFilter("ceil").call(context, ((env.getFilter("int").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagination")),"total"))) / (env.getFilter("int").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagination")),"per_page")))));
frame.set("total_pages_count", t_1, true);
if(frame.topLevel) {
context.setVariable("total_pages_count", t_1);
}
if(frame.topLevel) {
context.addExport("total_pages_count", t_1);
}
output += "\n    ";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "total_pages_count");
frame.set("pages_count", t_2, true);
if(frame.topLevel) {
context.setVariable("pages_count", t_2);
}
if(frame.topLevel) {
context.addExport("pages_count", t_2);
}
output += "\n\n    ";
if(runtime.contextOrFrameLookup(context, frame, "pages_count") > 8) {
output += "\n      ";
var t_3;
t_3 = 8;
frame.set("pages_count", t_3, true);
if(frame.topLevel) {
context.setVariable("pages_count", t_3);
}
if(frame.topLevel) {
context.addExport("pages_count", t_3);
}
output += "\n    ";
;
}
output += "\n\n\n    ";
if(runtime.contextOrFrameLookup(context, frame, "pages_count") > 1) {
output += "\n\n\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagination")),"page") > 1) {
output += "\n        <li><a class=\"pagination-btn\" href=\"";
output += runtime.suppressValue(env.getFilter("build").call(context, runtime.contextOrFrameLookup(context, frame, "url"),{"page": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagination")),"page") - 1}), env.opts.autoescape);
output += "\">&laquo; Prev </a></li>\n      ";
;
}
output += "\n\n      ";
frame = frame.push();
var t_6 = (lineno = 18, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [1,runtime.contextOrFrameLookup(context, frame, "pages_count") + 1]));
if(t_6) {var t_5 = t_6.length;
for(var t_4=0; t_4 < t_6.length; t_4++) {
var t_7 = t_6[t_4];
frame.set("current_page", t_7);
frame.set("loop.index", t_4 + 1);
frame.set("loop.index0", t_4);
frame.set("loop.revindex", t_5 - t_4);
frame.set("loop.revindex0", t_5 - t_4 - 1);
frame.set("loop.first", t_4 === 0);
frame.set("loop.last", t_4 === t_5 - 1);
frame.set("loop.length", t_5);
output += "\n        <li ";
if((!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagination")),"page") && t_7 == 1) || t_7 == runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagination")),"page")) {
output += "class=\"active\"";
;
}
output += "><a href=\"";
output += runtime.suppressValue(env.getFilter("build").call(context, runtime.contextOrFrameLookup(context, frame, "url"),{"page": t_7}), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_7, env.opts.autoescape);
output += "</a></li>\n      ";
;
}
}
frame = frame.pop();
output += "\n\n\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagination")),"page") < runtime.contextOrFrameLookup(context, frame, "total_pages_count")) {
output += "\n      <li><a class=\"pagination-btn\" href=\"";
output += runtime.suppressValue(env.getFilter("build").call(context, runtime.contextOrFrameLookup(context, frame, "url"),{"page": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pagination")),"page") + 1}), env.opts.autoescape);
output += "\">Next &raquo;</a></li>\n      ";
;
}
output += "\n\n    ";
;
}
output += "\n\n  </ul>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["views/breadcrumbs.html.twig"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"breadcrumbs\">\n  ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "filters");
if(t_3) {var t_1;
if(runtime.isArray(t_3)) {
var t_2 = t_3.length;
for(t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1][0]
frame.set("key", t_3[t_1][0]);
var t_5 = t_3[t_1][1]
frame.set("val", t_3[t_1][1]);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n  ";
frame = frame.push();
var t_8 = t_5;
if(t_8) {var t_7 = t_8.length;
for(var t_6=0; t_6 < t_8.length; t_6++) {
var t_9 = t_8[t_6];
frame.set("term", t_9);
frame.set("loop.index", t_6 + 1);
frame.set("loop.index0", t_6);
frame.set("loop.revindex", t_7 - t_6);
frame.set("loop.revindex0", t_7 - t_6 - 1);
frame.set("loop.first", t_6 === 0);
frame.set("loop.last", t_6 === t_7 - 1);
frame.set("loop.length", t_7);
output += "\n  <span class=\"label label-default\" style=\"margin-left: 5px;\">";
output += runtime.suppressValue(t_9, env.opts.autoescape);
output += "\n    <span onclick=\"removeFilter('";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(t_9, env.opts.autoescape);
output += "');\" style=\"cursor: pointer\" class=\"glyphicon glyphicon-remove\"></span>\n  </span>\n  ";
;
}
}
frame = frame.pop();
output += "\n  ";
;
}
} else {
t_1 = -1;
var t_2 = runtime.keys(t_3).length;
for(var t_10 in t_3) {
t_1++;
var t_11 = t_3[t_10];
frame.set("key", t_10);
frame.set("val", t_11);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n  ";
frame = frame.push();
var t_14 = t_11;
if(t_14) {var t_13 = t_14.length;
for(var t_12=0; t_12 < t_14.length; t_12++) {
var t_15 = t_14[t_12];
frame.set("term", t_15);
frame.set("loop.index", t_12 + 1);
frame.set("loop.index0", t_12);
frame.set("loop.revindex", t_13 - t_12);
frame.set("loop.revindex0", t_13 - t_12 - 1);
frame.set("loop.first", t_12 === 0);
frame.set("loop.last", t_12 === t_13 - 1);
frame.set("loop.length", t_13);
output += "\n  <span class=\"label label-default\" style=\"margin-left: 5px;\">";
output += runtime.suppressValue(t_15, env.opts.autoescape);
output += "\n    <span onclick=\"removeFilter('";
output += runtime.suppressValue(t_10, env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(t_15, env.opts.autoescape);
output += "');\" style=\"cursor: pointer\" class=\"glyphicon glyphicon-remove\"></span>\n  </span>\n  ";
;
}
}
frame = frame.pop();
output += "\n  ";
;
}
}
}
frame = frame.pop();
output += "\n\n  ";
if((runtime.contextOrFrameLookup(context, frame, "query"))) {
output += "\n  <span class=\"label label-default\" style=\"margin-left: 5px;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "query"), env.opts.autoescape);
output += "\n  </span>\n  ";
;
}
output += "\n\n  ";
if((runtime.contextOrFrameLookup(context, frame, "filter"))) {
output += "\n  <span class=\"label label-default\" style=\"margin-left: 5px;\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filter")),"val"), env.opts.autoescape);
output += "\n    <span onclick=\"removeFilter('";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filter")),"key"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filter")),"val"), env.opts.autoescape);
output += "');\" style=\"cursor: pointer\" class=\"glyphicon glyphicon-remove\"></span>\n  </span>\n  ";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

