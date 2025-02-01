import { useState } from "react"

export default function Admin() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [lang, setLang] = useState("en")

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch("/api/faqs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer, lang }),
    })
    if (res.ok) {
      alert("FAQ added successfully!")
      setQuestion("")
      setAnswer("")
    } else {
      alert("Failed to add FAQ.")
    }
  }

  return (
    <div>
      <h1>Add FAQ</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          required
        />
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          required
        />
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
          <option value="te">Telugu</option>
        </select>
        <button type="submit">Add FAQ</button>
      </form>
    </div>
  )
}
