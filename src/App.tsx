import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type Settings = {
  fullName: string
  email: string
  role: string
  timezone: string
  weeklyDigest: boolean
  productUpdates: boolean
  securityAlerts: boolean
}

const initialSettings: Settings = {
  fullName: 'Prudhvi',
  email: 'prudhvi@example.com',
  role: 'Frontend engineer',
  timezone: 'Asia/Kolkata',
  weeklyDigest: true,
  productUpdates: false,
  securityAlerts: true,
}

function App() {
  const [settings, setSettings] = useState(initialSettings)
  const [errors, setErrors] = useState<Partial<Record<keyof Settings, string>>>({})
  const [saveMessage, setSaveMessage] = useState('')

  const updateSetting = <Key extends keyof Settings>(key: Key, value: Settings[Key]) => {
    setSettings((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: '' }))
    setSaveMessage('')
  }

  const validate = () => {
    const nextErrors: Partial<Record<keyof Settings, string>> = {}

    if (!settings.fullName.trim()) {
      nextErrors.fullName = 'Enter your full name.'
    }

    if (!settings.email.trim()) {
      nextErrors.email = 'Enter an email address.'
    } else if (!/^\S+@\S+\.\S+$/.test(settings.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) {
      setSaveMessage('')
      return
    }

    setSaveMessage('Settings saved successfully.')
  }

  return (
    <main className="settings-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Workspace settings</p>
          <h1>Make it yours.</h1>
          <p className="lede">Keep your profile and notifications aligned with the way you work.</p>
        </div>
        <div className="avatar" aria-hidden="true">P</div>
      </header>

      <form className="settings-form" onSubmit={handleSubmit} noValidate>
        <section className="settings-section" aria-labelledby="profile-heading">
          <div className="section-heading">
            <p className="section-kicker">01</p>
            <div>
              <h2 id="profile-heading">Profile</h2>
              <p>How you appear across your workspace.</p>
            </div>
          </div>

          <div className="field-grid">
            <div className="field">
              <label htmlFor="full-name">Full name</label>
              <input
                id="full-name"
                type="text"
                value={settings.fullName}
                onChange={(event) => updateSetting('fullName', event.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'full-name-error' : undefined}
              />
              {errors.fullName && <span id="full-name-error" className="error">{errors.fullName}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                value={settings.email}
                onChange={(event) => updateSetting('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="role">Role</label>
              <select id="role" value={settings.role} onChange={(event) => updateSetting('role', event.target.value)}>
                <option>Frontend engineer</option>
                <option>Product designer</option>
                <option>Engineering manager</option>
                <option>Founder</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="timezone">Timezone</label>
              <select id="timezone" value={settings.timezone} onChange={(event) => updateSetting('timezone', event.target.value)}>
                <option>Asia/Kolkata</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
                <option>Australia/Sydney</option>
              </select>
            </div>
          </div>
        </section>

        <section className="settings-section" aria-labelledby="notifications-heading">
          <div className="section-heading">
            <p className="section-kicker">02</p>
            <div>
              <h2 id="notifications-heading">Notifications</h2>
              <p>Choose what deserves your attention.</p>
            </div>
          </div>

          <div className="preference-list">
            <label className="preference">
              <span><strong>Weekly digest</strong><small>A thoughtful summary of your workspace activity.</small></span>
              <input type="checkbox" checked={settings.weeklyDigest} onChange={(event) => updateSetting('weeklyDigest', event.target.checked)} />
              <span className="toggle" aria-hidden="true"></span>
            </label>
            <label className="preference">
              <span><strong>Product updates</strong><small>News about improvements, releases, and early access.</small></span>
              <input type="checkbox" checked={settings.productUpdates} onChange={(event) => updateSetting('productUpdates', event.target.checked)} />
              <span className="toggle" aria-hidden="true"></span>
            </label>
            <label className="preference">
              <span><strong>Security alerts</strong><small>Important sign-in and account activity notifications.</small></span>
              <input type="checkbox" checked={settings.securityAlerts} onChange={(event) => updateSetting('securityAlerts', event.target.checked)} />
              <span className="toggle" aria-hidden="true"></span>
            </label>
          </div>
        </section>

        <div className="form-footer">
          <p className={saveMessage ? 'save-message' : 'save-message placeholder'} role="status">{saveMessage || 'Your changes are saved privately to this workspace.'}</p>
          <button type="submit">Save changes <span aria-hidden="true">&#8594;</span></button>
        </div>
      </form>
    </main>
  )
}

export default App
