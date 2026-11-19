import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bookFromSearch, filterBooks, genres, library, periods } from '../src/content.ts';

test('links aceitam códigos do cânon e usam Gênesis como padrão', () => {
  assert.equal(bookFromSearch('?livro=jo'), 'JO');
  assert.equal(bookFromSearch('?livro=xyz'), 'GN');
  assert.equal(bookFromSearch(''), 'GN');
});

test('os 66 livros têm ficha, autoria, contexto e classe', () => {
  assert.equal(library.length, 66);
  assert.equal(new Set(library.map(item => item.code)).size, 66);
  for (const item of library) {
    assert.ok(item.author && item.context && item.focus);
    assert.ok(genres.includes(item.genre));
    assert.ok(periods.some(period => period.id === item.period));
  }
});
test('a divisão do cânon é de 39 livros no AT e 27 no NT', () => {
  assert.equal(filterBooks('AT', '', '', '').length, 39);
  assert.equal(filterBooks('NT', '', '', '').length, 27);
});
test('pesquisa em português funciona sem acentos e combina filtros', () => {
  assert.equal(filterBooks('NT', 'Evangelhos', 'jesus', 'joao')[0]?.name, 'João');
  assert.deepEqual(filterBooks('AT', 'Evangelhos', 'jesus', 'João'), []);
});
test('períodos têm evento, referência e mapa de conceitos, com histórico e narrativa identificados', () => {
  assert.equal(periods.length, 8);
  assert.equal(new Set(periods.map(item => item.id)).size, 8);
  assert.ok(periods.every(item => item.event && item.reference && item.concept.length === 3));
  assert.equal(periods.find(item => item.id === 'exilio')?.evidence, 'Evento histórico');
  assert.equal(periods.find(item => item.id === 'origens')?.evidence, 'Narrativa bíblica');
});
