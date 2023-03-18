
//Switcher Styles
function switcherEvents() {
	'use strict';

	// ______________ SWITCHER-toggle ______________//
	
	$('.layout-setting').on("click", function (e) {
		if (!(document.querySelector('body').classList.contains('dark-theme'))) {
			$('body').addClass('dark-theme');
	
			localStorage.setItem('shiftodark', true);
			localStorage.removeItem('shiftolight');
	
			$('#myonoffswitch4').prop('checked', true);
	
		} else {
			$('body').removeClass('dark-theme');
			$('body').addClass('light-theme');
	
			localStorage.setItem('shiftolight', true);
			localStorage.removeItem('shiftodark');
	
			$('#myonoffswitch3').prop('checked', true);
		}
	});

	/***************** RTL *********************/
	$(document).on("click", '#myonoffswitch2', function () {
		if (this.checked) {
			$('body').addClass('rtl');
			$('body').removeClass('ltr');
			$("html[lang=en]").attr("dir", "rtl");
			$(".select2-container").attr("dir", "rtl");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = true; //don't know if both are necessary
				carouselData.options.rtl = true;
				$(element).trigger('refresh.owl.carousel');
				// window.dispatchEvent(new Event('resize'));
			});

			if (typeof (_bs) !== 'undefined') {
				_bs('.carousel').create.trigger('rtl');
			}

			localStorage.removeItem("shiftoltr");
			localStorage.setItem("shiftortl", true);

		}
	});

	/***************** RTL *********************/

	/***************** LTR *********************/

	$(document).on("click", '#myonoffswitch1', function () {
		if (this.checked) {
			$('body').addClass('ltr');
			$('body').removeClass('rtl');
			$("html[lang=en]").attr("dir", "ltr");
			$(".select2-container").attr("dir", "ltr");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = false; //don't know if both are necessary
				carouselData.options.rtl = false;
				$(element).trigger('refresh.owl.carousel');
				// window.dispatchEvent(new Event('resize'));
			});
			
			if (typeof (_bs) !== 'undefined') {
				_bs('.carousel').create.trigger('ltr');
			}

			localStorage.removeItem("shiftortl");
			localStorage.setItem("shiftoltr", true);
		}
	});


	/***************** LTR *********************/

	/***************** LIGHT THEME *********************/
	$(document).on("click", '#myonoffswitch3', function () {
		if (this.checked) {
			$('body').addClass('light-theme');
			$('body').removeClass('dark-theme');

			localStorage.removeItem("shiftodark");
			localStorage.removeItem("shiftobgColor")
			localStorage.setItem("shiftolight", true);
			checkOptions();

			const root = document.querySelector(':root');
			root.style = "";
			names()
		}
		localStorageBackup();
	});

	/***************** LIGHT THEME *********************/

	/***************** DARK THEME *********************/

	$(document).on("click", '#myonoffswitch4', function () {
		if (this.checked) {
			$('body').addClass('dark-theme');
			$('body').removeClass('light-theme');

			localStorage.removeItem("shiftolight");
			localStorage.setItem("shiftodark", true);
			checkOptions();

			const root = document.querySelector(':root');
			root.style = "";
			names()
		}
		localStorageBackup()
	});
	/***************** Dark THEME *********************/

	/***************** Add Switcher Classes *********************/

	if (!localStorage.getItem('shiftortl') && !localStorage.getItem('shiftoltr')) {

		/***************** RTL *********************/
		// $('body').addClass('rtl');
		/***************** RTL *********************/

		/***************** LTR *********************/
		// $('body').addClass('ltr');
		/***************** LTR *********************/

	}

	if (!localStorage.getItem('shiftolight') && !localStorage.getItem('shiftodark')) {

		/***************** Light THEME *********************/
		// $('body').addClass('light-theme');
		/***************** Light THEME *********************/

		/***************** DARK THEME *********************/
		// $('body').addClass('dark-theme');
		/***************** Dark THEME *********************/
	}

	/***************** Add Switcher Classes *********************/

}
switcherEvents();

function checkOptions() {
	// rtl
	if (document.querySelector('body').classList.contains('rtl')) {
		$('#myonoffswitch2').prop('checked', true);
	}
	// ltr
	if (document.querySelector('body').classList.contains('ltr')) {
		$('#myonoffswitch1').prop('checked', true);
	}
	// Light-Theme
	if (document.querySelector('body').classList.contains('light-theme')) {
		$('#myonoffswitch3').prop('checked', true);
	}
	// Dark-Theme
	if (document.querySelector('body').classList.contains('dark-theme')) {
		$('#myonoffswitch4').prop('checked', true);
	}
}
checkOptions();

function resetData() {
	$('#myonoffswitch1').prop('checked', true);
	$('#myonoffswitch3').prop('checked', true);
	$('#myonoffswitch2').prop('checked', false);
	$('#myonoffswitch4').prop('checked', false);
	names();
	$('body')?.removeClass('light-theme');
	$('body')?.removeClass('dark-theme');
	$('body')?.removeClass('rtl');
	$('body')?.removeClass('ltr');
	$('body').addClass('ltr');
	$('body').removeClass('rtl');
	$("html[lang=en]").attr("dir", "ltr");
	$("head link#style").attr("href", $(this));
	(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
	var carousel = $('.owl-carousel');
	$.each(carousel, function (index, element) {
		// element == this
		var carouselData = $(element).data('owl.carousel');
		carouselData.settings.rtl = false; //don't know if both are necessary
		carouselData.options.rtl = false;
		$(element).trigger('refresh.owl.carousel');
		// window.dispatchEvent(new Event('resize'));
	});
}

(function () {
	"use strict";

	$(document).ready(function () {

		/***************** RTL HAs Class *********************/

		let bodyRtl = $('body').hasClass('rtl');
		if (bodyRtl) {
			$('body').addClass('rtl');
			$('body').removeClass('ltr');
			$("html[lang=en]").attr("dir", "rtl");
			$("head link#style").attr("href", $(this));
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
			//carousel//
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = true; //don't know if both are necessary
				carouselData.options.rtl = true;
				$(element).trigger('refresh.owl.carousel');
				// window.dispatchEvent(new Event('resize'));
			});

			if (typeof (_bs) !== 'undefined') {
				_bs('.carousel').create.trigger('rtl');
			}

		}
		/***************** RTL HAs Class *********************/

	});

})()
