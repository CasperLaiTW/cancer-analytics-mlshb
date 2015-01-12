<?php

class HomeController extends BaseController
{
    protected $layout = 'layouts';

    public function index()
    {
        $this->layout->content = View::make('index');
    }
}
