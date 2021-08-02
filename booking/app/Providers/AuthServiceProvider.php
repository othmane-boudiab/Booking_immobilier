<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::tokensCan([
            'do_any' => 'admin',
            'can_crud_home' => 'agent',
            'can_creat_ord' => 'client',
        ]);
        Passport::routes();
        // Passport::personalAccessClientSecret('HQSju2B1UH9MsMznz65sv9jfcfdikPVS7Ge9V6tg');
        // Passport::personalAccessClientId('2');

    }
}
