var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var world_places = ['karachi', 'Lahore', 'Peshaware', 'Quetta', 'Multan'];
console.log(world_places);
console.log(__spreadArray([], world_places, true).sort());
console.log(world_places);
console.log(__spreadArray([], world_places, true).reverse());
console.log(world_places);
(world_places.reverse());
console.log(world_places);
(world_places.sort());
console.log(world_places);
