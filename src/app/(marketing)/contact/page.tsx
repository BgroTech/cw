import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { Youtube, Instagram, Linkedin, Mail, Send, MessageCircle } from "lucide-react";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with Coding Wallah for collaboration and queries.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="py-20">
                <Container>
                    <div className="flex flex-col items-center mb-8 animate-fade-in">
                        <span className="text-5xl md:text-6xl mb-2 animate-waving-hand">👋</span>
                        <h1 className="text-4xl font-bold mb-2">Get In Touch</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl text-center">
                            We love hearing from our community! For queries, collaborations, or just to say hi, reach out via email or connect on your favorite platform below.
                        </p>
                    </div>
                    <div className="card max-w-md mb-10 mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <Mail className="text-primary" size={20} />
                            <span className="font-bold">Email:</span>
                        </div>
                        <a href="mailto:codingwallahteam@gmail.com" className="text-primary hover:underline mb-6 block">
                            codingwallahteam@gmail.com
                        </a>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <Instagram className="text-primary" size={20} />
                                <span className="font-bold">Instagram:</span>
                                <a href="https://instagram.com/CodingWallahSir" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    @CodingWallahSir
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Youtube className="text-primary" size={20} />
                                <span className="font-bold">YouTube:</span>
                                <a href="https://youtube.com/@codingwallahsir" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    @CodingWallahSir
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MessageCircle className="text-primary" size={20} />
                                <span className="font-bold">Telegram:</span>
                                <a href="https://t.me/codingwallahsir" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    @codingwallahsir
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Linkedin className="text-primary" size={20} />
                                <span className="font-bold">LinkedIn:</span>
                                <a href="https://www.linkedin.com/in/codingwallah/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    Coding Wallah Sir
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-muted-foreground text-sm text-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <p>We reply to most queries within 24 hours. For urgent support, use Telegram for fastest response.</p>
                    </div>
                    {/* Quick Help / FAQ Section */}
                    <div className="max-w-2xl mx-auto mt-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <h2 className="text-2xl font-bold mb-4 text-center">Quick Help</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-muted/40 rounded-lg p-5">
                                <p className="font-bold mb-2">How fast do you reply?</p>
                                <p className="text-sm text-muted-foreground">Usually within 24 hours. Telegram is fastest for urgent help.</p>
                            </div>
                            <div className="bg-muted/40 rounded-lg p-5">
                                <p className="font-bold mb-2">Can I collaborate or sponsor?</p>
                                <p className="text-sm text-muted-foreground">Yes! Email us with your proposal or DM on Instagram.</p>
                            </div>
                            <div className="bg-muted/40 rounded-lg p-5">
                                <p className="font-bold mb-2">Where can I get coding help?</p>
                                <p className="text-sm text-muted-foreground">Join our Telegram group for peer and mentor support.</p>
                            </div>
                            <div className="bg-muted/40 rounded-lg p-5">
                                <p className="font-bold mb-2">Is there a support forum?</p>
                                <p className="text-sm text-muted-foreground">Telegram and YouTube comments are best for quick answers.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}

/* Add animation CSS (if not present in your global styles):
.animate-fade-in { animation: fadeIn 0.8s both; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
.animate-waving-hand { animation: waveHand 2s infinite; transform-origin: 70% 70%; display: inline-block; }
@keyframes waveHand { 0% { transform: rotate(0deg); } 10% { transform: rotate(14deg); } 20% { transform: rotate(-8deg); } 30% { transform: rotate(14deg); } 40% { transform: rotate(-4deg); } 50% { transform: rotate(10deg); } 60% { transform: rotate(0deg); } 100% { transform: rotate(0deg); } }
*/
