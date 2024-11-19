const showLibraryBtn = document.getElementById('showlibrarybtn');
const libraryDiv = document.getElementById('library-data');


// ye function he jo btn pr lagya he 
function library() {
  const demo = {
    Id: "1",
    ProductName: "bonanza",
    Category: "Fashion / Apparel",
    ProductType: "Unstitched Fabric / Ready-to-Wear",
    ColorOptions: "Multiple colors available (e.g., red, blue, green, black)",
    Size: "S, M, L, XL, XXL",
    Price: 2000,
    Delivery: "Free delivery for orders above Rs. 5,000. Delivery within 3-5 business days."
  };
// yaha se ye content div me show hoga click k bad 
  let content = `
    <p>Item Id: ${demo.Id}</p>
    <p>Product Name: ${demo.ProductName}</p>
    <p>Product Type: ${demo.ProductType}</p>
    <p>Color Options: ${demo.ColorOptions}</p>
    <p>Size: ${demo.Size}</p>
    <p>Price: ${demo.Price}</p>
    <p>Delivery: ${demo.Delivery}</p>
  `;
  libraryDiv.innerHTML = content;
}

showLibraryBtn.onclick = library;



  
// J. yaha se shoro he 

const showjbutton = document.getElementById('showj');
const showjdiv = document.getElementById('j');

function junaidjamshed() {
    const demo = {
        Id: 2,
        Name: "J. Perfume",
        Category: "Perfume",
        Notes: "Top notes of citrus and floral, with a hint of amber and musk",
        SizeOptions: "50ml, 100ml",
        Price: 3500,
        Delivery: "Free delivery in all our Pakistan on  your bike 🤣🤣"
    };

    let content = `
        <p>Id: ${demo.Id}</p>
        <p>Name: ${demo.Name}</p>
        <p>Category: ${demo.Category}</p>
        <p>Notes: ${demo.Notes}</p>
        <p>Size Options: ${demo.SizeOptions}</p>
        <p>Price: Rs. ${demo.Price}</p>
        <p>Delivery: ${demo.Delivery}</p>
    `;
    
    j.innerHTML = content;
}

showjbutton.onclick = junaidjamshed;















