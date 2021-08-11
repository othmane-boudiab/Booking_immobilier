<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::prefix('auth')->group(function () {
//     Route::resource('register', 'ApiauthController@register');
// });

// Route::prefix('admin')->group(function () {
//     Route::resource('user', UserController::class);
// });

Route::group(['prefix' => 'auth'], function () {
    // Route::resource('register', 'AuthController');
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    // Route::get('users', 'AuthController@index');
    // Route::get('users', 'AuthController@index')->middleware('scope:do-any');
    Route::post('addagent', 'AuthController@addagent');
    Route::get('edituser/{id}', 'AuthController@edituser');
    Route::get('getCategories', 'CategorieController@index');
    Route::get('getVilles', 'VilleController@index');
    Route::post('updateuser/{id}', 'AuthController@updateuser');
    Route::delete('deleteuser/{id}', 'AuthController@deleteuser');
    // Route::post('addhome', 'PostController@addhome');

    // Route::get('getCategories', [PostController::class, 'getCategories']);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');
        Route::post('addhome', 'PostController@addhome');
        Route::get('gethome', 'PostController@gethome');
        // Route::get('users', 'AuthController@index');
        // Route::get('users', 'AuthController@index')->middleware('scope:do-any');
        Route::get('users', [AuthController::class, 'index'])->middleware('scope:do_any');
        Route::get('getallhomes', [PostController::class, 'getallhomes'])->middleware('scope:do_any');
        // Route::get('getCategories', [PostController::class, 'getCategories'])->middleware('scope:can_crud_home');
        // Route::get('users', function () {
            
        // });
    });
});

