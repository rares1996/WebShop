var books = [];
var prices = [];
var storedBooks ="";
var storedPrices="";

function updateList() {
    var bookArray = JSON.stringify(storedBooks).substring(1).split(",");
    var priceArray = JSON.stringify(storedPrices).substring(1).split(",");
    var total = 0

    var htmlString =
        "<table class='table table-striped'>"
        + "<thead><tr>" +
        "<th scope='col'></th>" +
        "<th scope='col'>Book</th>" +
        "<th scope='col'>Prices</th>" +
        "<th scope='col'>Action</th>" +
        "</tr></thead><tbody>"

    for (let i = 0; i < bookArray.length; i++) {
        if (bookArray[i] !== 'null"' && priceArray[i] !== 'NaN') {
            htmlString += "<tr> <th scope='row'></th>";

            htmlString += "<td>" + bookArray[i] + "</td>";

            console.log(bookArray[i])
            console.log(priceArray[i]);
            
            let price = priceArray[i].split(" ")
            total += parseInt(price[0])

            htmlString += "<td>" + priceArray[i] + "</td>";
            htmlString += "<td><a  href='cart.html'><button type='button' onclick='removeItem(name,id)' name='" + bookArray[i] + "' id='" + priceArray[i] + "' class='btn-outline-secondary'>Remove</button></a></td></tr>";
        }
    }
    document.getElementById("total").innerHTML += total + " DKK"
    document.getElementById("qty").innerHTML = bookArray.length-1;

    htmlString += "</tbody></table>"
    document.getElementById("booksList").innerHTML = htmlString;
   
}

function saveCart() {
    storedBooks = JSON.parse(localStorage.getItem("books"));
    storedPrices = JSON.parse(localStorage.getItem("prices"));

    books = books += storedBooks;
    prices = prices += storedPrices;

    if (books.length > 0) {
        localStorage.setItem("books", JSON.stringify(books));
    }

    if (prices.length > 0) {
        localStorage.setItem("prices", JSON.stringify(prices));
    }
}

function updateBasket(name, price) {
    if (localStorage.getItem("count") == null) {
        localStorage.setItem("count", 1)
    }
    else if (localStorage.getItem("count") != null) {
        var count = parseInt(localStorage.getItem("count"));
        count++
        console.log(count);
        localStorage.setItem("count", count);
    }

    document.getElementById("cartcount").innerHTML = localStorage.getItem("count");
    books.push(name + ",");
    prices.push(price + ",");

    saveCart();

    alert(name + " was added to cart");
    location.reload();

    console.log(storedBooks);
}



function removeItem(name, price) {
    var count = parseInt(localStorage.getItem("count"));
    count--;
    console.log(count);
    localStorage.setItem("count", count);

    storedBooks = JSON.parse(localStorage.getItem("books"));
    storedPrices = JSON.parse(localStorage.getItem("prices"));

    storedBooks = storedBooks.replace(name + ",", "");
    storedPrices = storedPrices.replace(price + ",", "");

    books = books += storedBooks;
    prices = prices += storedPrices;

    localStorage.setItem("books", JSON.stringify(storedBooks));
    localStorage.setItem("prices", JSON.stringify(storedPrices));
    
    alert(name + " was removed from cart");
}
