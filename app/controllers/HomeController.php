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
            $first = [];
            $nonCheck = [];
            Excel::load($path, function ($render) use (&$first, &$nonCheck) {
                $rows = $render->toArray();
                foreach ($rows as $row) {
                    $keys = array_keys($row);
                    $area = preg_split('/(　|\s)?\d+/', $row[$keys[6]]);
                    if ($row[$keys[0]] === 'V') {
                        $first[$area[0]] = (empty($first[$area[0]]) ? 0 : $first[$area[0]]) + 1;
                    } elseif ($row[$keys[1]] === 'V') {
                        $nonCheck[$area[0]] = (empty($nonCheck[$area[0]]) ? 0 : $nonCheck[$area[0]]) + 1;
                    }
                }
            });
            var_dump($first);
            dd($nonCheck);
        }

    }
}
