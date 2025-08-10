import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface DashboardProps extends PageProps {
    stats: {
        conversas_realizadas: number;
        perguntas_restantes: number;
        plano_atual: string;
        nivel_progresso: string;
        total_perguntas_mes: number;
    };
    ultimasConversas: Array<{
        id: number;
        titulo: string;
        data: string;
        status: string;
    }>;
}

export default function Dashboard() {
    const { auth, stats, ultimasConversas } = usePage<DashboardProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard - MentoraAI" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Header de Boas-vindas */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-sidebar-border/70 dark:border-sidebar-border">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Olá, {auth.user.name}! 👋
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Bem-vindo à sua plataforma de mentoria. Vamos acelerar seu negócio hoje?
                    </p>
                </div>

                {/* Cards de Estatísticas */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Conversas com IA */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Conversas com IA
                            </h3>
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                                💬
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            {stats.conversas_realizadas}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Sessões de mentoria realizadas
                        </p>
                    </div>

                    {/* Plano Atual */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Plano Atual
                            </h3>
                            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                                ⭐
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                            {stats.plano_atual}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {stats.perguntas_restantes} perguntas restantes este mês
                        </p>
                    </div>

                    {/* Progresso */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-sidebar-border/70 dark:border-sidebar-border">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Seu Progresso
                            </h3>
                            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                                📈
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            {stats.nivel_progresso}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Continue evoluindo seu negócio
                        </p>
                    </div>
                </div>

                {/* Área Principal - Chat/Mentoria */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border overflow-hidden">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            🤖 Mentoria com IA
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                            Faça sua pergunta e receba orientações personalizadas para seu negócio
                        </p>
                    </div>
                    <div className="p-6">
                        {ultimasConversas.length > 0 ? (
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                                    Últimas Conversas
                                </h3>
                                <div className="space-y-3">
                                    {ultimasConversas.map((conversa) => (
                                        <div key={conversa.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-medium text-gray-900 dark:text-white">
                                                    {conversa.titulo}
                                                </h4>
                                                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                                                    {conversa.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                {new Date(conversa.data).toLocaleDateString('pt-BR')}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                    Ver Todas as Conversas
                                </button>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">🚀</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Pronto para começar?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Faça sua primeira pergunta sobre empreendedorismo
                                </p>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                    Iniciar Conversa com IA
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
