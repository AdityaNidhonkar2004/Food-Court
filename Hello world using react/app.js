//Here the heading is object of javascript
const heading = React.createElement("h1", {}, "Hello World From React");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//.render function is to create that h1 tag to display in browser
root.render(heading);
