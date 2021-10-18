//c9cded08c10b4352a74b89514cd4def2

//GET https://newsapi.org/v2/top-headlines?country=us&apiKey=426b09e370654a0094f46181aecc60de


let headings_container = document.getElementById("headings_container")



async function topStories(){

    try{
        let res = await fetch("http://newsapi.org/v2/top-headlines?country=us&apiKey=426b09e370654a0094f46181aecc60de")

        let data = await res.json();

       console.log(data.articles);

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

        let top_heading = document.createElement("h2");

        top_heading.textContent = heading.title;

        let discription_div = document.createElement("div");

        let para = document.createElement("p");

        para.textContent = heading.description;


        let img_div = document.createElement("div");

        let img = document.createElement('img');

        img.src = heading.description

        

        heading_div.append(top_heading)

        
        headings_container.append(heading_div)

       
    });

}

