import { useState, useEffect } from "react"

export default function Home() {
  const [faqs, setFaqs] = useState([])
  const [lang, setLang] = useState("en")

  useEffect(() => {
    fetch(`/api/faqs?lang=${lang}`)
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQs:", error))
  }, [lang])

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Frequently Asked Questions</h1>
      <select onChange={(e) => setLang(e.target.value)} value={lang}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        <option value="te">Telugu</option>
      </select>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <h3>{faq.question}</h3>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </li>
        ))}
      </ul>
    </div>
  )
}
