let status =false;
let data=[];
let edid=0;

const load=async() =>{
    let result = await fetch('https://jsonplaceholder.typicode.com/users')
    let json = await result.json()
    json.forEach(item=>{
        data.push(item)
    })
    status = true
}
const process=async()=>{
    if(!status){
        await load()
    }
    let row=document.getElementById('tdata');
    row.innerHTML="";
    data.forEach((item) =>{
        
        let tr=document.createElement('tr');

        let td=document.createElement('td');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let td5=document.createElement('td');
        let td6=document.createElement('td');

        // td.innerHTML=`${item.id} `
        td1.innerHTML=`${item.name}`
        td2.innerHTML=`${item.email}`
        td3.innerHTML=`${item.phone}`
        td4.innerHTML=`${item.website}`
        td5.innerHTML=`<button type="button"class="btn btn-primary mx-4" data-bs-toggle="modal"
        data-bs-target="#exampleModal" onclick="editBtn(${item.id});">Edit</button>`
        td6.innerHTML= `<button class="btn btn-primary" onclick="dlo(${item.id})"><a href="#myModal" style="color: white;" data-toggle="modal">Delete</a></button>`;

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        row.appendChild(tr);
    })
   document.getElementById('totentry').innerHTML=`Total Entries : ${data.length}`
}
function addUser(){
    if(document.getElementById("btnchk").value==edid){
        updatedetails();
        
        document.getElementById('btnchk').value=-9999;
    }else{
        
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
    }
    process();

    document.getElementById('name').value=``;
    document.getElementById('email').value=``;
    document.getElementById('phone').value=``;
    document.getElementById('website').value=``;
    
}
function deleteUser(){
    let id=document.getElementById('delitem').value;
    data=data.filter((item)=>{return id!=item.id; });
    console.log(data);
    let tab=document.getElementById('tdata');
    tab.innerHTML=``;
    process();
}




function editBtn(id){
    edid=id-1;

   let ind=0;
   for(let i=0;i<data.length;i++){
       if(data[i].id==id){
           ind=i;
       }
   }
   console.log(ind ,id);
    document.getElementById("btnchk").value=edid;
            document.getElementById('name').value = data[ind].name;
            document.getElementById('email').value = data[ind].email;
            document.getElementById('phone').value = data[ind].phone;
            document.getElementById('website').value = data[ind].website;

}


let hm=()=>{
    
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
    document.getElementById('website').value='';    
};

process();

let updatedetails=()=>{
    data[edid].name=document.getElementById('name').value;
    data[edid].email=document.getElementById('email').value;
    data[edid].phone=document.getElementById('phone').value;
    data[edid].website=document.getElementById('website').value;
};

function dlo(id){
    document.getElementById('delitem').value=id;
}


// function search(){
// let search = document.getElementById('searchTxt');
// search.addEventListener("click", function(){

//     let inputVal = search.value;
//     inputVal=inputVal.toLowerCase();
//     // console.log('Input event fired!', inputVal);
//     // let tables = document.getElementsByClassName('noteCard');
//     // Array.from(noteCards).forEach(function(element){
//     //     let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
//     //     if(cardTxt.includes(inputVal)){
//     //         element.style.display = "block";
//     //     }
//     //     else{
//     //         element.style.display = "none";
//     //     }
//     //     // console.log(cardTxt);

//     data.forEach((item)=>{
//         let name=item.name.toLowerCase();
//         if(name.includes(inputVal)){
//             item.style.display = "relative";
//         }
//     })
//     })x  
// }