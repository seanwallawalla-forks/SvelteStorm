import{J as e,U as t,T as n,V as r,W as i,X as o}from"./vendor.24ae4858.js";var s,a,u,l=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},f=function(){function t(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return t.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},t.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},t.prototype._updateExtraLibs=function(){return l(this,void 0,void 0,(function(){var e,t;return c(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},t.prototype._getClient=function(){var t=this;if(!this._client){this._worker=e.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var n=this._worker.getProxy();this._defaults.getEagerModelSync()&&(n=n.then((function(n){return t._worker?t._worker.withSyncedResources(e.getModels().filter((function(e){return e.getModeId()===t._modeId})).map((function(e){return e.uri}))):n}))),this._client=n}return this._client},t.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},t}(),p={"lib.d.ts":!0,"lib.dom.d.ts":!0,"lib.dom.iterable.d.ts":!0,"lib.es2015.collection.d.ts":!0,"lib.es2015.core.d.ts":!0,"lib.es2015.d.ts":!0,"lib.es2015.generator.d.ts":!0,"lib.es2015.iterable.d.ts":!0,"lib.es2015.promise.d.ts":!0,"lib.es2015.proxy.d.ts":!0,"lib.es2015.reflect.d.ts":!0,"lib.es2015.symbol.d.ts":!0,"lib.es2015.symbol.wellknown.d.ts":!0,"lib.es2016.array.include.d.ts":!0,"lib.es2016.d.ts":!0,"lib.es2016.full.d.ts":!0,"lib.es2017.d.ts":!0,"lib.es2017.full.d.ts":!0,"lib.es2017.intl.d.ts":!0,"lib.es2017.object.d.ts":!0,"lib.es2017.sharedmemory.d.ts":!0,"lib.es2017.string.d.ts":!0,"lib.es2017.typedarrays.d.ts":!0,"lib.es2018.asyncgenerator.d.ts":!0,"lib.es2018.asynciterable.d.ts":!0,"lib.es2018.d.ts":!0,"lib.es2018.full.d.ts":!0,"lib.es2018.intl.d.ts":!0,"lib.es2018.promise.d.ts":!0,"lib.es2018.regexp.d.ts":!0,"lib.es2019.array.d.ts":!0,"lib.es2019.d.ts":!0,"lib.es2019.full.d.ts":!0,"lib.es2019.object.d.ts":!0,"lib.es2019.string.d.ts":!0,"lib.es2019.symbol.d.ts":!0,"lib.es2020.bigint.d.ts":!0,"lib.es2020.d.ts":!0,"lib.es2020.full.d.ts":!0,"lib.es2020.intl.d.ts":!0,"lib.es2020.promise.d.ts":!0,"lib.es2020.string.d.ts":!0,"lib.es2020.symbol.wellknown.d.ts":!0,"lib.es5.d.ts":!0,"lib.es6.d.ts":!0,"lib.esnext.d.ts":!0,"lib.esnext.full.d.ts":!0,"lib.esnext.intl.d.ts":!0,"lib.esnext.promise.d.ts":!0,"lib.esnext.string.d.ts":!0,"lib.scripthost.d.ts":!0,"lib.webworker.d.ts":!0,"lib.webworker.importscripts.d.ts":!0},d=(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}))},m=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function g(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var o=0,s=e.next;o<s.length;o++){r+=g(s[o],t,n)}return r}function b(e){return e?e.map((function(e){return e.text})).join(""):""}(u=a||(a={}))[u.None=0]="None",u[u.Block=1]="Block",u[u.Smart=2]="Smart";var v,y,_=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}(),w=function(){function t(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return t.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!p[e.path.slice(1)])},t.prototype.getOrCreateModel=function(t){var n=e.getModel(t);return n||(this.isLibFile(t)&&this._hasFetchedLibFiles?e.createModel(this._libFiles[t.path.slice(1)],"javascript",t):null)},t.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},t.prototype.fetchLibFilesIfNecessary=function(e){return h(this,void 0,void 0,(function(){return m(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},t.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},t}();(y=v||(v={}))[y.Warning=0]="Warning",y[y.Error=1]="Error",y[y.Suggestion=2]="Suggestion",y[y.Message=3]="Message";var S=function(i){function o(t,n,r,o){var s=i.call(this,o)||this;s._libFiles=t,s._defaults=n,s._selector=r,s._disposables=[],s._listener=Object.create(null);var a=function(e){if(e.getModeId()===r){var t,n=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return s._doValidate(e)}),500)}));s._listener[e.uri.toString()]={dispose:function(){n.dispose(),clearTimeout(t)}},s._doValidate(e)}},u=function(t){e.setModelMarkers(t,s._selector,[]);var n=t.uri.toString();s._listener[n]&&(s._listener[n].dispose(),delete s._listener[n])};s._disposables.push(e.onDidCreateModel(a)),s._disposables.push(e.onWillDisposeModel(u)),s._disposables.push(e.onDidChangeModelLanguage((function(e){u(e.model),a(e.model)}))),s._disposables.push({dispose:function(){for(var t=0,n=e.getModels();t<n.length;t++){var r=n[t];u(r)}}});var l=function(){for(var t=0,n=e.getModels();t<n.length;t++){var r=n[t];u(r),a(r)}};return s._disposables.push(s._defaults.onDidChange(l)),s._disposables.push(s._defaults.onDidExtraLibsChange(l)),e.getModels().forEach(a),s}return d(o,i),o.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},o.prototype._doValidate=function(n){return h(this,void 0,void 0,(function(){var r,i,o,s,a,u,l,c,f,p=this;return m(this,(function(d){switch(d.label){case 0:return[4,this._worker(n.uri)];case 1:return r=d.sent(),n.isDisposed()?[2]:(i=[],o=this._defaults.getDiagnosticsOptions(),s=o.noSyntaxValidation,a=o.noSemanticValidation,u=o.noSuggestionDiagnostics,s||i.push(r.getSyntacticDiagnostics(n.uri.toString())),a||i.push(r.getSemanticDiagnostics(n.uri.toString())),u||i.push(r.getSuggestionDiagnostics(n.uri.toString())),[4,Promise.all(i)]);case 2:return!(l=d.sent())||n.isDisposed()?[2]:(c=l.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(p._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),f=c.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?t.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(f)]);case 3:return d.sent(),n.isDisposed()?[2]:(e.setModelMarkers(n,this._selector,c.map((function(e){return p._convertDiagnostics(n,e)}))),[2])}}))}))},o.prototype._convertDiagnostics=function(e,t){var r=t.start||0,i=t.length||1,o=e.getPositionAt(r),s=o.lineNumber,a=o.column,u=e.getPositionAt(r+i),l=u.lineNumber,c=u.column,f=[];return t.reportsUnnecessary&&f.push(n.Unnecessary),t.reportsDeprecated&&f.push(n.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:s,startColumn:a,endLineNumber:l,endColumn:c,message:g(t.messageText,"\n"),code:t.code.toString(),tags:f,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},o.prototype._convertRelatedInformation=function(e,n){var r=this;if(n){var i=[];return n.forEach((function(n){var o=e;if(n.file){var s=t.parse(n.file.fileName);o=r._libFiles.getOrCreateModel(s)}if(o){var a=n.start||0,u=n.length||1,l=o.getPositionAt(a),c=l.lineNumber,f=l.column,p=o.getPositionAt(a+u),d=p.lineNumber,h=p.column;i.push({resource:o.uri,startLineNumber:c,startColumn:f,endLineNumber:d,endColumn:h,message:g(n.messageText,"\n")})}})),i}},o.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case v.Error:return r.Error;case v.Message:return r.Info;case v.Warning:return r.Warning;case v.Suggestion:return r.Hint}return r.Info},o}(_),x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,s){return h(this,void 0,void 0,(function(){var r,s,a,u,l;return m(this,(function(c){switch(c.label){case 0:return r=e.getWordUntilPosition(n),s=new i(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),a=e.uri,u=e.getOffsetAt(n),[4,this._worker(a)];case 1:return[4,c.sent().getCompletionsAtPosition(a.toString(),u)];case 2:return!(l=c.sent())||e.isDisposed()?[2]:[2,{suggestions:l.entries.map((function(r){var l,c=s;if(r.replacementSpan){var f=e.getPositionAt(r.replacementSpan.start),p=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);c=new i(f.lineNumber,f.column,p.lineNumber,p.column)}var d=[];return-1!==(null===(l=r.kindModifiers)||void 0===l?void 0:l.indexOf("deprecated"))&&d.push(o.CompletionItemTag.Deprecated),{uri:a,position:n,offset:u,range:c,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:d}}))}]}}))}))},t.prototype.resolveCompletionItem=function(e,n){return h(this,void 0,void 0,(function(){var n,r,i,o,s;return m(this,(function(a){switch(a.label){case 0:return r=(n=e).uri,i=n.position,o=n.offset,[4,this._worker(r)];case 1:return[4,a.sent().getCompletionEntryDetails(r.toString(),o,n.label)];case 2:return(s=a.sent())?[2,{uri:r,position:i,label:s.name,kind:t.convertKind(s.kind),detail:b(s.displayParts),documentation:{value:t.createDocumentationString(s)}}]:[2,n]}}))}))},t.convertKind=function(e){switch(e){case L.primitiveType:case L.keyword:return o.CompletionItemKind.Keyword;case L.variable:case L.localVariable:return o.CompletionItemKind.Variable;case L.memberVariable:case L.memberGetAccessor:case L.memberSetAccessor:return o.CompletionItemKind.Field;case L.function:case L.memberFunction:case L.constructSignature:case L.callSignature:case L.indexSignature:return o.CompletionItemKind.Function;case L.enum:return o.CompletionItemKind.Enum;case L.module:return o.CompletionItemKind.Module;case L.class:return o.CompletionItemKind.Class;case L.interface:return o.CompletionItemKind.Interface;case L.warning:return o.CompletionItemKind.File}return o.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=b(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++){t+="\n\n"+k(r[n])}return t},t}(_);function k(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text.split(" "),r=n[0],i=n.slice(1);t+="`"+r+"`",i.length>0&&(t+=" — "+i.join(" "))}else e.text&&(t+=" — "+e.text);return t}var C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return d(t,e),t.prototype.provideSignatureHelp=function(e,t,n){return h(this,void 0,void 0,(function(){var n,r,i,o;return m(this,(function(s){switch(s.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,s.sent().getSignatureHelpItems(n.toString(),r)];case 2:return!(i=s.sent())||e.isDisposed()?[2]:(o={activeSignature:i.selectedItemIndex,activeParameter:i.argumentIndex,signatures:[]},i.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:b(e.documentation)},t.label+=b(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var o=b(n.displayParts),s={label:o,documentation:{value:b(n.documentation)}};t.label+=o,t.parameters.push(s),r<i.length-1&&(t.label+=b(e.separatorDisplayParts))})),t.label+=b(e.suffixDisplayParts),o.signatures.push(t)})),[2,{value:o,dispose:function(){}}])}}))}))},t}(_),F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideHover=function(e,t,n){return h(this,void 0,void 0,(function(){var n,r,i,o,s,a;return m(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,u.sent().getQuickInfoAtPosition(n.toString(),r)];case 2:return!(i=u.sent())||e.isDisposed()?[2]:(o=b(i.documentation),s=i.tags?i.tags.map((function(e){return k(e)})).join("  \n\n"):"",a=b(i.displayParts),[2,{range:this._textSpanToRange(e,i.textSpan),contents:[{value:"```typescript\n"+a+"\n```\n"},{value:o+(s?"\n\n"+s:"")}]}])}}))}))},t}(_),I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return h(this,void 0,void 0,(function(){var n,r,i,s=this;return m(this,(function(a){switch(a.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,a.sent().getOccurrencesAtPosition(n.toString(),r)];case 2:return!(i=a.sent())||e.isDisposed()?[2]:[2,i.map((function(t){return{range:s._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?o.DocumentHighlightKind.Write:o.DocumentHighlightKind.Text}}))]}}))}))},t}(_),P=function(e){function n(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return d(n,e),n.prototype.provideDefinition=function(e,n,r){return h(this,void 0,void 0,(function(){var r,i,o,s,a,u,l,c,f;return m(this,(function(p){switch(p.label){case 0:return r=e.uri,i=e.getOffsetAt(n),[4,this._worker(r)];case 1:return[4,p.sent().getDefinitionAtPosition(r.toString(),i)];case 2:return!(o=p.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return t.parse(e.fileName)})))];case 3:if(p.sent(),e.isDisposed())return[2];for(s=[],a=0,u=o;a<u.length;a++)l=u[a],c=t.parse(l.fileName),(f=this._libFiles.getOrCreateModel(c))&&s.push({uri:c,range:this._textSpanToRange(f,l.textSpan)});return[2,s]}}))}))},n}(_),D=function(e){function n(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return d(n,e),n.prototype.provideReferences=function(e,n,r,i){return h(this,void 0,void 0,(function(){var r,i,o,s,a,u,l,c,f;return m(this,(function(p){switch(p.label){case 0:return r=e.uri,i=e.getOffsetAt(n),[4,this._worker(r)];case 1:return[4,p.sent().getReferencesAtPosition(r.toString(),i)];case 2:return!(o=p.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return t.parse(e.fileName)})))];case 3:if(p.sent(),e.isDisposed())return[2];for(s=[],a=0,u=o;a<u.length;a++)l=u[a],c=t.parse(l.fileName),(f=this._libFiles.getOrCreateModel(c))&&s.push({uri:c,range:this._textSpanToRange(f,l.textSpan)});return[2,s]}}))}))},n}(_),A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideDocumentSymbols=function(e,t){return h(this,void 0,void 0,(function(){var t,n,r,i,s=this;return m(this,(function(a){switch(a.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return[4,a.sent().getNavigationBarItems(t.toString())];case 2:return!(n=a.sent())||e.isDisposed()?[2]:(r=function(t,n,i){var a={name:n.text,detail:"",kind:O[n.kind]||o.SymbolKind.Variable,range:s._textSpanToRange(e,n.spans[0]),selectionRange:s._textSpanToRange(e,n.spans[0]),tags:[],containerName:i};if(n.childItems&&n.childItems.length>0)for(var u=0,l=n.childItems;u<l.length;u++){var c=l[u];r(t,c,a.name)}t.push(a)},i=[],n.forEach((function(e){return r(i,e)})),[2,i])}}))}))},t}(_),L=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),O=Object.create(null);O[L.module]=o.SymbolKind.Module,O[L.class]=o.SymbolKind.Class,O[L.enum]=o.SymbolKind.Enum,O[L.interface]=o.SymbolKind.Interface,O[L.memberFunction]=o.SymbolKind.Method,O[L.memberVariable]=o.SymbolKind.Property,O[L.memberGetAccessor]=o.SymbolKind.Property,O[L.memberSetAccessor]=o.SymbolKind.Property,O[L.variable]=o.SymbolKind.Variable,O[L.const]=o.SymbolKind.Variable,O[L.localVariable]=o.SymbolKind.Variable,O[L.variable]=o.SymbolKind.Variable,O[L.function]=o.SymbolKind.Function,O[L.localFunction]=o.SymbolKind.Function;var T,N,E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:a.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(_),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return h(this,void 0,void 0,(function(){var r,i,o,s,a=this;return m(this,(function(u){switch(u.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return[4,u.sent().getFormattingEditsForRange(r.toString(),i,o,E._convertOptions(n))];case 2:return!(s=u.sent())||e.isDisposed()?[2]:[2,s.map((function(t){return a._convertTextChanges(e,t)}))]}}))}))},t}(E),M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return h(this,void 0,void 0,(function(){var i,o,s,a=this;return m(this,(function(u){switch(u.label){case 0:return i=e.uri,o=e.getOffsetAt(t),[4,this._worker(i)];case 1:return[4,u.sent().getFormattingEditsAfterKeystroke(i.toString(),o,n,E._convertOptions(r))];case 2:return!(s=u.sent())||e.isDisposed()?[2]:[2,s.map((function(t){return a._convertTextChanges(e,t)}))]}}))}))},t}(E),R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return h(this,void 0,void 0,(function(){var r,i,o,s,a,u,l=this;return m(this,(function(c){switch(c.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=E._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return[4,c.sent().getCodeFixesAtPosition(r.toString(),i,o,a,s)];case 2:return!(u=c.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:u.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return l._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,o=n.changes;i<o.length;i++)for(var s=0,a=o[i].textChanges;s<a.length;s++){var u=a[s];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,u.span),text:u.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(E),W=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return d(n,e),n.prototype.provideRenameEdits=function(e,n,r,i){return h(this,void 0,void 0,(function(){var i,o,s,a,u,l,c,f,p,d;return m(this,(function(h){switch(h.label){case 0:return i=e.uri,o=i.toString(),s=e.getOffsetAt(n),[4,this._worker(i)];case 1:return[4,(a=h.sent()).getRenameInfo(o,s,{allowRenameOfImportPath:!1})];case 2:if(!1===(u=h.sent()).canRename)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(void 0!==u.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(o,s,!1,!1,!1)];case 3:if(!(l=h.sent())||e.isDisposed())return[2];for(c=[],f=0,p=l;f<p.length;f++)d=p[f],c.push({resource:t.parse(d.fileName),edit:{range:this._textSpanToRange(e,d.textSpan),text:r}});return[2,{edits:c}]}}))}))},n}(_);function V(e){N=z(e,"typescript")}function j(e){T=z(e,"javascript")}function B(){return new Promise((function(e,t){if(!T)return t("JavaScript not registered!");e(T)}))}function H(){return new Promise((function(e,t){if(!N)return t("TypeScript not registered!");e(N)}))}function z(e,t){var n=new f(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},i=new w(r);return o.registerCompletionItemProvider(t,new x(r)),o.registerSignatureHelpProvider(t,new C(r)),o.registerHoverProvider(t,new F(r)),o.registerDocumentHighlightProvider(t,new I(r)),o.registerDefinitionProvider(t,new P(i,r)),o.registerReferenceProvider(t,new D(i,r)),o.registerDocumentSymbolProvider(t,new A(r)),o.registerDocumentRangeFormattingEditProvider(t,new K(r)),o.registerOnTypeFormattingEditProvider(t,new M(r)),o.registerCodeActionProvider(t,new R(r)),o.registerRenameProvider(t,new W(r)),new S(i,e,t,r),r}export{B as getJavaScriptWorker,H as getTypeScriptWorker,j as setupJavaScript,V as setupTypeScript};
//# sourceMappingURL=tsMode.34dd28a9.js.map
