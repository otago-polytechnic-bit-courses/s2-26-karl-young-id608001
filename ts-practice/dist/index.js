"use strict";
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("FitTrack"));
// const sum = (name, class_count, arrays) => {
//   return `${name} has ${class_count} classes with ${arrays} as students`
// }
// console.log(sum('Teams', 5))
// console.log(sum('CityFit', 55))
const sum = (name, class_count, arrays) => {
    return `${name} has ${class_count} classes with ${arrays} as students`;
};
console.log(sum('Teams', 5, ["Dave", "Argyle"]));
console.log(sum('CityFit', 55, ["Cody", "Greg"]));
function describeStatus(status) {
    if (status === "member")
        return "Currently a member";
    if (status === "paused")
        return "Membership paused";
    return "No longer a member";
}
console.log(describeStatus("active"));
