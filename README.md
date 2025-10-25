[![](https://img.shields.io/static/v1?label=Patrocinar&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/vladmandic)
![Versión Git](https://img.shields.io/github/package-json/v/EnmanuelReynoso23/Vision-Humana?style=flat-square&svg=true&label=git)
![Versión NPM](https://img.shields.io/npm/v/@vladmandic/human.png?style=flat-square)
![Último Commit](https://img.shields.io/github/last-commit/EnmanuelReynoso23/Vision-Humana?style=flat-square&svg=true)
![Licencia](https://img.shields.io/github/license/EnmanuelReynoso23/Vision-Humana?style=flat-square&svg=true)
![Estado de Verificaciones](https://img.shields.io/github/checks-status/EnmanuelReynoso23/Vision-Humana/main?style=flat-square&svg=true)

# Visión Humana

**Detección y Seguimiento de Rostros 3D con IA, Descripción y Reconocimiento Facial,**  
**Seguimiento de Pose Corporal, Seguimiento de Manos y Dedos 3D, Análisis de Iris,**  
**Predicción de Edad, Género y Emociones, Seguimiento de Mirada, Reconocimiento de Gestos, Segmentación Corporal**  

> 👨‍💻 **Creado por**: Enmanuel Reynoso Salazar  
> 🇲🇽 **Versión en español** del proyecto original Human de Vladimir Mandic  
> 🔒 **100% Local** - Procesamiento completamente en tu dispositivo, sin envío de datos a la nube  
> 🎯 **Enfoque**: Detección solamente - No almacena ni envía información

[🚀 **Demo en Vivo**](https://vision-humana.vercel.app) | [📝 **Plan de Mejoras**](PLAN_DE_MEJORAS.md) | [🐛 **Reportar Issues**](https://github.com/EnmanuelReynoso23/Vision-Humana/issues)

<br>

## Características Destacadas

- Compatible con la mayoría de entornos y frameworks del lado del servidor y del cliente  
- Combina múltiples modelos de aprendizaje automático que pueden alternarse bajo demanda según el caso de uso  
- Los modelos relacionados se ejecutan en un pipeline de atención para proporcionar detalles cuando sea necesario  
- Preprocesamiento de entrada optimizado que puede mejorar la calidad de imagen de cualquier tipo de entrada  
- Detección de cambios de fotogramas para activar solo los modelos requeridos y mejorar el rendimiento  
- Interpolación temporal inteligente para proporcionar resultados suaves independientemente del rendimiento de procesamiento  
- API unificada y simple  
- Manejo integrado de imágenes, videos y cámara web

[*Ir a Inicio Rápido*](#inicio-rápido)

<br>

## Compatibilidad

**Navegador**:  
  - Compatible con plataformas de escritorio y móviles  
  - Compatible con backends *WebGPU*, *WebGL*, *WASM*, *CPU*  
  - Compatible con ejecución en *WebWorker*  
  - Compatible con *WebView*  
  - Plataforma principal: navegadores basados en *Chromium*  
  - Plataforma secundaria: *Firefox*, *Safari*

**NodeJS**:  
  - Compatible con backend *WASM* para ejecuciones en arquitecturas donde los binarios de *tensorflow* no están disponibles  
  - Compatible con *tfjs-node* usando ejecución por software vía bibliotecas compartidas de *tensorflow*  
  - Compatible con *tfjs-node* usando ejecución acelerada por GPU vía bibliotecas compartidas de *tensorflow* y nVidia CUDA  
  - Las versiones soportadas van desde **14.x** hasta **22.x**  
  - La versión **23.x** de NodeJS no está soportada debido a cambios incompatibles y problemas con `@tensorflow/tfjs`

<br>

## Versiones
- [Notas de Versión](https://github.com/vladmandic/human/releases)
- [Enlace NPM](https://www.npmjs.com/package/@vladmandic/human)
## Demos

*Consulta el [**Demo Simple en Vivo**](https://vladmandic.github.io/human/demo/typescript/index.html), una aplicación completamente anotada como buen punto de partida ([html](https://github.com/vladmandic/human/blob/main/demo/typescript/index.html))([código](https://github.com/vladmandic/human/blob/main/demo/typescript/index.ts))*  

*Consulta la [**Demo Principal en Vivo**](https://vladmandic.github.io/human/demo/index.html), una aplicación para procesamiento avanzado de cámara web, transmisión de video o imágenes estáticas con todas las opciones configurables posibles*  

- Para iniciar la detección de video, simplemente presiona *Reproducir*  
- Para procesar imágenes, simplemente arrastra y suelta en tu ventana del navegador  
- Nota: Para un rendimiento óptimo, selecciona solo los modelos que deseas usar
- Nota: Si tienes una GPU moderna, el backend *WebGL* (predeterminado) es preferible, de lo contrario selecciona el backend *WASM*

<br>


- [**Lista de todas las aplicaciones Demo**](https://github.com/vladmandic/human/wiki/Demos)
- [**Galería de Ejemplos en Vivo**](https://vladmandic.github.io/human/samples/index.html)

### Demos para Navegador

*Todos los demos del navegador son autocontenidos sin dependencias externas*

- **Completo** [[*En Vivo*]](https://vladmandic.github.io/human/demo/index.html) [[*Detalles*]](https://github.com/vladmandic/human/tree/main/demo): Aplicación demo principal del navegador que muestra todas las capacidades de Vision Humana
- **Simple** [[*En Vivo*]](https://vladmandic.github.io/human/demo/typescript/index.html) [[*Detalles*]](https://github.com/vladmandic/human/tree/main/demo/typescript): Demo simple de procesamiento de WebCam en TypeScript
- **Embebido** [[*En Vivo*]](https://vladmandic.github.io/human/demo/video/index.html) [[*Detalles*]](https://github.com/vladmandic/human/tree/main/demo/video/index.html): Demo aún más simple con código pequeño embebido en archivo HTML
- **Detección Facial** [[*En Vivo*]](https://vladmandic.github.io/human/demo/facedetect/index.html) [[*Detalles*]](https://github.com/vladmandic/human/tree/main/demo/facedetect): Extrae rostros de imágenes y procesa detalles
- **Coincidencia Facial** [[*En Vivo*]](https://vladmandic.github.io/human/demo/facematch/index.html) [[*Detalles*]](https://github.com/vladmandic/human/tree/main/demo/facematch): Extrae rostros de imágenes, calcula descriptores faciales y similitudes y los compara con una base de datos conocida
- **ID Facial** [[*En Vivo*]](https://vladmandic.github.io/human/demo/faceid/index.html) [[*Detalles*]](https://github.com/vladmandic/human/tree/main/demo/faceid): Ejecuta múltiples verificaciones para validar entrada de webcam antes de realizar coincidencia facial con rostros en IndexDB
- **Multi-hilo** [[*En Vivo*]](https://vladmandic.github.io/human/demo/multithread/index.html) [[*Detalles*]](https://github.com/vladmandic/human/tree/main/demo/multithread): Ejecuta cada módulo de Vision Humana en un web worker separado para el máximo rendimiento posible  
- **NextJS** [[*En Vivo*]](https://vladmandic.github.io/human-next/out/index.html) [[*Detalles*]](https://github.com/vladmandic/human-next): Usa Vision Humana con TypeScript, NextJS y ReactJS
- **ElectronJS** [[*Detalles*]](https://github.com/vladmandic/human-electron): Usa Vision Humana con TypeScript y ElectonJS para crear aplicaciones multiplataforma independientes
- **Análisis 3D con BabylonJS** [[*En Vivo*]](https://vladmandic.github.io/human-motion/src/index.html) [[*Detalles*]](https://github.com/vladmandic/human-motion): Seguimiento y visualización 3D de cabeza, rostro, ojo, cuerpo y mano
- **Seguimiento de Modelo Virtual VRM con Three.JS** [[*En Vivo*]](https://vladmandic.github.io/human-three-vrm/src/human-vrm.html) [[*Detalles*]](https://github.com/vladmandic/human-three-vrm): Modelo VR con seguimiento de cabeza, rostro, ojo, cuerpo y mano  
- **Seguimiento de Modelo Virtual VRM con BabylonJS** [[*En Vivo*]](https://vladmandic.github.io/human-bjs-vrm/src/index.html) [[*Detalles*]](https://github.com/vladmandic/human-bjs-vrm): Modelo VR con seguimiento de cabeza, rostro, ojo, cuerpo y mano  

### Demos para NodeJS

*Los demos de NodeJS pueden requerir dependencias adicionales que se usan para decodificar entradas*  
*Ver el encabezado de cada demo para ver sus dependencias ya que no se instalan automáticamente con `Vision Humana`*

- **Main** [[*Details*]](https://github.com/vladmandic/human/tree/main/demo/nodejs/node.js): Process images from files, folders or URLs using native methods  
- **Canvas** [[*Details*]](https://github.com/vladmandic/human/tree/main/demo/nodejs/node-canvas.js): Process image from file or URL and draw results to a new image file using `node-canvas`  
- **Video** [[*Details*]](https://github.com/vladmandic/human/tree/main/demo/nodejs/node-video.js): Processing of video input using `ffmpeg`  
- **WebCam** [[*Details*]](https://github.com/vladmandic/human/tree/main/demo/nodejs/node-webcam.js): Processing of webcam screenshots using `fswebcam`  
- **Events** [[*Details*]](https://github.com/vladmandic/human/tree/main/demo/nodejs/node-event.js): Showcases usage of `Human` eventing to get notifications on processing
- **Similarity** [[*Details*]](https://github.com/vladmandic/human/tree/main/demo/nodejs/node-similarity.js): Compares two input images for similarity of detected faces
- **Face Match** [[*Details*]](https://github.com/vladmandic/human/tree/main/demo/facematch/node-match.js): Parallel processing of face **match** in multiple child worker threads
- **Multiple Workers** [[*Details*]](https://github.com/vladmandic/human/tree/main/demo/multithread/node-multiprocess.js): Runs multiple parallel `human` by dispaching them to pool of pre-created worker processes  
- **Dynamic Load** [[*Details*]](https://github.com/vladmandic/human/tree/main/demo/nodejs): Loads Human dynamically with multiple different desired backends  

## Project pages

- [**Code Repository**](https://github.com/vladmandic/human)
- [**NPM Package**](https://www.npmjs.com/package/@vladmandic/human)
- [**Issues Tracker**](https://github.com/vladmandic/human/issues)
- [**TypeDoc API Specification - Main class**](https://vladmandic.github.io/human/typedoc/classes/Human.html)
- [**TypeDoc API Specification - Full**](https://vladmandic.github.io/human/typedoc/)
- [**Change Log**](https://github.com/vladmandic/human/blob/main/CHANGELOG.md)
- [**Current To-do List**](https://github.com/vladmandic/human/blob/main/TODO.md)

## Wiki pages

- [**Home**](https://github.com/vladmandic/human/wiki)
- [**Installation**](https://github.com/vladmandic/human/wiki/Install)
- [**Usage & Functions**](https://github.com/vladmandic/human/wiki/Usage)
- [**Configuration Details**](https://github.com/vladmandic/human/wiki/Config)
- [**Result Details**](https://github.com/vladmandic/human/wiki/Result)
- [**Customizing Draw Methods**](https://github.com/vladmandic/human/wiki/Draw)
- [**Caching & Smoothing**](https://github.com/vladmandic/human/wiki/Caching)
- [**Input Processing**](https://github.com/vladmandic/human/wiki/Image)
- [**Face Recognition & Face Description**](https://github.com/vladmandic/human/wiki/Embedding)
- [**Gesture Recognition**](https://github.com/vladmandic/human/wiki/Gesture)
- [**Common Issues**](https://github.com/vladmandic/human/wiki/Issues)
- [**Background and Benchmarks**](https://github.com/vladmandic/human/wiki/Background)

## Additional notes

- [**Comparing Backends**](https://github.com/vladmandic/human/wiki/Backends)
- [**Development Server**](https://github.com/vladmandic/human/wiki/Development-Server)
- [**Build Process**](https://github.com/vladmandic/human/wiki/Build-Process)
- [**Adding Custom Modules**](https://github.com/vladmandic/human/wiki/Module)
- [**Performance Notes**](https://github.com/vladmandic/human/wiki/Performance)
- [**Performance Profiling**](https://github.com/vladmandic/human/wiki/Profiling)
- [**Platform Support**](https://github.com/vladmandic/human/wiki/Platforms)
- [**Diagnostic and Performance trace information**](https://github.com/vladmandic/human/wiki/Diag)
- [**Dockerize Human applications**](https://github.com/vladmandic/human/wiki/Docker)
- [**List of Models & Credits**](https://github.com/vladmandic/human/wiki/Models)
- [**Models Download Repository**](https://github.com/vladmandic/human-models)
- [**Security & Privacy Policy**](https://github.com/vladmandic/human/blob/main/SECURITY.md)
- [**License & Usage Restrictions**](https://github.com/vladmandic/human/blob/main/LICENSE)

<br>

*See [**issues**](https://github.com/vladmandic/human/issues?q=) and [**discussions**](https://github.com/vladmandic/human/discussions) for list of known limitations and planned enhancements*  

*Suggestions are welcome!*  

<hr><br>

## App Examples

Visit [Examples gallery](https://vladmandic.github.io/human/samples/index.html) for more examples  
[<img src="assets/samples.jpg" width="640"/>](assets/samples.jpg)

<br>

## Options

All options as presented in the demo application...  
[demo/index.html](demo/index.html)  
[<img src="assets/screenshot-menu.png"/>](assets/screenshot-menu.png)

<br>

**Results Browser:**  
[ *Demo -> Display -> Show Results* ]<br>
[<img src="assets/screenshot-results.png"/>](assets/screenshot-results.png)

<br>

## Advanced Examples

1. **Face Similarity Matching:**  
Extracts all faces from provided input images,  
sorts them by similarity to selected face  
and optionally matches detected face with database of known people to guess their names
> [demo/facematch](demo/facematch/index.html)  

[<img src="assets/screenshot-facematch.jpg" width="640"/>](assets/screenshot-facematch.jpg)

2. **Face Detect:**  
Extracts all detect faces from loaded images on-demand and highlights face details on a selected face  
> [demo/facedetect](demo/facedetect/index.html)  

[<img src="assets/screenshot-facedetect.jpg" width="640"/>](assets/screenshot-facedetect.jpg)

3. **Face ID:**  
Performs validation check on a webcam input to detect a real face and matches it to known faces stored in database
> [demo/faceid](demo/faceid/index.html)  

[<img src="assets/screenshot-faceid.jpg" width="640"/>](assets/screenshot-faceid.jpg)

<br>

4. **3D Rendering:**  
> [human-motion](https://github.com/vladmandic/human-motion)

[<img src="https://github.com/vladmandic/human-motion/raw/main/assets/screenshot-face.jpg" width="640"/>](https://github.com/vladmandic/human-motion/raw/main/assets/screenshot-face.jpg)
[<img src="https://github.com/vladmandic/human-motion/raw/main/assets/screenshot-body.jpg" width="640"/>](https://github.com/vladmandic/human-motion/raw/main/assets/screenshot-body.jpg)
[<img src="https://github.com/vladmandic/human-motion/raw/main/assets/screenshot-hand.jpg" width="640"/>](https://github.com/vladmandic/human-motion/raw/main/assets/screenshot-hand.jpg)

<br>

5. **VR Model Tracking:**  
> [human-three-vrm](https://github.com/vladmandic/human-three-vrm)  
> [human-bjs-vrm](https://github.com/vladmandic/human-bjs-vrm)  

[<img src="https://github.com/vladmandic/human-three-vrm/raw/main/assets/human-vrm-screenshot.jpg" width="640"/>](https://github.com/vladmandic/human-three-vrm/raw/main/assets/human-vrm-screenshot.jpg)


6. **Human as OS native application:**
> [human-electron](https://github.com/vladmandic/human-electron)

<br>

**468-Point Face Mesh Defails:**  
(view in full resolution to see keypoints)  

[<img src="assets/facemesh.png" width="400"/>](assets/facemesh.png)

<br><hr><br>

## Inicio Rápido

Simplemente carga `Vision Humana` (*versión IIFE*) directamente desde un CDN en la nube en tu archivo HTML:  
(elige uno: `jsdelirv`, `unpkg` o `cdnjs`)

```html
<!DOCTYPE HTML>
<script src="https://cdn.jsdelivr.net/npm/@vladmandic/human/dist/human.js"></script>
<script src="https://unpkg.dev/@vladmandic/human/dist/human.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/human/3.0.0/human.js"></script>
```

For details, including how to use `Browser ESM` version or `NodeJS` version of `Human`, see [**Installation**](https://github.com/vladmandic/human/wiki/Install)

<br>

## Code Examples

Simple app that uses Human to process video input and  
draw output on screen using internal draw helper functions

```js
// create instance of human with simple configuration using default values
const config = { backend: 'webgl' };
const human = new Human.Human(config);
// select input HTMLVideoElement and output HTMLCanvasElement from page
const inputVideo = document.getElementById('video-id');
const outputCanvas = document.getElementById('canvas-id');

function detectVideo() {
  // perform processing using default configuration
  human.detect(inputVideo).then((result) => {
    // result object will contain detected details
    // as well as the processed canvas itself
    // so lets first draw processed frame on canvas
    human.draw.canvas(result.canvas, outputCanvas);
    // then draw results on the same canvas
    human.draw.face(outputCanvas, result.face);
    human.draw.body(outputCanvas, result.body);
    human.draw.hand(outputCanvas, result.hand);
    human.draw.gesture(outputCanvas, result.gesture);
    // and loop immediate to the next frame
    requestAnimationFrame(detectVideo);
    return result;
  });
}

detectVideo();
```

or using `async/await`:

```js
// create instance of human with simple configuration using default values
const config = { backend: 'webgl' };
const human = new Human(config); // create instance of Human
const inputVideo = document.getElementById('video-id');
const outputCanvas = document.getElementById('canvas-id');

async function detectVideo() {
  const result = await human.detect(inputVideo); // run detection
  human.draw.all(outputCanvas, result); // draw all results
  requestAnimationFrame(detectVideo); // run loop
}

detectVideo(); // start loop
```

or using `Events`:

```js
// create instance of human with simple configuration using default values
const config = { backend: 'webgl' };
const human = new Human(config); // create instance of Human
const inputVideo = document.getElementById('video-id');
const outputCanvas = document.getElementById('canvas-id');

human.events.addEventListener('detect', () => { // event gets triggered when detect is complete
  human.draw.all(outputCanvas, human.result); // draw all results
});

function detectVideo() {
  human.detect(inputVideo) // run detection
    .then(() => requestAnimationFrame(detectVideo)); // upon detect complete start processing of the next frame
}

detectVideo(); // start loop
```

or using interpolated results for smooth video processing by separating detection and drawing loops:

```js
const human = new Human(); // create instance of Human
const inputVideo = document.getElementById('video-id');
const outputCanvas = document.getElementById('canvas-id');
let result;

async function detectVideo() {
  result = await human.detect(inputVideo); // run detection
  requestAnimationFrame(detectVideo); // run detect loop
}

async function drawVideo() {
  if (result) { // check if result is available
    const interpolated = human.next(result); // get smoothened result using last-known results
    human.draw.all(outputCanvas, interpolated); // draw the frame
  }
  requestAnimationFrame(drawVideo); // run draw loop
}

detectVideo(); // start detection loop
drawVideo(); // start draw loop
```

or same, but using built-in full video processing instead of running manual frame-by-frame loop:

```js
const human = new Human(); // create instance of Human
const inputVideo = document.getElementById('video-id');
const outputCanvas = document.getElementById('canvas-id');

async function drawResults() {
  const interpolated = human.next(); // get smoothened result using last-known results
  human.draw.all(outputCanvas, interpolated); // draw the frame
  requestAnimationFrame(drawResults); // run draw loop
}

human.video(inputVideo); // start detection loop which continously updates results
drawResults(); // start draw loop
```

or using built-in webcam helper methods that take care of video handling completely:

```js
const human = new Human(); // create instance of Human
const outputCanvas = document.getElementById('canvas-id');

async function drawResults() {
  const interpolated = human.next(); // get smoothened result using last-known results
  human.draw.canvas(outputCanvas, human.webcam.element); // draw current webcam frame
  human.draw.all(outputCanvas, interpolated); // draw the frame detectgion results
  requestAnimationFrame(drawResults); // run draw loop
}

await human.webcam.start({ crop: true });
human.video(human.webcam.element); // start detection loop which continously updates results
drawResults(); // start draw loop
```

And for even better results, you can run detection in a separate web worker thread

<br><hr><br>

## Inputs

`Human` library can process all known input types:  

- `Image`, `ImageData`, `ImageBitmap`, `Canvas`, `OffscreenCanvas`, `Tensor`,  
- `HTMLImageElement`, `HTMLCanvasElement`, `HTMLVideoElement`, `HTMLMediaElement`

Additionally, `HTMLVideoElement`, `HTMLMediaElement` can be a standard `<video>` tag that links to:

- WebCam on user's system
- Any supported video type  
  e.g. `.mp4`, `.avi`, etc.
- Additional video types supported via *HTML5 Media Source Extensions*  
  e.g.: **HLS** (*HTTP Live Streaming*) using `hls.js` or **DASH** (*Dynamic Adaptive Streaming over HTTP*) using `dash.js`
- **WebRTC** media track using built-in support  

<br><hr><br>

## Detailed Usage

- [**Wiki Home**](https://github.com/vladmandic/human/wiki)
- [**List of all available methods, properies and namespaces**](https://github.com/vladmandic/human/wiki/Usage)
- [**TypeDoc API Specification - Main class**](https://vladmandic.github.io/human/typedoc/classes/Human.html)
- [**TypeDoc API Specification - Full**](https://vladmandic.github.io/human/typedoc/)

    ![typedoc](assets/screenshot-typedoc.png)

<br><hr><br>

## TypeDefs

`Human` is written using TypeScript strong typing and ships with full **TypeDefs** for all classes defined by the library bundled in `types/human.d.ts` and enabled by default  

*Note*: This does not include embedded `tfjs`  
If you want to use embedded `tfjs` inside `Human` (`human.tf` namespace) and still full **typedefs**, add this code:

> import type * as tfjs from '@vladmandic/human/dist/tfjs.esm';  
> const tf = human.tf as typeof tfjs;

This is not enabled by default as `Human` does not ship with full **TFJS TypeDefs** due to size considerations  
Enabling `tfjs` TypeDefs as above creates additional project (dev-only as only types are required) dependencies as defined in `@vladmandic/human/dist/tfjs.esm.d.ts`:

> @tensorflow/tfjs-core, @tensorflow/tfjs-converter, @tensorflow/tfjs-backend-wasm, @tensorflow/tfjs-backend-webgl


<br><hr><br>

## Default models

Default models in Human library are:

- **Face Detection**: *MediaPipe BlazeFace Back variation*
- **Face Mesh**: *MediaPipe FaceMesh*
- **Face Iris Analysis**: *MediaPipe Iris*
- **Face Description**: *HSE FaceRes*
- **Emotion Detection**: *Oarriaga Emotion*
- **Body Analysis**: *MoveNet Lightning variation*
- **Hand Analysis**: *HandTrack & MediaPipe HandLandmarks*
- **Body Segmentation**: *Google Selfie*
- **Object Detection**: *CenterNet with MobileNet v3*

Note that alternative models are provided and can be enabled via configuration  
For example, body pose detection by default uses *MoveNet Lightning*, but can be switched to *MultiNet Thunder* for higher precision or *Multinet MultiPose* for multi-person detection or even *PoseNet*, *BlazePose* or *EfficientPose* depending on the use case  

For more info, see [**Configuration Details**](https://github.com/vladmandic/human/wiki/Configuration) and [**List of Models**](https://github.com/vladmandic/human/wiki/Models)

<br><hr><br>

## Diagnostics

- [How to get diagnostic information or performance trace information](https://github.com/vladmandic/human/wiki/Diag)

<br><hr><br>

`Human` library is written in [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) **5.1** using [TensorFlow/JS](https://www.tensorflow.org/js/) **4.10** and conforming to latest `JavaScript` [ECMAScript version 2022](https://262.ecma-international.org/) standard  

Build target for distributables is `JavaScript` [EMCAScript version 2018](https://262.ecma-international.org/9.0/)  

<br>

For details see [**Wiki Pages**](https://github.com/vladmandic/human/wiki)  
and [**API Specification**](https://vladmandic.github.io/human/typedoc/classes/Human.html)

<br>

---

## 👨‍💻 Autor y Filosofía

### **Enmanuel Reynoso Salazar**
Creador de **Visión Humana** - Versión completamente en español del proyecto Human

*Basado en el excelente trabajo de Vladimir Mandic con el proyecto original [Human](https://github.com/vladmandic/human)*

### 🎯 Principios del Proyecto

✅ **100% Procesamiento Local**  
Todo el procesamiento de IA ocurre en tu dispositivo. Ningún dato de video, imagen o información personal sale de tu máquina.

✅ **Sin Envío a la Nube**  
No hay servidores externos, APIs en la nube ni servicios de terceros que procesen tus datos. Tu privacidad es absoluta.

✅ **Detección Solamente**  
El sistema está diseñado para detectar y analizar en tiempo real, no para almacenar, guardar o compartir información.

✅ **Código Abierto y Transparente**  
Todo el código es open source. Puedes revisar, auditar y verificar que cumplimos con nuestros principios de privacidad.

✅ **Documentación en Español**  
Interfaz, documentación, ejemplos y guías completamente en español para la comunidad hispanoablante.

### 🛡️ Compromiso de Privacidad

Este proyecto fue creado con la privacidad como prioridad #1:
- ❌ No hay cookies de tracking
- ❌ No hay analytics que envíen datos
- ❌ No hay integración con servicios en la nube
- ❌ No hay almacenamiento de datos personales
- ✅ Todo el procesamiento es local y en tiempo real
- ✅ Compatible con modo offline completo

### 💬 Contacto y Contribuciones

- **Repositorio**: [Vision-Humana en GitHub](https://github.com/EnmanuelReynoso23/Vision-Humana)
- **Issues**: [Reportar bugs o sugerencias](https://github.com/EnmanuelReynoso23/Vision-Humana/issues)
- **Plan de Mejoras**: [Ver roadmap del proyecto](PLAN_DE_MEJORAS.md)
- **Demo en Vivo**: [https://vision-humana.vercel.app](https://vision-humana.vercel.app)

Las contribuciones son bienvenidas. Si quieres mejorar el proyecto:
1. 🐛 Reporta bugs o problemas
2. 💡 Sugiere nuevas funcionalidades
3. 🔧 Envía pull requests
4. 📝 Mejora la documentación
5. 🌍 Ayuda con traducciones

---

### 🚀 Proyecto Original

Este proyecto es un fork en español del excelente [Human](https://github.com/vladmandic/human) creado por Vladimir Mandic.

[![](https://img.shields.io/static/v1?label=Proyecto%20Original&message=Human%20by%20Vladimir%20Mandic&logo=GitHub&color=%23fe8e86)](https://github.com/vladmandic/human)

---

**© 2025 Enmanuel Reynoso Salazar** | Licencia MIT | Procesamiento 100% Local | Sin Envío de Datos
