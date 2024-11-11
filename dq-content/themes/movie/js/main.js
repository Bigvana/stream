!(function (e) {
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : "object" == typeof module && module.exports
        ? (module.exports = function (t, a) {
              return void 0 === a && (a = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(a), a;
          })
        : e(jQuery);
})(function (e) {
    var t = e(window),
        a = t.width(),
        s = t.height();
    t.on("resize", function () {
        (a = t.width()), (s = t.height());
    }),
        (e.fn.lazyload = function (a) {
            function s(e) {
                var t = e.tagName.toLowerCase(),
                    a = e.getAttribute("data-src");
                "img" === t ? ((e.src = a), e.getAttribute("data-srcset") && (e.srcset = e.getAttribute("data-srcset"))) : "iframe" === t ? (e.src = a) : (e.backgroundImage = "url(" + a + ")");
            }
            function r() {
                (n.pageYOffset = window.pageYOffset), (n.pageXOffset = window.pageXOffset);
                var t = 0;
                o.each(function () {
                    var a = e(this);
                    if (!((n.skip_invisible && !a.is(":visible")) || e.abovethetop(this, n) || e.leftofbegin(this, n)))
                        if (e.belowthefold(this, n) || e.rightoffold(this, n)) {
                            if (++t > n.failure_limit) return !1;
                        } else a.trigger("appear"), (t = 0);
                });
            }
            var o = this,
                n = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    container: window,
                    skip_invisible: !1,
                    appear: null,
                    load: null,
                    allowIntersectionMode: !0,
                    placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    pageXOffset: !1,
                    pageYOffset: !1,
                };
            a && e.extend(n, a);
            var i = n.allowIntersectionMode && "IntersectionObserver" in window && 0 === n.event.indexOf("scroll");
            if (i) {
                (a = {}), n.container !== window && (a.root = void 0 === n.container[0] ? n.container : n.container[0]);
                var d = new IntersectionObserver(function (e) {
                    [].forEach.call(e, function (e) {
                        !1 !== e.isIntersecting && (s(e.target), d.unobserve(e.target));
                    });
                }, a);
            } else var l = void 0 === n.container || n.container === window ? t : e(n.container);
            0 !== n.event.indexOf("scroll") ||
                i ||
                l.on(n.event, function () {
                    return r();
                });
            var c = $("img.cpt").attr("data-src");
            return (
                $("img.cpt").attr("src", c),
                $("#cpt").removeClass("cpt"),
                this.each(function () {
                    var t = this;
                    if (((t.loaded = !1), null === t.getAttribute("src") && "IMG" === t.tagName && (t.src = n.placeholder), i)) d.observe(t);
                    else {
                        var a = e(t);
                        a.one("appear", function () {
                            if (!this.loaded) {
                                if (n.appear) {
                                    var a = o.length;
                                    n.appear.call(t, a, n);
                                }
                                s(t),
                                    (t.loaded = !0),
                                    (a = e.grep(o, function (e) {
                                        return !e.loaded;
                                    })),
                                    (o = e(a)),
                                    n.load && ((a = o.length), n.load.call(t, a, n));
                            }
                        }),
                            0 !== n.event.indexOf("scroll") &&
                                t.addEventListener(n.event, function () {
                                    t.loaded || a.trigger("appear");
                                });
                    }
                }),
                i ||
                    (window.addEventListener("resize", function () {
                        r();
                    }),
                    /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) &&
                        t.on("pageshow", function (t) {
                            t.originalEvent &&
                                t.originalEvent.persisted &&
                                o.each(function () {
                                    e(this).trigger("appear");
                                });
                        }),
                    e(function () {
                        r();
                    })),
                this
            );
        }),
        (e.belowthefold = function (t, a) {
            return (void 0 === a.container || a.container === window ? s + a.pageYOffset : e(a.container).offset().top + e(a.container).height()) <= e(t).offset().top - a.threshold;
        }),
        (e.rightoffold = function (t, s) {
            return (void 0 === s.container || s.container === window ? a + s.pageXOffset : e(s.container).offset().left + e(s.container).width()) <= e(t).offset().left - s.threshold;
        }),
        (e.abovethetop = function (t, a) {
            return (void 0 === a.container || a.container === window ? a.pageYOffset : e(a.container).offset().top) >= e(t).offset().top + a.threshold + t.clientHeight;
        }),
        (e.leftofbegin = function (t, a) {
            return (void 0 === a.container || a.container === window ? a.pageXOffset : e(a.container).offset().left) >= e(t).offset().left + a.threshold + t.clientWidth;
        });
}),
    jQuery(document).ready(function (e) {
        var t;
        e(".lazy").lazyload(),
            e(".open_submenu").on("click", function (t) {
                t.preventDefault();
                var a = e(this);
                a.find(".sub-tab-lang").is(":visible")
                    ? a.find(".sub-tab-lang").addClass("hide")
                    : (e(".open_submenu").removeClass("actives"), e(".sub-tab-lang").addClass("hide"), a.addClass("actives"), a.find(".sub-tab-lang").removeClass("hide"));
            }),
            e(".TPlayer > div:first-child").addClass("Current"),
            e(".TPlayerNv li:first-child").addClass("actives"),
            e(".clili").on("click", function (t) {
                t.preventDefault(), e(this).find(".parpax").length, e(".message_d").hide(), e(".message_k").hide();
            }),
            e(".clili").first().find(".parpax").length ? (e(".message_d").hide(), e(".message_k").hide()) : (e(".message_d").hide(), e(".message_k").show()),
            e(".close-message").on("click", function (t) {
                t.preventDefault(), e(this).parent().remove();
            }),
            e(".lgtbx-lnk").on("click", function (t) {
                t.preventDefault(), e("body").hasClass("lights-off") ? e("body").removeClass("lights-off") : e("body").addClass("lights-off");
            }),
            e(".lgtbx").on("click", function (t) {
                t.preventDefault(), e("body").removeClass("lights-off");
            }),
            e(document).on("click", ".home-movies .btnstp a", function (t) {
                t.preventDefault();
                var a = e(this).data("tab"),
                    s = e(this);
                e("#" + a).length
                    ? (e(".home-movies .btnstp a").removeClass("Current").addClass("ho-naranja"), s.addClass("Current").removeClass("ho-naranja"), e(".apt").addClass("hide"), e("#" + a).removeClass("hide"))
                    : e.ajax({
                          function(t) {
                              e(".home-movies").append(t),
                                  e(".home-movies .btnstp a").removeClass("Current").addClass("ho-naranja"),
                                  s.addClass("Current").removeClass("ho-naranja"),
                                  e(".apt").addClass("hide"),
                                  e("#" + a).removeClass("hide"),
                                  e(".lazy").lazyload();
                          },
                      });
            }),
            e(document).on("click", ".home-series .btnstp a", function (t) {
                t.preventDefault();
                var a = e(this).data("tab"),
                    s = e(this);
                e("#" + a).length
                    ? (e(".home-series .btnstp a").removeClass("Current").addClass("ho-naranja"), s.addClass("Current").removeClass("ho-naranja"), e(".series_listado").addClass("hide"), e("#" + a).removeClass("hide"))
                    : e.ajax({
                          function(t) {
                              e(".home-series").append(t),
                                  e(".home-series .btnstp a").removeClass("Current").addClass("ho-naranja"),
                                  s.addClass("Current").removeClass("ho-naranja"),
                                  e(".series_listado").addClass("hide"),
                                  e("#" + a).removeClass("hide"),
                                  e("#" + a).owlCarousel({
                                      loop: !1,
                                      margin: 0,
                                      nav: !1,
                                      responsiveClass: !0,
                                      responsive: { 0: { items: 1 }, 425: { items: 2 }, 576: { items: 3 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } },
                                  }),
                                  e(".lazy").lazyload();
                          },
                      });
            }),
            e(".aa-tgl").on("click", function () {
                var t = e(this).attr("data-tgl");
                e("#" + t).toggleClass("on"), e(this).toggleClass("on");
            }),
            e(".aa-mdl").on("click", function () {
                var t = e(this).attr("data-mdl");
                e("#" + t).toggleClass("on"), e("body").toggleClass("mdl-on"), e(this).toggleClass("on");
            }),
            e(".aa-nv a").click(function (t) {
                t.preventDefault();
                var a = e(this),
                    s = "#" + a.parents(".aa-nv").data("tbs"),
                    r = a.closest("li").siblings().children("a"),
                    o = a.attr("href");
                r.removeClass("on"), a.addClass("on"), e(s).children().removeClass("on"), e(o).addClass("on");
            }),
            e(".MovieListSld").owlCarousel({ loop: !0, nav: !1, lazyLoad: !0, items: 1, autoplay: !0, autoplayTimeout: 4e3 }),
            e(".tvshows-owl").owlCarousel({ loop: !1, margin: 0, nav: !1, responsiveClass: !0, responsive: { 0: { items: 1 }, 425: { items: 2 }, 576: { items: 3 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } } }),
            e(".episodes-owl").owlCarousel({ loop: !1, margin: 0, nav: !1, responsiveClass: !0, responsive: { 0: { items: 1 }, 425: { items: 2 }, 576: { items: 3 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } } }),
            e(window).scroll(function () {
                e(this).scrollTop() > 150 ? e(".Header").addClass("fx") : e(".Header").removeClass("fx");
            }),
            ((t = jQuery).fn.percircle = function (e) {
                return (
                    e || (e = {}),
                    t.extend(e, { animate: !0 }),
                    this.each(function () {
                        var a = t(this);
                        a.hasClass("percircle") || a.addClass("percircle"), void 0 !== a.attr("data-animate") && (e.animate = "true" == a.attr("data-animate")), e.animate && a.addClass("animate");
                        var s = a.attr("data-percent") || e.percent || 0;
                        if (a.attr("data-perclock") || e.perclock) {
                            a.hasClass("perclock") || a.addClass("perclock");
                            var r = function (e) {
                                return 10 > e ? "0" + e : e;
                            };
                            setInterval(function () {
                                var e = new Date(),
                                    s = r(e.getHours()) + ":" + r(e.getMinutes()) + ":" + r(e.getSeconds());
                                a.html("<span>" + s + "</span>"), t('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').appendTo(a);
                                var o = e.getSeconds();
                                0 === o && a.removeClass("gt50"),
                                    o > 30 &&
                                        (a.addClass("gt50"),
                                        t(".bar", a).css({ "-webkit-transform": "rotate(180deg)", "-moz-transform": "rotate(180deg)", "-ms-transform": "rotate(180deg)", "-o-transform": "rotate(180deg)", transform: "rotate(180deg)" }));
                                var n = 6 * o;
                                t(".bar", a).css({
                                    "-webkit-transform": "rotate(" + n + "deg)",
                                    "-moz-transform": "rotate(" + n + "deg)",
                                    "-ms-transform": "rotate(" + n + "deg)",
                                    "-o-transform": "rotate(" + n + "deg)",
                                    transform: "rotate(" + n + "deg)",
                                });
                            }, 1e3);
                        } else {
                            s > 50 && a.addClass("gt50");
                            var o = a.attr("data-text") || e.text || s + "";
                            t("<span>" + o + "</span>").appendTo(a),
                                t('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').appendTo(a),
                                s > 50 && t(".bar", a).css({ "-webkit-transform": "rotate(180deg)", "-moz-transform": "rotate(180deg)", "-ms-transform": "rotate(180deg)", "-o-transform": "rotate(180deg)", transform: "rotate(180deg)" });
                            var n = 3.6 * s;
                            setTimeout(function () {
                                t(".bar", a).css({
                                    "-webkit-transform": "rotate(" + n + "deg)",
                                    "-moz-transform": "rotate(" + n + "deg)",
                                    "-ms-transform": "rotate(" + n + "deg)",
                                    "-o-transform": "rotate(" + n + "deg)",
                                    transform: "rotate(" + n + "deg)",
                                });
                            }, 0);
                        }
                    })
                );
            }),
            e("#TPVotes").percircle(),
            (function (e) {
                e.fn.percircle = function (t) {
                    return (
                        t || (t = {}),
                        e.extend(t, { animate: !0 }),
                        this.each(function () {
                            var a = e(this);
                            a.hasClass("percircle") || a.addClass("percircle"), void 0 !== a.attr("data-animate") && (t.animate = "true" == a.attr("data-animate")), t.animate && a.addClass("animate");
                            var s = a.attr("data-percent") || t.percent || 0;
                            if (a.attr("data-perclock") || t.perclock) {
                                a.hasClass("perclock") || a.addClass("perclock");
                                var r = function (e) {
                                    return 10 > e ? "0" + e : e;
                                };
                                setInterval(function () {
                                    var t = new Date(),
                                        s = r(t.getHours()) + ":" + r(t.getMinutes()) + ":" + r(t.getSeconds());
                                    a.html("<span>" + s + "</span>"), e('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').appendTo(a);
                                    var o = t.getSeconds();
                                    0 === o && a.removeClass("gt50"),
                                        o > 30 &&
                                            (a.addClass("gt50"),
                                            e(".bar", a).css({ "-webkit-transform": "rotate(180deg)", "-moz-transform": "rotate(180deg)", "-ms-transform": "rotate(180deg)", "-o-transform": "rotate(180deg)", transform: "rotate(180deg)" }));
                                    var n = 6 * o;
                                    e(".bar", a).css({
                                        "-webkit-transform": "rotate(" + n + "deg)",
                                        "-moz-transform": "rotate(" + n + "deg)",
                                        "-ms-transform": "rotate(" + n + "deg)",
                                        "-o-transform": "rotate(" + n + "deg)",
                                        transform: "rotate(" + n + "deg)",
                                    });
                                }, 1e3);
                            } else {
                                s > 50 && a.addClass("gt50");
                                var o = a.attr("data-text") || t.text || s + "";
                                e("<span>" + o + "</span>").appendTo(a),
                                    e('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').appendTo(a),
                                    s > 50 && e(".bar", a).css({ "-webkit-transform": "rotate(180deg)", "-moz-transform": "rotate(180deg)", "-ms-transform": "rotate(180deg)", "-o-transform": "rotate(180deg)", transform: "rotate(180deg)" });
                                var n = 3.6 * s;
                                setTimeout(function () {
                                    e(".bar", a).css({
                                        "-webkit-transform": "rotate(" + n + "deg)",
                                        "-moz-transform": "rotate(" + n + "deg)",
                                        "-ms-transform": "rotate(" + n + "deg)",
                                        "-o-transform": "rotate(" + n + "deg)",
                                        transform: "rotate(" + n + "deg)",
                                    });
                                }, 0);
                            }
                        })
                    );
                };
            })(jQuery);
            $(".embed_div > div:first-child").find("iframe").attr("src", $(".embed_div > div:first-child").find("iframe").attr("data-src")),
            $(".TPlayer > div:first-child").addClass("Current"),
            $(".TPlayerNv li:first-child").addClass("actives"),
            $("body").on("click", ".clili", function (e) {
                e.preventDefault(), $(".clili").removeClass("actives"), $(this).addClass("actives"), $(this).parent().addClass("hide"), $("ul._1EGcQ_0 > li").removeClass("actives"), $(this).parent().parent().parent().addClass("actives");
                var a = $(this).attr("data-TPlayerNv");
                $(".TPlayerTb").removeClass("Current"), $(this).addClass("Current"), $("#" + a).addClass("Current"), $(".TPlayerTb iframe").removeAttr("src"), $(".Current");
                var t = $(".Current iframe");
                t.attr({ src: t.attr("data-src") });
            });
    });