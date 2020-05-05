class TodoItem {
    constructor(id, title, who, when, what) {
        this.id = id;
        this.title = title;
        this.who = who;
        this.when = when;
        this.what = what;
    }

    setTitle(title) {
        this.title = title;
    }
    setWho(who) {
        this.who = who;
    }
    setWhen(when) {
        this.when = when;
    }
    setWhat(what) {
        this.what = what;
    }
}