import { nanoid } from "nanoid"

let faqs = [
  {
    id: nanoid(),
    question: "What is Next.js?",
    answer: "<p>Next.js is a React framework for production.</p>",
    lang: "en",
  },
  {
    id: nanoid(),
    question: "¿Qué es Next.js?",
    answer: "<p>Next.js es un marco de React.</p>",
    lang: "es",
  },
  {
    id: nanoid(),
    question: "Qu'est-ce que Next.js?",
    answer: "<p>Next.js est un framework React.</p>",
    lang: "fr",
  },
  {
    id: nanoid(),
    question: "Was ist Next.js?",
    answer: "<p>Next.js ist ein React-Framework.</p>",
    lang: "de",
  },
  {
    id: nanoid(),
    question: "नेक्स्ट.जेएस क्या है?",
    answer: "<p>नेक्स्ट.जेएस एक रिएक्ट फ्रेमवर्क है।</p>",
    lang: "hi",
  },
  {
    id: nanoid(),
    question: "নেক্সট.জেএস কি?",
    answer: "<p>নেক্সট.জেএস একটি রিঅ্যাক্ট ফ্রেমওয়ার্ক।</p>",
    lang: "bn",
  },
  {
    id: nanoid(),
    question: "నెక్స్ట్.జెఎస్ ఏమిటి?",
    answer: "<p>నెక్స్ట్.జెఎస్ అనేది ఒక రియాక్ట్ ఫ్రేమ్‌వర్క్.</p>",
    lang: "te",
  },
]

export default function handler(req, res) {
  if (req.method === "GET") {
    const { lang = "en" } = req.query
    const filteredFaqs = faqs.filter((faq) => faq.lang === lang)
    res.status(200).json(filteredFaqs)
  } else if (req.method === "POST") {
    const { question, answer, lang = "en" } = req.body
    const newFaq = { id: nanoid(), question, answer, lang }
    faqs.push(newFaq)
    res.status(201).json(newFaq)
  } else {
    res.setHeader("Allow", ["GET", "POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
