import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  MessageSquare,
  Users,
} from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "Segnalazioni Immediate",
    description:
      "Invia segnalazioni in tempo reale per qualsiasi problema nella tua città",
  },
  {
    icon: Users,
    title: "Collaborazione Comunitaria",
    description:
      "Unisciti ad altri cittadini per dare più visibilità alle problematiche comuni",
  },
  {
    icon: CheckCircle,
    title: "Tracciamento Progressi",
    description: "Segui lo stato di avanzamento delle tue segnalazioni",
  },
  {
    icon: MessageSquare,
    title: "Comunicazione Diretta",
    description:
      "Dialoga direttamente con gli uffici competenti per ogni segnalazione",
  },
  {
    icon: Clock,
    title: "Aggiornamenti in Tempo Reale",
    description: "Ricevi notifiche sullo stato delle tue segnalazioni",
  },
  {
    icon: BarChart3,
    title: "Analisi e Statistiche",
    description:
      "Visualizza statistiche e trend delle segnalazioni nella tua zona",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Caratteristiche Principali
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-background rounded-lg shadow-sm border animate-fadeIn"
            >
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};