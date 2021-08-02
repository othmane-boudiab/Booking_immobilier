<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class VilleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \App\Models\Ville::Create([
            'name' => 'casablanca'
        ]);
        \App\Models\Ville::Create([
            'name' => 'rabat'
        ]);
        \App\Models\Ville::Create([
            'name' => 'marrakech'
        ]);
        \App\Models\Ville::Create([
            'name' => 'youssoufia'
        ]);
        \App\Models\Ville::Create([
            'name' => 'Safi'
        ]);
    }
}
