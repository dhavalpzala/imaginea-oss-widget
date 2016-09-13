this["Imaginea"] = this["Imaginea"] || {};
this["Imaginea"]["OSS"] = this["Imaginea"]["OSS"] || {};
this["Imaginea"]["OSS"]["Templates"] = this["Imaginea"]["OSS"]["Templates"] || {};
this["Imaginea"]["OSS"]["Templates"]["index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a href='"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "' title='"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "' class=\"oss-project\" target=\"_blank\">\n              <div class=\"oss-project-image\">"
    + alias2(alias1((depth0 != null ? depth0.shortName : depth0), depth0))
    + "</div>\n              <p class=\"oss-project-title\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</p>\n            </a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a href='"
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "' title='"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "' class=\"oss-feed\" target=\"_blank\">\n                "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\n            </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"oss-overlay\"></div>\n<div class=\"oss-content\">\n  <div class=\"oss-close\" onclick=\"ossClose(event)\"></div>\n   <div class=\"oss-tabs\" onclick=\"selectTab(event)\">\n      <div class=\"oss-tab active\">Projects</div>\n      <div class=\"oss-tab\">More</div>            \n  </div>\n  <div class=\"oss-tab-contents\">\n      <div class=\"oss-tab-content active\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n      <div class=\"oss-tab-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.feeds : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>            \n  </div>\n</div>";
},"useData":true});