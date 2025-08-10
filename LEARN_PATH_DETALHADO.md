# Learn Path Detalhado - SaaS de Mentoria

## 🎯 Próxima Ação: Análise da Estrutura Atual

### O que vamos fazer agora:
1. **Explorar a estrutura do projeto atual**
2. **Entender como React + Inertia + Laravel trabalham juntos**
3. **Configurar o ambiente básico**
4. **Criar nossa primeira funcionalidade**

### Comandos úteis para começar:
```bash
# Ver estrutura do projeto (alternativas para Windows)
dir /s /b | findstr /v node_modules | findstr /v vendor | head -30
# OU usar PowerShell:
Get-ChildItem -Recurse -Name | Where-Object {$_ -notlike "*node_modules*" -and $_ -notlike "*vendor*"} | Select-Object -First 30
# OU simplesmente usar o VS Code Explorer

# Instalar dependências
composer install
npm install

# Configurar ambiente
cp .env.example .env
php artisan key:generate

# Rodar migrações
php artisan migrate

# Iniciar servidor
php artisan serve
npm run dev
```

## 📖 Conceitos RILT que você precisa entender:

### 1. Fluxo de Requisição RILT
```
Usuário clica → Laravel Route → Controller → Inertia Response → React Component → Render
```

### 2. Estrutura de Arquivos Típica
```
app/
├── Http/Controllers/     # Controllers Laravel
├── Models/              # Models Eloquent
resources/
├── js/
│   ├── Components/      # Componentes React reutilizáveis
│   ├── Pages/          # Páginas React (rotas)
│   └── app.jsx         # Entry point React
├── views/
│   └── app.blade.php   # Template base
routes/
├── web.php             # Rotas web (Inertia)
└── api.php             # Rotas API (se necessário)
```

### 3. Como funciona uma página Inertia:
**Laravel Controller:**
```php
public function dashboard()
{
    return Inertia::render('Dashboard', [
        'user' => auth()->user(),
        'stats' => $this->getStats()
    ]);
}
```

**React Component:**
```jsx
export default function Dashboard({ user, stats }) {
    return (
        <div>
            <h1>Olá, {user.name}!</h1>
            {/* Seus componentes aqui */}
        </div>
    );
}
```

## 🎓 Learning Objectives por Fase:

### Fase 1 - Fundamentos (ATUAL)
**Você vai aprender:**
- Como navegar entre páginas com Inertia
- Como passar dados do Laravel para React
- Como criar componentes React básicos
- Como usar Tailwind para estilização
- Como funciona o sistema de autenticação

**Projeto prático:** 
Criar uma página de dashboard simples com informações do usuário

### Fase 2 - Componentes e Estado
**Você vai aprender:**
- useState para estado local
- useEffect para side effects
- Como criar formulários
- Validação no frontend e backend
- Componentização

**Projeto prático:**
Sistema de perfil de usuário editável

### Fase 3 - Funcionalidades Core
**Você vai aprender:**
- Relacionamentos Eloquent
- CRUD operations
- File uploads
- Middleware customizado
- Jobs e Queues

**Projeto prático:**
Sistema básico de conversas

## 🔥 Dicas de Aprendizado:

1. **Comece pequeno:** Uma funcionalidade por vez
2. **Debug sempre:** Use dd(), console.log(), Laravel Debugbar
3. **Leia a documentação:** Inertia.js docs são excelentes
4. **Experimente:** Mude código e veja o que acontece
5. **Git commits frequentes:** Para poder voltar se algo der errado

## 📋 Checklist da Próxima Sessão:
- [x] Analisar estrutura atual do projeto
- [x] Configurar .env com banco de dados
- [x] Testar se tudo está funcionando
- [ ] Criar primeira página customizada
- [ ] Entender fluxo de dados Inertia

---
*Este arquivo será atualizado a cada sessão de desenvolvimento*
*Status: ✅ Projeto funcionando no Laragon - Explorando estrutura*
