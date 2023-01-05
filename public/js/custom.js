/* ----------------------------------

Name: custom.js

------------------------------------- */
/*====================================================

	Table of Contents
		01. Loading Screen 
		02. Lightbox
====================================================*/

jQuery(document).ready(function($) {
	"use strict";	
/*======================

	01. Loading Screen 

========================*/
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 0);
/*======================

	02. Lightbox 

========================*/
	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
});