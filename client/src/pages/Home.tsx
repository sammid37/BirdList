// src/pages/Home.tsx
import { Navbar } from "../components/layout/Navbar";

export function Home() {
    return (
    <div className="container mx-auto p-4 max-w-3xl">
        <Navbar />
    
        <main className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Minhas Tarefas</h1>
        
        <div className="alert alert-info">
            <span>Sua lista de tarefas está vazia por enquanto!</span>
        </div>
        </main>
    </div>
    );
}