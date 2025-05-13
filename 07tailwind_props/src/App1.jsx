import Card from "./components/card";

import Header from "./components/Header";

import Footer from "./components/Footer";

import Card1 from "./components/Card1";

function App1() {
    
  const users = [
    {
      name: "Ritesh kumar",
      city: "Patna",
      age: 22,
      profession: "Software Engineer",
      profilePhoto: "./src/assets/ritesh2.jpg"
    },
    {
      name: "Diya Verma",
      city: "Mumbai",
      age: 24,
      profession: "Graphic Designer",
      profilePhoto: "https://example.com/diya.jpg",
    },
    {
      name: "Rohan Singh",
      city: "Delhi",
      age: 35,
      profession: "Doctor",
      profilePhoto: "https://example.com/rohan.jpg",
    },
    {
      name: "Priya Yadav",
      city: "Kolkata",
      age: 28,
      profession: "Teacher",
      profilePhoto: "https://example.com/priya.jpg",
    },
    {
      name: "Rahul Kumar",
      city: "Chennai",
      age: 40,
      profession: "Business Analyst",
      profilePhoto: "https://example.com/rahul.jpg",
    },
  ];

  return (
    <>
      <main className="relative">
        <Header />
        <div className="p-10">
          {/* <Card1 username="Ritesh yadav" age='22' city="Patna" profession="Software Engineer" /> */}

          {users.map(function (elem, idx) {
            return (
              // <h1>{elem.name}</h1>
              <h1>
                <Card1 key={idx} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} photo={elem.profilePhoto}/> 
              </h1>
            );
          })}

        </div>
        <Footer />
      </main>
    </>
  );
}

export default App1;
