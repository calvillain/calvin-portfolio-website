module ApplicationHelper
	def fa_link_helper(fa_class, text)
		return raw('<i class="') + fa_class + raw('"></i>') +  " #{text}"
	end

	def fa_button_helper(fa_class, text, link, params={})
		params[:class] = "btn btn-default btn-lg" if params[:class].nil?
		return link_to fa_link_helper(fa_class, text), link, params
	end
end
