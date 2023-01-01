var courses = [{
    path: 'courses/cssAnimation.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.5,
    category: 'HTML'
},
{
    path: 'courses/cssColors.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 6.0,
    category: 'CSS'
},
{
    path: 'courses/cssMesures.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 6.5 ,
    category: 'CSS'
},
{
    path: 'courses/cssProperties.png',
    title: 'CSS Properties',
    price: 7.0,
    category: 'CSS'
},
{
    path: 'courses/cssSelectors.jpg',
    title: 'CSS selectors',
    price: 7.5,
    category: 'CSS'
},
{
    path: 'courses/htmlAttrVal.jpg',
    title: 'HTML Attributes And values',
    price: 8.0,
    category: 'JS'
},

{
    path: 'courses/htmlElements.png',
    title: 'HTML element and tags',
    price: 8.5,
    category: 'HTML'
},
{
    path: 'courses/htmlTags.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 9.0,
    category: 'HTML'
},
{
    path: 'courses/javascriptDef.png',
    title: 'what is javascript ?',
    price: 9.5,
    category: 'JS'
},
{
    path: 'courses/javascriptDOM.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 9.9,
    category: 'JS'
},
{
    path: 'courses/javascriptEvents.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 6.7,
    category: 'JS'
},
{
    path: 'courses/javascriptFunctions.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.9,
    category: 'JS'
},
{
    path: 'courses/javascriptFunctions2.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 8.4,
    category: 'JS'
},
{
    path: 'courses/javascriptObjects.png',
    title: 'JavaScript Objects and arrays',
     price: 6.7,
    category: 'JS'
},
{
    path: 'courses/javascriptOperators.png',
    title: 'javascript operators and conditions',
    price: 7.7,
    category: 'JS'
},
{
    path: 'courses/javascriptOverview.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.8,
    category: 'JS'
},
{
    path: 'courses/javascriptVariables.png',
    title: 'variabls and data type of javascript',
    price: 7.6,
    category: 'JS'
},
{
    path: 'courses/phpBasics.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 8.2,
    category: 'PHP'
},
{
    path: 'courses/phpCRUD.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 5.2,
    category: 'PHP'
},
{
    path: 'courses/phpDataBase.png',
    title: 'Manipulation des attributs et valeurs en HTML',
    price: 10.0,
    category: 'PHP',
}


]
var el = document.querySelector('#content2');

function creationCourses(image, titre, prix) {
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = image;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(prix));
    div.setAttribute('class', 'card col-3 me-3 mb-3');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    el.append(div);
}

courses.forEach((v) => {
    creationCourses(v.path, v.title, v.price);
})

function filter_cat(btn_id){
    let cat=btn_id.toLowerCase();
    document.getElementById("content2").innerHTML="";
    for(let i=0; i<courses.length; i++){
        if(cat==courses[i].category.toLowerCase()){
            let el= courses[i];
            let fig=document.createElement("FIGURE");
            let img = document.createElement("img");
            img.setAttribute("src",el.path);
            fig.appendChild(img);
            var titre = document.createElement("figcaption");
            var t = document.createTextNode(el.title);
            titre.appendChild(t);
            fig.appendChild(titre);
            var prix = document.createElement("figcaption");
            var p = document.createTextNode(el.price+"£");
            prix.appendChild(p);
            fig.appendChild(prix);
    
            fig.setAttribute('class', 'card col-3 me-3 mb-3')  

           document.getElementById("content2").appendChild(fig);
        }
    }
}

function filter(){
    let key=document.getElementById("search").value.toLowerCase();
    document.getElementById("content2").innerHTML="";
    for(let i=0; i<courses.length; i++){
        let pattern="/"+courses[i].title.toLowerCase()+"/";
        if(pattern.match(key)!=null){
            let el= courses[i];
            let fig=document.createElement("FIGURE");
            let img = document.createElement("img");
            img.setAttribute("src",el.path);
            fig.appendChild(img);
            var titre = document.createElement("figcaption");
            var t = document.createTextNode(el.title);
            titre.appendChild(t);
            fig.appendChild(titre);
            var prix = document.createElement("figcaption");
            var p = document.createTextNode(el.price+"£");
            prix.appendChild(p);
            fig.appendChild(prix);
    
            fig.setAttribute('class', 'card col-3 me-3 mb-3')  

           document.getElementById("content2").appendChild(fig);
        }
    }
}

function filter_price(){
    let prix1=document.getElementById("gett").value;
    document.getElementById("put").innerHTML=prix1;
    document.getElementById("content2").innerHTML="";
    for(let i=0; i<courses.length; i++){
        if(prix1<=courses[i].price){
            let el= courses[i];
            let fig=document.createElement("FIGURE");
            let img = document.createElement("img");
            img.setAttribute("src",el.path);
            fig.appendChild(img);
            var titre = document.createElement("figcaption");
            var t = document.createTextNode(el.title);
            titre.appendChild(t);
            fig.appendChild(titre);
            var prix = document.createElement("figcaption");
            var p = document.createTextNode(el.price+"£");
            prix.appendChild(p);
            fig.appendChild(prix);
    
            fig.setAttribute('class', 'card col-3 me-3 mb-3')  

           document.getElementById("content2").appendChild(fig);
        }
    }
}