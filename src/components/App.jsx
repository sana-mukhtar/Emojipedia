import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojides) {
  return (
    <Entry
      emoji={emojides.emoji}
      name={emojides.name}
      description={emojides.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
