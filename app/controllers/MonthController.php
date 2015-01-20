<?php

class MonthController extends \BaseController
{
    protected $layout = 'layouts';

    /**
     * Display a listing of the resource.
     * GET /month
     *
     * @return Response
     */
    public function index()
    {
        $this->layout->content = View::make('month');
    }
}
