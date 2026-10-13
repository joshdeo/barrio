(function () {
  "use strict";
  var B = window.BARRIO;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var uid = 0;

  /* ---------- logo mark (recreated from the Barrio logo) ---------- */
  function mark(opts) {
    opts = opts || {};
    var id = "g" + (++uid);
    var rays = "";
    var angles = [-100, -80, -60, -40, -20, 20, 40, 60, 80, 100];
    angles.forEach(function (a, i) {
      var r1 = 80, r2 = i % 2 ? 100 : 106;
      var rad = (a - 90) * Math.PI / 180;
      var x1 = 100 + r1 * Math.cos(rad), y1 = 125 + r1 * Math.sin(rad);
      var x2 = 100 + r2 * Math.cos(rad), y2 = 125 + r2 * Math.sin(rad);
      rays += '<line class="ray" style="--i:' + i + '" x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="url(#' + id + 'r)" stroke-width="3.2"/>';
    });
    return '<svg class="logo-mark ' + (opts.anim === false ? "" : "anim") + '" viewBox="0 0 200 215" role="img" aria-label="Barrio logo mark">' +
      '<defs>' +
      '<linearGradient id="' + id + 'l" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E9A263"/><stop offset="1" stop-color="#A9582A"/></linearGradient>' +
      '<linearGradient id="' + id + 'd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8A4A26"/><stop offset="1" stop-color="#4B2714"/></linearGradient>' +
      '<linearGradient id="' + id + 'r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9A263"/><stop offset="1" stop-color="#B8693A"/></linearGradient>' +
      '<linearGradient id="' + id + 's" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".38"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
      '<clipPath id="' + id + 'c"><ellipse cx="100" cy="125" rx="40" ry="62"/></clipPath>' +
      '<mask id="' + id + 'm"><rect width="200" height="215" fill="#fff"/><rect x="93.2" y="101" width="2.6" height="22" rx="1.3" fill="#000"/><rect x="98.7" y="101" width="2.6" height="22" rx="1.3" fill="#000"/><rect x="104.2" y="101" width="2.6" height="22" rx="1.3" fill="#000"/></mask>' +
      '</defs>' +
      rays +
      '<g class="bean">' +
      '<ellipse cx="100" cy="125" rx="40" ry="62" fill="url(#' + id + 'd)"/>' +
      '<path d="M100 63 C128 95 72 155 100 187 C77.9 187 60 159.2 60 125 C60 90.8 77.9 63 100 63Z" fill="url(#' + id + 'l)"/>' +
      '<path d="M100 63 C128 95 72 155 100 187" fill="none" stroke="var(--crease)" stroke-width="2.4" stroke-linecap="round" opacity=".85"/>' +
      '<g clip-path="url(#' + id + 'c)"><rect class="shine" x="40" y="55" width="46" height="140" fill="url(#' + id + 's)" transform="skewX(-14)"/></g>' +
      '</g>' +
      '<g class="fork" mask="url(#' + id + 'm)" fill="#FBF7F1">' +
      '<rect x="96.8" y="66" width="6.4" height="28" rx="3.2"/>' +
      '<path d="M88.5 92 Q88.5 84 95 84 H105 Q111.5 84 111.5 92 V105 Q111.5 117 100 122 Q88.5 117 88.5 105Z"/>' +
      '</g></svg>';
  }
  function lockup(cls) {
    return '<div class="lockup ' + (cls || "") + '">' + mark() + '<div class="wordmark">BARRIO</div><div class="sub">Kitchen &amp; Cafe</div></div>';
  }
  function bean(style) {
    var id = "b" + (++uid);
    return '<svg class="bean-float" viewBox="0 0 60 84" style="' + style + '"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E9A263"/><stop offset="1" stop-color="#6B3A1E"/></linearGradient></defs><ellipse cx="30" cy="42" rx="26" ry="38" fill="url(#' + id + ')"/><path d="M30 5 C48 28 12 56 30 79" fill="none" stroke="#1B100A" stroke-width="3" stroke-linecap="round" opacity=".6"/></svg>';
  }
  window.BarrioUI = { mark: mark, lockup: lockup, bean: bean };

  /* ---------- shell: header, footer, curtain, cursor ---------- */
  var page = document.body.getAttribute("data-page");
  var links = [
    ["index.html", "Home", "home"], ["menu.html", "Menu", "menu"], ["story.html", "Story", "story"], ["contact.html", "Contact", "contact"]
  ];
  var nav = links.map(function (l) { return '<a href="' + l[0] + '" class="' + (page === l[2] ? "cur" : "") + '">' + l[1] + "</a>"; }).join("") +
    '<a href="trays.html" class="cta">Build a Tray</a>';
  var hdr = document.createElement("header");
  hdr.className = "hdr";
  hdr.innerHTML = '<a href="index.html" class="brand" aria-label="Barrio home"><span class="bm">' + mark({ anim: false }) + '</span><b>BARRIO</b></a><nav class="nav" id="nav">' + nav + '</nav><button class="burger" aria-label="Menu"><i></i><i></i></button>';
  document.body.prepend(hdr);
  var burger = hdr.querySelector(".burger"), navEl = hdr.querySelector(".nav");
  burger.addEventListener("click", function () { var o = navEl.classList.toggle("open"); burger.classList.toggle("x", o); document.body.style.overflow = o ? "hidden" : ""; });

  var prog = document.createElement("div"); prog.className = "progress"; document.body.prepend(prog);
  var grain = document.createElement("div"); grain.className = "grain"; document.body.appendChild(grain);
  var curtain = document.createElement("div"); curtain.className = "curtain";
  curtain.innerHTML = "<i></i><i></i><i></i><i></i><i></i><div class='cmark'><div style='width:84px'>" + mark({ anim: false }).replace('class="logo-mark ', 'style="--crease:#1B100A" class="logo-mark ') + "</div></div>";
  document.body.appendChild(curtain);
  requestAnimationFrame(function () { requestAnimationFrame(function () { curtain.classList.add("open"); }); });
  document.querySelectorAll("a[href]").forEach(function (a) {
    var h = a.getAttribute("href");
    if (!h || h.charAt(0) === "#" || /^(https?:|mailto:|tel:)/.test(h) || a.target === "_blank") return;
    a.addEventListener("click", function (e) {
      if (e.metaKey || e.ctrlKey || reduce) return;
      e.preventDefault();
      curtain.classList.remove("open"); curtain.classList.add("closing");
      setTimeout(function () { location.href = h; }, 800);
    });
  });
  window.addEventListener("pageshow", function (e) { if (e.persisted) { curtain.classList.remove("closing"); curtain.classList.add("open"); } });

  var ft = document.querySelector("[data-footer]");
  if (ft) {
    var c = B.contact;
    ft.outerHTML = '<footer class="ftr"><div class="ghost-word" aria-hidden="true">BARRIO</div><div class="wrap"><div class="fgrid">' +
      '<div class="flogo">' + mark({ anim: false }) + '<div class="wordmark">BARRIO</div><div class="sub" style="justify-content:flex-start;margin-top:12px;font-size:.62rem">Kitchen &amp; Cafe</div></div>' +
      '<div><h4>Explore</h4><a href="index.html">Home</a><a href="menu.html">Party Tray Menu</a><a href="trays.html">Build a Tray</a><a href="story.html">Our Story</a></div>' +
      '<div><h4>Order</h4><a href="tel:' + c.tel + '">' + c.phone + '</a><a href="mailto:' + c.email + '">' + c.email + '</a><p>Order 2 to 3 days ahead</p></div>' +
      '<div><h4>Visit</h4><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=99+Dundas+St+E+Mississauga+ON+L5A+1W7">' + c.address1 + '<br>' + c.address2 + '</a><a target="_blank" rel="noopener" href="https://instagram.com/' + c.instagram + '">@' + c.instagram + '</a></div>' +
      '</div><div class="fbase"><span>&copy; ' + new Date().getFullYear() + ' Barrio Kitchen &amp; Cafe</span><span>' + c.web + '</span></div></div></footer>';
  }

  /* cursor */
  if (matchMedia("(hover:hover)").matches && !reduce) {
    var cu = document.createElement("div"), cd = document.createElement("div");
    cu.className = "cursor"; cd.className = "cursor-dot"; document.body.append(cu, cd);
    var mx = 0, my = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; cu.classList.add("on"); cd.classList.add("on"); cd.style.transform = "translate(" + mx + "px," + my + "px)"; });
    (function loop() { cx += (mx - cx) * .16; cy += (my - cy) * .16; cu.style.transform = "translate(" + cx + "px," + cy + "px)"; requestAnimationFrame(loop); })();
    document.addEventListener("mouseover", function (e) { cu.classList.toggle("big", !!e.target.closest("a,button,.chip,.cat-card,.mrow")); });
  }

  /* ---------- text splitting ---------- */
  document.querySelectorAll("[data-chars]").forEach(function (el) {
    var t = el.textContent, i = 0; el.setAttribute("aria-label", t); el.textContent = "";
    t.split(" ").forEach(function (w, wi, arr) {
      var wrap = document.createElement("span"); wrap.className = "split-wrap"; wrap.setAttribute("aria-hidden", "true");
      w.split("").forEach(function (ch) { var s = document.createElement("span"); s.className = "char"; s.style.setProperty("--i", i++); s.textContent = ch; wrap.appendChild(s); });
      el.appendChild(wrap); if (wi < arr.length - 1) el.appendChild(document.createTextNode(" "));
    });
  });
  document.querySelectorAll("[data-lines]").forEach(function (el) {
    var html = el.innerHTML.split("<br>");
    el.innerHTML = html.map(function (l, i) { return '<span class="mask"><span style="--d:' + (i * .12) + 's">' + l + "</span></span>"; }).join("");
  });

  /* ---------- reveal on scroll ---------- */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); if (e.target.hasAttribute("data-count")) count(e.target); io.unobserve(e.target); } });
  }, { threshold: .14, rootMargin: "0px 0px -6% 0px" });
  function watch(root) { (root || document).querySelectorAll(".rv,[data-chars],[data-lines],[data-count]").forEach(function (el) { io.observe(el); }); }
  watch(); window.BarrioWatch = watch;
  setTimeout(function () { document.querySelectorAll("[data-hero]").forEach(function (e) { e.classList.add("in"); }); }, 60);

  function count(el) {
    var to = parseFloat(el.getAttribute("data-count")), pre = el.getAttribute("data-pre") || "", suf = el.getAttribute("data-suf") || "", t0 = null;
    function f(t) { if (!t0) t0 = t; var p = Math.min((t - t0) / 1600, 1), e = 1 - Math.pow(1 - p, 4); el.textContent = pre + Math.round(to * e) + suf; if (p < 1) requestAnimationFrame(f); }
    reduce ? (el.textContent = pre + to + suf) : requestAnimationFrame(f);
  }

  /* ---------- scroll engine: parallax, progress, header, hscroll ---------- */
  var par = [].slice.call(document.querySelectorAll("[data-speed]"));
  var hs = document.querySelector(".hscroll");
  function pinned() { return window.innerWidth > 860 && window.innerHeight >= 620; }
  var lastY = 0, ticking = false;
  function frame() {
    ticking = false;
    var y = window.scrollY, vh = window.innerHeight, dh = document.documentElement.scrollHeight - vh;
    prog.style.transform = "scaleX(" + (dh > 0 ? y / dh : 0) + ")";
    hdr.classList.toggle("scrolled", y > 60);
    hdr.classList.toggle("hide", y > lastY + 4 && y > 500 && !navEl.classList.contains("open") ? true : (y < lastY - 4 ? false : hdr.classList.contains("hide")));
    document.body.classList.toggle("hdr-hide", hdr.classList.contains("hide"));
    lastY = y;
    if (!reduce) par.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      var center = r.top + r.height / 2 - vh / 2, s = parseFloat(el.getAttribute("data-speed")), rot = parseFloat(el.getAttribute("data-rot") || 0);
      el.style.transform = "translate3d(0," + (-center * s).toFixed(1) + "px,0) rotate(" + (rot * center / vh).toFixed(2) + "deg)";
    });
    if (hs && !pinned()) { var tr = hs.querySelector(".hs-track"); if (tr) tr.style.transform = ""; }
    if (hs && pinned()) {
      var r2 = hs.getBoundingClientRect(), total = hs.offsetHeight - vh, p = Math.max(0, Math.min(1, -r2.top / total));
      var track = hs.querySelector(".hs-track"), max = track.scrollWidth - window.innerWidth + 40;
      track.style.transform = "translate3d(" + (-max * p).toFixed(1) + "px,0,0)";
      hs.querySelector(".hs-bar i").style.transform = "scaleX(" + p + ")";
    }
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener("scroll", req, { passive: true }); window.addEventListener("resize", req); frame();

  /* hero mouse parallax */
  var hero = document.querySelector("[data-mouse]");
  if (hero && !reduce && matchMedia("(hover:hover)").matches) {
    var items = [].slice.call(hero.querySelectorAll("[data-depth]"));
    hero.addEventListener("mousemove", function (e) {
      var rx = (e.clientX / innerWidth - .5), ry = (e.clientY / innerHeight - .5);
      items.forEach(function (el) { var d = parseFloat(el.getAttribute("data-depth")); el.style.translate = (-rx * d).toFixed(1) + "px " + (-ry * d).toFixed(1) + "px"; });
    });
  }

  /* magnetic buttons */
  if (!reduce && matchMedia("(hover:hover)").matches) {
    document.querySelectorAll(".btn").forEach(function (b) {
      b.addEventListener("mousemove", function (e) { var r = b.getBoundingClientRect(); b.style.transform = "translate(" + ((e.clientX - r.left - r.width / 2) * .22).toFixed(1) + "px," + ((e.clientY - r.top - r.height / 2) * .3).toFixed(1) + "px)"; });
      b.addEventListener("mouseleave", function () { b.style.transform = ""; });
    });
  }
})();
