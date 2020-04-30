var index = {
  contentList: document.getElementById("todo-list"),
  registerButton: document.getElementById("register-button"),
  inputBox: document.getElementById("element-name"),

  InputBoxKeyDown: function (event) {
    /*
     - if (event.keyCode === 13) {
     + if (event.code === "Enter") {
     * KeyboardEvent.keyCode was deprecated. Use KeyboardEvent.code instead.
     *
     - if (event.code === "Enter") {
     + if (event.key === "Enter") {
     * Using KeyboardEvent.key is better. Because KeyboardEvent.code based on
     * QWERTY keyboard. So, other keyboard like Dvorak or AZERTY behave weird.
     * e.g. KeyboardEvent.key === "KeyQ" in QWERTY is "Q" key, but, "'" key in
     * Dvorak.
     * Additional. KeyboardEvent.key recognize system input method.
     * e.g. RightAlt key in english keyboard become HangulMode in korean
     * keyboard. Space key in english keyboard become empty value in japanese
     * keyboard when change kana to kanji.
     */
    if (event.key === "Enter") {
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
