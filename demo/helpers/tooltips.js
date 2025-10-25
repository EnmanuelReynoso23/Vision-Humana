/**
 * Sistema de Tooltips para Visión Humana
 * Proporciona ayuda contextual en español
 */

const tooltips = {
  // Menú de Visualización
  'resultsTree': 'Muestra un árbol JSON con todos los datos detectados en tiempo real',
  'perfMonitor': 'Monitor de rendimiento que muestra FPS y uso de GPU',
  'bufferOutput': 'Suaviza los resultados entre fotogramas para animaciones más fluidas',
  'cropScale': 'Ajusta la imagen al área visible recortando los bordes',
  'cameraFacing': 'Alterna entre cámara frontal y trasera en dispositivos móviles',
  'useDepth': 'Usa información de profundidad para mejor renderizado 3D',
  'useCurves': 'Dibuja líneas curvas en lugar de rectas para resultados más naturales',
  'printLabels': 'Muestra etiquetas de texto con información de las detecciones',
  'drawPoints': 'Dibuja puntos individuales en landmarks faciales',
  'drawBoxes': 'Dibuja cajas delimitadoras alrededor de rostros y objetos detectados',
  'drawPolygons': 'Dibuja polígonos alrededor de las áreas detectadas',
  'fillPolygons': 'Rellena los polígonos con color semitransparente',

  // Menú de Entrada
  'filterEnabled': 'Activa el procesamiento de filtros en la imagen de entrada',
  'histogramEq': 'Mejora el contraste distribuyendo uniformemente la intensidad de los píxeles',
  'imageWidth': 'Ancho de la imagen procesada (0 = usar tamaño original)',
  'imageHeight': 'Alto de la imagen procesada (0 = usar tamaño original)',
  'brightness': 'Ajusta el brillo de la imagen (-1 oscuro, 0 normal, 1 claro)',
  'contrast': 'Ajusta el contraste de la imagen (-1 bajo, 0 normal, 1 alto)',
  'sharpness': 'Aumenta la nitidez de los bordes en la imagen',
  'blur': 'Aplica desenfoque gaussiano (útil para reducir ruido)',
  'saturation': 'Ajusta la intensidad de los colores',
  'hue': 'Rota el espectro de colores (0-360 grados)',
  'pixelate': 'Aplica efecto de pixelado a la imagen',

  // Menú de Opciones
  'backend': 'Motor de procesamiento: WebGL (GPU), WASM (CPU rápido), CPU (compatibilidad)',
  'asyncOps': 'Ejecuta operaciones de forma asíncrona para mejor rendimiento',
  'useWorker': 'Ejecuta detecciones en un Web Worker separado (no bloquea la UI)',
  'maxObjects': 'Número máximo de objetos/rostros/manos a detectar simultáneamente',
  'skipFrames': 'Salta N fotogramas entre detecciones para mejorar rendimiento',
  'minConfidence': 'Confianza mínima requerida (0-1) para considerar una detección válida',
  'overlap': 'Umbral de solapamiento para eliminar detecciones duplicadas',
  'rotationDetect': 'Detecta rostros y manos en cualquier orientación (más lento pero más preciso)',

  // Menú de Modelos
  'faceDetect': 'Detecta rostros en la imagen usando BlazeFace',
  'faceMesh': 'Genera malla 3D de 468 puntos del rostro',
  'faceIris': 'Detecta iris y pupila para análisis de mirada',
  'faceDesc': 'Genera descriptor facial único de 1024 dimensiones para reconocimiento',
  'faceEmotion': 'Clasifica emociones: feliz, triste, enojado, sorprendido, neutral, etc.',
  'bodyPose': 'Detecta 17 puntos clave del cuerpo para análisis de pose',
  'handPose': 'Detecta 21 puntos por mano para tracking de dedos y gestos',
  'gestures': 'Reconoce gestos predefinidos: pulgar arriba, victoria, okay, etc.',
  'objectDetect': 'Detecta y clasifica objetos comunes en la escena',
  'faceCompare': 'Compara rostros detectados con una imagen de referencia',

  // General
  'startVideo': 'Inicia o pausa la detección en tiempo real desde la cámara web',
  'dragDrop': 'Arrastra y suelta imágenes o videos para procesarlos',
  'privacy': 'Todo el procesamiento es 100% local. Ningún dato sale de tu dispositivo.',
};

class TooltipManager {
  constructor() {
    this.tooltip = null;
    this.init();
  }

  init() {
    // Crear elemento del tooltip
    this.tooltip = document.createElement('div');
    this.tooltip.className = 'vision-tooltip';
    this.tooltip.style.cssText = `
      position: fixed;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      max-width: 300px;
      z-index: 10000;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      line-height: 1.5;
    `;
    document.body.appendChild(this.tooltip);

    // Aplicar tooltips a elementos existentes
    this.applyTooltips();
  }

  applyTooltips() {
    // Aplicar automáticamente a elementos con data-tooltip
    document.querySelectorAll('[data-tooltip]').forEach(el => {
      this.attach(el, el.getAttribute('data-tooltip'));
    });
  }

  attach(element, key) {
    const text = tooltips[key] || key;
    
    element.addEventListener('mouseenter', (e) => {
      this.show(text, e);
    });

    element.addEventListener('mousemove', (e) => {
      this.position(e);
    });

    element.addEventListener('mouseleave', () => {
      this.hide();
    });

    // Para dispositivos táctiles
    element.addEventListener('touchstart', (e) => {
      this.show(text, e.touches[0]);
      setTimeout(() => this.hide(), 3000);
    });
  }

  show(text, event) {
    this.tooltip.textContent = text;
    this.tooltip.style.opacity = '1';
    this.position(event);
  }

  hide() {
    this.tooltip.style.opacity = '0';
  }

  position(event) {
    const x = event.clientX || event.pageX;
    const y = event.clientY || event.pageY;
    const offset = 10;

    // Ajustar posición para que no se salga de la pantalla
    const tooltipRect = this.tooltip.getBoundingClientRect();
    let left = x + offset;
    let top = y + offset;

    if (left + tooltipRect.width > window.innerWidth) {
      left = x - tooltipRect.width - offset;
    }

    if (top + tooltipRect.height > window.innerHeight) {
      top = y - tooltipRect.height - offset;
    }

    this.tooltip.style.left = `${left}px`;
    this.tooltip.style.top = `${top}px`;
  }

  // Método para añadir tooltip dinámicamente
  add(element, key) {
    element.setAttribute('data-tooltip', key);
    this.attach(element, key);
  }
}

// Exportar instancia singleton
const tooltipManager = new TooltipManager();
export default tooltipManager;
export { tooltips };
