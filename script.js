const MyComponent = () => {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, "Learn Web Development"),
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites."
      )
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ',
        React.createElement(
          "a",
          {
            href: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
            target: "_blank",
          },
          "the rest of MDN"
        ),
        ", and other intermediate to advanced resources that assume a lot of previous knowledge."
      )
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "If you are a complete beginner, web development can be challenging we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development on your own or as part of a class, a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."
      )
    )
  );
};

ReactDOM.render(MyComponent(), document.querySelector("#root"));
