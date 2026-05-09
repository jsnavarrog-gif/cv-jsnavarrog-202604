'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Link, Music, ShieldCheck, 
  FileDown, CheckCircle2, ChevronRight, X, MessageCircle, Globe
} from 'lucide-react';

// --- SISTEMA DE TRADUCCIONES ---
const content = {
  es: {
    nav: ['Home', 'Perfil', 'Experiencia', 'Skills', 'Tech'],
    heroTitle: "Juan Sebastián",
    heroSubtitle: "Senior Project & Product Manager | SCRUM | Transformación Digital | Project Recovery",
    downloadBtn: "Descargar CV",
    profileTitle: "Perfil Profesional",
    profileText1: "Líder estratégico con más de ",
    profileText2: "15 años",
    profileText3: " de trayectoria en la intersección de ",
    profileText4: "tecnología, negocio y experiencia de usuario",
    profileText5: ". Especialista en la gestión del ciclo de vida de productos digitales (SaaS) y transformación digital a escala regional. Experto en ",
    profileText6: "Project Recovery",
    profileText7: ", con un enfoque probado en maximizar el valor de negocio y el ROI mediante la estabilización de ecosistemas críticos.",
    expHeader: "Trayectoria Estratégica",
    skillsHeader: "Estrategia & Disciplina",
    mgmtTitle: "Gestión & Leadership",
    musicTitle: "Actividades Paralelas",
    techHeader: "Stack Tecnológico",
    ctaModal: "¿Quieres ver los KPIs detrás de la magia?",
    ctaLink: "Descarga el detalle técnico aquí",
    skillsList: [
      'Project Recovery & Manejo de Crisis',
      'Scrum & Metodologías Ágiles',
      'Gestión de Stakeholders (C-Level)',
      'ITIL & Gestión del Cambio',
      'Ciclo de Vida de Entrega Continua',
      'Inglés B2 (Upper Intermediate)'
    ],
    musicList: [
      'Estudio en casa & Diseño de sonido',
      'Producción de Sonido & Mezcla',
      'Composición Hard Rock',
      'Cubase Nivel Avanzado',
      'Gestión de Proyectos Musicales'
    ],
    experiences: [
      {
        id: 1,
        title: "El Rescatista",
        subtitle: "Recuperación de proyectos & Manejo de Crisis",
        company: "Sovos / Acepta.com",
        summary: "Estabilización de ecosistemas críticos, proyectos perdidos y recuperación de roadmaps en llamas.",
        details: [
          "Project Recovery: Estabilización de ecosistemas críticos con alto foco en cumplimiento.",
          "Definición de estrategias de normalización y control ante escenarios críticos de alta demanda.",
          "Excelencia relacional con stakeholders C-Level para restablecer confianzas."
        ]
      },
      {
        id: 2,
        title: "El Salón de la Fama",
        subtitle: "Strategic Account Leadership",
        company: "Sovos / Acepta.com",
        summary: "Liderazgo de innovaciones tecnológicas para los gigantes de la industria.",
        details: [
          "Implementaciones normativas para Scotiabank, Transbank, Grupo Claro, Telefónica, Entel y Copec.",
          "Gestión de proyectos abarcando banca, telco, gobierno e industria.",
          "Transformación de requerimientos legales en soluciones tecnológicas de alto rendimiento."
        ]
      },
      {
        id: 3,
        title: "El Motor Invisible",
        subtitle: "Excelencia Técnica & de Cumplimiento",
        company: "Sovos / Acepta.com",
        summary: "Middleware y Facturación Electrónica con 100% de cumplimiento.",
        details: [
          "Supervisión de proyectos de alta complejidad en Servicios Transaccionales e Integración.",
          "Aseguré el 100% de cumplimiento normativo en proyectos críticos regionales.",
          "Digitalización de procesos asegurando entregas claras y estratégicas."
        ]
      },
      {
        id: 4,
        title: "El Conductor",
        subtitle: "Liderazgo Regional",
        company: "Chile, Perú & Brasil",
        summary: "Orquestación de equipos multidisciplinarios en mercados internacionales.",
        details: [
          "Liderazgo de equipos multidisciplinarios en Chile, Perú y Brasil.",
          "Coordinación de consultores técnicos y especialistas para asegurar continuidad operativa.",
          "Gestión de recursos bajo demanda para maximizar la satisfacción del cliente."
        ]
      }
    ]
  },
  en: {
    nav: ['Home', 'Profile', 'Experience', 'Skills', 'Tech'],
    heroTitle: "Juan Sebastian",
    heroSubtitle: "Senior Project & Product Manager | SCRUM | Digital Transformation | Project Recovery",
    downloadBtn: "Download CV",
    profileTitle: "Professional Profile",
    profileText1: "Strategic leader with over ",
    profileText2: "15 years",
    profileText3: " of experience at the intersection of ",
    profileText4: "technology, business, and user experience",
    profileText5: ". Specialist in Digital Product Lifecycle (SaaS) management and regional digital transformation. Expert in ",
    profileText6: "Project Recovery",
    profileText7: ", with a proven track record of maximizing business value and ROI through the stabilization of critical ecosystems.",
    expHeader: "Strategic Journey",
    skillsHeader: "Strategy & Discipline",
    mgmtTitle: "Management & Leadership",
    musicTitle: "Parallel Pursuits",
    techHeader: "Tech Stack",
    ctaModal: "Want to see the KPIs behind the magic?",
    ctaLink: "Download the technical breakdown here",
    skillsList: [
      'Project Recovery & Crisis Management',
      'Scrum & Agile Methodologies',
      'Stakeholder Management (C-Level)',
      'ITIL & Change Management',
      'Continuous Delivery Lifecycle',
      'English B2 (Upper Intermediate)'
    ],
    musicList: [
      'Home Studio & Sound Design',
      'Sound Production & Mixing',
      'Hard Rock Composition',
      'Cubase Advanced User',
      'Music Project Management'
    ],
    experiences: [
      {
        id: 1,
        title: "The Fixer",
        subtitle: "Project Recovery & Crisis Management",
        company: "Sovos / Various",
        summary: "Stabilizing critical ecosystems and recovering roadmaps on fire.",
        details: [
          "Project Recovery: Stabilization of critical ecosystems with a high focus on compliance.",
          "Definition of normalization and control strategies for high-demand critical scenarios.",
          "Relational excellence with C-Suite stakeholders to restore trust."
        ]
      },
      {
        id: 2,
        title: "The Hall of Fame",
        subtitle: "Strategic Account Leadership",
        company: "Sovos / Acepta",
        summary: "Leading technological innovations for industry giants.",
        details: [
          "Regulatory implementations for Scotiabank, Transbank, Grupo Claro, Telefonica, Entel, and Copec.",
          "Project management spanning banking, telco, government, and industrial sectors.",
          "Transforming legal requirements into high-performance technical solutions."
        ]
      },
      {
        id: 3,
        title: "The Invisible Engine",
        subtitle: "Technical & Compliance Excellence",
        company: "Sovos / Acepta",
        summary: "Middleware and e-Invoicing with 100% compliance.",
        details: [
          "Supervision of high-complexity projects in Transactional Services and Integration.",
          "Ensured 100% regulatory compliance in critical regional projects.",
          "Process digitalization ensuring clear and strategic delivery."
        ]
      },
      {
        id: 4,
        title: "The Conductor",
        subtitle: "Regional Leadership",
        company: "Chile, Peru & Brazil",
        summary: "Orchestrating multidisciplinary teams in international markets.",
        details: [
          "Leadership of multidisciplinary teams in Chile, Peru, and Brazil.",
          "Coordination of technical consultants and specialists to ensure operational continuity.",
          "Resource management on demand to maximize customer satisfaction."
        ]
      }
    ]
  }
};

export default function CVPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [selectedExp, setSelectedExp] = useState<any | null>(null);
  const t = content[lang];

    // EFECTO PARA BLOQUEAR ZOOM EN MÓVIL
    useEffect(() => {
      // 1. Inyectar meta tag para evitar escalado
      const meta = document.createElement('meta');
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
      document.getElementsByTagName('head')[0].appendChild(meta);
  
      // 2. Prevenir zoom por gestos (especialmente en iOS Safari)
      const handleGestureStart = (e: Event) => e.preventDefault();
      document.addEventListener('gesturestart', handleGestureStart);
  
      return () => {
        document.removeEventListener('gesturestart', handleGestureStart);
      };
    }, []);

  {/*useEffect(() => {
    const handleGesture = (e: Event) => e.preventDefault();
    document.addEventListener('gesturestart', handleGesture);
    return () => document.removeEventListener('gesturestart', handleGesture);
  }, []);*/}

  useEffect(() => {
    document.body.style.overflow = selectedExp ? 'hidden' : 'unset';
  }, [selectedExp]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
      
      {/* NAVBAR CORREGIDA (Visible en móviles y desktop) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
        <motion.ul 
          className="flex items-center justify-around md:justify-center gap-1 md:gap-8 bg-slate-900/95 backdrop-blur-md border border-slate-700 px-2 md:px-10 py-3 md:py-4 rounded-2xl md:rounded-full shadow-2xl">
          {t.nav.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-[9px] md:text-xs font-black uppercase tracking-tight md:tracking-wider text-slate-400 hover:text-blue-400 transition-colors px-1 md:px-0">
                {item}
              </a>
            </li>
          ))}
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="flex items-center gap-1 md:gap-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 md:px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all ml-1 md:ml-0">
            <Globe size={12} /> {lang.toUpperCase()}
          </button>
        </motion.ul>
      </nav>

      {/* HERO SECTION - RECOUPERADO CONTACTO */}
      <section id="home" className="bg-slate-900 text-white pt-32 pb-16 px-6 border-b border-blue-900/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
              {t.heroTitle} <span className="text-blue-500">Navarro G.</span>
            </h1>
            <p className="text-xs md:text-base text-slate-400 font-medium mb-8">{t.heroSubtitle}</p>
            
            {/* BOTONES DE ACCIÓN RESTAURADOS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a href="mailto:snavarro@live.cl" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg border border-slate-700 text-xs transition">
                <Mail size={14}/> snavarro@live.cl
              </a>
              <a href="https://linkedin.com/in/jsnavarrog" target="_blank" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg border border-slate-700 text-xs transition">
                <Link size={14}/> LinkedIn
              </a>
              <motion.a 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                href="/CV_JSNG_2026.pdf" 
                download 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg transition font-bold shadow-lg text-xs"
              >
                <FileDown size={16} /> {t.downloadBtn}
              </motion.a>
            </div>
          </div>
          <img src="/profile_JSNG.jpg" className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-slate-800 object-cover shadow-2xl" />
        </div>
      </section>

      <main className="max-w-5xl mx-auto py-20 px-6 space-y-24">
        
        {/* PERFIL */}
        <section id="perfil" className="scroll-mt-28">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-6 underline decoration-2 underline-offset-8 decoration-blue-500/30">{t.profileTitle}</h2>
          <p className="text-lg md:text-xl leading-relaxed font-light text-slate-700 italic">"{t.profileText1}<span className="font-bold text-slate-900">{t.profileText2}</span>{t.profileText3}<span className="font-bold text-slate-900">{t.profileText4}</span>{t.profileText5}<span className="text-blue-600 font-medium italic">{t.profileText6}</span>{t.profileText7}"</p>
        </section>

        {/* EXPERIENCIA (GRID CARDS) */}
        <section id="experiencia" className="scroll-mt-28">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-12">{t.expHeader}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.experiences.map((exp: any) => (
              <motion.div 
                key={exp.id} whileHover={{ y: -10 }} onClick={() => setSelectedExp(exp)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group"
              >
                <div className="mb-4 flex justify-between items-start">
                  <span className="bg-slate-100 text-slate-500 text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest">{exp.company}</span>
                  <ChevronRight size={20} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{exp.title}</h3>
                <p className="text-blue-600 font-bold text-xs uppercase mb-4 italic">{exp.subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{exp.summary}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="grid md:grid-cols-2 gap-8 scroll-mt-28">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-2 col-span-full">{t.skillsHeader}</h2>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="flex items-center gap-3 font-black text-slate-900 mb-6 text-lg uppercase italic border-b pb-2">
              <ShieldCheck className="text-blue-600" /> {t.mgmtTitle}
            </h3>
            <ul className="space-y-3">
              {t.skillsList.map((skill: string) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                  <CheckCircle2 size={16} className="text-blue-500" /> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white">
            <h3 className="flex items-center gap-3 font-black text-blue-400 mb-6 text-lg uppercase italic border-b border-slate-800 pb-2">
              <Music /> {t.musicTitle}
            </h3>
            <ul className="space-y-3">
              {t.musicList.map((item: string) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TECH STACK RESTAURADO */}
        <section id="tech" className="scroll-mt-28 text-center pb-20">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-10">{t.techHeader}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['IA', 'SaaS', 'Docker', 'Git', 'Next.js', 'SCRUM', 'JIRA', 'Middleware', 'N8N', 'FabFilter', 'n8n', 'PostgreSQL', 'XML/XSLT'].map(tech => (
              <span key={tech} className="bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-700 shadow-lg">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL DETALLE */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedExp(null)} className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              <button onClick={() => setSelectedExp(null)} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full z-10"><X size={24} /></button>
              <div className="p-8 md:p-12 overflow-y-auto">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4 italic">{selectedExp.title}</h2>
                <ul className="space-y-4 mb-12">
                  {selectedExp.details.map((detail: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-1" />
                      <span className="text-base font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                  <p className="text-blue-900 font-black uppercase text-xs tracking-widest mb-2">{t.ctaModal}</p>
                  <a href="/CV_JSNG_2026.pdf" download className="text-blue-600 font-bold text-sm underline hover:text-blue-800 transition-colors">{t.ctaLink}</a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <a href="https://wa.me/56997973249" target="_blank" className="fixed bottom-6 right-6 z-[110] bg-green-500 text-white p-4 rounded-full shadow-2xl border-2 border-white hover:scale-110 transition-transform">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}