import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { sendContactMessage } from "@/lib/api";
import contactBg from "@/assets/contact-bg.jpg";

interface ContactSectionProps {
    variant?: "dark" | "light";
}

export default function ContactSection({
    variant = "dark",
}: ContactSectionProps) {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setStatus("Please fill in all fields before submitting.");
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            await sendContactMessage({
                profileId: 2, // Hardcoded for now, assuming single profile
                senderName: form.name,
                senderEmail: form.email,
                subject: "Contact Form Submission",
                body: form.message,
            });
            setForm({ name: "", email: "", message: "" });
            setStatus("Your message was sent successfully. Thank you!");
        } catch (error) {
            setStatus(
                error instanceof Error
                    ? error.message
                    : "Unable to send your message. Please try again later.",
            );
        } finally {
            setLoading(false);
        }
    };

    if (variant === "light") {
        return (
            <section className="py-20 px-6 md:px-10 bg-background">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    {/* Left column */}
                    <div>
                        <p className="text-sm text-muted-foreground mb-2">
                            Contact
                        </p>
                        <h2 className="text-3xl md:text-5xl font-light leading-tight mb-12">
                            Get in touch
                            <br />
                            with me
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">
                                    EMAIL
                                </p>
                                <p className="text-sm font-medium">
                                    dina.moawad@studenti.uniparthenope.it
                                </p>
                            </div>
                            <div>
                                <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">
                                    PHONE
                                </p>
                                <p className="text-sm font-medium">
                                    +393921165159
                                </p>
                            </div>
                            <div>
                                <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1">
                                    LOCATION
                                </p>
                                <p className="text-sm font-medium">
                                    Via delle panche, 56c Florence, Italy.
                                </p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-3">
                                FOLLOW ME
                            </p>
                            <div className="flex gap-2">
                                {["Fb", "Tw", "In"].map((label) => (
                                    <div
                                        key={label}
                                        className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-xs font-semibold text-foreground">
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="text-sm text-foreground mb-1 block">
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full bg-accent border border-border rounded-lg p-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="text-sm text-foreground mb-1 block">
                                    Email address
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full bg-accent border border-border rounded-lg p-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="contact-message"
                                className="text-sm text-foreground mb-1 block">
                                Your message
                            </label>
                            <textarea
                                id="contact-message"
                                rows={8}
                                placeholder="Write your message..."
                                value={form.message}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        message: e.target.value,
                                    })
                                }
                                className="w-full bg-accent border border-border rounded-lg p-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn-lime ${loading ? "opacity-60 cursor-not-allowed" : ""}`}>
                            {loading ? "Sending..." : "Submit"}{" "}
                            <ArrowRight size={16} />
                        </button>
                        {status ? (
                            <p className="text-sm text-muted-foreground mt-2">
                                {status}
                            </p>
                        ) : null}
                    </form>
                </div>
            </section>
        );
    }

    return (
        <section
            className="relative py-20 px-6 md:px-10"
            style={{
                backgroundImage: `url(${contactBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="absolute inset-0 bg-black/75" />
            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                {/* Left column */}
                <div>
                    <p className="text-sm text-white/70 mb-2">Contact</p>
                    <h2 className="text-3xl md:text-5xl font-light leading-tight mb-10 text-white">
                        Get in touch
                        <br />
                        with me
                    </h2>
                    <div className="space-y-0">
                        {[
                            {
                                icon: Mail,
                                label: "EMAIL",
                                value: "d.moawad@unisg.it",
                            },
                            {
                                icon: Phone,
                                label: "PHONE",
                                value: "+393921165159",
                            },
                            {
                                icon: MapPin,
                                label: "LOCATION",
                                value: "Via delle panche, 56c Florence, Italy.",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center gap-4 py-5 border-b border-white/20">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <item.icon
                                        size={20}
                                        className="text-white"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/50 uppercase tracking-widest">
                                        {item.label}
                                    </p>
                                    <p className="text-white text-sm">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-6">
                        Send me a message
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="contact-name"
                                className="text-sm text-white mb-1 block">
                                Name
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                placeholder="Enter your Name"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                className="w-full bg-white/10 border-none rounded-md p-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="contact-email"
                                className="text-sm text-white mb-1 block">
                                Email
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                placeholder="Enter your Email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                className="w-full bg-white/10 border-none rounded-md p-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="contact-message"
                                className="text-sm text-white mb-1 block">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                rows={5}
                                placeholder="Enter your Message"
                                value={form.message}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        message: e.target.value,
                                    })
                                }
                                className="w-full bg-white/10 border-none rounded-md p-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn-lime ${loading ? "opacity-60 cursor-not-allowed" : ""}`}>
                            {loading ? "Sending..." : "Submit"}{" "}
                            <ArrowRight size={16} />
                        </button>
                        {status ? (
                            <p className="text-sm text-white/80 mt-2">
                                {status}
                            </p>
                        ) : null}
                    </div>
                </form>
            </div>
        </section>
    );
}
