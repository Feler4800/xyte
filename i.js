let custom_title = "Awesome solve!";
let payload = document.title.split(" - CubeDB")[0]; //Obtain payload

if (document.title.startsWith("<d")) {
    document.title = document.title.replace(payload, custom_title); //Remove payload from webpage title
    title.innerHTML = custom_title; //Remove payload from hidden title textarea
}

document.querySelector("details").outerHTML = custom_title; //Removes the first details tag itself

Array.from(document.querySelectorAll("a")).forEach(e => e.href = e.href.replace(
    /%3Cd.*?%0A/g,
    encodeURIComponent(custom_title)
    //Remove any URL encoded references to payload
));
document.body.removeChild(
  Array.from(document.querySelectorAll("script")).reverse()[0]
); //Remove script from page
