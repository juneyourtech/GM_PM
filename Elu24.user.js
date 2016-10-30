// ==UserScript==
// @name        Elu24
// @description PM Elu24 eriosa
// @namespace   PM_Elu24_GM
// @updateURL https://github.com/martrootamm/GM_PM/raw/master/Elu24.user.js
// @include     http://elu24.postimees.ee/*
// @version     0.8.1
// @grant		GM_addStyle
// ==/UserScript==

//ABOUT HOVER color and other settings
GM_addStyle("DIV.pmHeaderBar:hover:after {color:yellow; background:rgb(0,0,0,0.5);}")

//KOMMENTAARILINGID
GM_addStyle("A, SECTION.frontBlock A, SECTION.related A {color:#888888;}") //

GM_addStyle("A.com {background-color:none !important;}") //

//RIGHTADBAR (TOP KOMMENTAARID JNE)
GM_addStyle("SECTION#rightAdBar {position:absolute; top:19px; right:0px;}") //30.10.2016
//top:5px, if default font size; 19px, if small font size

GM_addStyle("SECTION.listSection {position:absolute; z-index:1; top:0px; margin-right:1px;}") //SECTION#rightAdBar,
//30.10.2016: Added: z-index; top; margin-right was:2px

GM_addStyle("SECTION.listSection > HEADER {display:block; position:relative; min-width:199px; font-family:'\Verdana'\,'\sans-serif'\,'\Arial'\; font-size:8px; color:white;}") //30.10.2016
//background-color:#555555;

GM_addStyle("DIV.sidebarBlockContent {padding-right:0px; }")

GM_addStyle("@media only screen and (max-width:1206px) {SECTION#rightAdBar > SECTION.listSection > DIV.sidebarBlockContent {display:none;} SECTION#rightAdBar > SECTION.listSection:hover {background-color:black;} SECTION#rightAdBar > SECTION.listSection > HEADER:hover + DIV.sidebarBlockContent, SECTION#rightAdBar > SECTION.listSection > DIV.sidebarBlockContent:hover {display:block; background-color:black;} }") //30.10.2016

//SIDEBAR LINKS
GM_addStyle("DIV.sidebarBlockContent a {color:#409fff;}")

//AFTER ARTICLE and BEFORE COMMENTS LINKS
//GM_addStyle("A.relatedArticle {color:#0077ee;}")

//SEKTSIOON
GM_addStyle("A > H1#sectionHeader {background-color:inherit !important;}")

GM_addStyle("DIV > SECTION#rightContent {position:unset;}")

//FOTO edasi/tagasi
GM_addStyle("DIV.imageViewer .navBar, DIV.imageViewer .navBar .prev, DIV.imageViewer .navBar .next, DIV.imageViewer .navBar .zoom, DIV.imageViewer .navBar .close {background-color:rgb(68,68,68);}")
//not all works, because navbar buttons are page-embedded images.

/* ___CHARACTER_LIMIT_________________________________________________________ */

//FOTO KIRJELDUS | ALLKIRI | CAPTION
GM_addStyle("DIV.imageViewer .photoDescription {color:gray;}") //

//PEALKIRI
GM_addStyle("H1.articleHeading {color:Silver;}")

//SISU
GM_addStyle("SECTION.articleLead {color:#969696;}")
GM_addStyle("SECTION.articleContent, SECTION.articleContent * {color:white;}")

GM_addStyle("HTML > BODY > DIV#videoPlayerContent {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'Open Sans\',\'Tahoma\',\'Geneva\',\'sans-serif\'; font-size:150%; color:Silver; font-kerning:none; text-transform:full-width;}")

/* GM_addStyle("DIV.videoPlayerContent {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'Open Sans\',\'Tahoma\',\'Geneva\',\'sans-serif\'; font-size:175%; color:Silver; font-kerning:none; text-transform:none;}") */

//KEYWORDS
GM_addStyle("SECTION.keywords {color:white;}")

//COMMENTS
GM_addStyle("DIV.articleComments, DIV.commentContent {color:white;}")
GM_addStyle("SPAN.commentName {color:#99CCFF; background-color:#c0c0c0;}")

//RIGHT BORDERS
GM_addStyle("SECTION#rightContent SECTION, SECTION#rightContent .frontPage, SECTION.textSection {border-color:#525252;}")

//RIGHT
GM_addStyle("SECTION#rightContent SECTION HEADER, SECTION.textSection .sectionHeader {color:#888888;}")
//latter selector manifests, but does not apply

//TOP LINKS LIST
GM_addStyle("SECTION.scrollSection .even {background-color:#343434;}")
