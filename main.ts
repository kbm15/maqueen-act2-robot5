basic.showIcon(IconNames.Giraffe)
music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3054, 2162, 255, 0, 600, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
	
})
