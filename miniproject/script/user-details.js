let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('userdata'));

const {
    id, name, username, email, address: {
        street, suite, city, zipcode,
        geo: {lat, lng}
    }, phone, website, company: {name: companyName, catchPhrase, bs}
} = user;

const divUser = document.querySelector('.user');

const h2Name = document.createElement('h2');
h2Name.innerText = `${id} ${name}`;

const h3UserName = document.createElement('h3');
h3UserName.innerText = `Username - ${username}, email - ${email}`;

const divAddr = document.createElement('div');
const h3Addr = document.createElement('h3');
h3Addr.innerText = 'Address:';
const pAddr = document.createElement('p');
pAddr.innerText = `Street: ${street},  Suite: ${suite}, city: ${city}, zipcode: ${zipcode}`;

const pGeo = document.createElement('p');
pGeo.innerText = `Geo: lat- ${lat},  lng: ${lng}`;
divAddr.append(h3Addr, pAddr, pGeo);

const h3Phone = document.createElement('h3');
h3Phone.innerText = `Phone: ${phone}`;
const h3Website = document.createElement('h3');
h3Website.innerText = `Website: ${website}`;

const divCompany = document.createElement('div');
const h3Company = document.createElement('h3');
h3Company.innerText = `Company: ${companyName}`;

const pCatchPhrase = document.createElement('p');
pCatchPhrase.innerText = `Catchphrase: ${catchPhrase}`;

const pBS = document.createElement('p');
pBS.innerText = `BS: ${bs}`;
divCompany.append(h3Company, pCatchPhrase, pBS);

divUser.append(h2Name, h3UserName, divAddr, h3Phone, h3Website, divCompany);

const button = document.querySelector('button');
const a = document.createElement('a');
button.innerText = 'Posts of current user';

const postsDiv = document.createElement('div');
postsDiv.classList.add('posts');
const container = document.querySelector('.container');
container.appendChild(postsDiv);

button.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(resp => resp.json())
        .then(posts => {
            for (const post of posts) {
                const {id, title} = post;
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                const postTitle = document.createElement('div');
                postTitle.innerText = `${id}. ${title}`;

                const a = document.createElement('a');
                a.href = 'post-details.html?postData=' + JSON.stringify(post)+`&username=${username}`;
                a.innerText = 'Details';

                postsDiv.classList.add('posts-padding')
                postDiv.append(postTitle, a);
                postsDiv.appendChild(postDiv);
            }
        })
};







