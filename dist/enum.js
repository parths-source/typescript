"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order = [
    { flav: "elaichi", rating: 23 },
    { flav: "elaichi", rating: 23 }
];
//tuples
const items = ["parth", 22];
//enum
var size;
(function (size) {
    size[size["Large"] = 0] = "Large";
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
})(size || (size = {}));
const cupsize = size.Large;
// enum with keys
var flav;
(function (flav) {
    flav["MASALA"] = "masala";
    flav["GINGER"] = "ginger";
})(flav || (flav = {}));
function makechai(type) {
    console.log(`making %${makechai}`);
}
makechai(flav.GINGER);
//# sourceMappingURL=enum.js.map