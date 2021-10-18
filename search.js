

let query = JSON.parse(localStorage.getItem("searched"));

console.log(query);

let headings_container = document.getElementById("headings_container")


function uppendNews() {
    let last = query[query.length - 1];

    console.log(last);

    last.forEach((news) => {


        let img_div = document.createElement('div');

        let img = document.createElement("img");

        img.style.width = "80%"

        img.src = news.urlToImage;

        img_div.append(img)

        let content_div = document.createElement('div');

        let heading =  document.createElement('h4');

        heading.textContent = news.title;

        let content =  document.createElement('p');

        content.style.overflow = "hidden"

        content.textContent = news.content

        content_div.append(heading);

        content_div.append(content)

        let hr = document.createElement("hr")

        headings_container.append(img_div,content_div)


    });
}


uppendNews()