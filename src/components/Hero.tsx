import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 animate-fadeIn">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideIn">
            La tua voce per migliorare la città
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-slideIn">
            Segnala problemi, proponi idee e segui il progresso delle iniziative
            nella tua comunità.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideIn">
            <Button asChild size="lg">
              <Link to="/tickets/new">Crea Segnalazione</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/trending">Vedi Trending</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};