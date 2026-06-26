<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

/**
 * Enterprise Application Bootstrap.
 * Configures the foundation of the platform, including routing and global middleware stack.
 */
return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        /**
         * Inject the Security Headers Middleware globally for all requests.
         */
        $middleware->append(\App\Http\Middleware\SecurityHeadersMiddleware::class);

        /**
         * State-of-the-art API rate limiting.
         */
        $middleware->throttleApi('api');
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
