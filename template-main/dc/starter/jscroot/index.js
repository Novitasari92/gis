import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import {onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.4/croot.js";

import { url } from "https://jscroot.github.io/template/dc/starter/jscroot/url/config.js";
import { getContentURL } from "https://jscroot.github.io/template/dc/starter/jscroot/url/content.js";
import {runAfterSidebar,runAfterContent,runAfterHashChange} from "https://jscroot.github.io/template/dc/starter/jscroot/controller/main.js";



insertHTML(url.template.header,"sidebarcontainer",runAfterSidebar);

let urlcontent=getContentURL();
console.log(urlcontent);
if (urlcontent){
    insertHTML(getContentURL(),"content",runAfterContent);
}


onHashChange(runAfterHashChange);


