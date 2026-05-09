import './style.css'

// ─── HEADER: transparente → sólido ao rolar ───────────────────────
const header = document.getElementById('header') as HTMLElement

let ticking = false
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      if (window.scrollY > 60) {
        header.style.background = 'rgba(13,13,13,0.95)'
      } else {
        header.style.background = 'rgba(13,13,13,0.85)'
      }
      ticking = false
    })
    ticking = true
  }
}, { passive: true })

// ─── INTERSECTION OBSERVER: animações de scroll ───────────────────
// Um único observer para toda a página — muito mais eficiente que múltiplos
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target) // remove após animar (sem overhead contínuo)
      }
    })
  },
  {
    rootMargin: '0px 0px -60px 0px', // dispara um pouco antes de entrar
    threshold: 0.1
  }
)

// Observa todos os elementos animáveis
document.querySelectorAll('.reveal, .reveal-fade, .stagger').forEach((el) => {
  observer.observe(el)
})

// ─── FAQ: animação suave de accordion ─────────────────────────────
// O CSS cuida da animação; apenas garante que icons girem corretamente
document.querySelectorAll('details').forEach((details) => {
  details.addEventListener('toggle', () => {
    const icon = details.querySelector('.faq-icon')
    if (icon) {
      icon.style.transform = details.open ? 'rotate(45deg)' : 'rotate(0deg)'
    }
  })
})
