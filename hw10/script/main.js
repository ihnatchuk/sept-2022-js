fetch('http://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json())
    .then(users=>{
        for (const user of users) {
            let divUser=document.createElement('div');
            divUser.classList.add('user');
            let h2=document.createElement('h2');
            let {id, name}=user;
            h2.innerText=`${id} ${name}`;
            let a=document.createElement('a');
            a.href='user-details.html?id='+id;
            a.innerText='Details';
            divUser.append(h2,a);
            document.body.appendChild(divUser);
        }
    });