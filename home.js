//c9cded08c10b4352a74b89514cd4def2

//GET https://newsapi.org/v2/top-headlines?country=us&apiKey=426b09e370654a0094f46181aecc60de


let headings_container = document.getElementById("headings_container")



async function topStories(){

    try{
        let res = await fetch("http://newsapi.org/v2/top-headlines?country=us&apiKey=426b09e370654a0094f46181aecc60de")

        let data = await res.json();

    //    console.log(data);

        uppendHeadings((data.articles))

        
    }

    catch(err){
    
          console.log(err);
    }
}


topStories()



function uppendHeadings(headlines_list){



    headlines_list.forEach((heading) => {

        let heading_div = document.createElement("div");

        let top_heading = document.createElement("h3");

        top_heading.onclick = ()=>{
            go_to_newsPage(heading)
        }


        top_heading.textContent = heading.title;

        let discription_div = document.createElement("div");

        let para = document.createElement("p");

        para.textContent = heading.description;


        let img_div = document.createElement("div");

        let img = document.createElement('img');

        img.src = heading.urlToImage;

        discription_div.append(para);

        img_div.append(img);
    

        heading_div.append(top_heading)

        
        headings_container.append(heading_div,discription_div,img_div)

       
    });

}


   function go_to_newsPage(heading){

    // window.location.href = "news.html"


    if( localStorage.getItem("recentClick") == null){
        localStorage.setItem("recentClick", JSON.stringify([]))
    }

    

    window.location.href = "news.html"
       

    let recentClick = ( JSON.parse(localStorage.getItem("recentClick")));

    recentClick.push(heading);

    localStorage.setItem("recentClick",JSON.stringify(recentClick))

    console.log(recentClick);
   }



   //GET 



   
async function newsSearch(){

    let query = document.getElementById("search_input").value

    try{
        let res = await fetch(`http://newsapi.org/v2/everything?q=${query}&apiKey=426b09e370654a0094f46181aecc60de`)

        let news = await res.json();

        console.log(news);

        go_to_searchPage(news.articles)

    
    }

    catch(err){
    
          console.log(err);
    }
}


function go_to_searchPage(query){
    if( localStorage.getItem("searched") == null){
        localStorage.setItem("searched", JSON.stringify([]))
    }

    let searched = JSON.parse(localStorage.getItem("searched"))

    searched.push(query)

    localStorage.setItem("searched",JSON.stringify(searched));

    window.location.href = "search.html"

    console.log( JSON.parse(localStorage.getItem("searched")));
}


