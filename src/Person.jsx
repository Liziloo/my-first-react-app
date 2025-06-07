import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Casler", age: 80 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  function handleTyping(e, id) {
    if (id === 'first') {
      setPerson({...person, firstName: e.target.value});
    } else {
      setPerson({...person, lastName: e.target.value});
    }
    
  }

  return (
    <>
      <Input id="first" handleTyping={handleTyping} />
      <Input id="last" handleTyping={handleTyping} />
      <h1>{person.firstName} {person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function Input({id, handleTyping}) {
  return (
    <>
      <input id={id} onChange={(e) => handleTyping(e, id)} />
    </>
  )
}
