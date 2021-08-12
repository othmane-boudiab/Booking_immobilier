<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Categorie;
use App\Models\ville;
use Auth;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    // public function getCategories(){
    //     $categories  = Categorie::get();
    //     return response()->json($categories);
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function gethome()
    {
        $post = Post::where([
            'user_id' => Auth::id(),
        ])->with(['categorie', 'ville'])->get();
        return response()->json($post);
        
    }

    public function getallhomes(){
        $post = Post::with(['categorie', 'ville'])->get();
        return response()->json($post);
    }

    public function edithomes($id){
        $post = Post::with(['categorie', 'ville'])->find($id);
        return response()->json($post);
    }

    // public function getallhomes(){
    //     $post = Post::with(['categorie', 'ville'])->get();
    //     return response()->json($post);
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addhome(Request $request)
    {
        $filename = '';
        if($request->hasFile('image')){
            $filename = time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('image'),$filename);
        }

        $post = Post::create([
            'title'         => $request->title,
            'description'   => $request->description,
            'surface'       => $request->surface,
            'rooms'         => $request->rooms,
            'categorie_id'  => $request->categorie,
            'ville_id'      => $request->ville,
            'user_id'       => Auth::id(),
            'adress'        => $request->adress,
            'price'          => $request->prix,
            'image'         => $filename,
        ]);
        return response()->json([
            'message' => 'Post created successfully!',
            'status_code' => 202
        ], 202);
    }

    public function updatehome($id, Request $request){
        $post = Post::find($id);
        $filename = $post->image;
        // $filename = '';
        if($request->hasFile('image')){
            $filename = time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('image'),$filename);
        }

        $post->title = $request->title;
        $post->description = $request->description;
        $post->surface = $request->surface;
        $post->categorie_id = $request->categorie;
        $post->ville_id = $request->ville;
        $post->adress = $request->adress;
        $post->price = $request->price;
        $post->image = $filename != '' ? $filename : $post->image;
        $post->save();

        // $post = Post::create([
        //     'title'         => $request->title,
        //     'description'   => $request->description,
        //     'surface'       => $request->surface,
        //     'rooms'         => $request->rooms,
        //     'categorie_id'  => $request->categorie,
        //     'ville_id'      => $request->ville,
        //     'user_id'       => Auth::id(),
        //     'adress'        => $request->adress,
        //     'price'          => $request->prix,
        //     'image'         => $filename,
        // ]);
        return response()->json([
            'message' => 'Post created successfully!',
            'status_code' => 202
        ], 202);
    }

    


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }

    public function deletehome($id){
        $post = Post::find($id);
        $post->delete();
    }
}
