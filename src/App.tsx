import { STATUS_LABELS, STATUSES } from '@/features/board/types';

export function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1 className="text-page-title">Hakemus Lite</h1>
      </header>

      <section className="board">
        {STATUSES.map((status) => (
          <div key={status} className="column">
            <h2>{STATUS_LABELS[status]}</h2>
          </div>
        ))}
      </section>
    </main>
  );
}
