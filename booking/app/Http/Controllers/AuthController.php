<?php

namespace App\Http\Controllers;
// namespace App\Http\Controllers\Auth;
// namespace App\Http\Controllers\Api;
// use App\Http\Controllers\Controller;

use App\Http\Requests\AddagentRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// use App\User;

// use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            // 'type' => $request->type
            
        ]);

        return response()->json([
            'message' => 'User created successfully!',
            'status_code' => 201
        ], 201);
    }

    public function addagent(AddagentRequest $request)
    {

        $filename = '';
        if($request->hasFile('image')){
            $filename = time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('image'),$filename);
        }

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => bcrypt($request->password),
            'image'    => $filename,
            'type'     => 'agent',
        ]);

        return response()->json([
            'message' => 'Agent created successfully!',
            'status_code' => 202
        ], 202);
    }

    public function login(LoginRequest $request){
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            return response()->json([
                'message' => 'Unauthorized',
                'status_code' => 401
            ], 401);
        }

        $user = $request->user();

        if ($user->type == 'admin') {
            $tokenData = $user->createToken('Personal Access Token', ['do_any']);
        }elseif ($user->type == 'agent') {
            $tokenData = $user->createToken('Personal Access Token', ['can_crud_home']);
        }else {
            $tokenData = $user->createToken('Personal Access Token', ['can_creat_ord']);
        }

        $token = $tokenData->token;

        if ($token->save()) {
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500
            ], 500);
        }
    }

    public function logout(Request $request) {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logout successfully',
            'status_code' => 200
        ], 200);
    }

    public function index() {
        $Users = User::latest()->get();
        // foreach($Users as $user){
        //     $user::setAttrbute('added_at', $user->created_at->diffForHumans());
            
        // }
        return response()->json($Users);
    }
}
