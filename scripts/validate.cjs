// Validação estática sem dependências: node scripts/validate.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root,file),'utf8');
const htmlFiles = ['index.html',...fs.readdirSync(path.join(root,'pages')).filter(f=>f.endsWith('.html')).map(f=>'pages/'+f)];
let scripts=0, references=0;
for (const file of htmlFiles) {
  const html=read(file);
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (!match[1].includes('src=')) {new vm.Script(match[2],{filename:file});scripts++;}
  }
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const target=match[1].split(/[?#]/)[0];
    if (!target || /^(?:[a-z]+:|\/\/)/i.test(target)) continue;
    assert.ok(fs.existsSync(path.resolve(root,path.dirname(file),target)),`${file}: caminho ausente ${target}`);references++;
  }
  for(const match of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) assert.match(match[0],/rel="noopener noreferrer"/);
}
for(const file of fs.readdirSync(path.join(root,'js')).filter(f=>f.endsWith('.js'))) {new vm.Script(read('js/'+file),{filename:file});scripts++;}
const catalog=vm.runInNewContext(read('js/catalog-data.js')+'\n({products:CATALOGO,categories:CATALOG_CATEGORIES})');
const ids=new Set();
for(const p of catalog.products) {
  assert.ok(!ids.has(p.id),'Identificador duplicado: '+p.id);ids.add(p.id);
  const category=catalog.categories.find(c=>c.id===p.category);
  assert.ok(category?.subcategories.some(s=>s.id===p.subcategory),'Categoria inválida: '+p.id);
  for(const field of ['id','name','category','subcategory','flavor','desc','unit','availability']) assert.equal(typeof p[field],'string');
  assert.ok(p.volume>0 && Number.isFinite(p.order));assert.ok(Array.isArray(p.images));
  assert.ok(['consultar','disponivel','indisponivel','oculto'].includes(p.availability));
  for(const image of [p.photo,...p.images].filter(Boolean)) assert.ok(fs.existsSync(path.join(root,image)),'Imagem ausente: '+image);
}
const reviews=vm.runInNewContext(read('js/reviews-data.js')+'\nREVIEWS');
assert.equal(new Set(reviews.map(r=>r.id)).size,reviews.length);
for(const r of reviews) {assert.ok(r.name&&r.text);assert.ok(r.rating===null || r.rating>=1&&r.rating<=5);}
const config={window:{}};vm.runInNewContext(read('js/config.js'),config);
for(const url of Object.values(config.window.CREAM_DELIVERY)) if(url) assert.equal(new URL(url).protocol,'https:');
assert.match(read('css/commerce.css'),/prefers-reduced-motion/);
console.log(`OK: ${htmlFiles.length} páginas, ${scripts} scripts, ${references} caminhos locais, ${ids.size} produtos e ${reviews.length} avaliações.`);
