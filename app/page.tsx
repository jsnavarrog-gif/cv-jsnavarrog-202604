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
    summary: "Gestión de plataformas SaaS e Inteligencia Artificial.",
    details: [
      "Lideré iniciativas de Design System para el sector energía, optimizando procesos operativos en terreno.",
      "Gestioné el desarrollo de plataformas SaaS críticas bajo marcos Scrum e IA.",
      "Reporte directo a Directorios, asegurando transparencia en hitos de cumplimiento.",
      "Implementación de flujos de trabajo automatizados para optimizar el delivery."
    ]
  },
  {
    id: 2,
    company: "Sovos",
    role: "Project Manager II",
    period: "2020 - 2025",
    summary: "Dirección de portafolio para cuentas regionales críticas.",
    details: [
      "Gestión de portafolio para clientes críticos: Scotiabank, SMU, Telefónica, Enel y Copec.",
      "Aseguré el 100% de cumplimiento normativo en proyectos de Facturación Electrónica e Integración.",
      "Liderazgo de equipos multidisciplinarios en Chile, Perú y Brasil.",
      "Project Recovery: Estabilización de ecosistemas críticos con alto foco en cumplimiento."
    ]
  },
  {
    id: 3,
    company: "Acepta.com",
    role: "Consultor de Proyectos Senior",
    period: "2013 - 2020",
    summary: "Hito DIPRES y automatización de operaciones estatales.",
    details: [
      "Hito DIPRES: Lideré la automatización de operaciones contables del Estado de Chile.",
      "Coordinación de equipos técnicos en Bélgica, Turquía, Italia y Latam.",
      "Responsable de la ejecución técnica y estratégica de Grandes Cuentas.",
      "Diseño de arquitecturas de integración para servicios transaccionales."
    ]
  },
  {
    id: 4,
    company: "Proyectos Anteriores",
    role: "Jefe de Proyectos",
    period: "2010 - 2013",
    summary: "Foco en sector público y privado (Salud/Desarrollo).",
    details: [
      "Gestión de proyectos de implementación tecnológica en redes de salud.",
      "Liderazgo de equipos de desarrollo para soluciones a medida."
    ]
  }
];

export default function CVPage() {
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

  useEffect(() => {
    if (selectedExp) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedExp]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
      
      {/* NAVBAR (Ahora visible en todos los dispositivos con ajuste de tamaño) */}
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
            {/*<p className="inline-block bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-4">
              Project Management Specialist
            </p>*/}
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
              Juan Sebastián <span className="text-blue-500">Navarro G.</span>
            </h1>
            <p className="text-sm md:text-base text-slate-400 font-medium mb-8 max-w-xl">
              Senior Project Manager | Scrum Master | Transformación Digital | Project Recovery
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
                href="/CV_JSNG_202604.pdf" 
                download 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg transition font-bold shadow-lg text-xs"
              >
                <FileDown size={16} /> Descargar PDF
              </motion.a>
            </div>
          </div>
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src="/profile_JSNG.jpg" 
            alt="Juan Sebastián Navarro"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-slate-800 shadow-2xl object-cover" 
          />
        </div>
      </header>
    </section>

      <main className="max-w-4xl mx-auto py-12 md:py-20 px-6 grid gap-16 md:gap-24">
        
        {/* PERFIL */}
        <section id="perfil" className="scroll-mt-20">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-6 underline decoration-2 underline-offset-8 decoration-blue-500/30">Perfil Profesional</h2>
          <p className="text-lg md:text-xl leading-relaxed font-light text-justify text-slate-700">
            Más de <span className="font-bold text-slate-900">15 años</span> de trayectoria liderando proyectos complejos y transformación digital en Latam y Europa. Especialista en <span className="text-blue-600 font-medium italic">Project Recovery</span>, estabilizando ecosistemas críticos y restableciendo confianzas ante stakeholders C-level. Experto en soluciones SaaS, integraciones y agilidad organizacional con alto foco en cumplimiento normativo.
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
                className="relative cursor-pointer group"
              >
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
              {['Project Recovery & Crisis', 'Scrum & Agile', 'Stakeholder Mgmt (C-Level)', 'ITIL & Change Mgmt'].map((skill) => (
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
              {['Producción de Sonido & Mezcla', 'Composición Hard Rock', 'Gestión de Proyectos Musicales'].map((item) => (
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
            {['SCRUM', 'JIRA', 'Next.js', 'Docker', 'Git', 'SAP', 'MS Project'].map(tech => (
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
        href="https://wa.me/56997973249"
        target="_blank"
        className="fixed bottom-6 right-6 z-[110] bg-green-500 text-white p-3 md:p-4 rounded-full shadow-2xl border-2 border-white flex items-center justify-center group"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          ¿Hablamos?
        </span>
      </motion.a>
    </div>
  );
}