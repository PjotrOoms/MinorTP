"use client";

// pages/literature.js
import React from "react";

export default function Onderzoek() {
  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div
        style={{
          flex: 1,
          paddingLeft: "5em",
          paddingTop: "20em",
          overflowY: "auto",
        }}
      >
        <h1 class="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
          Inhoudsopgave
        </h1>
        <ul>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("inleiding")}
          >
            Inleiding
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("construct")}
          >
            Construct
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("onderzoek")}
          >
            Onderzoek
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("deelvraag1")}
          >
            Deelvraag 1
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("deelvraag1")}
          >
            Deelvraag 1
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("deelvraag2")}
          >
            Deelvraag 2
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("deelvraag3")}
          >
            Deelvraag 3
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("deelvraag4")}
          >
            Deelvraag 4
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("deelvraag5")}
          >
            Deelvraag 5
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("conclusie")}
          >
            Conclusie
          </li>
        </ul>
      </div>
      <div style={{ flex: 4, padding: "20px", overflowY: "auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridAutoRows: "auto",
            gap: "20px",
          }}
        >
          <section id="inleiding" style={{ gridColumn: "span 1" }}>
            <h1 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
              Onderzoek
            </h1>
            <h2 className="text-2xl font-bold leading-10">Inleiding</h2>
            <p>
              Ik heb voor het onderwerp schoolprestaties bij jongeren gekozen en
              als construct zelfeffectiviteit, omdat ik merk dat daar bij mijn
              vrienden, mezelf en in mijn familie veel onderling verschil tussen
              zit. Ik heb altijd al willen weten hoe dit nou echt de prestaties
              beïnvloedt en in wat voor mate. De hoofdvraag die ik ga uitwerken
              is “Hoe beïnvloedt zelfeffectiviteit het succes van jongeren bij
              het behalen van schoolresultaten?".
              <br></br>
              <br></br>
              Dit verslag gaat over hoe het geloof van jongeren in hun eigen
              kunnen invloed heeft op hoe goed ze het doen op school. Het doel
              van dit verslag is om te begrijpen hoe zelfvertrouwen en
              schoolprestaties met elkaar samenhangen.
              <br></br>
              <br></br>
              In dit verslag zullen we allereerst het begrip "zelfeffectiviteit"
              definiëren aan de hand van bestaande literatuur en minimaal twee
              definities presenteren, waaronder de oorspronkelijke definitie van
              Albert Bandura, de grondlegger van het concept. Vervolgens zullen
              we de centrale vraag onderzoeken en analyseren waarom dit
              onderwerp van belang is voor de psychologie en het onderwijs. Het
              verslag zal de factoren belichten die van invloed zijn op de
              zelfeffectiviteit van jongeren en hoe deze factoren hun
              academische prestaties beïnvloeden.
              <br></br>
              <br></br>
              Om het doel van dit project te realiseren, zal er alleen
              gebruikgemaakt worden van literatuuronderzoek en geen andere
              onderzoeksmethoden. Het project zal worden afgerond binnen de
              gestelde deadlines van de minor Toegepaste Psychologie.
            </p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </section>
          <section id="inleiding2"></section>
          <section id="construct">
            <h2 className="text-2xl font-bold leading-10">Construct</h2>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
            <p>This section describes the methodology...</p>
          </section>
          <section id="onderzoek">
            <h2 className="text-2xl font-bold leading-10">Results</h2>
            <p>Here are the results...</p>
            {/* Example of inserting an image */}
            <img
              src="/path-to-your-image.jpg"
              alt="Example Image"
              style={{ maxWidth: "100%" }}
            />
          </section>
          <section id="deelvraag1">
            <h2 className="text-2xl font-bold leading-10">Deelvraag 1</h2>
            <p>Discussion text goes here...</p>
          </section>
          <section id="deelvraag2">
            <h2 className="text-2xl font-bold leading-10">Deelvraag 2</h2>
            <p>This is the content for Deelvraag 2...</p>
          </section>
          <section id="deelvraag3">
            <h2 className="text-2xl font-bold leading-10">Deelvraag 3</h2>
            <p>This is the content for Deelvraag 3...</p>
          </section>
          <section id="deelvraag4">
            <h2 className="text-2xl font-bold leading-10">Deelvraag 4</h2>
            <p>This is the content for Deelvraag 4...</p>
          </section>
          <section id="deelvraag5">
            <h2 className="text-2xl font-bold leading-10">Deelvraag 5</h2>
            <p>This is the content for Deelvraag 5...</p>
          </section>
          <section id="conclusie">
            <h2 className="text-2xl font-bold leading-10">Conclusie</h2>
            <p>This is the content for Deelvraag 5...</p>
          </section>
        </div>
      </div>
    </div>
  );
}
