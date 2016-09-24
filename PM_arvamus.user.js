// ==UserScript==
// @name        PM arvamus
// @namespace   PM arvamus eriosa
// @updateURL https://github.com/martrootamm/GM_PM/raw/master/PM_arvamus.user.js
// @include     http://arvamus.postimees.ee/*
// @version     0.8.0
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

//ARTIKKEL & COMMENTS
GM_addStyle("DIV.publishedMeta, DIV.published, SECTION.articleLead, SECTION.articleContent, DIV.commentRow {background-color:rgba(0,0,0,0.5);}") //

//SECTION.articleLead: tutvustav tekst
//SECTION.articleContent: artikli põhitekst

GM_addStyle("SECTION.articleLead, SECTION.articleContent, DIV.articleComments, DIV.commentContent {color:white;}") //

//ARTICLE SEPARATOR (AD)
GM_addStyle("SECTION#leftContent .article .dfp_ad {margin-top:0px; margin-bottom:0px;}")

//COMMENTS
//COMMENTER NAME
GM_addStyle("SPAN.commentName {color:#99CCFF; background:linear-gradient(to top, transparent, transparent 3px, rgba(255, 255, 255, 0.7) 1px, transparent 17px, transparent 100%);}")
//linear-gradient(to top, rgba(255, 255, 255, 0.61), transparent 16px, transparent 100%)
//linear-gradient(to top, white, transparent 12px, transparent 100%);
//background-color:rgba(255,255,255,0.43);

GM_addStyle("DIV.commentRow {border-bottom:none; margin-bottom:1px;}") //
