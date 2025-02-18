import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/buttonssssss";
import { Card, CardContent } from "./ui/card";
import { Mail, Search, ArrowRight, Star } from "lucide-react";

interface FAQProps { 
  inView: boolean;
}

const FAQ = React.forwardRef<HTMLDivElement, FAQProps>(function FAQ({ inView }, ref) {
  const faqs = [
    {
      question: "Combien de temps prend le processus de déverrouillage ?",
      answer: "Le processus de déverrouillage prend généralement entre 24 et 48 heures, selon le modèle de votre appareil et son statut de verrouillage actuel. Nous nous efforçons de traiter toutes les demandes aussi rapidement que possible tout en garantissant la sécurité du processus."
    },
    {
      question: "Le processus de déverrouillage est-il sécurisé ?",
      answer: "Oui, notre processus de déverrouillage est entièrement sécurisé. Nous utilisons un chiffrement conforme aux normes de l'industrie et suivons des protocoles stricts de protection des données. Vos informations personnelles et les détails de votre appareil sont traités avec la plus grande confidentialité."
    },
    {
      question: "Quels appareils prenez-vous en charge ?",
      answer: "Nous prenons en charge une large gamme d'appareils Apple, y compris tous les modèles d'iPhone (de l'iPhone 4 au plus récent), les iPads et les Apple Watch. Chaque appareil dispose de son propre protocole de déverrouillage pour garantir les meilleurs résultats."
    },
    {
      question: "Quelles informations dois-je fournir ?",
      answer: "Pour traiter votre demande de déverrouillage, nous avons besoin du modèle de votre appareil, du numéro IMEI (que vous pouvez trouver en composant *#06#) et d'une adresse e-mail valide pour la communication. Plus les informations sont précises, plus nous pourrons traiter votre demande rapidement."
    }
  ];

  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <section id="faq" ref={ref} className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-purple-900">Centre d'aide</h1>
          <p className="text-lg text-purple-600">Trouvez rapidement les réponses à vos questions</p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une question..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="md:col-span-2">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-purple-100 rounded-lg px-4 hover:border-blue-400 transition-all duration-200"
                    >
                      <AccordionTrigger className="text-left py-4 text-black hover:text-blue-700 hover:no-underline">
                        <div className="flex items-center gap-3">
                          <div className="flex-1">{faq.question}</div>
                          <ArrowRight className="w-4 h-4 transform transition-transform group-data-[state=open]:rotate-90" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-purple-600 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Card */}
          <div className="md:col-span-1">
            <Card className="border-0 shadow-xl bg-gradient-to-br  text-white bg-blue-600">
              <CardContent className="p-6 space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Besoin d'aide personnalisée ?</h3>
                  <p className="text-purple-100">Notre équipe est là pour vous aider</p>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>a@gmail.com</span>
                  </Button>
                  <Button 
                    className="w-full bg-white text-blue-600 hover:bg-purple-50"
                  >
                    Programme premium
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FAQ;