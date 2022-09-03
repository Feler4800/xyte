let ns = 'sq1-appearance-colorright=';
let _gc = () => ('; ' + document.cookie).split('; ' + ns).pop().split(';')[0];
let s = _gc();
setInterval(() => {
    let d = _gc();
    if (d != s) {
        s = d.substr(0, 7) + s.substr(7);
    };
    document.cookie = ns + s + "; path=/";
    if (document.querySelector("#sq1-appearance-colorright").nextSibling instanceof HTMLInputElement || document.querySelector("#sq1-appearance-colorright").nextSibling instanceof HTMLScriptElement) {
        document.querySelector("#sq1-appearance-colorright").nextSibling.remove();
    };
}, 10);
document.querySelector("#sq1-appearance-colorright").outerHTML = '<input type="color" id="sq1-appearance-colorright" class="colorselector" value="' + s.substr(0,7) + '" data-change="sq1right">'; 


console.log("Injected from cookies persistently.")
