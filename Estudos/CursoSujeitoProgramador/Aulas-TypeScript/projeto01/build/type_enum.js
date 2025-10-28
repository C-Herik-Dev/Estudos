"use strict";
// type ENUM -> Enumerar
Object.defineProperty(exports, "__esModule", { value: true });
var DisignColors;
(function (DisignColors) {
    DisignColors["white"] = "#ffffff";
    DisignColors["black"] = "#000000";
    DisignColors["blue"] = "#0000ff";
    DisignColors["red"] = "#ff0000";
    DisignColors["green"] = "#00ff00";
})(DisignColors || (DisignColors = {}));
console.log(DisignColors.black);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 2] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.SUPPORT);
//# sourceMappingURL=type_enum.js.map