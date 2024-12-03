//On donne l'url du site à appeller
fetch(`https://fakestoreapi.com/products`)
.then ((rep)=>{
    // Javascript recoit une réponse de l'api(objet js pas exploitable directement => il faut le transformer en json)
    return rep.json()
})
.then(donnee=>{
    //Ensuite j'ai accès ici à ma donnée
    console.log(donnee)
    //Ici j'ai une liste de produit
    //Je boucle sur le tableau de données:
    donnee.forEach(prod => {
        affiche(prod)
    });
})

//Rôle: Afficher une produit dans la page html
//Paramètre: Le produit
function affiche (prod){
    let img = prod.image;
    let nom = prod.title;
    let description = prod.description;
    let categorie = prod.category;
    let rate = prod.rating.rate;
    let count = prod.rating.count;
    let prix = prod.price;


let card = document.querySelector("#result")
card.innerHTML += `
            <div class="card">
                <div class="relative">
                    <img src="${img}" class="img" alt="">
                    <p class="absolute categorie"> ${categorie} </p>
                </div>
                <div class="description ">

                    <h2>${nom}</h2>
                    <p>${description}</p>
                    <div class="flex spaceBetween ratePrix">
                        <p>${rate} ${count} </p>
                        <p> ${prix} </p>
                    </div>
                    <a href="" class="btn ">Ajouter au panier</a> <!-- bouton Ajouter au panier -->
                </div>
            </div>`

}