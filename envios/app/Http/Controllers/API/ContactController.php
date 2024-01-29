<?php

namespace App\Http\Controllers\API;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Mail\MessageReceived;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\ContactResource;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::all();

        return response(['contacts' => ContactResource::collection($contacts), 'message' => 'Colecction de Mensajes Correcta'], 200);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        //return response()->json(['respuesta' => $request->all()]);
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

        $contact  = Contact::create($data);
        Mail::to($request->agency_mail)->queue(new MessageReceived($data));
        return response(['contact' => new ContactResource($contact), 'message' => 'Mensaje Creado Correctamente'], 200);


        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        return response(['contact' => new ContactResource($contact), 'message' => 'Detalle de Mensaje Correctamente'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        //
        $contact->update($request->all());
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
