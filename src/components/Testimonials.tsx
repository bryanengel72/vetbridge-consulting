import React from 'react';

const testimonials = [
    {
        id: 1,
        content: "VetBridge transformed how we track our inventory and pricing. We uncovered $45k in missed revenue in the first quarter alone.",
        author: "Dr. Sarah Chen",
        role: "Medical Director",
        clinic: "Pacific Animal Hospital",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 2,
        content: "The biomedical integration saved our techs hours of manual entry every day. Now they can focus entirely on patient care.",
        author: "Mark Reynolds",
        role: "Practice Manager",
        clinic: "CityVet Specialists",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 3,
        content: "Finally, a consulting team that understands both clinical reality and business strategy. Their data insights act as our compass.",
        author: "Dr. Emily Weiss",
        role: "Owner",
        clinic: "Whiskers & Paws Clinic",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200"
    }
];

const Testimonials: React.FC = () => {
    return (
        <div className="container mx-auto px-6">
            <div className="text-center mb-20 reveal">
                <h6 className="text-brand-secondary font-black tracking-[0.2em] uppercase text-xs mb-4">Success Stories</h6>
                <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">Trusted by Leading Practices</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                    Join the growing network of veterinary clinics maximizing their potential with our data-driven solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((item, i) => (
                    <div key={item.id} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                        <div className="flex items-center gap-4 mb-6">
                            <img src={item.image} alt={item.author} className="w-14 h-14 rounded-full object-cover border-2 border-brand-secondary p-1" />
                            <div>
                                <h4 className="font-bold text-brand-primary text-lg leading-tight">{item.author}</h4>
                                <p className="text-slate-500 text-xs uppercase tracking-wide font-medium">{item.role}</p>
                            </div>
                        </div>

                        <div className="mb-6 relative">
                            <span className="absolute -top-4 -left-2 text-6xl text-slate-100 font-serif leading-none select-none">"</span>
                            <p className="text-slate-600 italic relative z-10 leading-relaxed">
                                {item.content}
                            </p>
                        </div>

                        <div className="text-sm font-bold text-brand-secondary border-t border-slate-100 pt-4">
                            {item.clinic}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
