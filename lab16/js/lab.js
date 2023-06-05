//Title: Lab 16: JSON and API
//Author: Brandon Vindel (bvindelf@ucsc.edu)
//Date: 06/05/23



// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(comicObj) {
        // do stuff
        console.log(comicObj);
        // Give the section a title using the comicObj.title key from the object
        console.log(comicObj.title);
        $("#output").html("<h2>"+ comicObj.title);
        // Create an image tag using the comicObj.img key from the object
        console.log(comicObj.img);
        var img = $('<img>');
        img.attr("src", comicObj.img);
        img.appendTo("#output");
        // Give the image an alt and title attributes using the comicObj.alt key from the object
        console.log(comicObj.alt);
        img.attr("title", comicObj.alt);



    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})