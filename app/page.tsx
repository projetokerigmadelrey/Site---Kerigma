'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Eye, 
  Heart, 
  Sparkles, 
  Users, 
  HandHelping, 
  ChevronRight, 
  Mail, 
  Phone, 
  CheckCircle2,
  ArrowRight,
  Calendar,
  MapPin,
  Share2,
  Trophy,
  Video
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm shadow-primary/5">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-headline font-bold tracking-tighter text-primary">Kerigma</div>
        <div className="hidden md:flex items-center gap-8">
          {['Mission', 'Community', 'Stories', 'Events'].map((item) => (
            <a 
              key={item}
              className="font-headline font-bold tracking-tight text-on-surface-variant hover:text-primary transition-colors" 
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary text-on-primary font-headline font-bold px-6 py-2 rounded-lg hover:opacity-90 transition-all scale-95 active:scale-90 duration-200">
            Join Movement
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO2CAC4n3qiaEuIG4QIk2er2QCF_VVlfWb9pj11pmmvI-T6mXQvFh-XHtO0cD-xZeCIKyi_qUBK9tHMpIvuwp8QhHuOyKmiRUqSOaGFQWtWhc_3Kiqlgm1G9YIMfUqVhEHo6RKso-oFLougQ_JNDxb2jBTDrg7SowUq4xNvLRgZGm5ze833XVAS2v3PwZIoRwngh-gjKQH2I72N_R9-uIrM-HBre37Nhbr_UKItLHpBZBhE7dcUrMxVLieQXOQVLQ-rM8D1Q2iiHoU"
          alt="Diverse group of young people laughing"
          fill
          className="object-cover brightness-[0.9] blur-[2px]"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-background"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto text-center mt-12"
      >
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 leading-tight">
          Kerigma – Levando a Palavra, <span className="text-gradient">Transformando Vidas</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 font-medium">
          Somos uma comunidade movida pelo propósito de iluminar o mundo através da fé e do serviço ao próximo.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-bold text-lg rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
            Quero Participar
          </button>
          <button className="w-full md:w-auto px-8 py-4 bg-surface-container-lowest text-primary font-bold text-lg rounded-lg hover:bg-surface-container-low transition-colors">
            Saiba Mais
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="mission">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Nosso Propósito
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Existimos para ser luz no mundo digital e real.
          </h2>
          
          <div className="space-y-8">
            {[
              { icon: Rocket, title: 'Missão', desc: 'Anunciar o Evangelho de forma relevante e impactante a todas as esferas da sociedade.', color: 'bg-primary-container text-primary' },
              { icon: Eye, title: 'Visão', desc: 'Ser referência em acolhimento e transformação espiritual através da tecnologia e amor.', color: 'bg-tertiary-container text-on-tertiary-container' },
              { icon: Heart, title: 'Valores', desc: 'Amor Incondicional, Verdade Bíblica, Inovação e Serviço Comunitário.', color: 'bg-secondary-container text-on-secondary-container' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className={cn("flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center", item.color)}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArMHSzZ6OTPzeC3PFoccjP1CimBeOipacBI2sBLl-AU43wahP_aHo-rKE-teo4cGh2eaTmlVzWn6pEs6aib-v6uWEkY9M_sEY6IzI00k3e1tcAAH_r00HbuL5UKeYbmtEjAg23HKRCbBenVj4MaT_qO4ffDuC_p6zuHtJ_o5hL-oQ1Y4C5zNb7MHi0hetj2HH9BWgJwDDIN4QR3sDUKFdAW524wPLyV45gsKyR4LklGS7Dt8FABT07fNNEhJGtRK0T01EjZ2yycGB-"
              alt="Community gathering"
              width={600}
              height={500}
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-md rounded-2xl">
              <p className="text-primary font-bold italic">&quot;Onde há amor, há Deus.&quot;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Pillars = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Os 4 Pilares da Nossa Caminhada</h2>
          <p className="text-on-surface-variant">Fundamentos que sustentam cada ação do projeto Kerigma.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-surface-container-lowest p-8 rounded-2xl flex flex-col justify-between group hover:bg-primary transition-colors duration-500"
          >
            <div>
              <Sparkles className="text-4xl text-primary group-hover:text-on-primary transition-colors mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-on-primary transition-colors">Evangelismo</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/80 transition-colors">
                Levar a mensagem de esperança de forma dinâmica e moderna, alcançando corações em todos os lugares.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <ArrowRight className="text-primary group-hover:text-on-primary" />
            </div>
          </motion.div>
          
          <div className="bg-secondary-container p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <Users className="text-4xl text-on-secondary-container mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-on-secondary-container">Discipulado</h3>
              <p className="text-on-secondary-container/80">Caminhar junto, ensinando e aprendendo os passos da fé em comunidade.</p>
            </div>
          </div>
          
          <div className="bg-tertiary-container p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <HandHelping className="text-4xl text-on-tertiary-container mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-on-tertiary-container">Assistência</h3>
              <p className="text-on-tertiary-container/80">Ações sociais práticas que manifestam o amor de Deus na terra.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 border-l-8 border-primary">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Heart className="text-4xl text-primary fill-primary" size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Oração</h3>
              <p className="text-on-surface-variant max-w-2xl">
                A oração é o combustível de tudo o que fazemos. Mantemos uma chama acesa de intercessão constante por nossa nação e por cada indivíduo alcançado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  const steps = [
    { id: '01', title: 'Encontro', desc: 'O primeiro contato através de nossas ações de rua ou conteúdo digital impactante.' },
    { id: '02', title: 'Conexão', desc: 'Entrar para um pequeno grupo onde o acolhimento e a amizade são prioridades.' },
    { id: '03', title: 'Crescimento', desc: 'Discipulado personalizado para fortalecer sua identidade e propósito em Deus.' },
    { id: '04', title: 'Envio', desc: 'Agora você está pronto para levar a mensagem adiante e transformar outras vidas.' }
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="community">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-bold">Sua Jornada Conosco</h2>
      </div>
      
      <div className="relative space-y-12">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-primary-container -translate-x-1/2 hidden md:block"></div>
        
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              "flex flex-col md:flex-row items-center gap-8 relative",
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            <div className={cn("md:w-1/2", idx % 2 === 0 ? "md:text-right" : "md:text-left")}>
              <h4 className="text-primary font-bold mb-2 uppercase tracking-wide">Passo {step.id}</h4>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-on-surface-variant">{step.desc}</p>
            </div>
            <div className="w-12 h-12 bg-primary rounded-full border-4 border-background z-10 flex items-center justify-center text-on-primary shrink-0 font-bold">
              {idx + 1}
            </div>
            <div className="md:w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiJOcvHRq7YgpqifS9kzkiMGfldMvrIclfWIoXJlca70OouXxDzRyveQ7BzMxPvkboWIAUCo4Aj6-ie16_X0HeDDst2PlJZF40ojN9hZHl2dKZ59XllsmPiME3BJhcuvnNvsdQ28wuqLzX4uIehZ_zEI5ofI085gPfHfuWIAPGMyh_wMMLwQ5AZiU4uVV1ESwoh_vBlxIo9eyow1dxVL6mRVtcnGgwoztVfK7kfUom9iutlMCKGOOoUwX_IF6sHSKvvASRWWWMcQ2M", h: "h-64" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg0qPyu1bRckSdHI_Z5J115xgcQf5EUavgllCr6_YqWJ9f2qIkiJqiU--L7h7pu9HT-qkmQwei1reqaTjmDfvpMGiCmS50z3Q3lAhWejLS9uuiAwY5eM6LwtgGlNhm8_hewr-xjTOyLCkr_CNgeXrPOX_m3EcrJvgH-m2invi3aPui82AB4uRKFuG5y1SeXuMdgsL1QBrL11H38KSU8Uu4V_x39AtJZcFUOfI9T2z2y_509GTdz5Gtc9Q_uFevO4gXSoSOOWj6cMzP", h: "h-80" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhZeLpmpBKJg1y8CmGmJ2VnB18Lz8q5_QsOtF7XR2cvBWQkebu2tTSBmocsy6CXoj3JXkpleF6XI9h4Awc5FQ6ODst5btIPtjz1JZPLcpyGUbONpvC4qFObj-YLmqyQk8Lkv1BIUu17NvWiv-PNd7mMwQCSi76SsOYiWKzxuDr0Nm3HO0aKNgHU89b6NrkmjIIQjO3l3KwmRKSego4a2TcvFZVDqM8N6BoRKV4ifm3BGxLICVFwgqLWWuUxpbEvEJFOjjKekImbzgl", h: "h-80" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBWBDIYqetUYmT_A641-Swfmd8gsWX1k4F_G1T5rxAsswQPI1d6q8vEopltbocV0KGR6Tgj-ZHgf95zYHI_7Bp5YUr5ato1-RviKm3MwnqJcp54SgjarcIhu2-bKOxbCAaNirZ3OkHNKYipfrjhmlb_NO-LU6wrKp7_uy8K9VBxCasbsIgcpq2YdcP9llGa9udBtOn8B5jfj80EaSNLBDyNxjUJpmbw3x_YOKd6riY1jbA3mlelMRdtb_TFwIYec1cQJVo_5FEquim", h: "h-64" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOzp82gNtrNaRbEbczuEkxrBHQe4MkXqq-McjufZCniO29YYx6ha4pe57jdB6xckuCXFAolSwmprYo-kLj9vz9q4wArD9oDDvaSPMoPIqtjhHRaU-IZ_XdKtUu_v3EyY2ovQ7yI1NOwaO1IOdcU0Q_6HL5W7XMU0nDGiEhFkqErhjl9xancnQj6lzbkigDdF2u6GmEJcYzwhvvu8JhO0mAylQvwAfSx14zlJQztlCYV-_ZiMqcHRrm8dpPLrCwDlPoQpikvTP5pdy6", h: "h-64" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQr6YNm-vUoD5nxaT7MactvRXJCccyVHEHsziAPiC8nkydIrHbtTkvp6qFI5Rj9yAv46ABrG8cs6JL05-WRmyVKmNk8vG_kaY_R3xcX7pTgmvYWYt5L9MlpXvgAao85r-vIrXDTNFYtKv-GrzYjhMAUDlMcNc3tXQxYxg9WIUXlkmkqdewtjU36dhtC0xkekT4gJI4e1czPkNLotUc0YKt1m4hann9Z6EpWBwtSMECx8CRpa5aoyguKXjma-ClClnFPPZEF3Ig5yNa", h: "h-80" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRFqSSOeLKmAzJF8jfeqELg1zMa560o05AO-6p3C1bA4sPMUtY_usl-162BVaK2AOw_VhHwiNAFQIerzGSi6kC_nGWlz7eyLVCznH5CJvYtJn5tM1Zjy23CicG3dNdv_2l8SFAmTzhU7GHmu5nCOki5DSWx7ke3HQHsPtBNwFw0D2H_lkmKvuLt89EOZ_Pyv_ExCmq5BXNaRQtUufOr1eDafpmyIUOCnHA4RdjryUqNzVZcbih1rpNTsoJzb1KJ5O2JyeshWgu8jbo", h: "h-80" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdO1CJi4_-UgWLl8QW5Gc5Weydf565OgkXQzo5rCoZaNjXCjYKJRDnwL1rRo-HspT5BxTBrwTXbGx3gLruEztt9UrviJoO_nI_zDsXKZLP-PzTfRPj_zUHwfIukYQEBs-aveLi3HI8xN8nyb21ZWzKThHl3xs460MJ8X_GgDbNDiSagwnygF6U1vmxpZXzJT9CXNVIx5c5xo0bsb3tLvKKmrM2hRo8B9B7C042E0qpX4I25bHERjawuY1XsAfDUiZ_Z8XdO0LxcLCE", h: "h-64" }
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="stories">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-4xl font-bold mb-12 text-center">Momentos Reais</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={images[0].src} alt="Gallery 1" fill className="object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={images[1].src} alt="Gallery 2" fill className="object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <div className="space-y-4 pt-12">
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={images[2].src} alt="Gallery 3" fill className="object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={images[3].src} alt="Gallery 4" fill className="object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <div className="space-y-4">
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={images[4].src} alt="Gallery 5" fill className="object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={images[5].src} alt="Gallery 6" fill className="object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          <div className="space-y-4 pt-8">
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={images[6].src} alt="Gallery 7" fill className="object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={images[7].src} alt="Gallery 8" fill className="object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const events = [
    { date: '15', month: 'MAI', title: 'Conferência Renovação', location: 'Auditório Central • 19:30' },
    { date: '22', month: 'MAI', title: 'Workshop de Evangelismo', location: 'On-line via Zoom • 20:00' },
    { date: '05', month: 'JUN', title: 'Ação Social Vila Nova', location: 'Ponto de Encontro • 08:00' }
  ];

  return (
    <section className="py-24 bg-surface-container-low px-6" id="events">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="font-headline text-3xl font-bold mb-8">Próximos Eventos</h2>
          <div className="space-y-4">
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 4 }}
                className="bg-surface-container-lowest p-6 rounded-2xl flex items-center justify-between group hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="text-center bg-primary-container/20 p-3 rounded-lg min-w-[80px]">
                    <span className="block text-2xl font-bold text-primary">{event.date}</span>
                    <span className="block text-xs font-bold uppercase text-primary/80">{event.month}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{event.title}</h4>
                    <p className="text-on-surface-variant">{event.location}</p>
                  </div>
                </div>
                <ChevronRight className="text-primary group-hover:translate-x-1 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="bg-primary p-8 rounded-3xl text-on-primary flex flex-col justify-center">
          <h2 className="font-headline text-3xl font-bold mb-8">Nosso Impacto</h2>
          <div className="space-y-8">
            {[
              { val: '12k+', label: 'Vidas alcançadas este ano' },
              { val: '500+', label: 'Voluntários ativos' },
              { val: '45', label: 'Cidades impactadas' }
            ].map((stat, idx) => (
              <React.Fragment key={idx}>
                <div>
                  <span className="block text-4xl font-bold mb-1">{stat.val}</span>
                  <span className="text-on-primary/70 font-medium">{stat.label}</span>
                </div>
                {idx < 2 && <div className="h-px bg-on-primary/20"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center halo-effect mb-24">
        <h2 className="font-headline text-5xl font-bold mb-8 leading-tight">Faça parte do que Deus está fazendo!</h2>
        <p className="text-xl text-on-surface-variant mb-12">Não importa onde você esteja ou seu ponto na jornada, existe um lugar para você aqui.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {['Comunidade Ativa', 'Propósito Claro', 'Apoio Espiritual'].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 text-primary font-bold">
              <CheckCircle2 size={20} />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-surface-container-lowest rounded-3xl shadow-xl p-8 md:p-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-headline text-3xl font-bold mb-6">Fale Conosco</h2>
            <p className="text-on-surface-variant mb-8">Preencha o formulário e um de nossos líderes entrará em contato em breve.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-on-surface-variant">
                <Mail className="text-primary" size={20} />
                contato@kerigma.org
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <Phone className="text-primary" size={20} />
                +55 (11) 99999-9999
              </div>
            </div>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-primary mb-1">Nome Completo</label>
              <input className="w-full bg-surface-container-high border-none rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Seu nome" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-primary mb-1">WhatsApp</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="(00) 00000-0000" type="tel" />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-1">Cidade</label>
                <input className="w-full bg-surface-container-high border-none rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Sua cidade" type="text" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-1">Área de Interesse</label>
              <select className="w-full bg-surface-container-high border-none rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none appearance-none">
                <option>Evangelismo de Rua</option>
                <option>Ação Social</option>
                <option>Discipulado</option>
                <option>Mídias Digitais</option>
              </select>
            </div>
            <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-low pt-48 pb-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold text-on-surface mb-6">Kerigma</div>
          <p className="text-sm text-on-surface-variant">Anunciando a palavra que transforma a realidade das pessoas em todos os lugares.</p>
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="font-headline font-bold text-primary uppercase text-xs tracking-widest">Links</span>
          {['Our Vision', 'Stories', 'Events'].map(link => (
            <a key={link} className="text-sm text-on-surface-variant hover:text-primary transition-all hover:translate-x-1" href="#">{link}</a>
          ))}
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="font-headline font-bold text-primary uppercase text-xs tracking-widest">Ajuda</span>
          {['Support', 'Donate', 'Contact'].map(link => (
            <a key={link} className="text-sm text-on-surface-variant hover:text-primary transition-all hover:translate-x-1" href="#">{link}</a>
          ))}
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="font-headline font-bold text-primary uppercase text-xs tracking-widest">Legal</span>
          {['Privacy Policy', 'Terms of Service'].map(link => (
            <a key={link} className="text-sm text-on-surface-variant hover:text-primary transition-all hover:translate-x-1" href="#">{link}</a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-on-surface/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
        <div>© 2024 Kerigma. Built for the Digital Cathedral.</div>
        <div className="flex gap-6">
          <Share2 size={20} className="hover:text-primary cursor-pointer transition-colors" />
          <Trophy size={20} className="hover:text-primary cursor-pointer transition-colors" />
          <Video size={20} className="hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default function KerigmaApp() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Journey />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
