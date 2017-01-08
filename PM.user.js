// ==UserScript==
// @name          	PM.leht
// @namespace     PMO_GM
// @description	See kasutajaskript muudab PMO välimuse kasutajasõbralikumaks. Kaubamärgid kuuluvad nende vastavatele omanikele.
// @updateURL https://github.com/juneyourtech/GM_PM/raw/master/PM.user.js
// @version 0.8.6.9.6
// @include       *.postimees.ee/*
// @include       http://www.60pluss.ee/*
// @include       http://www.e24.ee/*
// @include       http://www.naine24.ee/*
// @include       http://www.tallinnapostimees.ee/*
// @include       http://www.tallinncity.ee/*
// @include       http://www.tarbija24.ee/*
// @include       http://www.tartupostimees.ee/*
// @include       http://www.parnupostimees.ee/*
// @grant		GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
//__80_________________________________________________________________________

//TEXT COLOR
GM_addStyle("HTML > BODY {color:black;}") //Old: rgb(58, 64, 65) 
//background-color:Silver

//Applies to late-2016 new design.
GM_addStyle("HTML, BODY.body--article {overflow-x:auto; min-width:480px;}")
//L., 17.12.2016: +overflow-x and min-width.

//ARVAMUS et al. BG
GM_addStyle("div#bgOverlay {position:fixed;}")

//LINK MOUSEOVER BGCOLOR
GM_addStyle("A:hover, A:hover strong, A:hover span, A:hover * {background-color:Lavender !important;}")

//NEW WINDOW LINK (MOUSEOVER) BGCOLOR 'cept ilmajaam //updated 28.10.2016
GM_addStyle("A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]):not([href*=\"prognoz.ee\"]), A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]):not([href*=\"prognoz.ee\"]) STRONG, A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]):not([href*=\"prognoz.ee\"]) SPAN, A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]):not([href*=\"prognoz.ee\"]) * {background:linear-gradient(to right, yellow, transparent 50%, transparent 100%);}")
//1st transparent 2.2 em //was: to bottom
/* For the most part, the yellow colour has been instrumental in seeing well in 
   advance the fact, that a link is set to open in a new window. OTOH, I only 
   wanted the background to be unset for the weather element, but couldn't get 
   it right and didn't have any direct need when the userstyle was only in 
   offline use. The exclusion was finally achieved on 28.10.2016. The W3C spec 
   is not very specific enough about what is possible with the :not pseudo. 
   • 11.12.2016: +prognoz.ee. */

//New window links to ILMAJAAM //28.10.2016
GM_addStyle("A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"][href*=\"prognoz.ee\"], A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"][href*=\"prognoz.ee\"] STRONG, A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"][href*=\"prognoz.ee\"] SPAN, A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"][href*=\"prognoz.ee\"] * {border-bottom:solid 1px yellow;}")
//11.12.2016: +prognoz.ee.

/* This is the hover one:
GM_addStyle("A[TARGET=\"_blank\"]:hover, A[TARGET=\"_blank\"]:hover STRONG, A[TARGET=\"_blank\"]:hover SPAN, A[TARGET=\"_blank\"]:hover * {background:linear-gradient(to right, yellow, transparent 50%, transparent 100%);}")
*/

//GM_addStyle("A[TARGET=\"_blank\"]:hover, A[TARGET=\"_blank\"]:hover strong, A[TARGET=\"_blank\"]:hover span, A[TARGET=\"_blank\"]:hover * {background-color:yellow !important;}") //

GM_addStyle("A:hover, A:hover > H1#sectionHeader {border-bottom:solid 1px #99CCFF !important; margin-bottom:-1px;}") //background-color:Lavender !important;

//hover over bigger-story links below article, but before comments
GM_addStyle("A.blockArticle:hover > H1.frontHeading {margin-bottom:14px;}") //08.11.2016

//link mouseover bgcolor EXCEPTIONS (for BIG STORY items)
GM_addStyle("ARTICLE.frontSuperArt > A:hover, ARTICLE.frontSuperArt > A:hover STRONG, ARTICLE.frontSuperArt > A:hover SPAN, ARTICLE.frontSuperArt > A:hover * {background-color:inherit !important;}")

//
GM_addStyle("A > H1#sectionHeader {background-color:inherit; border:solid 1px white;}") //

//IN-ARTICLE LINK COLOR
GM_addStyle("HTML > BODY .article .articleContent a, BODY.section-81 .article .articleContent a {color:blue;}") //body.section-123 body.section-2283 //works

//VISITED LINKS
/* GM_addStyle("BODY {background-color:black !important;}") */ //works
GM_addStyle("*:visited:not([class*=sections-menu__link]), A:visited:not([class*=sections-menu__link]), A:visited:not([class*=sections-menu__link]) strong, A:visited:not([class*=sections-menu__link]) span, A:visited:not([class*=sections-menu__link]) * {font-weight:400 !important; color:DarkGoldenrod !important; background:none; background-color:SandyBrown !important; text-decoration:underline !important; border:solid 5px DarkGoldenRod !important;}")
/* DarkGoldernrod - this works in most PM editions; PM blue for #22ace3

   What doesn't work: 
font-style:italic,oblique (Removed on 21.11.2016); 
font-weight:400; background-color (does it sometimes actually work?);
text-decoration:underline 
text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue !important;

21.11.2016: Added :not([class*=sections-menu__link]).
+, :not([class*=header--container__bg]), but does not work.
Let's see how it works. */

//ARTICLE VISITED LINKS
GM_addStyle("A:visited > H1#sectionHeader {background-color:white !important;}")

//VISITED LINKS EXCEPTIONS FOR BIG STORY
GM_addStyle("ARTICLE.frontSuperArt > A:visited, ARTICLE.frontSuperArt > A:visited STRONG, ARTICLE.frontSuperArt > A:visited SPAN, ARTICLE.frontSuperArt > A:visited * {background-color:inherit !important; color:white !important; text-decoration:underline !important; font-weight:normal !important;}")

//HOVER VISITED LINKS
GM_addStyle("*:visited:hover, A:visited:hover, A:visited:hover strong, A:visited:hover span, A:visited:hover * {background:none; background-color:Cornsilk !important;}")

//FRONTPAGE: HOVER VISITED LINKS exceptions
//link mouseover bgcolor EXCEPTIONS (for BIG STORY items)

//FRONTPAGE: BIG STORY visited links EXCEPTIONS (for BIG STORY items)
GM_addStyle("ARTICLE.frontSuperArt > A:visited:hover, ARTICLE.frontSuperArt > A:visited:hover STRONG, ARTICLE.frontSuperArt > A:visited:hover SPAN {background:inherit !important;}")

//VISITED SECTIONHEADER
GM_addStyle("A:visited:hover > H1#sectionHeader {background:none; background-color:Cornsilk !important;}")

//PM PLUSS LINKS
GM_addStyle("A[href*=\"pluss\.\"] {font-weight:300 !important; color:#e94022 !important; background:none; background-color:LavenderBlush !important; border:solid 1px #e94022 !important;}") // A[href*=pluss] strong, A[href*=pluss] span, A[href*=pluss] *

//PM 60PLUSS LINKS
GM_addStyle("BODY A[href*=\"www.60pluss\"], BODY A[href*=\"www.60pluss\"] strong, BODY A[href*=\"www.60pluss\"] span, BODY A[href*=\"www.60pluss\"] * {color:brown !important; background-color:inherit !important; border:none !important;}") //Works

//PM 60PLUSS HOVER
GM_addStyle("BODY A[href*=\"www.60pluss\"]:hover, BODY A[href*=\"www.60pluss\"] strong:hover, BODY A[href*=\"www.60pluss\"] span:hover, BODY A[href*=\"www.60pluss\"] *:hover {background-color:rgb(255, 253, 236) !important;}") //Works

//PM SPORT links
GM_addStyle("BODY A[href*=\"sport.postimees\"]:not([class*=sections-menu__link]), BODY A[href*=\"sport.postimees\"]:not([class*=sections-menu__link]) strong, BODY A[href*=\"sport.postimees\"]:not([class*=sections-menu__link]) span, BODY A[href*=\"sport.postimees\"]:not([class*=sections-menu__link]) * {color:#005749 !important; border:none !important;}")
//original: 0, 142, 121 (#008e79); brightness 43%: 0,110,93 (#006e5d); brightness 34%: #005749
//21.11.2016: Added :not([class*=sections-menu__link])

//PM SPORT HOVER
GM_addStyle("BODY A[href*=\"sport.postimees\"]:hover, BODY A[href*=\"sport.postimees\"] strong:hover, BODY A[href*=\"sport.postimees\"] span:hover, BODY A[href*=\"sport.postimees\"] *:hover {color:#008e79 !important;}") //Works

//PM SPORT VISITED
GM_addStyle("BODY A[href*=\"sport.postimees\"]:visited, BODY A[href*=\"sport.postimees\"]:visited strong, BODY A[href*=\"sport.postimees\"]:visited strong, BODY A[href*=\"sport.postimees\"]:visited span, BODY A[href*=\"sport.postimees\"]:visited * {color:#00b398 !important;}") // #008502.
//Turns out, that A:visited must be; hover applies to _all_ elements, though.

//"REPORTER.EE VIDEOLOOD"
GM_addStyle("SECTION.frontType11 .frontArticle {margin-bottom:0px; margin-top:1px;}") //was: margin-bottom:14px; used selector: ARTICLE.frontArticle 
GM_addStyle("SECTION.frontType11:first-child {margin-top:-1px;}")

GM_addStyle("SPAN.frontIcons {margin-top:0px; margin-bottom:0px;}") //was: margin-bottom:14px
GM_addStyle("H1.frontHeading {margin-left:0px; margin-right:0px;}")

//Reporter.ee videote lingid väiksemaks
GM_addStyle("SECTION.frontType7 A[href*=reporter-ee] .frontHeading, SECTION.frontBlock.frontType12 A[href*=reporter-ee] .frontHeading, SECTION.frontType7 A[href*=\"reporter.postimees\"] .frontHeading, SECTION.frontBlock.frontType12 A[href*=\"reporter.postimees\"] .frontHeading, SECTION.frontBlock.frontType11 A[href*=\"reporter.postimees\"] .frontHeading {margin-top:0px; margin-left:0px; padding-left:1px; padding-right:1px; font-size:1.1em !important; background:linear-gradient(to bottom, rgb(255, 253, 236), transparent 2.2em, transparent 100%) !important;}") //
//works at least w/ bgcolor, superseded by an @media rule
//backup selectors: DIV.frontPage at top
//background-color:Silver;
//25.07.2016: reporter.ee nüüd reporter.postimees.ee all

GM_addStyle("@media only screen and (max-width:1023px) {SECTION.frontBlock.frontType7 A[href*=reporter-ee] .frontHeading:not(.frontComments), SECTION.frontBlock.frontType7 A[href*=reporter-ee] .frontHeading:not(.frontComments) SPAN:not(.frontComments) {font-size:1.1em !important;} SECTION.frontBlock.frontType12 A[href*=reporter-ee] .frontHeading:not(.frontComments), SECTION.frontBlock.frontType12 A[href*=reporter-ee] .frontHeading:not(.frontComments) SPAN:not(.frontComments) {font-size:1em !important;}}") //Works, yay :-)

//MAIN PAGE CONTAINER
GM_addStyle("DIV.container {padding-left:0px; padding-right:0px; background-color:inherit; max-width:1195px;}") //works; bgcolor was white; padding-left:1px removed

//TOPNAV //HALL
GM_addStyle("NAV#topNav {height:20px; line-height:unset;}") //

//HEADER (ARVAMUS, et al.)
GM_addStyle("HEADER#contentHeader {background-color:inherit; padding-top:1px;}") //
//28.10.2016: +padding-top

//ARTICLE: BIG STORY (new design, Autumn 2015)
GM_addStyle("SECTION#fullScreenImage DIV.container {background:none;}")

//HEADER small links (arvamus)
GM_addStyle("SPAN.pmHeaderNavi {background-color:rgb(218, 218, 218);}") //
GM_addStyle("SPAN.pmHeaderNavi > A {color:black !important;}") //

//GM_addStyle("DIV#headerWeather {background:unset;}") //

GM_addStyle("DIV.pmHeaderBar {position:relative;}") //

GM_addStyle("NAV.pmMainNav {min-width:892px;}")

//GM_addStyle("@document domain(www.postimees.ee) {NAV.pmMainNav {background-color:#005bbb;} NAV.pmMainNav A:visited {color:#1db4f0 !important; background-color:navy !important;} }")

GM_addStyle("@document domain(60pluss.postimees.ee) {NAV.pmMainNav {background-color:rgb(204, 161, 56) !important; font-weight:bold;} NAV.pmMainNav A:visited {color:#1db4f0 !important; background-color:navy !important;} }")

/* RIGHT AD BAR. First seen  on arvamus.postimees.ee, and as #rightAdBar 
misbehaved elsewhere, then I had to apply it on the main PM userscript/-css. */
GM_addStyle("SECTION#rightAdBar {position:absolute;}") //

GM_addStyle("NAV.pmMainNav {min-width:892px; background-color:#005bbb;}") //default bgcolor rgb(29, 180, 240)
GM_addStyle("NAV.pmMainNav A:visited {color:#1db4f0 !important; background-color:navy !important;")
//#1db4f0 - this very light, PM default
//#0072ce - 0,114,206 (darker) - Eesti
//#005bbb - 0, 87,184 (more darker, Ukraine)
//#123e9d - 18,62,157 (darker Ukraine)
//#222426 - PM dark

//PM BLUE BAR
GM_addStyle("HTML.topMenu #moveMenuCont {line-height:11px;}") //

//PM BLUE BLAR / HEADER_NAV //new design 11.2016
GM_addStyle("DIV.header__menus, LABEL.profile-menu-label {height:37px;}") //17.11.2016

GM_addStyle("DIV.section-bg-color {background-color:#005bbb;}") //17.11.2016.
//applies to the www side, mostly.

//HEADER: SUBSITE NAME
GM_addStyle("DIV.pm-logo__subs-section--header {font-size:1.3em;}") //17.11.2016.

//11.2016 redesign: Fi100
GM_addStyle("A[href*=\"soome100.postimees\"] > SPAN {background-color:white; color:#002f6c;}") //08.01.2017.
//Let's see, how it works.

//BLUE BAR AFTER SCROLL
GM_addStyle("DIV#moveMenuCont .pmMainCont {background-color:transparent !important; background:linear-gradient(to right, rgb(0, 91, 187), rgb(0, 91, 187) 132px, transparent 132px, transparent 100%); opacity:1.0;}") //Sets bgcolor to overall darker //opacity was 0.8

//background:linear-gradient(to right, rgb(0, 91, 187), transparent 50%, transparent 100%);
//linear-gradient(to right, rgb(192, 192, 192) 200px, transparent 650px,

//BLUE BAR AFTER SCROLL
GM_addStyle("DIV#moveMenuCont .pmMainNav, #paidMenu nav, .headerProfileContainer {max-width:unset; max-width:100%; width:100%; height:25px; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:16px; padding-top:0px; padding-bottom:0px; padding-left:132px; background-color:transparent !important; background:linear-gradient(to bottom, rgb(0, 91, 187), rgb(0, 91, 187) 17px, transparent 17px, transparent 100%); line-height:17px;}")
/* was: margin left-right were auto in order to center the mainNav block. 
        background-color:transparent; border-bottom:solid 1px rgb(0, 91, 187); */

//SMALL PM LOGO AS MOVED
GM_addStyle("HTML.topMenu DIV#moveMenuCont .pmMainNav A.pmLogo {background-color:transparent; margin-top:1px; position:absolute; top:0px; left:16px;}") //works with important, but only because .topmenu was not prepended with HTML float:left;

GM_addStyle("DIV#moveMenuCont .plussPm {background-color:#5b0606 !important; color:white !important; border-top:none !important; border-bottom:none !important; border-left:solid 1px white !important; border-right:none !important; font-weight:600 !important;}") //color: LavenderBlush
//#e94022 - PM red
//#bb0b0b
//font-weight:600 (medium-bold, but not full-bold)

GM_addStyle("DIV#moveMenuCont .plussPm:hover {background-color:#e94022 !important; font-weight:bold !important;}") //

//LARGE PM LOGO
GM_addStyle("A.pmLogo, A.pmLogo:visited, A.mainSectionLogo, A.mainSectionLogo:visited {background-color:inherit !important;}") //

//BLUE BAR LINKS' LINE HEIGHT
GM_addStyle(".pmMainNav A {line-height:unset; margin-bottom:8px;}")

GM_addStyle("A.mainSectionLogo, A.mainSectionLogo:visited {background-color:inherit !important; color:white !important;}") //

GM_addStyle("NAV.pmSubNav a {background-color:rgba(255,255,255,0.5) !important;}") //

GM_addStyle("NAV.pmSubNav a:hover {background-color:rgba(255,255,255,0.75) !important;}") //

//HEADER TALK BUBBLE //new design of 11.2016 //Added 07.01.2017
GM_addStyle("DIV.header__visible-in-article > A > IMG {height:19px; width:20px; margin-top:3px;}")
//This sets the talk bubble to about the same height as the fb share icon.

//MAINSPACE
GM_addStyle("DIV#wrap {width:auto; min-width:985px; max-width:1232px;}") //original width:1232px

//CONTAINER (both left and right)
GM_addStyle("SECTION#leftContent, DIV.frontPlace SECTION, SECTION[class~=listSection], SECTION#rightContent SECTION {background-color:inherit;}") //rgba(255,255,255,0.25); can be made transparent, if other areas are set to white

//RIGHT bar
GM_addStyle("SECTION#rightContent {padding-left:5px;}") //
//June 2015: testing — position: absolute; right:203px;
//April 2016: Position: absolute does not wrap the block below

//RIGHT BAR 19.02.2015
//GM_addStyle("SECTION#rightContent { display:block; position:absolute; top:200px; right:0px;}")

//ABOUT HOVER | SECTION#rightContent:before |SECTION#rightContent:hover:before
GM_addStyle("DIV.subscLinkBlock:before, DIV.newsletter-form:after {content:\'Kasutajaskripti info\'; display:inline-block; width:100%; margin:0px; padding:0px; background-color:inherit; color:#0077ee; font-size:x-small; font-family:'\Verdana'\,\'sans-serif\',\'Arial\'; text-decoration:underline; text-align:right; height:15px;}") //DIV.pmHeaderBar:after | top:12px; right:0px;  border:solid 1px black; background-color:Silver; #0077ee; height:97px; width:515px; overflow-y:none; border:solid 1px black;
//NAV.pmSubNav:after
//Not everywhere: DIV.subscLinkBlock:before
//does not work: SECTION.searchBar:after

//enam-vähem töötab.
//DIV.pmHeaderBar:hover:after
//top:12px; right:0px; width:510px; 
//SECTION#rightContent:hover:before
GM_addStyle("DIV.subscLinkBlock:hover:before, DIV.newsletter-form:hover:after {content:\'\\[Kui kerijanuppu-pidi kerimine osutub võimatuks, saab tekstis allapoole minna klikkides kerimisalale, kasti kerimisriba üles-alla nuppudele, või kasutades osutusseadme scrollerit. (Kogetud Firefox versiooniga 39.0.3.)\\]\\A • See kohalik kasutajaskript muudab GreaseMonkey laiendiga varustatud Firefoxi lehitsejas PMO välimust peale seda kui PMO lehekülg (leheküljed) on arvutisse tõmmatud. Kasutajaskript (userscript) asub ainult kasutaja arvutis ja vaid selles Firefoxi profiilis, kuhu skript installitud on. Tehtud muudatused:\\A\ i. Külastatud lingid on kõrbekollased: on võimalik näha, mida on viimati loetud.\\A ii. Enamiku Postimees Pluss artiklite lingid on punased roosal taustal;\\A iii. Uues aknas avanevad lingid on sidrunikollased — kasutaja saab valida, kas tirib lingi samale vahekaardile või avab uues aknas;\\A iv. Väheste PMO alalehtede taust on muudetud tumedamaks, või läbipaistvaks, et oleks võimalik kasutada lehitsejas sätestatud vaikimisi taustavärvi. Seda siis mõeldes tundlike silmadega kasutajatele.\\A v. Artiklite põhitekst on pandud Arial fonti, tehtud väiksemaks ja lauaarvuti ekraanil loetavamaks (1280x800-pikselise resolutsioonidga).\\A • NB: Ehkki disaini muutmisega on püüeldud omamoodi täiuslikkuse poole, ei ole stiilide kasutamine ise 100% täiuslik, ning on algselt alati mõeldud kasutajastiili looja enda tarvis. Osa stiile võib kehtida PMO koodi kohta, mis eelnes 2013.–2014. aastate vananenud disainile; osa kehtib disainile, mis kaotati PMO-s suuresti 2016. aastal, kuid mis säilib veel mõnedes PMO alalehtedes. Ainult viimastes on ka see teade nähtav. \\A • Kuigi põhimõtteliselt pole see kasutajaskript mõeldud blokeerima reklaame, lähtub sellest tulenev disain NoScript-i ja\/või reklaamiblokeerija olemasolust (kui see on seatud blokeerima täisdomeene stiilis \\'reklaam.domeen.ee\\'). NoScript on Firefoxile mõeldud turvalaiendus, mis blokeerib JavaScripti, sh. enamiku reklaame, näoraamatu jpt. domeenid (sest minu arvuti pole just võimas).\\A \\A Info tõin siia, sest kasutajaskripti kirjeldus skripti \\'\\@description\\' väljas osutus liiga pikaks.\'; display:block; position:relative; height:125px; margin:0px; padding:0px; padding-left:2px; background-color:inherit; overflow-y:auto; color:black; font-size:x-small; font-family:'\Verdana'\,\'sans-serif\',\'Arial\'; text-decoration:none; white-space:pre-wrap; text-align:left;}") // border:solid 1px black; background-color:Silver; #0077ee; border-left-color:black; width was 512px (optimal)
/* Suuresti töötab, kuid TallinnCity disain erineb Tarbija24 küljendusest. 
   Näiteks on TallinnCity topribal ilmateade ja Tarbija24 topribal on autorite 
   kommentaarid. Et siis on alamportaalidele [tuli] vastavalt vajadusele teha 
   eraldi disainid. */
/* Laiuse mõistes töötab järgmistes alamportaalides: 
   TallinnCity, Juhtimine (võib ka laiem olla), Poliitika, Maailm, Sport, 
   Tarbija, ...\\A */
/* TallinnCity: {top:12px; right:0px; width:510px; height:97px;} */
/* EI TÖÖTA: PM esileht, Elu24 (tuleb mõlemal juhul mujale tõsta); 
             Arvamus (veidi juba kohendatud); 
             eestilaul vajab kohendamist; */
/* < SECTION#rightContent:before */

GM_addStyle("DIV.subscLinkBlock:hover:before DIV.newsletter-form:hover:after {display:none;}")

//GM_addStyle("DIV.pmHeaderBar:hover:after {}")

//ABOUT HOVER EXAMPLE CODE SNIPPETS
//GM_addStyle("SPAN.pmHeaderNavi:after {content:\'\|\ veidi teksti\'; display:inline; color:black;}") //

//GM_addStyle("SPAN.pmHeaderNavi:hover:after {color:red;}") //works

//TOP COMMENTS and bulleted lists
GM_addStyle("SECTION.listSection .item {padding-left:26px; background-position:8px 9px}") //08.11.2016

//LEFT CONTENT

GM_addStyle("SECTION#leftContent {background-color:transparent;}")

//LEFT CONTENT 19.02.2015
//GM_addStyle("SECTION#leftContent {display:block; width:auto; margin-right:320px;}")

GM_addStyle("SECTION#leftContent > ARTICLE, SECTION#leftContent > DIV {background-color:inherit;}") //rgba(255,255,255,0.25)

//11.2016. redesign
GM_addStyle("DIV.content-wrapper {background-color:inherit;}") //07.01.2017

//11.2016. redesign
GM_addStyle("MAIN#wrap {border-left:1px solid #B8B8B8;}") //07.01.2017
//adds border to better orient eye focus when reading article content.
//This is one of the primary article containers.

//11.2016 redesign
GM_addStyle("DIV.article-container, DIV.article-side {background-color:inherit;}") //17.11.2016.
/* Inheriting the background color is predicated on the default browser 
   background color being Silver or some form of gray between Silver and white, 
   but not white outright. So far applies to articles only. */

//ARTICLE PADDING: 11.2016 redesign
GM_addStyle("DIV.article-container {padding-top:0px; padding-bottom:0px;}") //07.01.2017

GM_addStyle("@media only screen and (max-width:1559px) {DIV.article-container.flex--equal-width {padding-left:5px;}}") //21.12.2016.

//FONT FIX
GM_addStyle("SECTION#leftContent > ARTICLE {font-family:\'Arial\',\'sans-serif\'; font-size:10pt; color:black;}")

//SUBSITE FRONTPAGE LINKS and BLURB: 11.2016 redesign
GM_addStyle("DIV.content-wrapper--section .article-list__lead {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\',\'TabacSans\'; font-size:84%;}") //18.11.2016
//84% applies in Windows xp, modern Firefox, and at 100% viewport zoom.

//[FRONTPAGE] IN-IMAGE TITLES / SUBSITE LINKS AS IMAGE INSETS //Ruleset: 18.11.2016
GM_addStyle("A.section-name-label {top:1px; left:3px; padding-top:0px; padding-left:3px; padding-right:3px; padding-bottom:1px; font-size:0.7em;}")
/*
padding-left:3px; padding-right:3px; padding-bottom:2px; with font-size:0.75em
padding-top:0px; padding-left:3px; padding-right:3px; padding-bottom:1px; with font-size:0.7em
*/

//11.2016 redesign | [FRONTPAGE] top links to articles
GM_addStyle("A:hover > DIV.article-content, A:hover > DIV.article-content * {background-color:transparent !important;}")
/* Line added on 08.01.2017.
   This overrides hover background color for top links, since the original 
   already has good hover properties for some items. */

//11.2016 redesign | [FRONTPAGE] top links to articles: specifics
GM_addStyle("DIV.article-content {margin:0px; margin-left:3px; margin-bottom:11px; padding-top:1px; padding-left:3px;}")
//Line added on 08.01.2017.

//11.2016 redesign: background to specific words.
GM_addStyle("A[href*=\"komisjon\"] > DIV.article-content, A[href*=\"komisjon\"]:visited > DIV.article-content {background:transparent linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 70px, transparent 88px, transparent 100%) repeat scroll 0% 0% !important}")
/* Line added on 08.01.2017. 
   was: background-color:rgba(0, 0, 0, 0.7) !important; */
GM_addStyle("A[href*=\"komisjon\"]:hover > DIV.article-content, A[href*=\"komisjon\"]:visited:hover > DIV.article-content {background:transparent linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 70px, transparent 88px, transparent 100%) repeat scroll 0% 0% !important}")
/* Line added on 08.01.2017.
   was: background-color:rgba(0, 0, 0, 0.8) !important; */

//11.2016 redesign | remove hover color
GM_addStyle("A[href*=\"komisjon\"]:hover > DIV.article-content > SPAN, A[href*=\"komisjon\"]:visited:hover > DIV.article-content > SPAN {background-color:transparent !important;}") //08.01.2017

//11.2016 redesign | modified inset for 'currently important'
GM_addStyle("UL.pattern-articles-list.pattern-articles-list--type-7 > LI.article-list__item > DIV > A[href*=\"komisjon\"] + A.section-name-label {top:77px; width:100%; height:52px; max-width:222px; background-color:rgba(0, 0, 0, 0.8) !important;}")

//11.2016 redesign | modified title for article list. Big item. Inset left unaffected.
GM_addStyle("UL.pattern-articles-list:not(.pattern-articles-list--type-7) > LI.article-list__item:first-child > DIV > A[href*=\"komisjon\"] > DIV.article-list-content {position:absolute; bottom:8px; width:100%; height:122px; margin-left:3px; padding-left:3px; background-color:rgba(0, 0, 0, 0.8) !important;}")

//11.2016 redesign | modified inset for article list. Smaller item, not the first one.
GM_addStyle("UL.pattern-articles-list > LI.article-list__item:not(:first-child) > DIV > A[href*=\"komisjon\"] + A.section-name-label {top:88px; width:100%; height:57px; max-width:203px; background-color:rgba(0, 0, 0, 0.8) !important;}")
/* Line adde on 08.01.2017.

   At certain sizes:
 max-width:203px; top:88px; height:57px;
Currently important: max-width:222px; top:77px; height:52px;
*/

//11.2016 redesign | [FRONTPAGE] top links to articles, inner element.
GM_addStyle("SPAN.article-content__headline {margin-right:1px;}") //08.01.2017

//11.2016 redesign | [FRONTPAGE] mainline links to articles
GM_addStyle("UL.pattern-articles-list.pattern-articles-list--type-7 .article-list__item:first-child:nth-last-child(4) .article-list__headline {font-size:130%;}")
//Added 08.01.2017 //Original: 1.5em (24px);
//130% computed to 20.8px, applies to 'veokipommiplahvatuses'
//Conditions: xpsp3, Gecko39, 100%

GM_addStyle("@media only screen and (max-width:1559px) {UL.pattern-articles-list.pattern-articles-list--type-7 .article-list__item:first-child:nth-last-child(4) .article-list__headline {font-size:130%;}}")
//Added 08.01.2017. | Original: 1.375em (22px)
//Conditions: xpsp3, Gecko39, 100%

//NATIVE VIDEO hover. This is in part about Flashblock. //31.10.2016.
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-preview {display:block; z-index:0;}")
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked:hover .jw-preview {z-index:1;}")
/* This displays the video background image for those, who prefer to have 
   Flash blocked. On hover, the play buttons should appear. 
   Compatible with Flashblock.
   02.11.2016: Set z-index to 0 from 1 after below messaging was implemented. */

//NATIVE VIDEO messaging.
/* The condition so far is, that flash is blocked. Hence HTML &gt; BODY etc. */
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title {width:unset; background:transparent linear-gradient(to bottom, #000 0px, transparent 24px, transparent 100%) repeat scroll 0% 0%;}") //02.11.2016
//was: 18px (but not original)

//VIDEO MSG: Ruleset added on 02.11.2016.
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-primary, HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-secondary {min-height:unset; margin-top:0px; padding-top:0px; padding-bottom:0px; padding-left:0px; color:Silver; font-weight:normal;}")
//jw video message color set to Silver.
//08.11.2016: Added selector '-secondary', margin-top to both.

//VIDEO MSG: Ruleset added on 02.11.2016.
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-primary:after {display:inline; content:\'\.\ Kliki pildil video Play-nupu näitamiseks.\'; padding-top:2px; color:white; font-weight:700;}")
/* Eestikeelne teavitus, et pildi klikkimisel jõuab videoni.
   Tekst on allpool seatud väikseks, et see foto vaatamist ei segaks.

   Option to display as block, but this requires removing the dot and 
   the space from content. Appended video message color is white. */

GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-secondary:before {display:block; content:\'(Teavituse peitmiseks nihuta kursor pildi kohale.)\'; padding-top:2px;}")
//08.11.2016: Additional message moved into newline. Note display:block.

GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-reset {font-size:75%;}") //02.11.2016
//This reduces font size to xx-small to avoid text interfering with the image. //was:70%

//GM_addStyle("SECTION#leftContent > ARTICLE > DIV > P, SECTION#leftContent > ARTICLE > SECTION P {background-color:rgba(255,255,255,0.5); color:black;}") //

//FRONTPAGE: ADDITIONAL TEXT for TITLE //28.10.2016
GM_addStyle("P.frontAdditional {margin-left:1px; margin-right:1px;}")

//FRONTPAGE: RELATED ARTICLE //28.10.2016
GM_addStyle("A.frontRelatedHeading {margin-left:0px;}")

//FRONTPAGE: SUUR LUGU KOLME LISANUPUGA //28.10.2016
GM_addStyle("SECTION.frontType8 .articleRight .frontArticle {margin-bottom:1px;}") 
GM_addStyle("SECTION.frontType8 .articleRight .frontArticle:last-child {margin-bottom:0px;}")
//The above sets margins to less than the default.
//The alternative is to set margin-top:1px except for :first-child.

GM_addStyle("SECTION.frontType8 .articleRight .frontIcons {margin-right:9px;}")
//28.10.2016: for 1024x768px, but works on others.

//ARTICLE
GM_addStyle("ARTICLE {padding-left:0px;}") //

//Late-2016 new design.
GM_addStyle("BODY.body--article ARTICLE {background-color:inherit;}")
/* L., 03.12.2016: Set background-color. If browser background color is 
   different (Silver), then it's set to that. */

GM_addStyle("SECTION.articlePhotos {padding-left:0x;}") //

//11.2016 redesign. Line added on 08.01.2017
GM_addStyle("DIV.article-gallery__container > DIV.spacer {display:none;}")
//This should remove the spacer div from above and below the gallery.

//11.2016 redesign
GM_addStyle("FIGURE.article-media-figure {min-height:unset;}") //07.01.2017
//Removes superfluous whitespace from below photos

GM_addStyle("SECTION.articleContent {line-height:1.4em;}") //

GM_addStyle("SECTION.articleContent > P {margin-left:1px; margin-right:1px;}") //

GM_addStyle("DIV.articleContentImage full {max-width:648px; padding:0px;}") //

GM_addStyle("DIV.articleContentImage.full {clear:both;}")

GM_addStyle("DIV.articleContentImage img {border:0px;}") //

GM_addStyle("DIV.articleContentImage .articleContentImageText {padding-left:1px; padding-top:1px; color:black}") //
//17.11.2016: Added color after 11.2016 redesign.

GM_addStyle("ARTICLE.article P {padding-left:2px; padding-right:2px}") //

GM_addStyle("P[align=JUSTIFY] {text-align:left}") //

//ARTICLE TEXT: 11.2016. redesign.
GM_addStyle("SECTION.article-body H1, SECTION.article-body H2, SECTION.article-body H3, SECTION.article-body H4, SECTION.article-body H5, SECTION.article-body H6, SECTION.article-body OL, SECTION.article-body P, SECTION.article-body UL {margin:0px 0px;}")
//07.01.2017 //removes superfluous space in margins

//11.2016 redesign
GM_addStyle("@media only screen and (max-width:1559px) {SECTION.article-body H1, SECTION.article-body H2, SECTION.article-body H3, SECTION.article-body H4, SECTION.article-body H5, SECTION.article-body H6, SECTION.article-body OL, SECTION.article-body P {margin:0px 0px;}}")
/* Line added on 07.01.2017. Removes superfluous space in margins.

   From a relatively original selector to cover all bases:
   GM_addStyle("SECTION.article-body.article-body--lead P {}") 
   
   07.01.2017: Turns out, that top-bottom margins have been set for all items 
   of article-body both in general/mainline CSS _and_ for specific screen sizes 
   of @media (1559px and so on); which means, that for one objective of setting 
   margins to 0px, the rulesets had to be superseded twice.
   
   Interestingly, the ruleset below still supersedes the two above rulesets. */

//11.2016 redesign
GM_addStyle("SECTION.article-body:not([class*=article-body--lead]) P {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\',\'TabacSans\'; font-size:80%;}")
/* Line added on 17.11.2016.
   Original: Primary font was TabacSans, but I've relegated it to the end of 
   the list, preferring Arial and Helvetica over this.
   07.01.2017: +margin-bottom. */

//11.2016 redesign. Line added on 08.01.2017.
GM_addStyle("SECTION.article-body:not([class*=article-body--lead]) P:not(:last-child) {margin-bottom:1em;}") 
/* Margin-bottom is separate in order to keep font and size above, and to use 
   :not(:last-chid). */

//IMAGE CAPTION: 11.2016 redesign. //17.11.2016
GM_addStyle("FIGCAPTION.article-media-figure__caption {color:black;}") //

//OTSE
GM_addStyle("HTML > BODY > DIV.content {padding-left:0px;}")

//11.2016 redesign
GM_addStyle("SECTION.article-body .twitter-tweet, SECTION.article-body IFRAME {margin:0px auto !important;}") //07.01.2017

GM_addStyle("IFRAME[id*=\"liveblog\"] HTML > BODY > .content {border-left:solid 2px Blue;}")

GM_addStyle("DIV.liveblog {background-color:black; color:Silver;}")

GM_addStyle("DIV.liveblog .panel {background-color:black; color:Silver;}")

GM_addStyle("DIV.liveblog .introduction .articleDate {color:Silver;}")

GM_addStyle("DIV.liveblog H2.event-header {color:Silver;}")

GM_addStyle("DIV.liveblog .dropdown {color:Silver;}")

GM_addStyle("DIV.liveblog .event-list {padding-left:5px;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .feed-header, LIVEBLOG.liveblogEmbedContainer.narrower .feed-header {color:Silver;}")

GM_addStyle("DIV.liveblog .event .time {background-color:black; color:#e0e0e0;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event .time:not(.sectionFontColor) {color:#cff;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event {color:#888888;}")

GM_addStyle("DIV.liveblog .event:not(.key) {border-left-color:#707070;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event .bullet {background-color:inherit;}")

GM_addStyle("DIV.liveblog .event .content {color:Silver; margin-left:30px; margin-right:1px; border-bottom-color:#525252;}")

//11.2016 redesign: font and font size. //Added 07.01.2017.
GM_addStyle("DIV.liveblog .event .content P {font-family:\'Arial\',\'Roboto\',\'sans-serif\'; font-size:89%;}")
/* 77%-89% works with Arial. 95% works with Roboto, but I'm keeping it at 89% 
   to allow people with only Roboto not to have too small text.
   DIV.article-container.flex--equal-width top selector does not work.  */

GM_addStyle("DIV.liveblog .event .content DIV.ng-binding {padding-right:4px;}") //08.11.2016

GM_addStyle("DIV.liveblog .event .content H3 {color:white;}")

//11.2016 redesign font size (perhaps)
GM_addStyle("DIV.article-container.flex--equal-width DIV.liveblog .event .content H3 {font-size:95%}") //07.01.2017

GM_addStyle("DIV.liveblog .event .content P > STRONG {color:white;}")

GM_addStyle("DIV.liveblog .event .content BLOCKQUOTE {background-color:black; border:dashed 1px gray;}") //07.11.2016

GM_addStyle("DIV.liveblog .event .content EM {color:#cdcdcd;}") //07.11.2016

//FACEBOOK EMBED IN LIVEBLOG | 06.11.2016
GM_addStyle("IFRAME[src*=\'facebook.com\'] {background-color:Silver;}")
//assuming dark bgcolor

//YOUTUBE PLAYER FIT TO WIDTH

GM_addStyle("OBJECT#videoPlayerContent {width:100%}") //Works. Also consider SECTION > OBJECT

//PAYWALLED ARTICLE TEASER FADE //
GM_addStyle("SECTION.articleTeaser[data-fade-text]::before {background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 95%, #FFF 100%) repeat scroll 0% 0%}")
/* This reduces the white linear gradient overlap with white text.
   Introduced on 07.11.2016. for just 'arvamus', but then on 08.11.2016 moved 
   it here, as it turned out, that it applied better globally. */

//Line added on 08.01.2017
GM_addStyle("DIV.article-share-btns {margin-top:0px; padding-top:10px; border-top:1px solid #B8B8B8;}")
/* This moves space rom margin to padding an adds a border to visually separate 
   article content. */

//ARTICLE LINKS BELOW
GM_addStyle("@media only screen and (max-width:1023px) {.frontBlock.frontBlock.frontType13 .frontLead, .frontBlock.frontBlock.frontType13 .frontRelated, .frontBlock.frontBlock.frontType13 .frontText, .frontBlock.frontType11 .frontArticle .frontAdditional, .frontBlock.frontType11 .frontArticle .frontRelated, .frontBlock.frontType11 .frontText, .frontBlock.frontType12 .frontArticle .frontAdditional, .frontBlock.frontType12 .frontArticle .frontLead, .frontBlock.frontType12 .frontArticle .frontRelated, .frontBlock.frontType12 .frontArticle .frontText, .frontBlock.frontType16 .frontAdditional, .frontBlock.frontType2 .articleRight .frontText, .frontBlock.frontType2 .frontAdditional, .frontBlock.frontType3 .frontAdditional, .frontBlock.frontType3 .frontLead, .frontBlock.frontType3 .frontRelated, .frontBlock.frontType3 .frontText, .frontBlock.frontType4 .articleRight .frontQuote .frontLead, .frontBlock.frontType4 .articleRight .frontQuote .frontRelated, .frontBlock.frontType4.frontType10 .articleLeft .frontQuote .frontLead, .frontBlock.frontType4.frontType10 .articleLeft .frontQuote .frontRelated, .frontBlock.frontType4.frontType10 .articleLeft .frontQuote .frontText, .frontBlock.frontType6 .frontArticle .frontAdditional, .frontBlock.frontType6 .frontLead, .frontBlock.frontType6 .frontRelated, .frontBlock.frontType6 .frontText, .frontBlock.frontType7 .frontArticle .frontAdditional, .frontBlock.frontType7 .frontLead, .frontBlock.frontType7 .frontRelated, .frontBlock.frontType7 .frontText, .frontBlock.frontType8 .frontAdditional, .frontBlock.gameFriik, .frontQuote .articleText .frontText {display:block}") //

//11.2016 redesign //Line added 08.01.2017
GM_addStyle("DIV.related-fluid-list .related-fluid-list__item .article-list__headline {font-size:120%}")
//original: 1.375em
/* This can be set to lower even, as normal in-box font size for 
   'käsipallikoondislased' is 109%. */

//COMMENT ANCHOR
GM_addStyle("DIV#comments {padding-top:11px;}")

GM_addStyle("@media only screen and (max-width:1024px) {DIV#comments .commentSortOptionsContainer {height:37px; margin-top:4px;} DIV#comments .commentSortOptionsContainer:hover {background:linear-gradient(to bottom, Silver, transparent 100%);}}")

//to right, yellow, transparent 50%, transparent 100%

//FOOTER
GM_addStyle("DIV.usefulLinks {margin-left:0px; margin-right:0px; padding-left:0px; width:auto;}") //

//ENTIRE SCREEN / GALLERY
GM_addStyle("DIV.gImageView:hover DIV.gImageInfo {bottom:-88px;}") //
GM_addStyle("DIV.gImageInfo {bottom:-88px; height:105px; padding-top:0px;}") //
GM_addStyle("DIV.gImageInfo:hover {bottom:0px !important;}") //
//height:105px; bottom:-88px;
//height:125px; bottom:-108px;
//height:147px; padding-top: original/unset; bottom:-125px;
//height:142px; padding-top:0px; bottom:-125px;

//ENTIRE SCREEN / GALLERY: Down arrow
GM_addStyle("SPAN.hideInfoBar {float:left; margin-top:-5px; margin-left:0px; margin-right:16px;}") //
GM_addStyle("SPAN.gTitle {float:left; margin-right:16px;}") //

//ENTIRE SCREEN / FULLSCREEN / GALLERY | 11.2016 REDESIGN
GM_addStyle("DIV.fotorama__caption {line-height:1.2em;}") //R., 30.12.2016.

GM_addStyle("DIV.fotorama__caption::before {background:transparent; display:none;}") //R., 30.12.2016.
//This removes the big gradient from behind the image caption.

GM_addStyle("DIV.fotorama .fotorama__caption__wrap {padding-left:1px; padding-bottom:0px;}") //

//IMAGE COUNT bg
GM_addStyle("DIV.fotorama .fotorama__caption__wrap .fotorama__image__count {background:linear-gradient(to right, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0.8) 10px, transparent 50px);}") //30.12.2016

GM_addStyle("DIV.fotorama.fotorama__style-override .fotorama__caption__wrap .fotorama__image__caption__separator {margin:0px 7px;}")
//05.01.2017. Applies to margin-left and right.

//CAPTION and AUTHOR BACKGROUNDS. //Added on R., 30.12.2016.
GM_addStyle("SPAN.fotorama__image__caption, SPAN.fotorama__image__author {background:linear-gradient(180deg, transparent 0px, rgba(0, 0, 0, 0.8) 70%) repeat scroll 0% 0%;}")
//DIV.fotorama__caption__wrap > SPAN
//Older selector: SPAN[class*=fotorama__image__]:not([class=fotorama__image__count]) //works, btw.
//05.01.2017: Left bg gradient for image caption and author only.

//Image description font size //30.12.2016
GM_addStyle("DIV.fotorama .fotorama__caption__wrap .fotorama__image__caption, DIV.fotorama.fotorama__style-override .fotorama__caption__wrap .fotorama__image__caption {font-size:83%; line-height:unset; font-weight:500;}")
//05.01.2017: +style override selector
//font-size:105% is currently equivalent to authorname. Keeping the current value, because some captions can be longer.

//avoid on hover
GM_addStyle("DIV.fotorama .fotorama__caption__wrap .fotorama__image__caption:hover {visibility:hidden;}") //30.12.2016

// kultuur.postimees.ee
/*
div#wrap {background:linear-gradient(to right, rgb(192, 192, 192) 200px, transparent 650px, transparent 100%);}
*/

/* GM_addStyle("A:before {content:\'... \'; font-weight:bold !important; color:purple !important; background:none; border-right:solid 1px purple !important; margin-right:4px; max-height:12px;}")

GM_addStyle("A:visited: + A:before {content:\'vis\' !important; font-weight:bold !important; color:purple !important; background:none; border-right:solid 1px purple !important;}") */

/*  border-left: solid 5px purple !important; padding-left:3px !important; */

/*
GM_addStyle("div#player > object {height:361px}")
GM_addStyle("div#player:after {content:\'Stretching is fill.\'; display:block; border:solid 1px navy; font-family:Verdana; font-size:small; color:Silver; text-align:right;}") */

/* The standard 16:9 height for 640px width is 360px. Because the BBC logo's
   squares were not exactly square, then I added one pixel for the height */

/*
document.styleSheets[0].insertRule('
', 0);
*/
