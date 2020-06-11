// ==UserScript==
// @name          	PM.leht
// @namespace     PMO_GM
// @description	See kasutajaskript muudab PMO välimuse kasutajasõbralikumaks. Kaubamärgid kuuluvad nende vastavatele omanikele.
// @updateURL https://github.com/juneyourtech/GM_PM/raw/master/PM.user.js
// @version 0.8.7.2.4   
// @include       *.postimees.ee/*
// @include       https://rus.postimees.ee/*
// @include       https://www.60pluss.ee/*
// @include       https://www.e24.ee/*
// @include       https://www.elu24.ee/*
// @include       https://lemmik.elu24.ee/*
// @include       https://www.naine24.ee/*
// @include       https://www.tallinnapostimees.ee/*
// @include       https://www.tallinncity.ee/*
// @include       https://www.tarbija24.ee/*
// @include       https://www.tartupostimees.ee/*
// @include       https://www.parnupostimees.ee/*
// @include       *.infogram.com/*
// @grant		GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

/* _80______________________________________________________________________ */

GM_addStyle("HTML > BODY * {animation:none !important; animation-delay:unset !important; animation-delay:0s !important;}")

GM_addStyle("DIV[id*=\"hype-obj\"][class=\"HYPE_element\"][role=\"img\"] {transform:none !important; transform-origin:unset !important; pointer-events:none !important;}");
/* display:none !important; */
/* DIV[id*="hype-obj"][class="HYPE_element"][role="img"] */

/* TEXT COLOR */
GM_addStyle("HTML > BODY:not([data-n-head]) {color:black; background-color:Silver;}"); /* Old: rgb(58, 64, 65) */
/* background-color:Silver */
/* R. 19.01.2018: +Silver | 2018 redesign */
/* N., 20.09.2018: + :not([data-n-head]) to body to avoid it on tv.postimees.ee (it has its own background) */

/* 2018 new content */
/* GM_addStyle("HTML > BODY[data-n-head] > DIV#__nuxt > DIV#__layout > DIV.root.desktop > SECTION[data-v-b8f10860] {background-color:black; color:Silver;}"); */

/* Applies to late-2016 new design. */
GM_addStyle("HTML, BODY.body--article {overflow-x:auto; min-width:480px;}");
/* L., 17.12.2016: +overflow-x and min-width. */

/* ARVAMUS et al. BG */
GM_addStyle("DIV#bgOverlay {position:fixed;}");

/* LINK MOUSEOVER BGCOLOR */
GM_addStyle("A:hover, A:hover strong, A:hover span, A:hover * {background-color:Lavender !important;}");

/* NEW WINDOW LINK (MOUSEOVER) BGCOLOR 'cept ilmajaam | updated 28.10.2016 */
GM_addStyle("A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]):not([href*=\"prognoz.ee\"]), A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]):not([href*=\"prognoz.ee\"]) STRONG, A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]):not([href*=\"prognoz.ee\"]) SPAN, A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]):not([href*=\"prognoz.ee\"]) * {background:linear-gradient(to right, yellow, transparent 50%, transparent 100%);}");
/* 1st transparent 2.2 em | was: to bottom */
/* For the most part, the yellow colour has been instrumental in seeing
   well in advance the fact, that a link is set to open in a new window. 
   OTOH, I only wanted the background to be unset for the weather 
   element, but couldn't get it right and didn't have any direct need 
   when the userstyle was only in offline use. The exclusion was finally 
   achieved on 28.10.2016. The W3C spec is not very specific enough 
   about what is possible with the :not pseudo.
 • 11.12.2016: +prognoz.ee. */

/* New window links to ILMAJAAM | 28.10.2016 */
GM_addStyle("A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"][href*=\"prognoz.ee\"], A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"][href*=\"prognoz.ee\"] STRONG, A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"][href*=\"prognoz.ee\"] SPAN, A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"][href*=\"prognoz.ee\"] * {border-bottom:solid 1px yellow;}");
/* 11.12.2016: +prognoz.ee. */

/* This is the hover one:
GM_addStyle("A[TARGET=\"_blank\"]:hover, A[TARGET=\"_blank\"]:hover STRONG, A[TARGET=\"_blank\"]:hover SPAN, A[TARGET=\"_blank\"]:hover * {background:linear-gradient(to right, yellow, transparent 50%, transparent 100%);}");
*/

/* 
GM_addStyle("A[TARGET=\"_blank\"]:hover, A[TARGET=\"_blank\"]:hover strong, A[TARGET=\"_blank\"]:hover span, A[TARGET=\"_blank\"]:hover * {background-color:yellow !important;}"); */

GM_addStyle("A:hover, A:hover > H1#sectionHeader {border-bottom:solid 1px #99CCFF !important; margin-bottom:0px;}");
/* background-color:Lavender !important; */
/* E., 27.01.2020.: margin-bottom set from -1px to 0px. */

/* hover over bigger-story links below article, but before comments */
GM_addStyle("A.blockArticle:hover > H1.frontHeading {margin-bottom:14px;}");
/* 08.11.2016 */

/* link mouseover bgcolor EXCEPTIONS (for BIG STORY items) */
GM_addStyle("ARTICLE.frontSuperArt > A:hover, ARTICLE.frontSuperArt > A:hover STRONG, ARTICLE.frontSuperArt > A:hover SPAN, ARTICLE.frontSuperArt > A:hover * {background-color:unset !important;}");
/* K., 28.08.2019: This was probably the origin of an error about the background color parsing error, at which point the declaration was dropped. Set to 'unset'.*/

GM_addStyle("A > H1#sectionHeader {background-color:inherit; border:solid 1px white;}");

/* IN-ARTICLE LINK COLOR */
GM_addStyle("HTML > BODY .article .articleContent A, BODY.section-81 .article .articleContent A {color:blue;}");
/* body.section-123 body.section-2283 | works */

/* VISITED LINKS */
/* GM_addStyle("BODY {background-color:black !important;}"); */ /* works */
GM_addStyle("*:visited:not([class*=\"sections-menu__link\"]), A:visited:not([class*=\"sections-menu__link\"]), A:visited:not([class*=\"sections-menu__link\"]) strong, A:visited:not([class*=\"sections-menu__link\"]) span, A:visited:not([class*=\"sections-menu__link\"]) * {font-weight:400 !important; color:DarkGoldenrod !important; background:none; background-color:SandyBrown !important; text-decoration:underline !important; border:solid 5px DarkGoldenRod !important;}");
/* DarkGoldernrod - this works in most PM editions; PM blue for #22ace3

   What doesn't work: 
font-style:italic,oblique (Removed on 21.11.2016); 
font-weight:400; background-color (does it sometimes actually work?);
text-decoration:underline 
text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue !important;

21.11.2016: Added :not([class*=sections-menu__link]).
+, :not([class*=header--container__bg]), but does not work.
Let's see how it works.

28.08.2019.: Added \" inside square braces [] for possibly better syntax. */

/* ARTICLE VISITED LINKS */
GM_addStyle("A:visited > H1#sectionHeader {background-color:white !important;}");

/* VISITED LINKS EXCEPTIONS FOR BIG STORY */
GM_addStyle("ARTICLE.frontSuperArt > A:visited, ARTICLE.frontSuperArt > A:visited STRONG, ARTICLE.frontSuperArt > A:visited SPAN, ARTICLE.frontSuperArt > A:visited * {background-color:inherit !important; color:white !important; text-decoration:underline !important; font-weight:normal !important;}");

/* HOVER VISITED LINKS */
GM_addStyle("*:visited:hover, A:visited:hover, A:visited:hover strong, A:visited:hover span, A:visited:hover * {background:none; background-color:Cornsilk !important;}");

/* FRONTPAGE: HOVER VISITED LINKS exceptions */
/* link mouseover bgcolor EXCEPTIONS (for BIG STORY items) */

/* FRONTPAGE: BIG STORY visited links EXCEPTIONS (for BIG STORY items) */
GM_addStyle("ARTICLE.frontSuperArt > A:visited:hover, ARTICLE.frontSuperArt > A:visited:hover STRONG, ARTICLE.frontSuperArt > A:visited:hover SPAN {background:inherit !important;}");

/* VISITED SECTIONHEADER */
GM_addStyle("A:visited:hover > H1#sectionHeader {background:none; background-color:Cornsilk !important;}");

/* PM PLUSS LINKS */
GM_addStyle("A[href*=\"https:\/\/pluss\.\"], A[href*=\"https:\/\/leht\.\"] {font-weight:300 !important; color:#e94022 !important; background:none; background-color:LavenderBlush !important; border:solid 1px #e94022 !important;}");
/* A[href*=pluss] strong, A[href*=pluss] span, A[href*=pluss] * {} */

/* PM 60PLUSS LINKS */
GM_addStyle("BODY A[href*=\"www\.60pluss\"], BODY A[href*=\"www\.60pluss\"] STRONG, BODY A[href*=\"www\.60pluss\"] SPAN, BODY A[href*=\"www\.60pluss\"] * {color:brown !important; background-color:inherit !important; border:none !important;}"); /* Works */

/* PM 60PLUSS HOVER */
GM_addStyle("BODY A[href*=\"www\.60pluss\"]:hover, BODY A[href*=\"www\.60pluss\"] STRONG:hover, BODY A[href*=\"www\.60pluss\"] SPAN:hover, BODY A[href*=\"www\.60pluss\"] *:hover {background-color:rgb(255, 253, 236) !important;}"); /* Works */

/* PM SPORT links */
GM_addStyle("BODY A[href*=\"sport.postimees\"]:not([class*=sections-menu__link]):not(.pm-logo__link):not(.article-btn--facebook):not(.article-btn--twitter):not(.section-name-label), BODY A[href*=\"sport.postimees\"]:not([class*=sections-menu__link]):not(.pm-logo__link) STRONG, BODY A[href*=\"sport.postimees\"]:not([class*=sections-menu__link]):not(.pm-logo__link):not(.article-btn--facebook):not(.article-btn--twitter) SPAN, BODY A[href*=\"sport.postimees\"]:not([class*=sections-menu__link]):not(.pm-logo__link) * {color:#005749 !important; border:none !important;}");
/* Original: 0, 142, 121 (#008e79); brightness 43%: 0,110,93 (#006e5d); brightness 34%: #005749
   21.11.2016: Added :not([class*=sections-menu__link])
   10.01.2017: Added :not(.pm-logo__link) (exact class name) to some selectors,
   and :not(.section-name-label) to the first selector. fb & tw :nots use span, 
   too, but are not required for all selectors. This should work. */

/* PM SPORT HOVER */
GM_addStyle("BODY A[href*=\"sport.postimees\"]:hover, BODY A[href*=\"sport.postimees\"] STRONG:hover, BODY A[href*=\"sport.postimees\"] SPAN:hover, BODY A[href*=\"sport.postimees\"] *:hover {color:#008e79 !important;}"); /* Works */

/* PM SPORT VISITED */
GM_addStyle("BODY A[href*=\"sport.postimees\"]:visited, BODY A[href*=\"sport.postimees\"]:visited STRONG, BODY A[href*=\"sport.postimees\"]:visited SPAN, BODY A[href*=\"sport.postimees\"]:visited *, BODY A[href*=\"sport.postimees\"]:not([class*=\"sections-menu__link\"]):not(.pm-logo__link):not(.article-btn--facebook):not(.article-btn--twitter):visited * {color:#00b398 !important;}"); /* #008502. */
/* Turns out, that A:visited must be, while hover applies to _all_ 
   elements, though. */
/* T., 10.01.2017. Added last selector to experiment, and most :visited 
   links should now work. */
/* K, 28.08.2019: Added \" inside square braces [] for .sections-menu__link class. */

/* "REPORTER.EE VIDEOLOOD" */
GM_addStyle("SECTION.frontType11 .frontArticle {margin-bottom:0px; margin-top:1px;}");
/* was: margin-bottom:14px; used selector: ARTICLE.frontArticle */

GM_addStyle("SECTION.frontType11:first-child {margin-top:-1px;}");

GM_addStyle("SPAN.frontIcons {margin-top:0px; margin-bottom:0px;}");
/* was: margin-bottom:14px */

GM_addStyle("H1.frontHeading {margin-left:0px; margin-right:0px;}");

/* Reporter.ee videote lingid väiksemaks */
GM_addStyle("SECTION.frontType7 A[href*=\"reporter-ee\"] .frontHeading, SECTION.frontBlock.frontType12 A[href*=\"reporter-ee\"] .frontHeading, SECTION.frontType7 A[href*=\"reporter.postimees\"] .frontHeading, SECTION.frontBlock.frontType12 A[href*=\"reporter.postimees\"] .frontHeading, SECTION.frontBlock.frontType11 A[href*=\"reporter.postimees\"] .frontHeading {margin-top:0px; margin-left:0px; padding-left:1px; padding-right:1px; font-size:1.1em !important; background:linear-gradient(to bottom, rgb(255, 253, 236), transparent 2.2em, transparent 100%) !important;}");
/* works at least w/ bgcolor, superseded by an @media rule
backup selectors: DIV.frontPage at top
background-color:Silver;
25.07.2016: reporter.ee nüüd reporter.postimees.ee all
K., 28.08.2019: added \" inside square braces to 'reporter-ee'. */

GM_addStyle("@media only screen and (max-width:1023px) { SECTION.frontBlock.frontType7 A[href*=\"reporter-ee\"] .frontHeading:not(.frontComments), SECTION.frontBlock.frontType7 A[href*=\"reporter-ee\"] .frontHeading:not(.frontComments) SPAN:not(.frontComments) {font-size:1.1em !important;} SECTION.frontBlock.frontType12 A[href*=\"reporter-ee\"] .frontHeading:not(.frontComments), SECTION.frontBlock.frontType12 A[href*=\"reporter-ee\"] .frontHeading:not(.frontComments) SPAN:not(.frontComments) {font-size:1em !important;} }"); /* Works, yay :-) */
/* K., 28.08.2019: added \" inside square braces to 'reporter-ee'. */

/* 18.04.2018: In-article blue colors | 01.2018 redesign */
GM_addStyle("DIV.article-body__item--htmlElement A {color:#123e9d;}");

/* ROOT (10.02.2018) */
GM_addStyle("DIV.root {min-width:480px;}");
/* 11.10.2018: changed from 640px */

/* AFTER MENUBAR 2018 */
GM_addStyle("DIV.section-branding-om2018-countdown {width:auto; max-width:1000px; min-width:240px; overflow:hidden;}");

/* MAIN PAGE CONTAINER */
GM_addStyle("DIV.container {padding-left:0px; padding-right:0px; background-color:inherit; max-width:1195px;}");
/* works; bgcolor was white; padding-left:1px removed */

/* TOPNAV | HALL */
GM_addStyle("NAV#topNav {height:20px; line-height:unset;}");

/* HEADER ("PM ARVAMUS MAJANDUS", et al.) */
GM_addStyle("HEADER#contentHeader {background-color:inherit; padding-top:1px;}");
/* 28.10.2016: +padding-top */

/* 2018 redesign: HEADER ("PM ARVAMUS MAJANDUS", et al.) */
GM_addStyle("HEADER.site-header {background-color:inherit;}");

/* 2018/2019 R | TOP LINKS CONTAINER / ÜLEMISED LINGID - "KLIENDITUGI | VIHJA | TELLI LEHT etc." */
GM_addStyle("DIV.site-header__top > DIV.flex {flex-direction:row;}");
/* children: HEADER.site-header .menu-items.menu-items--top */

/* 2018/2019 R: HEADER (targets the search icon of looking glass | otsing luup */
GM_addStyle("HEADER.site-header .icons .icon:first-child {margin-right:0px;}"); /* 10.09.2019. */

/* 2018 redesign: HEADER/NAV */
GM_addStyle("NAV.menu-items {display:block; overflow:hidden; height:45px;}");

/* 2019 (R) | HEADER/NAV (BLUE BAR: "PM TÄNANE LEHT ARVAMUS") */
GM_addStyle("NAV.menu-items.menu-items--main {min-width:unset;}");

/* 2018 redesign: HEADER/NAV: PM ARVAMUS MEIE EESTI, jne. */
GM_addStyle("NAV.menu-items.menu-items--main.js-sticky-menu {height:17px; background-color:#191970; padding-top:0px; padding-left:0px; padding-right:0px;}");
/* 30.11.2018 */
/* R., 31.01.2020.: +padding-top. */
/* L., 21.03.2020.: bgcolor changed from #123e9d to #191970*/

/* 2018 redesign: HEADER/NAV | "PM ELU24 SÕBRANNA KODUSTIIL SPORT" etc items. */
GM_addStyle("NAV.menu-items.menu-items--main .menu-item {padding-top:3px; padding-bottom:1px; line-height:1.0em; transform:none; transition:none; font-family:\'TabacSans\'; font-weight:600; padding-left:12px; padding-right:12px;}"); 
/* same level | 30.11.2018 */
/* R., 31.01.2020.: + padding-left, padding-right */

GM_addStyle("NAV.menu-items.menu-items--main > DIV {float:left; line-height:0.9em; margin-left:0px; padding-left:0px; background-color:inherit;}");
/* 30.11.2018: +line-height, margin-left, padding-left */

GM_addStyle("NAV.menu-items.menu-items--main > DIV.burger-container.menu-item {position:absolute; height:17px; margin-left:0px; width:20px; padding-left:3px; padding-top:3px;}"); /* 30.11.2018 */
/* K., 20.05.2020: duplicate item padding-left:0px; removed. */

GM_addStyle("NAV.menu-items.menu-items--main > DIV.burger-container.menu-item ~ DIV:nth-child(2) {margin-left:20px;}"); /* 30.11.2018 */

GM_addStyle("NAV.menu-items.menu-items--main::after {display:none; right:0px; left:0px; bottom:0px;}");
/* border-top: 1px solid #E1E1E1; */

GM_addStyle("A.menu-item {transform:none; transition:none;}"); /* 30.11.2018 */

/* PM "klassikaline" classic sticky menu items | PM, TÄNANE LEHT, KOROONA, ARVAMUS, MEIE EESTI, MAJANDUS, jne. */
GM_addStyle("NAV.menu-items.menu-items--main.js-sticky-menu A.menu-item {color:#EEE;}"); /* 30.11.2018. */
/* 21.03.2020: changed color from white to #DDD*/

/* PM "klassikaline" classic sticky menu hover */
GM_addStyle("NAV.menu-items.menu-items--main.js-sticky-menu A.menu-item:hover {background-color:rgba(255,255,255,0.2) !important; border-bottom:unset !important; color:white;}");

GM_addStyle("BODY NAV.menu-items.menu-items--main.js-sticky-menu A.menu-item[HREF*=\"sport\.postimees\"]:not([class*=\"sections-menu__link\"]):not(.pm-logo__link):not(.article-btn--facebook):not(.article-btn--twitter):not(.section-name-label), BODY NAV.menu-items.menu-items--main.js-sticky-menu A.menu-item[HREF*=\"sport\.postimees\"]:not([class*=\"sections-menu__link\"]):not(.pm-logo__link):not(.article-btn--facebook):not(.article-btn--twitter):not(.section-name-label):visited {color:#00b398 !important;}"); /* 30.11.2018 */
/* sport dark color:#005749; | green
 medium: #008e79
lighter: #00b398 */

/* 2019 R: LEHT: HEADER CONTAINER and FOOTER | L., 23.05.2020. */
GM_addStyle("HTML:not(.device-phone) HEADER.tanane-leht-header, HTML:not(.device-phone) FOOTER.footer-2 {min-width:320px;}");

/* 2019 R.: MENU ABOVE HEADER (originally gray bg) | P., 15.12.2019. */
GM_addStyle("DIV.tanane-leht-header-menu {background-color:black;}");

/* 2019 R: menu above header */
GM_addStyle("BODY.scrolling-down DIV.tanane-leht-header-menu {display:none;}");

/* 2019 R: menu above header */
GM_addStyle("BODY.scrolled-top DIV.tanane-leht-header-menu {display:block;}");

/* 2019 R.: MENU ABOVE HEADER (originally gray bg) | E., 04.11.2019. */
GM_addStyle("DIV.tanane-leht-header-menu {background-color:black; transition:none;}");
/* P., 15.12.2019. | +no transition*/

/* MENU ABOVE HEADER: header "Tänane leht", "postimees.ee", "Meie Eesti", "Arvamus" */
GM_addStyle("HEADER.tanane-leht-header > DIV.tanane-leht-header-menu {height:16px !important;}");

/* 2019 R.: MENU ABOVE HEADER (originally gray bg) | E., 04.11.2019. */
GM_addStyle("DIV.tanane-leht-header-menu > DIV.container-1600 {height:16px !important;}");
/* !important is important :-) */

/* 2019 R: MENU ABOVE HEADER container (be careful here) */
GM_addStyle("DIV.tanane-leht-header-menu .menu-items.menu-items--sub {min-height:auto;}");
/* N., 07.11.2019.: alternative selector:
                    NAV.submenu-container > DIV.menu-items */

/* 2019 R: menu above header: "tänane leht", "meie eesti" individual links. */
GM_addStyle("DIV.tanane-leht-header-menu .menu-items.menu-items--sub .menu-item {color:LightSteelBlue;}");

/* 2019 R.: LEHT HEADER (includes SISUKORD, |ARVAMUS|, POSTIMEES, MINU LOOD, SISENE, and the top black bar... | E., 04.11.2019. */
GM_addStyle("HEADER.tanane-leht-header {top:0px; border-bottom:0px; background-color:transparent;}");
/* Original bgcolor:white; early top:16px;
15.12.2019: top t 0
30.12.2019: +border-bottom to 0.; background-color:MidnightBlue replaced with transparent.;
*/

/* 2019 R: LEHT HEADER INNER SIDES (directly affects all inner elements on hover) | E., 04.11.2019. */
GM_addStyle("HEADER.tanane-leht-header:hover * {color:white;}");
/* works */

/* 2019 R.: LEHT HEADER container (still includes SISUKORD, |ARVAMUS|, Postimees, MINU LOOD, SISENE | E., 04.11.2019. */
GM_addStyle("HEADER.tanane-leht-header > DIV:not(.article-progress-container):not(.tanane-leht-header-menu) {height:22px !important;}");
/* !important is important :-) */
/* 30.12.2019: +not on both selectors */

/* 2019 R: LEHT HEADER INNER SIDES (directly affects SISUKORD, |ARVAMUS|, Postimees, MINU LOOD, SISENE) | E., 30.12.2019. */
GM_addStyle("HEADER.tanane-leht-header > .container-1600 {background-color:MidnightBlue;}");

/* 2019 R: LEHT HEADER INNER SIDES (directly affects SISUKORD, |ARVAMUS|, Postimees, MINU LOOD, SISENE) | E., 04.11.2019. */
GM_addStyle("DIV.tanane-leht-header__placement {background-color:rgba(255,255,255,0.2);}");

/* 2019 R: LEHT HEADER INNER SIDES (directly affects SISUKORD, |ARVAMUS|, Postimees, MINU LOOD, SISENE) | E., 04.11.2019. */
GM_addStyle("HEADER.tanane-leht-header:hover DIV.tanane-leht-header__placement {background-color:inherit;}");

/* 2019 R: LEHT HEADER INNER SIDES (directly affects "Postimees" / PM logo only) | E., 04.11.2019. */
GM_addStyle("DIV.tanane-leht-header__placement--center {background-color:inherit; padding-top:3px;}");

/* 2019 R: LEHT HEADER PM LOGO image*/
GM_addStyle("DIV.tanane-leht-header__placement A IMG[alt=\"Postimees\"] {width:81px; height:16px}");
/* Original: width:127px; height:25px;*/
/* DIV.tanane-leht-header__placement A IMG[alt="Postimees"] */

/* 2019 R: LEHT HEADER INNER SIDES (directly affects section name only) | E., 04.11.2019. */
GM_addStyle("A.tanane-leht-header__article-section {padding-top:1px; font-weight:600; color:#ddd;}");

/* 2019 R: LEHT: progress bar below header: | E., 30.12.2019. */
GM_addStyle("DIV.article-progress-container {position:relative; bottom:0px; height:4px !important;}");

/* 2019 R: LEHT: progress bar below header: | E., 30.12.2019. */
GM_addStyle("DIV.article-progress-container #article-progress {background-color:MidnightBlue; height:4px !important;}");
/* MidnightBlue = #191970 */

/* HEADER small links [arvamus] */
GM_addStyle("SPAN.pmHeaderNavi {background-color:rgb(218, 218, 218);}");
GM_addStyle("SPAN.pmHeaderNavi > A {color:black !important;}");

/* GM_addStyle("DIV#headerWeather {background:unset;}"); */

GM_addStyle("DIV.pmHeaderBar {position:relative;}");

GM_addStyle("NAV.pmMainNav {min-width:892px;}");

/* GM_addStyle("@document domain(www.postimees.ee) {NAV.pmMainNav {background-color:#005bbb;} NAV.pmMainNav A:visited {color:#1db4f0 !important; background-color:navy !important;} }"); */

/* This offers a parsing error. Probably only applies to Stylish. */
GM_addStyle("@document domain(60pluss.postimees.ee) { NAV.pmMainNav {background-color:rgb(204, 161, 56) !important; font-weight:bold;}  NAV.pmMainNav A:visited {color:#1db4f0 !important; background-color:navy !important;} }");

/* RIGHT AD BAR. First seen on arvamus.postimees.ee, and as #rightAdBar 
misbehaved elsewhere, then I had to apply it on the main PM userscript/-css. */
GM_addStyle("SECTION#rightAdBar {position:absolute;}");

GM_addStyle("NAV.pmMainNav {min-width:892px; background-color:#005bbb;}");
/* default bgcolor rgb(29, 180, 240) */
GM_addStyle("NAV.pmMainNav A:visited {color:#1db4f0 !important; background-color:navy !important;}");
/* #1db4f0 - this very light, PM default
   #0072ce - 0,114,206 - darker - Eesti
   #005bbb - 0, 87,184 - more darker, Ukraine
   #123e9d - 18,62,157 - darker, Ukraine
   #222426 - PM dark
BLUE COLORS | COLOURS | SINISED VÄRVID 
K., 28.08.2019: Fix: :1:84: "Unexpected end of file while searching for ';' or '}' to end declaration.  Unexpected end of file while searching for closing } of declaration block." */

/* TOP: PM BLUE BAR */
GM_addStyle("HTML.topMenu #moveMenuCont {line-height:11px;}");

/* TOP: PM BLUE BLAR / HEADER_NAV | new design 11.2016 */
GM_addStyle("DIV.header__menus, LABEL.profile-menu-label {height:37px;}");
/* 17.11.2016 */

GM_addStyle("DIV.section-bg-color {background-color:#005bbb;}"); /* 17.11.2016. */
/* applies to the www side, mostly. */

/* TOP: HEADER: SUBSITE NAME */
GM_addStyle("DIV.pm-logo__subs-section--header {font-size:1.3em;}");
/* 17.11.2016. */

/* 11.2016 redesign: Suomi/Finland 100 */
GM_addStyle("A[href*=\"soome100.postimees\"] > SPAN {background-color:white; color:#002f6c;}"); /* 08.01.2017. */
/* Let's see, how it works. */

/* TOP: BLUE BAR AFTER SCROLL */
GM_addStyle("DIV#moveMenuCont .pmMainCont {background-color:transparent !important; background:linear-gradient(to right, rgb(0, 91, 187), rgb(0, 91, 187) 132px, transparent 132px, transparent 100%); opacity:1.0;}");
/* Sets bgcolor to overall darker | opacity was 0.8 */

/* background:linear-gradient(to right, rgb(0, 91, 187), transparent 50%, transparent 100%); */
/* linear-gradient(to right, rgb(192, 192, 192) 200px, transparent 650px, */

/* TOP: BLUE BAR AFTER SCROLL */
GM_addStyle("DIV#moveMenuCont .pmMainNav, #paidMenu NAV, .headerProfileContainer {max-width:unset; max-width:100%; width:100%; height:25px; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:16px; background-color:transparent !important; background:linear-gradient(to bottom, rgb(0, 91, 187), rgb(0, 91, 187) 17px, transparent 17px, transparent 100%); line-height:17px; padding-top:0px; padding-bottom:0px; padding-left:132px;}");
/* was: margin left-right were auto in order to center the mainNav block. 
        background-color:transparent; border-bottom:solid 1px rgb(0, 91, 187); */

/* TOP: SMALL PM LOGO AS MOVED */
GM_addStyle("HTML.topMenu DIV#moveMenuCont .pmMainNav A.pmLogo {background-color:transparent; margin-top:1px; position:absolute; top:0px; left:16px;}");
/* works with important, but only because .topmenu was not prepended with HTML float:left; */

GM_addStyle("DIV#moveMenuCont .plussPm {background-color:#5b0606 !important; color:white !important; border-top:none !important; border-bottom:none !important; border-left:solid 1px white !important; border-right:none !important; font-weight:600 !important;}");
/* color: LavenderBlush
          #e94022 - PM red
          #bb0b0b
font-weight:600 (medium-bold, but not full-bold) */

GM_addStyle("DIV#moveMenuCont .plussPm:hover {background-color:#e94022 !important; font-weight:bold !important;}");

GM_addStyle("DIV.gradient-separator--before:before {background-image:linear-gradient(180deg, #F2F2F2, transparent 59%, transparent);}"); /* 10.02.2018 */
/* 16.08.2019: Code fix here with semicolons being strangely away from 
the right places around the end of the rule declaration instead of 
after a parameter value or after the closing parenthesis. */

GM_addStyle("DIV.gradient-separator--after:after {background-image:linear-gradient(0deg, #F2F2F2, transparent 59%, transparent);}");
/* 16.08.2019: Code fix here with semicolons being strangely away from 
the right places around the end of the rule declaration instead of 
after a parameter value or after the closing parenthesis. */

/* 03.-04.2018 */
GM_addStyle("HEADER.site-header .menu-items.menu-items--main {background-color:inherit; overflow-x:hidden;}"); /* display:block; */

/* Block an item or domain, or just a block element?: jwpltx.com */

GM_addStyle("HEADER.site-header .menu-items > DIV {float:left;}");

/* TOP: LARGE PM LOGO */
GM_addStyle("A.pmLogo, A.pmLogo:visited, A.mainSectionLogo, A.mainSectionLogo:visited {background-color:inherit !important;}");

/* 2019/2020 R | QUOTE AFTER BIG LOGO | P., 24.05.2020. */
GM_addStyle("@media only screen and (max-width:800px) { HEADER.site-header .midblock-container {display:block;} }");
GM_addStyle("@media only screen and (max-width:560px) { HEADER.site-header .quote-container {margin-left:5px;} }");

/* TOP: BLUE BAR LINKS' LINE HEIGHT */
GM_addStyle(".pmMainNav A {margin-bottom:8px; line-height:unset;}");

GM_addStyle("A.mainSectionLogo, A.mainSectionLogo:visited {background-color:inherit !important; color:white !important;}");

GM_addStyle("NAV.pmSubNav A {background-color:rgba(255,255,255,0.5) !important;}");

GM_addStyle("NAV.pmSubNav A:hover {background-color:rgba(255,255,255,0.75) !important;}");

/* TOP: HEADER TALK/COMMENTS BUBBLE | new design of 11.2016 | Added 07.01.2017 */
GM_addStyle("DIV.header__visible-in-article > A {padding-top:3px;}");
/* 09.01.2017 */

GM_addStyle("DIV.header__visible-in-article > A > IMG {height:19px; width:20px;}");
/* Line added on 07.01.2017.
   This sets the talk bubble to about the same height as the fb share icon.
   margin */

/* ARTICLE: BIG STORY (new design, Autumn 2015) */
GM_addStyle("SECTION#fullScreenImage DIV.container {background:none;}");

/* MAINSPACE | FRONTPAGE | Suur lärakas peale suure loo linke ("Vaata statistikat") | 04.04.2020. */
GM_addStyle("DIV.feed-button {margin-bottom:2px; border:solid 1px #F8F8F8; background-color:inherit; padding:5px;}");
/* K., 08.04.2020.: +margin-bottom, padding */

/* MAINSPACE | FRONTPAGE | Suur lärakas peale suure loo linke ("ülevaade Eestis ja maailmas") | 08.04.2020. */
GM_addStyle("DIV.feed-button__top-text {font-size:19px; font-weight:500; color:#343434;}");

/* MAINSPACE | FRONTPAGE | Suur kollane lärakas "TELLI DIGIPAKETT" | K., 15.04.2020. */
GM_addStyle("DIV.section-branding-bg.section-branding--digipakett {padding:0px;}");

/* MAINSPACE | FRONTPAGE | Suur kollane lärakas "TELLI DIGIPAKETT" | K., 15.04.2020. */
GM_addStyle("DIV.root.root--section-brading-digipakett > DIV ~ DIV.section-branding-bg[style*=\"fixed\"] {background-color:transparent; padding-left:0px; padding-right:0px;}");
/* E., 25.05.2020.: +transparent */
/* bwahaha, the developer made a CSS typo in the selector, writing 'brading' instead of branding >:) */

/* MAINSPACE | FRONTPAGE | Suur kollane lärakas "TELLI DIGIPAKETT" suur konteiner | K., 15.04.2020. */
GM_addStyle("A.section-branding__digipakett.section-branding__digipakett-sticky {display:inline-flex; margin:0px; background-color:transparent; padding:0px;}");

/* MAINSPACE | FRONTPAGE | Suur kollane lärakas "TELLI DIGIPAKETT" sticky */
GM_addStyle("DIV.root--section-brading-digipakett DIV.section-branding-bg[style*=\"fixed\"] {top:16px !important; z-index:19; width:auto; background-color:transparent;}");
/* data-exact-start="true"
data-has-stop="false"
data-sticky=""
top: 115px; bottom: auto; position: fixed; = sticky
top: auto; bottom: auto; position: static;

K., 15.04.2020. +z-index
E., 25.05.2020.: z-index: 19 from 20. */

/* 2020 R: LEHT: Fixes z-index and position at leht relative to blue bar height.
 | E., 25.05.2020. */
GM_addStyle("HTML.theme-tanane-leht > BODY.not-scrolled-top.scrolling-down DIV.root--section-brading-digipakett DIV.section-branding-bg[style*=\"fixed\"] {top:21px !important;}");
/* HTML.theme-tanane-leht > BODY.not-scrolled-top.scrolling-down DIV.root--section-brading-digipakett DIV.section-branding-bg[style*="fixed"] */

/* MAINSPACE | LEHT | Suure kollase läraka "Proovi esimene kuu..."  sticky | L., 23.05.2020. */
GM_addStyle("HTML.theme-tanane-leht:not(.device-phone) .not-scrolled-top:not(.scrolling-down) .root--section-brading-digipakett .section-branding-bg {top:37px !important; z-index:1; background-color:transparent; transition:none;}");

/* MAINSPACE | LEHT | Suure kollase läraka "Proovi esimene kuu..."  sticky (scrolling down) | L., 23.05.2020. */
GM_addStyle("HTML:not(.device-phone) > BODY.tanane-article-view.scrolling-down .root--section-brading-digipakett DIV.section-branding-bg[data-v-f8d4cf16] {top:25px !important; background-color:transparent; transition:none;}");

/* SUURE KOLLASE LÄRAKA "TELLI DIGIPAKETT" SISU | K., 15.04.2020. */
GM_addStyle("A.section-branding__digipakett-sticky .section-branding__digipakett-contents {display:inline-flex; height:18px; padding-left:0px; padding-right:0px; justify-content:unset;}");

/* SUURE KOLLASE LÄRAKA "TELLI DIGIPAKETT" SISU konteiner | K., 15.04.2020. */
GM_addStyle("A.section-branding__digipakett-sticky DIV.flex.flex--align-items-center {display:inline-flex; align-items:unset;}");
/* 21.05.2020: +display:inline-flex from inline-table. Seems to work. */

/* SUURE KOLLASE LÄRAKA IKOON | K., 15.04.2020. */
GM_addStyle("A.section-branding__digipakett.section-branding__digipakett-sticky IMG {width:20px !important; height:18px !important; background-color:rgb(235, 210, 14);}");

/* SUURE KOLLASE LÄRAKA TEKSTIKONTEINER | K., 15.04.2020. */
GM_addStyle("A.section-branding__digipakett.section-branding__digipakett-sticky DIV.section-branding__digipakett-title {height:18px; margin-left:0px; margin-right:0px; border-radius:0px; background-color:rgb(235, 210, 14); padding:0px 11px; font-size:12px; line-height:20px; text-transform:uppercase;}");
/* K., 20.05.2020: Duplicate item border-radius:20px; removed.  */

/* SUURE KOLLASE LÄRAKA SUUR MUST NUPP "TELLI DIGIPAKETT" (20.05?) */
GM_addStyle("A.section-branding__digipakett.section-branding__digipakett-sticky DIV.section-branding__digipakett-btn {height:18px; margin-left:0px; border-radius:0px 0px 5px; padding:0px 11px; font-size:12px; line-height:18px;}");
/* border-radius: 0px 0px 5px makes the lower-right corner round. */

/* SUURE KOLLASE LÄRAKA "ESIMENE KUU" (20.05?) */
GM_addStyle("DIV.section-branding__digipakett-disclaimer {right:407px; bottom:62px; color:white;}");

/* FRONTPAGE | Suur kollane lärakas "Proovi | reklammivaba digipaketti..." | 02.06.2020. */
/* GM_addStyle("DIV.digipakett-branding--sticky[data-v-3ca0ef3e] {}"); */

/* FRONTPAGE | Suur kollane lärakas "Proovi | reklammivaba digipaketti..." | 02.06.2020. | container */
GM_addStyle("DIV.digipakett-branding--sticky .digipakett-branding__container[data-v-3ca0ef3e], DIV.digipakett-branding--sticky .digipakett-branding__container[data-v-70bdf18b], DIV.digipakett-branding--sticky .digipakett-branding__container {width:auto; background-color:transparent; padding-left:0px; padding-right:0px;}");
/* #EBD20E; */
/* 11.06.2020.: +additional backgorunt selector(s) to handle the new data-v- sticky stuff. */

/* FRONTPAGE | Suur kollane lärakas "Proovi | reklaamivaba digipaketti..." | 02.06.2020. */
GM_addStyle("DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-3ca0ef3e], DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-70bdf18b], DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky {top:17px !important; padding-left:0px; padding-right:0px; background-color:transparent;}");
/* padding-left:0px; padding-right:0px; bgcolor was: #EBD20E;*/
/* 11.06.2020.: +additional data-v- sticky. */

/* leht: | Suure kollase lärakas sticky | 02.06.2020. */
GM_addStyle("HTML.theme-tanane-leht:not(.device-phone) body.scrolling-down DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-3ca0ef3e], HTML.theme-tanane-leht:not(.device-phone) body.scrolling-down DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-70bdf18b], HTML.theme-tanane-leht:not(.device-phone) body.scrolling-down DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky {top:21 !important;}");
/* 11.06.2020.: +additional selectors to handle the new data-v- sticky stuff. */
/* The above doesn't seem to have worked properly. */
GM_addStyle("HTML.theme-tanane-leht:not(.device-phone) body.scrolling-down DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-70bdf18b], HTML.theme-tanane-leht:not(.device-phone) body.scrolling-down DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky {top:17px !important;}");
GM_addStyle("HTML.theme-tanane-leht:not(.device-phone) body.tanane-article-view.scrolling-down DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-70bdf18b], HTML.theme-tanane-leht:not(.device-phone) body.tanane-article-view.scrolling-down DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky {top:21px !important;}");

/* leht: | Suure kollase lärakas sticky | 02.06.2020. */
GM_addStyle("HTML.theme-tanane-leht:not(.device-phone) DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-3ca0ef3e], HTML.theme-tanane-leht:not(.device-phone) DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-70bdf18b], HTML.theme-tanane-leht:not(.device-phone) DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky {top:33px !important; transition:none;}");
/* 11.06.2020.: +additional selectors to handle the new data-v- sticky stuff. */
GM_addStyle("HTML.theme-tanane-leht:not(.device-phone) > body.tanane-article-view DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-3ca0ef3e], HTML.theme-tanane-leht:not(.device-phone) > body.tanane-article-view DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky[data-v-70bdf18b], HTML.theme-tanane-leht:not(.device-phone) > body.tanane-article-view DIV.digipakett-branding--sticky .digipakett-branding__container.is-sticky {top:37px !important;}");
/* 11.06.2020. */


/* FRONTPAGE | Suur kollane lärakas "Proovi | reklaamivaba digipaketti..." | 02.06.2020. */
GM_addStyle("DIV.digipakett-branding--sticky .digipakett-branding__background[data-v-3ca0ef3e], DIV.digipakett-branding--sticky .digipakett-branding__background[data-v-70bdf18b], DIV.digipakett-branding--sticky .digipakett-branding__background {height:16px; border-radius:0px 0px 5px; padding-left:30px;}");
/* 11.06.2020.: +additional selectors to handle the new data-v- sticky stuff. */

/* FRONTPAGE | Suur kollane lärakas "Proovi | reklaamivaba digipaketti..." | 02.06.2020. | "osta"" tekst "Proovi | REKLAAMIVABA digipaketti.." */
GM_addStyle("DIV.digipakett-branding--sticky .digipakett-branding__desc[data-v-3ca0ef3e], DIV.digipakett-branding--sticky .digipakett-branding__desc[data-v-70bdf18b], DIV.digipakett-branding--sticky .digipakett-branding__desc {font-size:12px;}");
/* 11.06.2020.: +additional backgorunt selector(s) to handle the new data-v- sticky stuff. */

/* FRONTPAGE | Suur kollane lärakas "Proovi | reklaamivaba digipaketti..." | 02.06.2020. | "osta"" nupp */
GM_addStyle("DIV.digipakett-branding--sticky .digipakett-branding__btn[data-v-3ca0ef3e], DIV.digipakett-branding--sticky .digipakett-branding__btn[data-v-70bdf18b], DIV.digipakett-branding--sticky .digipakett-branding__btn {margin-left:30px; height:16px; border-radius:0px 0px 5px; padding:0px 25px;}");
/* 11.06.2020.: +additional backgorunt selector(s) to handle the new data-v- sticky stuff. */

/* FRONTPAGE / ARTICLE | Suur kollane lärakas "Kas oled reklaamist tüdinud?" | 11.06.2020. */
GM_addStyle("DIV.digipakett-branding--static[data-v-70bdf18b], DIV.digipakett-branding--static {padding:1px 1px 1px;}");
/* padding. top left+right bottom */


/* SPINNER | ANIMATION | DIAMOND | K., 15.04.2020. */
GM_addStyle("SPAN.diamond::before {transform:none;}");
GM_addStyle("SPAN.diamond::after {transform:none; animation:none;}");
GM_addStyle("SPAN.button--for-subscription__diamond::after {transform:none; display:none; animation:none;}"); /* P., 17.05.2020. */

/* MAINSPACE | FRONTPAGE */
GM_addStyle("DIV#wrap {width:auto; min-width:985px; max-width:1232px;}");
/* original width:1232px */

/* FRONTPAGE AND ELSEWHERE: suur bänner (OM 2018) */
GM_addStyle("DIV.section-branding-bg {background-color:inherit;}");
/* 10.02.2018 */

/* FRONTPAGE | CONTENT : SISU NAGU | 2018 redesign */
GM_addStyle("SECTION.structured-content {background-color:inherit; clear:both;}");
/* 10.02.2018 */

/* FRONTPAGE / ESILEHT | SUUR LUGU | PEALKIRI à la "TARKUSEPÄEV TÕI KOOLIJÜTSID KOOLI" | 01.09.2019. */
GM_addStyle(".structured-content__group--breaking .block-title, DIV.structured-content__group--masonry .block-title {width:100%; max-width:1000px;}"); /* original width: 1000px; */

/* FRONTPAGE | CONTENT | SISU | 16.04.2018 */
GM_addStyle("DIV.structured-content__group {background-color:inherit; padding-left:0px; padding-right:0px; padding-bottom:0px;}");
/* 20.09.2018: padding */

/* FRONTPAGE | SISU | BIG STORY | SMALLER ARTICLE LINKS | 12.01.2020. */
GM_addStyle("DIV.custom-block__masonry .custom-block__bottom .list-article__image {width:100%;}");

/* 2019 R | FRONTPAGE: side-by-side article links with pictures must be closer together. | 09.01.2020. */
GM_addStyle("DIV.structured-content__block .list-article, DIV.structured-content__block.y2019 {margin-right:1px;}");
/* K., 22.01.2020.: At times, this ruleset is supeseded by 
original/source with 16px padding, then by userstyle at 
DIV.structured-content__group--topic.y2019 , then by original/source 
with 7px, then by SECTION.y2019.m09 . */

/* dark gradient below text */
GM_addStyle("A.list-article__media:before {height:31%; bottom:0px; left:0px; right:0px;}"); /* 16.04.2018. | 22% for two-line, 31% for four-line */

/* [2019 R] | FRONTPAGE | : Side-by-side titles must be separated with 
 more space. | 09.01.2020. */
GM_addStyle("A.list-article__url, A.list-article__url.y2020-01 {padding-right:5px;}");

GM_addStyle("@media only screen and (max-width:651px) { DIV.structured-content__group--topic .structured-content__block--quadruple .list-article:last-child > DIV.list-article__text > A.list-article__url {word-break:break-all;} }");
/* P., 24.05.2020. */

GM_addStyle("@media only screen and (max-width:578px) { DIV.structured-content__group .structured-content__block--quintuple .list-article:last-child > DIV.list-article__text > A.list-article__url {word-break:break-all;} }");
/* P., 24.05.2020. */

GM_addStyle("A.list-article__url:hover {background-color:rgba(0,0,0,0.5) !important;}"); /* 16.04.2018 */

GM_addStyle("DIV.custom-block.custom-block__breaking .custom-block__top .list-article__headline:hover {background-color:rgba(0,0,0,0.5);}");
/* 16.04.2018 */

/* big article, big link on image */
GM_addStyle("ARTICLE.list-article--content-on-image-big .list-article__text {bottom:5px; margin-left:8px; margin-right:0px; transition:none;}");
/* 16.04.2018 */

/* FRONTPAGE | CONTENT | SISU | BIG STORY insets (to below) */
GM_addStyle("DIV.custom-block .custom-block__bottom {background-color:inherit; padding-bottom:0px; padding-top:1px; padding-left:0px; padding-right:0px; margin:0px 0px 0px 0px;}");
/* 16.04.2018 */

/* [FRONTPAGE] additional stories on top of big story (insets) | Also: top-story / big-story sub-stories | 16.04.2018 */
GM_addStyle("DIV.custom-block .custom-block__bottom .list-article {background-color:rgba(255,255,255,0.25); margin-right:1px; max-width:unset;}");
/* N., 14.11.2019.: margin-right set to 1px from 0px; added an unset max-width. */

/* [FRONTPAGE] Coincidentally, this selector applies to big-story / top-story sub-stories.*/
GM_addStyle("DIV.custom-block .custom-block__bottom .list-article__text {padding-left:75px; padding-right:10px;}");
/* Comment added N., 14.11.2019.:
This is probably some kind of an older design that no longer appears. 
It was likely meant to allow left-side small pictures. I've kept it for 
legacy purposes, but the below selector now supersedes it. */

/* 2019 R [FRONTPAGE] | Applies to big-story / top-story sub-stories. 
 | N., 14.11.2019. */
GM_addStyle("SECTION.flex--equal-width > DIV.custom-block .custom-block__bottom ARTICLE.list-article > .list-article__text {padding-left:0px; padding-right:1px;}");

/* 2019 R [FRONTPAGE] | Applies to big-story / top-story sub-story images. | N., 14.11.2019. */
GM_addStyle("DIV.custom-block__masonry .custom-block__bottom.custom-block__bottom-4 .list-article__image {display:inline-flex; width:100%;}");

/* FRONTPAGE | 2018 redesign | BIGGER TOPIC (but not big story) header */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header {background-color:inherit;}");

/* FRONTPAGE | 2018 redesign | BIGGER TOPIC (but not big story)
   includes BIG WEATHER ITEM BELOW */
GM_addStyle("DIV.layout {background-color:inherit; padding:0px;}");
/* covers */

/* 2019 R [FRONTPAGE] | "Tänane leht" right-side article links in 
column formation. (container) | 09.01.2020. */
GM_addStyle("SECTION.tanane-custom .right-side {margin-left:1px;}");

/* 2019 R [FRONTPAGE] | "Tänane leht" right-side article links in 
column formation. (inner) | 09.01.2020. */
GM_addStyle("DIV.structured-content__block--list .list-article + .list-article {margin-top:1px;}");
/* Change later to 1px. */

/* 2019 R [FRONTPAGE] | "Tänane leht" right-side article links in 
column formation: IMAGES | 09.01.2020. */
GM_addStyle("A.list-article__media {margin-bottom:0px;}");
GM_addStyle("SECTION.tanane-custom .right-side .list-article__media {margin-right:4px;}");

/* 2019 R [FRONTPAGE] | "Tänane leht" right-side article links in 
column formation: LINKS below images | 09.01.2020. */
GM_addStyle("DIV.right-side A.list-article__url > DIV {padding-bottom:3px;}");
/* padding-bottom is meant to add some space, if there is a longer title, and it gets too close to the next item's URL text. */

/* 2020 R | FRONTPAGE | Lots of bars at the top */
GM_addStyle("NAV.layout--1030 {min-width:320px;}");

/* FRONTPAGE (and articles) | 2019 (R) | BLUE BAR / BLUE HEADER ("PM TÄNANE LEHT ARVAMUS") & SUBMENU ("Kõik uudised | Podcast | juhtimine") */
GM_addStyle("DIV.layout.layout--1030 {min-width:unset;}");
/* K., 06.11.2019. */

/* FRONTAGE (and articles) | 2019 (R) | BELOW BLUE BAR / B. BLUE HEADER / B. BLUE NAV*/
GM_addStyle("DIV.menu-items--sub {flex-wrap:wrap; height:auto; min-height:35px;}");
/* K., 06.11.2019. */

/* 2020 R | FRONTPAGE | alamlehe (à la Elu24) alamlingid; samuti "Sõbranna" alamlingid.  */
GM_addStyle("NAV.submenu-container {padding-bottom:0px;}");
GM_addStyle("NAV.submenu-container.layout--1030 {background:linear-gradient(to bottom, white 0%, transparent 100%);}");

/* FRONTPAGE | 2018 redesign | BIGGER TOPIC (but not big story) */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg-image {padding-right:0px; padding-bottom:0px; padding-left:0px;}");

/* FRONTPAGE bigger topic background URL (2018/) */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg-image .layout .url-above-image {width:100%; right:0px; bottom:0px; left:0px; z-index:1;}");

/* FRONTPAGE bigger topic content (2018) */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg-image .structured-content__group--topic {padding-top:0px; height:auto;}");

/* FRONTPAGE bigger topic links (2019) */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg-image .structured-content__group--topic .list-article {background-color:inherit; height:auto;}");

/* FRONTPAGE bigger topic image links (2019) */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg-image .structured-content__group--topic .list-article .list-article__media {margin-bottom:0px;}");

/* FRONTPAGE bigger topic links (2019) */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg-image .structured-content__group--topic .list-article__text {padding-left:0px; padding-right:0px;}");

/* FRONTPAGE bigger topic links (2019) | Actual text url. */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg-image .structured-content__group--topic .list-article__url {color:white; background-color:rgba(0,0,0,0.5);}");

/* FRONTPAGE | SISUTURUNDUS (2018 redesign? 2019?) */
GM_addStyle("DIV.group-topic-with-custom-header--full-bg-image .layout .url-above-image {width:auto; max-width:1000px;}");

/* FRONTPAGE | ELU24 MUST/VALGE WIDE ARTICLE SELECTION container, 
   AFTER SISUTURUNDUS | T., 03.09.2019. */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg--color-with-header {border-width:1px;}");
/* It should be said, that the black/white design with thicker borders 
   and greater padding was actually very good. */

/* FRONTPAGE | ELU24 must/valge wide article selection | ITEMS CONTAINER 
 | T., 03.09.2019. */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg--color-with-header .structured-content__group {padding-left:1px; padding-right:1px; padding-bottom:1px;}");

/* FRONTPAGE | ELU24 must/valge wide article selection | LINK ITEMS | 
   T., 03.09.2019. */
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg--color-with-header .structured-content__group.structured-content__group--topic .structured-content__block--quadruple .list-article, SECTION.y2019.m09 {margin-right:1px;}");

/* FRONTPAGE | ELU24 must/valge wide article selection | IMAGES | 
   T., 03.09.2019.*/
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg--color-with-header .structured-content__group .list-article__image {border-width:1px;}");

/* FRONTPAGE | ELU24 must/valge wide article selection | TEXT BELOW 
IMAGES | K., 22.01.2020.*/
GM_addStyle("SECTION.structured-content .group-topic-with-custom-header--full-bg--color-with-header .structured-content__group.structured-content__group--topic .structured-content__block--quadruple .list-article A.list-article__url {padding-right:2px;}");

/* "CHOOSE CHANNEL" | KANAL 2 | KANAL 11 | K12 | pleier.ee | 
   2018 redesign video section */
GM_addStyle("SPAN.schedule-event__live.slab:before {animation:none;}");
/* .schedule-event__live .pleier-color .slab
• attribute names cannot be wildcarded as of April 2018.
  The current solution works. */

/* FRONTPAGE | channels | Spinners (container): KANAL 2 • K12 • K11 • Kanal 12 • Kanal 11 | K., 15.04.2020. */
GM_addStyle("DIV.schedule.tv-schedule[data-v-20c8ce14] .VueCarousel-inner {transition:none !important;} ");

/* FRONTPAGE | channels | Spinners (container): KANAL 2 • K12 • K11 • Kanal 12 • Kanal 11 | K., 15.04.2020. */
GM_addStyle("DIV.radial-progress-container > .radial-progress-bar * {transition:none !important; transform:none !important; animation:none !important;}");
GM_addStyle("DIV.radial-progress-container > .radial-progress-bar > circle {transition:none !important; transform:none !important; animation:none !important;}");

GM_addStyle("DIV.radial-progress-container > .radial-progress-bar {display:none !important; transition:none !important; transform:none !important; animation:none !important;}");

/* this spinner moves a lot all the time | K., 15.04.2020. */
GM_addStyle("DIV.radial-progress-container radialgradient {transition:none !important; transform:none !important; animation:none !important;}"); /* display:none; */

/* FRONTPAGE | CONTAINER (both left and right) */
GM_addStyle("SECTION#leftContent, DIV.frontPlace SECTION, SECTION[class~=\"listSection\"], SECTION#rightContent SECTION {background-color:inherit;}"); /* rgba(255,255,255,0.25); can be made transparent, if other areas are set to white */
/* K., 28.08.2019: added \" inside square braces to 'listSection'.

/* P., 17.05.2020. SPINNER with dots  */

GM_addStyle("DIV.sk-circle * {display:none !important; animation:none !important; transform:none !important;}");
GM_addStyle("DIV.sk-circle[data-v-d50f6dfc] * {display:none; animation:none; transform:none;}");
GM_addStyle("DIV.sk-circle:before {content:\'\"Ootame, vaatame\.\.\.\"\'; word-wrap:normal;}");
GM_addStyle("DIV.sk-circle DIV.sk-child[class*=\"sk-circle\"][data-v-d50f6dfc] {display:none; animation:none; transform:none;}");
GM_addStyle("DIV.sk-circle DIV.sk-child[data-v-d50f6dfc]::before {display:none; animation:none; transform:none;}");

/* FRONTPAGE | 2018 redesign */
GM_addStyle("DIV.structured-content__group.structured-content__group--grid-block .section-group {margin-left:0px; margin-right:0px;}");

/* FRONTPAGE | 2018 redesign | alumised lugude lingid väiksed */
GM_addStyle("SECTION.structured-content__block .list-article {margin-right:1px;}");

GM_addStyle("DIV.structured-content__group--topic .structured-content__block--quadruple .list-article, DIV.structured-content__group--topic.y2019 {margin-right:1px;}");
/* DIV.2018 | K., 22.01.2020.: Ruleset superseded by original/source 
CSS with 7px, itself superseded by SECTION, at SECTION.y2019.m09. */

GM_addStyle("DIV.structured-content__group--topic .structured-content__block--quadruple .list-article:last-child {margin-right:0px;}"); /* "Browser error: unknown pseudo-class or pseudo-element 'last'. Rule ignored due to bad selector." */

/* FRONTPAGE | 2018 redesign | sünnipäevad */
GM_addStyle("SECTION.birthday .birthday-list__item {display:block;}");

/* FRONTPAGE | 2018 redesign | carousel | SÜNNIPÄEVAD */
GM_addStyle("SECTION.birthday .VueCarousel {width:auto; max-width:685px;}");

/* GM_addStyle("DIV.VueCarousel-inner {transition:none !important; transform:none !important;}"); */
/* Commented out on 15.01.2019. Never ever remove transforms and transitions from here. */

GM_addStyle("DIV.structured-content__group.structured-content__group--grid-block .section-articles-container {padding:0px;}"); /* 2018 Redesign */

/* FRONTPAGE, ELSEWHERE | LIVE RED BUTTON 08.04.2018 | 2018 redesign */
GM_addStyle("SPAN.info-dot {animation:none; background-color:Coral;}");
/* RED (presumably blinking) DOT */

/* TV.POSTIMEES.EE RED DOT */
GM_addStyle("A.video-live:before {animation:none; background-color:Coral;}");
/* #E80243 */

/* [FRONTPAGE] | OPTIBET | WIDTH */
GM_addStyle("DIV.layout--group {overflow-x:hidden;}");

/* GM_addStyle("A.group-branding.group-branding--spaced.flex.flex--align-items-center {:;}"); */
/* group-branding group-branding--optibet-est group-branding--spaced flex flex--align-items-center */

/* [FRONTPAGE / OTHER PAGES] | WEATHER / ILM | WIDTH */
GM_addStyle("SECTION.weather-header-container > DIV.weather-header {width:auto; min-width:230px; max-width:1000px; max-height:unset; min-height:231px; overflow-x:auto; height:435px;}");
/* K., 20.05.2020.: Duplicate property height:100%; removed. */

/* 2018 WEATHER: CONTENT CONTAINER */
GM_addStyle("SECTION.weather-header-container[data-v-380906ac] {min-height:230px; height:100%; box-sizing:unset; max-height:640px;}");

/* 2018 WEATHER: CITY & DEGREE */
GM_addStyle("SECTION[data-v-304de258] .weather-header .weather-header__left-side {padding-right:0px; padding-bottom:0px; padding-left:0px; display:inline-block; width:auto; min-width:348px; flex:unset;}");

/* 2018 WEATHER: CITY NAME */
GM_addStyle("SECTION[data-v-304de258] .weather-header .weather-header__location {width:auto; text-overflow:unset; overflow:visible;}");

/* 2018 WEATHER: WIND (CLOCK), but affects ALL other data points, too! */
GM_addStyle("SECTION[data-v-304de258] .weather-header .weather-header__data-group {display:inline; position:relative; top:unset; right:unset; float:right; width:auto; margin-right:0px;}");

/* 2018 WEATHER: DETAILED DATA (Data points) */
GM_addStyle("SECTION[data-v-304de258] .weather-header .weather-header__right-side {display:inline; top:unset; left:unset; width:auto; height:unset; min-height:unset;}");
/* K., 28.08.2019: Fix: :1:84 expected end of value, but found ','; error in parsing display. Another fix: replaced auto: with auto;*/

/* 2018 Design | WEATHER */
GM_addStyle("DIV.weather-header__right-side[data-v-380906ac] {position:relative;}");

/* 2018 Design | FRONTPAGE | WEATHER LINKS (below survey?) */
GM_addStyle("SECTION[data-v-304de258] .weather-header DIV.weather-header__right-side > DIV.weather-header__data-group.flex--align-items-center.flex--justify-content-space-between {float:left;}");

/* 2018 Design | ILM "pikem prognoos" */
GM_addStyle("SECTION[data-v-304de258] .weather-header .weather-header__extended-forecast {left:0px; bottom:0px; height:20px;}");

/* 2020 R LEHT | div enne kollast plärakat ja enne navigatsiooniribasid üleval. | R., 31.01.2020. */
GM_addStyle("BODY.tanane-article-view > DIV[id] ~ DIV[style*=\"height: 75px;\"] {height:40px !important; margin-bottom:2px;}");
/* BODY.tanane-article-view > DIV[id] ~ DIV[style*="height"] */

/* above: HEADER.tanane-leht-header
             DIV.tanane-leht-header__overlay */
/* 2020 R LEHT | Suur kollane plärakas "Minu Meedia digipaketiga saad igast värki..." | R., 31.01.2020. */
GM_addStyle("DIV.my-media-campaign-container {margin-bottom:1px; padding:1px;}");

/* 2020 R LEHT | Suure kollase pläraka sisu | R., 31.01.2020. */
GM_addStyle("A.my-media-campaign {display:flex; height:unset; min-height:89px; padding-left:9px; padding-right:9px; padding-top:0px; padding-bottom:0px;}");

/* 2020 R LEHT | Suure kollase pläraka sisu (v2?) | L., 21.03.2020. */
GM_addStyle("DIV.my-media-campaign {height:unset; min-height:88px; padding-top:20px; padding-bottom:20px;}");

/* 2020 R LEHT | Suure kollase pläraka sulgemise nupp | R., 31.01.2020. */
GM_addStyle("DIV.my-media-campaign-container .my-media-close {top:4px; right:34px;}");

/* 2020 R LEHT | Suure kollase pläraka sisukonteiner | R., 31.01.2020. */
GM_addStyle("A.my-media-campaign .content {width:100%;}");

/* 2020 R LEHT | Suure kollase pläraka sisukonteiner (v2?) | L., 21.03.2020. */
GM_addStyle("DIV.my-media-campaign .content {width:100%;}");

/* 2020 R LEHT | Suure kollase pläraka tiitel "| minu meedia" | R., 31.01.2020. */
GM_addStyle("A.my-media-campaign .title {white-space:nowrap;}");

/* 2020 R LEHT | Suure kollase pläraka tekst "| minu meedia digipaketiga..." | R., 31.01.2020. */
GM_addStyle("A.my-media-campaign .description {padding-left:10px; padding-right:10px; text-align:left;}");


/* 2020 R LEHT | Suure kollase pläraka STICKY variant | R., 22.05.2020. */
/* GM_addStyle("DIV.root--section-brading-digipakett[data-v-f8d4cf16] {height:}"); */

/* 2020 R LEHT | Suure kollase pläraka STICKY variant | P., 17.05.2020. */
GM_addStyle("HTML:not(.device-phone) BODY.tanane-article-view.scrolling-down .root--section-brading-digipakett DIV.section-branding-bg[data-v-2f7583f5] {transition:none; top:26px !important; border-radius:0px 0px 5px; background-color:#EBD20E;}");

/* 2020 R LEHT | Suure kollase pläraka STICKY variant | P., 17.05.2020. */
GM_addStyle("A.section-branding__digipakett .section-branding__digipakett-contents[data-v-2f7583f5] {padding-left:0px; padding-right:0px;}");

/* 2020 R LEHT | Suure kollase pläraka STICKY variant | P., 17.05.2020. */
/* This selector appears to have an often-variable [data-v-xxxxxxxx] parameter. */
GM_addStyle("A.section-branding__digipakett-sticky .section-branding__digipakett-contents[data-v-2f7583f5], A.section-branding__digipakett-sticky .section-branding__digipakett-contents[data-v-f8d4cf16] {height:18px; padding-left:0px; padding-right:0px;}");
/* R., 22.05.2020.: +second selector with another data-v-xxxxxxxx number. I might have to being using !important, if this repeats too much. Removed padding-left:0px. Temporarily. */

/* STICKY: "Proovi esimene kuu...", "Edaspidi..." | P., 17.05.2020. */
/* This selector appears to have an often-variable [data-v-xxxxxxxx] parameter. */
GM_addStyle("A.section-branding__digipakett-sticky .section-branding__digipakett-desc[data-v-2f7583f5], A.section-branding__digipakett-sticky .section-branding__digipakett-desc[data-v-f8d4cf16] {background-color:#EBD20E; padding-left:31px; padding-right:10px; font-size:13px; line-height:18px;}");
/* R., 22.05.2020.: Temporarily removed padding-left:0px., then readded, but instead of 10x, added 31px. */

/* STICKY: "Proovi esimene kuu...", "Edaspidi..." | N., 21.05.2020.: +bgcolor. */
GM_addStyle("A.section-branding__digipakett-sticky .section-branding__digipakett-desc > * {display:inline;}");
GM_addStyle("A.section-branding__digipakett-sticky .section-branding__digipakett-desc > STRONG {margin-right:0px; font-weight:600 !important;}"); /* "Proovi esimene kuu..." */

/* [FRONTPAGE / OTHER PAGES] RIGHT bar */
GM_addStyle("SECTION#rightContent {padding-left:5px;}");
/* June 2015: testing — position: absolute; right:203px;
  April 2016: Position: absolute does not wrap the block below */

/* [FRONTPAGE / OTHER PAGES] RIGHT BAR 19.02.2015 */
/* GM_addStyle("SECTION#rightContent {display:block; position:absolute; top:200px; right:0px;}"); */

/* [FRONTPAGE] USERSTYLE 'ABOUT' HOVER | SECTION#rightContent:before | SECTION#rightContent:hover:before */
GM_addStyle("DIV.subscLinkBlock:before, DIV.newsletter-form:after {content:\'Kasutajaskripti info\'; display:inline-block; width:100%; margin:0px; padding:0px; background-color:inherit; color:#0077ee; font-size:x-small; font-family:\'Verdana\',\'sans-serif\',\'Arial\'; text-decoration:underline; text-align:right; height:15px;}");
/* DIV.pmHeaderBar:after | top:12px; right:0px; border:solid 1px black; background-color:Silver; color:#0077ee; height:97px; width:515px; overflow-y:none; border:solid 1px black;
   NAV.pmSubNav:after

Not everywhere: DIV.subscLinkBlock:before
 does not work: SECTION.searchBar:after
       04.2018: Won't work on the site and its major subsites.
    16.08.2019: Fix: Moved apostrophe escape character to before the 
                apostrophe. */

/* enam-vähem töötab.
   DIV.pmHeaderBar:hover:after
   top:12px; right:0px; width:510px; 
   SECTION#rightContent:hover:before */
GM_addStyle("DIV.subscLinkBlock:hover:before, DIV.newsletter-form:hover:after {content:\'\\[Kui kerijanuppu-pidi kerimine osutub võimatuks, saab tekstis allapoole minna klikkides kerimisalale, kasti kerimisriba üles-alla nuppudele, või kasutades osutusseadme scrollerit\. \(Kogetud Firefox versiooniga 39\.0\.3\.\)\\]\\A • See kohalik kasutajaskript muudab GreaseMonkey laiendiga varustatud Firefoxi lehitsejas PMO välimust peale seda kui PMO lehekülg \(leheküljed\) on arvutisse tõmmatud\. Kasutajaskript \(userscript\) asub ainult kasutaja arvutis ja vaid selles Firefoxi profiilis, kuhu skript installitud on\. Tehtud muudatused:\\A\ i\. Külastatud lingid on kõrbekollased: on võimalik näha, mida on viimati loetud\.\\A ii\. Enamiku Postimees Pluss artiklite lingid on punased roosal taustal;\\A iii\. Uues aknas avanevad lingid on sidrunikollased — kasutaja saab valida, kas tirib lingi samale vahekaardile või avab uues aknas;\\A iv\. Väheste PMO alalehtede taust on muudetud tumedamaks, või läbipaistvaks, et oleks võimalik kasutada lehitsejas sätestatud vaikimisi taustavärvi\. Seda siis mõeldes tundlike silmadega kasutajatele\.\\A v\. Artiklite põhitekst on pandud Arial fonti, tehtud väiksemaks ja lauaarvuti ekraanil loetavamaks \(1280x800-pikselise resolutsioonidga\)\.\\A • NB: Ehkki disaini muutmisega on püüeldud omamoodi täiuslikkuse poole, ei ole stiilide kasutamine ise 100% täiuslik, ning on algselt alati mõeldud kasutajastiili looja enda tarvis\. Osa stiile võib kehtida PMO koodi kohta, mis eelnes 2013\.–2014\. aastate vananenud disainile; osa kehtib disainile, mis kaotati PMO-s suuresti 2016\. aastal, kuid mis säilib veel mõnedes PMO alalehtedes\. Ainult viimastes on ka see teade nähtav\. \\A • Kuigi põhimõtteliselt pole see kasutajaskript mõeldud blokeerima reklaame, lähtub sellest tulenev disain NoScript-i ja\/või reklaamiblokeerija olemasolust \(kui see on seatud blokeerima täisdomeene stiilis \\'reklaam\.domeen\.ee\\'\)\. NoScript on Firefoxile mõeldud turvalaiendus, mis blokeerib JavaScripti, sh\. enamiku reklaame, näoraamatu jpt\. domeenid \(sest minu arvuti pole just võimas\)\.\\A \\A Info tõin siia, sest kasutajaskripti kirjeldus skripti \\'\\@description\\' väljas osutus liiga pikaks\.\'; display:block; position:relative; height:125px; margin:0px; padding:0px; padding-left:2px; background-color:inherit; overflow-y:auto; color:black; font-size:x-small; font-family:\'Verdana\',\'sans-serif\',\'Arial\'; text-decoration:none; white-space:pre-wrap; text-align:left;}"); /* border:solid 1px black; */
/* background-color:Silver; #0077ee; border-left-color:black; width was 512px (optimal) */
/* Suuresti töötab, kuid TallinnCity disain erineb Tarbija24 
   küljendusest. 
   Näiteks on TallinnCity topribal ilmateade ja Tarbija24 topribal on 
   autorite kommentaarid. Et siis on alamportaalidele [tuli] vastavalt 
   vajadusele teha eraldi disainid. */
/* Laiuse mõistes töötab järgmistes alamportaalides: 
   TallinnCity, Juhtimine (võib ka laiem olla), Poliitika, Maailm, Sport, 
   Tarbija, ...\\A */
/* TallinnCity: {top:12px; right:0px; width:510px; height:97px;} */
/* EI TÖÖTA: PM esileht, Elu24 (tuleb mõlemal juhul mujale tõsta); 
             Arvamus (veidi juba kohendatud); 
             eestilaul vajab kohendamist; */
/* < SECTION#rightContent:before */
/* 16.08.2019.: Moved the apostrophe escape character in font-family to 
   before the apostrophe.
K.,28.08.2019: Escaped dots inside content. */

GM_addStyle("DIV.subscLinkBlock:hover:before, DIV.newsletter-form:hover:after {display:none;}");
/* K., 28.08.2019: Fixed error by adding a comma between selectors. "Expected end of selector or a user action pseudo-class after pseudo-element but found 'DIV'. Ruleset ignored due to bad selector." */

/* GM_addStyle("DIV.pmHeaderBar:hover:after {}"); */

/* ABOUT HOVER EXAMPLE CODE SNIPPETS */
/* GM_addStyle("SPAN.pmHeaderNavi:after {content:\'\|\ veidi teksti\'; display:inline; color:black;}"); */

/* GM_addStyle("SPAN.pmHeaderNavi:hover:after {color:red;}"); */ /*works */

/* TOP COMMENTS and bulleted lists */
GM_addStyle("SECTION.listSection .item {padding-left:26px; background-position:8px 9px;}"); /* 08.11.2016 */

/* 11.2016 redesign
   new right bar | article links */
GM_addStyle("DIV.pattern-side--right .article-list__image {margin-top:3px;}"); /* T., 10.01.2017
   Sets the image on the same top-level with headline text. */

GM_addStyle("DIV.pattern-side--right .article-list__headline {font-size:90%;}"); /* T., 10.01.2017 */
GM_addStyle("@media only screen and (max-width:1559px) { DIV.pattern-side--right .article-list__headline {font-size:90%;} }");
/* T., 10.01.2017 */
/* Original: 1em (1559px), 1.063em. 90% for word 'ajateenistuskohustusest'.
   Trouble is, though, that the font won't look good, so there is room 
   to play with margins and spacing instead. 
   
   If a top margin is set to the headline, then it requires a 96px left 
   margin. Interestingly, this extends the widths of the right bar to 
   allow good font size, and reduces the width of left content. Looks 
   like a dilemma for me. Ideally, it should be possible to extend the 
   right bar without reducing the width of left content. */

/* LEFT CONTENT */

GM_addStyle("SECTION#leftContent {background-color:transparent;}");

/* LEFT CONTENT 19.02.2015 */
/* GM_addStyle("SECTION#leftContent {display:block; width:auto; margin-right:320px;}"); */

GM_addStyle("SECTION#leftContent > ARTICLE, SECTION#leftContent > DIV {background-color:inherit;}"); /* rgba(255,255,255,0.25) */

/* 11.2016. redesign */
GM_addStyle("DIV.content-wrapper {background-color:inherit;}"); /* +07.01.2017 */

/* 11.2016. redesign{} */
GM_addStyle("MAIN#wrap {border-left:1px solid #B8B8B8;}"); /*07.01.2017 */
/* adds border to better orient eye focus when reading article content.
   This is one of the primary article containers.
As of 05.2017, a container with this ID selector does not seem to exist. */

/* 2017 design update */
GM_addStyle("BODY.body--article MAIN .wrap {background-color:inherit;}");
/* 27.05.2017 */

/* 11.2016 redesign */
GM_addStyle("DIV.article-container, DIV.article-side {background-color:inherit;}"); /* 17.11.2016. */
/* Inheriting the background color is predicated on the default browser 
   background color being Silver or some form of gray between Silver and 
   white, but not white outright. So far applies to articles only. */

/* ARTICLE PADDING: 11.2016 redesign */
GM_addStyle("DIV.article-container {padding-top:0px; padding-bottom:0px;}");
/* 07.01.2017 */

GM_addStyle("@media only screen and (max-width:1559px) { DIV.article-container.flex--equal-width {padding-left:5px;} }"); /* 21.12.2016. */

/* FONT FIX | LEFT CONTENT */
GM_addStyle("SECTION#leftContent > ARTICLE {font-family:\'Arial\',\'sans-serif\'; font-size:10pt; color:black;}");

/* SUBSITE [FRONTPAGE] LINKS and BLURB/LEDE: 11.2016 redesign */
GM_addStyle("DIV.article-list__lead {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\',\'TabacSans\'; font-size:75%;}"); /* P., 22.01.2017 */
/* Font into Arial for better legibility */
/* This part was fixed on R., 16.08.2019.; the mistakes were with 
   escaping the apostrophes, whereby the apostrophe mistakenly preceded 
   the escaping backslash. */

/* 11.2016 redesign | [FRONTPAGE?] | LINKS and BLURB */
GM_addStyle("DIV.content-wrapper--section .article-list__lead {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\',\'TabacSans\'; font-size:84%;}"); /* 18.11.2016 */
/* 84% applies in Windows xp, modern Firefox, and at 100% viewport zoom.
   These two rules could be consolidated. */

/* [FRONTPAGE] IN-IMAGE TITLES / SUBSITE LINKS AS IMAGE INSETS | Ruleset: 18.11.2016 */
GM_addStyle("A.section-name-label {top:1px; left:3px; padding-top:0px; padding-left:3px; padding-right:3px; padding-bottom:1px; font-size:0.7em;}");
/*
padding-left:3px; padding-right:3px; padding-bottom:2px; with font-size:0.75em
padding-top:0px; padding-left:3px; padding-right:3px; padding-bottom:1px; with font-size:0.7em
*/

/* [FRONTPAGE] 11.2016 redesign | TOP links to articles */
GM_addStyle("A:hover > DIV.article-content, A:hover > DIV.article-content * {background-color:transparent !important;}");
/* Line added on 08.01.2017.
   This overrides hover background color for top links, since the original 
   already has good hover properties for some items. */

/* [FRONTPAGE] 11.2016 redesign | TOP links to articles: specifics */
GM_addStyle("DIV.article-content {margin:0px; margin-left:3px; margin-bottom:11px; padding-top:1px; padding-left:3px;}");
/* Line added on 08.01.2017. */

/* 2018/2019 minor redesign */
/* GM_addStyle("DIV.article > DIV.flex {flex:unset;}"); */
/* ^ K., 12.06.2019.: Does not work. */
GM_addStyle("DIV.article > DIV.flex > DIV.flex--equal-width {flex:unset; display:inline-block; width:100%; min-width:240px;}");
/* ^ K., 12.06.2019. 
     P., 16.06.2019.: replaced inline-table with inline-block. */

/* 2018/2019 minor redesign */
/* 2019 R | "SOOVITAME LUGEDA" | "commercial articles" | SISUTURUNDUS */
GM_addStyle("DIV.commercial-articles {background-color:transparent; padding:0px;}");
/* Original background-color: #F8F8F8; */
/* ^ added line on K., 12.06.2019. */
/* K., 28.08.2019. */
/* N., 29.08.2019.: Removed borders and padding from below selector.

border-left:solid 1px maroon; border-right:solid 1px maroon; border-bottom:solid 1px maroon; */

/* 2019 R to 2018 design | "SOOVITAME LUGEDA" top RIGHT side | 
   parem pool | N., 14.11.2019. */
GM_addStyle("DIV.article .structured-content__group.structured-content__group--aside {background-color:inherit; border:solid 1px #707070; margin-top:0px;}");
/* bgcolor original was: #F8F8F8*/

/* 2019 R | "SOOVITAME LUGEDA" | "commercial articles" | SISUTURUNDUS | Superseding selector for right-side | parem | commercial content. */
GM_addStyle("DIV.article ~ DIV.structured-content__group > DIV.commercial-articles.flex {display:inline-block; padding:0px;}");
/* K., 28.08.2019.:(?) +padding.*/

/* 2019 R | "SOOVITAME LUGEDA" | "commercial articles" (inner) | 
APPLIES TO TOP RIGHT section next to article content (picture and all). */
GM_addStyle("DIV.commercial-articles--aside {padding:0px 1px 1px 1px; padding-left:1px;}");
/* ^ K., 12.06.2019. */
/*   N., 14.11.2019.: Set right, bottom, and left paddings to 1px. */

/* 2019 R | "SOOVITAME LUGEDA" | "commercial articles" (inner) */
GM_addStyle("DIV.commercial-articles.commercial-articles--aside {background-color:transparent;}");
/* ^ P., 16.06.2019. */

/* 2019 R to 2018 design | "SOOVITAME LUGEDA" items (insets) | containers for each item | N., 14.11.2019. */
GM_addStyle("DIV.structured-content__group--aside > DIV.commercial-articles.commercial-articles--aside > DIV:not(.block-title) {display:inline-block;}");

/* 2019 R | "SOOVITAME LUGEDA" | PILDID väikeseks (normaalsuurusesse) */
GM_addStyle("DIV.commercial-articles--aside > DIV > ARTICLE.list-article > A.list-article__media > DIV.list-article__image[data-v-0db7a51c] {clear:both; float:left; width:107px; height:60px; padding:0px; margin-right:10px;}");
/* ^ K., 12.06.2019. */

/* 2019 R (on 2018 design) | "SOOVITAME LUGEDA" > "ENIM LOETUD" notice inset. | N., 14.11.2019. */
GM_addStyle("DIV.commercial-articles .list-article__week-top {top:2px; left:2px; background-color:navy; padding-top:1px; padding-bottom:0px; padding-left:6px; padding-right:6px; font-weight:600;}"); /* original positions were at -10px for both. letter-spacing:1px; was considered. */

/* 2019 R | AFTER HEADER BARS STARTS ARTICLE AND TITLE. */
GM_addStyle("DIV.article-top {display:inline-block;}");
/* ^ P., 16.06.2019. */

/* 2019 R | "SOOVITAME LUGEDA" | ARTIKLI LINGI PEALKIRI à la "Persoon" */
GM_addStyle("DIV.list-article__text .flex--align-items-baseline {display:inline;}");
/* ^ K., 16.06.2019. */

/* 2019 R | "SOOVITAME LUGEDA" | ARTIKLI LINGI TEKST */
GM_addStyle("DIV.commercial-articles .list-article__text {overflow:unset; margin-bottom:1px !important;}");
/* ^ P., 16.06.2019. */

/* 2018/2019 minor redesign */
/* 2018/2019 R | SISUTURUNDUS ENNE ARTIKLI SISU */
GM_addStyle("DIV.article ~ DIV.structured-content__group {float:right; width:auto; max-width:221px; margin-top:0px;}");
/*max-width was:300px; K., 28.08.2019: now 221px.*/

/* 2019 R | SISUTURUNDUS | ITEMS before article begin */
GM_addStyle("DIV.commercial-articles .list-article {margin-right:1px; margin-bottom:1px !important; border:solid 1px gray;  background-color:inherit;}");
/* K., 28.08.2019. Later added float:right, but it might have to apply to a superseding selector.
R., 29.08.2019.: +margin-bottom.
N., 14.11.2019.: Added !important to margin-bottom, removed float:left; to help with margins. */

/* 2019 R | SISUTURUNDUS | ITEMS before article begin (superseding selector for right-side commercial articles.) */
GM_addStyle("DIV.article ~ DIV.structured-content__group > DIV.commercial-articles.flex .list-article {margin-right:0px; margin-bottom:1px; height:auto; min-height:149px; width:100%; max-width:300px;}");
/* selector was previously: DIV.root > ARTICLE > */
/* +height:, min-height, width, max-width. */

/* 2019 R | SISUTURUNDUS | tekst */
GM_addStyle("DIV.article ~ DIV.structured-content__group > DIV.commercial-articles > ARTICLE.list-article > .list-article__text {clear:both; padding:0px; overflow:initial; height:auto;}");
/* ^ K., 12.06.2019. */
/* padding:0px 1px; must be set when overflow is hidden.*/

/* 2019 R | SISUTURUNDUS | PILT (container) */
GM_addStyle("DIV.article ~ DIV.structured-content__group > DIV.commercial-articles > ARTICLE.list-article > A.list-article__media {margin-bottom:0px; line-height:0.1em; overflow-x:hidden;}");
/* K., 28.08.2019: +hidden overflow to contain "SISUTURUNDUS" slab. */

/* 2019 R | SISUTURUNDUS | PAREMPOOLNE | PILT (tegelik) | K., 28.08.2019. */
GM_addStyle("DIV.list-article__image[data-v-5fa41a50] {background-repeat:no-repeat !important; background-size:cover !important;}");

/* 2019 R | SISUTURUNDUS | URL after picture with background*/
GM_addStyle("DIV.commercial-articles .list-article__url {height:auto; clear:both;}");
/* ^ K., 12.06.2019. */
/* Remove clear:both after it's not needed. */

/* Might also apply to the right side | parem pool. */
GM_addStyle("DIV.article ~ DIV.structured-content__group > DIV.commercial-articles .list-article__headline {font-size:14px;}")
/* R., 30.08.2019. | font-size was: 1em;*/
/* > ARTICLE.list-article > .list-article__text > .list-article__url */

/* 2019 R | SISUTURUNDUS | "SISUTURUNDUS" inset | K., 28.08.2019. */
GM_addStyle("SPAN.list-article__commercial-tag {top:1px; right:1px; padding:6px 1px;}");

/* 01.2018 / 03.2018 redesign | MOST ARTICLE CONTENT MARGIN | USED AFTER ARTICLE TEXT */
GM_addStyle("DIV.article .article-content, ARTICLE.article .article-content {margin-left:0px; padding-left:0px;}");
/* DIV.article selector deprecated? */
/* 01.09.2018: ARTICLE.article */

/* 01.2018 / 03.2018 redesgn | THIRD-PARTY ARTICLE SOURCE (BBC), probably at end of article. */
GM_addStyle("DIV.article--bbc-russian .bbc-footer {margin-top:-5px;}");
/* -7px: 12px between text base and line and the BBC logos */

/* 01.2018 / 03.2018 redesign | ARTICLE TAGS */
GM_addStyle("UL.article-terms {margin-top:1em;}");

/* 01.2018 / 03.2018 redesign | RELATED COVERAGE */
GM_addStyle("DIV.article__related-coverages {margin-top:1em; border-top:solid 1px gray;}");

/* 01.2018 / 03.2018 redesign | RELATED ARTICLES */
GM_addStyle("DIV.article__related-articles {margin-top:1em; border-top:solid 1px gray;}");

/* 16.03.2018 */
GM_addStyle("DIV.article__related-articles H2.block-title {padding-top:2px;}");

/* [FRONTPAGE] 11.2016 redesign | TOP links with dark bg */
GM_addStyle("BODY A[href*=\"sport.postimees\"]:not([class*=\"sections-menu__link\"]):not(.pm-logo__link):not(.article-btn--facebook):not(.article-btn--twitter) SPAN.article-content__headline {color:#00b398 !important;}");

/* [FRONTPAGE] and elsewhere | 11.2016 redesign | background to specific words. */
GM_addStyle("A[href*=\"okomisjon\"] > DIV.article-content, A[href*=\"okomisjon\"]:visited > DIV.article-content {background:transparent linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 70px, transparent 88px, transparent 100%) repeat scroll 0% 0% !important;}");
/* Line added on 08.01.2017. 
   was: background-color:rgba(0, 0, 0, 0.7) !important; */
GM_addStyle("A[href*=\"okomisjon\"]:hover > DIV.article-content, A[href*=\"okomisjon\"]:visited:hover > DIV.article-content {background:transparent !important; background:linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 70px, transparent 88px, transparent 100%) repeat scroll 0% 0% !important;}");
/* Line added on 08.01.2017.
   was: background-color:rgba(0, 0, 0, 0.8) !important; */

/* 11.2016 redesign | [FRONTPAGE] and elsewhere | specific words links | remove hover color */
GM_addStyle("A[href*=\"okomisjon\"]:hover > DIV.article-content > SPAN, A[href*=\"okomisjon\"]:visited:hover > DIV.article-content > SPAN {background-color:transparent !important;}"); /* 08.01.2017 */

/* 11.2016 redesign | [FRONTPAGE] and elsewhere | specific words links | modified inset for 'currently important' */
GM_addStyle("@media only screen and (max-width:1169px) { UL.pattern-articles-list.pattern-articles-list--type-7 > LI.article-list__item > DIV > A[href*=\"okomisjon\"] + A.section-name-label {top:77px; width:100%; height:52px; max-width:222px; background-color:rgba(0, 0, 0, 0.8) !important;} }");
/* Line added on 08.01.2017
   Turns out, that image widths in most-important sections are dependent 
   on the width of MAIN#wrap, the width of which itself is made dependent 
   on viewport width. */

/* 11.2016 redesign | [FRONTPAGE] specific words links | modified title for article list. Big item. Inset left unaffected. */
GM_addStyle("UL.pattern-articles-list:not(.pattern-articles-list--type-7) > LI.article-list__item:first-child > DIV > A[href*=\"okomisjon\"] > DIV.article-list-content {position:absolute; bottom:8px; width:100%; height:122px; margin-left:3px; padding-left:3px; background-color:rgba(0, 0, 0, 0.8) !important;}");
/* Line added on 08.01.2017 */

/* 11.2016 redesign | [FRONTPAGE] specific words links | modified inset for article list. Smaller item, not the first one. */
GM_addStyle("UL.pattern-articles-list > LI.article-list__item:not(:first-child) > DIV > A[href*=\"okomisjon\"] + A.section-name-label {top:88px; width:100%; height:57px; max-width:203px; background-color:rgba(0, 0, 0, 0.8) !important;}");
/* Line added on 08.01.2017.
   At certain sizes:
 max-width:203px; top:88px; height:57px;
Currently important: max-width:222px; top:77px; height:52px; */

/* 11.2016 redesign | [FRONTPAGE] top links to articles, inner element. */
GM_addStyle("SPAN.article-content__headline {margin-right:1px;}");
/* 08.01.2017 */

/* 11.2016 redesign | [FRONTPAGE] mainline links to articles (type 7) */
GM_addStyle("UL.pattern-articles-list.pattern-articles-list--type-7 .article-list__item .article-list__headline, UL.pattern-articles-list.pattern-articles-list--type-7 .article-list__item:first-child:nth-last-child(4) .article-list__headline {font-size:130%;}");
/* Added 08.01.2017 | Original: 1.5em (24px);
 • 130% computed to 20.8px, applies to 'veokipommiplahvatuses'
 - removed :first-child:nth-last-child(4) from .article-list__item; 
 + readded later.
Turns out, that :first-child and others superseded the more general 
earlier selector.
   Conditions: xpsp3, Gecko39, 100% */
GM_addStyle("@media only screen and (max-width:1559px) { UL.pattern-articles-list.pattern-articles-list--type-7 .article-list__item .article-list__headline, UL.pattern-articles-list.pattern-articles-list--type-7 .article-list__item:first-child:nth-last-child(4) .article-list__headline {font-size:130%;} }");
/* Added 08.01.2017. | Original: 1.375em (22px)
 - removed :first-child:nth-last-child(4) from .article-list__item; 
 + readded later.
Conditions: xpsp3, Gecko39, 100% */

/* 11.2016 redesign | [FRONTPAGE] mainline links to articles (type 12) | P., 22.01.2017 */
GM_addStyle("UL.pattern-articles-list.pattern-articles-list--type-12 .article-list__item:first-child:nth-last-child(2) ~ .article-list__item .article-list__headline {font-size:128%;}");
/* for word 'heategevusorganisatsioonis' */
/* At 1559+ pix, the containing big div gets much thinner relative to 
overall viewport width. */

GM_addStyle("H1.custom-block__title {width:auto; max-width:1000px; min-width:320px;}");

/* NATIVE VIDEO hover. This is in part about Flashblock. | 31.10.2016. */
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-preview {display:block; z-index:0;}");
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked:hover .jw-preview {z-index:1;}");
/* This displays the video background image for those, who prefer to have 
   Flash blocked. On hover, the play buttons should appear. 
   Compatible with Flashblock.
   02.11.2016: Set z-index to 0 from 1 after below messaging was implemented. */

/* NATIVE VIDEO messaging. */
/* The condition so far is, that flash is blocked. Hence HTML &gt; BODY etc. */
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title {width:unset; background-color:transparent; background:linear-gradient(to bottom, #000 0px, transparent 24px, transparent 100%) repeat scroll 0% 0%;}"); /* 02.11.2016 */
/* was: 18px (but not original) */

/* NATIVE VIDEO MSG: Ruleset added on 02.11.2016. */
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-primary, HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-secondary {min-height:unset; margin-top:0px; padding-top:0px; padding-bottom:0px; padding-left:0px; color:Silver; font-weight:normal;}");
/* jw video message color set to Silver.
08.11.2016: Added selector '-secondary', margin-top to both. */

/* NATIVE VIDEO MSG: Ruleset added on 02.11.2016. */
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-primary:after {display:inline; content:\'\.\ Kliki pildil video Play-nupu näitamiseks\.\'; padding-top:2px; color:white; font-weight:700;}");
/* Eestikeelne teavitus, et pildi klikkimisel jõuab videoni.
   Tekst on allpool seatud väikseks, et see foto vaatamist ei segaks.

   Option to display as block, but this requires removing the dot and 
   the space from content. Appended video message color is white. */

GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-secondary:before {display:block; content:\'\(Teavituse peitmiseks nihuta kursor pildi kohale\.\)\'; padding-top:2px;}");
/* 08.11.2016: Additional message moved into newline. Note display:block. */
/* K., 28.08.2019: Escaped dots in content. A Fix? */

GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-reset {font-size:75%;}"); /* 02.11.2016 */
/* This reduces font size to xx-small to avoid text interfering with the image.  was:70% */

/* 01.2018/03.2018 redesign | NATIVE VIDEO | 16.04.2018 */
GM_addStyle("DIV.jw-controls-backdrop {background-image:none; transition:none;}");
/* Removes one of the background gradients */

GM_addStyle("DIV.jw-state-idle .jw-controls {background:transparent;}");
GM_addStyle("DIV.jw-button-color {color:rgba(255,255,255,0.43);}");

/* GM_addStyle("[id=\"v-vfuiuku82x\"] .jw-error-msg {}"); */

/* This appears to be from the original CSS code. So bad syntax here.
[id=\"v-vfuiuku82x\"].jw-error{position:relative;background:#000;overflow:hidden;position:relative}[id=\"v-vfuiuku82x\"] .jw-error-msg{top:50%;left:50%;position:absolute;align-items:center;display:flex;transform:translate(-50%,-50%)}[id="v-vfuiuku82x"] .jw-title{color:#FFF;position:static}[id="v-vfuiuku82x"] .jw-title-primary,[id="v-vfuiuku82x"] .jw-title-secondary{font:600 14px/1.35 Arial,Helvetica,sans-serif}[id="v-vfuiuku82x"] .jw-title-secondary{font-weight:400}
*/

/* GM_addStyle("SECTION#leftContent > ARTICLE > DIV > P, SECTION#leftContent > ARTICLE > SECTION P {background-color:rgba(255,255,255,0.5); color:black;}"); */

/* FRONTPAGE: ADDITIONAL TEXT for TITLE | 28.10.2016 */
GM_addStyle("P.frontAdditional {margin-left:1px; margin-right:1px;}");

/* FRONTPAGE: RELATED ARTICLE | 28.10.2016 */
GM_addStyle("A.frontRelatedHeading {margin-left:0px;}");

/* FRONTPAGE: SUUR LUGU KOLME LISANUPUGA | 28.10.2016 */
GM_addStyle("SECTION.frontType8 .articleRight .frontArticle {margin-bottom:1px;}"); 
GM_addStyle("SECTION.frontType8 .articleRight .frontArticle:last-child {margin-bottom:0px;}");
/* The above sets margins to less than the default.
   The alternative is to set margin-top:1px except for :first-child. */

GM_addStyle("SECTION.frontType8 .articleRight .frontIcons {margin-right:9px;}");
/* 28.10.2016: for 1024x768px, but works on others. */

/* 11.2016 redesign. [FRONTPAGE] and elsewhere | one bar */
GM_addStyle("DIV.dfp-ad--center {background-color:inherit;}");
/* T., 10.01.2017. | Makes bgcolor less intrusive. */

GM_addStyle("LI.list__ad .dfp-ad:not(:empty) {border-left:1px solid #E5E5E5; border-right:1px solid #E5E5E5;}");
/* T., 10.01.2017. | Adds borders left and right. */

/* ARTICLE */
GM_addStyle("ARTICLE {padding-left:0px;}");

/* 2019 (R) | ARTICLE/SISU (LOTS OF CONTENT) */
GM_addStyle("ARTICLE.root {min-width:unset;}");

/* Late-2016 new design. */
GM_addStyle("BODY.body--article ARTICLE {background-color:inherit;}");
/* L., 03.12.2016: Set background-color. If browser background color is 
   different (Silver), then it's set to that. */

/* 2018 / 2019 R | ARTICLE / ARTIKKEL
 | ARTICLE NAV before article and photo: TOPIC > LINK */
GM_addStyle("DIV.breadcrumb--article {padding-right:0px; background-color:inherit;}"); /* 10.09.2019. bgcolor was white. */

GM_addStyle("SECTION.articlePhotos {padding-left:0px;}");

/* 11.2016 redesign. GALLERY | Line added on 08.01.2017 */
GM_addStyle("DIV.article-gallery__container > DIV.spacer {display:none;}");
/* This should remove the spacer div from above and below the gallery. */

/* 11.2016 redesign | PHOTOS (ONE PHOTO?) */
GM_addStyle("FIGURE.article-media-figure {min-height:unset;}"); /* 07.01.2017
| Removes superfluous whitespace from below photos */

/* 11.2016 redesign | PHOTO: BIG */
GM_addStyle("DIV.fullscreen-picture {background-color:black;}");
/* T., 10.01.2017. */

GM_addStyle("SECTION.articleContent {line-height:1.4em;}");

GM_addStyle("SECTION.articleContent > P {margin-left:1px; margin-right:1px;}");

GM_addStyle("DIV.articleContentImage full {max-width:648px; padding:0px;}");
/* Are there issues with a space here and a dot below between selector 
   and 'full'? */

GM_addStyle("DIV.articleContentImage.full {clear:both;}");

GM_addStyle("DIV.articleContentImage IMG {border:0px;}");

GM_addStyle("DIV.articleContentImage .articleContentImageText {padding-left:1px; padding-top:1px; color:black;}");
/* 17.11.2016: Added color after 11.2016 redesign. */

/* EMBEDDED YouTube videos | 11.2016 redesign */
GM_addStyle("IFRAME[src*=\"youtube\.com\"] {width:100%; height:360px;}");
/* 18.01.2017 */
/* K., 28.08.2019: in src*= replaced single quotes with double quotes for better syntax. */

GM_addStyle("HTML > BODY.site-center-aligned #player {display:inline;}");
/* 18.01.2017
 • experimental */

/* 2018/2019 R | TOP HEADER (contains DATE, weather widget, TOP LINKS ) */
GM_addStyle("HEADER.site-header .site-header__top {height:auto; min-height:45px;}");

/* 01.2018 redesign | TOP LINKS CONTAINER (SMALL TYPE, WITH SEARCH) */
GM_addStyle("HEADER.site-header .menu-items.menu-items--top {display:inline-flex; flex-flow:wrap;}");
/* 10.09.2019.: replaced inline-block with inline-flex, added flex-flow. */

/* 2019 R / 2020 R | HEADER | new design (kuupäev, ilm, "Vihje | Klienditugi, Tellimine, Reklaam") | N., 19.03.2020. */
GM_addStyle("HEADER.layout--1030 {min-width:unset;}");

/* 01.2018 redesign | TOP LINKS CONTAINER (SMALL TYPE) */
GM_addStyle("HEADER.site-header .site-header__top:last-child {display:inline-flex}");
/* OTSINGU LUUP | LOOKING GLASS | SEARCH ICON | removed the following properties: position:absolute; top:0px; right:0px; */

/* 2018R | OTSING | TULEMUSED | LINK | 19.03.2020. */
GM_addStyle("SPAN.search-result__headline A {transition:none; color:black;}");

/* 2018R | OTSING | TULEMUSED | LEHE/SEKTSIOONI NIMI | 19.03.2020. */
GM_addStyle("SPAN.search-result__section-label A {color:black;}");

/* 2018R | OTSING | TULEMUSED | KUUPÄEV/DATE | 19.03.2020. */
GM_addStyle("SPAN.search-result__date {color:black;}");

/* 2018R | OTSING | TULEMUSED | AUTOR/AUTHOR | 19.03.2020. */
GM_addStyle("DIV.search-result__authors {color:#222;}");

/* 01.2018 redesign */
GM_addStyle("HEADER.site-header > DIV.layout DIV.icons.flex--align-items-center {display:inline-flex;}");
/* ^ This affects TOP LINKS (KLIENDITUGI | VIHJA | TELLI LEHT etc.)
10.09.2019.: Removed the following properties: position:absolute; top:0px; right:0px; */

/* 01.2018 redesign | header gradient separator */
GM_addStyle("DIV.header-logo__bottom-gradient.gradient-separator--after {width:auto; max-width:1000px;}");

/* 2019/2020 R | (SÕBRANNA) SUBHEADER after blue bar | white bar container (originally) | "Suhted & seks", "Mida vanemad", "Ema ja laps" jne. | N., 19.03.2020. */
/* GM_addStyle(""); */

/* 2019/2020 R | (SÕBRANNA) SUBHEADER after blue bar | white bar (originally) | "Suhted & seks", "Mida vanemad", "Ema ja laps" jne. | N., 19.03.2020. */
GM_addStyle("NAV.submenu-container DIV.menu-items .menu-item DIV.menu-items .menu-item {border-right:solid 1px navy; padding-left:5px; padding-top:0px; padding-bottom:0px; padding-right:5px;}");

/* 2020 R | N., 19.03.2020. | (SÕBRANNA) WHITE SUBHEADER after blue bar. | FIRST ITEM */
GM_addStyle("NAV.submenu-container DIV.menu-items.menu-items--sub > DIV:first-child .menu-item.menu-item--active {padding-left:0px; color:#99CCFF; font-weight:500; letter-spacing:1px;}");

/* GM_addStyle("NAV.submenu-container DIV.menu-items.menu-items--sub > DIV:first-child A.menu-item.menu-item--active::before {display:inline; content:\'\\>\';}");*/ /* does not seem to work. */

/* 2020 R | N., 19.03.2020. | (SÕBRANNA) WHITE SUBHEADER after blue bar. | LAST ITEM */
GM_addStyle("NAV.submenu-container DIV.menu-items.menu-items--sub > DIV:last-child .menu-item {border-right:none;}");

/* 2020 R | N., 19.03.2020. | Reklaam (Postimehe enda oma; seda peita ei tohi.) */
GM_addStyle("HTML:not(.device-phone) DIV.section-branding-container:not(:empty) {margin-top:0px;}");
/* margin-top can be 1px, too. */

/* 2020 R | N., 19.03.2020. | Reklaam (Postimehe enda oma; seda peita ei tohi.) */
GM_addStyle("A.section-branding-bg {padding-top:2px; padding-right:0px; padding-left:2px; padding-bottom:0px;}");
/* 21.03.2020: padding-bottom from 2px to 0px; */

/* 01.2018 redesign | EMBEDDED VIMEO VIDEOS | 16.03.2018 */
/* Note, that the !important rule is used in order to avoid 
   JavaScript-based CSS changes in the element tag itself. */
GM_addStyle("DIV.iframeResponsiveContainer {position:relative !important; clear:both !important; width:100% !important; margin-bottom:1em !important; padding-top:0px !important;}");

GM_addStyle("DIV.article-body__item--htmlElement > DIV.iframeResponsiveContainer > IFRAME {position:relative !important; width:100% !important; height:360px !important; margin-top:0px !important; background-color:#222;}"); /* 16.03.2018 */
/* width is original.
   border:solid 1px #a0a0a0; */

/* These may relate to the vimeo iframe, which can be specified in a 
   separate file, given, that it does not seem to affect the IFRAME. */
GM_addStyle("IFRAME HTML > BODY > DIV#player.player.player-normal {height:360px !important;}"); /* 16.03.2018 */

/* Relates to the vimeo iframe, which can be specified in a separate 
   file. */
GM_addStyle("IFRAME HTML > BODY > DIV#player.player.player-normal .vp-player-layout, BODY > DIV.player .vp-player-layout {left:0px !important; top:0px !important; height:360px !important;}");
/* 16.03.2018 */

/* 01.2018 redesign | ARTICLE */
GM_addStyle("ARTICLE.article, DIV.article {background-color:inherit; padding-left:0px; padding-right:0px;}");
/* 02.03.2018: +selector
   01.09.2018: +padding */

/* 01.2018 redesign | 06.03.2018 | ARTICLE */
GM_addStyle("DIV.article {padding-bottom:0px;}");

/* 2020R: ARTICLE | N., 09.04.2020. | Fixes a layout issue when right-side promos, apparently floated right, are not cleared. */
GM_addStyle("ARTICLE.root ~ ARTICLE.root.js-single-article {clear:right;}");
/* Also works on ARTICLE.root, but I'd decided to add .js-single-article as a qualifier. */
/* GM_addStyle("DIV.breadcrumb.breadcrumb--article ~ DIV.article {clear:right;}"); */
/* Although this works, it's not specific enough. */

GM_addStyle("DIV.article-loader .load-three-bounce:before {content:\'Mõtleme veel\.\.\.\'; word-wrap:normal; white-space:nowrap;}");
GM_addStyle("DIV.article-loader .load-three-bounce .load-child {display:none; animation:none; transform:none;}");
GM_addStyle("DIV.article-loader .load-three-bounce .bounce1 {display:none; animation-delay:unset; animation:none; transform:none;}");
GM_addStyle("DIV.article-loader .load-three-bounce .bounce1 {animation-delay:unset; animation:none; transform:none;}");

/* 2018 design | N., 14.11.2019. | */
GM_addStyle("DIV.dfp-ad--horizontal {background-color:inherit;}");

/* 2019 R | AUDIO ARTICLE UI (teaster) | 29.08.2019. */
GM_addStyle("DIV.article-body__item.article-body__item--audio-teaser {margin-bottom:1em;}"); /* margin-bottom: 1em or 15px */

GM_addStyle("DIV.audio-teaser {background-color:inherit; border:solid 1px #F8F8F8;}"); /* 29.08.2019. */

/* 2019 R | AUDIO UI (actual) */
GM_addStyle("DIV.audio-playlist .audio-player {background-color:inherit; border:solid 1px #F8F8F8; padding-bottom:15px;}");

/* 2019 R | after SISUTURUNDUS | after AUDIO ARTICLE UI | This should set the container width to inline in order to not make it extend across SISUTURUNDUS to that's now positioned the right. */
GM_addStyle("DIV.dfp-ad ~ DIV.article {display:inline;}");
/* 28.08.2019. */
/* ad selector in full: class="dfp-ad dfp-ad--horizontal dfp-ad--add-gradient" */

/* 2019 | after SISUTURUNDUS | after AUDIO ARTICLE UI |
   This one allows inset marketing to be set as absolute. */
GM_addStyle("DIV.dfp-ad ~ DIV.article > DIV.flex {position:relative;}");

/* MOST ARTILCE CONTENT BELOW HEADER */
GM_addStyle("@media only screen and (max-width:1039px) { DIV.article {padding-left:0px; padding-right:0px;} }");
/* 19.08.2018 */

/* 2019 R: LEHT: ARTICLE container | P., 03.11.2019. */
GM_addStyle("DIV.tanane-article {background-color:inherit; border:1px solid #F8F8F8;}");

/* 2019 R: LEHT: ARTICLE container, incl. ARTICLE TEXT | P., 03.11.2019. */
GM_addStyle("DIV.tanane-article .article-body__item--htmlElement {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\'; font-size:13px; line-height:1.6em; margin-bottom:1em; color:black;}");
/* E., 04.11.2019.: +margin-bottom 
   L., 09.11.2019.: +black color */

/* 2020 R: SÕBRANNA / sobranna */
GM_addStyle("DIV.article-body__item.article-body__item--htmlElement {margin-bottom:10px;}");

/* 2019 R: LEHT: ARTICLE paragraphs (blurb?) | P., 03.11.2019. */
GM_addStyle("DIV.tanane-article .article-body H2 {margin:0px; margin-top:0.6em; margin-bottom:0.3em;}");

/* 2019 R: LEHT: PAYWALL | MAKSUMÜÜR | P., 03.11.2019. */
GM_addStyle("DIV.paywall-wrapper {border:1px solid #F8F8F8; border-radius:8px; margin-top:15px; padding-top:15px; padding-bottom:16px;}");

/* 2019 R: LEHT: ARTICLE paragraphs | P., 03.11.2019. */
GM_addStyle("DIV.tanane-article P {margin:0px;}");

/* 01.02.2018. redesign
  [ARTICLE] kuupäev */
GM_addStyle("DIV.article .article__publish-date {color:black;}");

/* 01.2018 redesign | [ARTICLE] PICTURE */
GM_addStyle("DIV.article .figure {font-size:0.9em; line-height:0.7em;}");

/* 01.2018 redesign | [ARTICLE] PICTURE CAPTION AUTHOR */
GM_addStyle("DIV.article .figure .figure__caption--name {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\'; color:black;}");
/* 16.08.2019.: Fixed the code by finally escaping the apostrophes that 
   surround the font names. */

/* 01.2018/03.2018 redesign: | [ARTICLE] PICTURE CAPTION */
GM_addStyle("DIV.article .figure .figure__caption--title {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\'; color:black;}");
/* 16.08.2019.: Fixed the code by finally escaping the apostrophes that 
   surround the font names. */

/* APPARENTLY ARTICLE TEXT */

/* 01.2018. redesign | ARTICLE TEXT */
GM_addStyle("ARTICLE.article .article-body, DIV.article .article-body {padding-top:0px; padding-bottom:0px;}"); /* T., 23.01.2018. */
/* 06.03.2018: +second selector; moved ruleset up. */

/* 01.2018 redesign. | ARTICLE TEXT */
GM_addStyle("ARTICLE.article P, DIV.article .article-body__item--htmlElement {color:black;}"); /*
19.01.2018: +font-family, font-size, line-height.
02.03.2018: +selector after comma
06.03.2018: Moved font-family out. The below ruleset should govern it
        • Removed: padding-left:2px; padding-right:2px; (full-screen)
*/

/* 01.2018 / 03.2018 redesign | [ARTICLE] LEDE */
GM_addStyle("DIV.article .article-body__item--lead {font-weight:600; font-size:0.9em;}");

/* 01.2018/03.2018. redesign | MOST ARTICLE TEXT EXCEPT LEDE */
GM_addStyle("DIV.article .article-body__item:not(.article-body__item--lead) {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\'; color:black; font-size:80%; line-height:1.6em; overflow:visible;}");
/* 06.03.2018: Moved line-height here.
   01.04.2018: +overflow
   16.08.2019: Escaped font apostrophes (finally). */

GM_addStyle("DIV.article .article-body--teaser {max-height:unset;}");
/* 01.04.2018 */

/* 01.2018. redesign | MOST ARTICLE TEXT EXCEPT lede */
GM_addStyle("ARTICLE.article .article-body__item--htmlElement P, DIV.article .article-body__item--htmlElement P {margin-top:0px; margin-left:0px; margin-right:5px;}");
/* 06.03.2018: +second selector */
/* Other selectors:
.article .article-body__item--htmlElement BLOCKQUOTE, .article .article-body__item--htmlElement OL, .article .article-body__item--htmlElement UL

K., 28.08.2019: +margin-right. */

/* 01.2018. redesign. This allows to see TEASER text better. | 16.01.2018 */
GM_addStyle("ARTICLE.article .article-body--teaser {max-height:unset; border-bottom:solid 1px black;}");

/* 01.2018. redesign | 16.01.2018 | [ARTICLE] TEASER */
GM_addStyle("ARTICLE.article.article .article-body--teaser:after, DIV.article .article-body--teaser:after {display:none;}");
/* 16.03.2018: +second selector */

/* 2018 redesgin | 24.02.2019 | [ARTICLE] teaser suggested articles
   "Minu Meedia digipaketiga..." sisu algab */
GM_addStyle("SECTION.suggested-premiums[data-v-d8639286] {padding-top:0px; padding-bottom:0px; border:solid 1px white; background-color:inherit;}"); /* was:#F7F7F7 */

GM_addStyle("SECTION.suggested-premiums[data-v-d8639286] .suggested-premiums__container {background-color:inherit;}"); /* was:#F7F7F7 */

GM_addStyle("SECTION.suggested-premiums[data-v-d8639286] .suggested-premiums__articles {padding:0px;}");

/* "Minu Meedia digipaketiga..." */
GM_addStyle("SECTION.suggested-premiums .title[data-v-d8639286] {margin-bottom:3px;}");

/* 2019 R: LEHT: teaser | P., 03.11.2019. */
GM_addStyle("DIV.tanane-article .article-body--teaser::after {background:unset;}");

/* 01.2018. redesign | 16.01.2018 */
/* GM_addStyle("ARTICLE.article .article-body {overflow-y:scroll;}"); */
/* Comment out, if not needed. */

GM_addStyle("P[align=JUSTIFY] {text-align:left;}");

/* 2018 redesign | [ARTICLE] INSETS (SUGGESTED STORIES) */
GM_addStyle("DIV.article-body__item--cxense-recommendations {float:right;}");
/* 17.05.2018. */

/* 2018 redesign | [ARTICLE] INSET contents */
GM_addStyle("DIV.articles-recommendations {float:unset; margin-top:0px; margin-right:0px; margin-left:0px; width:240px;}"); /* 17.05.2018. */

/* GENERAL
   01.2018. redesign | 01.03.2018 */
GM_addStyle("B, STRONG, ARTICLE.article .article-body__item--htmlElement STRONG, DIV.article .article-body__item--htmlElement STRONG {font-weight:600;}");
/* Original fong-weight: bolder
02.03.2018: +DIV.article selector after comma (#3)
06.03.2018: ARTICLE.article selector (#2); Original: 500 */

/* 01.2018 redesign, 03.2018 redesign */
/* GM_addStyle("DIV.article .article-body {padding-top:0px;}"); */

/* ARTICLE TEXT: 11.2016. redesign. */
GM_addStyle("SECTION.article-body H1, SECTION.article-body H2, SECTION.article-body H3, SECTION.article-body H4, SECTION.article-body H5, SECTION.article-body H6, SECTION.article-body OL, SECTION.article-body P, SECTION.article-body UL {margin:0px 0px;}");
/* 07.01.2017 | removes superfluous space in margins */

/* 11.2016 redesign */
GM_addStyle("@media only screen and (max-width:1559px) { SECTION.article-body H1, SECTION.article-body H2, SECTION.article-body H3, SECTION.article-body H4, SECTION.article-body H5, SECTION.article-body H6, SECTION.article-body OL, SECTION.article-body P {margin:0px 0px;} }");
/* Line added on 07.01.2017. Removes superfluous space in margins.

   From a relatively original selector to cover all bases:
   GM_addStyle("SECTION.article-body.article-body--lead P {}"); 
   
   07.01.2017: Turns out, that top-bottom margins have been set for all 
   items of article-body both in general/mainline CSS _and_ for specific 
   screen sizes of @media (1559px and so on); which means, that for the 
   one objective of setting margins to 0px, the rulesets had to be 
   superseded twice.
   
   Interestingly, the ruleset below still supersedes the two above 
   rulesets. */

/* 01.2018. redesign | ARTICLE LEDE */
GM_addStyle("ARTICLE.article .article-body__item--lead {font-weight:600;}");

/* 01.2018. redesign */
GM_addStyle("ARTICLE.article .article-body__item--htmlElement P {margin-bottom:0px;}");

/* 11.2016 redesign | ARTICLE LEDE */
GM_addStyle("SECTION.article-body.article-body--lead P {font-size:1em;}");
/* T., 10.01.2017 */

/* GM_addStyle("@media only screen and (max-width:1559px) { SECTION.article-body.article-body--lead P {font-size:1em;} }"); */
/* Line aded on 10.01.2017. While the above line seems to work without 
   interference by superseding even the max-width rule well above, then 
   it's still commented out to see, if that above line works like that 
   for certain. */

/* 11.2016 redesign | ARTICLE BODY TEXT, excluding lede */
GM_addStyle("SECTION.article-body:not([class*=\"article-body--lead\"]) P {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\',\'TabacSans\'; font-size:80%;}");
/* Line added on 17.11.2016.
   Original: Primary font was TabacSans, but I've relegated it to the 
   end of the list, preferring Arial and Helvetica over this.
   07.01.2017: +margin-bottom.
K., 28.08.2019: Added \" to article-body--lead in :not. */

/* 11.2016 redesign. Line added on 08.01.2017. */
GM_addStyle("SECTION.article-body:not([class*=\"article-body--lead\"]) P:not(:last-child) {margin-bottom:1em;}"); 
/* Margin-bottom is separate in order to keep font and size above, and to use 
   :not(:last-chid). */
/* K., 28.08.2019: Added \" to article-body--lead in :not. */

/* IMAGE CAPTION: 11.2016 redesign. | 17.11.2016 */
GM_addStyle("FIGCAPTION.article-media-figure__caption {color:black;}");

/* OTSE | LIVEBLOG */
GM_addStyle("HTML > BODY > DIV.content {padding-left:0px;}");

/* 11.2016 redesign */
GM_addStyle("SECTION.article-body .twitter-tweet, SECTION.article-body IFRAME {margin:0px auto !important;}"); /* 07.01.2017 */

GM_addStyle("IFRAME[id*=\"liveblog\"] HTML > BODY > .content {border-left:solid 2px Blue;}");

GM_addStyle("DIV.liveblog {background-color:black; color:Silver;}");

GM_addStyle("DIV.liveblog .panel {background-color:black; color:Silver;}");

GM_addStyle("DIV.liveblog .introduction .articleDate {color:Silver;}");

GM_addStyle("DIV.liveblog H2.event-header {color:Silver;}");

GM_addStyle("DIV.liveblog .dropdown {color:Silver;}");

GM_addStyle("DIV.liveblog .event-list {padding-left:5px;}");

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .feed-header, LIVEBLOG.liveblogEmbedContainer.narrower .feed-header {color:Silver;}");

GM_addStyle("DIV.liveblog .event .time {background-color:black; color:#e0e0e0;}");

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event .time:not(.sectionFontColor) {color:#cff;}");

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event {color:#888888;}");

GM_addStyle("DIV.liveblog .event:not(.key) {border-left-color:#707070;}");

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event .bullet {background-color:inherit;}");

GM_addStyle("DIV.liveblog .event .content {color:Silver; margin-left:30px; margin-right:1px; border-bottom-color:#525252;}");

/* 11.2016 redesign: font and font size. | Added 07.01.2017. */
GM_addStyle("DIV.liveblog .event .content P {font-family:\'Arial\',\'Roboto\',\'sans-serif\'; font-size:89%; line-height:1.5em;}");
/* 77%-89% works with Arial. 95% works with Roboto, but I'm keeping it
   at 89% to allow people with only Roboto not to have too small text.
   DIV.article-container.flex--equal-width top selector does not work.
L., 21.03.2020.: +line-height, original:28px;*/

GM_addStyle("DIV.liveblog .event .content DIV.ng-binding {padding-right:4px;}"); /* 08.11.2016 */

/* LIVEBLOG ITEM TITLE*/
GM_addStyle("DIV.liveblog .event .content H3 {color:white; margin-top:0px; line-height:23px;}");
/* 21.03.2020.: +margin-top (original:10px); +line-height, original:27px;*/

/* 11.2016 redesign font size (perhaps) */
GM_addStyle("DIV.article-container.flex--equal-width DIV.liveblog .event .content H3 {font-size:95%;}"); /* 07.01.2017 */

GM_addStyle("DIV.liveblog .event .content P > STRONG {color:white;}");

GM_addStyle("DIV.liveblog .event .content BLOCKQUOTE {background-color:black; border:dashed 1px gray;}"); /* 07.11.2016 */

GM_addStyle("DIV.liveblog .event .content EM {color:#cdcdcd;}");
/* 07.11.2016 */

/* FACEBOOK EMBED IN LIVEBLOG | 06.11.2016 */
GM_addStyle("IFRAME[src*=\"facebook.com\"] {background-color:Silver;}");
/* assuming dark bgcolor */
/* K., 28.08.2019: Replaced single quotes with double quotes. */

/* ARTICLE EMBED IN LIVEBLOG | L., 21.03.2020. */
GM_addStyle("DIV.liveblog .articleContainerEmbed .smallRow .article-container, DIV.liveblog .articleContainerEmbed .smallColumn .article-container {transition:none; background-color:black}");
/* background-color:transparent yields to some parent element's white 
bgcolor. */

/* ARTICLE EMBED IN LIVEBLOG | Looks like image width | 28.12.2018 */
GM_addStyle("DIV.liveblog .articleContainerEmbed .smallColumn .article-container .image-pad {width:100%;}");

/* ARTICLE EMBED IMAGE IN LIVEBLOG | 28.12.2018 */
GM_addStyle("DIV.liveblog .articleContainerEmbed .smallColumn .image {background-size:cover;}");

/* ARTICLE EMBED LINK IN LIVEBLOG | L., 21.03.2020. */
GM_addStyle("DIV.liveblog .articleContainerEmbed .article-story__headline {color:DarkSlateBlue;}");

/* YOUTUBE PLAYER FIT TO WIDTH */

GM_addStyle("OBJECT#videoPlayerContent {width:100%;}"); /* Works. Also consider SECTION > OBJECT */

/* 01.2018 redesign | BIG WEATHER WEATHER ITEM CONTAINER */
GM_addStyle("SECTION.weather-header-container[data-v-24ca66aa] {overflow-x:auto;}");

/* PAYWALLED */
GM_addStyle("DIV.paywall {clear:both; display:block;}");

/* PAYWALLED ARTICLE TEASER FADE removal */
GM_addStyle("SECTION.articleTeaser[data-fade-text]::before {background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 95%, #FFF 100%) repeat scroll 0% 0%;}");
/* This reduces the white linear gradient overlap with white text.
   Introduced on 07.11.2016. for just 'arvamus', but then on 08.11.2016
   moved it here, as it turned out, that it applied better globally. */

/* 2019 R | PAYWALL | "Edasi lugemiseks" | N., 29.08.2019. */
GM_addStyle("DIV.paywall-wrapper[data-v-38c7044a] .paywall__title, DIV.paywall-wrapper .paywall__title {font-size:15px; font-weight:normal;}");
/* Keep in mind, that [data-v-38c7044a] might also change at any time. */

/* 2019 R | PAYWALL | Soodushinnaga pakkumised väikses kirjas suure musta nupu all. | N., 29.08.2019. */
GM_addStyle("DIV.paywall-wrapper[data-v-38c7044a] .paywall__text--gray, DIV.paywall-wrapper .paywall__text--gray {color:black;}");
/* The smaller the text, the bigger the contrast. */

/* 2019 R | PAYWALL RECOMMENDATIONS | MAKSUMÜÜRI SOOVITUSED | N., 29.08.2019. */
GM_addStyle("SECTION.suggested-premiums[data-v-131720ae], DIV.flex--equal-width > SECTION.suggested-premiums {background-color:inherit; border:solid 1px #F8F8F8; margin-left:2%; margin-right:2%; margin-bottom:20px;}");
/* background was white, with no border. */
/* Keep in mind, that [data-v-131720ae] might also change at any time. */
/* DIV.article > DIV.flex > DIV.flex--equal-width > SECTION.suggested-premiums */

/* 2019 R | PAYWALL RECOMMENDATIONS | MAKSUMÜÜRI SOOVITUSED | TITLE
   N., 29.08.2019. */
GM_addStyle("DIV.suggested-premiums__articles H2.title[data-v-131720ae], DIV.suggested-premiums__articles > H2.title {margin-top:7px; margin-bottom:10px; font-size:15px; font-weight:500;}");

/* Line added on 08.01.2017 | ARTICLE SHARE BUTTONS at article bottom*/
GM_addStyle("DIV.article-share-btns {margin-top:0px; padding-top:10px; border-top:1px solid #B8B8B8;}");
/* This moves space rom margin to padding an adds a border to visually
   separate article content. */

/* 2020 R (on 2018 design) | FRONTPAGE & AFTER ALL ARTICLE TEXT - "Liitu uudiskirjaga" | P., 05.04.2020. */
GM_addStyle("DIV.iframe-container.iframe-container--postimees {height:142px; padding-top:1px; padding-right:1px; padding-bottom:1px; padding-left:1px;}");
/* height was: 155px; */

/* 2019 R (on 2018 design) | FRONTPAGE & AFTER ALL ARTICLE TEXT - "Liitu uudiskirjaga" | N., 14.11.2019. */
GM_addStyle("DIV.content.postimees-subscribe-iframe {background-color:MidnightBlue; color:#ccc;}");
/* bgcolor was: #4DADE9; now: MidnightBlue. color was white. */

/* 2020 R (on 2018 design) | FRONTPAGE & AFTER ALL ARTICLE TEXT - "Liitu uudiskirjaga" | P., 05.04.2020. | CONTENTS: announcement */
GM_addStyle("DIV.column-left[data-v-9f839cc6], DIV.content.postimees-subscribe-iframe > DIV.column-left {color:Silver;}");

/* 2020 R (on 2018 design) | FRONTPAGE & AFTER ALL ARTICLE TEXT - "Liitu uudiskirjaga" | P., 05.04.2020. | CONTENTS: terms checkbox text */
GM_addStyle("[data-v-9f839cc6] FORM.form DIV.terms__links,  FORM.form DIV.terms__links {color:Silver}");

/* 2020 R | FRONTPAGE | "FA20 EESTI MEISTRIVÕISTLUSED" carousel navigation buttons previous | P., 05.04.2020. */
GM_addStyle("SECTION.flash-block .carousel-nav .carousel-nav__button.carousel-nav__button-prev {left:0px;}");

/* 2020 R | FRONTPAGE | "FA20 EESTI MEISTRIVÕISTLUSED" carousel navigation buttons next | P., 05.04.2020. */
GM_addStyle("SECTION.flash-block .carousel-nav .carousel-nav__button.carousel-nav__button-next {right:0px; transform:none;}");

/* 2020 R | FRONTPAGE | "FA20 EESTI MEISTRIVÕISTLUSED" carousel items | 
P., 05.04.2020.*/
GM_addStyle("DIV.flash-block__slide {margin-right:1px;}");

/* 2020 R | FRONTPAGE | "kuula" carousel navigation buttons next | P., 05.04.2020. */
GM_addStyle("SECTION.carousel:not(.carousel--in-new-theme):not(.device-phone) .carousel-nav__button-prev[data-v-1f59d013], SECTION.carousel:not(.carousel--in-new-theme):not(.device-phone) .carousel-nav__button-prev {margin-left:0px;}");

/* 2020 R | FRONTPAGE | "kuula" carousel navigation buttons next | P., 05.04.2020. */
GM_addStyle("SECTION.carousel:not(.carousel--in-new-theme):not(.device-phone) .carousel-nav__button-next[data-v-1f59d013], SECTION.carousel:not(.carousel--in-new-theme):not(.device-phone) .carousel-nav__button-next {margin-right:0px;}");

/* 2020 R | FRONTPAGE | "kuula" carousel container | P., 05.04.2020. */
GM_addStyle("SECTION.carousel[data-v-1f59d013], SECTION.carousel {background-color:inherit; border:solid 1px white; padding-left:1px; padding-bottom:5px;}");

/* 2020 R | FRONTPAGE | "kuula" carousel subcontainer | P., 05.04.2020. */
GM_addStyle("DIV.VueCarousel.structured-content__block {margin-bottom:0px;}");

/* 2020 R | FRONTPAGE | "kuula" carousel items container | P., 05.04.2020. */
/* GM_addStyle("DIV.VueCarousel-inner {transform:none !important; transition:none !important;}"); */
/* Doesn't seem to work very well. */

/* 2020 R | FRONTPAGE | "kuula" carousel items | P., 05.04.2020. */
GM_addStyle("DIV.carousel__slide[data-v-1f59d013], DIV.carousel__slide {margin-right:1px;}");

/* ARTICLE LINKS BELOW */
GM_addStyle("@media only screen and (max-width:1023px) { .frontBlock.frontBlock.frontType13 .frontLead, .frontBlock.frontBlock.frontType13 .frontRelated, .frontBlock.frontBlock.frontType13 .frontText, .frontBlock.frontType11 .frontArticle .frontAdditional, .frontBlock.frontType11 .frontArticle .frontRelated, .frontBlock.frontType11 .frontText, .frontBlock.frontType12 .frontArticle .frontAdditional, .frontBlock.frontType12 .frontArticle .frontLead, .frontBlock.frontType12 .frontArticle .frontRelated, .frontBlock.frontType12 .frontArticle .frontText, .frontBlock.frontType16 .frontAdditional, .frontBlock.frontType2 .articleRight .frontText, .frontBlock.frontType2 .frontAdditional, .frontBlock.frontType3 .frontAdditional, .frontBlock.frontType3 .frontLead, .frontBlock.frontType3 .frontRelated, .frontBlock.frontType3 .frontText, .frontBlock.frontType4 .articleRight .frontQuote .frontLead, .frontBlock.frontType4 .articleRight .frontQuote .frontRelated, .frontBlock.frontType4.frontType10 .articleLeft .frontQuote .frontLead, .frontBlock.frontType4.frontType10 .articleLeft .frontQuote .frontRelated, .frontBlock.frontType4.frontType10 .articleLeft .frontQuote .frontText, .frontBlock.frontType6 .frontArticle .frontAdditional, .frontBlock.frontType6 .frontLead, .frontBlock.frontType6 .frontRelated, .frontBlock.frontType6 .frontText, .frontBlock.frontType7 .frontArticle .frontAdditional, .frontBlock.frontType7 .frontLead, .frontBlock.frontType7 .frontRelated, .frontBlock.frontType7 .frontText, .frontBlock.frontType8 .frontAdditional, .frontBlock.gameFriik, .frontQuote .articleText .frontText {display:block;} }");

/* 11.2016 redesign | RELATED STORIES | Line added 08.01.2017. */
GM_addStyle("DIV.related-fluid-list .related-fluid-list__item .article-list__headline {font-size:109%;}");
/*  original: 1.375em */
/*  08.01.2017.: This can be set to lower even, as normal in-box font 
size for 'käsipallikoondislased' is 109%.
T., 10.01.2017: First set to 115%, because 'jalgpallirevolutsionäär'
touched the next box. Then to 109%, when it turned out, that as the last 
item in the carousel list, the last letter of that long a word wasn't visible. */

/* COMMENT ANCHOR */
GM_addStyle("DIV#comments {padding-top:11px;}");

/* 11.2016 redesign with 02.2017 upstream changes | Line added T., 21.02.2017 */
GM_addStyle("DIV.flex--equal-width > DIV#comments {margin-top:-25px;}");
/* Removes large negative margin that would place top comments out of view. */

GM_addStyle("@media only screen and (max-width:1024px) { DIV#comments .commentSortOptionsContainer {height:37px; margin-top:4px;} DIV#comments .commentSortOptionsContainer:hover {background:linear-gradient(to bottom, Silver, transparent 100%);} }");
/* to right, yellow, transparent 50%, transparent 100% */

/* COMMENT THUMBS
   11.2016 redesign with 02.2017 upstream changes | Line added T. 21.02.2017 */
GM_addStyle("SPAN.comment-thumb--up {background-color:green;}");
GM_addStyle("SPAN.comment-thumb--down {background-color:maroon;}");
/* border-bottom:medium solid maroon */

/* 2019 R: LEHT | Comment report link | 02.01.2020. */
GM_addStyle("ARTICLE.tanane-article.comments-view .article-comment__report {color:MidnightBlue; font-size:16px;}");

/* 2019 R: LEHT | Comment date | 02.01.2020. */
GM_addStyle("ARTICLE.tanane-article.comments-view .article-comment-author__date {color:black;}");

/* COMMENT TEXT
   11.2016 redesign, 2017 spring design update | Line added 27.05.2017. */
GM_addStyle("DIV.article-comment-content {font-family:\'Arial\',\'Hevetica\',\'Helv\',\'sans-serif\',\'TabacSans\'; font-size:80%; line-height:1.6em;}");
/* 16.08.2019.: Fixed the code by moving the apostrophe escape backslash
   to the before the apostrophe. */

/* 2019 R [leht]: COMMENT TEXT FONT SIZE */
GM_addStyle("ARTICLE.tanane-article.comments-view .article-comment-content {font-size:13px; line-height:1.6em;}");
/* L., 26.10.2019. */

/* 2019 R [leht]: COMMENT RATINGS */
GM_addStyle("SPAN.reacting__reaction-count[data-v-3da6488c], SPAN.reacting__reaction-count[data-v-3bbacb58], SPAN.reacting__reaction-count {color:black; font-size:16px;}");
/* L., 26.10.2019. */

/* 2019 R [leht]: COMMENT RATINGS | 02.01.2020. */
GM_addStyle("SPAN.reacting__reactions:hover .reacting__reaction .reacting__reaction-count[data-v-3bbacb58] {display:inline-block; transition:none; transform:none; animation:none;}");

/* 11.2016 redesign | IMPORTANT STORIES | Line added on K., 10.05.2017. */
GM_addStyle("SECTION.article-editors {background-color:inherit;}");

/* KOOMIKS | 11.2016-06.2017 redesign | Line added on R., 09.06.2017. */
GM_addStyle("DIV.comics-items .comic-item .comic-img {width:100%; max-width:unset;}");

/* 22.02.2018 | 2018 redesign */
GM_addStyle("DIV.comics-block .comics-items .comics-item__img {width:100%;}");

/* FOOTER Ads */
GM_addStyle("DIV.layout.allepal-barter > IFRAME {width:100% !important; max-width:1000px; min-width:320px;}"); /* 10.02.2018 */
GM_addStyle("DIV.allepal-container {width:100%; min-width:320px; max-width:1000px;}"); /* 10.02.2018 */

/* FOOTER */
GM_addStyle("DIV.usefulLinks {margin-left:0px; margin-right:0px; padding-left:0px; width:auto;}");

/* 2020R: FOOTER container */
GM_addStyle("FOOTER.site-footer.layout {padding-top:0px; padding-left:1px; padding-right:0px;}");

/* 2020R: FOOTER: (Päevatoimetaja & kontaktid) | N., 09.04.2020. */
GM_addStyle("DIV.site-footer__top {padding-top:10px; padding-bottom:15px;}");

/* 01.2018 redesign | FOOTER BOTTOM LINKS */
GM_addStyle("DIV.site-footer__bottom A {padding-top:0.5em; padding-bottom:0.5em; padding-left:5px; padding-right:5px;}");

/* 2020R: FOOTER FOTTOM LINKS | to be applied on mobile; */
GM_addStyle("DIV.site-footer__top-group > P > A.section-font-color, A.section-font-color.site-footer__top-link {color:#191970; word-wrap:break-word;}");

/* ENTIRE SCREEN / GALLERY */
GM_addStyle("DIV.gImageView:hover DIV.gImageInfo {bottom:-88px;}");
GM_addStyle("DIV.gImageInfo {bottom:-88px; height:105px; padding-top:0px;}");
GM_addStyle("DIV.gImageInfo:hover {bottom:0px !important;}");
/* height:105px; bottom:-88px;
   height:125px; bottom:-108px;
   height:147px; padding-top: original/unset; bottom:-125px;
   height:142px; padding-top:0px; bottom:-125px; */

/* ENTIRE SCREEN / GALLERY: Down arrow */
GM_addStyle("SPAN.hideInfoBar {float:left; margin-top:-5px; margin-left:0px; margin-right:16px;}");
GM_addStyle("SPAN.gTitle {float:left; margin-right:16px;}");

/* ENTIRE SCREEN / FULLSCREEN / GALLERY | 11.2016 REDESIGN */
GM_addStyle("DIV.fotorama__caption {line-height:1.2em;}"); /* R., 30.12.2016. */

/* GALLERY SPINNER */
GM_addStyle("DIV.fotorama__spinner, DIV.fotorama__wrap--css3, DIV.fotorama__spinner > DIV > DIV {animation:none !important; transform:none !important;}");

GM_addStyle("DIV.fotorama__spinner > DIV > DIV {display:none !important;}");

/* .fotorama__spinner */

GM_addStyle("DIV.fotorama__spinner > DIV:before {content:\'Oota veic\.\.\.\'; display:inline-block; color:Silver;}");

GM_addStyle("DIV.fotorama__caption::before {background:transparent; display:none;}"); /* R., 30.12.2016. */
/* This removes the big gradient from behind the image caption. */

GM_addStyle("DIV.fotorama .fotorama__caption__wrap {padding-left:1px; padding-bottom:0px;}");

/* GALLERY: IMAGE COUNT background */
GM_addStyle("DIV.fotorama .fotorama__caption__wrap .fotorama__image__count {background:linear-gradient(to right, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0.8) 10px, transparent 50px);}"); /* 30.12.2016 */

/* GALLERY */
GM_addStyle("DIV.fotorama.fotorama__style-override .fotorama__caption__wrap .fotorama__image__caption__separator {margin:0px 7px;}");
/* 05.01.2017. Applies to margin-left and right. */

/* CAPTION and AUTHOR BACKGROUNDS. | Added on R., 30.12.2016. */
GM_addStyle("SPAN.fotorama__image__caption, SPAN.fotorama__image__author {background:linear-gradient(180deg, transparent 0px, rgba(0, 0, 0, 0.8) 70%) repeat scroll 0% 0%;}");
/* DIV.fotorama__caption__wrap > SPAN */
/* Older selector: SPAN[class*=fotorama__image__]:not([class=fotorama__image__count]) */
/* ^ works, btw. */
/* 05.01.2017: Left bg gradient for image caption and author only. */

/* Image description font size | 30.12.2016 */
GM_addStyle("DIV.fotorama .fotorama__caption__wrap .fotorama__image__caption, DIV.fotorama.fotorama__style-override .fotorama__caption__wrap .fotorama__image__caption {font-size:83%; line-height:unset; font-weight:500;}");
/* 05.01.2017: +style override selector
 • font-size:105% is currently equivalent to authorname. Keeping the current value, because some captions can be longer. */

/* avoid on hover */
GM_addStyle("DIV.fotorama .fotorama__caption__wrap .fotorama__image__caption:hover {visibility:hidden;}"); /* 30.12.2016 */

/* PLEIER | 2018 | background */
GM_addStyle("HTML[lang=et] > BODY > DIV.desktop > SECTION > DIV.header ~ DIV.tv-schedule.schedule ~ DIV.background ~ DIV.wrap {background-color:black;}");
/* &gt; DIV.flex from the end after DIV.wrap */

/* PLEIER: Namespace does not appear to work. */
/* GM_addStyle("@namespace pleier url(https://pleier.postimees.ee);"); */

/* RIGHT|PAREM: (2018 redesign) */
GM_addStyle("ASIDE.layout--right {margin-left:1px;}");

/* R2019 */
GM_addStyle("DIV.structured-content__group.structured-content__group--regular.flex#section-81 > ASIDE.layout--right.flex.flex--direction-column {display:inline-flex;}");
/* 17.06.2019 - this fixes the rightside stuff extending across the frontpage. */

/* R2019 in-article aside ad */
GM_addStyle("ASIDE.layout--right.flex.flex--direction-column {margin-left:1px; display:inline-table; max-width:300px;}");

GM_addStyle("DIV.flex--equal-width ~ DIV.article > DIV.flex > ASIDE.layout--right.flex.flex--direction-column {flex:unset; display:inline-block; float:right; width:auto; min-width:240px; max-width:344px; height:auto; border:solid 1px black;}");
/* Must be part of the 2018 design, OR part of the in-article aside ad stuff. Problem is, that this selector does not apply to actual articles. */

/* 2019 R | SISUTURUNDUS ARTIKLI SEES | ARTICLE INSET MARKETING |
   K., 28.08.2019. */
GM_addStyle("DIV.dfp-ad ~ DIV.article > DIV.flex > DIV.flex--equal-width ~ ASIDE.layout--right.flex.flex--direction-column {display:block; z-index:5; position:absolute; top:-84px; right:-220px; max-width:219px; max-height:209px; margin-top:0px; border:solid 5px navy; border-radius:5px; overflow-x:hidden; overflow-y:auto;}");
/* AFTER AUDIO | This one follows the ad, and then is set AFTER the
   audio thing.
   DO NOT SET {top: x px;} under any circumstances, or it will move the 
   absolutely-positioned block to the very top of the page. — Therefore,
   Use margin-top instead.
   
Previously: right:unset; display:inline-block; margin-top:-20px;

Before R., 30.08.2019: top:-154px; right:-6px; max-width:235px; max-height:310px. This probably applies to empty content marketing insets.

T., 03.09.2019: +border-radius to make an empty one a circle (this property enables round borders).

K., 06.11.2019.: Right -220px set to 0px (temporarily for testing because of a layout error.

Turns out, that there's two of these right columns
*/
GM_addStyle("DIV.dfp-ad ~ DIV.article ~ DIV.dfp-ad ~ DIV.article > DIV.flex > DIV.flex--equal-width ~ ASIDE.layout--right.flex.flex--direction-column {display:block; z-index:5; position:absolute; top:0px; right:0px; max-width:219px; max-height:209px; margin-top:0px; border:solid 5px navy; border-radius:5px; overflow-x:hidden; overflow-y:auto;}");
/* 11.11.2019.: Same as above, but better.*/

/* 2020 R | SISUTURUNDUS JÄRGMISE ARTIKLI SEES | TEISE ARTIKLI SEES | N., 19.03.2020. */
GM_addStyle("ARTICLE ~ ARTICLE > DIV.dfp-ad ~ DIV.article > DIV.flex > DIV.flex--equal-width ~ ASIDE.layout--right.flex.flex--direction-column {right:0px; border-color:firebrick;}");
/* This fixes an issue in scrolling following articles, where the layout no longer balances the negative right position with new content. */

/* 2020 R | SISUTURUNDUS INSET | RIGHT | PAREM | container above title | K., 15.04.2020. */
GM_addStyle("ASIDE.layout--right > *:not(:empty) {margin-top:0px;}");

/* 2020 R | SISUTURUNDUS INSET | RIGHT | PAREM | container above title | N., 21.05.2020. */
GM_addStyle("DIV.dfp-ad--center .dfp-ad__ad {display:inline;}");

/* 2019 R | SISUTURUNDUS INSET | "SISUTURUNDUS" title | R., 30.09.2019. */
GM_addStyle("DIV.dfp-ad ~ DIV.article > DIV.flex > DIV.flex--equal-width ~ ASIDE.layout--right.flex.flex--direction-column .block-title {margin-top:2px; margin-bottom:1px; font-weight:600; line-height:24px;}");
/* N., 21.05.2020., 15:33.: +font-weight:was:700; +line-height 24px (orig:31px) */

/* 2019 R | SISUTURUNDUS INSET | R., 30.09.2019. | link text container |
coma = comarketing? */
GM_addStyle("DIV.coma-aside .list-article__text {padding:0px; line-height:1em;}");
/* N., 21.06.2020.: +line-height. */

/* 2019 R | SISUTURUNDUS INSET | R., 30.09.2019. | link text container |
coma = content marketing */
GM_addStyle("DIV.coma-aside .list-article__headline {line-height:1.4em;}");

/* 2019 R | SISUTURUNDUS INSET | R., 30.09.2019. | link SPAN inside A */
GM_addStyle("DIV.structured-content__block--list .list-article__headline {font-size:14px;}");
GM_addStyle("HTML:not(.tvnet) DIV.aside--coma .list-article__headline {font-size:14px; line-height:1.2em;}"); /* N., 21.05.2020. */

/* "SOOVITAME LUGEDA" (päris artiklid) */
GM_addStyle("SECTION.articles-recommendations {float:right; margin:2px 1px 10px 17px; min-height:210px;}"); /* 01.09.2019. */
/* margin: top right bottom left (applies also to padding). */

/*"SOOVITAME LUGEDA" title | 01.09.2019*/
GM_addStyle("SECTION.articles-recommendations .block-title {margin-bottom:1px; text-align:right;}");

/* SOOVITAME LUGEDA inner container */
GM_addStyle("SECTION.articles-recommendations > SECTION.articles-list.articles-list__articles-3 {border:solid 1px #F0F0F0;}"); /* 01.09.2019. */

/* SOOVITAME lugeda individual items | 01.09.2019. */
GM_addStyle("SECTION.articles-recommendations .structured-content__block .list-article {padding-bottom:0px; border-bottom:none;}");
/* T., 03.09.2019: removed border-bottom. */

/* SOOVITAME lugeda individual items (first one) | 01.09.2019. */
GM_addStyle("SECTION.articles-recommendations .structured-content__block--list .list-article + .list-article {margin-top:0px;}"); /* 01.09.2019. */

/* SOOVITAME lugeda (päris artiklid) | PILT | T., 03.09.2019. */
GM_addStyle("SECTION.articles-recommendations .structured-content__block .list-article__media {margin-top:19px; margin-right:4px;}");

/* SOOVITAME lugeda (päris artiklid) | rubriik/facebooki jagamised ühel real | T., 03.09.2019. */
GM_addStyle("SECTION.articles-recommendations DIV.list-article__text .flex--align-items-baseline {display:flex; line-height:1.0em;}")

/* SOOVITAME lugeda (päris artiklid) | rubriigi nimi | T., 03.09.2019. */
GM_addStyle("SECTION.articles-recommendations .structured-content__block .list-article__section-label.slab {margin-bottom:0px; line-height:1em; margin-top:4px;}");
/* position:absolute; top:4px; does not work, because it requires the 
facebook rating.*/

/* SOOVITAME lugeda (päris artiklid) | facebook shares | T., 03.09.2019. */
GM_addStyle("DIV.list-article__engagement {line-height:1em; color:navy;}");

/* 2019 R | ARTICE BIG QUOTE | P., 01.09.2019. */
GM_addStyle("DIV.article blockquote:not(.instagram-media-registered):not(.instagram-media):not(.twitter-tweet) {font-size:19px; padding-top:0px; padding-bottom:0px;}");
GM_addStyle("DIV.article blockquote:not(.instagram-media-registered):not(.instagram-media):not(.twitter-tweet)::before {font-size:65px; top:-6px; left:15px;}");
/* :before font-size was 123px; top was -6; left was -0 (or vice 
    versa).
intermediate: top:18px; left:15px; */

/* RIGHT|PAREM: UUSIM/LOETUM SPINNER (2018 redesign) */
GM_addStyle("ASIDE.layout--right > DIV[class*=\"aside--hint\"] ~ DIV[class*=\"aside--\"] *[eager] {position:relative;}"); /* 02.06.2018 */

/* RIGHT: UUSIM/LOETUM SPINNER | 2018 redesign */
GM_addStyle("ASIDE.layout--right > DIV[class*=\"aside--hint\"] ~ DIV[class*=\"aside--\"] > SECTION > DIV.flex.flex--align-items-center.flex--justify-content-center {border:solid 1px maroon;}");

/* RIGHT (SPINNER?) | 2018 redesign */
GM_addStyle("ASIDE.layout--right > DIV[class*=\"aside--hint\"] ~ DIV[class*=\"aside--\"] > SECTION > DIV.flex.flex--align-items-center.flex--justify-content-center > * {display:block;}"); /* SECTION.tab-menu ~ */
/* 02.06.2018 */

/* RIGHT: "VIIMASED UUDISED" / "LOETUMAD" | K., 08.04.2020. */
GM_addStyle("ARTICLE.list-article--news-list {padding-bottom:0px;}");

/* RIGHT: UUSIM/LOETUM SPINNER | 2018 redesign */
GM_addStyle("ASIDE.layout--right > DIV[class*=\"aside--latest\"] > SECTION >  DIV.flex.flex--align-items-center.flex--justify-content-center:before, ASIDE.layout--right > DIV[class*=\"aside--hint\"] ~ DIV[class*=\"aside--\"] > SECTION >  DIV.flex.flex--align-items-center.flex--justify-content-center:before {content:\'SPINNER\'; display:block; position:absolute; top:61px; left:auto; right:auto; height:50px; width:85px; color:red; font-weight:bold; border:solid 4px red;}");
/* SECTION.tab-menu ~ */ /* 02.06.2018 */
/* 
<DIV class="flex flex--align-items-center flex--justify-content-center" 
data-v-349b7835="" style="height: 400px;"></div>

07.10.2018: removed: > *[eager]

new div:
<div class="flex flex--align-items-center flex--justify-content-center" data-v-d50f6dfc="" data-v-985ef986="" style="height: 400px;"></div>

*/

/* kultuur.postimees.ee */
/*
div#wrap {background:linear-gradient(to right, rgb(192, 192, 192) 200px, transparent 650px, transparent 100%);}
*/

/* 
GM_addStyle("A:before {content:\'... \'; font-weight:bold !important; color:purple !important; background:none; border-right:solid 1px purple !important; margin-right:4px; max-height:12px;}");

GM_addStyle("A:visited: + A:before {content:\'vis\' !important; font-weight:bold !important; color:purple !important; background:none; border-right:solid 1px purple !important;}");
*/

/* border-left: solid 5px purple !important; padding-left:3px !important; */

/*
GM_addStyle("div#player > object {height:361px;}");
GM_addStyle("div#player:after {content:\'Stretching is fill.\'; display:block; border:solid 1px navy; font-family:\'Verdana\'; font-size:small; color:Silver; text-align:right;}"); */

/* The standard 16:9 height for 640px width is 360px. Because the BBC 
logo's squares were not exactly square, then I added one pixel for the 
height */

/*
document.styleSheets[0].insertRule('
', 0);
*/

/* INFOGRAM SPINNER
   20.10.2018 */
GM_addStyle("DIV#embed-loader {animation:none; transform:none; display:none;}"); /* [style*=\"infogram\-loader\"] */

GM_addStyle("DIV#embed-loader > DIV > * {animation:none; transform:none; display:none;}"); /* [style*=\"infogram\-loader\"] */

GM_addStyle("DIV#embed-loader:before {content:\'oota sa\.\.\.\'; color:black; display:block;}");

/* VIMEO SPINNER */
GM_addStyle("div.vp-spin SVG {display:none !important;}");
GM_addStyle("div.vp-spin:before {content:\'Vimeo spinner\.\.\.\'; display:block; margin:auto; font-size:10pt; font-family:\'Arial\';}");
/* end of file. */
