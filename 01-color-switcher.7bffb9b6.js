!function(){var t={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},n=null;t.btnStart.addEventListener("click",(function(e){t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval((function(){t.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.7bffb9b6.js.map
