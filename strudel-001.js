// 001
// anything just play it loud okay
// 2026-01-13

setcpm(140/4)
// cycle has 4 beats, so 35 cpm is 140bpm

// $: s("bd*4")
$: s("bd:2 bd:2 bd:2 bd:2").gain(1.0)
// $: s("hh:2!4")
// $: s(" - hh*2 {hh hh*2 -} hh*2")
$: s(" - hh*2 <{hh hh*2 -} <hh hh*2 ->> hh*2")
$: s("{<sd sd*2 ->}*4").gain(0.5)

$: note("{<a b c d>}*16").gain("1.5 1.2 1.0")

// ah, the <> syntax actual specifies alternates.
// {} is the syntax for subsequences.

// questions:
// what does the $ actually mean?
// presumably s is an alias for sound.
// are there better ways to create multiple tracks/layers?
// how do I adjust the time a sound takes, e.g. double it?
// is there a clearer way to show very nested patterns?
// how do i put something on the off beat?
// how do i change the number of beats per cycle?