# Portefólio de Mérito — Lourenço Cravo

Site estático (HTML/CSS/JS puro, sem dependências) para a candidatura à **Bolsa de Mérito do Concelho de Oeiras** — ano letivo 2026/2027, ao abrigo do Regulamento n.º 1039/2023 e do Edital n.º 351/2026.

**Domínio:** www.lourencocravo.com (GitHub Pages, via ficheiro `CNAME`)

## Estrutura

O site é uma aplicação de página única com **tabs no topo** — cada tipo de mérito é uma vista própria, navegável por hash:

| Rota | Vista |
|------|-------|
| `#/` | Início — hero, sobre mim, índice de méritos, enquadramento oficial |
| `#/academico` | 01 · Mérito Académico |
| `#/social` | 02 · Mérito Social |
| `#/desportivo` | 03 · Mérito Desportivo |
| `#/cientifico` | 04 · Mérito Científico · Tecnológico |
| `#/artistico` | 05 · Mérito Artístico |
| `#/outros` | 06 · Outros Méritos (carta de motivação, portefólio) |
| `#/contacto` | Contacto |

As vistas seguem a **matriz de avaliação oficial** (Guia de Apoio à Candidatura 2026/2027).

Dentro de cada categoria há **experiências/eventos** (blocos `.entry`), cada um com:

- ano + etiqueta (ex.: «Voluntariado», «Competição»)
- título, sub-título (entidade/função) e descrição
- **média anexa**: vídeo (iframe YouTube), áudio (iframe SoundCloud/Spotify ou ficheiro local), fotos (com lightbox) e documentos (PDF)

## Como editar

1. **Procura `[EDITAR]`** em `index.html` e substitui pelo teu conteúdo real.
2. **Fotos:** copia para `assets/img/` e atualiza os `src` nas `.photo-thumb`. Recomendado: JPG/WebP até ~300 KB, recortes 4:3 ou 16:9.
3. **Vídeos:** carrega para o YouTube (pode ser «não listado») e substitui `VIDEO_ID` no iframe comentado dentro da experiência; depois descomenta o bloco `<div class="media-video">`.
4. **Áudio:** ou iframe do SoundCloud/Spotify (`.media-audio`), ou ficheiro local em `assets/audio/` com `<audio controls src="assets/audio/ficheiro.mp3"></audio>`.
5. **Documentos:** copia os PDF (certificados, cartas, declarações) para `assets/docs/` e atualiza os `href` das `.doc-chip`.
6. **Nova experiência:** duplica um bloco `<article class="entry reveal">` dentro da categoria respetiva e edita o conteúdo.
7. **Foto de perfil:** substitui `assets/img/avatar.svg` por uma foto tua (mantém o nome do ficheiro ou atualiza o `src` no header e hero).

> ⚠️ O guia oficial exige que «todas as declarações, cartas ou outros documentos apresentados estejam devidamente assinados pelo respetivo emissor» — assegura-te de que os PDF anexados são os originais assinados.

## Publicar (GitHub Pages)

```bash
git add .
git commit -m "Atualiza conteúdo do portefólio"
git push origin main
```

O GitHub Pages serve o site em www.lourencocravo.com (configurado pelo ficheiro `CNAME`). Verifica em **Settings → Pages** do repositório que a branch `main` está ativa.

## Testar localmente

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Referências oficiais (em `assets/docs/`)

- `edital-351-2026-bolsas-oeiras.pdf` — Edital n.º 351/2026: candidaturas **2 dez 2026 – 4 jan 2027**, 5.000 €, até 10 bolsas
- `guia-candidatura-bolsas-merito-2026-2027.pdf` — matriz de avaliação (parâmetros 0–5) e critérios
