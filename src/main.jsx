import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Section for Name, Email, Phone number */}

    {/* Section for Educational Experience, College, Title of Study, Date of Study */}

    {/* Section for Practical Experience */}

    {/* Build an entire Resume Component or split it into Form and Resume */}

    {/* Easier to just have a form which would then create the resume with the values */}
    <App />

  </StrictMode>,
)
