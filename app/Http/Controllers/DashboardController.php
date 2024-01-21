<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\news;
use inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = news::where('author_id', auth()->user()->id)->orderByDesc('id')->get();
        return Inertia::render('Dashboard', [
            'data' => $data
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required|string',
            'body' => 'required|string',
            'category' => 'required|string',
            'author_id' => 'required',
            'author_name' => 'required'
        ]);

        news::create($validate);

        return redirect(route('dashboard'))->with('sucess', 'Data Created Successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        $data_edit = news::where("id", $request->id)->get();
        return Inertia::render('Dashboard/EditData', ['data_edit' => $data_edit]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        news::where('id', $request->id)->update([
            'title' => $request->title,
            'body' => $request->body,
            'category' => $request->category,
            'author' => auth()->user()->id
        ]);

        return redirect(route('dashboard'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        // dd($request);
        news::find($request->id)->delete();
        return redirect(route('dashboard'))->with('message', 'Data Delete Succesfully');
    }
}
