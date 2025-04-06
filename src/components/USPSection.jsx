
import React from 'react';
import './USPSection.css'; // Custom CSS for flipping effect

const uspData = [
  {
    title: "Consistently High Quality",
    description:
      "Technology has brought us to the threshold of a variety of high-quality services. However, as a team of ex-consultants from top consulting firms, we have constantly found.",
    link: "https://ez.works/articles/high-quality",
  },
  {
    title: "Round the Clock Availability",
    description:
      "Oftentimes our new clients ask us how it is that our service experts are always available, no matter the time of day, day of the week, or season of the year. How do we fulfill our promise.",
    link: "https://ez.works/articles/round-the-clock",
  },
  {
    title: "Faster than the Fastest",
    description:
      "Rome may not have been built in a day, but what about your presentation? What about the audio-visual content you promised your client for the next meeting? In a competitive market.",
    link: "https://ez.works/articles/faster-than-fastest",
  },
  {
    title: "Information Security",
    description:
      "ISO 27001:2022 comes within the ISO 27000 family, which is dedicated to the standardization of Information Security Management Systems (ISMS). There are quite a few standards.",
    link: "https://ez.works/articles/information-security",
  },
];

const USPSection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12 bg-white flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <h2 className="text-3xl font-bold mb-4">10-20-30 Rule</h2>
        <p className="text-gray-600">
          This rule guides our approach to deliver maximum value: 10 slides, 20 minutes, 30 point font — a formula to keep things simple, clear, and impactful.
        </p>
      </div>

      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {uspData.map((item, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front p-4 bg-blue-100 rounded-xl shadow-md flex items-center justify-center text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <div className="flip-card-back p-4 bg-white rounded-xl shadow-md flex flex-col justify-between text-center">
                <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default USPSection;
