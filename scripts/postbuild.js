import fs from 'fs';
import path from 'path';

const routes = [
  {
    path: '/sobre',
    title: 'Sobre Nós | MPS Machinery',
    description: 'Saiba mais sobre a nossa história e compromisso com o fornecimento de equipamentos pesados em Moçambique.',
    image: 'https://www.mozmpsmachinery.com/assets/logo.png'
  },
  {
    path: '/contato',
    title: 'Contato | MPS Machinery',
    description: 'Fale connosco para soluções e cotações de equipamentos pesados e serviços de dragagem em Moçambique.',
    image: 'https://www.mozmpsmachinery.com/assets/logo.png'
  },
  {
    path: '/servicos/dragagem',
    title: 'Serviços de Dragagem | MPS Machinery',
    description: 'Soluções completas para dragagem capital e de manutenção em portos e vias navegáveis.',
    image: 'https://www.mozmpsmachinery.com/assets/dragagem-capital.jpeg'
  },
  {
    path: '/servicos/equipamentos-pesados',
    title: 'Equipamentos Pesados | MPS Machinery',
    description: 'Fornecimento e manutenção de maquinária pesada multimarcas para mineração, construção e logística.',
    image: 'https://www.mozmpsmachinery.com/assets/Excavadora-Cao6Uhbn.jpg'
  }
];

const distDir = path.resolve('dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

console.log('Generating SEO static HTML files for social media sharing...');

for (const route of routes) {
  let html = indexHtml;
  
  // Replace title
  html = html.replace(/<title>.*?<\/title>/g, `<title>${route.title}</title>`);
  
  // Replace OG and Meta tags
  html = html.replace(/<meta property="og:title" content=".*?"/g, `<meta property="og:title" content="${route.title}"`);
  html = html.replace(/<meta name="description" content=".*?"/g, `<meta name="description" content="${route.description}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/g, `<meta property="og:description" content="${route.description}"`);
  html = html.replace(/<meta property="og:image" content=".*?"/g, `<meta property="og:image" content="${route.image}"`);

  // Remove the JSON-LD from sub-pages (it's best to have specific ones or just keep the main one, we'll keep the main one for simplicity or strip it)
  // html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '');

  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  console.log(`Generated ${route.path}/index.html with specific meta tags.`);
}
