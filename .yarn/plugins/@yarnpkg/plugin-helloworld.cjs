/* eslint-disable */
module.exports = {
name: "@yarnpkg/plugin-helloworld",
factory: function (require) {var plugin;(()=>{"use strict";var e={d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>l});const t=require("@yarnpkg/cli"),n=require("clipanion");class r extends t.BaseCommand{constructor(){super(...arguments),this.name=n.Option.String("--name","John Doe",{description:"Your name"})}async execute(){console.log(`Hello ${this.name}!`)}}r.paths=[["hello","world"]];const l={hooks:{afterAllInstalled:()=>{console.log("What a great install, am I right?")}},commands:[r]};plugin=o})();return plugin;
}
};