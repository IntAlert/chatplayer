webpackJsonp([4],{"./app/containers/HomePage/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"i",function(){return c}),n.d(t,"g",function(){return p}),n.d(t,"h",function(){return d});var r="app/Home/SCRIPT_FETCH_REQUESTED",s="app/Home/SCRIPT_FETCH_SUCCEEDED",a="app/Home/SCRIPT_FETCH_FAILED",o="borderbot/Home/RESPOND",i="app/Home/TIMER_START",u="app/Home/TIMER_TICK",c="app/Home/BOT_MESSAGE_INVISIBLE",p="app/Home/BOT_MESSAGE_WRITING",d="app/Home/BOT_MESSAGE_VISIBLE"},"./app/containers/HomePage/reducer.js":function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case i.d:var n=e.merge({script_loaded:!0,script:t.script,current_stage_id:t.script.initial_stage_id});return n=a(n,t.script.initial_stage_id);case i.e:return console.log("script fetch failed"),e;case i.f:var r=e.getIn(["script","stages",t.stage_id,"choices",t.choice_id]),o=r.getIn(["next_stage_id"]),n=e.set("current_stage_id",o).set("show_user_choices",!1).update("feed",function(e){return e.push({speaker:0,type:"text",content:r.get("text")})});return n=s(n,r),n=a(n,o);case i.c:var c=e.get("feed").findIndex(function(e){return(-1==e.speaker||1==e.speaker)&&e.status==i.g});if(c>-1)return e.updateIn(["feed",c],function(e){var t=Object.assign({},e);return t.status=i.h,t});var p=e.get("feed").findIndex(function(e){return(-1==e.speaker||1==e.speaker)&&e.status==i.i});return p>-1?e.updateIn(["feed",p],function(e){var t=Object.assign({},e);return t.status=i.g,t}):0==e.get("show_user_choices")&&!1!==e.get("current_stage_id")?e.set("show_user_choices",!0):e;default:return e}}function s(e,t){var n=t.getIn(["responses"]);return void 0==n?(console.log("// no immediate responses"),e):e.update("feed",function(e){var t=e;return n.toArray().forEach(function(e){var n={speaker:1,status:i.i,type:e.get("type"),content:e.get("content")};t=t.push(n)}),t})}function a(e,t){var n=e.getIn(["script","stages",t,"prompts"]);return e.update("feed",function(e){var t=e;return n.toArray().forEach(function(e){var n={speaker:-1,status:i.i,type:e.get("type"),content:e.get("content")};t=t.push(n)}),t})}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/immutable/dist/immutable.js"),i=(n.n(o),n("./app/containers/HomePage/constants.js")),u=n.i(o.fromJS)({script_loaded:!1,current_stage_id:!1,show_user_choices:!1,script:{},feed:[]});t.default=r}});