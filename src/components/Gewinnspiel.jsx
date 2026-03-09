import { useState } from "react"

function Gewinnspiel() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("https://yourdomain.ch/api/gewinnspiel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        alert("Etwas ist schief gelaufen.")
      }
    } catch (err) {
      console.error(err)
      alert("Server Fehler.")
    }
  }

  return (
    <section className="section gewinnspiel">
      <div className="container">
        <h2>🎁 Gewinnspiel</h2>
        <p>Füllen Sie das Formular aus und gewinnen Sie CHF 1’000 Wohnbonus!</p>

        {!submitted ? (
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Ihr Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Ihre Email" required onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Telefonnummer" required onChange={handleChange} />
            
            <select name="interest" required onChange={handleChange}>
              <option value="">Ich interessiere mich für...</option>
              <option value="Kauf einer Immobilie">Kauf einer Immobilie</option>
              <option value="Verkauf einer Immobilie">Verkauf einer Immobilie</option>
              <option value="Immobilien Verwaltung">Immobilien Verwaltung</option>
            </select>

            <button type="submit">Jetzt teilnehmen</button>
          </form>
        ) : (
          <div className="success">
            <h3>Vielen Dank! 🎉</h3>
            <p>Sie nehmen nun automatisch am Gewinnspiel teil.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gewinnspiel