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
function affiche (produit){
    //afficher dans le dom les petites cartes
}
