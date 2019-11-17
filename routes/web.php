<?php

$router->get('/', function() {
    return response()->json( array( 'status' => 'error', 'message' => 'No token provided!', 'data' => null) );
});

$router->group(['prefix' => 'api/v1/'], function () use ($router) {
    $router->post('authentication', 'AuthController@authenticate');


    $router->group(['middleware' => 'jwt.auth'], function () use ($router) {
        $router->get('/', function () {

        });

        $router->get('user/profile', function () {

        });
    });
});