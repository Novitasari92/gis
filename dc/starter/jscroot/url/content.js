import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
import { url } from "https://jscroot.github.io/template/dc/starter/jscroot/url/config.js";

export function getContentURL(){
    let hashlink=parseInt(getHash());
    switch (hashlink) {
        case 1:
            return url.template.content+"home.html";
        case 21:
            return url.template.content+"profile/passwords.html";
        case 22:
            return url.template.content+"profile/mail.html";
        case 23:
            return url.template.content+"profile/accounts.html";
        case 3:
            return url.template.content+"messages.html";
        case 41:
            return url.template.content+"notifications/blocked.html";
        case 42:
            return url.template.content+"notifications/silenced.html";
        case 43:
            return url.template.content+"notifications/publish.html";
        case 44:
            return url.template.content+"notifications/program.html";
        case 5:
            return url.template.content+"explore.html";
        case 6:
            return url.template.content+"saved.html";
        case 7:
            return url.template.content+"logout.html";
        default:
            return url.template.content+"home.html";
    }

}



export function getURLContentJS(){
    let hashlink=parseInt(getHash());
    switch (hashlink) {
        case 1:
            return url.contentview+"home.js";
        case 21:
            return url.contentview+"profile/passwords.js";
        case 22:
            return url.contentview+"profile/mail.js";
        case 23:
            return url.contentview+"profile/accounts.js";
        case 3:
            return url.contentview+"messages.js";
        case 41:
            return url.contentview+"notifications/blocked.js";
        case 42:
            return url.contentview+"notifications/silenced.js";
        case 43:
            return url.contentview+"notifications/publish.js";
        case 44:
            return url.contentview+"notifications/program.js";
        case 5:
            return url.contentview+"explore.js";
        case 6:
            return url.contentview+"saved.js";
        case 7:
            return url.contentview+"logout.js";
        default:
            return url.contentview+"home.js";
    }

}