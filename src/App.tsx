import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type Settings = {
  fullName: string
  email: string
  role: 'Student' | 'Developer' | 'Designer'
  timeZone: string
  weeklyDigest: boolean
  productUpdates: boolean
  securityAlerts: boolean
}

type FieldErrors = Partial<Record<'fullName' | 'email', string>>

const initialSettings: Settings = {
  fullName: '',
  email: '',
  role: 'Student',
  timeZone: 'Asia/Kolkata',
  weeklyDigest: true,
  productUpdates: false,
  securityAlerts: true,
}

function App() {
  const [settings, setSettings] = useState<Settings>(initialSettings)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const updateSetting = <Key extends keyof Settings>(
    key: Key,
    value: Settings[Key],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }))
    setSuccessMessage('')
  }

  const validate = (): FieldErrors => {
    const nextErrors: FieldErrors = {}
    const trimmedName = settings.fullName.trim()

    if (!trimmedName) {
      nextErrors.fullName = 'Full name is required.'
    } else if (trimmedName.length < 2) {
      nextErrors.fullName = 'Full name must be at least 2 characters.'
    }

    if (!settings.email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(settings.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    return nextErrors
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()

    setHasSubmitted(true)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSuccessMessage('Settings are ready to use. No data has been saved to a server.')
    } else {
      setSuccessMessage('')
    }
  }

  const visibleFullNameError = hasSubmitted ? errors.fullName : undefined
  const visibleEmailError = hasSubmitted ? errors.email : undefined

  return (
    <main className="settings-page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Account preferences</p>
          <h1>Settings</h1>
          <p className="intro">
            Manage your profile and choose which updates you want to receive.
          </p>
        </div>
        <div className="profile-mark" aria-hidden="true">P</div>
      </header>

      <form className="settings-form" onSubmit={handleSubmit} noValidate>
        <section className="form-section" aria-labelledby="profile-heading">
          <div className="section-heading">
            <p className="section-number">01</p>
            <div>
              <h2 id="profile-heading">Profile</h2>
              <p>Keep your account details up to date.</p>
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
                aria-invalid={Boolean(visibleFullNameError)}
                aria-describedby={visibleFullNameError ? 'full-name-error' : undefined}
              />
              {visibleFullNameError && (
                <p id="full-name-error" className="field-error">{visibleFullNameError}</p>
              )}
            </div>

            <div className="field">
              <label htmlFor="email-address">Email address</label>
              <input
                id="email-address"
                type="email"
                value={settings.email}
                onChange={(event) => updateSetting('email', event.target.value)}
                aria-invalid={Boolean(visibleEmailError)}
                aria-describedby={visibleEmailError ? 'email-error' : undefined}
              />
              {visibleEmailError && (
                <p id="email-error" className="field-error">{visibleEmailError}</p>
              )}
            </div>

            <div className="field">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                value={settings.role}
                onChange={(event) => updateSetting('role', event.target.value as Settings['role'])}
              >
                <option>Student</option>
                <option>Developer</option>
                <option>Designer</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="time-zone">Time zone</label>
              <select
                id="time-zone"
                value={settings.timeZone}
                onChange={(event) => updateSetting('timeZone', event.target.value)}
              >
                <option>Asia/Kolkata</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
                <option>Australia/Sydney</option>
              </select>
            </div>
          </div>
        </section>

        <section className="form-section" aria-labelledby="notifications-heading">
          <div className="section-heading">
            <p className="section-number">02</p>
            <div>
              <h2 id="notifications-heading">Notifications</h2>
              <p>Decide which messages should reach you.</p>
            </div>
          </div>

          <fieldset className="notification-list">
            <legend className="visually-hidden">Notification preferences</legend>
            <label className="notification-option">
              <span>
                <strong>Weekly digest</strong>
                <small>A summary of activity from your workspace.</small>
              </span>
              <input
                type="checkbox"
                checked={settings.weeklyDigest}
                onChange={(event) => updateSetting('weeklyDigest', event.target.checked)}
              />
            </label>
            <label className="notification-option">
              <span>
                <strong>Product updates</strong>
                <small>News about improvements, releases, and early access.</small>
              </span>
              <input
                type="checkbox"
                checked={settings.productUpdates}
                onChange={(event) => updateSetting('productUpdates', event.target.checked)}
              />
            </label>
            <label className="notification-option">
              <span>
                <strong>Security alerts</strong>
                <small>Important sign-in and account activity notifications.</small>
              </span>
              <input
                type="checkbox"
                checked={settings.securityAlerts}
                onChange={(event) => updateSetting('securityAlerts', event.target.checked)}
              />
            </label>
          </fieldset>
        </section>

        <footer className="form-footer">
          <p className={successMessage ? 'status-message' : 'status-message muted'} role="status">
            {successMessage || 'Changes are only applied in this form.'}
          </p>
          <button type="submit">Save settings <span aria-hidden="true">&#8594;</span></button>
        </footer>
      </form>
    </main>
  )
}

export default App
