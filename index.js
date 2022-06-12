$('document').ready(function(){

    $('#madLibsBtnSubmit').on('click', function(e) {
        e.preventDefault();

        const personName = $('#personName').val();
        const character = $('#character').val();
        const adverb = $('#adverb').val();
        const adjective = $('#adjective').val();

        const generatedStoryText = '<div class="story-container">'
            + `<h3 class='story-title'>Wendy's Crazy MadLibs story</h3>`
            + 'One day, my friend '
            + `<b class='bold-text'>${personName}</b>`
            + ' was visiting New York and ran into '
            + `<b class='bold-text'>${character}.</b> `
            + `<b class='bold-text'>${personName}</b>` 
            + ` ran `
            + `<b class='bold-text'>${adverb}</b>`
            + ` to meet `
            + `<b class='bold-text'>${character}.</b>`
            + ` But ` 
            + `<b class='bold-text'>${character}</b>`
            + ` turned out to be very `
            + `<b class='bold-text'>${adjective}</b>`
            + ` and `
            + `<b class='bold-text'>${personName}</b>`
            + ` did not enjoy the meeting`;

        $('.mad-lib-story')
            .empty()
            .append(generatedStoryText);

      })

      $('#tomThumbSubmitBtn').on('click', function(e) {
        e.preventDefault();

        const width = $('#width').val();
        const height = $('#height').val();
        const colors = $('#colors').val();

        const calculatedImageSize = (width * height * Math.log2(colors)) / 8 / 1024

        $('.file-size-calculation')
            .empty()
            .append(`${calculatedImageSize} KB`)
      })

})