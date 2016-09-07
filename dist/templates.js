this["Imaginea"] = this["Imaginea"] || {};
this["Imaginea"]["OSS"] = this["Imaginea"]["OSS"] || {};
this["Imaginea"]["OSS"]["Templates"] = this["Imaginea"]["OSS"]["Templates"] || {};
this["Imaginea"]["OSS"]["Templates"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"oss-overlay\"></div>\n<div class=\"oss-content\">\n  <div class=\"oss-close\" onclick=\"ossClose(event)\"></div>\n  <h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  <p>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n</div>";
},"useData":true});