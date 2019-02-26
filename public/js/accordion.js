/* eslint-disable no-undef */
// eslint-disable-next-line id-length
$(document).ready(($) => {

    const { hash } = window.location, // Hash from the url
        accordionGroup = $('.panel.list-group'), // List groups
        // eslint-disable-next-line sort-vars
        accordionExists = accordionGroup.length;

    // If url fragment and accordion both exist...
    if (hash && accordionExists) {
        // Find the button sibling of the anchor and click it
        accordionGroup.find(hash).siblings('button.list-group-item').
            click();
    }
});
