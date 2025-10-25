/**
 * Camera Selector para Visión Humana
 * Permite seleccionar entre múltiples cámaras disponibles
 */

class CameraSelector {
  constructor() {
    this.cameras = [];
    this.currentCameraId = null;
    this.selectorElement = null;
    this.init();
  }

  async init() {
    await this.detectCameras();
    this.createSelector();
  }

  async detectCameras() {
    try {
      // Solicitar permisos primero
      await navigator.mediaDevices.getUserMedia({ video: true });
      
      // Obtener lista de dispositivos
      const devices = await navigator.mediaDevices.enumerateDevices();
      this.cameras = devices.filter(device => device.kind === 'videoinput');
      
      console.log(`📹 ${this.cameras.length} cámara(s) detectada(s)`);
      return this.cameras;
    } catch (error) {
      console.error('Error detectando cámaras:', error);
      return [];
    }
  }

  createSelector() {
    if (this.cameras.length <= 1) {
      console.log('Solo hay una cámara disponible');
      return;
    }

    // Crear contenedor del selector
    const container = document.createElement('div');
    container.id = 'camera-selector-container';
    container.style.cssText = `
      position: fixed;
      top: 80px;
      right: 1rem;
      z-index: 999;
      background: rgba(45, 55, 72, 0.95);
      padding: 0.75rem;
      border-radius: 8px;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(102, 126, 234, 0.3);
    `;

    // Título
    const title = document.createElement('div');
    title.textContent = '📹 Seleccionar Cámara';
    title.style.cssText = `
      font-size: 0.75rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
      font-weight: 600;
    `;
    container.appendChild(title);

    // Crear selector
    this.selectorElement = document.createElement('select');
    this.selectorElement.id = 'camera-selector';
    this.selectorElement.style.cssText = `
      width: 100%;
      padding: 0.5rem;
      background: var(--bg-dark);
      color: var(--text-light);
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-size: 0.85rem;
      cursor: pointer;
      outline: none;
    `;

    // Añadir opciones
    this.cameras.forEach((camera, index) => {
      const option = document.createElement('option');
      option.value = camera.deviceId;
      option.textContent = camera.label || `Cámara ${index + 1}`;
      this.selectorElement.appendChild(option);
    });

    // Event listener
    this.selectorElement.addEventListener('change', (e) => {
      this.switchCamera(e.target.value);
    });

    container.appendChild(this.selectorElement);

    // Botón de refrescar
    const refreshBtn = document.createElement('button');
    refreshBtn.textContent = '🔄 Actualizar';
    refreshBtn.style.cssText = `
      margin-top: 0.5rem;
      width: 100%;
      padding: 0.35rem;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 0.75rem;
      cursor: pointer;
      transition: background 0.3s ease;
    `;
    refreshBtn.onmouseover = () => refreshBtn.style.background = 'var(--secondary-color)';
    refreshBtn.onmouseout = () => refreshBtn.style.background = 'var(--primary-color)';
    refreshBtn.onclick = () => this.refresh();
    container.appendChild(refreshBtn);

    document.body.appendChild(container);
  }

  async switchCamera(cameraId) {
    this.currentCameraId = cameraId;
    console.log('🔄 Cambiando a cámara:', cameraId);
    
    // Emitir evento personalizado
    window.dispatchEvent(new CustomEvent('cameraChanged', { 
      detail: { 
        cameraId,
        camera: this.cameras.find(c => c.deviceId === cameraId)
      } 
    }));
  }

  async refresh() {
    console.log('🔄 Actualizando lista de cámaras...');
    await this.detectCameras();
    
    // Limpiar selector
    if (this.selectorElement) {
      this.selectorElement.innerHTML = '';
      this.cameras.forEach((camera, index) => {
        const option = document.createElement('option');
        option.value = camera.deviceId;
        option.textContent = camera.label || `Cámara ${index + 1}`;
        this.selectorElement.appendChild(option);
      });
    }
  }

  getCurrentCameraId() {
    return this.currentCameraId || (this.cameras[0]?.deviceId);
  }

  getCameraConstraints() {
    const cameraId = this.getCurrentCameraId();
    return {
      video: cameraId ? { deviceId: { exact: cameraId } } : true,
      audio: false
    };
  }
}

// Exportar instancia singleton
const cameraSelector = new CameraSelector();
export default cameraSelector;
