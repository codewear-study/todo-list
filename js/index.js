var index = {
    create_btn: '',
    submit_btn: '',
    todoList: [],
    idIndex: 0,

    init: function () {
        var _this = this;
        _this.create_btn = document.getElementById("create btn");
        _this.create_btn.addEventListener('click', _this.create);

        _this.submit_btn = document.getElementById("submit btn");
        _this.submit_btn.addEventListener('click', _this.submit);
    },

    create: function () {
        if (index.create_btn.innerText === "할일 만들기") {
            document.getElementById("create form").style.display = "block";
            index.create_btn.innerText = "취소하기"
        } else {
            document.getElementById("create form").style.display = "none";
            index.create_btn.innerText = "할일 만들기"
        }
        index.inputClear();
    },

    submit: function () {
        var title = document.getElementById("todo title");
        var who = document.getElementById("todo who");
        var when = document.getElementById("todo when");
        var what = document.getElementById("todo what");

        todoItem = new TodoItem(index.idIndex++, title.value, who.value, when.value, what.value);
        index.todoList.push(todoItem);
        index.make(todoItem);
        index.create();
    },

    make: function (todoItem) {

        var item = document.createElement('div');
        item.className = "card";
        item.style = "width: 30rem;"
        item.id = todoItem.id + "";

        var itemGroup = document.createElement('ul');
        itemGroup.className = "list-group list-group-flush";

        var itemTitle = document.createElement('h3');
        itemTitle.className = "card-title";
        itemTitle.innerHTML = todoItem.title;

        var itemInfo = document.createElement('h5');
        itemInfo.className = "card-subtitle mb-2 text-muted"
        itemInfo.innerHTML = todoItem.who + "  " + todoItem.when;

        var itemWhat = document.createElement('p');
        itemWhat.className = "card-text";
        itemWhat.innerHTML = todoItem.what;

        var buttonGroups = document.createElement('div');

        var deleteButton = document.createElement('button');
        deleteButton.className = "btn btn-danger";
        deleteButton.innerText = "삭제하기";
        deleteButton.addEventListener('click', () => {
            var todoList = document.getElementById('todo-list');
            todoList.removeChild(item);
        });

        item.appendChild(itemGroup);

        itemGroup.appendChild(itemTitle);
        itemGroup.appendChild(itemInfo);
        itemGroup.appendChild(itemWhat);
        itemGroup.appendChild(buttonGroups);

        buttonGroups.appendChild(deleteButton);

        var todoList = document.getElementById('todo-list');
        todoList.appendChild(item);

    },

    inputClear: function () {
        document.getElementById("todo title").value = '';
        document.getElementById("todo who").value = '';
        document.getElementById("todo when").value = '';
        document.getElementById("todo what").value = '';
    }
}

index.init();