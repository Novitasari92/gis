//please always use trailing slash(/) for folder or extension for file.
export const croot = "https://jscroot.github.io/template/base/";

const folder={
    template:"jscroot/template/",
    controller : "jscroot/controller/",
    view : "jscroot/view/",
    content : "jscroot/template/content/"
}

export const controllerfolder = croot+folder.controller;
const templatefolder=croot+folder.template;

export const url={
    content : templatefolder+"content/",
    header: templatefolder+"header.html",
    navbar:templatefolder+"navbar.html",
    controller : croot+folder.controller,
    view : croot+folder.view,
    contentview: croot+folder.view+"content/"
}