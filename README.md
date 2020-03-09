This product uses the TMDb API but is not endorsed or certified by TMDb.

### Demo: https://tomass666.github.io/web-app-from-scratch-1920/

![WAFS - Movies](https://user-images.githubusercontent.com/49723502/74514641-4b9d7180-4f0d-11ea-894b-5f32e328dcfc.png)

# Description


## How to install
This webapp is completely client-side. But for bundling and transpiling ES6 code to ES5. I use parcel as a bundler, but feel free to use another bundler instead.

To install this webapp, you only have to clone this repository by entering the following command in your terminal:

```git clone https://github.com/TomasS666/progressive-web-apps-1920.git```

or this command if you want to clone the repo into your current folder:

```git clone https://github.com/TomasS666/progressive-web-apps-1920.git ./```

or you can download the zip file or something similar by clicking on the green button on the top-right position of every repo.


## Concept



## Actor diagram
![actor-diagram](https://github.com/TomasS666/web-app-from-scratch-1920/blob/master/images-project/Actor.diagram.png)

## Interaction diagram
![Interaction diagram](https://github.com/TomasS666/web-app-from-scratch-1920/blob/master/images-project/Interaction-diagram.png)
## API TheMovieDB
I'm fetching data on the following endpoints:

To get a list of movies of a certain genre:
```
/discover/movie/with_genre={id}
/movie/{id}
```

### Used data
I'm fetching movies by genre. Within the render of the genres with movies I apply a ```#movie/{id}``` to anchors around the movie wrapper. When the user clicks on a movie, my routie takes the id param and uses it to fetch the movie data itself. With that data I render a detail-page with it's own sub components.

## Data manipulation
I made a cleanup pattern which takes the data and an array with the desired fields with the help of Guido and Kris.

### Limit
The rate limit has been removed. Yet after some time I retrieved the data of a genre and I saved it locally temporarily so I wouldn't overload the server of such a nice company. 

## Features
Searching movies
Overview page of movie genres
Single page detail page

## Wishlist
* Preload skeleton layout. Image reflow.
* Keeping track of history / hashes to enable the user to pick up where they left of.
* Search results view
* Better flow of data
* Less cascading functional code, more human readable code ( export functions in a covering parent object )
* More readable way for creating components.

## Future features
I've gotten in to the shadow dom way too late, but better late than never. I was very eager to apply this system with actual webcomponents into my web-app, but due time I have to keep my hands of it and finish the foundation I've been working on.

## Acknowledgements
Ramon with the diagrams. I had some real struggles with them and he helped me through.
Guido with the puzzle to fix a generic cleanup function.
Kris with the last pieces of the puzzle to make the cleanup function generic.

Cleaning the dom function based on [https://www.tutorialspoint.com/How-can-I-remove-all-child-elements-of-a-DOM-node-in-JavaScript](https://www.tutorialspoint.com/How-can-I-remove-all-child-elements-of-a-DOM-node-in-JavaScript)

## Proces
### CreateAndAppend
For creating my own templating engine I choose createElement() and append() over insertAdjacentHTML first because with innerAdjacentHTML you have to retrieve the DOM element again before you can add eventlisteners. 
But since the template became bigger and I realized of course I don't have to put events on everything I started using a mix of both innerAdjacdntHTML with template literals and createAndAppend().

But, as you can imagine, my ```createAndAppend()``` can look a little overwhelming and might make it less readable. Although some disagree and think it's quite nice in my use case.

This approach of using both my own ```createAndAppend()``` and template literals for static components made me think a lot. Maybe too much. I wanted a better way to render my components client-side. There is a way, and [Joost](https://github.com/joostf) introduced [Webcomponents](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to me. This was the thing I wanted to learn all along, but I've been coping with it too much. So right now I'm staying with my original approach and I hope I can introduce this advanced approach in my next project. It's a hard lesson to learn, but I've learned it anyway and that's my takeaway from this course.

## License

[MIT License Copyright (c) 2020 Tomas S](https://github.com/TomasS666/web-app-from-scratch-1920/blob/master/LICENSE)