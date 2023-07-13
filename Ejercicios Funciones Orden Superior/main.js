///////1.

function createArray (array , alcohol){
    let newArray = array.filter(beer => beer.abv > alcohol) 
    // console.log(newArray)
    let beerMap = newArray.map(({name, abv, ibu}) => ({name, abv, ibu}))
    // console.log(beerMap)            
    return beerMap    
}

let arrayNew = createArray(beers , 7)
console.log(arrayNew)

///////2.

function topTen(array){
    let sortedBeers = array.sort((a,b) => {
        if(a.abv > b.abv){
            return -1;
        }
        if(a.abv< b.abv){
            return 1;
        }
    })
    // console.log(sortedBeers)
    return sortedBeers.slice(0, 10);
    
}

let topTenBeers = topTen(beers)
console.log(topTenBeers)

/////3. 

function topTenBitter(array){
    let sortedBeers = array.sort((a,b) => {
        if(a["ibu"] > b["ibu"]){
            return 1;
        }
        if(a["ibu"]< b["ibu"]){
            return -1;
        }
    })
    // console.log(sortedBeers)
    return sortedBeers.slice(0, 10);
    
}

let topTenBitterBeer = topTenBitter(beers)
console.log(topTenBitterBeer)

////4.

function topTenProperty(array, prop, b){
    
    if(b == true){
        let sortedBeers = array.sort((a,b) => {
            if(a[prop] > b[prop]){
                return 1;
            }
            if(a[prop]< b[prop]){
                return -1;
            }
        })
        
        return sortedBeers.slice(0, 10);
    }
    if(b == false){
        let sortedBeers = array.sort((a,b) => {
            if(a[prop] > b[prop]){
                return -1;
            }
            if(a[prop]< b[prop]){
                return 1;
            }
        }) 
        
        return sortedBeers.slice(0, 10);
    }
   
    
    
    
}

let topTenp = topTenProperty(beers , "ibu" , true)
console.log(topTenp)


////5.

let table = document.getElementById("tbodyBeers")

function tableById(array , _id){
    let findBeer = array.find(beer => beer.id === _id)
    console.log(findBeer);
    beerId(findBeer , table)
}

function beerId(object  , htmlElement){    
    return htmlElement.innerHTML += `<td>${object.name}</td>
                                  <td>${object.abv}</td>
                                  <td>${object.ibu}</td>` ;     
    
    
}

tableById(beers , 15)

