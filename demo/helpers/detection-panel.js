/**
 * Panel de Control de Detección Múltiple
 * Para Visión Humana - Enmanuel Reynoso Salazar
 */

class DetectionPanel {
  constructor() {
    this.config = {
      maxFaces: 10,
      maxObjects: 10,
      maxHands: 2,
      showFaceBoxes: true,
      showObjectBoxes: true,
      showLabels: true,
      showConfidence: true,
      detectionMode: 'balanced' // 'fast', 'balanced', 'accurate'
    };
    this.stats = {
      facesDetected: 0,
      objectsDetected: 0,
      handsDetected: 0,
      fps: 0
    };
    this.createPanel();
  }

  createPanel() {
    // Contenedor principal
    const panel = document.createElement('div');
    panel.id = 'detection-panel';
    panel.style.cssText = `
      position: fixed;
      top: 140px;
      right: 1rem;
      z-index: 999;
      background: linear-gradient(135deg, rgba(45, 55, 72, 0.98) 0%, rgba(26, 32, 44, 0.98) 100%);
      padding: 1rem;
      border-radius: 12px;
      backdrop-filter: blur(20px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(102, 126, 234, 0.3);
      min-width: 280px;
      max-width: 320px;
    `;

    // Header del panel
    const header = document.createElement('div');
    header.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">🎯</span>
          <span style="font-weight: 600; color: var(--text-light); font-size: 0.95rem;">Detección Múltiple</span>
        </div>
        <button id="toggle-panel" style="
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 1.2rem;
          padding: 0;
          transition: transform 0.3s ease;
        ">▼</button>
      </div>
    `;
    panel.appendChild(header);

    // Contenido colapsable
    const content = document.createElement('div');
    content.id = 'panel-content';
    content.style.cssText = `
      display: block;
      transition: all 0.3s ease;
    `;

    // Estadísticas en tiempo real
    content.innerHTML += `
      <div style="
        background: rgba(102, 126, 234, 0.1);
        padding: 0.75rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border-left: 3px solid var(--primary-color);
      ">
        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.5rem; font-weight: 600;">📊 ESTADÍSTICAS EN VIVO</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.8rem;">
          <div>
            <div style="color: var(--text-secondary); font-size: 0.7rem;">Rostros</div>
            <div style="color: var(--primary-color); font-weight: 700; font-size: 1.2rem;" id="stat-faces">0</div>
          </div>
          <div>
            <div style="color: var(--text-secondary); font-size: 0.7rem;">Objetos</div>
            <div style="color: var(--secondary-color); font-weight: 700; font-size: 1.2rem;" id="stat-objects">0</div>
          </div>
          <div>
            <div style="color: var(--text-secondary); font-size: 0.7rem;">Manos</div>
            <div style="color: var(--success); font-weight: 700; font-size: 1.2rem;" id="stat-hands">0</div>
          </div>
          <div>
            <div style="color: var(--text-secondary); font-size: 0.7rem;">FPS</div>
            <div style="color: var(--warning); font-weight: 700; font-size: 1.2rem;" id="stat-fps">0</div>
          </div>
        </div>
      </div>
    `;

    // Control de máximo de rostros
    content.innerHTML += this.createSlider(
      '👤 Máximo de Rostros',
      'max-faces',
      1, 20, this.config.maxFaces,
      'Número máximo de rostros a detectar simultáneamente'
    );

    // Control de máximo de objetos
    content.innerHTML += this.createSlider(
      '📦 Máximo de Objetos',
      'max-objects',
      1, 30, this.config.maxObjects,
      'Número máximo de objetos a detectar'
    );

    // Control de máximo de manos
    content.innerHTML += this.createSlider(
      '✋ Máximo de Manos',
      'max-hands',
      1, 4, this.config.maxHands,
      'Número máximo de manos a detectar (1-4)'
    );

    // Modo de detección
    content.innerHTML += `
      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <label style="font-size: 0.8rem; color: var(--text-secondary); display: block; margin-bottom: 0.5rem;">
          ⚡ Modo de Detección
        </label>
        <select id="detection-mode" style="
          width: 100%;
          padding: 0.5rem;
          background: var(--bg-dark);
          color: var(--text-light);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.85rem;
          cursor: pointer;
        ">
          <option value="fast">⚡ Rápido (Menor precisión)</option>
          <option value="balanced" selected>⚖️ Balanceado</option>
          <option value="accurate">🎯 Preciso (Más lento)</option>
        </select>
      </div>
    `;

    // Opciones de visualización
    content.innerHTML += `
      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.75rem; font-weight: 600;">
          👁️ VISUALIZACIÓN
        </div>
        ${this.createCheckbox('show-face-boxes', 'Mostrar cajas de rostros', true)}
        ${this.createCheckbox('show-object-boxes', 'Mostrar cajas de objetos', true)}
        ${this.createCheckbox('show-labels', 'Mostrar etiquetas', true)}
        ${this.createCheckbox('show-confidence', 'Mostrar confianza %', true)}
      </div>
    `;

    // Botones de acción
    content.innerHTML += `
      <div style="display: flex; gap: 0.5rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <button id="reset-detection" style="
          flex: 1;
          padding: 0.6rem;
          background: var(--error);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        ">🔄 Reiniciar</button>
        <button id="export-settings" style="
          flex: 1;
          padding: 0.6rem;
          background: var(--success);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        ">💾 Exportar</button>
      </div>
    `;

    panel.appendChild(content);
    document.body.appendChild(panel);

    // Event listeners
    this.attachEventListeners();

    // Hacer responsive en móviles
    this.makeResponsive(panel);
  }

  createSlider(label, id, min, max, value, tooltip) {
    return `
      <div style="margin-bottom: 1rem;" title="${tooltip}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <label style="font-size: 0.8rem; color: var(--text-secondary);">${label}</label>
          <span id="${id}-value" style="
            background: var(--primary-color);
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 700;
            min-width: 30px;
            text-align: center;
          ">${value}</span>
        </div>
        <input type="range" id="${id}" min="${min}" max="${max}" value="${value}" style="
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${(value-min)/(max-min)*100}%, var(--border-color) ${(value-min)/(max-min)*100}%, var(--border-color) 100%);
          outline: none;
          -webkit-appearance: none;
          cursor: pointer;
        ">
      </div>
    `;
  }

  createCheckbox(id, label, checked) {
    return `
      <label style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; cursor: pointer;">
        <input type="checkbox" id="${id}" ${checked ? 'checked' : ''} style="
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: var(--primary-color);
        ">
        <span style="font-size: 0.8rem; color: var(--text-light);">${label}</span>
      </label>
    `;
  }

  attachEventListeners() {
    // Toggle panel
    const toggleBtn = document.getElementById('toggle-panel');
    const content = document.getElementById('panel-content');
    toggleBtn.addEventListener('click', () => {
      const isVisible = content.style.display !== 'none';
      content.style.display = isVisible ? 'none' : 'block';
      toggleBtn.textContent = isVisible ? '▶' : '▼';
      toggleBtn.style.transform = isVisible ? 'rotate(-90deg)' : 'rotate(0deg)';
    });

    // Sliders
    this.attachSlider('max-faces', (value) => {
      this.config.maxFaces = value;
      this.emitConfigChange();
    });

    this.attachSlider('max-objects', (value) => {
      this.config.maxObjects = value;
      this.emitConfigChange();
    });

    this.attachSlider('max-hands', (value) => {
      this.config.maxHands = value;
      this.emitConfigChange();
    });

    // Detection mode
    document.getElementById('detection-mode').addEventListener('change', (e) => {
      this.config.detectionMode = e.target.value;
      this.emitConfigChange();
    });

    // Checkboxes
    ['show-face-boxes', 'show-object-boxes', 'show-labels', 'show-confidence'].forEach(id => {
      document.getElementById(id).addEventListener('change', (e) => {
        const key = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace('show', 'show');
        this.config[key.charAt(0).toLowerCase() + key.slice(1)] = e.target.checked;
        this.emitConfigChange();
      });
    });

    // Botones
    document.getElementById('reset-detection').addEventListener('click', () => this.reset());
    document.getElementById('export-settings').addEventListener('click', () => this.exportSettings());
  }

  attachSlider(id, callback) {
    const slider = document.getElementById(id);
    const valueDisplay = document.getElementById(`${id}-value`);
    
    slider.addEventListener('input', (e) => {
      const value = parseInt(e.target.value);
      valueDisplay.textContent = value;
      
      // Actualizar gradiente del slider
      const percentage = (value - slider.min) / (slider.max - slider.min) * 100;
      slider.style.background = `linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ${percentage}%, var(--border-color) ${percentage}%, var(--border-color) 100%)`;
      
      callback(value);
    });
  }

  updateStats(stats) {
    this.stats = { ...this.stats, ...stats };
    document.getElementById('stat-faces').textContent = stats.facesDetected || 0;
    document.getElementById('stat-objects').textContent = stats.objectsDetected || 0;
    document.getElementById('stat-hands').textContent = stats.handsDetected || 0;
    document.getElementById('stat-fps').textContent = stats.fps ? Math.round(stats.fps) : 0;
  }

  emitConfigChange() {
    window.dispatchEvent(new CustomEvent('detectionConfigChanged', {
      detail: { config: this.config }
    }));
    console.log('🎯 Configuración actualizada:', this.config);
  }

  reset() {
    this.config = {
      maxFaces: 10,
      maxObjects: 10,
      maxHands: 2,
      showFaceBoxes: true,
      showObjectBoxes: true,
      showLabels: true,
      showConfidence: true,
      detectionMode: 'balanced'
    };
    
    // Actualizar UI
    document.getElementById('max-faces').value = this.config.maxFaces;
    document.getElementById('max-objects').value = this.config.maxObjects;
    document.getElementById('max-hands').value = this.config.maxHands;
    document.getElementById('detection-mode').value = this.config.detectionMode;
    
    this.emitConfigChange();
    console.log('🔄 Configuración reiniciada');
  }

  exportSettings() {
    const settings = {
      config: this.config,
      stats: this.stats,
      timestamp: new Date().toISOString(),
      app: 'Visión Humana',
      author: 'Enmanuel Reynoso Salazar'
    };
    
    const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vision-humana-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    console.log('💾 Configuración exportada');
  }

  makeResponsive(panel) {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    const handleResize = (e) => {
      if (e.matches) {
        panel.style.right = '0.5rem';
        panel.style.top = '100px';
        panel.style.minWidth = '260px';
        panel.style.maxWidth = '280px';
      } else {
        panel.style.right = '1rem';
        panel.style.top = '140px';
        panel.style.minWidth = '280px';
        panel.style.maxWidth = '320px';
      }
    };
    
    mediaQuery.addListener(handleResize);
    handleResize(mediaQuery);
  }

  getConfig() {
    return this.config;
  }
}

// Exportar instancia singleton
const detectionPanel = new DetectionPanel();
export default detectionPanel;
