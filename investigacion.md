# Investigación
Este archivo contiene apuntes tomados durante el desarrollo de la app.
Contiene enlaces a ejemplos y documentación de varios componentes y librerías.
También hay notas de otras herramientas utilizadas.

La app está programada con React Native. Existe un repositorio anterior donde la app se comenzó a programar con Unity.
El nombre del repo es KintachuwinUnity. Se hizo privado, no contiene mucha info útil en este momento.  

## Preparar el entorno
Se requiere Node v12 o mayor. Para poder usar diferentes versiones en otros proyectos,
es recomendable instalar nvm. Antes es necesario desinstalar (por completo) node.  
https://www.nubo.eu/Install-Multiple-Node-Versions-On-Windows/  
https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows  
https://github.com/coreybutler/nvm-windows  
Ejecutar terminal como administrador al cambiar versión de node.  
No ejecutar como administrador al usar react-native. Para ver las versiones instaladas ejecutar `nvm list` 

```
$ nvm list

  * 12.20.0 (Currently using 64-bit executable)
    10.23.0
```

Se ha seguido la documentación de React-Native  
https://reactnative.dev/docs/getting-started  
https://reactnative.dev/docs/environment-setup  

Proyecto creado con react-native init  
```
npx react-native init Kintachuwin
```  

## Correr el proyecto
Conectar cel con depuración USB activada  
```
$ adb devices
```
Aceptar permiso en el teléfono  
```
$ adb devices
List of devices attached
LMX430UCW8AIMFLJ5T      device
```
Ejecutar la app  
```
$ npx react-native run-android
```  
Se abrirá otra terminal para la aplicación Metro. La primera vez que corre es posible que 
aparezcan errores y no se instale en el celular, pero al ejecutar otra vez ya funciona.  

Si no se abre la ventana Metro, ejecutar en otra terminal
```
$ npx react-native start
```  

Editar App.js, los cambios se reflejan en pocos segundos.  

Temas por estudiar
- [x] Texto y fuentes
- [x] Reproducir sonido
- [x] Reproducir stream de video (ej. Youtube o Vimeo)
- [x] Navegar entre páginas
- [x] Generar apk
- [x] Automatizar creación de listas
- [x] Cambiar nombre de la app
- [x] Cambiar icono de la app
- [ ] Subir a Google Play

## Usar fuentes personalizadas
Revisar la siguiente guía  
https://medium.com/@mehrankhandev/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4  
Es necesario reiniciar el packer, si las fuentes se instalan mientras se está depurando la app.  

Estas son las fuentes que están pre-instaladas  
https://github.com/react-native-training/react-native-fonts  

## Reproducir sonido
Poner archivos en `android/app/src/main/res/raw/`. Sin subdirectorios y nombres en minúsculas.  

Esta es la librería más popular, pero en las pruebas deja escucharse después de reproducir varios archivos  
https://www.npmjs.com/package/react-native-sound  
https://alexb72.medium.com/how-to-add-sound-to-react-native-8ef152ba1a6  
https://stackoverflow.com/questions/53737196/how-to-play-sound-in-react-native  

La documentación de la librería tiene enlaces a otras librerías
de audio y video que tienen actualizaciones más recientes.
react-native-audio-toolkit parece buena opción, pero la instalación es complicada.  
https://github.com/react-native-audio-toolkit/react-native-audio-toolkit  
https://github.com/react-native-video/react-native-video  

Esta es la extensión elegida.  
https://developer.aliyun.com/mirror/npm/package/react-native-sound-player  
Genera una instancia global del reproductor, por lo que solo se 
reproduce un sonido a la vez, así evitamos crear un componente propio.  

El sonido se sigue reproduciendo en segundo plano. Para detenerlo se usa `AppState`.
Cuando el estado cambia (entre `'background'` y `'active'`) se llama el método `stop`.  
https://reactnative.dev/docs/appstate  
https://stackoverflow.com/questions/46662004/how-to-know-if-a-react-native-app-goes-to-background  

Para detener el sonido cuando cambia la página o pantalla en navigation se usa
el evento (prop) `onStateChange` de `<NavigationContainer>`.
Cuando la página cambia se llama el método `stop`.  
https://stackoverflow.com/questions/64432944/how-to-implement-callback-function-when-screen-change-in-react-native  
https://reactnavigation.org/docs/navigation-container  
Otra opción más complicada sería escuchar eventos en cada página o pantalla  
https://reactnavigation.org/docs/navigation-events/  

## Repasar margin y padding
Margen es el espacio alrededor del elemento. Padding es el espacio del borde del elemento a los elementos internos.  
https://blog.hubspot.com/website/css-margin-vs-padding  
https://www.w3schools.com/css/css_boxmodel.asp  

## Botones  
No se puede cambiar el color de fondo del botón predefinido en react-native.
Para cambiar el estilo del botón y del texto se puede armar un botón propio.
La documentación de Button tiene un enlace al código fuente para tomarlo
como base y otro enlace a botones creados por la comunidad.  
https://reactnative.dev/docs/button  
https://js.coach/package/react-native-button  

Una forma fácil de crear un botón es usar un touchable con texto anidado.  

## Ajustar altura de imágenes automáticamente
Simple componente con ancho fijo
```
const Imgn = (props) => {
    const i = Image.resolveAssetSource(props.source);
    const r = i.height / i.width; //ratio
    const w = props.width; //base width
    const h = w * r; //adjusted height
    return(
        <View>
            <Image source={props.source} style={{width:w, height:h}} />
        </View>
    );
}
```
Usar como
```
<Imgn source={require('../assets/logo.png')} width={320} />
```

Documentación de Image  
https://reactnative.dev/docs/image  

Ajustar al ancho de la ventana  
https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native?rq=1  

## Reproducir videos de Youtube
La librería más popular para reproducir videos de Youtube es ```react-native-youtube```.
En Android es necesario tener la app de Youtube instalada. Las instrucciones son un poco complicadas.
Los videos muestran el botón de compartir y no se puede poner otro elemento encima de la zona donde se
reproduce un video.  
https://www.npmjs.com/package/react-native-youtube  

Aquí mencionan 3 opciones. La primera es ```react-native-webview``` que solo
reproduce videos sin copyright. La segunda es ```react-native-youtube```
que a veces necesita permisos y tener la app de YT instalada. La tercera
es ```react-native-youtube-iframe```, solo reproduce videos sin copyright,
se ha probado y al parecer no es posible desactivar la opción de compartir
videos. La cuarta y última opción es usar ```webview``` e insertar un iframe
generado en otra página web, es demasiado complicado.  
https://surajmdurgad.medium.com/embedding-youtube-videos-in-a-react-native-app-8c556a18fd76  

La librería ```react-native-youtube-iframe``` es fácil de usar y no aparecieron
errores en las pruebas. Sin embargo, no se puede desactivar la opción de compartir
los videos y no implementa la API para recibir autorización de reproducir videos
privados.  
https://lonelycpp.github.io/2020/03/15/react-native-youtube/  
https://lonelycpp.github.io/react-native-youtube-iframe/  
Tal vez se puede ocultar información, pero no parece fácil, algunas soluciones ya no funcionan  
https://stackoverflow.com/questions/33373880/is-it-possible-to-only-remove-the-watch-later-and-share-buttons-from-youtube  
https://www.qualtrics.com/community/discussion/9551/how-to-get-rid-of-information-watch-later-and-share-at-the-top-of-a-youtube-video-and-logo  
https://www.embedplus.com/how-to-disable-the-watch-later-and-share-buttons-on-youtube-embeds.aspx  

Una solución fácil para no poder compartir, es bloquear la parte superior de la zona del video
con un elemento touchable transparente.  
https://github.com/LonelyCpp/react-native-youtube-iframe/issues/11  

Simular pantalla completa cuando inicia el video  
https://github.com/LonelyCpp/react-native-youtube-iframe/issues/62  

## Reproducir streams de video de otras fuentes
La segunda opción es Vimeo. Solo hay una librería  
https://github.com/Myagi/react-native-vimeo  
Utiliza una página de Github para comunicarse con la API de Vimeo. No necesitamos usar la API. No se ha probado.  

Parece complicado  
https://www.reddit.com/r/reactnative/comments/bfuwcx/react_native_vimeo_android/  
https://stackoverflow.com/questions/53220524/how-to-play-vimeo-videos-in-react-native  

Usando `webview` es muy fácil insertar videos de diferentes fuentes.  
https://github.com/react-native-webview/react-native-webview  

Los videos se pueden subir a BitChute o a Internet Archive.  

Se eligió BitChute y webview. En cada video se puede obtener un link para insertar,
pero los controles se ven muy pequeños en la app.  
Solución: Obtener el link directo del video (mp4), viendo el código fuente de la página.
Los controles se ven vien, pero es necesario desactivar la opción de descargar  
https://stackoverflow.com/questions/60144154/disable-download-in-react-native-webview  
Otras refs  
https://www.allowfullscreen.com/questions/25/allowfullscreen-has-no-effect  
https://embed.tube/embed-code-generator/bitchute/  

## Navegar entre páginas
El método más común para navegar entre páginas (o pantallas) es React Navigation.
Se intala como un conjunto de extensiones.  
https://reactnative.dev/docs/navigation  

Las páginas se pueden construir como una función o como una clase, igual que la app principal.
Si es una función, recibe como parámetro un objeto `{navigation}`.

Se pueden definir páginas en diferentes archivos y después importar en el archivo original  
https://github.com/react-navigation/react-navigation/issues/1241  

El archivo que define la página debe tener estos elementos  
```
import React from 'react'; //estrictamente necesario
import { ... } from 'react-native'; //componentes contenedores

function NombreDePagina({ navigation }) {
    return (
        <View>
            ...
        </View>
    );
}

export default NombreDePagina;
```
Después se importa en el archivo principal y se agrega a la función principal dentro de un elemento Stack.Screen
```
import NombreDePagina from './_archivo';
...
<Stack.Screen name="NombreParaMostrar" component={NomreDePagina} />
```

## Crear APK
Con estas instrucciones se puede generar un .apk  
https://dev.to/nitish173/how-to-generate-a-debug-apk-in-react-native-1gdg  
```
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android

./gradlew assembleDebug
```
Al terminar, el archivo se encuentra en `yourProject/android/app/build/outputs/apk/debug/app-debug.apk`  

Aquí hay instrucciones parecidas a las de la documentación con explicaciones más extensas  
https://www.instamobile.io/android-development/generate-react-native-release-build-android/  

La documentación tiene instrucciones para generar un Android App Bundle y 
publicar en Google Play, el archivo que se obtiene es un .aab  
https://reactnative.dev/docs/signed-apk-android  

En la compilación del .abb aparecieron errores relacionados con archivos duplicados. 
Para solucionarlo se borraron archivos de `/android/app/src/main/res/`  

- Carpetas con nombre drawable
- `app.json` dentro de la carpeta `raw`

Parece que no es el mejor método, pero funciona.  
Aquí aparece otro método (no se ha probado)  
https://stackoverflow.com/questions/53239705/react-native-error-duplicate-resources-android  

## Cambiar icono de app Android
Cambiar las imagenes de las carpetas mipmap* que se encuentran en 
`YourProject/android/app/src/main/res`  
https://aboutreact.com/react-native-change-app-icon/

https://easyappicon.com  
https://appicon.co  
https://makeappicon.com  

Los tamaños de los iconos por default van de 48x48px a 192x192px.  

## Notas
Comentar elemento en JSX  
```
{/*comment here*/}
```

Solucionar error EPERM  
http://bitstopixels.blogspot.com/2017/04/react-native-windows-10-eperm-operation.html  
```
cd android
./gradlew clean
```

Extensiones de VSCode  
https://medium.com/react-native-training/vscode-for-react-native-526ec4a368ce  

Formatos de assets (extensiones de archivo)  
https://github.com/facebook/metro/blob/master/packages/metro-config/src/defaults/defaults.js  

Experimentar con layout de forma interactiva  
https://yogalayout.com/playground/  

Clonar repo y correr proyecto  
Ejecutar `npm install`  
Opcional `react-native link` `cd ios && pod install`  
https://stackoverflow.com/questions/49410610/setup-a-cloned-react-native-project-created-via-react-native-init-command  

Renombrar app  
Parece un proceso complicado y pueden surgir varios errores  
https://stackoverflow.com/questions/34794679/change-app-name-in-react-native  
https://medium.com/the-react-native-log/how-to-rename-a-react-native-app-dafd92161c35  
https://www.npmjs.com/package/react-native-rename  

Detener todos los sonidos de react-native-sound  
Usar variables globales que hagan referencia al sonido que se está reproduciendo.
Se implementará después.  
https://stackoverflow.com/questions/49620303/react-native-sound-stop-all-sounds  

Mostrar nombres de archivos en una columna `ls -1`  

Eliminar tabs de texto  
https://www.gillmeister-software.com/online-tools/text/trim_lines-remove_spaces.aspx  
https://www.textcompare.org/text/remove-line-breaks-and-extra-spaces  

Mejor forma de poner padding en FlatList  
`contentContainerStyle={{ padding: 24 }}`  
https://stackoverflow.com/questions/46196242/react-native-flatlist-last-item-visibility-issue  

Escalar muchas imágenes usando imagemagick  
`convert "images/*.jpg[250x]" -set filename:base "%[basename]" "images/new_folder/%[filename:base].jpg"`  
https://askubuntu.com/questions/135477/how-can-i-scale-all-images-in-a-folder-to-the-same-width  
https://linuxconfig.org/batch-image-resize-using-linux-command-line  

Cabmiar nombre de archivos a minúsculas  
```
for i in $( ls | grep [A-Z] ); do mv -i $i `echo $i | tr 'A-Z' 'a-z'`; done
```  
alternativa  
```
for f in *; do mv "$f" "$f.tmp"; mv "$f.tmp" "`echo $f | tr "[:upper:]" "[:lower:]"`"; done
```  
https://linuxconfig.org/rename-all-files-from-uppercase-to-lowercase-characters  
https://stackoverflow.com/questions/7787029/how-do-i-rename-all-files-to-lowercase  

Cuadrícula dentro de FlatList  
Se puede aplicar después para las listas grandes  
https://dev.to/christiankohler/lessons-learned-from-building-a-grid-list-in-react-native-ckn  

API de React.js  
https://reactjs.org/docs/react-component.html  
https://reactjs.org/docs/hooks-effect.html  
https://reactjs.org/docs/hooks-reference.html  

Ejemplos de export  
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export  

Poner imagen de fondo  
https://reactnative.dev/docs/imagebackground  
ImageBackground hereda props de Image.  
```
import { ImageBackground } from "react-native";

<View style={styles.container}>
  <ImageBackground source={image} style={styles.image}>
    <Text style={styles.text}>Inside</Text>
  </ImageBackground>
</View>
```
Conditional rendering. Agregar componentes en base a condiciones.  
https://reactjs.org/docs/conditional-rendering.html  

`flexWrap` no se recomienda en `FlatList`, pero es posible usarlo si `flexDirection:'row'`  
Si la pantalla de Galería baja los frames, usar esta forma  
https://stackoverflow.com/questions/45526443/react-native-how-to-wrap-flatlist-items  

Ejemplo de `getItemLayout` en `FlatList`  
https://stackoverflow.com/questions/56416228/getitemlayout-in-react-native-flatlist  

Extra  
Tema alcanzado  
https://reactnative.dev/docs/navigation  
Los siguientes grupos de temas se han leído sin tratar de entenderlos:  
Inclusion, Performance.  
Tema al que se quiere llegar  
https://reactnative.dev/docs/signed-apk-android  

Ejemplos de apps hechas con React-Native  
https://github.com/ReactNativeNews/React-Native-Apps   

Checar estos temas  

https://reactnative.dev/docs/tutorial  
https://reactnative.dev/docs/style  
https://reactnative.dev/docs/flexbox  
https://reactnative.dev/docs/components-and-apis  
https://reactnative.dev/docs/navigation  
https://reactnative.dev/docs/network  
https://reactnative.dev/help  
