/**
 * Created by stevenschmatz on 8/6/14.
 */

$(document).ready(function(){
    $(".fade_right").animate(
        {left:"+=100", opacity:"1"},
        1000);

    $(".fade_up").animate(
        {top:"-=50", opacity:"1"},
        750);

    $(".fade_left").animate(
        {left: "-=100", opacity:"1"},
        750);

    var icons = {
        "#github-icon":     "Github",
        "#linkedIn-icon":   "LinkedIn",
        "#writing-icon":    "Writing",
        "#twitter-icon":    "Twitter",
        "#portfolio-icon":  "Portfolio",
        "#resume-icon":     "Resume"
    };

    for (var selectorName in icons) {
        if (icons.hasOwnProperty(selectorName)) {
            bindCreateHoverDescription(selectorName, icons[selectorName]);
            bindFadeoutOnClick(selectorName);
        }
    }

    linkHoverFadeout();
});

var bindCreateHoverDescription = function(selectorName, descriptionString) {
    var hoverIconDescription = $("#hover-icon-description");
    $(selectorName).hover(function() {

        $(selectorName).animate({opacity: "0.8"}, 100);

        // Animate the fade in of description string
        hoverIconDescription.text(descriptionString);
        hoverIconDescription.animate({opacity: "1"}, 100);

    }, function() {

        $(selectorName).animate({opacity: "1.0"});

        // Animate the fade out of description string
        hoverIconDescription.animate({opacity: "0"}, 100);
    });
};

var bindFadeoutOnClick = function(selectorName) {
    $(selectorName).click(function() {
        $("#container").animate({opacity: 0}, 100);
    });
};

var linkHoverFadeout = function() {
    var link = $("#inline-link");
    link.hover(function() {
        link.animate({opacity: "0.7"}, 100);
    }, function() {
        link.animate({opacity: "1.0"}, 100)
    });
};