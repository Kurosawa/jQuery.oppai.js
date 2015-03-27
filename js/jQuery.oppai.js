(function($)
{
	$.fn.oppai = function(options)
	{
		var defaults = {
			text : "( ﾟ∀ﾟ)o彡゜おっぱい！おっぱい！"
		};
		var setting = $.extend(defaults,options);
	
		this.each(function()
		{
			jQuery(this).html(jQuery(this).html().replace(/。/g,setting.text+"。"));
		});
		return (this);
	};
})(jQuery);
