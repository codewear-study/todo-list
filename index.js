const contentList = document.getElementById("todo-content-list");
const registerButton = document.getElementById("register-button");
const titleInput = document.getElementById("todo-content-title-input");

function inputBoxKeyDown(event) {
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
    registerButton.click();
  }
}

function appendTodoContent() {
  if (titleInput.value === "") {
    return;
  }
  contentList.appendChild(createContent(titleInput.value));
  localStorage.setItem(titleInput.value, "");
  titleInput.value = "";
}

function createContent(title) {
  let content = document.createElement("li");
  content.classList.add("content-title");
  /*
   - content.innerHTML = title;
   + content.appendChild(document.createTextNode(title));
   *
   * changing innerHTML attribute all inner DOM nodes will re-placed and
   * recreated. Also, when change innerHTML attribute, you should manually
   * manage event handlers.
   */
  content.key = title;
  content.tabIndex = 0;
  content.appendChild(document.createTextNode(title));
  content.onclick = function (event) {
    localStorage.removeItem(event.target.key);
    event.target.remove();
  };
  content.onkeyup = function (event) {
    if (event.key === "Delete") {
      localStorage.removeItem(event.target.key);
      event.target.remove();
    }
  };
  return content;
}

for (var i = 0; i < localStorage.length; ++i) {
  contentList.appendChild(createContent(localStorage.key(i)));
}

titleInput.onkeyup = inputBoxKeyDown;
registerButton.onclick = appendTodoContent;
