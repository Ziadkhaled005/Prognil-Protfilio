import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import contactBg from "@/assets/contact-bg.jpg";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section
      className="relative py-20 px-6 md:px-10"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left column */}
        <div>
          <p className="text-sm text-white/70 mb-2">Contact</p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-10 text-white">
            Get in touch<br />with me
          </h2>
          <div className="space-y-0">
            {[
              { icon: Mail, label: "EMAIL", value: "d.moawad@unisg.it" },
              { icon: Phone, label: "PHONE", value: "+393921165159" },
              { icon: MapPin, label: "LOCATION", value: "Via delle panche, 56c Florence, Italy." },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 py-5 border-b border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">{item.label}</p>
                  <p className="text-white text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-white mb-1 block">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/10 border-none rounded-md p-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
            <div>
              <label className="text-sm text-white mb-1 block">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/10 border-none rounded-md p-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
            </div>
            <div>
              <label className="text-sm text-white mb-1 block">Message</label>
              <textarea
                rows={5}
                placeholder="Enter your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/10 border-none rounded-md p-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 resize-none"
              />
            </div>
            <button className="btn-lime">
              Submit <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
