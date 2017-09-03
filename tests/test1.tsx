interface Post {
    name: string;
    text: string;
    id: number;
}

class Action<T> {
    public test(state: T): T{
        console.log(state);
        return state;
    }
}

class PostAction extends Action<Post[]> {
    public test(state: Post[]): Post[]{
        state.forEach(post => {
            console.log(post.name);
        });
        return state;
    }
}

class AnotherAction extends Action<Post[]> {
    public test(state: Post[]): Post[]{
        state.forEach(post => {
            console.log(post.text);
        });
        return state;
    }
}

let action: Action<string> = new Action<string>();
let postAction: Action<any> = new PostAction();
let anotherAction: Action<any> = new AnotherAction();

action.test('hui');
let posts: Post[] = [
    {id: 1, name: 'Vasya', text: 'Hello'},
    {id: 2, name: 'Petya', text: 'GoodBy'}
];
postAction.test(posts);
anotherAction.test(posts);
