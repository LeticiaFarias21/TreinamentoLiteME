const posts = [
    { title: 'Post One', body: 'This is post One'},
    { title: 'Post Two', body: 'This is post Two'}
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error in the process')
            }

        }, 2000);
    });
}

// createPost({title: 'Post three', body: 'This is post theree'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// we dont need to pass the callback

// Async 
//Await https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// async function init() {
//     await createPost({title: 'Post three', body: 'This is post theree'});
//     getPosts();
// } 

// init();

// Async await with fetch
async function fetchUsers() {
    const res = await fetch
        ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();
//promisse All
// const promise1 = Promise.resolve('One resolve');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'GoodBye'));

// const promise4 = fetch
//     ('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
