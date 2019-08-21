const request = require('request');
const cheerio = require('cheerio');

// const pageURL = "https://www.cyfrowypolsat.net/telewizja/pakiety/rodzinny-hd-cinemax-hd";
const pageURL = "[HERE ENTER PAGE URL]";

//POLSAT
request(pageURL, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    let $ = cheerio.load(html);
    let attributsList = [];
    $('div.loga img').each(function(i, element){
      let a = $(this).attr("title");
      attributsList.push(a);
    });

    console.log(attributsList);
  }
});

//linki wraz z tytułami artykułów
// request(pageURL, function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     let $ = cheerio.load(html);
//     let articles = {};
//     $('a.nu-widget-article-list__link').each(function(i, element){
//       let articleURL = pageURL + $(this).attr("href");
//       let articleTitle = $(this).children().children(".long-title").text();
//       articles[articleURL] = articleTitle;  
//     });

//     console.log(articles);
//   }
// });