(this["webpackJsonpreact_movies-list-filter"]=this["webpackJsonpreact_movies-list-filter"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var a=i(3),s=i.n(a),r=(i(13),i(4)),c=i(5),n=i(8),l=i(7),o=i(1),d=i.n(o),m=(i(14),i(15),i(16),i(0)),h=function(e){var t=e.movie,i=t.imdbUrl,a=t.imgUrl,s=t.description,r=t.title;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-image",children:Object(m.jsx)("figure",{className:"image is-4by3",children:Object(m.jsx)("img",{src:a,alt:"Film logo"})})}),Object(m.jsxs)("div",{className:"card-content",children:[Object(m.jsxs)("div",{className:"media",children:[Object(m.jsx)("div",{className:"media-left",children:Object(m.jsx)("figure",{className:"image is-48x48",children:Object(m.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(m.jsx)("div",{className:"media-content",children:Object(m.jsx)("p",{className:"title is-8",children:r})})]}),Object(m.jsxs)("div",{className:"content",children:[s,Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:i,children:"IMDB"})]})]})]})},j=function(e){var t=e.movies;return Object(m.jsx)("div",{className:"movies",children:t.map((function(e){return Object(m.jsx)(h,{movie:e},e.imdbId)}))})},u=function(e){var t=e.query,i=e.addQueryValue;return Object(m.jsx)("div",{className:"box",children:Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"search-query",className:"label",children:"Search movie"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{type:"text",id:"search-query",className:"input",placeholder:"Type search word",value:t,onChange:i})})]})})},b=i(6),g=function(e){Object(n.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={query:""},e.addQueryValue=function(t){e.setState({query:t.target.value})},e.searchMovie=function(){var t=e.state.query.toLowerCase();return b.filter((function(e){var i=e.title,a=e.description;return i.toLowerCase().includes(t)||a.toLowerCase().includes(t)}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.searchMovie();return Object(m.jsxs)("div",{className:"page",children:[Object(m.jsxs)("div",{className:"page-content",children:[Object(m.jsx)(u,{query:this.state.query,addQueryValue:this.addQueryValue}),Object(m.jsxs)("div",{className:"show-search",children:[!e.length&&"No results found",Object(m.jsx)(j,{movies:e})]})]}),Object(m.jsx)("div",{className:"sidebar",children:"Sidebar goes here"})]})}}]),i}(d.a.Component);s.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.79f714da.chunk.js.map