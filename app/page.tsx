import React from 'react';
import { Mail, Link, Music, ShieldCheck, BarChart3, FileDown, Globe, CheckCircle2 } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Hero */}
      <header className="bg-slate-900 text-white py-16 px-6">




        <div className="max-w-4xl mx-auto">

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
              <tr>
                <td><h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Juan Sebastián Navarro G.</h1>
            <p className="text-xl text-blue-400 font-medium mb-8">
              Project Manager Senior | Transformación Digital | Scrum Master | Project Recovery
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:snavarro@live.cl" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition border border-slate-700">
                <Mail size={18} /> snavarro@live.cl
              </a>
              <a href="https://linkedin.com/in/jsnavarrog" target="_blank" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition border border-slate-700">
                <Link size={18} /> LinkedIn
              </a>
              <a 
                href="/CV_JSNG_202604.pdf" 
                download 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition font-bold shadow-lg"
              >
                <FileDown size={18} /> Descargar CV Completo (PDF)
              </a>
            </div></td> {/* Celda vacía para alinear bajo el encabezado */}
                <td><div className="flex flex-wrap gap-4">
              <img src="/profile_JSNG.jpg" alt="Foto de Perfil" className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg" />
            </div></td>
              </tr>
      </tbody>
    </table>




          
            
            
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6 grid gap-12">
        
        {/* Perfil Profesional */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4 text-slate-800">Perfil Profesional</h2>
          <p className="text-lg leading-relaxed text-slate-700" style={{ textAlign: 'justify' }}>
            Más de **15 años de trayectoria** liderando integraciones de sistemas complejos y transformación digital en Latam y Europa. 
            Especialista en **Project Recovery**, estabilizando ecosistemas críticos y restableciendo confianzas ante stakeholders C-level. 
            Experto en soluciones SaaS y servicios transaccionales con alto foco en cumplimiento normativo y agilidad organizacional.
          </p>
        </section>

        {/* Experiencia */}
        <section className="grid gap-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4 text-slate-800">Experiencia Destacada</h2>
          
          <div className="relative border-l-2 border-slate-200 pl-6 space-y-10">
            <ExperienceItem 
              company="Soho Humantech" 
              role="Project Manager SSR" 
              period="2025" 
              points={[
                "Lideré iniciativas de Design System para el sector energía, optimizando procesos operativos en terreno.",
                "Gestioné el desarrollo de plataformas SaaS críticas bajo marcos Scrum e Inteligencia Artificial.",
                "Reporte directo a Directorios, asegurando transparencia en hitos de cumplimiento."
              ]}
            />
            <ExperienceItem 
              company="Sovos" 
              role="Project Manager II" 
              period="2020 - 2025" 
              points={[
                "Gestión de portafolio para clientes críticos: Scotiabank, Enel, Transbank y Copec.",
                "Aseguré el 100% de cumplimiento normativo en proyectos de Facturación Electrónica e Integración de Sistemas.",
                "Liderazgo de equipos multidisciplinarios en Chile, Perú y Brasil."
              ]}
            />
            <ExperienceItem 
              company="Acepta.com" 
              role="Consultor de Proyectos Senior" 
              period="2013 - 2020" 
              points={[
                "Hito DIPRES: Lideré la automatización de operaciones contables del Estado de Chile, agilizando pagos gubernamentales.",
                "Coordinación de equipos técnicos en Bélgica, Turquía, Italia y Latam.",
                "Responsable de la ejecución técnica y estratégica de Grandes Cuentas."
              ]}
            />
          </div>
        </section>

        {/* Skills - El "Doble Perfil" */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 text-lg">
              <ShieldCheck className="text-blue-600" /> Gestión y Estrategia
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Gestión de Proyectos, Project Recovery & Crisis Mgmt </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Scrum & Metodologías Ágiles </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Stakeholder Management (C-Level) </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> ITIL & Gestión del Cambio </li>
              <li className="flex items-center gap-2"><Globe size={14} className="text-blue-500" /> Inglés B2 (Upper Intermediate) </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 text-lg">
              <Music className="text-purple-600" /> Ingeniería y Producción
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Sonido, Mezcla & Masterización </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Cubase Expert & Mastering </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Composición Musical Hard Rock </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Gestión Integral de Proyectos Musicales </li>
            </ul>
          </div>
        </section>

      </main>

      <footer className="bg-slate-100 py-12 text-center text-slate-500 text-sm border-t border-slate-200">
        <p>© 2026 Juan Sebastián Navarro G. | Construido con Next.js 16 y Tailwind v4.</p>
      </footer>
    </div>
  );
}

function ExperienceItem({ company, role, period, points }) {
  return (
    <div className="relative">
      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm" />
      <div className="mb-2 flex flex-wrap justify-between items-baseline">
        <h4 className="text-xl font-bold text-slate-800">{role} @ {company}</h4>
        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{period}</span>
      </div>
      <ul className="space-y-1 text-slate-600 text-sm leading-relaxed">
        {points.map((point, i) => (
          <li key={i}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}