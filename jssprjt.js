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
function remplir(){
    let cp=0;
    while (cp<3){
        let x1 = Math.floor(Math.random() * 19);
        let el1= courses[x1];
        let fig1=document.createElement("FIGURE");
        let img1 = document.createElement("img");
        fig1.appendChild(img1);
        img1.setAttribute("src",el1.path);
        img1.setAttribute("width", "290px");
        img1.setAttribute("height", "290px");
        var titre1 = document.createElement("figcaption");
        var t1 = document.createTextNode(el1.title);
        titre1.appendChild(t1);
        fig1.appendChild(titre1);
        var prix1 = document.createElement("figcaption");
        var p1 = document.createTextNode(el1.price);
        prix1.appendChild(p1);
        fig1.appendChild(prix1);
        document.getElementById("container").appendChild(fig1);
        cp++}
        
}
window.onload=remplir();
