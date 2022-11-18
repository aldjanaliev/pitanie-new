function burgerMenu(e) {
    var t = $(e),
        s = t.find(".menu__button", ".menu__lines"),
        a = t.find(".menu__link"),
        n = t.find(".menu__overlay");

    function i() {
        t.toggleClass("menu__active"), t.hasClass("menu__active") ? $("body").css("overlow", "hidden") : $("body").css("overlow", "visible")
    }
    s.on("click", (function(e) {
        e.preventDefault(), i()
    })), a.on("click", (function() {
        return i()
    })), n.on("click", (function() {
        return i()
    }))
}
$(document).ready((function() {
    $(".faq__item-top").on("click", (function() {
        $(this).toggleClass("active"), $(this).next().slideToggle()
    }))
})), $(document).ready((function() {
    $(".resume__item-help").on("click", (function() {
        $(this).siblings(".resume__popup").css("display", "flex").animate({
            width: ["100%", "swing"]
        }, 600)
    })), $(".resume__popup-close").on("click", (function() {
        $(this).parent(".resume__popup").fadeOut("slow")
    }));
    var e = document.querySelectorAll(".resume__item"),
        t = !1,
        s = new function() {
            this.data = {
                userName: "Посетитель",
                gender: null,
                activity: null,
                protein: null,
                vegetables: null,
                food: null,
                labor: null,
                habbits: null,
                age: null,
                weight: null,
                height: null,
                new_weight: null
            }, this.handleChange = function(s, a) {
                var n = this;
                if (s in this.data) {
                    this.data[s] = a;
                    for (var i = 0; i < e.length; i++) p(i, this.data);
                    t = Object.keys(this.data).every((function(e) {
                        return !!n.data[e]
                    }))
                }
            }, this.checkKey = function(e) {
                return !!this.data[e]
            }
        },
        a = document.querySelectorAll(".getplan__item"),
        n = document.getElementsByName("activity"),
        i = document.getElementsByName("meat"),
        o = document.getElementsByName("seafood"),
        c = document.querySelectorAll(".js-protein"),
        l = document.getElementsByName("vegetables"),
        r = document.getElementsByName("food"),
        u = document.getElementsByName("labor"),
        d = document.getElementsByName("habbits"),
        m = document.querySelectorAll(".js-limit-2"),
        v = document.querySelectorAll(".js-limit-3"),
        h = !1;

    function f(e, t) {
        t.value.split("").length > e && (t.value = t.value.substring(0, e))
    }

    function g(e) {
        var t = e.closest("label");
        t.classList.contains("active") ? t.classList.remove("active") : t.classList.add("active")
    }

    function _(e, t) {
        for (var s = 0; s < e.length; s++) e[s].closest("label").classList.remove("active");
        t.closest("label").classList.add("active")
    }

    function y(e) {
        for (var t = 0; t < e.length; t++)
            if (e[t].checked) return !0
    }

    function p(e, t) {
        var s = t.gender,
            a = t.age,
            n = t.height,
            i = t.weight,
            o = t.activity,
            c = t.new_weight,
            l = $(".resume__item_".concat(e, " .resume__item-text")),
            r = $(".resume__item_".concat(e));
        if (1 == e) {
            var u = Math.pow(10, 2),
                d = Math.ceil(i / (n / 100 * (n / 100)) * 100) / 100,
                m = $(".resume__item-drop");
            $(".resume__item-num").animateNumber({
                    number: d * u,
                    numberStep: function(e, t) {
                        var s = Math.floor(e) / u,
                            a = $(t.elem);
                        s = (s = s.toFixed(2)).toString().replace(".", ","), a.text(s)
                    }
                }, {
                    easing: "swing",
                    duration: 1e3
                }),
                function() {
                    for (var e = 0; e <= 10; e++) r.removeClass("class-".concat(e))
                }(), d <= 16 ? (m.addClass("resume__item-drop--veryskin"), l.html("Выраженный дефицит массы тела")) : d > 16 && d <= 18.5 ? (m.addClass("resume__item-drop--skin"), l.html("Недостаточная (дефицит) масса тела")) : d > 18.5 && d <= 24.99 ? (m.addClass("resume__item-drop--normal"), l.html("Норма")) : d > 24.99 && d <= 35 ? (m.addClass("resume__item-drop--fat"), l.html("Ожирение")) : d > 35 && (m.addClass("resume__item-drop--veryfat"), l.html("Ожирение резкое"))
        } else if (2 == e) {
            var v = "",
                h = $(".resume__item-look--young path"),
                f = $(".resume__item-look--adult path"),
                g = $(".resume__item-look--old path");
            1 == s ? (v = Math.round(.629 * a + 18.56), $(".resume__item-look--man").css("display", "block")) : (v = Math.round(.58 * a + 17.24), $(".resume__item-look--woman").css("display", "block")), v <= 20 ? (h.css("fillOpacity", "1"), f.css("fillOpacity", "0.4"), g.css("fillOpacity", "0.4")) : v > 20 && v <= 40 ? (f.css("fillOpacity", "1"), h.css("fillOpacity", "0.4"), g.css("fillOpacity", "0.4")) : v > 41 && (g.css("fillOpacity", "1"), f.css("fillOpacity", "0.4"), h.css("fillOpacity", "0.4"));
            var _ = v % 10,
                y = "лет";
            v < 21 ? y = "лет" : 1 == _ ? y = "год" : _ > 1 && _ < 5 ? y = "года" : _ > 5 && (y = "лет"), l.html("".concat(v, " ").concat(y))
        } else if (3 == e) {
            var p, L, b = "",
                w = "";
            b = 1 == s ? 88.362 + 13.397 * i + 4.799 * n - 5.677 * a : 447.593 + 9.247 * i + 3.098 * n - 4.33 * a, 1 == o ? w = 1.2 : 2 == o ? w = 1.375 : 3 == o ? w = 1.55 : 4 == o ? w = 1.725 : 5 == o && (w = 1.9), L = (p = Math.round(b * w - b * w * .2)) + 100, l.html(p + "-" + L)
        } else if (4 == e) {
            var S = $(".resume__item-scale"),
                E = $(".resume__item-scale-holder").outerHeight() / 100,
                k = "";
            i >= 90 ? 1 == o ? k = 3 : 2 == o || 3 == o ? k = 3.5 : 4 != o && 5 != o || (k = 3.9) : i >= 80 ? 1 == o ? k = 2.5 : 2 == o || 3 == o ? k = 2.9 : 4 != o && 5 != o || (k = 3.3) : i >= 70 ? 1 == o ? k = 2.3 : 2 == o || 3 == o ? k = 2.5 : 4 != o && 5 != o || (k = 3) : i >= 60 ? 1 == o ? k = 1.8 : 2 == o || 3 == o ? k = 2.3 : 4 != o && 5 != o || (k = 2.6) : i >= 50 && (1 == o ? k = 1.5 : 2 == o || 3 == o ? k = 2 : 4 != o && 5 != o || (k = 2.3)), S.css({
                height: E * (k / 5 * 100)
            }), l.html("".concat(k, " л"))
        } else if (5 == e);
        else if (6 == e) {
            var q = "";
            if (i > c) {
                var C = "";
                q = i - c < (C = i >= 100 ? 8 : i >= 70 ? 6 : 5) ? c : i - C
            } else {
                var A = i + i / 100 * 7;
                q = c >= A ? A : c
            }
            l.html(Math.round(q) + " кг")
        } else if (7 == e) {
            var x = "";
            if (i > c) {
                var T = "";
                x = i - c < (T = i >= 100 ? 8 : i >= 70 ? 6 : 5) ? c : i - T
            } else {
                var j = i + i / 100 * 7;
                x = c >= j ? j : c
            }
            l.html(Math.round(x) + " кг")
        }
    }
    a.forEach((function(e) {
        e.addEventListener("click", (function() {
            s.handleChange("gender", this.value)
        }))
    })), n.forEach((function(e) {
        e.addEventListener("change", (function() {
            _(n, e), s.handleChange("activity", this.value)
        }))
    })), i.forEach((function(e) {
        e.addEventListener("change", (function() {
            var t = e.closest("label"),
                s = t.classList.contains("active"),
                a = "meat" === e.dataset.restrict;
            if (a) {
                for (var n = 0; n < i.length; n++) i[n].closest("label").classList.remove("active");
                s ? t.classList.remove("active") : t.classList.add("active")
            } else if (s || a) t.classList.remove("active");
            else {
                t.classList.add("active");
                for (var o = 0; o < i.length; o++) "meat" === i[o].dataset.restrict && i[o].closest("label").classList.contains("active") && i[o].closest("label").classList.remove("active")
            }
        }))
    })), o.forEach((function(e) {
        e.addEventListener("change", (function() {
            var t = e.closest("label"),
                s = t.classList.contains("active"),
                a = "seafood" === e.dataset.restrict;
            if (a) {
                for (var n = 0; n < o.length; n++) o[n].closest("label").classList.remove("active");
                s ? t.classList.remove("active") : t.classList.add("active")
            } else if (s || a) t.classList.remove("active");
            else {
                t.classList.add("active");
                for (var i = 0; i < o.length; i++) "seafood" === o[i].dataset.restrict && o[i].closest("label").classList.contains("active") && o[i].closest("label").classList.remove("active")
            }
        }))
    })), c.forEach((function(e) {
        e.addEventListener("change", (function() {
            y(c) ? s.handleChange("protein", this.value) : s.handleChange("protein", null)
        }))
    })), l.forEach((function(e) {
        e.addEventListener("change", (function() {
            g(e), y(l) ? s.handleChange("vegetables", this.value) : s.handleChange("vegetables", null)
        }))
    })), d.forEach((function(e) {
        e.addEventListener("change", (function() {
            g(e), y(d) ? s.handleChange("habbits", this.value) : s.handleChange("habbits", null)
        }))
    })), r.forEach((function(e) {
        e.addEventListener("change", (function() {
            g(e), y(r) ? s.handleChange("food", this.value) : s.handleChange("food", null)
        }))
    })), u.forEach((function(e) {
        e.addEventListener("change", (function() {
            _(u, e), s.handleChange("labor", this.value)
        }))
    })), m.forEach((function(e) {
        e.addEventListener("keyup", (function() {
            f(2, e)
        }))
    })), v.forEach((function(e) {
        e.addEventListener("keyup", (function() {
            f(3, e)
        }))
    })), document.getElementsByName("person-data").forEach((function(e) {
        e.addEventListener("change", (function() {
            "age" === e.id ? s.handleChange("age", parseInt(e.value)) : "height" === e.id ? s.handleChange("height", parseInt(e.value)) : "weight" === e.id ? s.handleChange("weight", parseInt(e.value)) : "wish-weight" === e.id && s.handleChange("new_weight", parseInt(e.value))
        }))
    }));
    var L = 0,
        b = 0,
        w = document.querySelectorAll(".sidebar__figure"),
        S = document.querySelectorAll(".progress-bar__img"),
        E = (document.querySelectorAll(".progress-bar__item"), document.querySelectorAll(".scene__stage-arts")),
        k = document.querySelectorAll(".js-stage"),
        q = document.querySelectorAll(".js-section"),
        C = document.querySelectorAll(".js-next-stage"),
        A = document.querySelectorAll(".js-prev-stage"),
        x = document.querySelectorAll(".js-next-section"),
        T = document.querySelectorAll(".js-prev-section"),
        j = document.querySelectorAll(".js-home");
    document.querySelector(".footer"), document.querySelector(".header");

    function N() {
        void 0 !== q[L] && (q[L].classList.add("active"), $(".resume-content").hasClass("active") && $(".reviews__slider").slick({
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0
        }))
    }

    function O() {
        void 0 !== q[L] && q[L].classList.remove("active")
    }

    function M() {
        void 0 !== S[b] && S[b].classList.add("show"), void 0 !== S[b + 1] && S[b + 1].classList.add("active"), void 0 !== S[b + 2] && S[b + 2].classList.add("show"), void 0 !== w[b] && w[b].classList.add("active"), void 0 !== E[b] && E[b].classList.add("active"), void 0 !== k[b] && k[b].classList.add("active")
    }

    function B() {
        void 0 !== S[b] && S[b].classList.remove("show"), void 0 !== S[b + 1] && S[b + 1].classList.remove("active"), void 0 !== S[b + 2] && S[b + 2].classList.remove("show"), void 0 !== w[b] && w[b].classList.remove("active"), void 0 !== E[b] && E[b].classList.remove("active"), void 0 !== k[b] && k[b].classList.remove("active")
    }

    function I() {
        S[b].classList.remove("active"), O(), 0 === L && (document.querySelector(".features").classList.remove("show"), document.querySelector(".example").classList.remove("show"), document.querySelector(".faq").classList.remove("show"), document.querySelector(".getplan-bottom").classList.remove("show")), L++, M(), N()
    }
    C.forEach((function(e) {
        e.addEventListener("click", (function() {
            $("html, body").stop().animate({
                scrollTop: 0
            }, 500), s.checkKey(e.dataset.check) && (B(), b++, M(), $(".js-progress-bar-slider").slick("slickNext"))
        }))
    })), A.forEach((function(e) {
        e.addEventListener("click", (function() {
            $("html, body").stop().animate({
                scrollTop: 0
            }, 500), B(), b--, M(), $(".js-progress-bar-slider").slick("slickPrev")
        }))
    })), x.forEach((function(e) {
        e.addEventListener("click", (function() {
            $("html, body").stop().animate({
                scrollTop: 0
            }, 500), I()
        }))
    })), T.forEach((function(e) {
        e.addEventListener("click", (function() {
            $("html, body").stop().animate({
                scrollTop: 0
            }, 500), O(), 1 === L && (document.querySelector(".features").classList.add("show"), document.querySelector(".example").classList.add("show"), document.querySelector(".faq").classList.add("show"), document.querySelector(".getplan-bottom").classList.add("show")), L--, N(), S[b].classList.add("active"), S[b + 1].classList.remove("active")
        }))
    })), j.forEach((function(e) {
        e.addEventListener("click", (function() {
            O(), B(), L = 0, b = 0, N(), M()
        }))
    }));
    var D = document.querySelector(".progress-bar");

    function F() {
        document.querySelector(".creation__success");
        var e = document.querySelector(".fill-box__line"),
            t = document.querySelector(".fill-box"),
            s = document.querySelector(".fill-box__progress"),
            a = document.querySelectorAll(".creation__text"),
            n = document.querySelectorAll(".creation__img"),
            i = +(1e4 / a.length).toFixed(),
            o = 0,
            c = 0;
        s.textContent = "0";
        var l = setTimeout((function e() {
            o++, s.textContent = "".concat(o, "%"), l = setTimeout(e, 96), o >= 100 && clearTimeout(l)
        }), 96);
        a[c].classList.add("active");
        document.querySelector(".creation__success");
        var r = setTimeout((function s() {
            a[c] && a[c].classList.contains("active") && (a[c].classList.remove("active"), n[c].classList.remove("active")), c++, a[c] && (a[c].classList.add("active"), n[c].classList.add("active")), r = setTimeout(s, i), c >= a.length && (clearTimeout(r), I(), $(".resume__inner").slick("refresh"), h = !1, e.style.strokeDasharray = "765.48", e.classList.remove("load-animation"), t.style.display = "none")
        }), i)
    }
    document.querySelector(".js-count-start").addEventListener("click", (function() {
        t && (I(), D.style.display = "none", h || (document.querySelector(".fill-box__loader").classList.add("load-animation"), setTimeout(F, 200)))
    }))
})), $(document).ready((function() {
    burgerMenu(".menu")
})), $(".js-progress-bar-slider").slick({
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: !1,
    nextArrow: '<button class="progress-bar__next"></button>',
    prevArrow: '<button class="progress-bar__prev"></button>',
    appendArrows: $(".progress-bar__arrows")
}), $(".resume__inner").slick({
    dots: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: !1
});