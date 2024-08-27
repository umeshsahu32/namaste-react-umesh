const heading = React.createElement(
  "h1",
  { class: "heading" },
  "This is h1 from react"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { className: "heading" },
      "This is h1 from react"
    ),
    React.createElement(
      "h2",
      { className: "heading_sibling" },
      "This is h2 from react"
    ),
  ]),

  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { className: "heading" },
      "This is h1 from react"
    ),
    React.createElement(
      "h2",
      { className: "heading_sibling" },
      "This is h2 from react"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
