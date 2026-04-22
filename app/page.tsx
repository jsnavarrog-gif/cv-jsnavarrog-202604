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
                <td>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Juan Sebastián Navarro G.</h1>
                  <p className="text-l text-blue-400 font-medium mb-8">
                    Project Manager Senior | Scrum Master | Transformación Digital | Project Recovery
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
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition font-bold shadow-lg">
                      <FileDown size={18} /> Descargar CV Completo (PDF)
                    </a>
                  </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-4">
                    <img src="/profile_JSNG.jpg" alt="Foto de Perfil" className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg" />
                  </div>
                </td>
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
            <b>Más de 15 años</b> de trayectoria liderando proyectos e integraciones de sistemas complejos y transformación digital en Latam y Europa. 
            Gestión y control en <b>Project Recovery</b>, estabilizando ecosistemas críticos y restableciendo confianzas ante stakeholders C-level. 
            Experto en soluciones SaaS, integraciones, middleware, Facturación Electrónica, Desarrollos a medida y servicios transaccionales con alto foco en cumplimiento normativo y agilidad organizacional.
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
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Gestión de Proyectos </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Project Recovery & Crisis Mgmt </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Scrum & Metodologías Ágiles </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Stakeholder Management (C-Level) </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> ITIL & Gestión del Cambio </li>
              <li className="flex items-center gap-2"><Globe size={14} className="text-blue-500" /> Inglés B2 (Upper Intermediate) </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 text-lg">
              <Music className="text-purple-600" /> Sonido y Producción
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Sonido, Mezcla & Masterización </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Cubase Mixing & Mastering </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Home Studio Recording </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Composición Musical Hard Rock </li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-500" /> Gestión Integral de Proyectos Musicales </li>
            </ul>
          </div>
        </section>
        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4">Stack Tecnológico</h2>
          <div className="flex flex-wrap gap-3">
            {['Gestión de Proyectos', 'Project Recovery', 'PM', 'SCRUM', 'MS Project', 'JIRA', 'Next.js', 'Docker', 'Ollama (IA)', 'XML', 'XSLT',  'Git', 'Cubase'].map(tech => (
              <span key={tech} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-100 py-12 text-center text-slate-500 text-sm border-t border-slate-200">
        <p>© 2026 Juan Sebastián Navarro G. | Construido con Next.js 16 y Tailwind v4.</p>
      </footer>
    </div>
  );
}

// Definimos qué información recibe el componente
interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  points: string[];
}

// Aplicamos los tipos a la función
function ExperienceItem({ company, role, period, points }: ExperienceProps) {
  return (
    <div className="relative">
      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
      <div className="mb-8 ml-4">
        <h3 className="text-xl font-bold text-dark-blue-500">{company}</h3>
        <p className="text-blue-400 font-medium mb-2">{role} | {period}</p>
        <ul className="list-disc list-inside text-slate-800 space-y-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}