<?php 
namespace App\Http\Controllers;

use Validator;
use App\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    private $request;


    public function __construct(Request $request)
    {   
        $this->request = $request;
    }

    /**
     * @param user
     */

    protected function jwt(User $user) 
    {
        $payload = [
            'iss' => "lumen-jwt",
            'sub' => $user->id,
            'iat' => time(),
            'exp' => time() + 60 * 60
        ];

        return JWT::encode($payload, env('JWT_SECRET'));
    }


    public function authenticate() 
    {
        $this->validate($this->request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);


        //search for user on users table by email
        $user = User::where('email', $this->request->input('email'))->first();


        /**
         * IF EMAIL DID NOT FOUNDED
         */
        if ( !$user ) {
            return response()->json([
                'error' => 'Email não cadastrado na base de dados!'
            ], 400);
        }

        if( Hash::check($this->request->input('password'), $user->password)){
            return response()->json([
                'token' => $this->jwt($user)
            ], 200);
        }

        return response()->json([
            'error' => 'Email ou senha inválidos'
        ], 400);
    }


}