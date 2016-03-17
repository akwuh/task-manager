export default `
<div class="panel panel-default">
	<div class="panel-heading clearfix">
		<div class="pull-left" style="line-height: 34px"><%= name %></div>
		<span class="label label-default pull-left" style="margin-left: 5px">
			<%= {'waiting':'Ожидает','progress':'Выполняется','done':'Выполнено'}[state] %>
		</span>
		<button data-action="delete" class="btn btn-danger pull-right">Удалить</button>
	</div>
	<div class="panel-body">
		<button data-action="state:waiting" 
			class="btn btn-<%= state == "waiting" ? "primary" : "default"%>">Ожидание</button>
		<button data-action="state:progress" 
			class="btn btn-<%= state == "progress" ? "warning" : "default"%>">В процессе</button>
		<button data-action="state:done" 
			class="btn btn-<%= state == "done" ? "success" : "default"%>">Завершено</button>
	</div>
</div>
`
