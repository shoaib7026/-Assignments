let washoo =[];
function add(){
    let pr ={
        Name :"shoiab Khan",
        FatherName:"Muhammad Shaheen",
        Studentid:1572627,
        Phone: '03181447026',
        Email:"shoaibkhan1447026@gmail.com",
        PostalCode:75000

    };


    washoo.push(pr);


    const maindiv = document.getElementById('card');
    maindiv.innerHTML="";
    washoo.forEach(element => {
        const push =`
        <div class="items">
        <p> Name: ${element.Name}</p>
        <p>FatherName: ${element.FatherName}</p>
        <p>Studentid: ${element.Studentid}</p>
        <p>Phone: ${element.Phone}</p>
        <p>Email: ${element.Email}</p>
        <p>Address: ${element.Address}</p>
        <p>Postalcode: ${element.PostalCode}</p>
        </div>
        `;


        maindiv.innerHTML += push;
        
    });
}