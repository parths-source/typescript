"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function oderchai(size) {
    if (size === "medium")
        return `medium cutting chai`;
    if (size == "large")
        return `extra chai`;
    return `chai of size#${size}`;
}
let order = 9;
console.log(oderchai(order));
function serve(msg) {
    if (msg) {
        return `serve chai acc to ${msg}`;
    }
    return `serving deafult masala chai`;
}
console.log(serve());
function serving(menu) {
    return `serving your ${menu.flav} with ${menu.sugar} sugar`;
}
const item = {
    flav: "elacihi chai",
    sugar: 1
};
console.log(serving(item));
//# sourceMappingURL=typenarrow.js.map