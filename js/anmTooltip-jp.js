(function ($) {

    $.fn.anmTooltip = function (userOptions) {

        var options = $.extend({

            theme: "light" // dark - light

        }, userOptions)

        $(this).each(function () {

            var elm = $(this);

            var ttBox = $("<div>").attr("class", "tooltipBox-" + options.theme);

            elm.hover(function () {

                if ($(this).attr("title") && $(this).attr("title") != "") {

                    ttBox.html($(this).attr("title"));
                    $("body").append(ttBox);

                    $(this).data("titleData", $(this).attr("title"));
                    $(this).removeAttr("title");

                    var elmOffset = $(this).offset();
                    var ttLeft = elmOffset.left - 55;
                    var ttBottom = $(window).height() - elmOffset.top + 8;
                    ttBox.css({ bottom: ttBottom, left: ttLeft })
                    ttBox.fadeIn(500);
                }

            }, function () {

                $(this).attr("title", $(this).data("titleData"))
                ttBox.fadeOut(500, function () {
                    ttBox.remove();
                });

            })

        })

    }

})(jQuery)