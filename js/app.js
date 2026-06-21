/* Dəniz & Hakim — fundraising site
   i18n · copy-to-clipboard · lightbox · Meta Pixel · WebView reveal failsafe */
(function () {
  "use strict";

  /* ---------- WebView failsafe, Layer 1+4: opt into hidden state only with motion ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) document.documentElement.classList.add("js-reveal");

  /* ---------- Meta Pixel (off until a real ID is set) ---------- */
  var META_PIXEL_ID = "__META_PIXEL_ID__";
  function pixelOn() { return META_PIXEL_ID && META_PIXEL_ID !== "__META_PIXEL_ID__"; }
  if (pixelOn()) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }
  function track(ev, params) { if (window.fbq) { try { window.fbq("track", ev, params || {}); } catch (e) {} } }

  /* ---------- i18n ---------- */
  var I = {
    az: {}, // captured from DOM (HTML is authored in Azerbaijani)
    tr: { kicker: "DUCHENNE KAS ERİMESİ · YARDIM ÇAĞRISI", htitle: "İki kardeş, <em>bir mücadele.</em>", hlead: "Deniz ve Hakim beş yıldır ayakta kalmak için mücadele ediyor. Bugün beşinci kök hücre ameliyatları için desteğinize ihtiyaçları var.", cta1: "Kartlara bak", cta2: "Hikâyelerini oku", age11: "11 yaş", age10: "10 yaş", s1: "Kardeş", s2: "Yıllık mücadele", s3: "Tamamlanan ameliyat", s4: "Her çocuk için gerekli", k2: "HİKÂYELERİ", sttitle: "Beş yıllık bir yol — ve hâlâ biten bir umut değil", p1: "11 yaşındaki Deniz ve küçük kardeşi 10 yaşındaki Hakim ağır Duchenne kas erimesi hastalığından muzdarip. Ayakta kalma mücadeleleri beş yıldır sürüyor.", p2: "Bu beş yılda ailenin kendi gücü ve sizin yardımlarınızla Türkiye, Ankara'da çeşitli hastanelerde tedavi, rehabilitasyon ve ameliyatlar aldılar. Bu hastalıktan tam iyileşen dünyada neredeyse yok — ama çocukları mevcut durumlarında tutmak ve rahat yaşamaları için adımlar atılabilir.", p3: "Bu yönde Türk uzmanlar kök hücre tedavisi önerdi. Her çocuk zaten <b>4 kez</b> kök hücre ameliyatı geçirdi ve her birinin <b>1 ameliyata</b> daha ihtiyacı var.", k3: "TEDAVİ YOLU", prtitle: "Beşinci ameliyata bir adım kaldı", age11b: "11 yaş · DMD", age10b: "10 yaş · DMD", pdone: "ameliyat tamamlandı", premain: "kaldı", k4: "ANLAR", galtitle: "Tedavi günlerinden", k6: "BELGELERLE DOĞRULANMIŞ", doctitle: "Tıbbi belgeler", docintro: "Her iki çocuğun teşhisi Azerbaycan ve Türkiye'deki hastaneler ve bir genetik laboratuvar tarafından doğrulanmıştır. Tüm belgeler aşağıda açıkça sunulmuştur.", cHac: "Hacettepe — FTR raporu", cGen: "Genetik rapor — İNTERGEN", cEpi: "Epikriz — Ferecova Pediatri", cEmg: "EMG — Medistyle", cAmb: "Ayakta tedavi çıkışı", cAmbS: "Ayakta tedavi çıkışı — Sabirabad", cAmbB: "Ayakta tedavi çıkışı — Bakü", k5: "NASIL YARDIM EDEBİLİRSİNİZ", helptitle: "Her katkı bir adım yaklaştırır", helpsub: "Aşağıdaki kartlardan birine tıklayarak numarayı kopyalayabilirsiniz. Her miktar — büyük ya da küçük — değerlidir.", mother: "Anne adına", father: "Baba adına", copyhint: "⧉ Kopyalamak için tıklayın", condk: "TANI", condtitle: "Tıbbi durum", conddesc: "Ağır Duchenne kas erimesi (DMD) — kalıtsal, ilerleyici kas hastalığı.", condtech: "(genetik: distrofin geni — ekzon 45–50 hemizigot delesyon)", famlabel: "Aile", fatherlbl: "BABA", addrlbl: "ADRES", phonelbl: "TELEFON", addrval: "Sabirabad rayonu, Osmanlı köyü", contact: "📞 İletişim — Baba, Mustafa Bağırov:", foot: "Bu kampanya Bağırov ailesinin onayıyla oluşturuldu. Belki büyük bir yardım yapamazsınız — ama bu çağrıyı paylaşarak bir çocuğun hayatına umut katabilirsiniz." },
    ru: { kicker: "МЫШЕЧНАЯ ДИСТРОФИЯ ДЮШЕННА · ПРИЗЫВ О ПОМОЩИ", htitle: "Два брата, <em>одна борьба.</em>", hlead: "Дениз и Хаким уже пять лет борются за возможность стоять на ногах. Сегодня им нужна ваша поддержка для пятой операции по пересадке стволовых клеток.", cta1: "Посмотреть карты", cta2: "Их история", age11: "11 лет", age10: "10 лет", s1: "Брата", s2: "Лет борьбы", s3: "Операций завершено", s4: "Нужно каждому", k2: "ИХ ИСТОРИЯ", sttitle: "Пять лет пути — и надежда, которая не угасла", p1: "11-летний Дениз и его младший брат 10-летний Хаким страдают тяжёлой мышечной дистрофией Дюшенна. Их борьба длится уже пять лет.", p2: "За эти пять лет благодаря силам семьи и вашей помощи они прошли лечение, реабилитацию и операции в больницах Анкары, Турция. От этой болезни в мире почти никто не выздоравливает полностью — но можно сделать шаги, чтобы сохранить их состояние и комфортную жизнь.", p3: "Турецкие специалисты рекомендовали лечение стволовыми клетками. Каждый ребёнок уже перенёс <b>4</b> такие операции, и каждому нужна ещё <b>1</b>.", k3: "ПУТЬ ЛЕЧЕНИЯ", prtitle: "До пятой операции остался один шаг", age11b: "11 лет · DMD", age10b: "10 лет · DMD", pdone: "операций завершено", premain: "осталась", k4: "МОМЕНТЫ", galtitle: "Из дней лечения", k6: "ПОДТВЕРЖДЕНО ДОКУМЕНТАМИ", doctitle: "Медицинские документы", docintro: "Диагноз обоих детей подтверждён больницами в Азербайджане и Турции, включая генетическую лабораторию. Все документы открыто представлены ниже.", cHac: "Hacettepe — отчёт ФТР", cGen: "Генетический отчёт — INTERGEN", cEpi: "Эпикриз — педиатрия Фараджевой", cEmg: "ЭМГ — Medistyle", cAmb: "Амбулаторная выписка", cAmbS: "Амбулаторная выписка — Сабирабад", cAmbB: "Амбулаторная выписка — Баку", k5: "КАК ВЫ МОЖЕТЕ ПОМОЧЬ", helptitle: "Каждый вклад приближает к цели", helpsub: "Нажмите на одну из карт ниже, чтобы скопировать номер. Любая сумма — большая или малая — важна.", mother: "На имя матери", father: "На имя отца", copyhint: "⧉ Нажмите, чтобы скопировать", condk: "ДИАГНОЗ", condtitle: "Состояние здоровья", conddesc: "Тяжёлая мышечная дистрофия Дюшенна (DMD) — наследственное прогрессирующее заболевание мышц.", condtech: "(генетика: ген дистрофина — делеция экзонов 45–50, гемизиготная)", famlabel: "Семья", fatherlbl: "ОТЕЦ", addrlbl: "АДРЕС", phonelbl: "ТЕЛЕФОН", addrval: "Сабирабадский район, село Османлы", contact: "📞 Контакт — Отец, Мустафа Багиров:", foot: "Кампания создана с согласия семьи Багировых. Возможно, вы не сможете оказать большую помощь — но, поделившись этим призывом, вы можете подарить надежду." },
    en: { kicker: "DUCHENNE MUSCULAR DYSTROPHY · CALL FOR HELP", htitle: "Two brothers, <em>one fight.</em>", hlead: "Deniz and Hakim have been fighting to stay on their feet for five years. Today they need your support for their fifth stem-cell procedure.", cta1: "View the cards", cta2: "Read their story", age11: "age 11", age10: "age 10", s1: "Brothers", s2: "Years of fighting", s3: "Procedures done", s4: "Needed per child", k2: "THEIR STORY", sttitle: "A five-year journey — and hope that hasn't faded", p1: "11-year-old Deniz and his younger brother, 10-year-old Hakim, live with severe Duchenne muscular dystrophy. Their fight to stay on their feet has lasted five years.", p2: "Over these five years, through the family's own strength and your help, they have received treatment, rehabilitation and surgery at hospitals in Ankara, Türkiye. Almost no one fully recovers from this disease — but steps can be taken to preserve their condition and a comfortable life.", p3: "Turkish specialists recommended stem-cell treatment. Each child has already had <b>4</b> such procedures, and each needs <b>1</b> more.", k3: "THE TREATMENT PATH", prtitle: "One step away from the fifth procedure", age11b: "age 11 · DMD", age10b: "age 10 · DMD", pdone: "procedures done", premain: "remaining", k4: "MOMENTS", galtitle: "From the treatment days", k6: "BACKED BY DOCUMENTS", doctitle: "Medical records", docintro: "Both children's diagnosis is confirmed by hospitals in Azerbaijan and Türkiye, including a genetics laboratory. All documents are shown openly below.", cHac: "Hacettepe — physical therapy report", cGen: "Genetic report — INTERGEN", cEpi: "Epicrisis — Fərəcova Pediatrics", cEmg: "EMG — Medistyle", cAmb: "Outpatient record", cAmbS: "Outpatient record — Sabirabad", cAmbB: "Outpatient record — Baku", k5: "HOW YOU CAN HELP", helptitle: "Every contribution brings them one step closer", helpsub: "Tap any card below to copy the number. Every amount — large or small — matters.", mother: "In the mother's name", father: "In the father's name", copyhint: "⧉ Tap to copy", condk: "DIAGNOSIS", condtitle: "Medical condition", conddesc: "Severe Duchenne muscular dystrophy (DMD) — a hereditary, progressive muscle disease.", condtech: "(genetics: dystrophin gene — exon 45–50 hemizygous deletion)", famlabel: "Family", fatherlbl: "FATHER", addrlbl: "ADDRESS", phonelbl: "PHONE", addrval: "Sabirabad district, Osmanlı village", contact: "📞 Contact — Father, Mustafa Bağırov:", foot: "This campaign was created with the Bağırov family's consent. You may not be able to give much — but by sharing this call you can bring hope to a child's life." }
  };
  var COPIED = { az: "✓ Kopyalandı", tr: "✓ Kopyalandı", ru: "✓ Скопировано", en: "✓ Copied" };

  // capture Azerbaijani originals
  document.querySelectorAll("[data-i]").forEach(function (el) { I.az[el.dataset.i] = el.innerHTML; });

  var curLang = "az";
  function setLang(l) {
    if (!I[l]) l = "az";
    curLang = l;
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i]").forEach(function (el) {
      var v = I[l][el.dataset.i];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll(".langs button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.lang === l);
    });
  }
  document.querySelectorAll(".langs button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });
  // honor ?lang= on first load
  try {
    var qp = new URLSearchParams(window.location.search).get("lang");
    if (qp && I[qp]) setLang(qp);
  } catch (e) {}

  /* ---------- smooth scroll CTAs ---------- */
  document.querySelectorAll("[data-scroll]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var t = document.getElementById(btn.dataset.scroll);
      if (t) t.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  });

  /* ---------- copy bank card ---------- */
  function fallbackCopy(text, cb) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", "");
      ta.style.position = "absolute"; ta.style.left = "-9999px";
      document.body.appendChild(ta); ta.select(); ta.setSelectionRange(0, text.length);
      document.execCommand("copy"); document.body.removeChild(ta);
    } catch (e) {}
    cb();
  }
  function copyCard(el) {
    var digits = el.dataset.num, cp = el.querySelector(".cp");
    function done() {
      el.classList.add("copied");
      if (cp) cp.textContent = COPIED[curLang] || COPIED.az;
      setTimeout(function () {
        el.classList.remove("copied");
        if (cp) cp.innerHTML = (I[curLang] && I[curLang].copyhint !== undefined) ? I[curLang].copyhint : I.az.copyhint;
      }, 1800);
      track("AddToCart", { content_type: "donation", content_name: el.querySelector(".bk") ? el.querySelector(".bk").textContent : "" });
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(digits).then(done).catch(function () { fallbackCopy(digits, done); });
    } else {
      fallbackCopy(digits, done);
    }
  }
  document.querySelectorAll(".bank").forEach(function (el) {
    el.addEventListener("click", function () { copyCard(el); });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copyCard(el); }
    });
  });

  /* ---------- contact pixel ---------- */
  document.querySelectorAll("[data-contact]").forEach(function (a) {
    a.addEventListener("click", function () { track("Contact"); });
  });

  /* ---------- lightbox (photos + documents) ---------- */
  var lb = document.getElementById("lb"),
      lbimg = document.getElementById("lbimg"),
      lbList = [], lbIdx = 0;
  function refresh() { lbList = Array.prototype.slice.call(document.querySelectorAll(".lbx")); }
  function show(i) {
    var fig = lbList[i]; if (!fig) return;
    var img = fig.querySelector("img");
    lbIdx = i; lbimg.src = img.getAttribute("src"); lbimg.alt = img.getAttribute("alt") || "";
  }
  function openLb(i) { refresh(); show(i); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); }
  function closeLb() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); lbimg.removeAttribute("src"); }
  function navLb(d) { if (lbList.length) show((lbIdx + d + lbList.length) % lbList.length); }

  document.querySelectorAll(".lbx").forEach(function (fig) {
    fig.addEventListener("click", function () { refresh(); openLb(lbList.indexOf(fig)); });
    fig.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); refresh(); openLb(lbList.indexOf(fig)); }
    });
  });
  if (lb) {
    lb.querySelector(".x").addEventListener("click", closeLb);
    lb.querySelector(".prev").addEventListener("click", function () { navLb(-1); });
    lb.querySelector(".next").addEventListener("click", function () { navLb(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      else if (e.key === "ArrowLeft") navLb(-1);
      else if (e.key === "ArrowRight") navLb(1);
    });
  }

  /* ---------- WebView failsafe reveal: Layers 2,3,4 ---------- */
  function revealAll() {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
  }
  (function setupReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    var vh = window.innerHeight || document.documentElement.clientHeight;
    // Layer 4: anything near/above the fold shows immediately
    els.forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add("is-visible");
    });
    // Layer 2: no IntersectionObserver -> reveal everything now
    if (!("IntersectionObserver" in window)) { revealAll(); return; }
    var io = new IntersectionObserver(function (ents, obs) {
      ents.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); obs.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach(function (el) { if (!el.classList.contains("is-visible")) io.observe(el); });
  })();
  // Layer 3: hard guarantees regardless of IO behaviour in WebViews
  setTimeout(revealAll, 2000);
  window.addEventListener("load", revealAll);
  window.addEventListener("pageshow", revealAll);

  /* ---------- ViewContent when documents scroll into view ---------- */
  var docsSec = document.getElementById("docs");
  if (docsSec && "IntersectionObserver" in window) {
    var dio = new IntersectionObserver(function (ents, obs) {
      ents.forEach(function (en) { if (en.isIntersecting) { track("ViewContent", { content_name: "medical_documents" }); obs.disconnect(); } });
    }, { threshold: 0.2 });
    dio.observe(docsSec);
  }

  /* ---------- floating "Kartlara bax" CTA: appears on entry, hides over the cards ---------- */
  var floatCta = document.querySelector(".float-cta");
  if (floatCta) {
    var helpSec = document.getElementById("help");
    if (helpSec && "IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { floatCta.classList.toggle("show", !e.isIntersecting); });
      }, { threshold: 0.2 }).observe(helpSec);
    } else {
      floatCta.classList.add("show");
    }
  }
})();
