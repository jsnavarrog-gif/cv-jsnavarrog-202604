'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Link, Music, ShieldCheck, 
  FileDown, CheckCircle2, ChevronRight, X, Briefcase, MessageCircle
} from 'lucide-react';

// --- DATOS CENTRALIZADOS ---
const experiences = [
  {
    id: 1,
    company: "Soho Humantech",
    role: "Project Manager SSR",
    period: "2025",
    summary: "Gestión de proyectos End-to-End y desarrollo de plataformas SaaS, Design System e Inteligencia Artificial.",
    details: [
      "Lideré células multidisciplinarias (Desarrollo, QA, Líderes Técnicos) utilizando herramientas de Inteligencia Artificial y JIRA para el manejo de backlog y ceremonias, asegurando transparencia y cumplimiento de hitos.",
      "Sector Energía: Dirigí iniciativa de Design System (Research, Discovery, Blueprint) logrando la optimización de procesos operativos y cierre de brechas en terreno.",
      "Sector Industrial (Aceros): Gestioné el desarrollo de una plataforma SaaS para el control y administración de capacitaciones críticas.",
      "Reporte directo a PMO y Gerencia, con presentaciones de avance a Directorios y coordinación con equipos TI internos y externos."
    ]
  },
  {
    id: 2,
    company: "Sovos",
    role: "Project Manager II",
    period: "2020 - 2025",
    summary: "Dirección de portafolio de cuentas críticas, proyectos de integración y transformación digital para Grandes Cuentas en Chile, Perú y Brasil.",
    details: [
      "Project Recovery: Estabilización de ecosistemas críticos con alto foco en cumplimiento.",
      "Definición de estrategias de normalización y control ante escenarios críticos de alta demanda. Excelencia relacional con clientes.",
      "Lideré innovaciones tecnológicas e implementaciones normativas para clientes críticos de la compañía como Scotiabank, Transbank, Grupo Claro, Grupo Telefónica, ENTEL, Copec, Autopistas, ESSBIO, Grupo Banmédica, SK, Grupo Astara, Grupo Derco, Tricolor, Larraín Vial, entre muchas otras, abarcando variados sectores empresariales.",
      "Supervisé proyectos de alta complejidad en Facturación Electrónica, Integración de Sistemas, Servicios Transaccionales, Digitalización de Procesos, asegurando cumplimiento normativo y corporativo, entregas claras y estratégicas a clientes finales.",
      "Lideré equipos coordinando recursos como Technical & Solutions Consultants y de diferentes áreas, bajo demanda, para asegurar la continuidad operativa y satisfacción del cliente.",
      "Aseguré el 100% de cumplimiento normativo en proyectos de Facturación Electrónica e Integración.",
      "Liderazgo de equipos multidisciplinarios en Chile, Perú y Brasil."
    ]
  },
  {
    id: 3,
    company: "Acepta.com",
    role: "Consultor de Proyectos Senior",
    period: "2013 - 2020",
    summary: "Hito DIPRES y automatización de operaciones estatales. Proyectos de integración y servicios de Facturación Electrónica y desarrollos a medida.",
    details: [
      "Hito DIPRES: Lideré la automatización de operaciones contables del Estado de Chile. Proyecto de interconexión y automatización de operaciones contables, agilizando pagos para mejorar el flujo de caja del Estado de Chile, integrando plataformas de pago, cobro, asignación y compras públicas.",
      "En 2013 inicié mi trayectoria en la compañía participando en proyectos operativos, evolucionando rápidamente a la gestión de clientes estratégicos en 2014, con responsabilidad total en la ejecución y personal técnico a cargo.",
      "En 2016, tomé el rol de Jefe de Proyectos para Grandes Cuentas. Coordiné equipos multidisciplinarios para proyectos en Chile, Bélgica, Turquía, Italia y Latam, abriendo nuevos nichos de negocio.",
      "En 2018, asumí como Consultor de Proyectos para Grandes Cuentas, liderando implementaciones tecnológicas y coordinando equipos técnicos, de redes e infraestructura."
    ]
  },
  {
    id: 4,
    company: "Proyectos Anteriores",
    role: "Rebsol: Jefe de Proyectos y Otras Experiencias",
    period: "2007- 2013",
    summary: "Foco en sector público y privado (Salud/Desarrollo).",
    details: [
      "Gestión integral del ciclo de vida de desarrollo de software (SDLC) para el sector salud, desde la toma de requerimientos hasta la puesta en marcha y capacitación.",
      "Supervisión de equipos de desarrollo y QA, asegurando la calidad en entregables críticos.",
      "Supervisión de proyectos en terreno, proporcionando soluciones inmediatas a problemáticas que requieren alta capacidad de gestión y liderazgo (área salud).",
      "Ejercí roles técnicos y de soporte en Image Group, Comertex, Aguas y Riles, UDLA y Práctica Laboral en Komatsu Cummins."
    ]
  }
];

export default function CVPage() {
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

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

  useEffect(() => {
    if (selectedExp) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedExp]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
        <motion.ul 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-around md:justify-center gap-2 md:gap-6 bg-slate-900/95 backdrop-blur-md border border-slate-700 px-4 md:px-8 py-3 rounded-full shadow-2xl"
        >
          {['Home', 'Perfil', 'Experiencia', 'Skills', 'Tech'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-slate-400 hover:text-blue-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      </nav>

      {/* HEADER / HERO */}
    <section id="home">
      <header className="bg-slate-900 text-white pt-28 pb-16 px-6 relative overflow-hidden border-b border-blue-900/30">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
              Juan Sebastián <span className="text-blue-500">Navarro G.</span>
            </h1>
            <p className="text-[8px] md:text-base text-slate-400 font-medium mb-8 max-w-xl">
              Senior Project Manager | Scrum | Transformación Digital | Project Recovery
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg transition font-bold shadow-lg text-xs">
                <FileDown size={16} /> Descargar PDF
              </motion.a>
            </div>
          </div>
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src="/profile_JSNG.jpg" 
            alt="Juan Sebastián Navarro"
            className="w-35 h-35 md:w-52 md:h-52 rounded-full border-4 border-slate-800 shadow-2xl object-cover" />
        </div>
      </header>
    </section>

      <main className="max-w-4xl mx-auto py-12 md:py-20 px-6 grid gap-16 md:gap-24">
        
        {/* PERFIL */}
        <section id="perfil" className="scroll-mt-20">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-6 underline decoration-2 underline-offset-8 decoration-blue-500/30">Perfil Profesional</h2>
          <p className="text-[15px] leading-relaxed font-light text-justify text-slate-700">
            Más de <span className="font-bold text-slate-900">15 años</span> de trayectoria liderando proyectos e integraciones de sistemas complejos y transformación digital en Latam y Europa. Gestión y control en <span className="text-blue-600 font-medium italic">Project Recovery</span>, estabilizando ecosistemas críticos y restableciendo confianzas ante stakeholders C-level. Experto en soluciones SaaS, integraciones, middleware, Facturación Electrónica, Desarrollos a medida, Ciclo de vida de entrega continua desde la gestión estratégica y Servicios Transaccionales con alto foco en cumplimiento normativo y agilidad organizacional.
          </p>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className='scroll-mt-20'>
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-12">Trayectoria (Click para detalles)</h2>
          <div className="relative border-l-2 border-slate-200 pl-6 md:pl-8 space-y-12">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                whileHover={{ x: 10 }}
                onClick={() => setSelectedExp(exp)}
                className="relative cursor-pointer group">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-900 border-4 border-blue-500 group-hover:scale-125 transition-transform" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter group-hover:text-blue-600 transition-colors">{exp.company}</h3>
                <p className="text-blue-600 font-bold text-[10px] md:text-xs uppercase mb-2 italic">{exp.role} / {exp.period}</p>
                <p className="text-slate-500 text-xs md:text-sm flex items-center gap-2">
                  {exp.summary} <ChevronRight size={14} className="text-blue-500 hidden md:block" />
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="grid md:grid-cols-2 gap-8 scroll-mt-20">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-2 col-span-full">Intereses & Skills</h2>
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="flex items-center gap-3 font-black text-slate-900 mb-6 text-lg uppercase italic border-b pb-2">
              <ShieldCheck className="text-blue-600" /> Gestión
            </h3>
            <ul className="space-y-3">
              {['Project Recovery & Crisis Management',
                'Scrum & Metodologías Ágiles',
                'Stakeholder Management (C-Level)',
                'ITIL & Gestión del Cambio',
                'Ciclo de Vida de Entrega Continua',
                'Inglés B2 (4A Upper Intermediate by Blended Learning)'].map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                  <CheckCircle2 size={16} className="text-blue-500" /> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 p-6 md:p-8 rounded-2xl shadow-xl text-white">
            <h3 className="flex items-center gap-3 font-black text-blue-400 mb-6 text-lg uppercase italic border-b border-slate-800 pb-2">
              <Music /> Actividades Paralelas
            </h3>
            <ul className="space-y-3">
              {['Home Studio', 'Producción de Sonido & Mezcla', 'Composición Hard Rock', 'Cubase advanced user', 'Gestión de Proyectos Musicales',].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="tech" className="scroll-mt-20 pb-10">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-10">Stack Tecnológico</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['IA', 'Agentes IA', 'Machine Learning', 'Docker', 'N8N', 'Git', 'Next.js', 'SCRUM', 'JIRA', 'Facturación Electrónica', 'Custom Design & Development', 'MS Project', 'Cubase', 'FabFilter'].map(tech => (
              <span key={tech} className="bg-white text-slate-800 px-3 md:px-4 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase border border-slate-200 shadow-sm">
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
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
            >
              <button onClick={() => setSelectedExp(null)} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full z-10"><X size={24} className="text-slate-500" /></button>

              <div className="p-6 md:p-12 overflow-y-auto">
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-2 italic leading-tight">{selectedExp.company}</h2>
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-1 uppercase">{selectedExp.role}</span>
                  <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{selectedExp.period}</span>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest border-b pb-2">Hitos Clave</h4>
                  <ul className="space-y-4">
                    {selectedExp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <ChevronRight size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="bg-slate-900 py-12 text-center text-slate-600 text-[9px] tracking-[0.5em] border-t border-slate-800 px-6">
        <p>© 2026 Juan Sebastián Navarro G. | Management & Tech</p>
      </footer>

      {/* WHATSAPP */}
      <motion.a
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        href="https://wa.me/56997973249?text=Hola%20Juan%20Sebastian,%20vi%20tu%20sitio%20y%20me%20gustaria%20conversar"
        target="_blank"
        className="fixed bottom-6 right-6 z-[110] bg-green-500 text-white p-3 md:p-4 rounded-full shadow-2xl border-2 border-white flex items-center justify-center group">
        <MessageCircle size={24} />
        <span className="absolute right-16 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          ¿Hablamos?
        </span>
      </motion.a>
    </div>
  );
}