import Link from "next/link";

export default function Uitleg() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-xl font-bold mb-4">Over de website</h1>
        <p className="mb-2">
          In dit vervolgproject wordt verder ingegaan op het onderwerp
          schoolprestaties bij jongeren, waarbij het psychologische construct
          zelfeffectiviteit centraal staat. Zoals eerder beschreven in Project
          A, is zelfeffectiviteit het geloof van een individu in zijn of haar
          vermogen om specifieke taken uit te voeren of doelen te bereiken. Deze
          definitie, zoals geformuleerd door Albert Bandura, de grondlegger van
          het concept, benadrukt het vertrouwen van een persoon in zijn of haar
          eigen bekwaamheid.
        </p>
        <p className="mb-2">
          Het primaire doel van dit vervolgproject is het creëren van een
          creatief product in de vorm van een website. Deze website zal op een
          interessante en interactieve manier het onderzoek over de relatie
          tussen zelfeffectiviteit en schoolprestaties presenteren aan een
          breder publiek. De keuze voor een website als creatief product biedt
          de mogelijkheid om de bevindingen op een toegankelijke manier te delen
          en interactie te stimuleren.
        </p>
        <p className="mb-2">
          Psychologie speelt een grote rol bij het maken van een website als
          creatief product. Op het gebied van gebruikerservaring en
          interactiviteit worden psychologische principes zoals
          gebruiksvriendelijkheid, cognitieve belasting en esthetiek toegepast.
          Educatieve psychologie informeert het effectief presenteren van
          informatie, terwijl motivatie en gedragsverandering worden aangepakt
          door gamification en beloningsmechanismen. Psychologische inzichten
          ondersteunen ook het ontwerp voor inclusiviteit, toegankelijkheid en
          feedbackmechanismen. Deze benadering verbetert niet alleen de
          presentatie van het onderzoek naar zelfeffectiviteit en
          schoolprestaties bij jongeren, maar vergroot ook de impact en
          betrokkenheid van de gebruikers.
        </p>
      </div>
      <Link
        href="/"
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-white"
      >
        <p className="mt-6">Back to Home</p>
      </Link>
    </main>
  );
}
