let headings_container = document.getElementById("headings_container")

let recentClick = JSON.parse(localStorage.getItem("recentClick"));

console.log(recentClick);


function uppeendData(){

    let last = recentClick[recentClick.length-1]

    let heading = document.createElement("h1");

    heading.textContent = last.title

    let img_div = document.createElement('div');

    let img = document.createElement("img");

    img.style.width = "80%"

    img.src = last.urlToImage;

    img_div.append(img)

    let  content = document.createElement("p");

    let author = document.createElement("p");

    author.textContent = last.author

    content.textContent = last.content;

    let description = document.createElement('p');

    description.textContent = last.description

    headings_container.append(heading,img_div,author,content,description)
}

uppeendData()