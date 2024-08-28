"use client";
import { useState } from "react";
import Link from "next/link";

export default function Test() {
  const questionsPerPage = 4;
  const totalQuestions = 10;

  const questions = [
    "Het lukt me altijd moeilijke problemen op te lossen, als ik er genoeg moeite voor doe.",
    "Als iemand mij tegenwerkt, vind ik toch manieren om te krijgen wat ik wil.",
    "Het is voor mij makkelijk om vast te houden aan mijn plannen en mijn doel te bereiken",
    "Ik vertrouw erop dat ik onverwachte gebeurtenissen doeltreffend aanpak.",
    "Dankzij mijn vindingrijkheid weet ik hoe ik in onvoorziene situaties moet handelen.",
    "Ik kan de meeste problemen oplossen als ik er de nodige moeite voor doe.",
    "Ik blijf kalm als ik voor moeilijkheden kom te staan omdat ik vertrouw op mijn vermogen om problemen op te lossen.",
    "Als ik geconfronteerd word met een probleem, heb ik meestal meerdere oplossingen.",
    "Als ik in een benarde situatie zit, weet ik meestal wat ik moet doen",
    "Wat er ook gebeurt, ik kom er wel uit.",
  ];

  const options = ["1", "2", "3", "4"];

  const answerLabels = [
    "Volledig onjuist",
    "Nauwelijks juist",
    "Enigszins juist",
    "Volledig juist",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState(new Array(totalQuestions).fill(0));
  const [totalScore, setTotalScore] = useState(null);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = parseInt(selectedOption);
    setAnswers(newAnswers);
  };

  const calculateTotalPoints = () => {
    return answers.reduce((total, answer) => total + answer, 0);
  };

  const isPageCompleted = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const pageAnswers = answers.slice(startIndex, endIndex);
    return !pageAnswers.includes(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPoints = calculateTotalPoints();
    setTotalScore(totalPoints);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleResetForm = () => {
    setCurrentPage(1);
    setAnswers(new Array(totalQuestions).fill(0));
    setTotalScore(null);
  };

  const renderQuestionsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;

    return questions.slice(startIndex, endIndex).map((question, index) => (
      <div key={startIndex + index} className="mb-1">
        <p className="mb-2 text-base font-semibold text-white">{`${question}`}</p>
        <div className="grid grid-cols-4">
          {options.map((option, optionIndex) => (
            <div
              key={optionIndex}
              className="flex flex-col items-center space-y-2 w-15"
            >
              <label className="flex items-center space-x-2 text-white">
                <input
                  type="radio"
                  name={`question${startIndex + index}`}
                  value={optionIndex + 1}
                  onChange={() =>
                    handleAnswerChange(startIndex + index, optionIndex + 1)
                  }
                  checked={answers[startIndex + index] === optionIndex + 1}
                  required
                />
                <span>{option}</span>
              </label>
              <span className="text-white">{answerLabels[optionIndex]}</span>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-blue-700 to-blue-900">
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Zelftest zelfeffectiviteit
        </h1>
        <form onSubmit={handleSubmit} className="grid gap-2 justify-center">
          {renderQuestionsForCurrentPage()}
          <div className="flex justify-between mt-4">
            {currentPage > 1 && (
              <button
                type="button"
                onClick={handlePrevPage}
                className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition-colors"
              >
                Vorige
              </button>
            )}
            {currentPage < Math.ceil(totalQuestions / questionsPerPage) && (
              <button
                type="button"
                onClick={handleNextPage}
                disabled={!isPageCompleted()}
                className={`bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors ${
                  !isPageCompleted() && "opacity-50 cursor-not-allowed"
                }`}
              >
                Volgende
              </button>
            )}
            {currentPage === Math.ceil(totalQuestions / questionsPerPage) && (
              <>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  Bereken score
                </button>
                {totalScore !== null && (
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors ml-2"
                  >
                    Opnieuw beginnen
                  </button>
                )}
              </>
            )}
          </div>
        </form>
        <p className="mt-6 text-white">
          Je score kan vallen tussen de 10 punten en 40 punten.
        </p>
        <p className="mt-2 text-white">
          Hoe hoger de score hoe hoger jouw zelfeffectiviteit.
        </p>
        <p className="mt-2 text-white">Een gemiddelde score is 29. </p>
        {totalScore !== null && (
          <p className="mt-6 text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg shadow-lg w-3/4 lg:w-1/2 mx-auto">
            Totaal aantal punten: {totalScore}
          </p>
        )}
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Link
          href="/"
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-white"
        >
          <p className="pr-2">Back to Home</p>
        </Link>
      </div>
    </main>
  );
}
