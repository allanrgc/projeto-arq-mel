import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Importe o componente de Imagem do Next.js
import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa'; // Ícones de redes sociais
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Arqmel | Arquitetura por Melissa Fujikura",
  description: "Estúdio de arquitetura e interiores focado em criar espaços que inspiram e transformam.",
};

export default function Home() {
  return (
    // Fundo principal suave e cor de texto padrão
    <div className="min-h-screen bg-off-white text-charcoal-text font-sans">
      {/*<Head>
        <title>Arqmel | Arquitetura por Melissa Fujikura</title>
        <meta name="description" content="Estúdio de arquitetura e interiores focado em criar espaços que inspiram e transformam. Projetos por Melissa Fujikura." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         Adicione um link para o favicon aqui, se tiver 
      </Head>*/}

      {/* Cabeçalho com fundo neutro e logo em destaque */}
      <header className="sticky top-0 bg-neutral-beige/80 backdrop-blur-sm shadow-sm z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Bloco da Logo: A imagem dentro de um link para a página inicial */}
          <Link href="/" aria-label="Página inicial da Arqmel">
            <Image 
              src="/images/arqmel-logo-transp.png" 
              alt="Logo Arqmel" 
              width={40} // Ajuste a largura conforme o design da sua logo
              height={40} // Ajuste a altura para manter a proporção
              className="h-12 w-auto" // Controla a altura e deixa a largura automática
            />
          </Link>
          {/* Bloco da Navegação */}
          <nav>
            <ul className="flex space-x-6 text-sm font-medium text-charcoal-text">
              <li><a href="#portfolio" className="hover:text-primary-green transition-colors">Portfólio</a></li>
              <li><a href="#sobre" className="hover:text-primary-green transition-colors">O Estúdio</a></li>
              <li><a href="#servicos" className="hover:text-primary-green transition-colors">Serviços</a></li>
              <li><a href="#contato" className="hover:text-primary-green transition-colors">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Seção Hero - A primeira impressão */}
        <section className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-primary-green mb-4 tracking-tight">
            Arquitetura que transforma espaços e inspira vidas.
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Criamos projetos residenciais e comerciais que unem estética, funcionalidade e bem-estar, refletindo a essência de cada cliente.
          </p>
          <a href="#portfolio" className="mt-8 inline-block bg-primary-green text-white font-bold py-3 px-8 rounded-full hover:bg-dark-green transition-transform hover:scale-105">
            Conheça nossos projetos
          </a>
        </section>

        {/* Seção Portfólio - O coração do site */}
        <section id="portfolio" className="mb-24">
          <h2 className="text-3xl font-serif text-center text-primary-green mb-10">Portfólio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card de Projeto Exemplo 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image src="/images/view8.jpg" alt="Residência Vale Verde" width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">Residência Vale Verde</h3>
                <p className="text-sm">São Paulo, SP</p>
              </div>
            </div>
            {/* Card de Projeto Exemplo 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image src="/images/view12.jpg" alt="Interiores Apartamento M.N." width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">Interiores Apto. M.N.</h3>
                <p className="text-sm">Rio de Janeiro, RJ</p>
              </div>
            </div>
            {/* Card de Projeto Exemplo 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image src="/images/view4.jpg" alt="Loja Conceito" width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">Loja Conceito</h3>
                <p className="text-sm">Belo Horizonte, MG</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção Sobre / O Estúdio */}
        <section id="sobre" className="mb-24 bg-neutral-beige p-10 rounded-lg text-center">
            <h2 className="text-3xl font-serif text-primary-green mb-4">O Estúdio</h2>
            <p className="text-lg max-w-3xl mx-auto">
                Fundado pela arquiteta Melissa Fujikura, o estúdio Arqmel nasceu da paixão por criar ambientes que contam histórias. Acreditamos em uma arquitetura atemporal, que valoriza a luz natural, os materiais genuínos e a conexão com a natureza, sempre com um olhar atento às necessidades e desejos de quem irá habitar o espaço.
            </p>
        </section>

        {/* Seção Serviços */}
        <section id="servicos" className="mb-24">
            <h2 className="text-3xl font-serif text-center text-primary-green mb-10">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="text-xl font-bold mb-2">Projetos de Arquitetura</h3>
                    <p>Desenvolvimento completo de projetos residenciais e comerciais, da concepção à execução.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Design de Interiores</h3>
                    <p>Criação de ambientes internos personalizados que combinam estética, conforto e funcionalidade.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Consultoria</h3>
                    <p>Orientação especializada para reformas, escolha de acabamentos e otimização de layouts.</p>
                </div>
            </div>
        </section>

        {/* Seção Contato */}
        <section id="contato" className="text-center">
          <h2 className="text-3xl font-serif text-primary-green mb-4">Vamos conversar?</h2>
          <p className="text-lg mb-6">Entre em contato para agendar uma conversa e dar o primeiro passo para realizar seu projeto.</p>
          <a href="mailto:contato@arqmel.com" className="text-xl font-semibold text-charcoal-text hover:text-primary-green">
            contato@arqmel.com
          </a>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://instagram.com/arq.melissafujikura" aria-label="Instagram" className="text-2xl text-charcoal-text hover:text-primary-green"><FaInstagram /></a>
            <a href="#" aria-label="Pinterest" className="text-2xl text-charcoal-text hover:text-primary-green"><FaPinterest /></a>
            <a href="https://wa.me/5518997581037" aria-label="WhatsApp" className="text-2xl text-charcoal-text hover:text-primary-green"><FaWhatsapp /></a>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-beige mt-20 p-6 text-center text-sm text-charcoal-text/70">
        <p>© {new Date().getFullYear()} Arqmel por Melissa Fujikura. Todos os direitos reservados.</p>
        <p>João Pessoa - PB, Brasil</p>
      </footer>
    </div>
  );
}