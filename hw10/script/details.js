let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(resp=>resp.json())
    .then(user=>{
       let {id, name, username, email, address:{street, suite, city, zipcode,
           geo:{lat,lng}}, phone, website, company:{name:companyName, catchPhrase, bs}}=user;

       let divUser=document.createElement('div');
       divUser.classList.add('user');

       let h2Name=document.createElement('h2');
       h2Name.innerText=`${id} ${name}`;

       let h3UserName=document.createElement('h3');
       h3UserName.innerText=`Username - ${username}, email - ${email}`;

       let divAddr=document.createElement('div');
       let h3Addr=document.createElement('h3');
       h3Addr.innerText='Address:';
       let pAddr=document.createElement('p');
       pAddr.innerText=`Street: ${street},  Suite: ${suite}, city: ${city}, zipcode: ${zipcode}`;

       let pGeo=document.createElement('p');
       pGeo.innerText=`Geo: lat- ${lat},  lng: ${lng}`;
       divAddr.append(h3Addr, pAddr, pGeo);

       let h3Phone=document.createElement('h3');
       h3Phone.innerText=`Phone: ${phone}`;
       let h3Website=document.createElement('h3');
       h3Website.innerText=`Website: ${website}`;

       let divCompany=document.createElement('div');
       let h3Company=document.createElement('h3');
       h3Company.innerText=`Company: ${companyName}`;

       let pCatchPhrase=document.createElement('p');
       pCatchPhrase.innerText=`Catchphrase: ${catchPhrase}`;

       let pBS=document.createElement('p');
       pBS.innerText=`BS: ${bs}`;
       divCompany.append(h3Company, pCatchPhrase, pBS);

       divUser.append(h2Name, h3UserName, divAddr, h3Phone, h3Website, divCompany);
       document.body.appendChild(divUser);
    });