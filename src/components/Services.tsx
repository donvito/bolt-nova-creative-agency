import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Globe, Megaphone, Code, Sparkles, Camera } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Crafting distinctive visual identities that leave lasting impressions.',
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Data-driven approaches that transform digital presence into market leadership.',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'Compelling storytelling through stunning visuals and engaging narratives.',
    gradient: 'from-cyan-600 to-teal-600'
  },
  {
    icon: Megaphone,
    title: 'Social Impact',
    description: 'Amplifying your message across platforms to reach and engage your audience.',
    gradient: 'from-teal-600 to-green-600'
  },
  {
    icon: Sparkles,
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces that users love to interact with.',
    gradient: 'from-green-600 to-yellow-600'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building robust digital solutions that power modern businesses.',
    gradient: 'from-yellow-600 to-red-600'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="services" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions that transform ideas into impactful digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} p-4 
                transform group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 
                group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}