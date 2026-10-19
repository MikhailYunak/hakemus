import { STATUS_LABELS, STATUSES } from '@/features/board/types';

// Стартова оболонка. Дошку, reducer, провайдер і хуки пишеш сам — див. README, тиждень 1.
export function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Hakemus Lite</h1>
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
