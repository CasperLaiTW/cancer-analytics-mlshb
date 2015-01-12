@section('main')
    <div class="jumbotron">
        <h1>分析名單</h1>
        {{ Form::open(['route' => ['analytics'], 'files' => true]) }}
            <div class="form-group">
                {{ Form::file('file') }}
                <p class="help-block">請選擇名單</p>
            </div>
            <button type="submit" class="btn btn-default">開始分析</button>
        {{ Form::close() }}
    </div>
@stop