var drops = drops || {};

jQuery(document).ready(function ($) {
	'use strict';

	drops.dropdown = function (e) {
		var el = e.parent();
		var text = $('input[type="text"]', el);

		if ($(el).hasClass('active')) {
			//If is currently active, hide it
			el.removeClass('active');
			$('.alm-dropdown', el).removeClass('active');
			return false;
		} else if ($('.alm-dropdown').hasClass('active')) {
			$('.alm-dropdown').each(function (i) {
				$(this).removeClass('active');
				$(this).parent().removeClass('active');
			});
		}

		$('.alm-dropdown').removeClass('active'); //remove active states from currently open dropdowns
		el.addClass('active');
		$('.alm-dropdown', el).addClass('active');
		text.focus(); //Focus on input boxes

		// Bind click event to window.
		$(window).unbind('click').bind('click', drops.closeDropDown);
	};
	drops.closeDropDown = function () {
		$('.alm-dropdown').each(function () {
			$(this).removeClass('active');
			$(this).parent().removeClass('active');
		});
	};

	//Dropdown links
	$(document).on('click', '.alm-drop-btn a.target', function () {
		var e = $(this);
		drops.dropdown(e);
		return false;
	});
});
