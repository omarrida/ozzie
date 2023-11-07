<?php

namespace Tests\Feature;

use App\Models\Maintainer;
use App\Models\Project;
use Github\Api\Issue;
use Github\Api\PullRequest;
use Github\Api\Repo;
use GrahamCampbell\GitHub\Facades\GitHub as GitHubClient;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Mockery;
use Tests\TestCase;

class FetchProjectStatsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function fetch_stats_and_persist_successfully(): void
    {
        Http::preventStrayRequests();

        Http::fake([
            'packagist.org/packages/tighten/existing_package.json' => Http::response([
                'package' => [
                    'downloads' => [
                        'total' => 1000,
                        'monthly' => 100,
                    ],
                ],
            ]),
        ]);

        $this->mockGithubClient('tighten', 'existing_package');

        $project = Project::factory()->create([
            'namespace' => 'tighten',
            'name' => 'existing_package',
            'packagist_name' => null,
        ]);
        $maintainer = Maintainer::factory()->create([
            'github_username' => 'Baz',
        ]);
        $project->maintainers()->attach($maintainer);

        $this->artisan('stats:fetch')->assertSuccessful();
        $project->refresh();

        $this->assertEquals($project->downloads_total, 1000);
        $this->assertEquals($project->downloads_last_30_days, 100);

        $this->assertEquals($project->issues_count, 0);
        $this->assertEquals($project->pull_requests_count, 0);
        $this->assertEquals($project->issues, collect([]));
        $this->assertEquals($project->pull_requests, collect([]));

        $this->assertEquals($project->is_hidden, false);
        $this->assertNotEmpty(Cache::get('projects'));
    }

    /** @test */
    public function fetch_stats_does_not_overwrite_packagist_stats(): void
    {
        Http::preventStrayRequests();

        Http::fake([
            'packagist.org/packages/tighten/404_package.json' => Http::response([], 404),
        ]);

        $this->mockGithubClient('tighten', '404_package');

        $project = Project::factory()->create([
            'namespace' => 'tighten',
            'name' => '404_package',
            'packagist_name' => null,
            'downloads_total' => 100,
            'downloads_last_30_days' => 10,
        ]);
        $maintainer = Maintainer::factory()->create([
            'github_username' => 'Baz',
        ]);
        $project->maintainers()->attach($maintainer);

        $this->artisan('stats:fetch')->assertSuccessful();

        $project->refresh();

        $this->assertEquals($project->downloads_total, 100);
        $this->assertEquals($project->downloads_last_30_days, 10);

        $this->assertEquals($project->issues_count, 0);
        $this->assertEquals($project->pull_requests_count, 0);
        $this->assertEquals($project->issues, collect([]));
        $this->assertEquals($project->pull_requests, collect([]));

        $this->assertEquals($project->is_hidden, false);
        $this->assertNotEmpty(Cache::get('projects'));
    }

    public function mockGithubClient($namespace, $repo): void
    {
        $issuesMock = Mockery::mock(Issue::class);
        $issuesMock->shouldReceive('all')
            ->with($namespace, $repo)
            ->once()
            ->andReturn([]);
        GitHubClient::shouldReceive('issues')
            ->once()
            ->andReturn($issuesMock);

        $pullRequestsMock = Mockery::mock(PullRequest::class);
        $pullRequestsMock->shouldReceive('all')
            ->with($namespace, $repo)
            ->once()
            ->andReturn([]);
        GitHubClient::shouldReceive('pullRequests')
            ->once()
            ->andReturn($pullRequestsMock);

        $reposMock = Mockery::mock(Repo::class);
        $reposMock->shouldReceive('show')
            ->with($namespace, $repo)
            ->once()
            ->andReturn(['archived' => false]);
        GitHubClient::shouldReceive('repo')
            ->once()
            ->andReturn($reposMock);
    }
}
