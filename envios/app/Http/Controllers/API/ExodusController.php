<?php

namespace App\Http\Controllers\API;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Mail\MessageReceived;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\ExodusResource;
use Illuminate\Support\Facades\Validator;

class ExodusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        
        //return response()->json(['respuesta' => $data]);
        
        $messages = [
            'name.required'    => 'El campo de nombre es requerido.',
            'email.required'   => 'El campo de email es requerido.',
            'email.email'      => 'No es un correo electronico',
            'phone.required'   => 'El campo telefono es obligatorio',
            'comments.required' => 'El campo de comentarios es requerido.',
        ];
        $validator = Validator::make($data, [
            'name'     => 'required',
            'email'    => 'required|email',
            'phone'    => 'required|string|max:10|min:10',
            'comments'  => 'required',
        ],$messages);

        if($validator->fails()){

            return response()->json(['error' => $validator->errors(), 'message' => 'validation fail'], 400);
        
        }
        return response(['message' => 'Mensaje Creado Correctamente','status' => 'OK','email' => $request->agency_mail ], 200);
        
        $contact  = Contact::create($data);
        Mail::to($request->agency_mail)->queue(new MessageReceived($data));
        return response(['contact' => new ExodusResource($contact), 'message' => 'Mensaje Creado Correctamente'], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
