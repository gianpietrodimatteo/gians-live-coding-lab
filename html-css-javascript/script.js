(function ()  {
    console.log("herro word!");
    const newElement = document.createElement("p");
    const content = document.createTextNode("Hello! Script is running!");
    newElement.appendChild(content);
    document.body.appendChild(newElement);
})();