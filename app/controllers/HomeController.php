<?php

class HomeController extends BaseController
{
    protected $layout = 'layouts';

    public function index()
    {
        $this->layout->content = View::make('index');
    }

    public function analytics()
    {
        if (Input::hasFile('source')) {
            $file = Input::file('source');
            $path = $file->getRealPath();
            dd($path);
        }
    }
}
