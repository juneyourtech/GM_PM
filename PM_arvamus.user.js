// ==UserScript==
// @name        PM arvamus
// @description PM arvamus eriosa
// @namespace   PM_arvamus_GM
// @updateURL https://github.com/juneyourtech/GM_PM/raw/master/PM_arvamus.user.js
// @include     http://arvamus.postimees.ee/*
// @version     0.8.2.2
// @grant		GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

//GM_addStyle("SECTION#leftContent > ARTICLE > DIV > P, SECTION#leftContent > ARTICLE > SECTION P {background-color:rgba(0,0,0,0.5); color:white;}") //

//LINK BGCOLOR
GM_addStyle("A, A strong, A span, A * {background-color:rgba(255,255,255,0.5);}")

//LINK BGCOLOR & COLOR IN ARTICLE
GM_addStyle("HTML > BODY .article .articleContent A, HTML > BODY .article .articleLead A {background-color:inherit; color:#99ccff;}")

GM_addStyle("HTML > BODY .article .articleContent A:hover, HTML > BODY .article .articleLead A:hover {background-color:inherit !important; color:yellow}")

GM_addStyle("HTML > BODY .article .articleContent A:visited, HTML > BODY .article .articleLead A:visited {background-color:inherit !important; color:DarkGoldenrod;}")

//LINK BGCOLOR IN ARTICLE
GM_addStyle("HTML > BODY .article .articleContent A, HTML > BODY .article .articleContent A * {background-color:transparent;}") //the trick was with child elements

GM_addStyle("HTML > BODY .article .articleContent A:hover, HTML > BODY .article .articleContent A:hover * {background-color:transparent;}")

//SECTION HEADER
GM_addStyle("A > H1#sectionHeader {background-color:inherit; border:none;}") //

GM_addStyle("DIV.pmHeaderBar:hover:after {width:470px; height:97px; border-left-color:Silver; background-color:rgba(0,0,0,0.5); color:white;}") //

GM_addStyle("DIV.imageViewer .photoDescription {background-color:rgba(0,0,0,0.5); color:white;}") //

//KOMMENTAARILINGID
GM_addStyle("DIV.commentExtras A, A.commentActionsBadRep {background-color:transparent;}") //works

GM_addStyle("A.commentActionsBadRep:hover {background-color:transparent !important; border-bottom:none !important;}") //

GM_addStyle("A.commentActionsBadRep:hover {color:red !important;}") //

//
//GM_addStyle("SECTION#leftContent > ARTICLE > DIV {background-color:rgba(255,255,255,0.25);}") //

//ARTIKKEL
GM_addStyle("DIV.publishedMeta, DIV.published {background-color:rgba(0,0,0,0.5);}") //Separated 07.11.2016

GM_addStyle("SECTION.articleLead, SECTION.articleContent, SECTION.articleLead, SECTION.articleContent {background-color:rgba(0,0,0,0.5); color:white;}") //Separated 07.11.2016

//PAYWALLED ARTICLE TEASER FADE //07.11.2016.
GM_addStyle("SECTION.articleTeaser[data-fade-text]::before {background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 95%, #FFF 100%) repeat scroll 0% 0%}")
//This reduces the white linear gradient overlap with white text.
//Set currently for just the arvamus subdomain.

//COMMENTS //New section 07.11.2016
GM_addStyle("DIV.commentRow {background-color:rgba(0,0,0,0.5);}") //Separated 07.11.2016
GM_addStyle("DIV.articleComments, DIV.commentContent {color:white;}") //Separated 07.11.2016

//SECTION.articleLead: tutvustav tekst
//SECTION.articleContent: artikli põhitekst

//ARTICLE SEPARATOR (AD)
GM_addStyle("SECTION#leftContent .article .dfp_ad {margin-top:0px; margin-bottom:0px;}")

//COMMENTS
//COMMENTER NAME
GM_addStyle("SPAN.commentName {color:#99CCFF; background:linear-gradient(to top, transparent, transparent 3px, rgba(255, 255, 255, 0.7) 1px, transparent 17px, transparent 100%);}")
//linear-gradient(to top, rgba(255, 255, 255, 0.61), transparent 16px, transparent 100%)
//linear-gradient(to top, white, transparent 12px, transparent 100%);
//background-color:rgba(255,255,255,0.43);

GM_addStyle("DIV.commentRow {border-bottom:none; margin-bottom:1px;}") //
