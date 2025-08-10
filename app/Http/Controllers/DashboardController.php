<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        // Dados mockados para começar - depois vamos buscar do banco
        $stats = [
            'conversas_realizadas' => 0,
            'perguntas_restantes' => 5,
            'plano_atual' => 'Gratuito',
            'nivel_progresso' => 'Iniciante',
            'total_perguntas_mes' => 5
        ];

        // Últimas conversas (mockado)
        $ultimasConversas = [
            [
                'id' => 1,
                'titulo' => 'Como validar minha ideia de negócio?',
                'data' => now()->subDays(2)->format('Y-m-d H:i:s'),
                'status' => 'concluida'
            ],
            // Adicionar mais quando tivermos dados reais
        ];

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'ultimasConversas' => $ultimasConversas,
        ]);
    }
}
