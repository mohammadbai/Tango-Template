$(document).ready(function () {
    $(".archive-page").each(function () {
        var b = $(this);
        $.ajax({
            type: "GET",
            url: "/feeds/posts/default?alt=json-in-script",
            dataType: "jsonp",
            success: function (c) {
                for (var d, e = "", f = "", g = 0; g < c.feed.category.length; g++) d = c.feed.category[g].term, f += "<div class=\"box-qism\" data-qism=\"" + d + "\"></div>";
                f += "", e += f, b.html(e), $(".box-qism").each(function () {
                    var d = $(this),
                        e = d.attr("data-qism");
                    $.ajax({
                        type: "GET",
                        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script",
                        dataType: "jsonp",
                        success: function (h) {
                            for (var a = h.feed.openSearch$totalResults.$t, k = "<div class=\"archive-qism\"><b>" + e + "</b><span class=\"archive-qism-num\">" + a + "<u>" + textscript + "</u></span></div>", p = "", r = 0; r < h.feed.entry.length; r++) {
                                for (var t = 0; t < h.feed.entry[r].link.length; t++)
                                    if ("alternate" == h.feed.entry[r].link[t].rel) {
                                        var u = h.feed.entry[r].link[t].href;
                                        break
                                    } var l = h.feed.entry[r].title.$t,
                                    f = " ";
                                f = f.replace("/s72-c/", "/s600/");
                                h.feed.entry[r].author[0].name.$t;
                                try {
                                    h.feed.entry[r].author[0].uri.$t
                                } catch (a) {}
                                for (var w = h.feed.entry[r].published.$t, x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], m = textmonth, v = w.split("-")[2].substring(0, 2), z = w.split("-")[1], A = w.split("-")[0], b = 0; b < x.length; b++)
                                    if (parseInt(z) == x[b]) {
                                        z = m[b];
                                        break
                                    } w = v + "  " + z + "  " + A;
                                try {
                                    f = h.feed.entry[r].media$thumbnail.url.replace("s72-c", "w72-h72-p-k-no-nu").replace("default", "hqdefault")
                                } catch (a) {
                                    f = noimg.replace("s1600", "w72-h72-p-k-no-nu").replace("default", "hqdefault")
                                }
                                try {
                                    h.feed.entry[r].category[0].term
                                } catch (a) {}
                                try {
                                    h.feed.entry[r].author[0].gd$image.src
                                } catch (a) {
                                    noauthorThumb
                                }
                                var B = h.feed.entry[r].thr$total.$t;
                                if (1 == B);
                                else if (2 == B);
                                else if (0 == B);
                                else;
                                h.feed.entry[r].content.$t.replace(/<.+?>/g, "").substring(0, 100) + "...", p += "<div class=\"item\"><img class=\"archive-thumb\" src=\"" + f + "\"><span class=\"archive-date\"><i class=\"fa fa-calendar-times-o\"></i>" + w + "</span><a class=\"archive-href\" href=\"" + u + "\">" + l + "</a></div>"
                            }
                            p += "", k += p, d.html(k)
                        }
                    })
                })
            }
        })
    })
});
