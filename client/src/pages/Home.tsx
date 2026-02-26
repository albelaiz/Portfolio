import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  MessageSquare,
  Terminal,
  ExternalLink,
  MapPin,
  ShoppingBag,
  Code2,
  Cpu,
  Server,
  Layers,
  Settings
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative selection:bg-primary/30">
      
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 bg-background/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono font-bold text-xl tracking-tighter"
          >
            albelaiz<span className="text-primary">.</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {['About', '42 Projects', 'Web Apps', 'Contact'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-primary transition-colors"
                data-testid={`nav-link-${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      {/* Social Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40"
      >
        <div className="flex flex-col gap-5 text-muted-foreground">
          <a href="https://github.com/albelaiz" target="_blank" rel="noreferrer" className="hover:text-primary hover:-translate-y-1 transition-all" data-testid="social-github">
            <Github size={22} />
          </a>
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all" data-testid="social-linkedin">
            <Linkedin size={22} />
          </a>
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all" data-testid="social-facebook">
            <Facebook size={22} />
          </a>
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all" data-testid="social-instagram">
            <Instagram size={22} />
          </a>
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all" data-testid="social-discord">
            <MessageSquare size={22} />
          </a>
        </div>
        <div className="w-[1px] h-24 bg-border/50 mt-2" />
      </motion.div>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10 max-w-5xl">
        
        {/* Hero Section */}
        <section id="about" className="min-h-[70vh] flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono mb-5 text-lg">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-4 text-foreground">
              Albelaiz.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-muted-foreground mb-8">
              I build digital solutions.
            </h2>
            
            <div className="max-w-2xl text-lg text-muted-foreground/80 leading-relaxed font-sans mb-12">
              <p>
                Full-stack Developer | <span className="text-foreground font-mono">42 Student</span>
              </p>
              <p className="mt-4">
                I specialize in building exceptional digital experiences, 
                blending high-performance systems programming with beautiful, intuitive web interfaces.
              </p>
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#42-projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors font-mono text-sm"
              data-testid="button-view-work"
            >
              <Terminal size={16} />
              View My Work
            </motion.a>
          </motion.div>
        </section>

        {/* Commercial Web Apps */}
        <section id="web-apps" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight">Commercial Web Apps</h2>
            <div className="h-[1px] flex-1 bg-border/50" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* TamudaStay */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 relative group overflow-hidden flex flex-col"
              data-testid="project-tamudastay"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <MapPin size={120} />
              </div>
              <div className="mb-4 flex justify-between items-start">
                <div className="p-3 bg-primary/10 rounded-lg text-primary w-fit">
                  <MapPin size={24} />
                </div>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-tamudastay">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">TamudaStay</h3>
              <p className="text-muted-foreground mb-6 flex-1 relative z-10">
                An Airbnb-style platform focused on Northern Morocco. Built with performance and user experience in mind, allowing users to discover and book premium accommodations.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-primary/80 pt-4 border-t border-white/5">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Tailwind</span>
              </div>
            </motion.div>

            {/* Parapharmacy */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 relative group overflow-hidden flex flex-col"
              data-testid="project-parapharmacy"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <ShoppingBag size={120} />
              </div>
              <div className="mb-4 flex justify-between items-start">
                <div className="p-3 bg-primary/10 rounded-lg text-primary w-fit">
                  <ShoppingBag size={24} />
                </div>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-parapharmacy">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">Parapharmacy E-commerce</h3>
              <p className="text-muted-foreground mb-6 flex-1 relative z-10">
                A full-featured e-commerce and catalog site tailored for health and wellness products, featuring robust search, filtering, and a secure checkout flow.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-primary/80 pt-4 border-t border-white/5">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Stripe</span>
                <span>Prisma</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 42 Curriculum Projects */}
        <section id="42-projects" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight font-mono">~/42_Curriculum</h2>
            <div className="h-[1px] flex-1 bg-border/50" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <ProjectTerminalCard 
              title="Minishell"
              description="A custom shell implementation in C. Recreating bash functionalities including parsing, executing commands, pipes, and redirections."
              icon={<Terminal size={20}/>}
              tech={["C", "Unix", "AST", "Processes"]}
              delay={0.1}
            />

            <ProjectTerminalCard 
              title="Cub3D"
              description="A 3D Ray-casting engine inspired by the classic Wolfenstein 3D. Explores mathematics, rendering, and window management."
              icon={<Layers size={20}/>}
              tech={["C", "MiniLibX", "Raycasting", "Math"]}
              delay={0.2}
            />

            <ProjectTerminalCard 
              title="Philosophers"
              description="A study in multi-threading and mutex synchronization. Solving the classic dining philosophers problem without deadlocks."
              icon={<Cpu size={20}/>}
              tech={["C", "Threads", "Mutex", "Concurrency"]}
              delay={0.3}
            />

            <ProjectTerminalCard 
              title="Minitalk"
              description="Client-server communication system using UNIX signals (SIGUSR1/SIGUSR2) to transmit data at a bit-level."
              icon={<Server size={20}/>}
              tech={["C", "Signals", "Bitwise", "IPC"]}
              delay={0.4}
            />

            <ProjectTerminalCard 
              title="The Foundation"
              description="The core C libraries that power everything else: Libft (custom standard library), ft_printf (custom formatter), and Get_Next_Line."
              icon={<Code2 size={20}/>}
              tech={["C", "Data Structures", "Algorithms"]}
              delay={0.5}
              className="md:col-span-2 lg:col-span-2"
            />

          </div>
        </section>
        
        {/* Contact Minimal Footer */}
        <section id="contact" className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto glass rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Whether you have a question or just want to say hi, my inbox is always open. 
              I'm currently looking for new opportunities!
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              data-testid="button-contact"
            >
              Say Hello
            </motion.a>
          </motion.div>
        </section>

      </main>
      
      {/* Mobile Footer (visible only when sidebar is hidden) */}
      <footer className="lg:hidden text-center py-6 text-muted-foreground flex flex-col items-center gap-4">
        <div className="flex justify-center gap-6">
          <a href="https://github.com/albelaiz" className="hover:text-primary"><Github size={20} /></a>
          <a href="#" className="hover:text-primary"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-primary"><Facebook size={20} /></a>
          <a href="#" className="hover:text-primary"><Instagram size={20} /></a>
        </div>
        <p className="text-sm font-mono opacity-50">Designed & Built by Albelaiz</p>
      </footer>

    </div>
  );
}

function ProjectTerminalCard({ title, description, icon, tech, delay = 0, className = "" }: { title: string, description: string, icon: React.ReactNode, tech: string[], delay?: number, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={`terminal-card rounded-xl group flex flex-col h-full ${className}`}
      data-testid={`project-${title.toLowerCase().replace(' ', '-')}`}
    >
      {/* Mac/Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive/80" />
        <div className="terminal-dot bg-yellow-500/80" />
        <div className="terminal-dot bg-green-500/80" />
        <div className="ml-2 text-xs font-mono text-muted-foreground flex items-center gap-2">
          <Settings size={12} />
          <span>{title.toLowerCase()} — bash</span>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 font-mono flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4 text-primary">
          {icon}
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
        
        <p className="text-muted-foreground/90 text-sm mb-6 flex-1 leading-relaxed">
          <span className="text-primary mr-2">❯</span>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-primary/70 mt-auto pt-4 border-t border-[#30363D]">
          {tech.map((t, i) => (
            <span key={i}>~/{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
