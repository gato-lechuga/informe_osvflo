import { useState, useRef } from 'react';
import {
  Shield,
  Lock,
  AlertTriangle,
  Scale,
  Users,
  Database,
  CheckCircle,
  ChevronDown,
  Menu,
  X,
  Zap,
  Target,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

function App() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const heroRef = useRef(null);
  const analysisRef = useRef(null);
  const conclusionsRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const sections = [
    {
      id: 'resumen',
      title: 'Resumen Ejecutivo',
      subtitle: 'Caso Equifax 2017',
      icon: Shield,
      color: 'from-purple-600 to-blue-600',
      content: `Equifax es una empresa multinacional especializada en recopilación y análisis de información crediticia. El ciberataque de 2017 explotó una vulnerabilidad en Apache Struts, comprometiendo datos de millones de usuarios incluyendo nombres, números de Seguro Social, direcciones, fechas de nacimiento y detalles financieros. La filtración se llevó a cabo entre mayo y julio de 2017, pero no fue descubierta hasta finales de julio.`,
      details: [
        'Vulnerabilidad: Apache Struts CVE-2017-5638',
        'Período: Mayo - Julio 2017',
        'Datos comprometidos: Millones de registros personales y financieros',
        'Descubierto: 29 de julio de 2017',
        'Impacto: Robo de identidad, fraude financiero, suplantación',
      ],
    },
    {
      id: 'marco',
      title: 'Marco Jurídico',
      subtitle: 'Regulaciones Aplicables',
      icon: Scale,
      color: 'from-blue-600 to-cyan-600',
      content: `El caso Equifax constituye uno de los incidentes más relevantes de ciberseguridad y protección de datos a nivel internacional. El incidente permite analizar la interacción entre normas de delitos informáticos, protección de datos personales, regulación financiera y ciberseguridad corporativa.`,
      details: [
        'Ley 21.459: Delitos Informáticos (Chile)',
        'Ley 19.628: Protección de Datos Personales',
        'Regulación financiera internacional',
        'Convenio de Budapest sobre Ciberdelincuencia',
        'Estándares GDPR comparados',
      ],
    },
    {
      id: 'delitos',
      title: 'Tipificación Penal',
      subtitle: 'Ley 21.459',
      icon: AlertTriangle,
      color: 'from-indigo-600 to-purple-600',
      content: `El ciberataque sufrido por Equifax constituye un caso especialmente relevante para analizar la aplicación de la Ley 21.459 sobre Delitos Informáticos. La intrusión permitió a los atacantes acceder de forma no autorizada a sistemas corporativos y extraer grandes volúmenes de información personal y financiera.`,
      details: [
        'Art. 2: Acceso ilícito a sistemas informáticos',
        'Art. 1: Ataque a la integridad de sistemas',
        'Art. 3: Interceptación ilícita de datos',
        'Art. 7-8: Fraude y receptación informática',
        'Mapeo jurídico de conductas delictivas',
      ],
    },
    {
      id: 'tabla_regulaciones',
      title: 'Tabla Comparativa',
      subtitle: 'Marcos Regulatorios',
      icon: Scale,
      color: 'from-cyan-600 to-teal-600',
      content: `Análisis comparativo de los principales marcos regulatorios que aplican al caso Equifax, mostrando las diferencias en protección de datos, tipificación de delitos informáticos y sanciones aplicables.`,
      isTable: true,
      tableData: [
        { marco: 'Ley 19.628', pais: 'Chile', enfoque: 'Protección de Datos', proteccion: 'Principios de seguridad y confidencialidad', delitos: 'Acceso y uso ilícito', sanciones: 'Multas hasta 1.000 UF' },
        { marco: 'Ley 21.459', pais: 'Chile', enfoque: 'Delitos Informáticos', proteccion: 'Seguridad de sistemas', delitos: 'Acceso, interceptación, obstaculización', sanciones: 'Cárcel 61 días a 5 años' },
        { marco: 'GDPR', pais: 'Unión Europea', enfoque: 'Protección de Datos', proteccion: 'Derechos y privacidad integral', delitos: 'Procesamiento ilegal de datos', sanciones: 'Multas hasta €20M o 4% ingresos' },
        { marco: 'Convenio Budapest', pais: 'Internacional', enfoque: 'Ciberdelincuencia', proteccion: 'Armonización penal', delitos: 'Acceso, interferencia, abuso de dispositivos', sanciones: 'Según legislación nacional' },
      ],
    },
    {
      id: 'comparacion',
      title: 'Marcos Regulatorios',
      subtitle: 'Análisis Comparativo',
      icon: Target,
      color: 'from-cyan-600 to-blue-600',
      content: `El caso Equifax permite analizar cómo distintos marcos regulatorios abordan la protección de datos personales, ciberseguridad y responsabilidad empresarial frente a incidentes de gran escala.`,
      details: [
        'Ley 19.628: Seguridad y confidencialidad',
        'Ley 21.459: Delitos informáticos modernizados',
        'Regulación financiera sectorial',
        'GDPR: Estándares internacionales',
        'Estándares de ciberseguridad corporativa',
      ],
    },
    {
      id: 'responsabilidades',
      title: 'Actores y Responsabilidades',
      subtitle: 'Análisis de Obligaciones',
      icon: Users,
      color: 'from-purple-600 to-pink-600',
      content: `El caso Equifax involucró múltiples actores con distintos niveles de responsabilidad jurídica. La filtración masiva generó consecuencias penales, civiles, administrativas y regulatorias que deben ser analizadas desde múltiples perspectivas legales.`,
      details: [
        'Equifax: Responsable del tratamiento de datos',
        'Atacantes: Ejecutores de conductas delictivas',
        'Autoridades: Investigación y fiscalización',
        'Usuarios afectados: Derechos y compensaciones',
        'Organismos reguladores: Supervisión y compliance',
      ],
    },
    {
      id: 'datos',
      title: 'Tratamiento de Datos',
      subtitle: 'Ley 19.628 - Protección',
      icon: Database,
      color: 'from-blue-600 to-indigo-600',
      content: `El caso Equifax constituye uno de los ejemplos más relevantes de vulneración masiva de datos personales y financieros. La filtración comprometió información altamente sensible incluyendo nombres, direcciones, fechas de nacimiento, números de seguro social y antecedentes financieros.`,
      details: [
        'Datos comprometidos: Nombres, direcciones, SSN',
        'Clasificación: Datos personales y sensibles',
        'Principio de seguridad: Incumplimiento grave',
        'Medidas de protección: Inadecuadas o inexistentes',
        'Responsabilidad civil y administrativa',
      ],
    },
    {
      id: 'conclusiones',
      title: 'Recomendaciones',
      subtitle: 'Reflexión y Perspectiva',
      icon: CheckCircle,
      color: 'from-green-600 to-emerald-600',
      content: `El caso Equifax se transformó en un referente internacional sobre responsabilidad corporativa, protección de datos y ciberseguridad. La magnitud de la filtración demostró que una gestión deficiente de vulnerabilidades puede generar consecuencias de gran alcance.`,
      details: [
        'Gestión oportuna de vulnerabilidades',
        'Monitoreo continuo de infraestructura',
        'Segmentación de redes y control de accesos',
        'Cifrado de información sensible',
        'Planes de respuesta ante incidentes',
      ],
    },
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Análisis Equifax</h1>
                <p className="text-xs text-purple-300">Ciberseguridad & Análisis Jurídico</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection(heroRef)} className="text-sm hover:text-purple-300 transition">Inicio</button>
              <button onClick={() => scrollToSection(analysisRef)} className="text-sm hover:text-purple-300 transition">Análisis</button>
              <button onClick={() => scrollToSection(conclusionsRef)} className="text-sm hover:text-purple-300 transition">Recursos</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 mb-6">
            <Zap className="w-4 h-4 text-purple-300" />
            <span className="text-sm text-purple-200">Ciberataque Equifax 2017</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Análisis Integral del Ciberataque a Equifax
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Exploración profesional de los aspectos técnicos, jurídicos y regulatorios del mayor incidente de ciberseguridad en la historia financiera.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection(analysisRef)}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition font-semibold flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Explorar Análisis
            </button>
            <button
              onClick={() => window.open('https://github.com/gato-lechuga/informe_osvflo/tree/main/docs_osvflo', '_blank')}
              className="px-8 py-3 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition font-semibold"
            >
              Documentación Completa
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: '147M+', label: 'Registros Comprometidos' },
            { number: '2-3', label: 'Meses de Exposición' },
            { number: '∞', label: 'Impacto Global' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-purple-500/50 transition"
            >
              <div className="text-4xl font-bold text-purple-300 mb-2">{stat.number}</div>
              <p className="text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section ref={analysisRef} className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            <h3 className="text-3xl font-bold">Secciones de Análisis</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {sections.map((section) => {
              const IconComponent = section.icon;
              const isExpanded = expandedSection === section.id;

              return (
                <div
                  key={section.id}
                  className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full p-6 text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${section.color} text-white shrink-0`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold mb-1">{section.title}</h4>
                            <p className="text-purple-300 text-sm mb-3">{section.subtitle}</p>
                            {!isExpanded && (
                              <p className="text-slate-400 text-sm line-clamp-2">{section.content}</p>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-6 h-6 text-purple-400 shrink-0 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="border-t border-white/10 px-6 py-6 bg-white/[0.02]">
                        <p className="text-slate-300 mb-6 leading-relaxed">{section.content}</p>

                        {section.isTable ? (
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-white/20">
                                  <th className="text-left py-3 px-4 font-semibold text-purple-300">Marco Regulatorio</th>
                                  <th className="text-left py-3 px-4 font-semibold text-purple-300">País/Región</th>
                                  <th className="text-left py-3 px-4 font-semibold text-purple-300">Protección de Datos</th>
                                  <th className="text-left py-3 px-4 font-semibold text-purple-300">Delitos Informáticos</th>
                                  <th className="text-left py-3 px-4 font-semibold text-purple-300">Sanciones</th>
                                </tr>
                              </thead>
                              <tbody>
                                {section.tableData.map((row, idx) => (
                                  <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition">
                                    <td className="py-4 px-4 font-semibold text-cyan-300">{row.marco}</td>
                                    <td className="py-4 px-4 text-slate-300">{row.pais}</td>
                                    <td className="py-4 px-4 text-slate-400">{row.proteccion}</td>
                                    <td className="py-4 px-4 text-slate-400">{row.delitos}</td>
                                    <td className="py-4 px-4 text-slate-400">{row.sanciones}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <p className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                              Puntos Clave
                            </p>
                            {section.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <ArrowRight className="w-4 h-4 text-purple-500 mt-1 shrink-0" />
                                <p className="text-slate-300 text-sm">{detail}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        <button
                          onClick={() => window.open('https://github.com/gato-lechuga/informe_osvflo/tree/main/docs_osvflo', '_blank')}
                          className="mt-6 px-4 py-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/30 text-purple-200 text-sm font-semibold transition flex items-center gap-2"
                        >
                          <Lock className="w-4 h-4" />
                          Ver Documentación Completa
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section ref={conclusionsRef} className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <h3 className="text-3xl font-bold">Conclusiones Clave</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: 'Importancia de Parches',
                description:
                  'La vulnerabilidad CVE-2017-5638 fue publicada en marzo, pero no fue aplicada hasta después del ataque.',
              },
              {
                icon: Shield,
                title: 'Seguridad en Capas',
                description:
                  'La falta de segmentación de redes permitió que el atacante navegara dentro de los sistemas de Equifax.',
              },
              {
                icon: Lock,
                title: 'Cifrado Esencial',
                description:
                  'Los datos debieron estar cifrados para limitar el impacto en caso de acceso no autorizado.',
              },
              {
                icon: Zap,
                title: 'Monitoreo Continuo',
                description:
                  'El ataque permaneció activo durante 2-3 meses antes de ser detectado por Equifax.',
              },
            ].map((insight, idx) => {
              const Icon = insight.icon;
              return (
                <div
                  key={idx}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">{insight.title}</h4>
                      <p className="text-slate-400 text-sm">{insight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-semibold mb-4">Navegación</p>
              <ul className="space-y-2 text-sm text-slate-400 hover:text-slate-300 transition">
                <li><button onClick={() => scrollToSection(heroRef)}>Inicio</button></li>
                <li><button onClick={() => scrollToSection(analysisRef)}>Análisis</button></li>
                <li><button onClick={() => scrollToSection(conclusionsRef)}>Recursos</button></li>
              </ul>
            </div>
          
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2026 Análisis Integral Equifax. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
