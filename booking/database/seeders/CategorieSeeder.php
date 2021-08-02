<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Categorie::Create([
            'name' => 'location'
        ]);
        \App\Models\Categorie::Create([
            'name' => 'achat'
        ]);
        
    }
}
