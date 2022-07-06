# Actividad 2 Robot 5
```template
basic.showIcon(IconNames.Giraffe)
music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3054, 2162, 255, 0, 600, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
	
})



```
## ~avatar avatar

Nuestro problema se resuelve utilizando el bloque de entrada, que permite ejecutar una instruccion al pulsar un determinado boton.



## Paso 2

Arrastramos el bloque pulsar boton de la seccion entrada.
```block 
input.onButtonPressed(Button.AB, function () {})
```

## Paso 3
Colocamos el codigo del bloque 'mostrar color' dentro del bloque 'pulsar boton' y modifica el color.
```block 
input.onButtonPressed(Button.aB, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
```