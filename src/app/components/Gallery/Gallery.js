// app/components/Gallery/Gallery.js
import Image from 'next/image'

const projects = [
    { id: 1, title: 'Кухня в классическом стиле', image: '/images/project-1.jpg' },
    { id: 2, title: 'Современный гардероб', image: '/images/kit-1-2.jpg' },
    { id:3, title: 'Современная кухня', image: '/images/kit-2-1.jpg' },
    // Добавьте остальные проекты
]

export default function Gallery() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Наши работы</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <h3 className="text-white text-xl font-medium">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}