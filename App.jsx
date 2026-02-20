import { useEffect, useState } from "react"

const API_BASE = "https://REPLACE_WITH_YOUR_RENDER_BACKEND_URL"

export default function App() {
  const [fields, setFields] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/fields`)
      .then(res => res.json())
      .then(data => setFields(data))
  }, [])

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Climate Smart Irrigation Dashboard</h1>
      {fields.map(field => (
        <div key={field.field_id} style={{ 
          border: "1px solid #ddd", 
          padding: 20, 
          marginBottom: 20,
          borderRadius: 10
        }}>
          <h2>{field.field_id}</h2>
          <p>Irrigation: {field.total_irrigation_mm} mm</p>
          <p>Water Saved: {field.water_saved_mm} mm</p>
          <p>Energy Cost: ${field.energy_cost}</p>
          <p>Nitrogen Risk: {field.nitrogen_leaching_risk}</p>
        </div>
      ))}
    </div>
  )
}