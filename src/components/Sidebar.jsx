import { useEffect, useState } from 'react'

function Sidebar({ type = 'default' }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        let apiUrl = ''
        
        switch(type) {
          case 'tax':
            // Exchange rates API for tax calculations
            apiUrl = 'https://api.exchangerate-api.com/v4/latest/CAD'
            break
          case 'business':
            // Business news API (using a free news API)
            apiUrl = 'https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=demo'
            break
          case 'insurance':
            // Weather API for travel insurance context
            apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=demo&units=metric'
            break
          case 'cra':
            // News API for tax/CRA news
            apiUrl = 'https://newsapi.org/v2/top-headlines?country=ca&category=business&q=tax&apiKey=demo'
            break
          default:
            // General tips/calculations
            return
        }
        
        // For demo purposes, we'll use static data since APIs require keys
        // In production, you'd fetch from actual APIs
        setTimeout(() => {
          setData(getStaticData(type))
          setLoading(false)
        }, 500)
      } catch (error) {
        console.error('Error fetching sidebar data:', error)
        setData(getStaticData(type))
        setLoading(false)
      }
    }

    fetchData()
  }, [type])

  const getStaticData = (type) => {
    switch(type) {
      case 'tax':
        return {
          title: 'Exchange Rates',
          items: [
            { label: 'USD/CAD', value: '1.35' },
            { label: 'EUR/CAD', value: '1.48' },
            { label: 'GBP/CAD', value: '1.72' }
          ],
          tip: 'Current exchange rates help with foreign income reporting.'
        }
      case 'business':
        return {
          title: 'Business Insights',
          items: [
            { label: 'HST Rate', value: '13% (ON)' },
            { label: 'GST Rate', value: '5% (Federal)' },
            { label: 'Corporate Tax', value: '15% (Small)' }
          ],
          tip: 'Stay informed about current tax rates for your business.'
        }
      case 'insurance':
        return {
          title: 'Travel Advisory',
          items: [
            { label: 'Travel Tips', value: 'Check coverage' },
            { label: 'Health Stats', value: 'Stay protected' },
            { label: 'Weather', value: 'Plan ahead' }
          ],
          tip: 'Ensure your travel insurance covers your destination.'
        }
      case 'cra':
        return {
          title: 'CRA Updates',
          items: [
            { label: 'Filing Deadline', value: 'Apr 30' },
            { label: 'Payment Due', value: 'Apr 30' },
            { label: 'Extension', value: 'Jun 15' }
          ],
          tip: 'Important dates to remember for tax filing.'
        }
      default:
        return {
          title: 'Quick Tips',
          items: [
            { label: 'Tax Tips', value: 'Maximize deductions' },
            { label: 'Insurance', value: 'Review coverage' },
            { label: 'Business', value: 'Stay compliant' }
          ],
          tip: 'One phone call handles all your needs.'
        }
    }
  }

  if (loading) {
    return (
      <aside className="sidebar" style={{ padding: '1.5rem', background: '#F9FAFB', borderRadius: '8px', marginBottom: '2rem' }}>
        <div style={{ textAlign: 'center', color: '#6B7280' }}>Loading...</div>
      </aside>
    )
  }

  if (!data) return null

  return (
    <aside className="sidebar" style={{ padding: '1.5rem', background: '#F9FAFB', borderRadius: '8px', marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#0A1929' }}>{data.title}</h3>
      <div style={{ marginBottom: '1rem' }}>
        {data.items.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: index < data.items.length - 1 ? '1px solid #E5E7EB' : 'none' }}>
            <span style={{ color: '#6B7280', fontWeight: '500' }}>{item.label}:</span>
            <span style={{ color: '#0A1929', fontWeight: '600' }}>{item.value}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.875rem', color: '#6B7280', fontStyle: 'italic', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
        {data.tip}
      </p>
    </aside>
  )
}

export default Sidebar

