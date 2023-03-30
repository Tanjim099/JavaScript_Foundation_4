function filterByCategory(products){
    return function(category){
        return products.filter(function(product){
            return product.category == category;
        })
    }
}

var products = [
    {name: "Shirt", category: "Clothing" },
    {name: "Pantd", category: "Clothing" },
    {name: "Phome", category: "Electric" },
    {name: "Ring", category: "Faction" }
];

var filterByClothing = filterByCategory(products);
var ClothingProducts = filterByClothing("Clothing");

console.log(ClothingProducts);