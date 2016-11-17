// ==UserScript==
// @name          	Postimees
// @namespace     PMO_GM
// @description	See kasutajaskript muudab PMO välimuse kasutajasõbralikumaks.
// @updateURL https://github.com/juneyourtech/GM_PM/raw/master/PM.user.js
// @version 0.8.4.2
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
// __80_________________________________________________________________________

//TEXT COLOR
GM_addStyle("HTML > BODY {color:black;}") //Old: rgb(58, 64, 65) 
//background-color:Silver

//ARVAMUS et al. BG
GM_addStyle("div#bgOverlay {position:fixed;}")

//LINK MOUSEOVER BGCOLOR
GM_addStyle("A:hover, A:hover strong, A:hover span, A:hover * {background-color:Lavender !important;}")

//NEW WINDOW LINK (MOUSEOVER) BGCOLOR 'cept ilmajaam //updated 28.10.2016
GM_addStyle("A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]), A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]) STRONG, A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]) SPAN, A[TARGET=\"_blank\"]:not([href*=\"ilmajaam.postimees\"]) * {background:linear-gradient(to right, yellow, transparent 50%, transparent 100%);}")
//1st transparent 2.2 em //was: to bottom
/* For the most part, the yellow colour has been instrumental in seeing well in 
   advance the fact, that a link is set to open in a new window. OTOH, I only 
   wanted the background to be unset for the weather element, but couldn't get 
   it right and didn't have any direct need when the userstyle was only in 
   offline use. The exclusion was finally achieved on 28.10.2016. The W3C spec 
   is not very specific enough about what is possible with the :not pseudo. */

//New window links to ILMAJAAM //28.10.2016
GM_addStyle("A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"], A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"] STRONG, A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"] SPAN, A[TARGET=\"_blank\"][href*=\"ilmajaam.postimees\"] * {border-bottom:solid 1px yellow;}")

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
GM_addStyle("*:visited, A:visited, A:visited strong, A:visited span, A:visited * {font-style:oblique !important; font-style:italic !important; font-weight:400 !important; color:DarkGoldenrod !important; background:none; background-color:SandyBrown !important; text-decoration:underline !important; border:solid 5px DarkGoldenRod !important;}")
/* DarkGoldernrod - this works in most PM editions; PM blue for #22ace3
   What doesn't work: 
font-style:italic,oblique; font-weight:400; background-color (does it sometimes?); text-decoration:underline 
 text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue !important; */

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
GM_addStyle("BODY A[href*=\"sport.postimees\"], BODY A[href*=\"sport.postimees\"] strong, BODY A[href*=\"sport.postimees\"] span, BODY A[href*=\"sport.postimees\"] * {color:#005749 !important; border:none !important;}")
//original: 0, 142, 121 (#008e79); brightness 43%: 0,110,93 (#006e5d); brightness 34%: #005749

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
GM_addStyle("DIV.subscLinkBlock:hover:before, DIV.newsletter-form:hover:after {content:\'\\[Kui kerijanuppu-pidi kerimine osutub võimatuks, saab tekstis allapoole minna klikkides kerimisalale, kasti kerimisriba üles-alla nuppudele, või kasutades osutusseadme scrollerit. (Kogetud Firefox versiooniga 39.0.3.)\\]\\A • See kohalik kasutajaskript muudab GreaseMonkey laiendiga varustatud Firefoxi lehitsejas PMO välimust peale seda kui PMO lehekülg (leheküljed) on arvutisse tõmmatud. Kasutajaskript (userscript) asub ainult kasutaja arvutis ja vaid selles Firefoxi profiilis, kuhu skript installitud on. Tehtud muudatused:\\A\ i. Külastatud lingid on kõrbekollased: on võimalik näha, mida on viimati loetud.\\A ii. Enamiku Postimees Pluss artiklite lingid on punased roosal taustal;\\A iii. Uues aknas avanevad lingid on sidrunikollased — kasutaja saab valida, kas tirib lingi samale vahekaardile või avab uues aknas;\\A iv. Osade PMO lehtede taust on muudetud tumedamaks, mõeldes tundlike silmadega kasutajatele.\\A v. Artiklite põhitekst on pandud Arial fonti, tehtud väiksemaks ja lauaarvuti ekraanil loetavamaks (1280x800-pikselise resolutsioonidga).\\A • NB: Ehkki disaini muutmisega on püüeldud omamoodi täiuslikkuse poole, ei ole stiilide kasutamine ise 100% täiuslik, ning on algselt alati mõeldud skripti looja enda tarvis. Osa stiile võib kehtida vananenud PMO koodi kohta.\\A • Kuigi põhimõtteliselt pole see kasutajaskript mõeldud blokeerima reklaame, lähtub sellest tulenev disain NoScript-i, Adblock Plus-i vmt. olemasolust (kui see on seatud blokeerima täisdomeene stiilis \\'reklaam.domeen.ee\\'). NoScript on Firefoxile mõeldud turvalaiendus, mis blokeerib JavaScripti, sh. enamiku reklaame, näoraamatu jpt. domeenid (sest minu arvuti pole just võimas).\\A \\A Info tõin siia, sest kasutajaskripti kirjeldus skripti \\'\\@description\\' väljas osutus liiga pikaks.\'; display:block; position:relative; height:125px; margin:0px; padding:0px; padding-left:2px; background-color:inherit; overflow-y:auto; color:black; font-size:x-small; font-family:'\Verdana'\,\'sans-serif\',\'Arial\'; text-decoration:none; white-space:pre-wrap; text-align:left;}") // border:solid 1px black; background-color:Silver; #0077ee; border-left-color:black; width was 512px (optimal)
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

//ARTICLE and ARTCLE TEXT
GM_addStyle("SECTION#leftContent > ARTICLE, SECTION#leftContent > DIV {background-color:inherit;}") //rgba(255,255,255,0.25)

//11.2016 redesign.
GM_addStyle("DIV.article-container, DIV.article-side {background-color:inherit;}") //17.11.2016.
/* Inheriting the background color is predicated on the default browser 
   background color being Silver or some form of gray between Silver and white, 
   but not white outright. */

GM_addStyle("SECTION#leftContent > ARTICLE {font-family:\'Arial\',\'sans-serif\'; font-size:10pt; color:black;}") //

//11.2016. redesign.  //17.11.2016
GM_addStyle("SECTION.article-body:not([class*=article-body--lead]) P {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\',\'TabacSans\'; font-size:80%;}")
/* Original: Primary font was TabacSans, but I've relegated it to the end of the 
   list, preferring Arial and Helvetica over this. */

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

//Ruleset added on 02.11.2016.
GM_addStyle("HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-primary, HTML > BODY .jwplayer.jw-flag-flash-blocked .jw-title-secondary {min-height:unset; margin-top:0px; padding-top:0px; padding-bottom:0px; padding-left:0px; color:Silver; font-weight:normal;}")
//jw video message color set to Silver.
//08.11.2016: Added selector '-secondary', margin-top to both.

//Ruleset added on 02.11.2016.
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

GM_addStyle("SECTION.articlePhotos {padding-left:0x;}") //

GM_addStyle("SECTION.articleContent {line-height:1.4em;}") //

GM_addStyle("SECTION.articleContent > P {margin-left:1px; margin-right:1px;}") //

GM_addStyle("DIV.articleContentImage full {max-width:648px; padding:0px;}") //

GM_addStyle("DIV.articleContentImage.full {clear:both;}")

GM_addStyle("DIV.articleContentImage img {border:0px;}") //

GM_addStyle("DIV.articleContentImage .articleContentImageText {padding-left:1px; padding-top:1px;}") //

GM_addStyle("ARTICLE.article P {padding-left:2px; padding-right:2px}") //

GM_addStyle("P[align=JUSTIFY] {text-align:left}") //

//OTSE
GM_addStyle("HTML > BODY > DIV.content {padding-left:0px;}")

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

GM_addStyle("DIV.liveblog .event .content DIV.ng-binding {padding-right:4px;}") //08.11.2016

GM_addStyle("DIV.liveblog .event .content H3 {color:white;}")

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
   Introduced on 07.11.2016. for just 'arvamus', but then on 08.11.2016 moved it 
   here, as it turned out, that it applied better globally. */

//ARTICLE LINKS BELOW
GM_addStyle("@media only screen and (max-width:1023px) {.frontBlock.frontBlock.frontType13 .frontLead, .frontBlock.frontBlock.frontType13 .frontRelated, .frontBlock.frontBlock.frontType13 .frontText, .frontBlock.frontType11 .frontArticle .frontAdditional, .frontBlock.frontType11 .frontArticle .frontRelated, .frontBlock.frontType11 .frontText, .frontBlock.frontType12 .frontArticle .frontAdditional, .frontBlock.frontType12 .frontArticle .frontLead, .frontBlock.frontType12 .frontArticle .frontRelated, .frontBlock.frontType12 .frontArticle .frontText, .frontBlock.frontType16 .frontAdditional, .frontBlock.frontType2 .articleRight .frontText, .frontBlock.frontType2 .frontAdditional, .frontBlock.frontType3 .frontAdditional, .frontBlock.frontType3 .frontLead, .frontBlock.frontType3 .frontRelated, .frontBlock.frontType3 .frontText, .frontBlock.frontType4 .articleRight .frontQuote .frontLead, .frontBlock.frontType4 .articleRight .frontQuote .frontRelated, .frontBlock.frontType4.frontType10 .articleLeft .frontQuote .frontLead, .frontBlock.frontType4.frontType10 .articleLeft .frontQuote .frontRelated, .frontBlock.frontType4.frontType10 .articleLeft .frontQuote .frontText, .frontBlock.frontType6 .frontArticle .frontAdditional, .frontBlock.frontType6 .frontLead, .frontBlock.frontType6 .frontRelated, .frontBlock.frontType6 .frontText, .frontBlock.frontType7 .frontArticle .frontAdditional, .frontBlock.frontType7 .frontLead, .frontBlock.frontType7 .frontRelated, .frontBlock.frontType7 .frontText, .frontBlock.frontType8 .frontAdditional, .frontBlock.gameFriik, .frontQuote .articleText .frontText {display:block}") //

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
