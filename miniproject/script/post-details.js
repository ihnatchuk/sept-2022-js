let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('postData'));
let username = url.searchParams.get('username');

const {userId, id, title, body} = post;

const divPost = document.querySelector('.post');

const h2PostId = document.createElement('h2');
h2PostId.innerText = `${username} userId: ${userId}, postId: ${id}`;


const h3PostTitle = document.createElement('h3');
h3PostTitle.innerText = `${title}`;

const pPostBody = document.createElement('p');
pPostBody.innerText = `${body}`;

divPost.append(h2PostId, h3PostTitle, pPostBody);

const commentsTitle=document.querySelector('.title').cloneNode(true);
commentsTitle.innerText='Comments';

const divComments = document.createElement('div');
divComments.classList.add('comments');
const container = document.querySelector('.container');
container.append(commentsTitle,divComments);
    fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
        .then(resp => resp.json())
        .then(comments => {
            for (const comment of comments) {
                const {postId, id, name, email, body} = comment;
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');

                const commentTitle = document.createElement('div');
                commentTitle.innerText = `Post id: ${postId}, id: ${id}, email: ${email}`;

                const commentName = document.createElement('div');
                commentName.innerText = `${name}`;

                const commentBody = document.createElement('p');
                commentBody.innerText = `${body}`;

                commentDiv.append(commentTitle, commentName, commentBody);
                divComments.appendChild(commentDiv);
            }
        });