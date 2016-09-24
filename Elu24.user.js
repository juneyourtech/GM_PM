// ==UserScript==
// @name        Elu24
// @namespace   PM Elu24 eriosa
// @include     http://elu24.postimees.ee/*
// @version     1
// @grant		GM_addStyle
// ==/UserScript==

//ABOUT HOVER color and other settings
GM_addStyle("DIV.pmHeaderBar:hover:after {color:yellow; background:rgb(0,0,0,0.5);}")

//KOMMENTAARILINGID
GM_addStyle("A, SECTION.frontBlock A, SECTION.related A {color:#888888;}") //

GM_addStyle("A.com {background-color:none !important;}") //

//RIGHTADBAR (TOP KOMM JNE)
GM_addStyle("SECTION.listSection {position:absolute; margin-right:2px;}") //SECTION#rightAdBar, 

GM_addStyle("DIV.sidebarBlockContent {padding-right:0px; }")

//SIDEBAR LINKS
GM_addStyle("DIV.sidebarBlockContent a {color:#409fff;}")

//AFTER ARTICLE and BEFORE COMMENTS LINKS
//GM_addStyle("A.relatedArticle {color:#0077ee;}")

//SEKTSIOON
GM_addStyle("A > H1#sectionHeader {background-color:inherit !important;}")

GM_addStyle("DIV > SECTION#rightContent {position:unset;}")

//FOTO edasi/tagasi
GM_addStyle("DIV.imageViewer .navBar, DIV.imageViewer .navBar .prev, DIV.imageViewer .navBar .next, DIV.imageViewer .navBar .zoom, DIV.imageViewer .navBar .close {background-color:rgb(68,68,68);}") //not all works, because navbar buttons are page-embedded images.

//FOTO KIRJELDUS | ALLKIRI | CAPTION
GM_addStyle("DIV.imageViewer .photoDescription {color:gray;}") //

//PEALKIRI
GM_addStyle("H1.articleHeading {color:Silver;}")

//SISU
GM_addStyle("SECTION.articleLead {color:#969696;}")
GM_addStyle("SECTION.articleContent, SECTION.articleContent * {color:white;}")

GM_addStyle("HTML > BODY > DIV#videoPlayerContent {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'Open Sans\',\'Tahoma\',\'Geneva\',\'sans-serif\'; font-size:150%; color:Silver; font-kerning:none; text-transform:full-width;}")

//GM_addStyle("DIV.videoPlayerContent {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'Open Sans\',\'Tahoma\',\'Geneva\',\'sans-serif\'; font-size:175%; color:Silver; font-kerning:none; text-transform:none;}")

//KEYWORDS
GM_addStyle("SECTION.keywords {color:white;}")

//COMMENTS
GM_addStyle("DIV.articleComments, DIV.commentContent {color:white;}")
GM_addStyle("SPAN.commentName {color:#99CCFF; background-color:#c0c0c0;}")

//RIGHT BORDERS
GM_addStyle("SECTION#rightContent SECTION, SECTION#rightContent .frontPage, SECTION.textSection {border-color:#525252;}")

//RIGHT
GM_addStyle("SECTION#rightContent SECTION HEADER, SECTION.textSection .sectionHeader {color:#888888;}") //latter selector manifests, but does not apply

//TOP LINKS LIST
GM_addStyle("SECTION.scrollSection .even {background-color:#343434;}")