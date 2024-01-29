<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\MessageReceived;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
//use Validator;
class MessagesController extends Controller
{
    public function send(Request $request)
    {   
        //return response()->json(['res' => $request->name]);
        $values = [
              'name'              => $request->name,
              'email'             => $request->email,
              'phone'             => $request->phone,
              'affair'            => $request->affair,
              'subject'           => $request->subject,
              'agency_mail'      => $request->agency_mail,
        ];
        //return response()->json([$values]);
//{"data":{"res":{"name":"David Marin","email":"dmarin@gmail.com","affair":"asunto test","phone":"5525134627","subject":"Mensaje de prueba no responder"}}}
        
        //return response()->json(['respuesta' => $request->all() , 'msg'=>'Su correo se ha enviado satisfactoriamente']);
        

        $messages = [
            'name.required'    => 'El campo de nombre es requerido.',
            'email.required'   => 'El campo de email es requerido.',
            'email.email'      => 'No es un correo electronico',
            'email.unique'     => 'El email ya se encuentra registrado',
            'phone.required'   => 'El campo telefono es obligatorio',
            'phone.string'     => 'El valor no es correcto',
            'phone.max'        => 'Solo se permiten 10 caracteres',
            'phone.min'        => 'Se requieren 10 caracteres',
            'phone.unique'     => 'El telefono ya se encuentra registrado',
            'subject.required' => 'El campo de comentarios es requerido.',
        ];

        // Validation
        $validator = Validator::make($values, [
        //$validator = Validator::make($request->all(), [
            'name'     => 'required',
            'email'    => 'required|email',
            'phone'    => 'required|string|max:10|min:10',
            'subject'  => 'required',

        ],$messages);

        if($validator->fails()){

            return response()->json(['status' => 0 , 'error'=>$validator->errors()->toArray()]);
        
        }

        

        Mail::to($request->agency_mail)->queue(new MessageReceived($values));
        //return new MessageReceived($values);
        return response()->json(['status' => 1 , 'msg'=>'Su correo se ha enviado satisfactoriamente']);
    }
}
