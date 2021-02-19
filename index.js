console.log("Hey i am working");
let status =false;
let data=[];

const load=async() =>{
    let result = await fetch('https://jsonplaceholder.typicode.com/users')
    let json = await result.json()
    console.log(json)
    json.forEach(item=>{
        data.push(item)
    })
    status = true
}
const process=async()=>{
    console.log("Happy");
    if(!status){
        await load()
    }
    let row=document.getElementById('tdata');
    
    data.forEach((item) =>{
        
        let tr=document.createElement('tr');
        
        let td=document.createElement('td');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let td5=document.createElement('td');
        let td6=document.createElement('td');

        td.innerHTML=`${item.id} `
        td1.innerHTML=`${item.name}`
        td2.innerHTML=`${item.email}`
        td3.innerHTML=`${item.phone}`
        td4.innerHTML=`${item.website}`
        td5.innerHTML=`<button type="button" class="btn btn-primary">Edit</button>`
        td6.innerHTML= `<button type="button" class="btn btn-primary" onclick="deleteUser(${item.id}) ;" >Delete</button>`;

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        row.appendChild(tr);
    })
}
function addUser(){
    console.log("Added");
    let myObj={
        id : data.length+1,
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        website :document.getElementById('website').value
    }
    let tab=document.getElementById('tdata');
    tab.innerHTML=``;
    data.push(myObj);
    process();

    document.getElementById('name').value=``;
    document.getElementById('email').value=``;
    document.getElementById('phone').value=``;
    document.getElementById('website').value=``;
    
}
function deleteUser(id){
if(confirm('Are you sure you want to delete')){
    data=data.filter((item)=>{return id!=item.id; });
    let tab=document.getElementById('tdata');
    tab.innerHTML=``;
    console.log(data);
    process();
}

}

process();
