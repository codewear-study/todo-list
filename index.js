var index = {
  contentList: document.getElementById("todo-list"),
  registerButton: document.getElementById("register-button"),
  inputBox: document.getElementById("element-name"),

  InputBoxKeyDown: function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      index.registerButton.click();
    }
  },
  appendTodoContent: function () {
    if (index.inputBox.value === "") {
      return;
    }
    const contentTitle = index.inputBox.value;
    index.inputBox.value = "";
    var content = document.createElement("li");
    content.innerHTML = contentTitle;
    content.style["user-select"] = "none";
    content.style["-webkit-user-select"] = "none";
    content.style["-khtml-user-select"] = "none";
    content.style["-moz-user-select"] = "none";
    content.style["-ms-user-select"] = "none";
    content.onclick = (event) => {
      event.target.remove();
    };
    index.contentList.appendChild(content);
  },
};
(function init() {
  index.inputBox.onkeyup = index.InputBoxKeyDown;
  index.registerButton.onclick = index.appendTodoContent;
})();
