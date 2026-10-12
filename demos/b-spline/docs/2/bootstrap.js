// Wait for local MathJax before starting the unchanged project module.
await window.MathJax.startup.promise;
await import("./2.js");
