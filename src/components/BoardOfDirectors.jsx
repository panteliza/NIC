import React from "react";

const BoardOfDirectors = () => {
  const directors = [
    {
      name: "Prof. Anil Shrestha",
      role: `Chairman\nFormer Principal, NIC College\nAcademic Council Head`,
    },
    {
      name: "Dr. Meera Koirala",
      role: `Executive Director\nResearch Coordinator\nBoard Member, NIC Foundation`,
    },
    {
      name: "Mr. Ramesh Adhikari",
      role: `Director\nFinance Committee Head\nLecturer, Management Department`,
    },
    {
      name: "Mrs. Pooja Gurung",
      role: `Director\nAlumni Coordinator\nCultural Program Advisor`,
    },
    {
      name: "Dr. Sandeep Maharjan",
      role: `Director\nProfessor, Computer Science\nInnovation Hub Mentor`,
    },
    {
      name: "Ms. Kritika Joshi",
      role: `Director\nStudent Welfare Council\nCareer Development Officer`,
    },
    {
      name: "Mr. Prabin Tamang",
      role: `Director\nSports Committee Coordinator`,
    },
  ];

  return (
    <section
      className="py-12 px-4 sm:px-8 lg:px-16 text-white"
      style={{
        background:
          "linear-gradient(135deg, #0a1f44 0%, #132e63 100%)", // NIC-like dark blue tones
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Board of Directors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2">{director.name}</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {director.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardOfDirectors;
