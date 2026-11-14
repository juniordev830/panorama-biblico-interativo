import { useState } from 'react';
import { filterBooks, genres, library, periods } from './content.ts';

export default function App() {
  const [testament, setTestament] = useState('');
  const [genre, setGenre] = useState('');
  const [period, setPeriod] = useState('');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string>('GN');
  const [timeline, setTimeline] = useState<string>(periods[0].id);
  const point = periods.find(item => item.id === timeline)!;
  const filtered = filterBooks(testament, genre, period, query);
  const book = filtered.find(item => item.code === selected) ?? filtered[0];

  return <div className="stack">
    <section className="panel stack">
      <h2>Linha do tempo</h2>
      <div className="timeline" aria-label="Períodos históricos e narrativos">
        {periods.map(item => <button key={item.id} aria-pressed={timeline === item.id} onClick={() => setTimeline(item.id)}>{item.name}</button>)}
      </div>
      <div className="split">
        <article className="subtle stack">
          <div><span className="tag">{point.evidence}</span> <span className="tag">{point.time}</span></div>
          <div><h3>{point.event}</h3><p>{point.detail}</p><small>{point.reference}</small></div>
          <div><button onClick={() => { setPeriod(point.id); setQuery(''); setGenre(''); setTestament(''); }}>Filtrar livros deste período</button></div>
        </article>
        <div className="subtle stack">
          <h3>Mapa conceitual do período</h3>
          <ol className="theme-map" aria-label="Conceitos relacionados">{point.concept.map(item => <li key={item}>{item}</li>)}</ol>
          <small>Seleção didática de temas do período.</small>
        </div>
      </div>
    </section>
    <section className="panel stack">
      <div className="row between"><h2>Biblioteca dos 66 livros</h2><small role="status">{filtered.length} de {library.length} livros</small></div>
      <div className="two collapse">
        <label>Busca por livro ou tema<input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Ex.: Filipenses" /></label>
        <label>Testamento<select value={testament} onChange={e => setTestament(e.target.value)}>
          <option value="">Ambos</option><option value="AT">Antigo</option><option value="NT">Novo</option>
        </select></label>
        <label>Classe<select value={genre} onChange={e => setGenre(e.target.value)}><option value="">Todas as classes</option>
          {genres.map(item => <option key={item}>{item}</option>)}</select></label>
        <label>Período de estudo<select value={period} onChange={e => setPeriod(e.target.value)}><option value="">Todos os períodos</option>
          {periods.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
      </div>
      {!book ? <p className="muted">Nenhum livro corresponde aos filtros.</p> : <div className="split book-detail">
        <article className="subtle stack" aria-label="Ficha do livro">
          <div><h3>{book.name}</h3><div className="tags"><span className="tag">{book.genre}</span>
            <span className="tag">{book.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'}</span>
            <span className="tag">{book.chapters} capítulo(s)</span></div></div>
          <p><strong>Atribuição e autoria.</strong> {book.author}</p>
          <p><strong>Contexto histórico e literário.</strong> {book.context}</p>
          <p><strong>Temas em destaque.</strong> {book.focus}</p>
        </article>
        <ul className="list book-nav" aria-label="Livros encontrados">{filtered.map(item => <li key={item.code}>
          <button className="selection" onClick={() => setSelected(item.code)} aria-pressed={item.code === book.code}>{item.name}</button>
        </li>)}</ul>
      </div>}
      <details>
        <summary>Fontes e critérios de classificação</summary>
        <p className="muted">Os períodos organizam a leitura por cenário ou tema. As fichas sinalizam tradições de autoria e pontos debatidos.</p>
        <div className="row">
          <a href="https://oyc.yale.edu/religious-studies/rlst-145">Yale · Antigo Testamento</a>
          <a href="https://oyc.yale.edu/religious-studies/rlst-152">Yale · Novo Testamento</a>
          <a href="https://www.bu.edu/mzank/Jerusalem/cp/ANE.html">Boston University · cronologia</a>
          <a href="https://www.americanbible.org/engage/bible-resources/articles/the-gospels-and-acts/">American Bible Society · Evangelhos</a>
        </div>
      </details>
    </section>
  </div>;
}
