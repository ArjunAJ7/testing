// {anime: 'Princess Tutu',
//  character: 'Rue Kuroha',
// quote: 'The depths of despair…. '}

// ---------------------------------------------------------------------------

// fetch("https://testbooru.donmai.us")
//   .then((response) => response.json())
//   .then((value) => {
//     console.log(value);
//     document.getElementById("image").src = value.url;
//   });

fetch("https://animechan.vercel.app/api/random")
  .then((response) => response.json())
  .then((quote) => {
    console.log(quote);
    document.getElementById("title").innerHTML = quote.anime;
    document.getElementById("char").innerHTML = quote.character;
    document.getElementById("quo").innerHTML = `"${quote.quote}"`;
  });

//   url: 'https://cdn.catboys.com/images/image_266.jpg', artist: 'unknown', artist_url: 'none', source_url: 'none', error: 'none'}
// artist
// :
// "unknown"
// artist_url
// :
// "none"
// error
// :
// "none"
// source_url
// :
// "none"
// url
// :
// "https://cdn.catboys.com/images/image_266.jpg"
