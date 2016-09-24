// ==UserScript==
// @name        PM Eurovisioon
// @namespace   PM Eurovisiooni eriosa
// @include     http://eurovisioon.postimees.ee/*
// @version     1
// @grant		GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

//GM_addStyle("SECTION#leftContent > ARTICLE > DIV > P, SECTION#leftContent > ARTICLE > SECTION P {background-color:rgba(0,0,0,0.5); color:white;}") //

//LINK BGCOLOR
GM_addStyle("A, A strong, A span, A * {background-color:rgba(255,255,255,0.5) !important;}")

GM_addStyle("DIV.commentVote A {background-color:black !important;}")

//SECTION HEADER
GM_addStyle("A > H1#sectionHeader {background-color:inherit; border:none;}") //

//
//GM_addStyle("SECTION#leftContent > ARTICLE > DIV {background-color:rgba(255,255,255,0.25);}") //

//ARTIKKEL
GM_addStyle("DIV.publishedMeta, SECTION.articleLead, SECTION.articleContent {background-color:rgba(0,0,0,0.5);}") //

GM_addStyle("SECTION.articleLead, SECTION.articleContent {color:white;}") //

//KOMMID
GM_addStyle("SPAN.commentName {color:Silver;}") //
GM_addStyle("DIV.commentContent {color:white;}") //