/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-typescript version: 4.9.1(64042339ee6a4e05eab2d1946f9445744734cc62)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-typescript/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};define("vs/language/typescript/workerManager",["require","exports","./fillers/monaco-editor-core"],(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerManager=void 0;var r=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=n.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(n.editor.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}();t.WorkerManager=r})),define("vs/language/typescript/lib/lib.index",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.libFileSet=void 0,t.libFileSet={},t.libFileSet["lib.d.ts"]=!0,t.libFileSet["lib.dom.d.ts"]=!0,t.libFileSet["lib.dom.iterable.d.ts"]=!0,t.libFileSet["lib.es2015.collection.d.ts"]=!0,t.libFileSet["lib.es2015.core.d.ts"]=!0,t.libFileSet["lib.es2015.d.ts"]=!0,t.libFileSet["lib.es2015.generator.d.ts"]=!0,t.libFileSet["lib.es2015.iterable.d.ts"]=!0,t.libFileSet["lib.es2015.promise.d.ts"]=!0,t.libFileSet["lib.es2015.proxy.d.ts"]=!0,t.libFileSet["lib.es2015.reflect.d.ts"]=!0,t.libFileSet["lib.es2015.symbol.d.ts"]=!0,t.libFileSet["lib.es2015.symbol.wellknown.d.ts"]=!0,t.libFileSet["lib.es2016.array.include.d.ts"]=!0,t.libFileSet["lib.es2016.d.ts"]=!0,t.libFileSet["lib.es2016.full.d.ts"]=!0,t.libFileSet["lib.es2017.d.ts"]=!0,t.libFileSet["lib.es2017.full.d.ts"]=!0,t.libFileSet["lib.es2017.intl.d.ts"]=!0,t.libFileSet["lib.es2017.object.d.ts"]=!0,t.libFileSet["lib.es2017.sharedmemory.d.ts"]=!0,t.libFileSet["lib.es2017.string.d.ts"]=!0,t.libFileSet["lib.es2017.typedarrays.d.ts"]=!0,t.libFileSet["lib.es2018.asyncgenerator.d.ts"]=!0,t.libFileSet["lib.es2018.asynciterable.d.ts"]=!0,t.libFileSet["lib.es2018.d.ts"]=!0,t.libFileSet["lib.es2018.full.d.ts"]=!0,t.libFileSet["lib.es2018.intl.d.ts"]=!0,t.libFileSet["lib.es2018.promise.d.ts"]=!0,t.libFileSet["lib.es2018.regexp.d.ts"]=!0,t.libFileSet["lib.es2019.array.d.ts"]=!0,t.libFileSet["lib.es2019.d.ts"]=!0,t.libFileSet["lib.es2019.full.d.ts"]=!0,t.libFileSet["lib.es2019.object.d.ts"]=!0,t.libFileSet["lib.es2019.string.d.ts"]=!0,t.libFileSet["lib.es2019.symbol.d.ts"]=!0,t.libFileSet["lib.es2020.bigint.d.ts"]=!0,t.libFileSet["lib.es2020.d.ts"]=!0,t.libFileSet["lib.es2020.full.d.ts"]=!0,t.libFileSet["lib.es2020.intl.d.ts"]=!0,t.libFileSet["lib.es2020.promise.d.ts"]=!0,t.libFileSet["lib.es2020.sharedmemory.d.ts"]=!0,t.libFileSet["lib.es2020.string.d.ts"]=!0,t.libFileSet["lib.es2020.symbol.wellknown.d.ts"]=!0,t.libFileSet["lib.es2021.d.ts"]=!0,t.libFileSet["lib.es2021.full.d.ts"]=!0,t.libFileSet["lib.es2021.promise.d.ts"]=!0,t.libFileSet["lib.es2021.string.d.ts"]=!0,t.libFileSet["lib.es2021.weakref.d.ts"]=!0,t.libFileSet["lib.es5.d.ts"]=!0,t.libFileSet["lib.es6.d.ts"]=!0,t.libFileSet["lib.esnext.d.ts"]=!0,t.libFileSet["lib.esnext.full.d.ts"]=!0,t.libFileSet["lib.esnext.intl.d.ts"]=!0,t.libFileSet["lib.esnext.promise.d.ts"]=!0,t.libFileSet["lib.esnext.string.d.ts"]=!0,t.libFileSet["lib.esnext.weakref.d.ts"]=!0,t.libFileSet["lib.scripthost.d.ts"]=!0,t.libFileSet["lib.webworker.d.ts"]=!0,t.libFileSet["lib.webworker.importscripts.d.ts"]=!0,t.libFileSet["lib.webworker.iterable.d.ts"]=!0}));var __extends=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),__assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)};__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};define("vs/language/typescript/languageFeatures",["require","exports","./monaco.contribution","./lib/lib.index","./fillers/monaco-editor-core"],(function(e,t,n,r,i){"use strict";var s;function o(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var s=0,a=e.next;s<a.length;s++){r+=o(a[s],t,n)}return r}function a(e){return e?e.map((function(e){return e.text})).join(""):""}Object.defineProperty(t,"__esModule",{value:!0}),t.InlayHintsAdapter=t.RenameAdapter=t.CodeActionAdaptor=t.FormatOnTypeAdapter=t.FormatAdapter=t.FormatHelper=t.Kind=t.OutlineAdapter=t.ReferenceAdapter=t.DefinitionAdapter=t.OccurrencesAdapter=t.QuickInfoAdapter=t.SignatureHelpAdapter=t.SuggestAdapter=t.DiagnosticsAdapter=t.LibFiles=t.Adapter=t.flattenDiagnosticMessageText=void 0,function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(s||(s={})),t.flattenDiagnosticMessageText=o;var l=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}();t.Adapter=l;var u,c=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!r.libFileSet[e.path.slice(1)])},e.prototype.getOrCreateModel=function(e){var t=i.Uri.parse(e),r=i.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return i.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);var s=n.typescriptDefaults.getExtraLibs()[e];return s?i.editor.createModel(s.content,"typescript",t):null},e.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},e}();t.LibFiles=c,function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(u||(u={}));var d=function(e){function t(t,n,r,s){var o=e.call(this,s)||this;o._libFiles=t,o._defaults=n,o._selector=r,o._disposables=[],o._listener=Object.create(null);var a=function(e){if(e.getModeId()===r){var t,n=function(){o._defaults.getDiagnosticsOptions().onlyVisible?e.isAttachedToEditor()&&o._doValidate(e):o._doValidate(e)},s=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout(n,500)})),a=e.onDidChangeAttached((function(){o._defaults.getDiagnosticsOptions().onlyVisible&&(e.isAttachedToEditor()?n():i.editor.setModelMarkers(e,o._selector,[]))}));o._listener[e.uri.toString()]={dispose:function(){s.dispose(),a.dispose(),clearTimeout(t)}},n()}},l=function(e){i.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(i.editor.onDidCreateModel((function(e){return a(e)}))),o._disposables.push(i.editor.onWillDisposeModel(l)),o._disposables.push(i.editor.onDidChangeModelLanguage((function(e){l(e.model),a(e.model)}))),o._disposables.push({dispose:function(){for(var e=0,t=i.editor.getModels();e<t.length;e++){var n=t[e];l(n)}}});var u=function(){for(var e=0,t=i.editor.getModels();e<t.length;e++){var n=t[e];l(n),a(n)}};return o._disposables.push(o._defaults.onDidChange(u)),o._disposables.push(o._defaults.onDidExtraLibsChange(u)),i.editor.getModels().forEach((function(e){return a(e)})),o}return __extends(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,r,s,o,a,l,u,c,d=this;return __generator(this,(function(p){switch(p.label){case 0:return[4,this._worker(e.uri)];case 1:return t=p.sent(),e.isDisposed()?[2]:(n=[],r=this._defaults.getDiagnosticsOptions(),s=r.noSyntaxValidation,o=r.noSemanticValidation,a=r.noSuggestionDiagnostics,s||n.push(t.getSyntacticDiagnostics(e.uri.toString())),o||n.push(t.getSemanticDiagnostics(e.uri.toString())),a||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return!(l=p.sent())||e.isDisposed()?[2]:(u=l.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(d._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),c=u.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?i.Uri.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(c)]);case 3:return p.sent(),e.isDisposed()?[2]:(i.editor.setModelMarkers(e,this._selector,u.map((function(t){return d._convertDiagnostics(e,t)}))),[2])}}))}))},t.prototype._convertDiagnostics=function(e,t){var n=t.start||0,r=t.length||1,s=e.getPositionAt(n),a=s.lineNumber,l=s.column,u=e.getPositionAt(n+r),c=u.lineNumber,d=u.column,p=[];return t.reportsUnnecessary&&p.push(i.MarkerTag.Unnecessary),t.reportsDeprecated&&p.push(i.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:a,startColumn:l,endLineNumber:c,endColumn:d,message:o(t.messageText,"\n"),code:t.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){var n=this;if(!t)return[];var r=[];return t.forEach((function(t){var i=e;if(t.file&&(i=n._libFiles.getOrCreateModel(t.file.fileName)),i){var s=t.start||0,a=t.length||1,l=i.getPositionAt(s),u=l.lineNumber,c=l.column,d=i.getPositionAt(s+a),p=d.lineNumber,g=d.column;r.push({resource:i.uri,startLineNumber:u,startColumn:c,endLineNumber:p,endColumn:g,message:o(t.messageText,"\n")})}})),r},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case u.Error:return i.MarkerSeverity.Error;case u.Message:return i.MarkerSeverity.Info;case u.Warning:return i.MarkerSeverity.Warning;case u.Suggestion:return i.MarkerSeverity.Hint}return i.MarkerSeverity.Info},t}(l);t.DiagnosticsAdapter=d;var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,s){return __awaiter(this,void 0,void 0,(function(){var r,s,o,a,l,u,c;return __generator(this,(function(d){switch(d.label){case 0:return r=e.getWordUntilPosition(n),s=new i.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=e.uri,a=e.getOffsetAt(n),[4,this._worker(o)];case 1:return l=d.sent(),e.isDisposed()?[2]:[4,l.getCompletionsAtPosition(o.toString(),a)];case 2:return!(u=d.sent())||e.isDisposed()?[2]:(c=u.entries.map((function(r){var l,u=s;if(r.replacementSpan){var c=e.getPositionAt(r.replacementSpan.start),d=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);u=new i.Range(c.lineNumber,c.column,d.lineNumber,d.column)}var p=[];return-1!==(null===(l=r.kindModifiers)||void 0===l?void 0:l.indexOf("deprecated"))&&p.push(i.languages.CompletionItemTag.Deprecated),{uri:o,position:n,offset:a,range:u,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:p}})),[2,{suggestions:c}])}}))}))},t.prototype.resolveCompletionItem=function(e,n){return __awaiter(this,void 0,void 0,(function(){var n,r,i,s,o;return __generator(this,(function(l){switch(l.label){case 0:return r=(n=e).uri,i=n.position,s=n.offset,[4,this._worker(r)];case 1:return[4,l.sent().getCompletionEntryDetails(r.toString(),s,n.label)];case 2:return(o=l.sent())?[2,{uri:r,position:i,label:o.name,kind:t.convertKind(o.kind),detail:a(o.displayParts),documentation:{value:t.createDocumentationString(o)}}]:[2,n]}}))}))},t.convertKind=function(e){switch(e){case y.primitiveType:case y.keyword:return i.languages.CompletionItemKind.Keyword;case y.variable:case y.localVariable:return i.languages.CompletionItemKind.Variable;case y.memberVariable:case y.memberGetAccessor:case y.memberSetAccessor:return i.languages.CompletionItemKind.Field;case y.function:case y.memberFunction:case y.constructSignature:case y.callSignature:case y.indexSignature:return i.languages.CompletionItemKind.Function;case y.enum:return i.languages.CompletionItemKind.Enum;case y.module:return i.languages.CompletionItemKind.Module;case y.class:return i.languages.CompletionItemKind.Class;case y.interface:return i.languages.CompletionItemKind.Interface;case y.warning:return i.languages.CompletionItemKind.File}return i.languages.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=a(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++){t+="\n\n"+g(r[n])}return t},t}(l);function g(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text,r=n[0],i=n.slice(1);t+="`"+r.text+"`",i.length>0&&(t+=" — "+i.map((function(e){return e.text})).join(" "))}else Array.isArray(e.text)?t+=" — "+e.text.map((function(e){return e.text})).join(" "):e.text&&(t+=" — "+e.text);return t}t.SuggestAdapter=p;var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return __extends(t,e),t._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case i.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},t.prototype.provideSignatureHelp=function(e,n,r,i){return __awaiter(this,void 0,void 0,(function(){var r,s,o,l,u;return __generator(this,(function(c){switch(c.label){case 0:return r=e.uri,s=e.getOffsetAt(n),[4,this._worker(r)];case 1:return o=c.sent(),e.isDisposed()?[2]:[4,o.getSignatureHelpItems(r.toString(),s,{triggerReason:t._toSignatureHelpTriggerReason(i)})];case 2:return!(l=c.sent())||e.isDisposed()?[2]:(u={activeSignature:l.selectedItemIndex,activeParameter:l.argumentIndex,signatures:[]},l.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:a(e.documentation)},t.label+=a(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var s=a(n.displayParts),o={label:s,documentation:{value:a(n.documentation)}};t.label+=s,t.parameters.push(o),r<i.length-1&&(t.label+=a(e.separatorDisplayParts))})),t.label+=a(e.suffixDisplayParts),u.signatures.push(t)})),[2,{value:u,dispose:function(){}}])}}))}))},t}(l);t.SignatureHelpAdapter=f;var b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideHover=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var n,r,i,s,o,l,u;return __generator(this,(function(c){switch(c.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=c.sent(),e.isDisposed()?[2]:[4,i.getQuickInfoAtPosition(n.toString(),r)];case 2:return!(s=c.sent())||e.isDisposed()?[2]:(o=a(s.documentation),l=s.tags?s.tags.map((function(e){return g(e)})).join("  \n\n"):"",u=a(s.displayParts),[2,{range:this._textSpanToRange(e,s.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}])}}))}))},t}(l);t.QuickInfoAdapter=b;var h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var n,r,s,o,a=this;return __generator(this,(function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=l.sent(),e.isDisposed()?[2]:[4,s.getOccurrencesAtPosition(n.toString(),r)];case 2:return!(o=l.sent())||e.isDisposed()?[2]:[2,o.map((function(t){return{range:a._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?i.languages.DocumentHighlightKind.Write:i.languages.DocumentHighlightKind.Text}}))]}}))}))},t}(l);t.OccurrencesAdapter=h;var m=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return __extends(t,e),t.prototype.provideDefinition=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var n,r,s,o,a,l,u,c,d;return __generator(this,(function(p){switch(p.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=p.sent(),e.isDisposed()?[2]:[4,s.getDefinitionAtPosition(n.toString(),r)];case 2:return!(o=p.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return i.Uri.parse(e.fileName)})))];case 3:if(p.sent(),e.isDisposed())return[2];for(a=[],l=0,u=o;l<u.length;l++)c=u[l],(d=this._libFiles.getOrCreateModel(c.fileName))&&a.push({uri:d.uri,range:this._textSpanToRange(d,c.textSpan)});return[2,a]}}))}))},t}(l);t.DefinitionAdapter=m;var _=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return __extends(t,e),t.prototype.provideReferences=function(e,t,n,r){return __awaiter(this,void 0,void 0,(function(){var n,r,s,o,a,l,u,c,d;return __generator(this,(function(p){switch(p.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return s=p.sent(),e.isDisposed()?[2]:[4,s.getReferencesAtPosition(n.toString(),r)];case 2:return!(o=p.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return i.Uri.parse(e.fileName)})))];case 3:if(p.sent(),e.isDisposed())return[2];for(a=[],l=0,u=o;l<u.length;l++)c=u[l],(d=this._libFiles.getOrCreateModel(c.fileName))&&a.push({uri:d.uri,range:this._textSpanToRange(d,c.textSpan)});return[2,a]}}))}))},t}(l);t.ReferenceAdapter=_;var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentSymbols=function(e,t){return __awaiter(this,void 0,void 0,(function(){var t,n,r,s,o,a=this;return __generator(this,(function(l){switch(l.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return n=l.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(t.toString())];case 2:return!(r=l.sent())||e.isDisposed()?[2]:(s=function(t,n,r){var o={name:n.text,detail:"",kind:S[n.kind]||i.languages.SymbolKind.Variable,range:a._textSpanToRange(e,n.spans[0]),selectionRange:a._textSpanToRange(e,n.spans[0]),tags:[]};if(r&&(o.containerName=r),n.childItems&&n.childItems.length>0)for(var l=0,u=n.childItems;l<u.length;l++){var c=u[l];s(t,c,o.name)}t.push(o)},o=[],r.forEach((function(e){return s(o,e)})),[2,o])}}))}))},t}(l);t.OutlineAdapter=v;var y=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}();t.Kind=y;var S=Object.create(null);S[y.module]=i.languages.SymbolKind.Module,S[y.class]=i.languages.SymbolKind.Class,S[y.enum]=i.languages.SymbolKind.Enum,S[y.interface]=i.languages.SymbolKind.Interface,S[y.memberFunction]=i.languages.SymbolKind.Method,S[y.memberVariable]=i.languages.SymbolKind.Property,S[y.memberGetAccessor]=i.languages.SymbolKind.Property,S[y.memberSetAccessor]=i.languages.SymbolKind.Property,S[y.variable]=i.languages.SymbolKind.Variable,S[y.const]=i.languages.SymbolKind.Variable,S[y.localVariable]=i.languages.SymbolKind.Variable,S[y.variable]=i.languages.SymbolKind.Variable,S[y.function]=i.languages.SymbolKind.Function,S[y.localFunction]=i.languages.SymbolKind.Function;var w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:s.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(l);t.FormatHelper=w;var F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return __awaiter(this,void 0,void 0,(function(){var r,i,s,o,a,l=this;return __generator(this,(function(u){switch(u.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsForRange(r.toString(),i,s,w._convertOptions(n))];case 2:return!(a=u.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return l._convertTextChanges(e,t)}))]}}))}))},t}(w);t.FormatAdapter=F;var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return __awaiter(this,void 0,void 0,(function(){var i,s,o,a,l=this;return __generator(this,(function(u){switch(u.label){case 0:return i=e.uri,s=e.getOffsetAt(t),[4,this._worker(i)];case 1:return o=u.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsAfterKeystroke(i.toString(),s,n,w._convertOptions(r))];case 2:return!(a=u.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return l._convertTextChanges(e,t)}))]}}))}))},t}(w);t.FormatOnTypeAdapter=x;var k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return __awaiter(this,void 0,void 0,(function(){var r,i,s,o,a,l,u,c=this;return __generator(this,(function(d){switch(d.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=w._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return l=d.sent(),e.isDisposed()?[2]:[4,l.getCodeFixesAtPosition(r.toString(),i,s,a,o)];case 2:return!(u=d.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:u.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return c._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,s=n.changes;i<s.length;i++)for(var o=0,a=s[i].textChanges;o<a.length;o++){var l=a[o];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,l.span),text:l.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(w);t.CodeActionAdaptor=k;var A=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return __extends(t,e),t.prototype.provideRenameEdits=function(e,t,n,r){return __awaiter(this,void 0,void 0,(function(){var r,i,s,o,a,l,u,c,d,p,g;return __generator(this,(function(f){switch(f.label){case 0:return r=e.uri,i=r.toString(),s=e.getOffsetAt(t),[4,this._worker(r)];case 1:return o=f.sent(),e.isDisposed()?[2]:[4,o.getRenameInfo(i,s,{allowRenameOfImportPath:!1})];case 2:if(!1===(a=f.sent()).canRename)return[2,{edits:[],rejectReason:a.localizedErrorMessage}];if(void 0!==a.fileToRename)throw new Error("Renaming files is not supported.");return[4,o.findRenameLocations(i,s,!1,!1,!1)];case 3:if(!(l=f.sent())||e.isDisposed())return[2];for(u=[],c=0,d=l;c<d.length;c++){if(p=d[c],!(g=this._libFiles.getOrCreateModel(p.fileName)))throw new Error("Unknown file "+p.fileName+".");u.push({resource:g.uri,edit:{range:this._textSpanToRange(g,p.textSpan),text:n}})}return[2,{edits:u}]}}))}))},t}(l);t.RenameAdapter=A;var C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.provideInlayHints=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var n,r,i,s,o,a=this;return __generator(this,(function(l){switch(l.label){case 0:return n=e.uri,r=n.toString(),i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(n)];case 1:return o=l.sent(),e.isDisposed()?[2,[]]:[4,o.provideInlayHints(r,i,s)];case 2:return[2,l.sent().map((function(t){return __assign(__assign({},t),{position:e.getPositionAt(t.position),kind:a._convertHintKind(t.kind)})}))]}}))}))},t.prototype._convertHintKind=function(e){switch(e){case"Parameter":return i.languages.InlayHintKind.Parameter;case"Type":return i.languages.InlayHintKind.Type;default:return i.languages.InlayHintKind.Other}},t}(l);t.InlayHintsAdapter=C})),define("vs/language/typescript/tsMode",["require","exports","./workerManager","./languageFeatures","./fillers/monaco-editor-core"],(function(e,t,n,r,i){"use strict";var s,o;function a(e,t){var s=new n.WorkerManager(t,e),o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s.getLanguageServiceWorker.apply(s,e)},a=new r.LibFiles(o);return i.languages.registerCompletionItemProvider(t,new r.SuggestAdapter(o)),i.languages.registerSignatureHelpProvider(t,new r.SignatureHelpAdapter(o)),i.languages.registerHoverProvider(t,new r.QuickInfoAdapter(o)),i.languages.registerDocumentHighlightProvider(t,new r.OccurrencesAdapter(o)),i.languages.registerDefinitionProvider(t,new r.DefinitionAdapter(a,o)),i.languages.registerReferenceProvider(t,new r.ReferenceAdapter(a,o)),i.languages.registerDocumentSymbolProvider(t,new r.OutlineAdapter(o)),i.languages.registerDocumentRangeFormattingEditProvider(t,new r.FormatAdapter(o)),i.languages.registerOnTypeFormattingEditProvider(t,new r.FormatOnTypeAdapter(o)),i.languages.registerCodeActionProvider(t,new r.CodeActionAdaptor(o)),i.languages.registerRenameProvider(t,new r.RenameAdapter(a,o)),i.languages.registerInlayHintsProvider(t,new r.InlayHintsAdapter(o)),new r.DiagnosticsAdapter(a,e,t,o),o}Object.defineProperty(t,"__esModule",{value:!0}),t.getTypeScriptWorker=t.getJavaScriptWorker=t.setupJavaScript=t.setupTypeScript=void 0,t.setupTypeScript=function(e){o=a(e,"typescript")},t.setupJavaScript=function(e){s=a(e,"javascript")},t.getJavaScriptWorker=function(){return new Promise((function(e,t){if(!s)return t("JavaScript not registered!");e(s)}))},t.getTypeScriptWorker=function(){return new Promise((function(e,t){if(!o)return t("TypeScript not registered!");e(o)}))}}));