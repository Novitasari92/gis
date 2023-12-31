import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import {addScriptInBody} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.3/croot.js";

import { url } from "https://jscroot.github.io/template/dc/starter/jscroot/url/config.js";
import { getURLContentJS } from "https://jscroot.github.io/template/dc/starter/jscroot/url/content.js";
import { getContentURL } from "https://jscroot.github.io/template/dc/starter/jscroot/url/content.js";


export function runAfterHashChange(evt){
    console.log("runAfterHashChange");
    insertHTML(getContentURL(),"content",runAfterContent);
}

export function runAfterSidebar(){
    console.log("runaftersidebar");
    insertHTML(url.template.settings,"offcanvas",runAfterSettings);
}

function runAfterSettings(){
    console.log("runAfterSettings");
    insertHTML(url.template.header,"app_header",runAfterHeader);
}

function runAfterHeader(){
    console.log("runAfterHeader");
    insertHTML(url.template.search,"searchModal",runAfterSearch);
}

function runAfterSearch(){
    console.log("runAfterSearch");
    insertHTML(url.template.footer,"footer",runAfterFooter);
}

function runAfterFooter(){
    console.log("runAfterFooter");
    addScriptInBody("assets/js/SimpleBar.js");
    addScriptInBody("assets/js/app.js");
}


export async function runAfterContent(){
    let urljs = getURLContentJS();
    let module = await import(urljs);
    module.main();
    console.log(urljs);
}