(function($)
{
	"use strict";

	$.fn.oppai = function(options)
	{
		var defaults = {
			text: "( ﾟ∀ﾟ)o彡゜おっぱい！おっぱい！"
		};
		var setting = $.extend(defaults, options);

		this.each(function()
		{
			$(this).html($(this).html().replace(/。/g, setting.text + "。"));
		});
		return (this);
	};
})(jQuery);
