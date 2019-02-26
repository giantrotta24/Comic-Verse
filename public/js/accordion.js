$(document).ready(($) => {

    const hash = window.location.hash, // Hash from the url
        accordionGroup = $('.panel.list-group'), // List groups
        accordionExists = accordionGroup.length;

    // If url fragment and accordion both exist...
    if (hash && accordionExists) {
        // Find the button sibling of the anchor and click it
        accordionGroup.find(hash).siblings('button.list-group-item').click();
    }
});