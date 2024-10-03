const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => loadDisply(data.categories))
    .catch(error => console.log(error))
}

const loadDisply = (data)=>{
   data.forEach(item => {
   
   });
}
loadCategories()