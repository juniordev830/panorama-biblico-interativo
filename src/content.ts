import { books } from './canon.ts';

export function bookFromSearch(search: string): string {
  const code = new URLSearchParams(search).get('livro')?.trim().toUpperCase();
  return books.find(book => book.code === code)?.code ?? 'GN';
}

export const periods = [
  { id: 'origens', name: 'Origens e patriarcas', time: 'Cronologia debatida', event: 'Chamado de Abraão',
    evidence: 'Narrativa bíblica', reference: 'Gênesis 12:1–9', detail: 'O chamado introduz terra, descendência e bênção como temas da narrativa.',
    concept: ['Chamado', 'Aliança', 'Bênção às famílias'] },
  { id: 'exodo', name: 'Êxodo e deserto', time: 'Cronologia debatida', event: 'Libertação do Egito e aliança no Sinai',
    evidence: 'Narrativa bíblica', reference: 'Êxodo 12–19', detail: 'A narrativa acompanha a saída do Egito e a chegada ao Sinai. A datação do êxodo é debatida.',
    concept: ['Libertação', 'Aliança', 'Vida em comunidade'] },
  { id: 'terra', name: 'Terra e juízes', time: 'Cronologia debatida', event: 'Travessia do Jordão',
    evidence: 'Narrativa bíblica', reference: 'Josué 3–4; Juízes 2', detail: 'Josué descreve a travessia. Juízes organiza a memória desse período em ciclos de crise e livramento.',
    concept: ['Terra', 'Memória', 'Fidelidade'] },
  { id: 'reinos', name: 'Monarquia e reinos', time: 'c. séc. XI–VIII a.C. nos períodos apresentados', event: 'Queda de Samaria',
    evidence: 'Evento histórico', reference: '2 Reis 17:1–6', detail: 'O domínio neoassírio sobre Samaria marca o fim do reino do Norte, em torno de 722/721 a.C.',
    concept: ['Reino', 'Templo', 'Crítica profética'] },
  { id: 'exilio', name: 'Exílio babilônico', time: 'séc. VI a.C.', event: 'Queda de Jerusalém',
    evidence: 'Evento histórico', reference: '2 Reis 25:8–12', detail: 'Jerusalém e o Primeiro Templo foram destruídos pelos babilônios, evento datado geralmente em 587/586 a.C.',
    concept: ['Cerco', 'Deportação', 'Esperança'] },
  { id: 'retorno', name: 'Período persa e retorno', time: 'a partir de 539 a.C.', event: 'Conquista persa da Babilônia',
    evidence: 'Evento histórico', reference: 'Esdras 1:1–5', detail: 'Ciro conquista Babilônia em 539 a.C. Esdras vincula o início do retorno a um decreto do rei.',
    concept: ['Retorno', 'Reconstrução', 'Memória'] },
  { id: 'jesus', name: 'Jesus e os Evangelhos', time: 'séc. I d.C.', event: 'Ministério, morte e anúncio da ressurreição de Jesus',
    evidence: 'Narrativa e testemunho de fé', reference: 'Marcos 1:14–20; 15–16', detail: 'Os Evangelhos situam o ministério na Galileia e Judeia e proclamam a ressurreição. Os eventos narrados e as datas de composição são questões distintas.',
    concept: ['Reino de Deus', 'Discipulado', 'Testemunho'] },
  { id: 'igreja', name: 'Comunidades cristãs', time: 'séc. I d.C. e datações debatidas', event: 'Expansão das primeiras comunidades',
    evidence: 'Contexto histórico e narrativa', reference: 'Atos 2; 13–14; 1 Tessalonicenses 1', detail: 'Atos descreve a expansão de Jerusalém ao Mediterrâneo. As cartas dão acesso a situações vividas por comunidades locais.',
    concept: ['Espírito', 'Missão', 'Formação comunitária'] },
] as const;

export type Period = typeof periods[number]['id'];
export const genres = ['Pentateuco', 'Históricos', 'Poesia e sabedoria', 'Profetas maiores', 'Profetas menores', 'Evangelhos', 'História da Igreja', 'Cartas paulinas', 'Outras cartas', 'Apocalíptico'] as const;
type Genre = typeof genres[number];
type Entry = { code: string; period: Period; author: string; context: string; focus: string; genre: Genre };
const blocks: [Genre, string][] = [
  ['Pentateuco', `
GN|origens|Moisés na tradição judaico-cristã; composição discutida.|Organiza tradições sobre as origens do mundo e dos antepassados de Israel.|Criação, alianças e família de Abraão.
EX|exodo|Moisés na tradição; composição discutida.|Narra a libertação do Egito, a caminhada ao Sinai e a formação de um povo em aliança.|Páscoa, mar, Sinai e tabernáculo.
LV|exodo|Moisés na tradição; o texto reúne material sacerdotal.|Situa instruções de culto e vida comunitária no cenário do Sinai.|Sacrifícios, pureza e santidade.
NM|exodo|Moisés na tradição; composição discutida.|Acompanha o povo do Sinai às planícies de Moabe, com listas, leis e narrativas.|Deserto, recenseamentos e desafios à liderança.
DT|exodo|Moisés é a voz dos discursos; edição debatida.|Apresenta discursos diante da entrada na terra. O enquadramento literário inclui a morte de Moisés.|Aliança, memória e obediência.`],
  ['Históricos', `
JS|terra|Josué em antiga tradição judaica; redação anônima.|Organiza a entrada na terra, conflitos e distribuição territorial.|Travessia, posse da terra e renovação da aliança.
JZ|terra|Samuel em antiga tradição judaica; redação anônima.|Retrata crises e lideranças regionais antes da monarquia.|Ciclos de opressão e livramento.
RT|terra|Samuel em antiga tradição judaica; autoria desconhecida.|Narra uma história familiar no tempo dos juízes, com conexões com Moabe e Belém.|Lealdade, provisão e genealogia de Davi.
1SM|reinos|Samuel, Natã e Gade em tradição judaica; edição discutida.|A transição da liderança de Samuel para Saul e a ascensão de Davi estruturam o livro.|Origem da monarquia.
2SM|reinos|Natã e Gade em tradição judaica; edição discutida.|A narrativa acompanha o reinado de Davi, suas vitórias e conflitos familiares.|Jerusalém, promessa dinástica e responsabilidade do rei.
1RS|reinos|Jeremias em tradição judaica; redação anônima.|Vai de Salomão ao início dos reinos separados e à atuação de Elias.|Templo, divisão do reino e profecia.
2RS|exilio|Jeremias em tradição judaica; redação anônima.|Acompanha Israel e Judá até as conquistas assíria e babilônica.|Queda de Samaria e de Jerusalém.
1CR|retorno|Esdras em tradição judaica; compilador conhecido como Cronista.|Reconta origens e o reinado de Davi para leitores de época posterior à monarquia.|Genealogias, culto e preparação do templo.
2CR|retorno|Esdras em tradição judaica; compilador conhecido como Cronista.|Reconta Salomão e Judá até a permissão para retornar do exílio.|Templo, reformas e retorno.
ED|retorno|Ligado a Esdras pela tradição; inclui documentos e memórias.|Descreve regresso, reconstrução e reformas no início da época persa.|Templo reconstruído e leitura da Lei.
NE|retorno|Memórias atribuídas a Neemias; edição final discutida.|Acompanha a reconstrução dos muros e reformas comunitárias no período persa.|Muros, administração e renovação da aliança.
ET|retorno|Sem autor identificado; há tradição ligada a Mordecai.|O enredo é ambientado na corte persa. Sua relação com a história é discutida.|Risco à comunidade judaica e origem narrativa de Purim.`],
  ['Poesia e sabedoria', `
JÓ|origens|Autor desconhecido.|A ambientação antiga e a data de composição são questões distintas e debatidas.|Sofrimento, justiça e limites das respostas humanas.
SL|reinos|Coleção com atribuições diversas, incluindo Davi, Asafe e os filhos de Corá.|Poemas de épocas e usos distintos formam uma coletânea em cinco partes.|Louvor, lamento, realeza e confiança.
PV|reinos|Atribuições a Salomão, Agur e Lemuel, entre outras indicações internas.|Reúne coleções de ensinamentos sapienciais com estilos diferentes.|Discernimento nas relações, no trabalho e na fala.
EC|reinos|Ligado tradicionalmente a Salomão; a voz se apresenta como Qohelet.|Explora questões sobre trabalho, tempo e mortalidade. A identificação do autor é debatida.|Limites da busca por controle e sentido.
CT|reinos|Ligado a Salomão no título tradicional; autoria discutida.|Reúne poesia amorosa interpretada de formas diversas na história da leitura.|Amor, desejo e imagem poética.`],
  ['Profetas maiores', `
IS|reinos|Ligado a Isaías, filho de Amoz; formação do livro debatida.|Inclui cenários ligados à Assíria, ao exílio e à esperança de restauração.|Justiça, juízo, esperança e restauração.
JR|exilio|Ligado a Jeremias; Baruque aparece como escriba; formação discutida.|Acompanha o fim de Judá diante da Babilônia e preserva oráculos e narrativas.|Crise de Jerusalém e promessa de nova aliança.
LM|exilio|Jeremias na tradição; poemas anônimos no texto hebraico.|Poemas lamentam a queda de Jerusalém e a devastação da cidade.|Luto, memória e esperança.
EZ|exilio|Ligado ao profeta Ezequiel, sacerdote entre deportados.|Apresenta oráculos e visões em meio ao exílio babilônico.|Responsabilidade, restauração e templo.
DN|exilio|Ligado tradicionalmente a Daniel; data e composição debatidas.|As histórias são ambientadas em cortes do exílio, e as visões usam linguagem apocalíptica.|Fidelidade sob impérios e esperança.`],
  ['Profetas menores', `
OS|reinos|Ligado ao profeta Oseias.|Seu cenário principal é o reino do Norte no século VIII a.C.|Ruptura e renovação da relação de aliança.
JL|exilio|Ligado a Joel, filho de Petuel; data em aberto.|Uma calamidade agrícola organiza parte do apelo. Use a posição no período como entrada temática.|Dia do Senhor, arrependimento e derramamento do Espírito.
AM|reinos|Ligado a Amós, de Tecoa.|A profecia denuncia injustiças no reino do Norte durante o século VIII a.C.|Justiça, culto e responsabilidade social.
OB|exilio|Obadias no título; identidade e data debatidas.|O livro acusa Edom pela violência em uma crise de Judá. Sua vinculação à queda de Jerusalém é uma leitura frequente.|Violência, responsabilidade e restauração.
JN|reinos|Protagonista Jonas, filho de Amitai; narrador anônimo.|Nínive compõe o cenário de uma narrativa que explora a reação do profeta à misericórdia.|Arrependimento e cuidado por outras nações.
MQ|reinos|Ligado a Miqueias, de Moresete.|Oráculos situados em meio a crises de Israel e Judá no século VIII a.C.|Justiça, liderança e esperança.
NA|reinos|Ligado a Naum, de Elcos.|Celebra a queda de Nínive, capital assíria tomada em 612 a.C.; o período agrupa vozes da monarquia.|Violência imperial e queda de Nínive.
HC|exilio|Ligado a Habacuque; data aproximada debatida.|O diálogo menciona os caldeus e pergunta sobre violência e justiça.|Queixa, resposta e confiança.
SF|reinos|Ligado a Sofonias; o título situa a voz no reinado de Josias, antes do exílio.|Oráculos tratam de Judá e de povos vizinhos em contexto de monarquia tardia.|Dia do Senhor, juízo e esperança.
AG|retorno|Ligado a Ageu.|As mensagens são datadas no reinado de Dario I, em torno de 520 a.C.|Reconstrução do templo.
ZC|retorno|Ligado a Zacarias; autoria e unidade das partes finais são debatidas.|As primeiras visões são situadas durante o reinado de Dario I.|Reconstrução, visões e esperança.
ML|retorno|Malaquias é o nome ou título da voz profética; identidade debatida.|As disputas pressupõem culto no templo, geralmente situado no período persa.|Culto, justiça e fidelidade.`],
  ['Evangelhos', `
MT|jesus|Atribuído pela tradição a Mateus; o próprio relato não assina a obra.|Apresenta Jesus em diálogo contínuo com a história e as Escrituras de Israel.|Reino dos céus, ensino e discipulado.
MC|jesus|Atribuído pela tradição a Marcos; relato anônimo.|Organiza ações, conflitos e a jornada de Jesus a Jerusalém.|Autoridade, caminho da cruz e discipulado.
LC|jesus|Atribuído pela tradição a Lucas; o prólogo é anônimo.|Obra relacionada a Atos, dirigida a Teófilo e organizada em torno da jornada de Jesus.|Salvação, oração e atenção aos marginalizados.
JO|jesus|Atribuído pela tradição a João; identidade exata debatida.|O relato dispõe sinais e discursos ao redor da missão de Jesus e do testemunho sobre ele.|Vida, fé, sinais e testemunho.`],
  ['História da Igreja', `
AT|igreja|Atribuído pela tradição a Lucas, autor associado ao terceiro Evangelho.|A narrativa continua o trabalho anterior dedicado a Teófilo, de Jerusalém a Roma.|Pentecostes, missão e comunidades.`],
  ['Cartas paulinas', `
RM|igreja|Paulo é identificado na abertura.|Carta a comunidades de Roma em um contexto de relações entre judeus e gentios.|Evangelho, justiça, fé e vida em comunidade.
1CO|igreja|Paulo, com Sóstenes na saudação.|Responde a conflitos, perguntas e práticas da igreja de Corinto.|Unidade, dons, amor e ressurreição.
2CO|igreja|Paulo, com Timóteo na saudação; unidade da composição debatida.|Reflete relações tensas e reconciliação com Corinto e apresenta uma coleta.|Ministério, fraqueza e generosidade.
GL|igreja|Paulo é identificado na abertura.|Discute se gentios precisam assumir a circuncisão e outros marcos da Lei.|Liberdade, fé e vida no Espírito.
EF|igreja|Atribuída a Paulo no texto e pela tradição; autoria debatida.|Apresenta identidade e unidade da Igreja. A destinação exata é discutida por questões textuais.|Reconciliação, dons e unidade.
FP|igreja|Paulo, com Timóteo na saudação.|Carta ligada ao aprisionamento de Paulo e à parceria com a igreja em Filipos.|Humildade, perseverança e alegria.
CL|igreja|Atribuída a Paulo no texto, com Timóteo na saudação; autoria debatida.|Dirigida à comunidade de Colossos e dialoga com ensinamentos concorrentes.|Primazia de Cristo e vida renovada.
1TS|igreja|Paulo, Silvano e Timóteo na saudação.|Encoraja a comunidade de Tessalônica diante de aflições e perguntas sobre a volta de Cristo.|Esperança, consolo e cuidado mútuo.
2TS|igreja|Atribuída a Paulo, Silvano e Timóteo; autoria debatida.|Trata de perseguição e de alegações a respeito do dia do Senhor.|Perseverança e discernimento.
1TM|igreja|Atribuída a Paulo; autoria paulina discutida.|Dirigida a Timóteo, aborda ensino e organização comunitária.|Liderança, ensino e cuidado.
2TM|igreja|Atribuída a Paulo; autoria paulina discutida.|Tem a forma de encorajamento pessoal em situação de prisão e perigo.|Fidelidade no ensino e perseverança.
TT|igreja|Atribuída a Paulo; autoria paulina discutida.|Endereçada a Tito e fala da organização de igrejas em Creta.|Liderança e boas obras.
FM|igreja|Paulo, com Timóteo na saudação.|Apelo pela recepção de Onésimo em um contexto de escravidão antiga.|Intercessão, reconciliação e fraternidade.`],
  ['Outras cartas', `
HB|igreja|Anônimo; houve atribuição antiga a Paulo e outras propostas.|Escrito exortativo que combina exposição das Escrituras e encorajamento comunitário.|Sacerdócio de Cristo, aliança e perseverança.
TG|igreja|Identifica o autor como Tiago; associação tradicional ao irmão de Jesus é debatida.|Tem a forma de exortações a leitores descritos como dispersos.|Prática da fé, fala e justiça.
1PE|igreja|Atribuída ao apóstolo Pedro na tradição; autoria debatida.|Encoraja comunidades cristãs na Ásia Menor em meio a hostilidade.|Esperança, serviço e conduta.
2PE|igreja|Atribuída ao apóstolo Pedro na tradição; autoria e data debatidas.|Atende disputas sobre ensino e a expectativa da vinda do Senhor.|Memória apostólica e paciência.
1JO|igreja|Associada pela tradição a João; o texto é anônimo.|Orienta uma comunidade marcada por conflitos internos sobre ensino e comunhão.|Amor, confissão e vida comunitária.
2JO|igreja|O remetente se chama Presbítero; ligação tradicional a João é debatida.|Breve carta sobre comunhão, acolhimento e discernimento.|Verdade, amor e ensino.
3JO|igreja|O remetente se chama Presbítero; ligação tradicional a João é debatida.|Dirigida a Gaio, aborda hospitalidade e conflitos de liderança.|Hospitalidade, testemunho e cooperação.
JD|igreja|Judas, irmão de Tiago, no texto; identificação histórica discutida.|Exorta a comunidade diante de ensinamentos e práticas em disputa.|Perseverança e responsabilidade comunitária.`],
  ['Apocalíptico', `
AP|igreja|O autor se identifica como João; associação ao apóstolo é debatida.|Apocalipse e carta às sete igrejas da Ásia, com imagens de conflito, juízo e renovação.|Adoração, resistência e esperança.`],
];

const details: Entry[] = blocks.flatMap(([genre, block]) => block.trim().split('\n').map(line => {
  const [code, period, author, context, focus] = line.split('|');
  return { code, period: period as Period, author, context, focus, genre };
}));
export const library = books.map(book => ({ ...details.find(item => item.code === book.code)!, ...book }));
export type Book = typeof library[number];

export function filterBooks(testament: string, genre: string, period: string, query: string) {
  const normalize = (value: string) => value.normalize('NFD').replace(/\p{M}+/gu, '').toLocaleLowerCase('pt-BR');
  const term = normalize(query).trim();
  return library.filter(book => (!testament || book.testament === testament) && (!genre || book.genre === genre)
    && (!period || book.period === period) && (!term || normalize(book.name + ' ' + book.focus).includes(term)));
}
