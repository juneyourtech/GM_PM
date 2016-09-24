// ==UserScript==
// @name        PM mobile
// @namespace   PM_mobile
// @description PM for mobile devices
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
// @version     1
// ==/UserScript==

GM_addStyle("HTML > BODY {color:black;}")

GM_addStyle("@document domain(elu24.postimees.ee) {HTML > BODY {color:Silver !important;} }")

GM_addStyle("HTML > BODY .article .articleContent a, BODY.section-81 .article .articleContent a {color:blue;}")

GM_addStyle("*:visited, A:visited, A:visited strong, A:visited span, A:visited * {font-style:oblique !important; font-style:italic !important; font-weight:400 !important; color:DarkGoldenrod !important; background:none; background-color:SandyBrown !important; text-decoration:underline !important; border:solid 5px DarkGoldenRod !important;}")

GM_addStyle("A:visited > H1#sectionHeader {background-color:white !important;}")

GM_addStyle("ARTICLE.frontSuperArt > A:visited, ARTICLE.frontSuperArt > A:visited STRONG, ARTICLE.frontSuperArt > A:visited SPAN, ARTICLE.frontSuperArt > A:visited * {background-color:inherit !important; color:white !important; text-decoration:underline !important; font-weight:normal !important;}")

GM_addStyle("A[href*=pluss] {font-weight:300 !important; color:red !important; background:none; background-color:LavenderBlush !important; border:solid 1px red !important;}")

GM_addStyle("BODY A[href*=\"www.60pluss\"], BODY A[href*=\"www.60pluss\"] strong, BODY A[href*=\"www.60pluss\"] span, BODY A[href*=\"www.60pluss\"] * {color:brown !important; background-color:inherit !important; border:none !important;}")

GM_addStyle("SECTION.frontType7 A[href*=reporter-ee] .frontHeading, SECTION.frontBlock.frontType12 A[href*=reporter-ee] .frontHeading, SECTION.frontType7 A[href*=\"reporter.postimees\"] .frontHeading, SECTION.frontBlock.frontType12 A[href*=\"reporter.postimees\"] .frontHeading, SECTION.frontBlock.frontType11 A[href*=\"reporter.postimees\"] .frontHeading {margin-top:0px; margin-left:0px; padding-left:1px; padding-right:1px; font-size:1.1em !important; background:linear-gradient(to bottom, rgb(255, 253, 236), transparent 2.2em, transparent 100%) !important;}")

GM_addStyle("@media only screen and (max-width:1023px) {SECTION.frontBlock.frontType7 A[href*=reporter-ee] .frontHeading:not(.frontComments), SECTION.frontBlock.frontType7 A[href*=reporter-ee] .frontHeading:not(.frontComments) SPAN:not(.frontComments) {font-size:1.1em !important;} SECTION.frontBlock.frontType12 A[href*=reporter-ee] .frontHeading:not(.frontComments), SECTION.frontBlock.frontType12 A[href*=reporter-ee] .frontHeading:not(.frontComments) SPAN:not(.frontComments) {font-size:1em !important;}}")

GM_addStyle("SECTION#rightAdBar {display:none; padding-top:unset; position:absolute;}")

GM_addStyle("DIV#wrap {width:auto; min-width:240px; max-width:unset;}")

GM_addStyle("DIV.container, DIV.sitehatContainer {width:100%; background-color:inherit; padding-left:0px; padding-right:0px; overflow-x:hidden;}")

GM_addStyle("DIV.container {max-width:unset;}")

GM_addStyle("HEADER#contentHeader {width:auto; min-width:240px; max-width:unset;}")

GM_addStyle("A.pmLogo {width:100px; height:20px; float:left;}")

GM_addStyle("DIV#moveMenuCont A.pmLogo {float:unset; margin-top:8px; margin-left:5px;}")

GM_addStyle("DIV#headerWeather {display:inline-block; float:left; margin-left:1px;}")

GM_addStyle("DIV.pmHeaderRight {display:inline-block; clear:both; height:95px;}") // background-color:#99ccff; initial height seems to have been 105px. Let's see how this fares.

GM_addStyle("DIV.pmHeaderRight A {clear:both;}")

GM_addStyle("DIV#headQuote {padding-top:0px; padding-bottom:1px;}")

GM_addStyle("DIV.quoteText {float:unset; display:inline; width:auto;}") //overflow-x:hidden;

GM_addStyle("DIV.quoteTextBlock {position:unset; display:inline; width:auto; margin-top:0px !important;}")

GM_addStyle("DIV.quoteTextBlock .text {display:block; text-align:right;}")

GM_addStyle("DIV.quoteTextBlock .name {display:block; position:relative; float:unset; margin-top:2px; line-height:1.2em;}")

GM_addStyle("NAV.pmMainNav {clear:both;}")

GM_addStyle("SECTION#rightContent {display:none;}")

GM_addStyle("ARTICLE IMG {height:100%; width:100%;}")

GM_addStyle("SECTION#articleAuthors .authorImage {height:initial; width:initial;}")

GM_addStyle("ARTICLE.frontArticle IMG {height:100%; width:100%; max-height:100%; max-width:100%;}") //max-width:unset; 

GM_addStyle("HTML > BODY > DIV.content {padding-left:0px;}")

GM_addStyle("IFRAME[id*=\"liveblog\"] HTML > BODY > .content {border-left:solid 2px Blue;}")

GM_addStyle("DIV.liveblog {background-color:black; color:Silver;}")

GM_addStyle("DIV.liveblog .panel {background-color:black; color:Silver;}")

GM_addStyle("DIV.liveblog .introduction .status {margin-right:7px;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .introduction {padding-top:5px; padding-right:1px; padding-bottom:5px; padding-left:1px;}")

GM_addStyle("DIV.liveblog .introduction .articleDate {color:Silver;}")

GM_addStyle("DIV.liveblog H2.event-header {color:Silver;}")

GM_addStyle("DIV.liveblog .dropdown {color:Silver;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .feed-header, LIVEBLOG.liveblogEmbedContainer.narrower .feed-header {color:Silver;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event-list {padding-riht:6px;}")

GM_addStyle("DIV.liveblog .event .time {background-color:inherit; color:#e0e0e0;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event .time:not(.sectionFontColor) {color:#cff;}")

GM_addStyle("DIV.liveblog .event {margin-left:6px; border-left-width:2px; padding-bottom:0px;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event {color:#888888;}")

GM_addStyle("DIV.liveblog .event:not(.key) {border-left-color:#707070;}")

GM_addStyle("LIVEBLOG.liveblogEmbedContainer.mobile .liveblog .event .bullet {background-color:inherit;}")

GM_addStyle("DIV.liveblog .event .content {color:Silver; margin-right:1px; border-bottom-color:#525252;}")

GM_addStyle("DIV.liveblog .event .content H3 {color:white;}")

GM_addStyle("DIV.liveblog .event .content P > STRONG {color:white;}")

//FOOTER BLOCK

GM_addStyle("SECTION.footerBlock {float:left;}")

GM_addStyle("NAV.footerShortcuts {line-height:unset !important;}")

GM_addStyle("NAV.footerShortcuts .insideContainer .links {display:inline; line-height:1em !important;}")

GM_addStyle("NAV.footerShortcuts .links A {display:inline-block; line-height:1em !important; vertical-align:middle;}")

GM_addStyle("DIV.fullWidthArticle {max-width:unset;}")

GM_addStyle("DIV.fullWidthArticle .articleData {padding:28px 5px 30px 0px; overflow-y:hidden;}")

GM_addStyle("DIV.underFrontArticleContainer {padding-top:81px;} ")

GM_addStyle("DIV.fullDoubleArticleContainer .dataContainer + .dataContainer, DIV.fullRowArticleContainer .dataContainer + .dataContainer, DIV.fullRowArticleContainer .dataContainer + .am_ads + .dataContainer, DIV.fullRowArticleContainer .dataContainer + .dfp_ad + .dataContainer {margin-left:0px; margin-right:1px;}") //float:left; 

GM_addStyle("DIV.fullRowArticleContainer {white-space:normal;}")

GM_addStyle("DIV.fullRowArticleContainer .dataContainer {margin-right:1px;}")

GM_addStyle("DIV.fullDoubleArticleContainer .dataContainer + .dataContainer {margin-top:1px; margin-right:1px;}")

GM_addStyle("DIV.fullDoubleArticleContainer {display:inline-block;}")

GM_addStyle("DIV.fullDoubleArticleContainer .dataContainer {display:inline-block; float:left;}")

GM_addStyle("DIV.fullDoubleArticleContainer .articleData IMG {height:100% !important; width:100% !important;}")

/* GM_addStyle("SECTION.footerEditor {}") */

GM_addStyle("DIV.usefulLinks {margin:0px;}")

GM_addStyle("DIV.footerBottom {clear:both;}")