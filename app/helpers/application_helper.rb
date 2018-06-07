module ApplicationHelper
	def fa_link_helper(fa_class, text)
		return raw('<i class="') + fa_class + raw('"></i>') +  " #{text}"
	end

	def fa_button_helper(fa_class, text, link, params={})
		return link_to fa_link_helper(fa_class, text), link, 
			class: params[:class].nil? ? "btn btn-default btn-lg" : params[:class], 
			style: params[:style].nil? ? "" : params[:style],
			target: params[:target].nil? ? "" : params[:target]
	end
end
