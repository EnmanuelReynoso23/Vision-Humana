/**
 * Sistema de Temas para Visión Humana
 * Maneja el cambio entre tema claro y oscuro
 */

class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('vision-humana-theme') || 'dark';
    this.themes = {
      dark: {
        primary: '#667eea',
        secondary: '#764ba2',
        background: '#1a202c',
        surface: '#2d3748',
        text: '#ffffff',
        textSecondary: '#a0aec0',
        border: '#4a5568',
        success: '#48bb78',
        warning: '#ed8936',
        error: '#f56565',
        menuBackground: '#303030',
        menuHover: '#505050',
      },
      light: {
        primary: '#667eea',
        secondary: '#764ba2',
        background: '#f7fafc',
        surface: '#ffffff',
        text: '#1a202c',
        textSecondary: '#4a5568',
        border: '#e2e8f0',
        success: '#38a169',
        warning: '#dd6b20',
        error: '#e53e3e',
        menuBackground: '#ffffff',
        menuHover: '#f7fafc',
      }
    };
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.createToggleButton();
  }

  applyTheme(theme) {
    const colors = this.themes[theme];
    const root = document.documentElement;

    // Aplicar variables CSS
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-warning', colors.warning);
    root.style.setProperty('--color-error', colors.error);
    root.style.setProperty('--menu-background', colors.menuBackground);
    root.style.setProperty('--menu-hover', colors.menuHover);

    // Actualizar body
    document.body.style.background = colors.background;
    document.body.style.color = colors.text;

    // Guardar preferencia
    this.currentTheme = theme;
    localStorage.setItem('vision-humana-theme', theme);

    // Emitir evento
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  toggle() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    this.updateToggleButton();
  }

  createToggleButton() {
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Cambiar tema');
    button.innerHTML = this.currentTheme === 'dark' 
      ? '☀️' // Sol para tema claro
      : '🌙'; // Luna para tema oscuro
    
    button.onclick = () => this.toggle();

    // Estilos del botón
    const style = document.createElement('style');
    style.textContent = `
      .theme-toggle {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 1000;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid var(--color-border);
        background: var(--color-surface);
        color: var(--color-text);
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }
      .theme-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      }
      .theme-toggle:active {
        transform: scale(0.95);
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(button);
  }

  updateToggleButton() {
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  get isDark() {
    return this.currentTheme === 'dark';
  }

  get colors() {
    return this.themes[this.currentTheme];
  }
}

// Exportar instancia singleton
const themeManager = new ThemeManager();
export default themeManager;
