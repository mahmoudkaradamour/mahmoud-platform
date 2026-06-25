<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class TestMongoConnection extends Command
{
    protected $signature = 'db:test-mongo';
    protected $description = 'Test MongoDB Atlas connectivity';

    public function handle()
    {
        $this->info('Testing MongoDB Connection...');
        try {
            $connection = DB::connection('mongodb');
            $dbName = $connection->getDatabaseName();
            $this->info("Successfully connected to MongoDB database: $dbName");

            // Try a simple operation
            $collections = $connection->listCollections();
            $this->info("Found " . count($collections) . " collections.");

        } catch (\Exception $e) {
            $this->error("Connection Failed: " . $e->getMessage());
        }
    }
}
