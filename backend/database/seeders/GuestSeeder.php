<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GuestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guests = [
            // Teman SMK
            'Dini', 'Annisa', 'Ajeng', 'Nadya avriel', 'Siska', 'Tanti', 'Niken', 
            'Trinita', 'Novi', 'Tia', 'Nadia', 'Faren', 'Fifah', 'Popy', 'Vena', 
            'Kamila', 'Ferni', 'Eka Sinta', 'Nanang', 'Gusti', 'Veno', 'Haikal', 
            'Diego', 'Irnal', 'Jeri', 'Reza', 'ilham',
            // Teman Kuliah
            'Damara', 'Tami', 'Sofi', 'Adel', 'Zulfa', 'Syabila', 'Restu', 
            'Brendy', 'Fiqor', 'Busro', 'Jupiter', 'Josua', 'Jimmy', 'Roihan',
            // Bali
            'Lissa', 'Kak Debora',
            // Gereja
            'hyan dwi saputra', 'BUSY (Bukit Sion Youth)'
        ];

        foreach ($guests as $name) {
            $formattedName = \Illuminate\Support\Str::title($name);
            \App\Models\Guest::updateOrCreate(
                ['slug' => \Illuminate\Support\Str::slug($name)],
                ['name' => $formattedName]
            );
        }
    }
}
