webpackJsonp([0xd2a57dc1d883],{108:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(434),options:{plugins:[],trackingId:""}},{plugin:t(436),options:{plugins:[]}}]},287:function(e,n,t){"use strict";n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(402),"component---src-templates-blog-post-js":t(406),"component---src-pages-index-js":t(404),"component---src-pages-profile-index-jsx":t(405)},n.json={"layout-index.json":t(407),"offline-plugin-app-shell-fallback.json":t(432),"articles-good-to-great.json":t(414),"articles-hello-world.json":t(416),"articles-task-managers.json":t(423),"articles-why-start.json":t(430),"articles-all-the-wealth.json":t(408),"articles-using-vim.json":t(429),"articles-if-you-re-afraid-of-it-build-something-with-it.json":t(418),"articles-rest-in-practice.json":t(420),"articles-how-google-tests-software.json":t(417),"articles-follow-the-scent-of-your-tests.json":t(413),"articles-restful-web-services.json":t(421),"articles-review-the-tangled-web.json":t(422),"articles-principles.json":t(419),"articles-are-integration-tests-only-a-problem-because-of-design.json":t(409),"articles-til-a-little-jq-with-xargs.json":t(424),"articles-til-center-code-in-jet-brains-editors.json":t(425),"articles-til-using-find-with-extended-regex.json":t(428),"articles-til-revert-multiple-commits.json":t(426),"articles-til-use-jq-to-find-all-elements-with-an-array-property-of-given-length.json":t(427),"articles-diff-json-blobs-with-jq-and-vimdiff.json":t(412),"articles-grrr-git-says-my-directory-isn-t-clean.json":t(415),"articles-close-all-vim-tabs-to-the-right.json":t(410),"articles-delete-all-but-branches-but-master.json":t(411),"index.json":t(431),"profile.json":t(433)},n.layouts={"layout---index":t(403)}},288:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(1),l=o(s),c=t(37),f=o(c),p=t(213),d=o(p),m=t(81),h=o(m),g=t(108),y=t(654),j=o(y),v=function(e){var n=e.children;return l.default.createElement("div",null,n())},b=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,j.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(l.default.Component);b.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=b,e.exports=n.default},81:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(532),a=o(r),u=(0,a.default)();e.exports=u},289:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(106),a=t(214),u=o(a),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return s=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return s=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return s=e,i[a]=e,!0}return!1}),s}}},290:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(442),a=o(r),u=t(108),i=(0,u.apiRunner)("replaceHistory"),s=i[0],l=s||(0,a.default)();e.exports=l},408:function(e,n,t){t(3),e.exports=function(e){return t.e(0xc8c8581d8b2b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(445)})})}},409:function(e,n,t){t(3),e.exports=function(e){return t.e(7671606436013,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(446)})})}},410:function(e,n,t){t(3),e.exports=function(e){return t.e(77346033005119,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(447)})})}},411:function(e,n,t){t(3),e.exports=function(e){return t.e(0x9780bf49f996,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(448)})})}},412:function(e,n,t){t(3),e.exports=function(e){return t.e(44310624679719,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(449)})})}},413:function(e,n,t){t(3),e.exports=function(e){return t.e(64659104052425,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(450)})})}},414:function(e,n,t){t(3),e.exports=function(e){return t.e(0x6391449d1cf5,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(451)})})}},415:function(e,n,t){t(3),e.exports=function(e){return t.e(0xa07e7178f8df,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(452)})})}},416:function(e,n,t){t(3),e.exports=function(e){return t.e(0xf6a508f3222,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(453)})})}},417:function(e,n,t){t(3),e.exports=function(e){return t.e(0x655582c48cbc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(454)})})}},418:function(e,n,t){t(3),e.exports=function(e){return t.e(21373376276538,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(455)})})}},419:function(e,n,t){t(3),e.exports=function(e){return t.e(0x703eab198fbb,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(456)})})}},420:function(e,n,t){t(3),e.exports=function(e){return t.e(53222572955646,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(457)})})}},421:function(e,n,t){t(3),e.exports=function(e){return t.e(0xc0163907db61,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(458)})})}},422:function(e,n,t){t(3),e.exports=function(e){return t.e(23805019638589,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(459)})})}},423:function(e,n,t){t(3),e.exports=function(e){return t.e(62714314466750,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(460)})})}},424:function(e,n,t){t(3),e.exports=function(e){return t.e(39618939889838,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(461)})})}},425:function(e,n,t){t(3),e.exports=function(e){return t.e(88089139061920,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(462)})})}},426:function(e,n,t){t(3),e.exports=function(e){return t.e(0xb453f9edafc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(463)})})}},427:function(e,n,t){t(3),e.exports=function(e){return t.e(0xa3f98da38780,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(464)})})}},428:function(e,n,t){t(3),e.exports=function(e){return t.e(80672067657709,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(465)})})}},429:function(e,n,t){t(3),e.exports=function(e){return t.e(0xc086ef2997f1,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(466)})})}},430:function(e,n,t){t(3),e.exports=function(e){return t.e(0xed64f01f63bf,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(467)})})}},431:function(e,n,t){t(3),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(468)})})}},407:function(e,n,t){t(3),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(141)})})}},432:function(e,n,t){t(3),e.exports=function(e){return t.e(0xbf4c176e203a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(469)})})}},433:function(e,n,t){t(3),e.exports=function(e){return t.e(62474309173725,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(470)})})}},403:function(e,n,t){t(3),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(291)})})}},213:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(1),a=(o(r),t(289)),u=o(a),i=t(81),s=o(i),l=t(214),c=o(l),f=void 0,p={},d={},m={},h={},g={},y=[],j=[],v={},b="",x=[],w={},C=function(e){return e&&e.default||e},N=void 0,R=!0,k=[],_={},P={},E=5;N=t(292)({getNextQueuedResources:function(){return x.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){x=x.filter(function(n){return n!==e}),N.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){N.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){N.onPostLoadPageResources(e)});var O=function(e,n){return w[e]>w[n]?1:w[e]<w[n]?-1:0},T=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},L=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){t(null,h[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){h[n]=o,k.push({resource:n,succeeded:!e}),P[n]||(P[n]=e),k=k.slice(-E),t(e,o)})}},S=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):P[n]?e.nextTick(function(){t(P[n])}):L(n,function(e,o){if(e)t(e);else{var r=C(o());g[n]=r,t(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=k.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),_[e]||(_[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},q=1,M={empty:function(){j=[],v={},w={},x=[],y=[],b=""},addPagesArray:function(e){y=e,b="",f=(0,u.default)(e,b)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return j.pop()},enqueue:function(e){var n=(0,c.default)(e,b);if(!y.some(function(e){return e.path===n}))return!1;var t=1/q;q+=1,v[n]?v[n]+=1:v[n]=1,M.has(n)||j.unshift(n),j.sort(T);var o=f(n);return o.jsonName&&(w[o.jsonName]?w[o.jsonName]+=1+t:w[o.jsonName]=1+t,x.indexOf(o.jsonName)!==-1||h[o.jsonName]||x.unshift(o.jsonName)),o.componentChunkName&&(w[o.componentChunkName]?w[o.componentChunkName]+=1+t:w[o.componentChunkName]=1+t,x.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||x.unshift(o.componentChunkName)),x.sort(O),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:x,resourcesCount:w}},getPages:function(){return{pathArray:j,pathCount:v}},getPage:function(e){return f(e)},has:function(e){return j.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),R=!1;if(_[n])return D(n,'Previously detected load failure for "'+n+'"'),t();var o=f(n);if(!o)return D(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,m[n])return e.nextTick(function(){t(m[n]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[n]})}),m[n];s.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),s.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,n){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=n,i()}),S(o.jsonName,function(e,n){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,n){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(e){return j.length-j.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:M.getResourcesForPathname};n.default=M}).call(n,t(74))},471:function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-good-to-great.json",path:"/articles/good-to-great"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-hello-world.json",path:"/articles/hello-world"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-task-managers.json",path:"/articles/task-managers"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-why-start.json",path:"/articles/why-start"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-all-the-wealth.json",path:"/articles/all-the-wealth"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-using-vim.json",path:"/articles/using-vim"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-if-you-re-afraid-of-it-build-something-with-it.json",path:"/articles/if-you-re-afraid-of-it-build-something-with-it"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-rest-in-practice.json",path:"/articles/rest-in-practice"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-how-google-tests-software.json",path:"/articles/how-google-tests-software"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-follow-the-scent-of-your-tests.json",path:"/articles/follow-the-scent-of-your-tests"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-restful-web-services.json",path:"/articles/restful-web-services"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-review-the-tangled-web.json",path:"/articles/review-the-tangled-web"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-principles.json",path:"/articles/principles"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-are-integration-tests-only-a-problem-because-of-design.json",path:"/articles/are-integration-tests-only-a-problem-because-of-design"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-til-a-little-jq-with-xargs.json",path:"/articles/til-a-little-jq-with-xargs"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-til-center-code-in-jet-brains-editors.json",path:"/articles/til-center-code-in-jet-brains-editors"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-til-using-find-with-extended-regex.json",path:"/articles/til-using-find-with-extended-regex"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-til-revert-multiple-commits.json",path:"/articles/til-revert-multiple-commits"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-til-use-jq-to-find-all-elements-with-an-array-property-of-given-length.json",path:"/articles/til-use-jq-to-find-all-elements-with-an-array-property-of-given-length"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-diff-json-blobs-with-jq-and-vimdiff.json",path:"/articles/diff-json-blobs-with-jq-and-vimdiff"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-grrr-git-says-my-directory-isn-t-clean.json",path:"/articles/grrr-git-says-my-directory-isn-t-clean"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-close-all-vim-tabs-to-the-right.json",path:"/articles/close-all-vim-tabs-to-the-right"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles-delete-all-but-branches-but-master.json",path:"/articles/delete-all-but-branches-but-master"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-profile-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"profile.json",path:"/profile/"}]},292:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(108),u=t(1),i=o(u),s=t(100),l=o(s),c=t(106),f=t(440),p=t(384),d=o(p),m=t(19),h=t(290),g=o(h),y=t(81),j=o(y),v=t(471),b=o(v),x=t(472),w=o(x),C=t(288),N=o(C),R=t(287),k=o(R),_=t(213),P=o(_);t(310),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(b.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=c.matchPath;var E=w.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&s!==!1||(window.___history=e,s=!0,e.listen(function(e,n){O(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(293);var o=function(e,n){function t(e){e.page.path===P.default.getPage(r).path&&(j.default.off("onPostLoadPageResources",t),clearTimeout(s),i(o))}var o=(0,m.createLocation)(e,null,null,g.default.location),r=o.pathname,a=E[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var i=n?window.___history.replace:window.___history.push,s=setTimeout(function(){j.default.off("onPostLoadPageResources",t),j.default.emit("onDelayedLoadPageResources",{pathname:r}),i(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(s),i(o)):j.default.on("onPostLoadPageResources",t)}};window.___push=function(e){return o(e,!1)},window.___replace=function(e){return o(e,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return i.default.createElement(c.Router,{history:g.default},n)},y=(0,c.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:h,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(y,{layout:!0,children:function(n){return(0,u.createElement)(c.Route,{render:function(t){e(t.history);var o=n?n:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(N.default,r({page:!0},o)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],s=(0,a.apiRunner)("replaceHydrateFunction",void 0,l.default.render)[0];(0,d.default)(function(){return s(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},472:function(e,n){e.exports=[]},293:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(81),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},214:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},57:function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},384:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},3:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,l=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void l(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){l()}):l())}),void(i||(s=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),l(!0))}))))}}o()},434:function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;if("function"==typeof ga){if(n&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(e){return e.test(n.pathname)}))return;window.ga("set","page",n?n.pathname+n.search+n.hash:void 0),window.ga("send","pageview")}}},402:function(e,n,t){t(3),e.exports=function(e){return t.e(99219681209289,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(435)})})}},436:function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},140:function(e,n){"use strict";function t(e,n,f){if("string"!=typeof n){if(c){var p=l(n);p&&p!==c&&t(e,p,f)}var d=u(n);i&&(d=d.concat(i(n)));for(var m=0;m<d.length;++m){var h=d[m];if(!(o[h]||r[h]||f&&f[h])){var g=s(n,h);try{a(e,h,g)}catch(e){}}}return e}return e}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,c=l&&l(Object);e.exports=t},532:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},74:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(c===setTimeout)return setTimeout(e,0);if((c===t||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(n){try{return c.call(null,e,0)}catch(n){return c.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&i())}function i(){if(!h){var e=r(u);h=!0;for(var n=m.length;n;){for(d=m,m=[];++g<n;)d&&d[g].run();g=-1,n=m.length}d=null,h=!1,a(e)}}function s(e,n){this.fun=e,this.array=n}function l(){}var c,f,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:t}catch(e){c=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,m=[],h=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new s(e,n)),1!==m.length||h||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},654:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},211:function(e,n,t){"use strict";function o(e,n){if(!e){if(r)throw new Error(a);throw new Error(a+": "+(n||""))}}Object.defineProperty(n,"__esModule",{value:!0});var r=!0,a="Invariant failed";n.default=o},212:function(e,n,t){"use strict";function o(e,n){if(!r){if(e)return;var t="Warning: "+n;"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}var r=!0;e.exports=o},404:function(e,n,t){t(3),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(298)})})}},405:function(e,n,t){t(3),e.exports=function(e){return t.e(0xedb9ba83608c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(299)})})}},406:function(e,n,t){t(3),e.exports=function(e){return t.e(0x620f737b6699,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(300)})})}}});
//# sourceMappingURL=app-81d9d8936b4e7c2015b4.js.map