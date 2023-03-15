const getBlog = async () => {
    const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    
    const data_drink = await response.json();
    const data = data_drink.drinks
    // const productId = new URLSearchParams(window.location.search).get("id");


    
    const blogContainer = document.getElementById(
        "blog-list-container"
    );
    
    data.forEach((item) => {
        // console.log(item.idDrink);
        const singleBlog = `
        <div class="blog-card" onclick="viewBlogDetails(${item.idDrink})">

            <img class="blog-image"
            src="${item.strDrinkThumb}"
            />
            <h4 style="padding: 5px">${item.strDrink}</h4>


        </div>`;

        blogContainer.innerHTML += singleBlog
    
    });
};
getBlog();


const viewBlogDetails = (idDrink) => {
    window.location.href = `blogDetail.html?id=${idDrink}`;
};




const id = new URLSearchParams(window.location.search).get('id');


        const getBlogDetails = async () => {
            // console.log(idDrink)
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            const data_drink = await response.json();
            const data = data_drink.drinks[0]

            // const data = await response.json();

            const blogDetails =
            ` 
            <div class="detail-section">
                <img style="border-radius: 20px; margin: 10px; height:400px;" src="${data.strDrinkThumb}" alt="product_img">
                <div class="detail-container">
                    <h3>${data.strDrink}</h3>
                    
                    <p style="padding: 5px">Glass : ${data.strGlass}</p>
                    <h3>How to make it?</h3>
                    <p style="padding: 5px">${data.strInstructions}</p>
                </div>
            </div>
            <div id="read-more">
            
            </div>
            
            `

            const detailSection = document.getElementById("detail-section-by-id")
            detailSection.innerHTML = blogDetails
          
        };

        getBlogDetails();


        const readMore = async () => {
            const response = await fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
            );
            
            const data_drink = await response.json();
            const data = data_drink.drinks
            // const productId = new URLSearchParams(window.location.search).get("id");
        
        
            
            const readMoreContainer = document.getElementById(
                "read-more"
            );
            
            data.forEach((item) => {
                // console.log(item.idDrink);
                const readMoreBlog = `
                <div class="blog-card" onclick="viewBlogDetails(${item.idDrink})">
                    <h4 style="padding: 5px">${item.strDrink}</h4>    
                </div>`
        
                readMoreContainer.innerHTML += readMoreBlog;
            
            });
        }
        const viewProductDetails = (idDrink) => {
            window.location.href = `blogdetails.html?id=${idDrink}`;
        };
        readMore();