export default `
	<div id="tasks" class="row"></div>
	<div class="row"></div>
	<div class="row">
		<div class="col-lg-4 col-xs-6">
			<div class="panel panel-default">
				<form class="panel-body" onsubmit="return false">
					<div class="form-inline">
						<input type="text" class="form-control" data-input="name" placeholder="Введите название задачи">
						<button type="submit" class="btn btn-info pull-right" data-action="create">Создать задачу</button>
					</div>
					<span data-role="error" class="label label-danger"></span>
				</form>
			</div>
		</div>
	</div>
`
